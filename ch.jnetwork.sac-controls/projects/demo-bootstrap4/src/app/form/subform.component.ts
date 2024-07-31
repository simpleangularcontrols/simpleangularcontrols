import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SACBootstrap4FormModule,
  SACBootstrap4InputModule,
} from '@simpleangularcontrols/sac-bootstrap4';

@Component({
  selector: 'app-subform',
  templateUrl: './subform.component.html',
  standalone: true,
  imports: [SACBootstrap4FormModule, SACBootstrap4InputModule, FormsModule],
})
export class DemoSubFormComponent implements DoCheck {
  // #region Properties

  @Input() public mymodel;
  @Output() public mymodelChange = new EventEmitter();
  @ViewChild('formaccess') public form: SacInheritFormDirective;

  // #endregion Properties

  // #region Public Methods

  public ngDoCheck() {
    if (this.form) {
      console.log(this.form.getForm().dirty);
    }
    this.mymodelChange.next(this.mymodel);
  }

  // #endregion Public Methods
}
