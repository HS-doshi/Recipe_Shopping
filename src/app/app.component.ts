import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  server = [];

  onAddServer() {
    this.server.push('Another Server');
  }
  onRemoveServer(id: number) {
    {
      const position = id + 1;
      this.server.splice(position, 1)
    }
  }
}
