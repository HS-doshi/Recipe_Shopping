import { NgFor } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms-handling',
  templateUrl: './forms-handling.component.html',
  styleUrl: './forms-handling.component.css'
})
export class FormsHandlingComponent {

  @ViewChild('f') signupForm : NgForm;
  answer :string = ''
  genders = ['male','female']
  // onSubmit(form :NgForm){
  //   console.log(form)
  // }
  // above return form object!

  suggestUserName(){
    const suggestName = 'Superuser';
    // this.signupForm.setValue({
    //   userdata:{
    //     username:suggestName,
    //     email:'',
    //   },
    //   secret: 'teacher',
    //   questionAnswer:'',
    //   gender: 'male'
    // })
    this.signupForm.form.patchValue({
      userdata:{
        username:suggestName
      }
    });
  }

  onSubmit(){
    console.log(this.signupForm)
  }
}
 