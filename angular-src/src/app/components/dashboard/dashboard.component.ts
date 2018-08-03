import { Component, OnInit, EventEmitter, Directive, Output, Input } from '@angular/core';
import { RoomService } from '../../services/room.service';
import { ReservationService } from '../../services/reservation.service';
import { ClientService } from '../../services/client.service';
import { VillaService } from '../../services/villa.service';
import { AuthService } from '../../services/auth.service';
import { HttpRequestsService } from '../../services/http-requests.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  constructor(
    private roomService: RoomService,
    private reservationService: ReservationService,
    private clientService: ClientService,
    private villaService: VillaService,
    private authService: AuthService,
    private httpRequestsService: HttpRequestsService) {

  }

  nowDate = new Date();
  rooms: any[];
  week = true;
  month = false;
  reservations: any[];
  days: any[] = [];
  clientName: any[] = [];
  villaName: any[] = [];
  roomName: any[] = [];
  users: any[] = [];
  nrUsers = 0;
  nrReservations = 0;
  earnings = 0;
  curDate: string = new Date().toISOString().substr(0, 7);
  selectedLink = 'Charts';
  selectedLinkChart = 'Week';
  chartArray: any = [];
  share = [];
  topCountries = [];
  httpRequests = [];


  reservationsChartWeek = {
    chartType: 'LineChart',
    dataTable: [
      ['Day', 'Reservations per Day'],
      ['Monday', 0],
      ['Tuesday', 0],
      ['Wednesday', 0],
      ['Thursday', 0],
      ['Friday', 0],
      ['Saturday', 0],
      ['Sunday', 0]
    ],
    options: { title: 'Reservations', curveType: 'function', legend: { position: 'right' }, colors: ['#7210A3'] },
  }

  reservationsChartMonth = {
    chartType: 'LineChart',
    dataTable: [
      ['Month', 'Reservations per Month'],
      ['January', 0],
      ['February', 0],
      ['March', 0],
      ['April', 0],
      ['May', 0],
      ['June', 0],
      ['July', 0],
      ['August', 0],
      ['September', 0],
      ['October', 0],
      ['November', 0],
      ['December', 0]
    ],
    options: { title: 'Reservations', curveType: 'function', legend: { position: 'right' }, colors: ['#7210A3'] },
  }

  genderChartData = {
    chartType: 'PieChart',
    dataTable: [
      ['Gender', 'people'],
      ['Male', 5],
      ['Female', 2]
      // ['Not identified', 3],
    ],
    options: { title: 'Users grouped by gender', colors: ['#7210A3', '#CC66FF'] },
  }

  geoChartData = {
    chartType: 'GeoChart',
    dataTable: [
      ['Country', 'Users']
      // ['Germany', 200],
      // ['United States', 300],
      // ['Brazil', 400],
      // ['Canada', 500],
      // ['France', 600],
      // ['RU', 700]
    ],
    options: { 'title': 'Countries', colors: ['#CC8E15', '#63450a'] },
  }


  setRadioChart(val) {
    this.selectedLinkChart = val;
  }

  topCountriesFunct(arr) {
    var newArr = [];
    var lengthVar = 5;
    // if (arr > 5) {lengthVar = 5;} else {lengthVar = arr.length;}
    for (var i = 0; i < lengthVar; i++) {
      newArr.push(arr[i]);
    }
    return newArr;
  }

  setRadio(val) {
    this.selectedLink = val;
    // console.log(this.selectedLink);
  }

  isSelected(name) {
    if (!this.selectedLink) {
      // console.log('no selectedLink')
      return false;
    } else {
      // console.log(this.selectedLink);
      return (this.selectedLink == name);
    }
  }

  // countUsersPerMonth()-------------------------------------------------------

  countUsersPerMonth(date) {
    this.authService.getUsers().subscribe(
      data => {
        this.users = data;
      },
      err => { console.error(err); return false; }
    );
    this.nrUsers = this.users.filter(user =>
      user.createDate.substr(0, 7) == date).length;
  }

  // countReservationsPerMonth()------------------------------------------------

  countReservationsPerMonth(date) {
    this.reservationService.getReservations().subscribe(
      data => {
        this.reservations = data;
      },
      err => { console.error(err); return false; }
    );
    this.nrReservations = this.reservations.filter(reserv =>
      reserv.createDate.substr(0, 7) == date).length;
  }

  // countEarnings()------------------------------------------------------------

  countEarnings(date) {
    this.reservationService.getReservations().subscribe(
      data => {
        this.reservations = data;
      },
      err => { console.error(err); return false; }
    );
    var reservThisMonth = this.reservations.filter(reserv =>
      reserv.createDate.substr(0, 7) == date);
    this.earnings = 0;
    var i = 0;
    for (i; i < reservThisMonth.length; i++) {
      this.earnings += reservThisMonth[i].totalPrice;
      // console.log(this.earnings);
    }
    // console.log(reservThisMonth);
  }

  sortByKey(arr) {
    return arr.sort(
      function(a, b) {
        return b[1] - a[1];
      }
    );
  }

  countByCountry(arr) {
    var countries = [], counts = [], prev;
    arr.sort();
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] !== prev) {
        countries.push(arr[i]);
        counts.push(1);
      } else {
        counts[counts.length - 1]++;
      }
      prev = arr[i];
    }
    var newArr = []
    for (var i = 0; i < countries.length; i++) {
      newArr.push([countries[i], counts[i]]);
    }
    return this.sortByKey(newArr);
  }

  sumFunction(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
      sum += array[i][1];
    }
    // console.log(sum);
    return sum;
  }

