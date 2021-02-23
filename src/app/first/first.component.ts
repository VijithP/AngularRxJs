import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  @Input() valueFrist:string="";
  @Output() open=new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
    
  }
  clickOutput(value:string)
  {
    this.open.emit(value);
  }


}
