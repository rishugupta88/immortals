import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { AppService } from '../app.service';

//import { Observable, of } from 'rxjs';
//import { catchError, map, tap } from 'rxjs/operators';

declare var google: any;
declare var $: any;


@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']

})
export class StocksComponent implements OnInit {

  showCompanyGraph: boolean = false;
  showCompanyCurrentData: boolean = true;
  showDiv: boolean = false;

  options = {
    url: "../assets/data/compList.json",
  
    getValue: "name",
  
    template: {
        type: "description",
        fields: {
            description: "email"
        }
    },
  
    list: {
        match: {
            enabled: true
        }
    },
  
    theme: "plate-dark"
  };

  constructor(private http: HttpClient, private appService: AppService) {
    this.showCompaniesList();
    $("#seachCompanyName").easyAutocomplete(this.options);

  }

  

  ngOnInit() {
  }


  searchRequestForm = new FormGroup({
    seachCompanyName: new FormControl('')
  });

  showCompanyData(CompanyName: any) {
    /*this.appService.showCompanyData().subscribe(Compnieslist => {
      console.log(Compnieslist);
  });*/
  }

  showCompaniesList() {
    this.appService.getCompaniesNames().subscribe(Compnieslist => {
      console.log(Compnieslist);
    });
  }

  drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Mon', 20, 28, 38, 45],
      ['Tue', 31, 38, 55, 66],
      ['Wed', 50, 55, 77, 80],
      ['Thu', 77, 77, 66, 50],
      ['Fri', 68, 66, 22, 15]
      // Treat first row as data as well.
    ], true);

    // Set chart options
    var options = {
      'title': 'Average Temperatures of Cities',
      titleTextStyle: {
        color: 'white',
        fontSize: 20,
        fontName: 'SourceSansPro-Regular'
      },
      'is3D': true,
      hAxis: {
        title: 'DATES',
        textStyle: {
          color: 'white',
          fontSize: 20,
          fontName: 'SourceSansPro-Regular'
        },
        titleTextStyle: {
          color: 'white',
          fontSize: 20,
          fontName: 'SourceSansPro-Regular'
        }
      },
      vAxis: {
        title: 'PRICES',
        textStyle: {
          color: 'white',
          fontSize: 20,
          fontName: 'SourceSansPro-Regular'
        },
        titleTextStyle: {
          color: 'white',
          fontSize: 20,
          fontName: 'SourceSansPro-Regular'
        }
      },
      backgroundColor: '#000000',
      legend: { textStyle: { color: 'white' } }

    };

    var chart = new google.visualization.CandlestickChart(document.getElementById('chart_div'));
    google.visualization.events.addListener(chart, 'select', function(){
      this.speakGraph();
    });


    chart.draw(data, options);
  }

  speakGraph(){
    var msg = new SpeechSynthesisUtterance('');
    window.speechSynthesis.speak(msg);
  }

  loadChart() {
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(this.drawChart);


  }


  showContainer(){
    this.showDiv = true;
  }

  showCurrentData() {
    this.showCompanyGraph = false;
    this.showCompanyCurrentData = true;
  }

  showGraph() {
    this.showCompanyGraph = true;
    this.showCompanyCurrentData = false;
    this.loadChart();
  }






}