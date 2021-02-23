import { Component,OnInit } from '@angular/core';
import { from } from 'rxjs';
import {tap} from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angularRxJs';
  inputvalue:string="Hai"
  /**
   *
   */
  constructor(private httpClient: HttpClient) {}


  ngOnInit()
  {

    this.httpClient.get('https://jsonplaceholder.typicode.com/todos/1').pipe(
      tap(x=>console.log(x))
    ).subscribe({
      next(response) { console.log(response); },
      error(err) { console.error('Error: ' + err); },
      complete() { console.log('Completed'); }
    });
  
  }

  openclick(event:string){
    this.inputvalue=event;
    alert(event);
  }



}
