import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-concept',
  templateUrl: './pipes-concept.component.html',
  styleUrl: './pipes-concept.component.css'
})
export class PipesConceptComponent {

    servers = [
      {
        name: 'Production Server',
        type : 'Medium',
        status : 'stable',
        date : new Date(15,1,2020)
      },
      {
        name: 'User Database',
        type : 'Large',
        status : 'stable',
        date : new Date(15,5,2018)
      },
      {
        name: 'Developement Server',
        type : 'Medium',
        status : 'offline',
        date : new Date(15,1,2017)
      },
      {
        name: 'Testing Environment Server',
        type : 'Small',
        status : 'stable',
        date : new Date(10,5,2021)
      },
    ];
    getStatusClasses(server : {
      instanceType : string,name :string , status : string,
      started : Date
    }){
      return{
        'list-group-item-success' : server.status === 'stable',
        'list-group-item-warning' : server.status === 'offline',
        'list-group-item-danger' : server.status === ' critical'
      }
    }
}
