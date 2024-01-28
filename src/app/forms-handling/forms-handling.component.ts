import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms-handling',
  templateUrl: './forms-handling.component.html',
  styleUrl: './forms-handling.component.css'
})
export class FormsHandlingComponent {

  onSubmit(form :NgForm){
    console.log(form)
  }
  // above return form object!
}
 