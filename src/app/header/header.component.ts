import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  isDark: boolean = false;
  toggled: boolean = false;
  theme: any;

  constructor() {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    if (prefersDarkScheme.matches) {
      this.theme = document.body.classList.contains("light-theme") ? "light" : "dark";
    } else {
      this.theme = document.body.classList.contains("dark-theme") ? "dark" : "light";
    }
    window.addEventListener('resize', function (event) {
      let width = $(window).width();
      if (width > 800) {
        $('#nav').removeClass('collapsed');
      }
    }, true);
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",
      e => {
        if (e.matches) {
          const currentTheme = sessionStorage.getItem("theme");
          if(!(currentTheme != undefined && currentTheme == "light")){
          document.body.classList.add("dark-theme");
          document.body.classList.remove("light-theme");
          this.theme = "dark";
          }
        }
        else {
          document.body.classList.add("light-theme");
          document.body.classList.remove("dark-theme");
          this.theme = "light";
        }
      }
    );

  }

  ngOnInit(): void {
    const currentTheme = sessionStorage.getItem("theme");
    if (currentTheme == "dark") {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
      this.theme = "dark";
    } else if (currentTheme == "light") {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
      this.theme = "light";
    }
  }

  toggle() {
    $('#nav').toggleClass('collapsed');
  }

  ScrollIntoView(elem: string) {
    document.querySelector(elem).scrollIntoView({ behavior: 'smooth', block: 'start' });
    $('#nav').removeClass('collapsed');
  }

  download() {
    window.open('/assets/resume.pdf', '_blank');
  }
}
