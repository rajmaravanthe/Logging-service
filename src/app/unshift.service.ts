import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable()
export class UnshiftService {

  person = [];
  constructor(public logService: LogService) { }
  sums = 0;
  persons() {
    this.logService.log("retrieving the Person data");
    return this.person = [{
      name: 'Kevin',
      salary: 123
    },
    {
      name: 'AB',
      salary: 234
    },
    {
      name: 'Yuvaraj',
      salary: 345
    }]
  }

  sum() {
    this.logService.log("adding the person salary");
    for (let i in this.person) {
      this.sums += this.person[i].salary;
    }
    return this.sums;
  }

}
