import { Component } from '@angular/core';
import { userDetail } from './userDetail.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  userDetails: userDetail[] = [
    {
      name: 'Jimmy',
      email: 'jimmy@gmail.com',
      phoneNo: 1234123425,
      age: 22,
      edit: false,
    },
    {
      name: 'Jimmy 2',
      email: 'jimmy2@gmail.com',
      phoneNo: 1234123425,
      age: 22,
      edit: false,
    },
    {
      name: 'Jimmy 3',
      email: 'jimmy3@gmail.com',
      phoneNo: 1234123425,
      age: 22,
      edit: false,
    },
    {
      name: 'Jimmy 4',
      email: 'jimmy4@gmail.com',
      phoneNo: 1234123425,
      age: 22,
      edit: false,
    },
  ];

  bgColors = ['#FCE4EC', '#E3F2FD', '#E8F5E9', '#FFF3E0'];
}
