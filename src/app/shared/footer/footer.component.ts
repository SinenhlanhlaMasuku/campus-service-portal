import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(public router: Router) {}
}


// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-top-navigation',
//   templateUrl: './top-navigation.component.html',
//   styleUrls: ['./top-navigation.component.css']
// })
// export class TopNavigationComponent {
//   constructor(public router: Router) {}
// }