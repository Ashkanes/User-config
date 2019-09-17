import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
@Input() account:{name:string, status:string};
@Input() id:number;

  constructor() { }

  ngOnInit() {
  }

}