// ngOnInit()-------------------------------------------------------------------
ngOnInit() {

  this.reservationService.getReservations().subscribe(
    data => {
      this.reservations = data;
      // console.log(this.reservations);
      this.nrReservations = this.reservations.filter(reserv =>
        reserv.createDate.substr(0, 7) == this.curDate).length;

      var reservThisMonth = this.reservations.filter(reserv =>
        reserv.createDate.substr(0, 7) == this.curDate);

      this.earnings = 0;
      var i = 0;
      for (i; i < reservThisMonth.length; i++) {
        this.earnings += reservThisMonth[i].totalPrice;
      }

      var weekDaysChart = [
        ['Monday', this.reservations.filter(reserv => new Date(reserv.createDate).getDay() == 1).length],
        ['Tuesday', this.reservations.filter(reserv => new Date(reserv.createDate).getDay() == 2).length],
        ['Wednesday', this.reservations.filter(reserv => new Date(reserv.createDate).getDay() == 3).length],
        ['Thursday', this.reservations.filter(reserv => new Date(reserv.createDate).getDay() == 4).length],
        ['Friday', this.reservations.filter(reserv => new Date(reserv.createDate).getDay() == 5).length],
        ['Saturday', this.reservations.filter(reserv => new Date(reserv.createDate).getDay() == 6).length],
        ['Sunday', this.reservations.filter(reserv => new Date(reserv.createDate).getDay() == 0).length]
      ]

      for (var i = 0; i < weekDaysChart.length; i++) {
        this.reservationsChartWeek.dataTable.push(weekDaysChart[i]);
      }

      var monthsChart = [
        ['January', this.reservations.filter(reserv => new Date(reserv.createDate).getMonth() == 0).length],
        ['February', this.reservations.filter(reserv => new Date(reserv.createDate).getMonth() == 1).length],
        ['March', this.reservations.filter(reserv => new Date(reserv.createDate).getMonth() == 2).length],
        ['April', this.reservations.filter(reserv => new Date(reserv.createDate).getMonth() == 3).length],
        ['May', this.reservations.filter(reserv => new Date(reserv.createDate).getMonth() == 4).length],
        ['June', this.reservations.filter(reserv => new Date(reserv.createDate).getMonth() == 5).length],
        ['July', this.reservations.filter(reserv => new Date(reserv.createDate).getMonth() == 6).length],
        ['August', this.reservations.filter(reserv => new Date(reserv.createDate).getMonth() == 7).length],
        ['September', this.reservations.filter(reserv => new Date(reserv.createDate).getMonth() == 8).length],
        ['October', this.reservations.filter(reserv => new Date(reserv.createDate).getMonth() == 9).length],
        ['November', this.reservations.filter(reserv => new Date(reserv.createDate).getMonth() == 10).length],
        ['December', this.reservations.filter(reserv => new Date(reserv.createDate).getMonth() == 11).length]
      ]
      for (var i = 0; i < monthsChart.length; i++) {
        this.reservationsChartMonth.dataTable.push(monthsChart[i]);
      }
    },
    err => { console.error(err); return false; }
  );

  this.authService.getUsers().subscribe(
    data => {
      this.users = data;
      this.nrUsers = this.users.filter(user => user.createDate.substr(0, 7) == this.curDate).length;

      var female = this.users.filter(user => user.sex == 'F').length;
      var male = this.users.filter(user => user.sex == 'M').length;
      this.genderChartData.dataTable[1][1] = male;
      this.genderChartData.dataTable[2][1] = female;

      var countries = [];
      this.users.forEach(user => countries.push(user.country));
      this.chartArray = this.countByCountry(countries);
      // console.log(this.chartArray);
      this.topCountries = this.topCountriesFunct(this.chartArray);

      var lengthVar = 0;
      if (this.chartArray.length <= 5) {
        lengthVar = this.chartArray.length;
      } else { lengthVar = 5; }
      // console.log(lengthVar);

      for (var i = 0; i < this.chartArray.length; i++) {
        this.geoChartData.dataTable.push(this.chartArray[i]);
      };

    },
    err => { console.error(err); return false; }
  );

  this.httpRequestsService.showHttpRequests().subscribe(
    data => {
      this.httpRequests = data;
    },
    err => { console.error(err); return false; }
  );

  // this.roomService.getRooms().subscribe(
  //   data => {
  //     var i = 0;
  //     for (i = 0; i < data.length; i++) {
  //       this.rooms.push(data[i]);
  //       // this.roomName.push(data[i].denumire);
  //
  //       // if (data[i].villa) {
  //       //   this.showVillaName(data[i].villa);
  //       // }
  //       console.log(this.rooms);
  //     }
  //   },
  //   err => { console.error(err); return false }
  // );
  //


}

  // getDays(day) {
  //   // return 1;
  //   // console.log(this.reservations);
  //   return this.reservations.filter(reserv =>
  //     reserv.createDate.getDay() == day).length;
  // }

}
