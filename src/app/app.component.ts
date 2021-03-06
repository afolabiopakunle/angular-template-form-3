import { Component, VERSION } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  fullName: string;
  email: string;
  newsletter: boolean = false;

  submit(form: NgForm) {
    console.log(form.value);
  }
}
