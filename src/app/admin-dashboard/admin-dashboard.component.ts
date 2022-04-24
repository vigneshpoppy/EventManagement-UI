import { HttpClient } from '@angular/common/http';
import {  Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute,ParamMap} from '@angular/router';
import { ApicallService } from '../apicall.service';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements  OnInit {


  constructor(private http : HttpClient,private apicallService:ApicallService,private router:Router) { 

   
  }
  // public barChartOptions = {
  //   scaleShowVerticalLines: false,
  //   responsive: true
  // };
  // public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  // public barChartType = 'bar';
  // public barChartLegend = true;
  // public barChartData = [
  //   {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
  //   {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  // ];

  ngOnInit(): void {
     this.fetchdata();
    // this.chart1();
  }

  originalemail:any;
  body:any;
  ctx:any;
  myChart:any;
// chart1(){
//   this.ctx =document.getElementById("myChart");
// this. myChart = new Chart(this.ctx, {
//     type: 'bar',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });
// }
  //cancel enrollment
sendemail(){
  var notifi=new notification
  
  //console.log("btn service");
  notifi.originalemail=this.originalemail;
  notifi.body=this.body;
  this.send(notifi);
}

send(data:notification){
  //console.log("execute service");
  
  this.apicallService.sendmail(data);
}


  logout(){
    this.router.navigate(['/Admin']);
    //localStorage.getItem("ad.SetEmail");
    console.log( localStorage.getItem("adminaccess"));
    localStorage.setItem("adminaccess","false")
   // localStorage.removeItem("useremail");
    //localStorage.clear();
  //  @HostListener('window:unload', ['$event']);
  
   // this.unloadHandler();
   //location.reload();

    
  }
//   unloadHandler() {
//     window.sessionStorage.clear();
// }
  viewfeedback(){
    this.router.navigate(['adminfeedback']);
  }


  data:any;
  dt:any=[];
  count:any
  
    
  
  fetchdata(){
    let Observable=this.apicallService.getalluserdata();
    Observable.subscribe((data)=>{
      this.dt=data;
      this.count=data.length
   //   console.log(data.length);
      
      //console.log(this.dt);
    })

  
}
code:string="";
codegen:string=""
promotioncode(){ 
  this.codegen=(Math.floor(Math.random() * (999999 -10000 ) ) + 10000).toString();
 this.code="HAPPY"+this.codegen;
 localStorage.setItem("code",this.code);
// console.log(this.code);
setTimeout(() => {
  localStorage.removeItem("code");
  
}, 60000);
};



clear(){
  
}
}
export class notification{
originalemail:any
body:any
}
