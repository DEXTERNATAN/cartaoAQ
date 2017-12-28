import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  onActivate(e, scrollContainer) {
    // scrollContainer.scrollTop = 0;
    // document.body.scrollTop = 0;
    window.scrollTo(0, 0);
  }

}
