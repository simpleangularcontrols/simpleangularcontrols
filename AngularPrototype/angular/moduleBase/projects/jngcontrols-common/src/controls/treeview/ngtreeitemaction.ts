import { Input, Output, EventEmitter, ElementRef, OnInit } from '@angular/core';



export class NgTreeItemActionCommon implements OnInit {

    constructor( private el: ElementRef){}
    
    ngOnInit() {

        let rootElement: HTMLElement = this.el.nativeElement;
        let parentElement: HTMLElement = rootElement.parentElement;
    
        while (rootElement.firstChild) {
          parentElement.insertBefore(rootElement.firstChild, rootElement);
        }
    
        parentElement.removeChild(rootElement);
    
    }


    @Input("item") node: any

    @Input("title") _title: string

    @Input("titlechild") _titlechild

    @Input("iconstylechild") _iconstylechild: string

    @Input("iconstyle") iconstyle: string
    

    @Output("onclick")
    clickaction: EventEmitter<any> = new EventEmitter<any>();

    

    transformClass(initialClass){
        switch (initialClass) {
            case "add":
            return "jstree-icon icon icon-base-add jstree-add"; 
            case "delete":
            return "jstree-icon icon icon-base-delete jstree-delete"; 
            default:
            return initialClass
        }
    }

    iconaction() {
        this.clickaction.emit()
    }
   



}
