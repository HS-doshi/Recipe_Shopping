import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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
        'email' : new FormControl(null,[Validators.required, Validators.email]),
      }),
      'gender' : new FormControl('Male'),
      'hobbies' : new FormArray([])
    });
  }
  onSubmit(){
    console.log(this.signupForm)
  }
  onAddHobby(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies'))
    .push(control)
  }

  forbiddenNames(control : FormControl):{[s:string]:boolean}{
    if(this.forbiddenUsernames.indexOf(control.value)){
        return {'nameIsForbidden' : true};
    }
    return {'nameIsForbidden' : false}
  }
  get controls(){
    return(this.signupForm.get('hobbies') as FormArray).controls;
  }
}
