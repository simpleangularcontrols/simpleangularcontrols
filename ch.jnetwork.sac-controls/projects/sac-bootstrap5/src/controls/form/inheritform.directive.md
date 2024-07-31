# Examples

## Inherit Form

```html
<div sacInheritForm>
  <div>SubForm</div>
  <div>
    <ngInput [(ngModel)]="mymodel.fieldarea2" name="subformField3" label="field 3" [isrequired]="true"></ngInput>
  </div>
</div>
```

## Inherit Form with access to Form

HTML Template with access to form.

```html
<div sacInheritForm #formaccess="sacinheritform">
  <div>SubForm</div>
  <div>
    <ngInput [(ngModel)]="mymodel.fieldarea2" name="subformField3" label="field 3" [isrequired]="true"></ngInput>
  </div>
</div>
```

Code behind file with access to form.

```ts
import { Component, Input, Output, ViewChild } from '@angular/core';
import { SacInheritFormDirective } from '@simpleangularcontrols/sac-bootstrap5';

@Component({
  selector: 'app-subform',
  templateUrl: './subform.component.html',
})
export class DemoSubFormComponent {
  @Input() mymodel;
  @Output() mymodelChange = new EventEmitter();
  @ViewChild('formaccess') public form: SacInheritFormDirective;

  public accessToForm() {
    console.log(this.form.getForm().dirty);
  }
}
```
