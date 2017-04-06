import { Component } from '@angular/core';
import { UnshiftService } from './unshift.service';
import { ComboService } from './combo.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UnshiftService, ComboService]
})
export class AppComponent {
   title = 'app works!';
  persons = [];
  sums = 0;
  combos = [];
  constructor(public unshiftService: UnshiftService, public comboService: ComboService) {

  }
  ngOnInit() {
    this.persons = this.unshiftService.persons();
    this.sums = this.unshiftService.sum();
    this.combos = this.comboService.dropdown();
  }
}
