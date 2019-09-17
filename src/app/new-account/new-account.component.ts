import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  @ViewChild('accountName',{static: false}) accountName:ElementRef;
  @ViewChild('status',{static: false}) status:ElementRef;
  @Output() accountAdded:EventEmitter<{name:string, status:string}> = new EventEmitter<{name:string, status:string}>();
  constructor() { }

  ngOnInit() {
  }

  onCreateAccount(){
    console.log(this.accountName);
    this.accountAdded.emit({name:this.accountName.nativeElement.value,status:this.status.nativeElement.value});
  }

}
