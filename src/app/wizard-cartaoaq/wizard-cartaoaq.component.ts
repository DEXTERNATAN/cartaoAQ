import { Component, Output, EventEmitter, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { WizardCartaoAQStepComponent } from './wizard-cartaoaqstep.component';

@Component({
  selector: 'app-wizard-cartaoaq',
  templateUrl: './wizard-cartaoaq.component.html',
  styles: [
    '.card { height: 100%; }',
    '.card-header { background-color: #fff; padding: 0; font-size: 1.25rem; }',
    '.card-footer { background-color: #fff; border-top: 0 none; }',
    '.nav-item { padding: 1rem 0rem; border-bottom: 0.5rem solid #ccc; }',
    '.active { font-weight: bold; color: black; border-bottom-color: #1976D2 !important; }',
    '.enabled { cursor: pointer; border-bottom-color: rgb(88, 162, 234); }',
    '.disabled { color: #ccc; }',
    '.completed { cursor: default; }'
  ]
})

export class WizardCartaoaqComponent  implements AfterContentInit {
  @ContentChildren(WizardCartaoAQStepComponent)
  wizardSteps: QueryList<WizardCartaoAQStepComponent>;

  private _steps: Array<WizardCartaoAQStepComponent> = [];
  private _isCompleted: boolean = false;

  @Output()
  onStepChanged: EventEmitter<WizardCartaoAQStepComponent> = new EventEmitter<WizardCartaoAQStepComponent>();

  constructor() { }

  ngAfterContentInit() {
    this.wizardSteps.forEach(step => this._steps.push(step));
    this.steps[0].isActive = true;
  }

  get steps(): Array<WizardCartaoAQStepComponent> {
    return this._steps.filter(step => !step.hidden);
  }

  get isCompleted(): boolean {
    return this._isCompleted;
  }

  get activeStep(): WizardCartaoAQStepComponent {
    return this.steps.find(step => step.isActive);
  }

  set activeStep(step: WizardCartaoAQStepComponent) {
    if (step !== this.activeStep && !step.isDisabled) {
      this.activeStep.isActive = false;
      step.isActive = true;
      this.onStepChanged.emit(step);
    }
  }

  public get activeStepIndex(): number {
    return this.steps.indexOf(this.activeStep);
  }

  get hasNextStep(): boolean {
    return this.activeStepIndex < this.steps.length - 1;
  }

  get hasPrevStep(): boolean {
    return this.activeStepIndex > 0;
  }

  public goToStep(step: WizardCartaoAQStepComponent): void {
    if (!this.isCompleted) {
      this.activeStep = step;
    }
  }

  public next(): void {
    if (this.hasNextStep) {
      let nextStep: WizardCartaoAQStepComponent = this.steps[this.activeStepIndex + 1];
      this.activeStep.onNext.emit();
      nextStep.isDisabled = false;
      this.activeStep = nextStep;
    }
  }

  public previous(): void {
    if (this.hasPrevStep) {
      let prevStep: WizardCartaoAQStepComponent = this.steps[this.activeStepIndex - 1];
      this.activeStep.onPrev.emit();
      prevStep.isDisabled = false;
      this.activeStep = prevStep;
    }
  }

  public complete(): void {
    this.activeStep.onComplete.emit();
    this._isCompleted = true;
  }

}

