import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div id="header">
    <img class="logo" src="./assets/images/logo.svg" alt="">
      <div class="left">
        <nav>
          <a routerLink="">Collections</a>
          <a routerLink="">Men</a>
          <a routerLink="">Women</a>
          <a routerLink="">About</a>
          <a routerLink="">Contact</a>
        </nav>
      </div>
      <div class="right">
        <nav>
          <a routerLink=""><img class="cart" src="./assets/images/icon-cart.svg" alt=""></a>
          <a routerLink=""><img class="avatar" src="./assets/images/image-avatar.png" alt=""></a>
        </nav>
      </div>
    </div>
  `,
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
