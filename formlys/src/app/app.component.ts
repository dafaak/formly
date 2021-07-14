import {Component} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FormlyFieldConfig} from "@ngx-formly/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formlys';
  form = new FormGroup({});
  model = {email: 'email@gmail.com'};
  fields: FormlyFieldConfig[] = [
    {
      template: 'Datos usaurio <hr\>',
      className: 'col-sm-12'
    },
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: false,
        disabled: true,
      },
      className: 'col-sm-6'
    }
    ,
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        label: 'Your name',
        placeholder: 'Enter name',
        required: true,
        maxLength: 10,
        minLength: 2
      },
      className: 'col-sm-6'
    }
  ];

  onSubmit() {
    console.log(this.model);
  }
}
