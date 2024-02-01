import { Component } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrl: './loading-spinner.component.css',
  template: '<div class="lds-ripple"><div></div><div></div></div>'
})
export class LoadingSpinnerComponent {

}
