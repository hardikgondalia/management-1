import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-visitor-check-in',
  templateUrl: './visitor-check-in.page.html',
  styleUrls: ['./visitor-check-in.page.scss'],
})
export class VisitorCheckInPage implements OnInit {
  visitorCheckInForm: FormGroup;
  isSubmitted = false;
  constructor() {
    this.visitorCheckInForm = new FormGroup({
      visitorName: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
      personVisiter: new FormControl('', [Validators.required]),
      idType: new FormControl('', [Validators.required])

    })
   }

  ngOnInit() {
  }
  checkIn(){
    this.isSubmitted = true;
  }
}
