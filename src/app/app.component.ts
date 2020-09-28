import { Component } from '@angular/core';
import { Router, Event, NavigationEnd } from "@angular/router";
import { NgwWowService } from "ngx-wow";
import { filter } from "rxjs/operators";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio-website';

  constructor(private router: Router, private wowService: NgwWowService) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        this.wowService.init();
      });

    this.router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });
  }

  private navigationInterceptor(event: Event): void {
    // if (event instanceof NavigationStart) {
    //   this._loadingBar.start();
    // }
    if (event instanceof NavigationEnd) {
      window.scrollTo(0, 0);
      // this._loadingBar.complete();
    }

    // Set loading state to false in both of the below events to hide the loader in case a request fails
    // if (event instanceof NavigationCancel) {
    //   this._loadingBar.stop();
    // }
    // if (event instanceof NavigationError) {
    //   this._loadingBar.stop();
    // }
  }

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
