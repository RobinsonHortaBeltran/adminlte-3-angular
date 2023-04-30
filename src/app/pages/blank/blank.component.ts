import {Component} from '@angular/core';
import { Router  } from '@angular/router';
@Component({
    selector: 'app-blank',
    templateUrl: './blank.component.html',
    styleUrls: ['./blank.component.scss']
})
export class BlankComponent {
  constructor(private route:Router){}
  newClient(){
    this.route.navigate(['client/new']);
  }
}
