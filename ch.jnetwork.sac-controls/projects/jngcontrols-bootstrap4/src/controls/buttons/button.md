# Examples

## Clicked Event

It is important to use the `clicked` event and not the `click` EventEmitter as the event, because only the `clicked` EventEmitter checks whether the Disabled or IsLoading state is set.

## Default Button

```html
<sac-button (clicked)="action()" text="Button Label"></sac-button>`
```

## Primary Button

```html
<sac-button (clicked)="action()" text="Button Label" role="primary"></sac-button>`
```

## Button with Icon

```html
<sac-button (clicked)="action()" text="Button Label" icon="bi bi-calendar3"></sac-button>`
```

## Button with Loading Indicator

```html
<sac-button (clicked)="action()" text="Button Label" isloading="true"></sac-button>`
```
