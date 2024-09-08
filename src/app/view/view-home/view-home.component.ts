import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'view-home',
  templateUrl: './view-home.component.html',
  styleUrls: ['./view-home.component.scss']
})
export class ViewHomeComponent implements OnInit {

  public form!: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      'mail': [null, [Validators.required, Validators.email]],
      'password': [null, [Validators.required, Validators.minLength(8)]]
    });
  }

  public onSubmitForm(){
    if (this.form.valid) {
      this.router.navigate(['/view-gif']);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
