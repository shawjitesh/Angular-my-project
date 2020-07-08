import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-project';

  public selectedLink: string;
  public key: string;
  public firstname: string;
  public fname: boolean;
  public lastname: string;
  public lname: boolean;
  public address: string;
  public add: boolean;
  public date: any;
  public isDate: boolean;
  public subject: any;
  public isSubject: boolean;
  public isStream: boolean;
  public subjects: any[];
  public clicked: boolean = false;
  public isDisabled: boolean = false;
  public error: string = "error-msg";
  public sText: string = "text-special";

  public msgClasses = {
    "error-msg": true,
    "text-special": true,
    "text-strong": true
  }
  public msgStyles = {
    color: "red",
    fontStyle: "italic"
  }

  public scienceSubjects = [
    {id: 0, value: "--Select--"},
    {id: 1, value: "Maths"},
    {id: 2, value: "Physics"},
    {id: 3, value: "Chemistry"}
  ];
  public othersSubjects = [
    {id: 0, value: "--Select--"},
    {id: 1, value: "Computer"},
    {id: 2, value: "History"},
    {id: 3, value: "Geography"}
  ];

  isSelected(name: string) {
    this.selectedLink = name;
    if(this.selectedLink == "Science") {
      this.subjects = this.scienceSubjects;
    } else {
      this.subjects = this.othersSubjects;
    }
    this.subject = this.subjects[0];
  }

  onKeypressEvent(event: any) {
    console.log(event, event.keyCode, event.keyIdentifier);

    this.key = event.key;
    if((this.key >= 'a' && this.key <= 'z') || (this.key >= 'A' && this.key <= 'Z')) return true;
    return false;
  }

  onPasteEvent(event: any) {
    console.log(event.target.value);
    let regExpText: RegExp = /[a-zA-Z]*/;
    if(regExpText.test(event.target.value)) return true;
    return false;
  }

  validateInputs() {
    this.isDisabled = !this.isDisabled;

    console.log(this.firstname);
    if(this.firstname != undefined) {
      if(this.firstname.length <= 2) this.fname = true;
      else this.fname = false;
    } else this.fname = true;

    console.log(this.lastname);
    if(this.lastname != undefined) {
      if(this.lastname.length <= 2) this.lname = true;
      else this.lname = false;
    } else this.lname = true;

    console.log(this.address);
    if(this.address != undefined) {
      if(this.address.length < 5) this.add = true;
      else this.add = false;
    } else this.add = true;

    console.log(this.date);
    if(this.date == undefined) this.isDate = true;
    else this.isDate = false;

    console.log(this.subject);
    if(this.selectedLink) {
      this.isStream = false;
      if(this.subject == this.subjects[0]) {
        this.isSubject = true;
      } else this.isSubject = false;
    } else this.isStream = true;

    if(this.firstname.length >= 3 && this.lastname.length >= 3) this.clicked = true;
    else this.clicked = false;
  }
}
