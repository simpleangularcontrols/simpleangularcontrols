# Examples

You can display an error message for the static form container. As the control is not bound to the form, the display of the error must be controlled manually. To do this, the `isinvalid` property must be set to `true` and a corresponding error message must be specified in the `errormessage` property.

However, the error messages are not displayed in the ValidationSummary control. This can be generated via the standard way of the forumlar.

```html
<sac-staticformcontainer
    label="Container MultipleInput with Error"
    [isinvalid]="true"
    errormessage="This is a custom errormessage"
>
    <input name="multiInput1" [(ngModel)]="value1" type="text" required />
    <input name="multiInput2" [(ngModel)]="value2" type="text" required />
</sac-staticformcontainer>
```
