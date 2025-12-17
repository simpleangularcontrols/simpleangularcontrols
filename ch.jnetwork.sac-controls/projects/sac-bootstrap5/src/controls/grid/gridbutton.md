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

## Change default icons for Edit and Delete

To customize the CSS classes for the edit and delete icon mode of the grid button, the options `GridButtonDefaultEditIconSet` and `GridButtonDefaultEditIcon` or `GridButtonDefaultDeleteIconSet` and `GridButtonDefaultDeleteIcon` must be adjusted in IconService. To do this, you must create and register your own implementation of IconService.

## Customize disabled suffix

The suffix can be customized via the `GridButtonDisabledIconSuffix` property in IconService. To make a customization, you must implement and register your own service.

To use the suffix as a suffix, the setting must be defined as a whole string (e.g., `_disabled`). This then generates the following disabled icon: `fa-pen_disabled`

If the suffix is to be used as a separate CSS class, a space must be inserted at the beginning (e.g., ` disabled`). This then generates the following icon: `fa-pen d
