import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
  public title = "Pricing | My Site";
  constructor(private titleService:Title) {
    this.titleService.setTitle(this.title);
   }

  ngOnInit() {
  }
  
}
