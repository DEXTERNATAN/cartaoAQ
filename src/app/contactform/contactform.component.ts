import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent implements OnInit {


  contactForm: FormGroup;


  post: any;

  constructor(private builder: FormBuilder) {

    this.contactForm = builder.group({
      name: [null, Validators.required],
      email: [null, Validators.compose([Validators.required, Validators.email])],
      subject: [null, Validators.required],
      message: [null, Validators.compose([Validators.required, Validators.minLength(50), Validators.maxLength(500)])]
    });

  }



  onSubmit() {
    console.log(this.contactForm);
    if (this.contactForm.valid) {
      console.log('form submitted');
    } else {
      this.validateAllFormFields(this.contactForm);
    }
}

validateAllFormFields(formGroup: FormGroup) {
  Object.keys(formGroup.controls).forEach(field => {
    console.log(field);
    const control = formGroup.get(field);
    if (control instanceof FormControl) {
      control.markAsTouched({ onlySelf: true });
    } else if (control instanceof FormGroup) {
      this.validateAllFormFields(control);
    }
  });
}

  ngOnInit() {

  }

}
