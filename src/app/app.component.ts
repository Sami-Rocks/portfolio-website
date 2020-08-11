import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio-website';

  toHome(){
    document.getElementById("home").scrollIntoView({behavior:"smooth"})
  }
  toProjects(){
    document.getElementById("projects").scrollIntoView({behavior:"smooth"})
  }
  toContact(){
    document.getElementById("contact").scrollIntoView({behavior:"smooth"})
  }
}
