import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  user: any = sessionStorage.getItem('email');
  productList = [];

  constructor(private dashboardService: DashboardService) {}

  async ngOnInit() {
    await this.dashboardService.getAllData().subscribe((data: any) => {
      console.log(data);
      this.productList = data;
    });
  }
}
