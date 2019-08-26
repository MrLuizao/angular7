import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { DataApiService } from 'src/app/services/data-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataApi: DataApiService){}
  public transfer = [];
  public transfers = '';

  PieChart=[];

  ngOnInit(){

    this.dataApi.getTransfers().subscribe(transfer =>{
      console.log('TRANSFERS', transfer);
      this.transfer = transfer;
    })
     
    this.PieChart = []; new Chart('pieChart', {
  type: 'pie',
data: {
 
 datasets: [{
     label: '# of Votes',
     data: [17, 11, 3],
     backgroundColor: [
      'rgba(220, 53, 69)',
      'rgba(23, 162, 184)',
      'rgba(255, 193, 7)'
     ],
     borderColor: [
      'rgba(52,58,64,0.2)'

     ],
     borderWidth: 1
 }]
}, 
options: {
 
//  scales: {
//      yAxes: [{
//          ticks: {
//              beginAtZero:true
//          }
//      }]
//  }
}
});


  }
}
