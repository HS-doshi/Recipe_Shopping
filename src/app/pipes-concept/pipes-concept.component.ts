import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-concept',
  templateUrl: './pipes-concept.component.html',
  styleUrl: './pipes-concept.component.css',
})
export class PipesConceptComponent {

    appStatus = new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve('stable')
      },1000)
    })

    servers = [
      {
        name: 'Production Server',
        type : 'Medium',
        status : 'stable',
        date : new Date(15,1,2020)
      },
      {
        name: 'You"re best',
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
        name: 'Testing ',
        type : 'Small',
        status : 'stable',
        date : new Date(10,5,2021)
      },
    ];
    filteredStatus = '';
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
    onAddServer(){
      this.servers.push({
        type : 'Large',
          name : 'New Server',
          status : 'stable',
          date : new Date(26,1,24)
      })
    }
}
