import { NgForm } from '@angular/forms';
import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: 'ngFormular',
  exportAs: 'ngFormular'
})
export class NgFormular extends NgForm {
  @Input()
  ngFormular: string;

  @HostBinding('class')
  elementClass = 'form-horizontal';
}
