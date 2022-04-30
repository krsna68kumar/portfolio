import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  workArray:any[] = ["Project 1","Project 2","Project 3","Project 4","Project 5","Project 6"]
  constructor() { }

  ngOnInit(): void {
  }

}
