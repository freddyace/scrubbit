import { Component, OnInit } from '@angular/core';
import { ContentObserver } from '@angular/cdk/observers';

@Component({
  selector: 'app-my-locations',
  templateUrl: './my-locations.component.html',
  styleUrls: ['./my-locations.component.css',
  "../../../assets/bootstrap/css/bootstrap.min.css",
  "../../../assets/fonts/font-awesome.min.css",
  "../../../assets/css/Pricing-Table---EspacioBinariocom.css"
]
})
export class MyLocationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  log() {
    console.log("Test");
  }

}
