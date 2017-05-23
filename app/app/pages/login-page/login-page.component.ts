import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html'
})
export class LoginPageComponent {
  public form: FormGroup;
  public form2: FormGroup;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: fb.group({
        first: ['Nancy', Validators.minLength(2)],
        last: 'Drew',
      }),
      email: '',
    });

    this.form2 = fb.group({
      name: fb.group({
        first: ['Nancy222', Validators.minLength(2)],
        last: 'Drew222',
      }),
      email: '',
    });
  }
}
