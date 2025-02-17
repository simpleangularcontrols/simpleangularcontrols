# Customizing

To customize the controls, compile Boostrap CSS with the variables that are predefined in Bootstrap. All controls use standard Bootstrap classes and markup. If possible, do not use your own styles. This usually leads to problems.

## Bootstrap 3

### Label Alignment

To align the label to the left under Boostrap3, set this global style in the application. The Boostrap3 standard is right-aligned and does not support left-aligned labels by default

```css
.control-label {
  text-align: left !important;
}
```

To split the label and tooltip help text to the left and right, use the following global style.

```css
.control-label {
  text-align: left !important;
  display: flex !important;
  justify-content: space-between !important;
}
```

### Mark Labels as Required

Bootstrap does not support the marking of labels for mandatory fields by default. However, this can be achieved using the following global CSS selector.

```css
.control-label.required .text:after {
  color: #ff3333;
  content: ' *';
}
```

## Bootstrap 4

### Mark Labels as Required

Bootstrap does not support the marking of labels for mandatory fields by default. However, this can be achieved using the following global CSS selector.

```css
.col-form-label.required .text:after {
  color: #ff3333;
  content: ' *';
}
```

## Bootstrap 5

### Mark Labels as Required

Bootstrap does not support the marking of labels for mandatory fields by default. However, this can be achieved using the following global CSS selector.

```css
.col-form-label.required .text:after {
  color: #ff3333;
  content: ' *';
}
```
