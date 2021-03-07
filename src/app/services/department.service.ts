import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import{} from './../models/department'

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor() { }

  getDepartment()
  {
    return of(1,2,3,4);
  }




}
