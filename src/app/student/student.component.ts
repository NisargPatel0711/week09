import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent {
  isDisable: boolean = false;
  firstname: string = ""
  city = "Toronto"
  countries = ["India", "Canada", "USA"]

  imageurl = "https://image.api.playstation.com/vulcan/img/rnd/202011/0714/Cu9fyu6DM41JPekXLf1neF9r.png"

  stud = {
    id: 1,
    fnm: 'Nisarg',
    lnm: 'Patel',
  };

  onButtonClick() {
    alert(this.firstname);
  }
}
