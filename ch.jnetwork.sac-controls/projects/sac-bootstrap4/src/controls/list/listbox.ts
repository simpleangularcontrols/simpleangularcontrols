import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import {
  Component,
  Directive,
  ElementRef,
  Host,
  Injector,
  Optional,
  Renderer2,
  forwardRef,
} from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  SacListboxCommon,
  SacListboxOptionCommon,
} from '@simpleangularcontrols/sac-common';
import { SacFormLayoutDirective } from '../layout/formlayout.directive';
import { SacToControlHeightPipe } from '../layout/tocontrolheight.pipe';
import { SacToControlWidthCssPipe } from '../layout/tocontrolwidthcss.pipe';
import { SacToLabelHeightPipe } from '../layout/tolabelheight.pipe';
import { SacToLabelWidthCssPipe } from '../layout/tolabelwidthcss.pipe';

// #region Classes

/**
 * Listbox Komponente
 */
@Component({
  selector: 'sac-listbox',
  templateUrl: './listbox.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: SacListboxComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => SacListboxComponent),
    },
  ],
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    NgFor,
    AsyncPipe,
    forwardRef(() => SacListboxOptionDirective),
    SacToLabelWidthCssPipe,
    SacToControlWidthCssPipe,
    SacToLabelHeightPipe,
    SacToControlHeightPipe,
  ],
})
export class SacListboxComponent extends SacListboxCommon {
  // #region Constructors

  /**
   * Constructor
   * @param formLayout SacFormLayout to define scoped layout settings
   * @param injector Injector for injecting services
   */
  constructor(
    @Host() @Optional() formLayout: SacFormLayoutDirective,
    injector: Injector
  ) {
    super(formLayout, injector);
  }

  // #endregion Constructors
}

/**
 * Option Item in Listbox
 */
@Directive({ selector: '[sacOption],option', standalone: true })
export class SacListboxOptionDirective extends SacListboxOptionCommon {
  // #region Constructors

  /**
   * Konstruktor
   * @param elementRef Referenz auf DOM Element
   * @param renderer Angular Rendering Engine
   * @param listbox Referenz auf Listbox Komponente
   */
  constructor(
    elementRef: ElementRef,
    renderer: Renderer2,
    @Optional() @Host() listbox: SacListboxComponent
  ) {
    super(elementRef, renderer, listbox);
  }

  // #endregion Constructors
}

// #endregion Classes
