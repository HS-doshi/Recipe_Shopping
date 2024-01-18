import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  serverElements = [{ type: 'server', name: 'TestServer', content: 'Just a Test!' }]

  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }
  onBluePrintAdded(blueprintData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    })
  }
  onChangeFirst() {
    this.serverElements[0].name = 'Changed!'
  }
  // onAddServer() {
  //   this.server.push('Another Server');
  // }
  // onRemoveServer(id: number) {
  //   {
  //     const position = id + 1;
  //     this.server.splice(position, 1)
  //   }
  // }
}
