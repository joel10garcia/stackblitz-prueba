import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ViewHomeComponent } from './view-home.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ViewHomeComponent', () => {
  let component: ViewHomeComponent;
  let fixture: ComponentFixture<ViewHomeComponent>;
  let formBuilder: FormBuilder;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewHomeComponent],
      imports: [ReactiveFormsModule, RouterTestingModule],
      providers: [FormBuilder],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHomeComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    formBuilder = TestBed.inject(FormBuilder);
    component.form = formBuilder.group({
        mail: [null],
        password: [null]
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with two controls', () => {
    const form = component.form;
    expect(form.contains('mail')).toBeTrue();
    expect(form.contains('password')).toBeTrue();
  });

  it('should mark all controls as touched if form is invalid', () => {
    spyOn(component, 'onSubmitForm').and.callThrough();

    component.form.controls['mail'].setValue('');
    component.form.controls['password'].setValue('');

    const formElement = fixture.nativeElement.querySelector('form');
    formElement.dispatchEvent(new Event('submit'));

    expect(component.onSubmitForm).toHaveBeenCalled();
    
    expect(component.form.controls['mail'].touched).toBeTrue();
    expect(component.form.controls['password'].touched).toBeTrue();
  });

  it('should navigate to /view-gif if the form is valid', () => {
    const form = component.form;
    form.controls['mail'].setValue('test@gmail.com');
    form.controls['password'].setValue('testpass123');

    spyOn(router, 'navigate'); 

    component.onSubmitForm();

    expect(router.navigate).toHaveBeenCalledWith(['/view-gif']);
  });

  it('should not navigate if the form is invalid', () => {
    const form = component.form;
    form.controls['mail'].setValue('invalid-email');
    form.controls['password'].setValue('short');

    spyOn(router, 'navigate');

    component.onSubmitForm();

    expect(router.navigate).not.toHaveBeenCalled();
  });
});
