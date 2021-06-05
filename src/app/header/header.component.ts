import { Component, OnInit, Renderer2 } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  isDark: boolean = false;
  toggled: boolean = false;

  constructor(private renderer: Renderer2) {
    window.addEventListener('resize', function (event) {
      let width = $(window).width();
      if (width > 800) {
        $('#nav').removeClass('collapsed');
      }
    }, true);
  }

  ngOnInit(): void {}

  setDarkTheme() {
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");
  }

  toggle() {
    $('#nav').toggleClass('collapsed');
  }

  ScrollIntoView(elem: string) {
    document.querySelector(elem).scrollIntoView({ behavior: 'smooth', block: 'start' });
    $('#nav').removeClass('collapsed');
  }
}
