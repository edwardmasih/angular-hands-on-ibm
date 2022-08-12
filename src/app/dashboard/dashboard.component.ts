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
  productListChunks = [];

  constructor(private dashboardService: DashboardService) {}

  title = 'Card View Demo';

  gridColumns = 3;

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }

  async ngOnInit() {
    let perChunk = 3; //items per chunk
    await this.dashboardService.getAllData().subscribe((data: any) => {
      console.log(data);
      this.productList = data;

      // this.productListChunks = this.productList.reduce(
      //   (resultArray: any, item, index) => {
      //     const chunkIndex = Math.floor(index / perChunk);

      //     if (!resultArray[chunkIndex]) {
      //       resultArray[chunkIndex] = []; // start a new chunk
      //     }

      //     resultArray[chunkIndex].push(item);

      //     return resultArray;
      //   },
      //   []
      // );
      // console.log(this.productListChunks);
    });
  }
}
