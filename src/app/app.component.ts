import { HtmlTagDefinition } from '@angular/compiler';
import { Component } from '@angular/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  darkmode: boolean = true;
  isCollapsed: boolean = true;

  changeTheme(){
    this.darkmode = !this.darkmode;
  }

}
