import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.css']
})
export class MyCompComponent implements OnInit {

  public email: string;
  public isEmail: boolean;
  public textStyle: any = {
    "bold": true,
    "special": true
  };
  public addEdit: boolean = false;
  public view: boolean = false;
  public teacherDetails: any = [
    {id: "0", name: "Asmita", subject: "Angular", experience: "2"},
    {id: "1", name: "Jitesh", subject: "Java", experience: "3"}
  ];
  public noDetails: boolean = false;
  public selectedTeacher: any;
  public noRowSelected: boolean = true;
  public showError: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  viewTeachers() {
    if(this.teacherDetails.length < 1) {
      this.noDetails = true;
    } else {
      this.noDetails = false;
      this.view = true;
    }
    this.addEdit = false;
    this.noRowSelected = false;
    this.showError = false;
  }

  editTeacher() {
    if(this.selectedTeacher) {
      this.noRowSelected = false;
      this.addEdit = true;
    } else {
      this.addEdit = false;
      this.view = false;
      this.noRowSelected = true;
    }
    if(this.noRowSelected) this.showError = true;
    else this.showError = false;
  }

  addTeacher() {
    this.selectedTeacher = '';
    this.addEdit = true;
    this.view = false;
    this.noRowSelected = false;
    this.showError = false;
  }

  removeTeacher() {
    this.addEdit = false;
    this.view = false;
    if(this.selectedTeacher) {
      this.noRowSelected = false;
      this.showError = false;
      this.selectedTeacher = '';
    } else {
      this.showError = true;
      this.noRowSelected = true;
    }
  }

  saveDetails() {
    this.selectedTeacher = '';
  }

  selectTeacher(teacher: any) {
    this.selectedTeacher = teacher;
    this.noRowSelected = false;
  }
}
