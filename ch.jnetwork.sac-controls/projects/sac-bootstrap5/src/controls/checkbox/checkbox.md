# Examples

## Default Checkbox

```html
<sac-checkbox name="checkbox1" label="Checkbox 1" [(ngModel)]="values.checkbox1"></sac-checkbox>
```

## Checkbox Group

```html
<sac-staticformcontainer label="Checkbox Group">
  <sac-checkbox name="groupcheckbox1" label="Checkbox 1" checkboxtext="Option 1" stacked="true" [(ngModel)]="values.checkbox1"></sac-checkbox>
  <sac-checkbox name="groupcheckbox2" label="Checkbox 2" checkboxtext="Option 2" stacked="true" [(ngModel)]="values.checkbox2"></sac-checkbox>
</sac-staticformcontainer>
```
