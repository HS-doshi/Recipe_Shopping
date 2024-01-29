import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { __values } from 'tslib';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css',
})
export class ReactiveComponent implements OnInit {

  genders = ['Male', 'Female'];
  signupForm :FormGroup;
  forbiddenUsernames = ['Hello', 'Guys']

  ngOnInit(){
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email' : new FormControl(null,[Validators.required, Validators.email], this.forbiddenEmail),
      }),
      'gender' : new FormControl('Male'),
      'hobbies' : new FormArray([])
    });
    // this.signupForm.valueChanges.subscribe(
    //   (value)=>{console.log(value)}
    // )
    this.signupForm.statusChanges.subscribe(
      (status)=>{console.log(status)}
    )
    this.signupForm.setValue({
      'userData':{
        'username':'Max',
        'email' : 'abc@test.com'
      },
      'gender':'male',
      'hobbies':[]
    })
  }
  onSubmit(){
    console.log(this.signupForm)
    this.signupForm.reset();
  }
  onAddHobby(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies'))
    .push(control)
  }

  forbiddenNames(control : FormControl):{[s:string]:boolean}{
    if(this.forbiddenUsernames.indexOf(control.value) !== -1){
        return {'nameIsForbidden' : true};
    }
    return null;
  }
  get controls(){
    return(this.signupForm.get('hobbies') as FormArray).controls;
  }

  forbiddenEmail(control : FormControl):Promise<any>|Observable<any>{
    const promise = new Promise<any>((resolve,reject)=>{
      setTimeout(()=>{
        if(control.value ==='test@gmail.com'){
          resolve({'emailForbidden' : true});
        }
        else{
          resolve(null);
        }
      },1000);
    });
    return promise;
  }
}
