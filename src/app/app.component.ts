import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes/recipe.model';
import { AcccountService } from './accounts.service';
import { UserService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [UserService]
})
export class AppComponent {

  // loadedFeature = 'recipe';

  // onNavigate(feature:string){
  //   this.loadedFeature = feature;
  // }

  // // onNavigate(feature: string) {
  // //   this.loadedFeature = feature;
  // // }

  // activeUsers = ['Max', 'Million'];
  // inactiveUsers = ['Heet', 'Jain'];

  // onSetToInactive(id: number) {
  //   this.inactiveUsers.push(this.activeUsers[id]);
  //   this.activeUsers.splice(id, 1);
  // }

  // onSetToActive(id: number) {
  //   this.activeUsers.push(this.activeUsers[id]);
  //   this.inactiveUsers.splice(id, 1);
  // }


  // accounts: { name: string, status: string }[] = [];
  // constructor(private accountService: AcccountService) {

  // }
  // ngOnInit(): void {
  //   this.accounts = this.accountService.accounts;
  // }

  // numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // oddNum = [1, 3, 5];
  // evenNum = [2, 4, 6, 8];
  // onlyOdd = false;
  // value = 20;


  // oddNumbers: number[] = [];
  // evenNumbers: number[] = [];

  // onStop(stopNumber: number) {
  //   if (stopNumber % 2 === 0) {
  //     this.evenNumbers.push(stopNumber)
  //     // console.log('Even', this.evenNumbers)
  //   }
  //   else {
  //     this.oddNumbers.push(stopNumber)
  //     // console.log('Odd', this.oddNumbers)
  //   }
  // }
  // serverElements = [{ type: 'server', name: 'TestServer', content: 'Just a Test!' }];
  // onServerAdded(serverData: { serverName: string, serverContent: string }) {
  //   this.serverElements.push({
  //     type: 'server',
  //     name: serverData.serverName,
  //     content: serverData.serverContent
  //   });
  // }
  // onBluePrintAdded(blueprintData: { serverName: string, serverContent: string }) {
  //   this.serverElements.push({
  //     type: 'blueprint',
  //     name: blueprintData.serverName,
  //     content: blueprintData.serverContent
  //   })
  // }
  // onChangeFirst() {
  //   this.serverElements[0].name = 'Changed!'
  // }
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
