import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cookpit',
  templateUrl: './cookpit.component.html',
  styleUrl: './cookpit.component.css'
})
export class CookpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  // newServerName = ''
  // newServerContent = '';

  // Below is local Reference.
  @ViewChild('serverContentInput') serverContentInput: ElementRef;
  constructor() { }

  ngOnInit(): void {

  }
  onAddServer(nameInput: HTMLInputElement) {
    // console.log(this.serverContentInput)
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    })
  }
  onAddBluePrint(nameInput: HTMLInputElement) {
    // console.log(this.serverContentInput)
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    })
  }
}
