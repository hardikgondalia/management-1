import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-company-sign-up',
  templateUrl: './company-sign-up.page.html',
  styleUrls: ['./company-sign-up.page.scss'],
})
export class CompanySignUpPage implements OnInit {
  companySignUpForm: FormGroup;
  isSubmitted = false;
  constructor() { 
    this.companySignUpForm = new FormGroup({
      companyName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$")]),
      address1: new FormControl('', [Validators.required]),
      address2: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required,this.pwd])
    })
  }

  ngOnInit() {
  }
  signup(){
    this.isSubmitted = true;
  }
  pwd(control: AbstractControl): ValidationErrors {
    const cpwd = control.value;
    if (control.parent !== undefined && control.parent !== null) {
      const pwd = control.parent.get('password').value;
      {
        if (cpwd !== pwd) {
          return { compare: true };
        }
      }
    }
    return null;
  }
}
