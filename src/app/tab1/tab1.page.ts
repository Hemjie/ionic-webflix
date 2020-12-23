import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PopularService } from '../services/popular.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  listPopular: any = [];

  constructor(
    private router: Router,
    private PopularService: PopularService) {}

  ngOnInit() {}

  ionViewWillEnter() { 
    this.listPopular = [];

    this.PopularService.getPopular().then(popularP => {
      this.listPopular = popularP['results'];
    });
  }

}
