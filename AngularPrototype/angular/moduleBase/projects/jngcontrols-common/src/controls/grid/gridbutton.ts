import { Input, Output, EventEmitter } from '@angular/core';

export class NgGridButtonCommon {
    
    @Input("iconstyle")
    public iconstyle: string

    @Output("onclick")
    clickaction: EventEmitter<any> = new EventEmitter<any>();

    public callaction() {
        this.clickaction.emit(this.iconstyle)
    }


}
