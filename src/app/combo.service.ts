import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable()
export class ComboService  {

  constructor(public logService: LogService) { }
  dropdown() {
    this.logService.log('Retrieving the dropdown combo');
    return ["Mr", "Mrs", "Ms"];
  }
}
