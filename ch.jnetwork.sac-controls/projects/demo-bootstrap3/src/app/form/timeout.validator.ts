import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { ValidationErrorItem } from '@simpleangularcontrols/sac-common';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Directive({
    selector: '[appDelayValid]',
    providers: [
        {
            provide: NG_ASYNC_VALIDATORS,
            useExisting: DelayValidDirective,
            multi: true,
        },
    ],
})
export class DelayValidDirective implements AsyncValidator {
    // #region Public Methods

    public validate(control: AbstractControl): Observable<ValidationErrorItem | null> {
        // Returns ‘null’ after 500 ms (= valid)
        return of(null).pipe(delay(500));
    }

    // #endregion Public Methods
}
