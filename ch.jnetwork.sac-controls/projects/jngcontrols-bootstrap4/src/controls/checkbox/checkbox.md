# Examples

## Default Checkbox

```html
<sac-checkbox name="checkbox1" label="Checkbox 1" [(ngModel)]="values.checkbox1"></sac-checkbox>
```

## Checkbox Group

```html
<sac-staticformcontainer label="Checkbox Group">
  <div class="pt-2">
    <sac-checkbox name="groupcheckbox1" checkboxtext="Option 1" stacked="true" [(ngModel)]="values.checkbox1"></sac-checkbox>
    <sac-checkbox name="groupcheckbox2" checkboxtext="Option 2" stacked="true" [(ngModel)]="values.checkbox2"></sac-checkbox>
  </div>
</sac-staticformcontainer>
```

Insert a DIV into the container with a padding of 1 (pt-1) for the control height `small` and a padding of 2 (pt-2) for the control heights `default` and `large` to align the checkboxes with the left label.
