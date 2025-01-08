# Examples

## Default Icon

```html
<ngGridButton icon="edit" (clicked)="action('edit')"></ngGridButton>
```

## Disabled

```html
<ngGridButton icon="edit" (clicked)="action('edit')" [isdisabled]="true"></ngGridButton>
```

## Custom Icon

```html
<ngGridButton iconstyle="sprite" icon="icon-sprite-base-main_info" (clicked)="action('info')"></ngGridButton>
```
