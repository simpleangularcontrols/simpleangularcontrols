# Examples

## Use validateForm for async action in onValidFn

```html
<div #validationForm="sacform" ngForm>
    <div>Form</div>
    <div>
        <ngInput [(ngModel)]="mymodel.field" name="fieldname" label="field" [isrequired]="true"></ngInput>
    </div>
    <div>
        <sac-button (clicked)="onSave()" text="Save" [isloading]="isloading"> </sac-button>
    </div>
</div>
```

Code behind file with access to form.

```ts
import { Component, Input, Output, ViewChild } from '@angular/core';
import { SacInheritFormDirective } from '@simpleangularcontrols/sac-bootstrap5';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
})
export class DemoFormComponent {
    public isloadingaction = false;
    public mymodel = { field: '' };
    @ViewChild('validationForm', { static: true }) public validationForm: SacInheritFormDirective;

    public onSave() {
        this.isloadingaction = true;
        const form = this.validationForm.validateForm({
            onValidFn: () => {
                setTimeout(() => {
                    console.log('clicked');
                    this.isloadingaction = false;
                }, 3000);
            },
            onInvalidFn: (valid: boolean) => {
                this.isloadingaction = false;
            },
        });
    }
}
```

## Use validateForm for sync action in onValidFn

```html
<div #validationForm="sacform" ngForm>
    <div>Form</div>
    <div>
        <ngInput [(ngModel)]="mymodel.field" name="fieldname" label="field" [isrequired]="true"></ngInput>
    </div>
    <div>
        <sac-button (clicked)="onSave()" text="Save" [isloading]="isloading"> </sac-button>
    </div>
</div>
```

Code behind file with access to form.

```ts
import { Component, Input, Output, ViewChild } from '@angular/core';
import { SacInheritFormDirective } from '@simpleangularcontrols/sac-bootstrap5';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
})
export class DemoFormComponent {
    public isloadingaction = false;
    public mymodel = { field: '' };
    @ViewChild('validationForm', { static: true }) public validationForm: SacInheritFormDirective;

    public onSave() {
        this.isloadingaction = true;
        const form = this.validationForm.validateForm({
            onValidFn: () => {
                console.log('clicked');
            },
            onCompleteFn: (valid: boolean) => {
                this.isloadingaction = false;
            },
        });
    }
}
```
