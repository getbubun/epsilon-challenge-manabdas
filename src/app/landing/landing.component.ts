import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  solutionData = [ 
    { label: 'Card Component', slug: '/task1' },
    { label: 'Form Elements', slug: '/task2' },
    { label: 'Table Functions', slug: '/task3' },
  ]
  constructor() { }

  ngOnInit() {
  }

}
