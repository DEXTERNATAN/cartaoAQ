import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigCartaoComponent } from './config-cartao.component';

describe('ConfigCartaoComponent', () => {
  let component: ConfigCartaoComponent;
  let fixture: ComponentFixture<ConfigCartaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigCartaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigCartaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
