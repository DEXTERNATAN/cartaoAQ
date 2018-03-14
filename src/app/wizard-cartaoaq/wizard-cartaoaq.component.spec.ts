import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardCartaoaqComponent } from './wizard-cartaoaq.component';

describe('WizardCartaoaqComponent', () => {
  let component: WizardCartaoaqComponent;
  let fixture: ComponentFixture<WizardCartaoaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardCartaoaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardCartaoaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
