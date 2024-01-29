import { Component, OnInit, ViewChild } from '@angular/core';
import {  FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { CustomValidator } from './custom-validators';
@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrl: './assignment3.component.css'
})
export class Assignment3Component implements OnInit {

  projectForm : FormGroup;

  ngOnInit() {
      this.projectForm = new FormGroup({
          'project' : new FormControl(
            null,
            [Validators.required , CustomValidator.invalidProjectName],CustomValidator.asyncInvalidProjectNmae),
          'email' : new FormControl(null, [Validators.required, Validators.email]),
          'status' : new FormControl('finish')
      })
  }
  onSubmit(){
     console.log(this.projectForm.value)
  }
}
