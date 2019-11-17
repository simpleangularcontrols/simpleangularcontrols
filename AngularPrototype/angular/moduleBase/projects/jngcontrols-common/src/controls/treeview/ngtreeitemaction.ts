import { Input, Output, EventEmitter, ElementRef, OnInit } from '@angular/core';


/**
 *Basis Komponente für NgTreeItemAction
 */
export class NgTreeItemActionCommon implements OnInit {

    /**
     * Konstruktor
     * @param el Element Referenz
     */
    constructor(private el: ElementRef) { }


    /**
     * lifecycle OnInit hook. Wird aufgeruren sobald das Komponent initialisiert ist.
     */
    ngOnInit() {

        let rootElement: HTMLElement = this.el.nativeElement;
        let parentElement: HTMLElement = rootElement.parentElement;

        while (rootElement.firstChild) {
            parentElement.insertBefore(rootElement.firstChild, rootElement);
        }

        parentElement.removeChild(rootElement);

    }


    /** 
     *Input Property. Akzeptiert das Wert des Object.
    */
    @Input("item") node: any

    /**
    * Input Property für Title des TreeItemAction
    */
    @Input("title") _title: string

    /**
     * Input Property für Styling des Icon. Deffiniert die Css Klassen des Icon
     */
    @Input("iconstyle") iconstyle: string

    /**
    * Event wenn auf das Icon geclickt wird
    */
    @Output("onclick")
    clickaction: EventEmitter<any> = new EventEmitter<any>();

    /**
     * Die Methode erstellt die CSS Klasse des Icon. Akzeptiert ein Key-word und baut ein vollständige CSS Klasse.
     */
    transformClass(initialClass) {
        switch (initialClass) {
            case "add":
                return "jstree-icon icon icon-base-add jstree-add";
            case "delete":
                return "jstree-icon icon icon-base-delete jstree-delete";
            default:
                return initialClass
        }
    }

    /**
    * Die Methode wird das cklickaction Emitter aktivieren.
    */
    iconaction() {
        this.clickaction.emit()
    }




}
