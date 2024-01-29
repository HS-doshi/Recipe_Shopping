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
  genders = ['male','female'];
  defaultAns = 'sports'

  user = {
    username: '',
    email : '',
    gender : '',
    secret : '',
    questionAnswer : ''
  }
  submitted = false;
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
    this.submitted = true;
    this.user.username = this.signupForm.value.userdata.username;
    this.user.email = this.signupForm.value.userdata.email;
    this.user.gender = this.signupForm.value.gender;
    this.user.secret = this.signupForm.value.secret;
    this.user.questionAnswer = this.signupForm.value.questionAnswer;

    this.signupForm.reset();
  }
}
