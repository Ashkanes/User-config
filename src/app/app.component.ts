import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  accounts=[
    {name:"adminstative", status:'فعال'},
    {name:'tarannom',status:'نامشخص'},
    {name:'reza', status:'غیرفعال'}
  ];

  onAccountAdded(newAccount:{name:string,status:string}){
    this.accounts.push(newAccount);
  }
}
