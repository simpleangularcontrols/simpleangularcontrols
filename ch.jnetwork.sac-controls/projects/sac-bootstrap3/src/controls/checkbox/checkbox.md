# Examples

## Default Checkbox

```html
<sac-checkbox name="checkbox1" label="Checkbox 1" [(ngModel)]="values.checkbox1"></sac-checkbox>
```

## Checkbox Group

```html
<sac-staticformcontainer label="Checkbox Group">
  <sac-checkbox name="groupcheckbox1" checkboxtext="Option 1" stacked="true" [(ngModel)]="values.checkbox1"></sac-checkbox>
  <sac-checkbox name="groupcheckbox2" checkboxtext="Option 2" stacked="true" [(ngModel)]="values.checkbox2"></sac-checkbox>
</sac-staticformcontainer>
```

## Switch

> Switch UI is not supported by Bootstrap3. It will be displayed as checkbox

```html
<sac-checkbox name="checkbox6" label="Switch 6" [(ngModel)]="values.checkbox5" checkboxstyle="switch"></sac-checkbox>
```
