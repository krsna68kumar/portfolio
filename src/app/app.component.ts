import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:any;
  ngOnInit(){
    this.foo();
    console.log(this.title);
    // this.boo();
  }

  foo(){
    setTimeout(()=>{
      this.title = 'Aravind oru loosu'
    },500)
  }

  boo(){
    setTimeout(()=>{
      console.log("3")
    },500)
  }
}
