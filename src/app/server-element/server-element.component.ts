import { AfterContentChecked, AfterContentInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentChecked,
  AfterContentInit {
  @Input('sevElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log('constructor called!')
  }
  // called when any changes detection.
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ng OnChanges Called!')
    console.log(changes)
  }
  ngOnInit(): void {
    console.log('ngOninit called!')
  }
  ngDoCheck(): void {
    console.log('ngDoCheck called!')
  }
  ngAfterContentInit(): void {
    console.log('ngAfter Content Init called!')
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContent checked called!')
  }
}
