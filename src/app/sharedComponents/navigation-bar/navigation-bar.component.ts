import { Component, OnInit } from '@angular/core';
import { constants } from 'buffer';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
})
export class NavigationBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.putEvents();
  }

  putEvents(){
    const menuDesktop = document.getElementById('desktop-menu');
    const navBartoggle = document.getElementById('toggle-action');

    // tslint:disable-next-line: only-arrow-functions
    navBartoggle.addEventListener('click', function(){
      menuDesktop.classList.toggle('active');
    });
  }

}
