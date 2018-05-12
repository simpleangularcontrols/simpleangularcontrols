import { NgForm } from '@angular/forms';
import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: 'ngFormular',
  exportAs: 'ngFormular'
})
export class NgFormular extends NgForm {
  // Form Control
  @Input()
  ngFormular: string;

  // Default Label Size for Form
  @Input("labelsize") labelsize: number = 3;

  // Set Form CSS Class to HTML Tag
  @HostBinding('class')
  elementClass = 'form-horizontal';
}
