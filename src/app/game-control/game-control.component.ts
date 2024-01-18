import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent implements OnInit {
  @Output() stop = new EventEmitter<number>();
  start;
  lastNumber = 0;

  constructor() {
  }
  ngOnInit(): void {

  }
  onStartGame() {
    this.start = setInterval(() => {
      this.stop.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }

  onPauseGame() {
    clearInterval(this.start)
  }
}
