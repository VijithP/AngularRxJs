import { Injectable } from '@angular/core';
import { of } from 'rxjs';
<<<<<<< HEAD
import{} from './../models/department'
=======
>>>>>>> develop

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
