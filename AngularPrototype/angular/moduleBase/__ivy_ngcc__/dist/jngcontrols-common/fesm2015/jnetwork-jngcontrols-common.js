import { __decorate, __metadata, __param } from 'tslib';
import { EventEmitter, Input, Output, ViewChild, ElementRef, HostListener, InjectionToken, ɵɵdefineInjectable, Injectable, Host, Injector, TemplateRef, ɵlooseIdentical, Renderer2, Directive, ViewChildren, QueryList, ContentChild, forwardRef, NgZone, Component, NgModule } from '@angular/core';
import { FormGroup, NgControl, Validators, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable } from 'rxjs';
import * as moment_ from 'moment';
import { UploadxService } from 'ngx-uploadx';

/**
 * Base Komponente für das Button
 */
import * as ɵngcc0 from '@angular/core';

const _c0 = ["dialog"];
function NgTinyMceEditorComponent_ng_template_0_Template(rf, ctx) { }
const _c1 = ["actions"];
const _c2 = ["treefileicon"];
const _c3 = ["tooltip"];
const _c4 = ["container"];
const _c5 = ["files"];
class NgButtonCommon {
    constructor() {
        /**
         * Boolean Property für Error; default Wert - false
         */
        this.hasError = false;
        /**
         * Input Property für Name; default Wert - ''
         */
        this.name = '';
        /**
         * Input Property für Text des Buttons; default Wert - ''
         */
        this.text = '';
        /**
         * Input Property für Icon Style Klasse; default Wert - ''
         */
        this.icon = '';
        /**
         * Boolean Property definiert, ob das Button 'disabled' ist; default - false
         */
        this._isdisabledvalue = false;
        /**
         * Das boolean property ist benutzt für Aktivation des Spinner des Button. Default ist false.
         */
        this._isloadingvalue = false;
        /**
         * Das Property definiert die Rolle des Buttons. Standardwert ist 'default'.
         */
        this._role = 'default';
        /**
         * Output Event Emitter
         */
        this.onclick = new EventEmitter();
    }
    /**
     * Das Input property. Definiert der Status des islaoding property. Es ist benutzt für Aktivation des Spinner des Button.
     */
    set isloading(v) {
        if (v === null || v === undefined || typeof v === 'boolean') {
            this._isloadingvalue = v;
        }
        else {
            this._isloadingvalue = v === 'true';
        }
    }
    get isloading() {
        return this._isloadingvalue;
    }
    /**
     * Deaktivieren von Buttons
     * @param v Deaktiviert den Button
     * @return Definiert ob der Button deaktiviert ist
     */
    set isdisabled(v) {
        if (v === null || v === undefined || typeof v === 'boolean') {
            this._isdisabledvalue = v;
        }
        else {
            this._isdisabledvalue = v === 'true';
        }
    }
    get isdisabled() {
        return this._isdisabledvalue;
    }
    /**
     * Definiert den Style des Buttons
     * @param  v Definiert den Style des Buttons.
     * Folgende Typen sind Supported: primary, secondary, success, danger, warning, info, light, dark, link, default
     * @returns  Type des Buttons
     */
    set role(v) {
        // Validation of Input
        switch (v) {
            case '':
            case 'primary':
            case 'default':
            case 'light':
            case 'dark':
            case 'link':
            case 'success':
            case 'secondary':
            case 'danger':
            case 'warning':
            case 'info':
                // Empty Role is Default
                if (v === '') {
                    this._role = 'default';
                }
                else {
                    this._role = v;
                }
                break;
            default:
                throw new Error('Invalid role " + v + " for button.');
        }
    }
    /**
     * Die Methode returns die definierte Style-Rolle des Buttons
     */
    get role() {
        return this._role;
    }
    /**
     * Getter Methode. Ergibt boolean Wert. Definiert, ob das Button desabled ist.
     */
    get _isdisabled() {
        return this._isdisabledvalue;
    }
    /**
     * Die Methode wird ein Event aufrufen, wenn das Button geklickt wird UND das Button nicht disabled ODER isloading ist.
     */
    buttonClick() {
        if (this._isdisabled === false && this._isloadingvalue === false) {
            this.onclick.emit();
        }
    }
}
NgButtonCommon.ɵfac = function NgButtonCommon_Factory(t) { return new (t || NgButtonCommon)(); };
NgButtonCommon.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NgButtonCommon, inputs: { name: "name", text: "text", icon: "icon", isloading: "isloading", isdisabled: "isdisabled", role: "role" }, outputs: { onclick: "onclick" } });
__decorate([
    Input(),
    __metadata("design:type", String)
], NgButtonCommon.prototype, "name", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NgButtonCommon.prototype, "text", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NgButtonCommon.prototype, "icon", void 0);
__decorate([
    Input('isloading'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], NgButtonCommon.prototype, "isloading", null);
__decorate([
    Input('isdisabled'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], NgButtonCommon.prototype, "isdisabled", null);
__decorate([
    Input('role'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], NgButtonCommon.prototype, "role", null);
__decorate([
    Output(),
    __metadata("design:type", Object)
], NgButtonCommon.prototype, "onclick", void 0);

/**
 * Base Komponente für Dialog
 */
class NgDialogCommon {
    // #region Constructor
    /**
     * Konstruktor
     * Inject des Formulars
     */
    constructor(cdRef) {
        this.cdRef = cdRef;
        /**
         * Boolean Property definiert ob das Dialog angezeigt wird
         */
        this._show = false;
        /**
         * Das property enthielt (wenn überhaupt gesetzt) entweder keywords für sizing oder custom css Klassen.
         * Die akzeptabel keywordssind: 'small', 'large', 'extralarge', 'medium', ''.
         */
        this._size = '';
        // #endregion
        // #region Properties
        /**
         * Input Property. Erhält den Title des Dialog. Default Value: 'Dialog'.
         */
        this._title = 'Dialog';
        /**
         * Das input property akzeptiert boolen Wert. Definiert ob das Dialog darf durch ESC geschlossen werden. Default ist true.
         */
        this._allowesc = true;
        /**
         * Das input property akzeptiert boolen Wert. Definiert ob das Dialog darf durch click außerhalb des Dialog-Fenster geschlossen werden. Default ist true.
         */
        this._backdrop = true;
        /**
         * Input Property. Erhält den Namen des Dialog - benutzt für das ID. Default Value: ''
         */
        this._name = '';
        /**
         * Steuert ob im Header des Dialogs ein Button angezeigt wird.
         */
        this.closebutton = true;
        /**
         * Input Property. Erhält die Breite des Dialog
         */
        this.width = null;
        /**
         * Output Emitter. Wird aufgerufen, wenn das Wert des _show property geändert ist - damait das Dialog geöfnet/geschlossen wird.
         */
        this.isVisibleEmitter = new EventEmitter();
    }
    /**
     * Implementation als Setter, da mit ngIf das Element bei Unsichtbarkeit UNDEFINED ist.
     */
    set dialogElementSetter(content) {
        this.dialogElement = content;
        /**
         * Detect Changes ausführen, da beim Einblenden/Ausblenden des Dialogs Parameter und Properties ändern können diese ausserhalb der Standart ChangeDetection geändert würden.
         */
        // this.cdRef.detectChanges();
    }
    /**
     * Das Input akzeptiert sowohl default size-css-Klassen als auch custom Klassen.
     * case insensitive.
     * Die akzeptabel default-size-Klassen sind: 'small', 'large', 'extralarge', 'medium', ''.
     * Wenn size ist NICHT gesetzt (oder 'medium' oder ''), default ist in medium size: max-width 500px.
     */
    set defineSize(v) {
        v = v.toLowerCase();
        this._size = v;
    }
    /**
    * Setter. Erhält das boolen Wert des _show property
    */
    set visible(v) {
        this._show = v;
        if (this._show && !document.body.classList.contains('modal-open')) {
            document.body.classList.add('modal-open');
        }
        if (this._show === false && document.body.classList.contains('modal-open')) {
            document.body.classList.remove('modal-open');
        }
    }
    /**
     * Getter. Ergibt das boolen Wert des _show property
     */
    get isVisible() {
        return this._show;
    }
    /**
     * Die Funktion prüft ob es ein default css classe für Size des Dialog durch den size Input gesetzt wurde.
     */
    issetdefaultsize() {
        let result = false;
        switch (this._size) {
            case 'small':
                result = true;
                break;
            case 'medium':
                result = true;
                break;
            case 'large':
                result = true;
                break;
            case 'extralarge':
                result = true;
                break;
            case '':
                result = true;
                break;
        }
        return result;
    }
    // #endregion
    // #region Methods
    /**
     * Die Methode setz den Wert des _show property auf true
     */
    show() {
        this._show = true;
        if (this._show && !document.body.classList.contains('modal-open')) {
            document.body.classList.add('modal-open');
        }
        this.isVisibleEmitter.emit(this._show);
    }
    /**
     * Die Methode setz den Wert des _show property auf false
     */
    hide() {
        this._show = false;
        if (this._show === false && document.body.classList.contains('modal-open')) {
            document.body.classList.remove('modal-open');
        }
        this.isVisibleEmitter.emit(this._show);
    }
    /**
     * Getter for ChangeDetector.
     */
    get ChangeDetector() {
        return this.cdRef;
    }
    // #endregion
    // #region Host Actions
    /**
     * Allow Close by Click outside Dialog
     */
    onClick(event) {
        if (this._allowesc === false || (this.dialogElement !== null && this.dialogElement !== undefined && event.target !== this.dialogElement.nativeElement)) {
            return;
        }
        this.hide();
    }
    /**
     * Allow Close by ESC
     */
    onKeydownHandler(event) {
        const ESCAPE_KEYCODE = 27;
        if (this._allowesc === true && event.keyCode === ESCAPE_KEYCODE) {
            this.hide();
        }
    }
}
NgDialogCommon.ɵfac = function NgDialogCommon_Factory(t) { ɵngcc0.ɵɵinvalidFactory(); };
NgDialogCommon.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NgDialogCommon, viewQuery: function NgDialogCommon_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.dialogElementSetter = _t.first);
    } }, hostBindings: function NgDialogCommon_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function NgDialogCommon_click_HostBindingHandler($event) { return ctx.onClick($event); })("keydown", function NgDialogCommon_keydown_HostBindingHandler($event) { return ctx.onKeydownHandler($event); }, false, ɵngcc0.ɵɵresolveDocument);
    } }, inputs: { _title: ["title", "_title"], _allowesc: ["allowesc", "_allowesc"], _backdrop: ["backdrop", "_backdrop"], _name: ["name", "_name"], closebutton: "closebutton", width: "width", defineSize: ["size", "defineSize"], visible: ["isvisible", "visible"] }, outputs: { isVisibleEmitter: "isvisibleChange" } });
__decorate([
    ViewChild('dialog', { static: true }),
    __metadata("design:type", ElementRef),
    __metadata("design:paramtypes", [ElementRef])
], NgDialogCommon.prototype, "dialogElementSetter", null);
__decorate([
    Input('title'),
    __metadata("design:type", String)
], NgDialogCommon.prototype, "_title", void 0);
__decorate([
    Input('allowesc'),
    __metadata("design:type", Boolean)
], NgDialogCommon.prototype, "_allowesc", void 0);
__decorate([
    Input('backdrop'),
    __metadata("design:type", Boolean)
], NgDialogCommon.prototype, "_backdrop", void 0);
__decorate([
    Input('name'),
    __metadata("design:type", String)
], NgDialogCommon.prototype, "_name", void 0);
__decorate([
    Input('closebutton'),
    __metadata("design:type", Boolean)
], NgDialogCommon.prototype, "closebutton", void 0);
__decorate([
    Input('width'),
    __metadata("design:type", String)
], NgDialogCommon.prototype, "width", void 0);
__decorate([
    Input('size'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], NgDialogCommon.prototype, "defineSize", null);
__decorate([
    Output('isvisibleChange'),
    __metadata("design:type", EventEmitter)
], NgDialogCommon.prototype, "isVisibleEmitter", void 0);
__decorate([
    Input('isvisible'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], NgDialogCommon.prototype, "visible", null);
__decorate([
    HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NgDialogCommon.prototype, "onClick", null);
__decorate([
    HostListener('document:keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], NgDialogCommon.prototype, "onKeydownHandler", null);

/**
 * Erzeugt ein Boolean
 * @param value
 */
function convertToBoolean(value) {
    if (value === null || value === undefined || typeof value === 'boolean') {
        return value;
    }
    return value.toString() === 'true';
}
/**
 * Erzeugt ein Number
 * @param value
 */
function convertToNumber(value) {
    if (value === null || value === undefined || typeof value === 'number') {
        return value;
    }
    return parseFloat(value.toString());
}
/**
 * Erzeugt aus einer Map ein Objekt
 * @param map Map mit Key und Values. Key ist ein String. Value kann ein Objekt sein.
 */
function mapToObject(map) {
    const obj = {};
    map.forEach((v, k) => {
        obj[k] = v;
    });
    return obj;
}

/**
 * Base Komponente für NgFormular
 */
class NgFormularCommon {
    /**
     * Konstruktor
     * @param form Instanz von NgForm
     */
    constructor(form) {
        this.form = form;
        /**
        * Inline Errors für das Formular
        */
        this._inlineerrorenabled = null;
        /**
         * Default Label Size for Form
         */
        this.labelsize = 3;
        /**
         * Kontroliert, ob das Label adaptive ist
         */
        this.isadaptivelabel = false;
        /**
         * Type des Forms
         */
        this.orientation = 'horizontal';
        this._updateon = 'change';
        this.form.options = { updateOn: this._updateon };
    }
    /**
     * Definiert, wenn das Model geupdatet wird
     */
    set updateon(v) {
        this._updateon = v;
        this.form.options.updateOn = v;
    }
    get updateon() {
        return this._updateon;
    }
    set inlineerrorenabled(value) {
        if (value === null || value === undefined) {
            this._inlineerrorenabled = null;
        }
        else {
            this._inlineerrorenabled = convertToBoolean(value);
        }
    }
    /**
     * Aktiviert oder Deaktiviert die Inline Errors für das Control
     */
    get inlineerrorenabled() {
        return this._inlineerrorenabled;
    }
    /**
     * Vertikale oder horizontale Orientierung des Formulars zurück
     */
    getOrientation() {
        switch (this.orientation.toLowerCase()) {
            case 'horizontal':
                return 'horizontal';
            case 'vertical':
                return 'vertical';
            case 'none':
                return 'none';
            default:
                throw new Error('Invalid formtype at ngFormularCommon. Valid values are horizontal, vertical, none');
        }
    }
    /**
     * Gibt die NgForm Instanz zurück
     */
    getForm() {
        return this.form;
    }
    /**
     * Markiert alle Controls innerhalb des Formulares als Touched
     */
    markAsTouched() {
        if (this.form && this.form.invalid) {
            this.markAsTouchedInternal(this.form.controls);
        }
    }
    /**
     * Aktualisiert die Werte und den Gültigkeitsstatus des Formulars
     */
    updateValueAndValidity(markAsTouched = true) {
        // Update all Controls
        this.updateValueAndValidityInternal(this.form.controls);
        // Update Main Form
        this.getForm().form.updateValueAndValidity();
        // Mark all Controls as Touched
        if (markAsTouched) {
            this.markAsTouched();
        }
    }
    /**
     * Markiert alle Controls inkl. dem Tree als Touched
     * @param controls Controls Collection
     */
    markAsTouchedInternal(controls) {
        const keyList = Object.keys(controls);
        for (const field of keyList) {
            const control = controls[field];
            if (control instanceof FormGroup) {
                this.markAsTouchedInternal(control.controls);
            }
            else {
                control.markAsTouched({ onlySelf: true });
            }
        }
    }
    /**
     * Aktualisiert die Werte und die gültigkeit des Formulars
     * @param controls Controls Collection
     */
    updateValueAndValidityInternal(controls) {
        const keyList = Object.keys(controls);
        for (const field of keyList) {
            const control = controls[field];
            if (control instanceof FormGroup) {
                this.updateValueAndValidityInternal(control.controls);
            }
            else {
                control.updateValueAndValidity({ onlySelf: true });
            }
        }
    }
    /**
     * Gibt zurück, ob die Inline Error Meldungen für das Formular aktiv sind.
     */
    get IsInlineErrorEnabled() {
        return this._inlineerrorenabled !== false;
    }
}
NgFormularCommon.ɵfac = function NgFormularCommon_Factory(t) { ɵngcc0.ɵɵinvalidFactory(); };
NgFormularCommon.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NgFormularCommon, inputs: { labelsize: "labelsize", isadaptivelabel: "isadaptivelabel", orientation: "orientation", updateon: "updateon", inlineerrorenabled: "inlineerrorenabled", ngFormular: "ngFormular" } });
__decorate([
    Input(),
    __metadata("design:type", String)
], NgFormularCommon.prototype, "ngFormular", void 0);
__decorate([
    Input('labelsize'),
    __metadata("design:type", Number)
], NgFormularCommon.prototype, "labelsize", void 0);
__decorate([
    Input('isadaptivelabel'),
    __metadata("design:type", Boolean)
], NgFormularCommon.prototype, "isadaptivelabel", void 0);
__decorate([
    Input('orientation'),
    __metadata("design:type", String)
], NgFormularCommon.prototype, "orientation", void 0);
__decorate([
    Input('updateon'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], NgFormularCommon.prototype, "updateon", null);
__decorate([
    Input('inlineerrorenabled'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], NgFormularCommon.prototype, "inlineerrorenabled", null);

/**
 * Prüft ob ein Objekt Defined ist
 * @param value Objekt
 * @return Objekt ist definied. TRUE wenn Objekt definied. FALSE wenn Objekt NULL oder UNDEFINED.
 */
function isDefined(value) {
    return typeof value !== 'undefined' && value !== null;
}

/**
 *  Klasse zum ersetzen von Platzhaltern in Strings
 */
class Interpolation {
    constructor() {
        /**
         *  Template zum Parsen der Platzhalter
         */
        this.templateMatcher = /{{\s?([^{}\s]*)\s?}}/g;
    }
    /**
     * Platzhalter in String ersetzen
     * @param text Text in welchem die Platzhalter ersetzt werden
     * @param params Objekt mit Parameter.
     */
    interpolateString(text, params) {
        if (!params) {
            return text;
        }
        return text.replace(this.templateMatcher, (substring, b) => {
            const r = this.getValue(params, b);
            return isDefined(r) ? r : substring;
        });
    }
    /**
     * Wert aus Objekt in Objekt oder Objektstruktur lesen
     * @param target Objekt das zu parsen ist.
     * @param key Key nach welchem gesucht wird. Navigation in Properties des Objekt mit einem Punkt.
     */
    getValue(target, key) {
        const keys = key.split('.');
        key = '';
        do {
            key += keys.shift();
            if (isDefined(target) && isDefined(target[key]) && (typeof target[key] === 'object' || !keys.length)) {
                target = target[key];
                key = '';
            }
            else if (!keys.length) {
                target = undefined;
            }
            else {
                key += '.';
            }
        } while (keys.length);
        return target;
    }
}

/**
 * Injection Token für Language Resource Service
 */
const LANGUAGERESOURCE_SERVICE = new InjectionToken('LanguageResourceService');
/**
 * Base Service für Localisation von Fehlermeldungen
 *
 * @example
 *
 * // Eigene Beispielimplementierung für Application mit ngx-translate
 * (at)Injectable()
 * export class ControlsLocalisation extends LanguageResourceService {
 *
 *   constructor(private translate: TranslateService) {
 *     super();
 *
 *     this.translate.setDefaultLang('de');
 *     this.translate.use('de');
 *   }
 *
 *     public GetString(key: string, params?: any): Observable<string> {
 *        return this.translate.get(key, params);
 *     }
 *  }
 *
 */
/**
* Service für interne Übersetzungen
* */
let LanguageResourceService = class LanguageResourceService {
};
LanguageResourceService.ɵfac = function LanguageResourceService_Factory(t) { return new (t || LanguageResourceService)(); };
LanguageResourceService.ɵprov = ɵɵdefineInjectable({ factory: function LanguageResourceService_Factory() { return new LanguageResourceService(); }, token: LanguageResourceService, providedIn: "root" });
/**
 * Standardservice für interne Übersetzungen der Fehlermeldungen
 * */
let InternalLanguageResourceService = class InternalLanguageResourceService extends LanguageResourceService {
    /**
     * Konstruktor
     * */
    constructor() {
        super();
        /**
         * Language Resources für Controls Library
         */
        this.data = new Map();
        // Set Languages
        this.data.set('de', new Map());
        this.data.get('de').set('VALIDATION_ERROR_REQUIRED', 'Feld ist erforderlich.');
        this.data.get('de').set('VALIDATION_ERROR_SUMMARY_REQUIRED', 'Feld "{{FIELD}}" ist erforderlich.');
        this.data.get('de').set('VALIDATION_ERROR_MINVALUE', 'Wert darf nicht kleiner als {{MINVALUE}} sein.');
        this.data.get('de').set('VALIDATION_ERROR_SUMMARY_MINVALUE', 'Feld "{{FIELD}}" darf nicht kleiner als {{MINVALUE}} sein.');
        this.data.get('de').set('VALIDATION_ERROR_PATTERN', 'Wert entspricht nicht der Format Vorlage.');
        this.data.get('de').set('VALIDATION_ERROR_SUMMARY_PATTERN', 'Feld "{{FIELD}}" entspricht nicht der Format Vorlage.');
        this.data.get('de').set('VALIDATION_ERROR_MAXVALUE', 'Wert darf nicht grösser als {{MAXVALUE}} sein.');
        this.data.get('de').set('VALIDATION_ERROR_SUMMARY_MAXVALUE', 'Feld "{{FIELD}}" darf nicht grösser als {{MAXVALUE}} sein.');
        this.data.get('de').set('VALIDATION_ERROR_EMAIL', 'Feld ist keine E-Mail Adresse');
        this.data.get('de').set('VALIDATION_ERROR_SUMMARY_EMAIL', 'Feld "{{FIELD}}" ist keine E-Mail Adresse');
        this.data.get('de').set('VALIDATION_ERROR_MINLENGTH', 'Feld erfordert min. {{MINLENGTH}} Zeichen.');
        this.data.get('de').set('VALIDATION_ERROR_SUMMARY_MINLENGTH', 'Feld "{{FIELD}}" erfordert min. {{MINLENGTH}} Zeichen.');
        this.data.get('de').set('VALIDATION_ERROR_MINDATE', 'Feld muss neuer oder gleich {{MINDATE}} sein.');
        this.data.get('de').set('VALIDATION_ERROR_SUMMARY_MINDATE', 'Feld "{{FIELD}}" muss neuer oder gleich {{MINDATE}} sein.');
        this.data.get('de').set('VALIDATION_ERROR_MAXDATE', 'Feld muss älter oder gleich {{MAXDATE}} sein.');
        this.data.get('de').set('VALIDATION_ERROR_SUMMARY_MAXDATE', 'Feld "{{FIELD}}" muss älter oder gleich {{MAXDATE}} sein.');
        this.data.get('de').set('VALIDATION_ERROR_MINTIME', 'Feld muss neuer oder gleich {{MINTIME}} sein.');
        this.data.get('de').set('VALIDATION_ERROR_SUMMARY_MINTIME', 'Feld "{{FIELD}}" muss neuer oder gleich {{MINTIME}} sein.');
        this.data.get('de').set('VALIDATION_ERROR_MAXTIME', 'Feld muss älter oder gleich {{MAXTIME}} sein.');
        this.data.get('de').set('VALIDATION_ERROR_SUMMARY_MAXTIME', 'Feld "{{FIELD}}" muss älter oder gleich {{MAXTIME}} sein.');
        this.data.get('de').set('VALIDATION_ERROR_DATETIMEFORMAT', 'Feld ist kein gültiges Datum.');
        this.data.get('de').set('VALIDATION_ERROR_SUMMARY_DATETIMEFORMAT', 'Feld "{{FIELD}}" ist kein gültiges Datum.');
        this.data.get('de').set('VALIDATION_ERROR_FILESMIN', 'Es müssen min. {{MINFILES}} Dateien hochgeladen sein.');
        this.data.get('de').set('VALIDATION_ERROR_SUMMARY_FILESMIN', 'Feld "{{FIELD}}" muss min. {{MINFILES}} Dateien hochgeladen haben.');
        this.data.get('de').set('VALIDATION_ERROR_MULTILANGUAGEREQUIREDANY', 'Es muss min. 1 Sprache erfasst sein.');
        this.data.get('de').set('VALIDATION_ERROR_SUMMARY_MULTILANGUAGEREQUIREDANY', 'Feld "{{FIELD}}" muss min. 1 Sprache erfasst haben.');
        this.data.get('de').set('VALIDATION_ERROR_MULTILANGUAGEREQUIRED', 'Es müssen alle Sprachen erfasst sein.');
        this.data.get('de').set('VALIDATION_ERROR_SUMMARY_MULTILANGUAGEREQUIRED', 'Feld "{{FIELD}}" muss alle Sprachen erfasst haben.');
        // EN
        this.data.set('en', new Map());
    }
    /**
     * Die Funktion setzt die default Sprache auf DE, falls die Sprach-Setzung nicht möglich ist.
     */
    GetFallbackLanguage() {
        return 'de';
    }
    /**
     * Die Funktion ergibt die ausgewählte Sprache.
     */
    GetLanguage() {
        const language = navigator.language;
        if (language.indexOf('-') >= 0) {
            return language.split('-')[0];
        }
        else {
            return language;
        }
    }
    /**
    * Die Methode ergibt die selecte Sprache (string)  anhand von Key und Params
    */
    GetString(key, params) {
        return new Observable((observer) => {
            let language = this.GetLanguage();
            if (!this.data.has(language)) {
                language = this.GetFallbackLanguage();
                // Return Key if no Language exists
                if (!this.data.has(language)) {
                    observer.next(key);
                    observer.complete();
                    return;
                }
            }
            if (this.data.get(language).has(key)) {
                const resource = this.data.get(language).get(key);
                if (params !== undefined && params !== null) {
                    const formatter = new Interpolation();
                    observer.next(formatter.interpolateString(resource, params));
                    observer.complete();
                    return;
                }
                else {
                    observer.next(resource);
                    observer.complete();
                    return;
                }
            }
            else {
                observer.next(key);
                observer.complete();
                return;
            }
        });
    }
};
InternalLanguageResourceService.ɵfac = function InternalLanguageResourceService_Factory(t) { return new (t || InternalLanguageResourceService)(); };
InternalLanguageResourceService.ɵprov = ɵɵdefineInjectable({ factory: function InternalLanguageResourceService_Factory() { return new InternalLanguageResourceService(); }, token: InternalLanguageResourceService, providedIn: "root" });
InternalLanguageResourceService = __decorate([ __metadata("design:paramtypes", [])
], InternalLanguageResourceService);

/**
 * Abstract Klasse für NgBaseModelControl. Implements ControlValueAccessor, Validator, OnInit
 */
let NgBaseModelControl = class NgBaseModelControl {
    // #endregion
    // #region Constructor
    /**
     * Konstruktor
     * Inject des Formulars
     * @parent NgFormularCommon
     * @injector Injector
     */
    constructor(parent, injector) {
        this.injector = injector;
        /**
         * NgModel Form ist disabled
         */
        this._disabledForm = false;
        // #endregion
        // #region Properties
        /**
         * Name des Controls
         */
        this._name = '';
        /**
         * Definiert den Label Text
         */
        this._label = '';
        /**
         * Definiert die Labelgröse
         */
        this._labelsize = undefined;
        /**
         * Deaktiviert das Label im Template
         */
        this._disablelabel = false;
        /**
         * Deaktiviert das Input Control
         */
        this._disabledControl = false;
        /**
         * Kontroliert, ob das Label adaptive ist
         */
        this._isadaptivelabel = undefined;
        /**
         * Definiert, ob das Control Sprachspezifisch ist
         */
        this._islanguagespecific = false;
        /**
         * Interne Variable, die den Wert des Controls hält
         */
        this._value = null;
        /**
        * Boolean Property dirty; default Wert - false
        */
        this._dirty = false;
        /**
         * Boolean Property touched; default Wert - false
         */
        this._touched = false;
        /**
        * Inline Errors für das Control
        */
        this._inlineerrorenabled = null;
        // #endregion
        // #region Implementation ControlValueAccessor
        /**
         * Leere Implementation von "propagateChange". Muss gemacht werden, damit kein Fehler entsteht
         */
        this.propagateChange = () => { };
        /**
         * Leere Implementation von "propagateTouch". Muss gemacht werden, damit kein Fehler entsteht
         */
        this.propagateTouch = () => { };
        this.parent = parent;
        this.lngResourceService = injector.get(LANGUAGERESOURCE_SERVICE, new InternalLanguageResourceService());
    }
    /**
     * Definiert ob das Control disabled ist
     */
    get isdisabled() {
        return this._disabledForm || this._disabledControl;
    }
    // #endregion
    // #region Control Events
    /**
     * Init Event
     */
    ngOnInit() {
        this.ngControl = this.injector.get(NgControl, null);
        /**
         * Label Size von Formular lesen
         */
        if (this._labelsize === undefined) {
            if (this.parent.labelsize !== undefined) {
                this._labelsize = this.parent.labelsize;
            }
            else {
                this._labelsize = 4;
            }
        }
        /**
         * Adaptive Label from Form
         */
        if (this._isadaptivelabel === undefined) {
            if (this.parent.isadaptivelabel !== undefined) {
                this._isadaptivelabel = this.parent.isadaptivelabel;
            }
            else {
                this._isadaptivelabel = false;
            }
        }
        this.OnClassInit();
    }
    /**
     * Methode, damit andere Controls änderungen im Control mitbekommen können
     * Zur Änderungsinfo die Methode propagateChange aufrufen.
     */
    registerOnChange(fn) {
        this.propagateChange = (obj) => fn(obj);
    }
    /**
     * Methode, damit andere Controls änderungen mitbekommen, wenn das Control aktiviert (Focus) wird.
     */
    registerOnTouched(fn) {
        this.propagateTouch = (obj) => fn(obj);
    }
    /**
     * Methode zum schreiben von Werten aus dem Model in das Control
     */
    writeValue(value) {
        this._value = value;
    }
    /**
     * Setzt das Control auf Disabled
     */
    setDisabledState(isDisabled) {
        this._disabledForm = isDisabled;
    }
    // #endregion
    // #region Control Value
    /**
     * Set Methode für NgModel Binding in Html Markup
     * Input wird benötigt, damit der Wert auch über das Markup gesetzt werden kann.
     */
    set value(v) {
        this._value = this.ConvertInputValue(v);
        this.propagateChange(this._value);
    }
    /**
     * Get Methode für NgModel Binding in Html Markup
     */
    get value() {
        return this._value;
    }
    /**
     * Methode die den Wert des Inputs setzt
     */
    setValue(v) {
        this.value = v;
    }
    // #endregion
    // #region Internal Properties
    /**
     * Berechnet die Breite des Labels
     */
    get _inputsize() {
        return 12 - this._labelsize;
    }
    // #endregion
    // #region Protected Helper Methods
    /**
     * Method can be used to Set Properties at Class Init
     */
    OnClassInit() {
    }
    /**
     * Methode ergibt Decimal Symbol
     */
    GetDecimalSymbol() {
        return '.';
    }
    /**
     * Method can Overwriten in Parent Classes
     */
    ConvertInputValue(value) {
        return value;
    }
    // #endregion
    //#region Validation Base
    /**
     * Validator Methode
     */
    validate(c) {
        const error = this.validateData(c);
        return error;
    }
    /**
     * Methode registriert Änderungen bei der Validierung
     */
    registerOnValidatorChange(fn) { this._onChange = fn; }
    /**
     * Methode ergibt Boolean Wert für dirty
     */
    get dirty() {
        if (this.ngControl !== null) {
            this._dirty = this.ngControl.dirty;
        }
        return this._dirty;
    }
    /**
     * Methode ergibt Boolean Wert für touched
     */
    get touched() {
        if (this.ngControl !== null) {
            this._touched = this.ngControl.touched;
        }
        return this._touched;
    }
    /**
     * Methode ergibt boolean Wert wenn Form invalid oder nicht invalid ist
     */
    get invalid() { return this.ngControl !== undefined && this.ngControl !== null && this.ngControl.invalid; }
    /**
     * Methode ergibt boolean touched = true
     */
    onTouch() {
        this._touched = true;
        this.propagateTouch();
    }
    /**
     * Methode ergibt Error anhand von gegebenen Kriterien
     */
    GetErrorMessage() {
        if (this.ngControl.errors === undefined || this.ngControl.errors === null) {
            return new Observable((observer) => {
                observer.next('');
                observer.complete();
            });
        }
        const errors = this.ngControl.errors;
        if (errors.length === 0) {
            return new Observable((observer) => {
                observer.next('');
                observer.complete();
            });
        }
        const keys = Object.keys(errors);
        if (keys.length <= 0) {
            return new Observable((observer) => {
                observer.next('');
                observer.complete();
            });
        }
        const errorItem = errors[keys[0]];
        // Validation Parameters
        const parameters = {};
        if (errorItem.parameters !== null && errorItem.parameters !== undefined) {
            errorItem.parameters.forEach((v, k) => { parameters[k] = v; });
        }
        parameters['FIELD'] = errorItem.fieldName;
        return this.lngResourceService.GetString(errorItem.errorMessageKey, parameters);
    }
    UpdateValueAndValidity() {
        this.ngControl.control.updateValueAndValidity({ onlySelf: true });
    }
    set inlineerrorenabled(value) {
        if (value === null || value === undefined) {
            this._inlineerrorenabled = null;
        }
        else {
            this._inlineerrorenabled = convertToBoolean(value);
        }
    }
    /**
     * Aktiviert oder Deaktiviert die Inline Errors für das Control
     */
    get inlineerrorenabled() {
        return this._inlineerrorenabled;
    }
    /**
     * Gibt zurück, ob die Inline Error Meldungen für diesem Control aktiv sind.
     */
    get IsInlineErrorEnabled() {
        if (this.parent.IsInlineErrorEnabled === null || this.parent.IsInlineErrorEnabled === undefined) {
            return this._inlineerrorenabled;
        }
        return this.parent.IsInlineErrorEnabled !== false && this._inlineerrorenabled !== false;
    }
};
NgBaseModelControl.ɵfac = function NgBaseModelControl_Factory(t) { return new (t || NgBaseModelControl)(ɵngcc0.ɵɵdirectiveInject(NgFormularCommon, 1), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Injector)); };
NgBaseModelControl.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NgBaseModelControl, inputs: { _name: ["name", "_name"], _label: ["label", "_label"], _labelsize: ["labelsize", "_labelsize"], _disablelabel: ["disablelabel", "_disablelabel"], _disabledControl: ["disabled", "_disabledControl"], _isadaptivelabel: ["isadaptivelabel", "_isadaptivelabel"], _islanguagespecific: ["islanguagespecific", "_islanguagespecific"], value: "value", inlineerrorenabled: "inlineerrorenabled" } });
__decorate([
    Input('name'),
    __metadata("design:type", String)
], NgBaseModelControl.prototype, "_name", void 0);
__decorate([
    Input('label'),
    __metadata("design:type", String)
], NgBaseModelControl.prototype, "_label", void 0);
__decorate([
    Input('labelsize'),
    __metadata("design:type", Number)
], NgBaseModelControl.prototype, "_labelsize", void 0);
__decorate([
    Input('disablelabel'),
    __metadata("design:type", Boolean)
], NgBaseModelControl.prototype, "_disablelabel", void 0);
__decorate([
    Input('disabled'),
    __metadata("design:type", Boolean)
], NgBaseModelControl.prototype, "_disabledControl", void 0);
__decorate([
    Input('isadaptivelabel'),
    __metadata("design:type", Boolean)
], NgBaseModelControl.prototype, "_isadaptivelabel", void 0);
__decorate([
    Input('islanguagespecific'),
    __metadata("design:type", Boolean)
], NgBaseModelControl.prototype, "_islanguagespecific", void 0);
__decorate([
    Input('value'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], NgBaseModelControl.prototype, "value", null);
__decorate([
    Input('inlineerrorenabled'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], NgBaseModelControl.prototype, "inlineerrorenabled", null);
NgBaseModelControl = __decorate([
    __param(0, Host()),
    __metadata("design:paramtypes", [NgFormularCommon, Injector])
], NgBaseModelControl);

/**
 * Basis Komponente für NgCheckboxCommon. Extends NgBaseModelControl
 */
class NgCheckboxCommon extends NgBaseModelControl {
    constructor() {
        super(...arguments);
        /**
        * Text welcher als Tooltip angezeigt wird.
        */
        this._tooltiptext = '';
    }
    /**
     * Control hat keinen Validator
     */
    validateData(c) {
        return null;
    }
}
NgCheckboxCommon.ɵfac = function NgCheckboxCommon_Factory(t) { return ɵNgCheckboxCommon_BaseFactory(t || NgCheckboxCommon); };
NgCheckboxCommon.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NgCheckboxCommon, inputs: { _tooltiptext: ["tooltiptext", "_tooltiptext"], _checkboxtext: ["checkboxtext", "_checkboxtext"] }, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
__decorate([
    Input('tooltiptext'),
    __metadata("design:type", String)
], NgCheckboxCommon.prototype, "_tooltiptext", void 0);
__decorate([
    Input('checkboxtext'),
    __metadata("design:type", Object)
], NgCheckboxCommon.prototype, "_checkboxtext", void 0);

/**
 * Basis Komponente für NgRadiobutton.
 */
class NgRadiobuttonCommon {
    /**
     * Konstruktor
     * @param ngRadioButtons
     */
    constructor(ngRadioButtons) {
        this.ngRadioButtons = ngRadioButtons;
        /**
         * Output Event
         */
        this.onselectitem = new EventEmitter();
        /**
         * Boolean Property zum Ausblenden des Controls; default Wert - false
         */
        this._hidden = false;
        /**
         * Unique Index für RadioButton
         */
        this._index = null;
        // Registration des Controls in NgRadioButtons Container
        this.ngRadioButtons.RegisterRadioButton(this);
    }
    /**
     * Methode ergibt Boolean, ob Control disabled ist
     */
    get isDisabled() {
        return this._disabled || this.ngRadioButtons._disabledControl;
    }
    /**
     * Setter für hidden Property
     */
    set hidden(v) {
        if (v === null || v === undefined || typeof v === 'boolean') {
            this._hidden = v;
        }
        else {
            this._hidden = v === 'true';
        }
        // Model Reset falls RadioButton selektiert war
        if (this._hidden && this._checked) {
            this.ngRadioButtons.SelectItem(null);
        }
    }
    get hidden() {
        return this._hidden;
    }
    /**
     * Getter für Unique Index
     */
    get getIndex() {
        if (this._index === null && this.ngRadioButtons !== null && this.ngRadioButtons !== undefined) {
            this._index = this.ngRadioButtons.GetRadionButtonIndex();
        }
        return this._index;
    }
    /**
     * Parent Control Name
     */
    get getName() {
        return this.ngRadioButtons._name;
    }
    //#endregion
    //#region Control Events
    /**
     * Event wenn die Komponente zerstört wird
     */
    ngOnDestroy() {
        // De-Registration des Controls in NgRadioButtons Container
        this.ngRadioButtons.UnregisterRadioButton(this);
    }
    //#endregion
    /**
     * Event bei Änderungen
     */
    ChangeEvent() {
        this.ngRadioButtons.SelectItem(this._value);
        this.onselectitem.emit();
    }
}
NgRadiobuttonCommon.ɵfac = function NgRadiobuttonCommon_Factory(t) { ɵngcc0.ɵɵinvalidFactory(); };
NgRadiobuttonCommon.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NgRadiobuttonCommon, inputs: { hidden: "hidden", _value: ["value", "_value"], _label: ["label", "_label"], _checked: ["checked", "_checked"], _disabled: ["disabled", "_disabled"], displayValueTemplate: ["labeltemplate", "displayValueTemplate"] }, outputs: { onselectitem: "onselectitem" } });
__decorate([
    Input('value'),
    __metadata("design:type", Object)
], NgRadiobuttonCommon.prototype, "_value", void 0);
__decorate([
    Input('label'),
    __metadata("design:type", String)
], NgRadiobuttonCommon.prototype, "_label", void 0);
__decorate([
    Input('checked'),
    __metadata("design:type", Boolean)
], NgRadiobuttonCommon.prototype, "_checked", void 0);
__decorate([
    Input('disabled'),
    __metadata("design:type", Boolean)
], NgRadiobuttonCommon.prototype, "_disabled", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], NgRadiobuttonCommon.prototype, "onselectitem", void 0);
__decorate([
    Input('hidden'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], NgRadiobuttonCommon.prototype, "hidden", null);
__decorate([
    Input('labeltemplate'),
    __metadata("design:type", TemplateRef)
], NgRadiobuttonCommon.prototype, "displayValueTemplate", void 0);

/**
 * Moment
 */
const moment = moment_;
/**
 * Klasse für Validierungsfehler
 * */
class ValidationErrorItem {
    /**
     * Konstruktor
     * @param errorType Type des Fehlers
     * @param errorMessageKey Key für Fehlermeldung
     * @param errorMessageSummaryKey Key für Fehlermeldung in Validation Summary
     * @param fieldName Name des Labels oder Bezeichnung des Feldes
     */
    constructor(errorType, errorMessageKey, errorMessageSummaryKey, fieldName) {
        /**
         * Map mit Parametern die in den Meldungen als Platzhalter verwendet werden können
         */
        this.parameters = new Map();
        this.errorType = errorType;
        this.errorMessageKey = errorMessageKey;
        this.errorMessageValidationSummaryKey = errorMessageSummaryKey;
        this.fieldName = fieldName;
    }
}
/**
 * Klasse mit Standard Validatoren
 */
class Validation {
    /**
     * Die Methode ist von jedem Validator aufgerufen. Die setzt sowohl den errorType des gerpüfte Item, als auch die ErrorMessage (gemäss von errorType, FieldName und Parameters).
     * @param errorType Typ den Fehler
     * @param errorMessageKey Error Message Key
     * @param errorMessageValidationSummaryKey Error Message Key für Validation Summary
     * @param fieldName  Label oder Name des Feldes
     * @param parameters Parametern die in den Meldungen als Platzhalter verwendet werden können
     */
    static GetValidationErrorItem(errorType, errorMessageKey, errorMessageValidationSummaryKey, fieldName, parameters = new Map()) {
        const item = new ValidationErrorItem(errorType, errorMessageKey, errorMessageValidationSummaryKey, fieldName);
        if (parameters !== null && parameters !== undefined && parameters.size > 0) {
            parameters.forEach((v, k) => {
                item.parameters.set(k, v);
            });
        }
        return { [errorType]: item };
    }
    /**
     * Validator für Required State
     * @param control Control das Validiert wird
     * @param fieldName Label des Controls
     * @param validationMessage Validierungsmeldung die
     * @param validationMessageSummary Validierungsmeldung die im Validation Summary angezeigt wird
     */
    static required(control, fieldName, validationMessage, validationMessageSummary) {
        if (Validators.required(control) !== null) {
            return Validation.GetValidationErrorItem('required', validationMessage, validationMessageSummary, fieldName);
        }
        else {
            return null;
        }
    }
    /**
     * Validator für Min Value
     * @param control Control das Validiert wird
     * @param minvalue Min. Value
     * @param fieldName Label des Controls
     * @param validationMessage Validierungsmeldung die
     * @param validationMessageSummary Validierungsmeldung die im Validation Summary angezeigt wird
     */
    static minValue(control, minvalue, fieldName, validationMessage, validationMessageSummary) {
        const validator = Validators.min(minvalue);
        if (validator(control) !== null) {
            const parameters = new Map();
            parameters.set('MINVALUE', minvalue);
            return Validation.GetValidationErrorItem('minvalue', validationMessage, validationMessageSummary, fieldName, parameters);
        }
        else {
            return null;
        }
    }
    /**
     * Validierung mit einem RegEx Pattern
     * @param control Control das validiert werden soll.
     * @param pattern RegEx Pattern
     * @param fieldName Label des Controls
     * @param validationMessage Validierungsmeldung die
     * @param validationMessageSummary Validierungsmeldung die im Validation Summary angezeigt wird
     */
    static patternValidator(control, pattern, fieldName, validationMessage, validationMessageSummary) {
        const validator = Validators.pattern(pattern);
        if (validator(control) !== null) {
            const parameters = new Map();
            parameters.set('PATTERN', pattern);
            return Validation.GetValidationErrorItem('pattern', validationMessage, validationMessageSummary, fieldName, parameters);
        }
        else {
            return null;
        }
    }
    /**
     * Validator für Max Value
     * @param control Control das Validiert werden soll
     * @param maxvalue Max. Wert
     * @param fieldName Label des Controls
     * @param validationMessage Validierungsmeldung die
     * @param validationMessageSummary Validierungsmeldung die im Validation Summary angezeigt wird
     */
    static maxValue(control, maxvalue, fieldName, validationMessage, validationMessageSummary) {
        const validator = Validators.max(maxvalue);
        if (validator(control) !== null) {
            const parameters = new Map();
            parameters.set('MAXVALUE', maxvalue);
            return Validation.GetValidationErrorItem('maxvalue', validationMessage, validationMessageSummary, fieldName, parameters);
        }
        else {
            return null;
        }
    }
    /**
     * Validiert Feld auf E-Mail Adresse
     * @param control Control das Valdiert werden soll
     * @param fieldName Label des Controls
     * @param validationMessage Validierungsmeldung die
     * @param validationMessageSummary Validierungsmeldung die im Validation Summary angezeigt wird
     */
    static email(control, fieldName, validationMessage, validationMessageSummary) {
        if (Validators.email(control) !== null) {
            return Validation.GetValidationErrorItem('email', validationMessage, validationMessageSummary, fieldName);
        }
        else {
            return null;
        }
    }
    /**
     * Validiert auf die Länge des Wertes im Control
     * @param control Control das Validiert werden soll
     * @param minlength Min. Länge des Wertes
     * @param fieldName Label des Controls
     * @param validationMessage Validierungsmeldung die
     * @param validationMessageSummary Validierungsmeldung die im Validation Summary angezeigt wird
     */
    static minLength(control, minlength, fieldName, validationMessage, validationMessageSummary) {
        const validator = Validators.minLength(minlength);
        if (minlength !== null && minlength !== undefined && control.value !== '' && control.value !== undefined && control.value != null && validator(control) != null) {
            const parameters = new Map();
            parameters.set('MINLENGTH', minlength);
            return Validation.GetValidationErrorItem('minlength', validationMessage, validationMessageSummary, fieldName, parameters);
        }
        else {
            return null;
        }
    }
    /**
     * Validiert ob das Datum neuer als minDate ist
     * @param control Control das Validiert werden soll. Muss IDateTimeControl implementiert haben
     * @param minDate Min. Datum
     * @param fieldName Label des Controls
     * @param validationMessage Validierungsmeldung die
     * @param validationMessageSummary Validierungsmeldung die im Validation Summary angezeigt wird
     */
    static minDate(control, minDate, fieldName, validationMessage, validationMessageSummary) {
        // Check abbrechen, wenn kein gültiges Datum
        if (!control.IsDateValid() || minDate === null) {
            return null;
        }
        if (minDate > control.value) {
            const parameters = new Map();
            parameters.set('MINDATE', moment(minDate).format(control.GetDateTimeFormatString()));
            return Validation.GetValidationErrorItem('datemin', validationMessage, validationMessageSummary, fieldName, parameters);
        }
        else {
            return null;
        }
    }
    /**
     * Validiert ob das Datum älter als maxDate ist
     * @param control Control das Validiert werden soll. Muss IDateTimeControl implementiert haben
     * @param maxDate max. Datum
     * @param fieldName Label des Controls
     * @param validationMessage Validierungsmeldung die
     * @param validationMessageSummary Validierungsmeldung die im Validation Summary angezeigt wird
     */
    static maxDate(control, maxDate, fieldName, validationMessage, validationMessageSummary) {
        // Check abbrechen, wenn kein gültiges Datum
        if (!control.IsDateValid() || maxDate === null) {
            return null;
        }
        if (maxDate < control.value) {
            const parameters = new Map();
            parameters.set('MAXDATE', moment(maxDate).format(control.GetDateTimeFormatString()));
            return Validation.GetValidationErrorItem('datemax', validationMessage, validationMessageSummary, fieldName, parameters);
        }
        else {
            return null;
        }
    }
    /**
     * Validiert ob die Zeit später als minTime ist.
     * @param control Control das Validiert werden soll. Muss IDateTimeControl implementiert haben
     * @param minTime Min. Zeit
     * @param fieldName Label des Controls
     * @param validationMessage Validierungsmeldung die
     * @param validationMessageSummary Validierungsmeldung die im Validation Summary angezeigt wird
     */
    static minTime(control, minTime, fieldName, validationMessage, validationMessageSummary) {
        // Check abbrechen, wenn kein gültiges Datum
        if (!control.IsDateValid() || minTime === null) {
            return null;
        }
        if (control.value !== null && minTime > control.value) {
            const parameters = new Map();
            parameters.set('MINTIME', moment(minTime).format(control.GetDateTimeFormatString()));
            return Validation.GetValidationErrorItem('timemin', validationMessage, validationMessageSummary, fieldName, parameters);
        }
        else {
            return null;
        }
    }
    /**
     * Validiert ob die Zeit früher als maxTime ist.
     * @param control Control das Validiert werden soll. Muss IDateTimeControl implementiert haben
     * @param maxTime Min. Zeit
     * @param fieldName Label des Controls
     * @param validationMessage Validierungsmeldung die
     * @param validationMessageSummary Validierungsmeldung die im Validation Summary angezeigt wird
     */
    static maxTime(control, maxTime, fieldName, validationMessage, validationMessageSummary) {
        // Check abbrechen, wenn kein gültiges Datum
        if (!control.IsDateValid() || maxTime === null) {
            return null;
        }
        if (control.value !== null && maxTime < control.value) {
            const parameters = new Map();
            parameters.set('MAXTIME', moment(maxTime).format(control.GetDateTimeFormatString()));
            return Validation.GetValidationErrorItem('timemax', validationMessage, validationMessageSummary, fieldName, parameters);
        }
        else {
            return null;
        }
    }
    /**
     * Validator der prüft ob der Wert ein Datum ist.
     * @param control Control mit IDateTimeControl Interface implementierung
     * @param fieldName Label des Controls
     * @param validationMessage Validierungsmeldung die beim Control angezeigt wird
     * @param validationMessageSummary Validierungsmeldung die im Validation Summary angezeigt wird
     */
    static isValidDate(control, fieldName, validationMessage, validationMessageSummary) {
        if (!control.IsDateValid()) {
            return Validation.GetValidationErrorItem('dateformat', validationMessage, validationMessageSummary, fieldName);
            // return { 'dateformat': true, 'message': 'Feld "' + fieldName + '" ist kein gültiges Datum' };
        }
        else {
            return null;
        }
    }
    /**
     * Validator für min. Anzahl von Uploads
     * @param control Control das Validatiert werden soll. Control muss IUploadControl implementiert haben
     * @param minFiles Min. Anzahl Files die hochgeladen werden müssen
     * @param fieldName Label des Controls
     * @param validationMessage Validierungsmeldung die unterhalb des Controls angezeigt wird
     * @param validationMessageSummary Validierungsmeldung die im Validation Summary angezeigt wird
     */
    static minFiles(control, minFiles, fieldName, validationMessage, validationMessageSummary) {
        // Check abbrechen, wenn Min Files nicht gesetzt oder 0
        if (minFiles === null || minFiles === 0) {
            return null;
        }
        if (control.UploadedFileCount() !== null && minFiles > control.UploadedFileCount()) {
            const parameters = new Map();
            parameters.set('MINFILES', minFiles);
            return Validation.GetValidationErrorItem('dateformat', validationMessage, validationMessageSummary, fieldName, parameters);
        }
        else {
            return null;
        }
    }
    /**
     * Validator für MultiLanguage Control, welcher überprüft ob alle Sprachen erfasst sind.
     * @param control Control das Validatiert werden soll
     * @param languages Sprachen die im Control erfasst werden können.
     * @param fieldName Label des Controls
     * @param validationMessage Validierungsmeldung die unterhalb des Controls angezeigt wird
     * @param validationMessageSummary Validierungsmeldung die im Validation Summary angezeigt wird
     */
    static multilanguageRequired(control, languages, fieldName, validationMessage, validationMessageSummary) {
        let found = false;
        languages.forEach((item) => {
            if (control.value) {
                if (control.value[item.IsoCode] === undefined || control.value[item.IsoCode] === null || control.value[item.IsoCode] === '') {
                    found = true;
                }
            }
        });
        if (found) {
            return Validation.GetValidationErrorItem('required', validationMessage, validationMessageSummary, fieldName);
        }
        else {
            return null;
        }
    }
    /**
     * Validator für MultiLanguage Control, welcher überprüft ob min. ein Wert erfasst wurde
     * @param control Control das Validatiert werden soll
     * @param languages Sprachen die im Control erfasst werden können.
     * @param fieldName Label des Controls
     * @param validationMessage Validierungsmeldung die unterhalb des Controls angezeigt wird
     * @param validationMessageSummary Validierungsmeldung die im Validation Summary angezeigt wird
     */
    static multilanguageRequiredAny(control, languages, fieldName, validationMessage, validationMessageSummary) {
        let found = false;
        languages.forEach((item) => {
            if (control.value) {
                if (control.value[item.IsoCode] !== undefined && control.value[item.IsoCode] !== null && control.value[item.IsoCode] !== '') {
                    found = true;
                }
            }
        });
        if (!found) {
            return Validation.GetValidationErrorItem('requiredany', validationMessage, validationMessageSummary, fieldName);
        }
        else {
            return null;
        }
    }
}

/**
 * Basis Komponente für NgRadiobuttonsCommon. Extends NgBaseModelControl
 */
let NgRadiobuttonsCommon = class NgRadiobuttonsCommon extends NgBaseModelControl {
    /**
     * Konstruktor
     * Inject des Formulars
     */
    constructor(parent, injector) {
        super(parent, injector);
        /**
         * Radio Button Index
         */
        this.radioButtonIndex = 0;
        /**
         * Resource Key für Validation Message Required bei Control
         */
        this._validationMessageRequired = 'VALIDATION_ERROR_REQUIRED';
        /**
         * Resource Key für Validation Message Required in Validation Summary
         */
        this._validationMessageRequiredSummary = 'VALIDATION_ERROR_SUMMARY_REQUIRED';
        //#region Sub Control registration
        /**
         * Radio Buttons Content
         */
        this.contentRadiobuttons = [];
    }
    /**
     * Erstellung des RadioButton
     */
    RegisterRadioButton(radioButton) {
        this.contentRadiobuttons.push(radioButton);
    }
    /**
     * Löschen des Radio Button
     */
    UnregisterRadioButton(radioButton) {
        const index = this.contentRadiobuttons.indexOf(radioButton);
        if (index >= 0) {
            this.contentRadiobuttons.splice(index, 1);
        }
    }
    //#endregion
    /**
     * GEtter für Radio Button Index
     */
    GetRadionButtonIndex() {
        this.radioButtonIndex++;
        return this.radioButtonIndex;
    }
    //#region ngModel Implementation
    /**
     * Wert schreiben
     */
    writeValue(value) {
        super.writeValue(value);
        if (value !== null && value !== undefined) {
            this.contentRadiobuttons.forEach(itm => {
                itm._checked = itm._value === value;
            });
        }
    }
    //#endregion
    /**
     * Item selektieren
     */
    SelectItem(value) {
        this.contentRadiobuttons.forEach(itm => {
            itm._checked = itm._value === value;
        });
        this.value = value;
    }
    /**
     * Methode prüft ob Item checked ist
     */
    HasCheckedItem() {
        const radioButtons = this.contentRadiobuttons;
        if (radioButtons === undefined || radioButtons === null) {
            return false;
        }
        return this.contentRadiobuttons.some(itm => itm._checked);
    }
    /**
     * Validator
     */
    validateData(c) {
        if (!this.HasCheckedItem()) {
            return Validation.GetValidationErrorItem('required', this._validationMessageRequired, this._validationMessageRequiredSummary, this._label);
        }
        else {
            return null;
        }
    }
};
NgRadiobuttonsCommon.ɵfac = function NgRadiobuttonsCommon_Factory(t) { return new (t || NgRadiobuttonsCommon)(ɵngcc0.ɵɵdirectiveInject(NgFormularCommon, 1), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Injector)); };
NgRadiobuttonsCommon.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NgRadiobuttonsCommon, inputs: { _validationMessageRequired: ["validationmessagerequired", "_validationMessageRequired"], _validationMessageRequiredSummary: ["validationmessagesummaryrequired", "_validationMessageRequiredSummary"] }, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
__decorate([
    Input('validationmessagerequired'),
    __metadata("design:type", String)
], NgRadiobuttonsCommon.prototype, "_validationMessageRequired", void 0);
__decorate([
    Input('validationmessagesummaryrequired'),
    __metadata("design:type", String)
], NgRadiobuttonsCommon.prototype, "_validationMessageRequiredSummary", void 0);
NgRadiobuttonsCommon = __decorate([
    __param(0, Host()),
    __metadata("design:paramtypes", [NgFormularCommon, Injector])
], NgRadiobuttonsCommon);

/**
 * Abstract Klasse für NgBaseListControl. Extendes NgBaseModelControl
 */
class NgBaseListControl extends NgBaseModelControl {
    constructor() {
        super(...arguments);
        /**
         * Definiert das Label für das Option Element
         */
        this._fieldLabel = 'label';
        /**
         * Definiert den Wert für das Option Element
         */
        this._fieldValue = 'value';
        /**
         * Definiert, ob das Option Element aktiv ist
         */
        this._fieldEnabled = '';
        /**
         * Definiert das Control als Required
         */
        this._isrequired = false;
        /**
         * Style Breite für List Control Element
         */
        this._width = null;
    }
    /**
     * Input property für options
     */
    get options() {
        return this._options;
    }
    /**
     * setter für options
     */
    set options(val) {
        this._options = val;
    }
}
NgBaseListControl.ɵfac = function NgBaseListControl_Factory(t) { return ɵNgBaseListControl_BaseFactory(t || NgBaseListControl); };
NgBaseListControl.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NgBaseListControl, inputs: { _fieldLabel: ["optionlabel", "_fieldLabel"], _fieldValue: ["optionvalue", "_fieldValue"], _fieldEnabled: ["optionenabled", "_fieldEnabled"], _isrequired: ["isrequired", "_isrequired"], _width: ["width", "_width"], options: "options", displayValueTemplate: ["optionlabeltemplate", "displayValueTemplate"] }, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
__decorate([
    Input('optionlabeltemplate'),
    __metadata("design:type", TemplateRef)
], NgBaseListControl.prototype, "displayValueTemplate", void 0);
__decorate([
    Input('optionlabel'),
    __metadata("design:type", String)
], NgBaseListControl.prototype, "_fieldLabel", void 0);
__decorate([
    Input('optionvalue'),
    __metadata("design:type", String)
], NgBaseListControl.prototype, "_fieldValue", void 0);
__decorate([
    Input('optionenabled'),
    __metadata("design:type", String)
], NgBaseListControl.prototype, "_fieldEnabled", void 0);
__decorate([
    Input('isrequired'),
    __metadata("design:type", Boolean)
], NgBaseListControl.prototype, "_isrequired", void 0);
__decorate([
    Input('width'),
    __metadata("design:type", String)
], NgBaseListControl.prototype, "_width", void 0);
__decorate([
    Input('options'),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], NgBaseListControl.prototype, "options", null);

/**
 * Abstract Klasse für NgBaseSelectControl. Extendes NgBaseListControl
 */
class NgBaseSelectControl extends NgBaseListControl {
    constructor() {
        super(...arguments);
        /**
         * Definiert das Label für das Group Element
         */
        this._fieldGroupLabel = 'label';
        /**
         * Definiert die Collection der Items im Group Element
         */
        this._fieldGroupItems = '';
    }
}
NgBaseSelectControl.ɵfac = function NgBaseSelectControl_Factory(t) { return ɵNgBaseSelectControl_BaseFactory(t || NgBaseSelectControl); };
NgBaseSelectControl.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NgBaseSelectControl, inputs: { _fieldGroupLabel: ["grouplabel", "_fieldGroupLabel"], _fieldGroupItems: ["groupitems", "_fieldGroupItems"] }, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
__decorate([
    Input('grouplabel'),
    __metadata("design:type", String)
], NgBaseSelectControl.prototype, "_fieldGroupLabel", void 0);
__decorate([
    Input('groupitems'),
    __metadata("design:type", String)
], NgBaseSelectControl.prototype, "_fieldGroupItems", void 0);

/**
 * Function um ein Key Value Pair für das Dropdown zu erzeugen
 * @param id ID
 * @param value Wert der an das Element gebunden werden soll
 */
function _buildValueString(id, value) {
    // Wenn ID null ist Object zurückgeben
    if (id == null) {
        return `${value}`;
    }
    // Mapping Objekt zu String
    if (value && typeof value === 'object') {
        value = 'Object';
    }
    // String als ID
    return `${id}: ${value}`.slice(0, 50);
}
/**
 * Base Dropdown Komponente
 */
let NgDropdownCommon = class NgDropdownCommon extends NgBaseSelectControl {
    /**
     * Konstruktor
     * @param parent Übergeordnetes HTML Element
     * @param injector Injector für Services
     * @param _renderer Render Engine
     * @param _elementRef Referenz von HTML Element
     */
    constructor(parent, injector, _renderer, _elementRef) {
        super(parent, injector);
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /**
         * Counter vom OptionID; default Wert = 0
         */
        this._optionIdCounter = 0;
        /**
         * OptionMap
         */
        this._optionMap = new Map();
        /**
         * compareWith-Funktion
         */
        this._compareWith = ɵlooseIdentical;
        /**
         * Label Text für Empty Item
         */
        this._emptylabel = '';
        /**
         * Option Value für Empty Item
         */
        this._emptyoptionvalue = null;
        /**
       * Resource Key für Validation Message Required bei Control
       */
        this._validationMessageRequired = 'VALIDATION_ERROR_REQUIRED';
        /**
         * Resource Key für Validation Message Required in Validation Summary
         */
        this._validationMessageRequiredSummary = 'VALIDATION_ERROR_SUMMARY_REQUIRED';
    }
    /**
     * compareWith-Funktion
     */
    set compareWith(fn) {
        if (typeof fn !== 'function') {
            throw new Error(`compareWith must be a function, but received ${JSON.stringify(fn)}`);
        }
        this._compareWith = fn;
    }
    /**
     * Wert einstellen
     * @param value - Wert
     */
    setValue(value) {
        super.setValue(this.getOptionValue(value));
    }
    /**
     * Wert schreiben
     * @param value - Wert
     */
    writeValue(value) {
        this.setSelectedValue(value);
        super.writeValue(value);
    }
    /**
     * Registriert das OptionID-Counter als String
     */
    registerOption() {
        return (this._optionIdCounter++).toString();
    }
    /**
     * Methode die von Options aufgerufen wird, um das Mapping zwischen Dropdown Value und Value herzustellen.
     * @param id: Id aus Options
     * @param value: Value
     */
    setOptionMap(id, value) {
        this._optionMap.set(id, value);
        // Selected Value auf Control aktualisieren, wenn Value dem SelectedValue entspricht
        if (this.value === value) {
            this.setSelectedValue(value);
        }
    }
    /**
     * Setzt den Selected Value auf dem Control
     * @param value Value
     */
    setSelectedValue(value) {
        // Select Item aus Control lesen
        const selectItem = this._elementRef.nativeElement.getElementsByTagName('select')[0];
        /**
         * Id vom Select Item
         */
        const id = this.getOptionId(value);
        /**
         * Value String
         */
        const valueString = _buildValueString(id, value);
        if (selectItem !== undefined) {
            this._renderer.setProperty(selectItem, 'value', valueString);
        }
    }
    /**
     * Nimmt das ID vom Option
     * @param value
     */
    getOptionId(value) {
        for (const id of Array.from(this._optionMap.keys())) {
            if (this._compareWith(this._optionMap.get(id), value)) {
                return id;
            }
        }
        return null;
    }
    /**
     * Nimmt den String-Wert vom Option
     * @param valueString
     */
    getOptionValue(valueString) {
        const id = this.extractId(valueString);
        return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
    }
    /**
     * ID extrahieren
     * @param valueString String bei welchem die ID Extrahiert werden soll
     */
    extractId(valueString) {
        return valueString.split(':')[0];
    }
    /**
     * Validator
     * @param c Control Instanz
     */
    validateData(c) {
        let error = null;
        if (this._isrequired) {
            error = Validation.required(c, this._label, this._validationMessageRequired, this._validationMessageRequiredSummary);
        }
        return error;
    }
};
NgDropdownCommon.ɵfac = function NgDropdownCommon_Factory(t) { return new (t || NgDropdownCommon)(ɵngcc0.ɵɵdirectiveInject(NgFormularCommon, 1), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Injector), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NgDropdownCommon.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NgDropdownCommon, inputs: { _emptylabel: ["emptylabel", "_emptylabel"], _emptyoptionvalue: ["emptyvalue", "_emptyoptionvalue"], _validationMessageRequired: ["validationmessagerequired", "_validationMessageRequired"], _validationMessageRequiredSummary: ["validationmessagesummaryrequired", "_validationMessageRequiredSummary"], compareWith: "compareWith" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
__decorate([
    Input('emptylabel'),
    __metadata("design:type", String)
], NgDropdownCommon.prototype, "_emptylabel", void 0);
__decorate([
    Input('emptyvalue'),
    __metadata("design:type", String)
], NgDropdownCommon.prototype, "_emptyoptionvalue", void 0);
__decorate([
    Input('compareWith'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function])
], NgDropdownCommon.prototype, "compareWith", null);
__decorate([
    Input('validationmessagerequired'),
    __metadata("design:type", String)
], NgDropdownCommon.prototype, "_validationMessageRequired", void 0);
__decorate([
    Input('validationmessagesummaryrequired'),
    __metadata("design:type", String)
], NgDropdownCommon.prototype, "_validationMessageRequiredSummary", void 0);
NgDropdownCommon = __decorate([
    __param(0, Host()),
    __metadata("design:paramtypes", [NgFormularCommon, Injector, Renderer2, ElementRef])
], NgDropdownCommon);
/**
 * ngDropdownOption-Klasse
 */
class NgDropdownOptionCommon {
    /**
     * Konstruktor
     * @param _element Referenz auf HTML Element
     * @param _renderer Render Engine
     * @param _dropdown Dropdown Instanz
     */
    constructor(_element, _renderer, _dropdown) {
        this._element = _element;
        this._renderer = _renderer;
        this._dropdown = _dropdown;
        /**
         * ID-String
         */
        this.id = null;
        if (this._dropdown) {
            this.id = this._dropdown.registerOption();
        }
    }
    /**
     * Option ngValue
     */
    set ngValue(value) {
        // Cancel wenn kein Parent Dropdown vorhanden
        if (this._dropdown == null) {
            return;
        }
        this._dropdown.setOptionMap(this.id, value);
        this._setElementValue(_buildValueString(this.id, value));
        this._dropdown.writeValue(this._dropdown.value);
    }
    /**
     * Wert-Setter
     */
    set value(value) {
        this._setElementValue(value);
    }
    /**
     * Den Wert vom Option-Element einstellen
     * @param value Wert
     */
    _setElementValue(value) {
        this._renderer.setProperty(this._element.nativeElement, 'value', value);
    }
    /**
     * OnDestroy Event
     */
    ngOnDestroy() {
        if (this._dropdown) {
            this._dropdown._optionMap.delete(this.id);
        }
    }
}
NgDropdownOptionCommon.ɵfac = function NgDropdownOptionCommon_Factory(t) { ɵngcc0.ɵɵinvalidFactory(); };
NgDropdownOptionCommon.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NgDropdownOptionCommon, inputs: { ngValue: "ngValue", value: "value" } });
__decorate([
    Input('ngValue'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], NgDropdownOptionCommon.prototype, "ngValue", null);
__decorate([
    Input('value'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], NgDropdownOptionCommon.prototype, "value", null);

/**
 *  Element für Access auf Option Field
 * @selector option
 */
let NgListboxOptionDirective = 
/**
 *Basis Komponente für NgListboxOption
 */
class NgListboxOptionDirective {
    /**
     * Konstruktor
     * @param _element: ElementRef
     * @param _renderer: Renderer2
     */
    constructor(_element, _renderer) {
        this._element = _element;
        this._renderer = _renderer;
    }
    /**
     * Methode ergibt den Status der Elemente, die selektiert wurden
     */
    _setSelected(selected) {
        this._renderer.setProperty(this._element.nativeElement, 'selected', selected);
    }
};
NgListboxOptionDirective.ɵfac = function NgListboxOptionDirective_Factory(t) { return new (t || NgListboxOptionDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2)); };
NgListboxOptionDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NgListboxOptionDirective, selectors: [["", "ngOption", ""], ["option"]], inputs: { _value: ["value", "_value"] } });
NgListboxOptionDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
__decorate([
    Input('value'),
    __metadata("design:type", String)
], NgListboxOptionDirective.prototype, "_value", void 0);
NgListboxOptionDirective = __decorate([ __metadata("design:paramtypes", [ElementRef, Renderer2])
], NgListboxOptionDirective);
/**
 * Wrapper für HTML Select
 */
class HTMLCollection {
}
// @Component({
//   selector: 'ngListbox',
//   templateUrl: './listbox.html',
//   // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
//   providers: [
//     { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: NgListbox },
//     { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => NgListbox) }
//   ],
//   // View Provider, damit das Formular an das Control gebunden werden kann
//   viewProviders: [{ provide: ControlContainer, useExisting: NgFormular }]
// })
/**
 * Komponente für NgListboxCommon. Extends NgBaseSelectControl
 */
class NgListboxCommon extends NgBaseSelectControl {
    constructor() {
        super(...arguments);
        /**
         * Anzahl der Zeilen
         */
        this._rowsize = 5;
        /**
         * Resource Key für Validation Message Required bei Control
         */
        this._validationMessageRequired = 'VALIDATION_ERROR_REQUIRED';
        /**
         * Resource Key für Validation Message Required in Validation Summary
         */
        this._validationMessageRequiredSummary = 'VALIDATION_ERROR_SUMMARY_REQUIRED';
    }
    /**
     * Getter für selektierte Elemente
     */
    getSelectedItems(selectelement) {
        const selectedValues = new Array();
        if (selectelement.hasOwnProperty('selectedOptions')) {
            const options = selectelement.selectedOptions;
            for (let i = 0; i < options.length; i++) {
                const opt = options.item(i);
                selectedValues.push(opt.value);
            }
        }
        else { // Degrade on IE
            const options = selectelement.options;
            for (let i = 0; i < options.length; i++) {
                const opt = options.item(i);
                if (opt.selected) {
                    selectedValues.push(opt.value);
                }
            }
            this.setValue(selectedValues);
        }
    }
    /**
     * Methode schreibt neuen Wert
     */
    writeValue(value) {
        if (this.contentOptions && value) {
            this.contentOptions.forEach(itm => {
                itm._setSelected(value.indexOf(itm._value) >= 0);
            });
        }
        super.writeValue(value);
    }
    /**
     * Validator Methode
     */
    validateData(c) {
        let error = null;
        if (this._isrequired) {
            error = Validation.required(c, this._label, this._validationMessageRequired, this._validationMessageRequiredSummary);
        }
        return error;
    }
}
NgListboxCommon.ɵfac = function NgListboxCommon_Factory(t) { return ɵNgListboxCommon_BaseFactory(t || NgListboxCommon); };
NgListboxCommon.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NgListboxCommon, viewQuery: function NgListboxCommon_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(NgListboxOptionDirective, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.contentOptions = _t);
    } }, inputs: { _rowsize: ["rowsize", "_rowsize"], _validationMessageRequired: ["validationmessagerequired", "_validationMessageRequired"], _validationMessageRequiredSummary: ["validationmessagesummaryrequired", "_validationMessageRequiredSummary"] }, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
__decorate([
    Input('rowsize'),
    __metadata("design:type", Number)
], NgListboxCommon.prototype, "_rowsize", void 0);
__decorate([
    Input('validationmessagerequired'),
    __metadata("design:type", String)
], NgListboxCommon.prototype, "_validationMessageRequired", void 0);
__decorate([
    Input('validationmessagesummaryrequired'),
    __metadata("design:type", String)
], NgListboxCommon.prototype, "_validationMessageRequiredSummary", void 0);
__decorate([
    ViewChildren(NgListboxOptionDirective),
    __metadata("design:type", QueryList)
], NgListboxCommon.prototype, "contentOptions", void 0);

/**
 * Basis Komponente für NgValidationSummary
 */
class NgValidationSummaryCommon {
    // #endregion
    // #region Constructor
    /**
     * Konstruktor
     * Inject des Formulars
     */
    constructor(parent, injector) {
        /**
         * Name-Property
         */
        this._name = '';
        this.parent = parent;
        this.lngResourceService = injector.get(LANGUAGERESOURCE_SERVICE, new InternalLanguageResourceService());
    }
    // #endregion
    /**
     * Validation Methode
     */
    get formErrors() {
        const collection = new Array();
        const items = Object.keys(this.parent.getForm().controls).map(key => {
            return this.parent.getForm().controls[key];
        });
        this.getErrorCollection(items, collection);
        return collection.filter(item => item !== null);
    }
    /**
     * Die Methode gibt Collection von Errors. Verlangt controls: Array<NgForm | FormArray> und  collection: Array<Observable<string>>
     */
    getErrorCollection(controls, collection) {
        controls.forEach(ctl => {
            if (ctl.controls === undefined || ctl.controls === null) {
                this.addErrorToCollection(ctl, collection);
            }
            else {
                Object.keys(ctl.controls).map(controlKey => {
                    const control = ctl.controls[controlKey];
                    // Cancel Analyse wenn Item not Touched oder Valid
                    if (control.touched === false || control.valid === true) {
                        return;
                    }
                    // Handle wenn Control kein Container ist
                    if (control.controls === undefined || control.controls === null) {
                        this.addErrorToCollection(control, collection);
                    }
                    else {
                        // Handling eines Control Containers
                        const items = Object.keys(control.controls).map(formKey => {
                            return control.controls[formKey];
                        });
                        this.getErrorCollection(items, collection);
                    }
                });
            }
        });
    }
    /**
     * Fügt einen Validation Error in die Error Collection hinzu
     * @param ctl Fehlerhaftes Control
     * @param collection Collection aller Fehlermeldungen
     */
    addErrorToCollection(ctl, collection) {
        if (ctl.errors === null || ctl.touched === false || ctl.valid === true) {
            return;
        }
        const keys = Object.keys(ctl.errors);
        if (keys.length <= 0) {
            return;
        }
        const errorItem = ctl.errors[keys[0]];
        // Validation Parameters
        const parameters = {};
        if (errorItem.parameters !== null && errorItem.parameters !== undefined) {
            errorItem.parameters.forEach((v, k) => {
                parameters[k] = v;
            });
        }
        parameters['FIELD'] = errorItem.fieldName;
        collection.push(this.lngResourceService.GetString(errorItem.errorMessageValidationSummaryKey, parameters));
    }
    /**
     * Getter wenn Errors entstehen
     */
    get hasErrors() {
        return this.formErrors.length > 0;
    }
}
NgValidationSummaryCommon.ɵfac = function NgValidationSummaryCommon_Factory(t) { ɵngcc0.ɵɵinvalidFactory(); };
NgValidationSummaryCommon.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NgValidationSummaryCommon, inputs: { _name: ["name", "_name"] } });
__decorate([
    Input('name'),
    __metadata("design:type", String)
], NgValidationSummaryCommon.prototype, "_name", void 0);

/**
 *Basis Komponente für NgTab
 */
class NgTabCommon {
    constructor() {
        /**
         * Name des Controls
         */
        this._name = '';
        /**
         * Löscht versteckte TabItems
         */
        this._unloadtabitemswhenhidden = null;
    }
    // #region Control initialisieren
    /**
     * AfterContentInit Event
     */
    ngAfterContentInit() {
        this.initTabs();
    }
    /**
     * Initialisiert die Tabs
     */
    initTabs() {
        const activeTab = this.tabItems().filter((tab) => tab._active);
        this.tabItems().forEach(itm => {
            if (this._unloadtabitemswhenhidden !== null) {
                itm._unloadwhenhidden = this._unloadtabitemswhenhidden;
            }
        });
        if (activeTab.length === 0) {
            this.selectTab(this.tabItems()[0]);
        }
    }
    // #endregion
    /**
     * Tab selektieren
     * @param tab
     */
    selectTab(tab) {
        // Cancel if Selected Tab is disabled
        if (tab._disabled) {
            return;
        }
        this.tabItems().forEach(item => item._active = false);
        tab._active = true;
    }
    /**
     * Ergibt das ID vom Tab-Button
     * @param tabitemid ID des Tabs
     */
    GetTabItemButtonId(tabitemid) {
        return this._name + '_' + tabitemid;
    }
}
NgTabCommon.ɵfac = function NgTabCommon_Factory(t) { return new (t || NgTabCommon)(); };
NgTabCommon.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NgTabCommon, inputs: { _name: ["name", "_name"], _unloadtabitemswhenhidden: ["unloadtabitemswhenhidden", "_unloadtabitemswhenhidden"], displayTabLabelTemplate: ["tablabeltemplate", "displayTabLabelTemplate"] } });
__decorate([
    Input('name'),
    __metadata("design:type", String)
], NgTabCommon.prototype, "_name", void 0);
__decorate([
    Input('tablabeltemplate'),
    __metadata("design:type", TemplateRef)
], NgTabCommon.prototype, "displayTabLabelTemplate", void 0);
__decorate([
    Input('unloadtabitemswhenhidden'),
    __metadata("design:type", Boolean)
], NgTabCommon.prototype, "_unloadtabitemswhenhidden", void 0);

/**
 * Die Basis Komponente für NgTabItem
 */
class NgTabItemCommon {
    constructor() {
        /**
         * Boolean Property prüft ob das Tab disabled ist
         */
        this._disabled = false;
        /**
         * Das Input property ekzeptiert boolen Wert. Default ist true. Definiert, ob die Komponente hidden sein sollte.
         */
        this._unloadwhenhidden = true;
    }
}
NgTabItemCommon.ɵfac = function NgTabItemCommon_Factory(t) { return new (t || NgTabItemCommon)(); };
NgTabItemCommon.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NgTabItemCommon, contentQueries: function NgTabItemCommon_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵstaticContentQuery(dirIndex, TemplateRef, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templateRef = _t.first);
    } }, inputs: { _disabled: ["disabled", "_disabled"], _unloadwhenhidden: ["unloadwhenhidden", "_unloadwhenhidden"], _active: ["active", "_active"], _id: ["id", "_id"], _label: ["label", "_label"] } });
__decorate([
    Input('active'),
    __metadata("design:type", Boolean)
], NgTabItemCommon.prototype, "_active", void 0);
__decorate([
    Input('disabled'),
    __metadata("design:type", Boolean)
], NgTabItemCommon.prototype, "_disabled", void 0);
__decorate([
    Input('id'),
    __metadata("design:type", String)
], NgTabItemCommon.prototype, "_id", void 0);
__decorate([
    Input('label'),
    __metadata("design:type", String)
], NgTabItemCommon.prototype, "_label", void 0);
__decorate([
    Input('unloadwhenhidden'),
    __metadata("design:type", Boolean)
], NgTabItemCommon.prototype, "_unloadwhenhidden", void 0);
__decorate([
    ContentChild(TemplateRef, { static: true }),
    __metadata("design:type", TemplateRef)
], NgTabItemCommon.prototype, "templateRef", void 0);

/**
 * Abstract Klasse für NgInputBase. Extendes NgBaseModelControl
 */
class NgInputBase extends NgBaseModelControl {
    constructor() {
        // #region Properties
        super(...arguments);
        /**
         * Definiert das Control als Required
         */
        this._isrequired = false;
        /**
         * TextBox Placeholder
         */
        this._placeholder = null;
        /**
         * Erlaubte Zeichen bei der Eingabe
         */
        this._allowedchars = '';
        /**
         * Macht das Input readonly
         */
        this._readonly = false;
        /**
         * Text welcher als Tooltip angezeigt wird.
         */
        this._tooltiptext = '';
        /**
         * Autofill aktivieren oder deaktivieren
         */
        this._disableautocomplete = false;
        // #endregion
    }
    // #endregion
    // #region Event Handler
    /**
     * Methode validiert Input wenn KeyPress-Event passiert
     */
    onKeyPress(event) {
        // Cancel wenn _allowedChars leer ist.
        if (this._allowedchars.length === 0) {
            return true;
        }
        // Validate Input
        const character = String.fromCharCode(event.charCode);
        // Zeichen in Allowed Chars nicht gefunden, Event nicht weitergeben
        if (this._allowedchars.indexOf(character) < 0) {
            event.preventDefault();
        }
        const inputControl = event.srcElement;
        if (!this.OnKeyPressValidation(inputControl.selectionStart, character)) {
            event.preventDefault();
        }
    }
    // #endregion
    // #region Protected Virtual Methods
    /**
     * Methode validiert wenn ein Drück-Event passiert
     */
    OnKeyPressValidation(position, character) {
        return true;
    }
}
NgInputBase.ɵfac = function NgInputBase_Factory(t) { return ɵNgInputBase_BaseFactory(t || NgInputBase); };
NgInputBase.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NgInputBase, inputs: { _isrequired: ["isrequired", "_isrequired"], _placeholder: ["placeholder", "_placeholder"], _allowedchars: ["allowedchars", "_allowedchars"], _readonly: ["readonly", "_readonly"], _tooltiptext: ["tooltiptext", "_tooltiptext"], _disableautocomplete: ["disableautocomplete", "_disableautocomplete"], _pattern: ["regexvalidation", "_pattern"] }, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
__decorate([
    Input('isrequired'),
    __metadata("design:type", Boolean)
], NgInputBase.prototype, "_isrequired", void 0);
__decorate([
    Input('placeholder'),
    __metadata("design:type", String)
], NgInputBase.prototype, "_placeholder", void 0);
__decorate([
    Input('allowedchars'),
    __metadata("design:type", String)
], NgInputBase.prototype, "_allowedchars", void 0);
__decorate([
    Input('readonly'),
    __metadata("design:type", Boolean)
], NgInputBase.prototype, "_readonly", void 0);
__decorate([
    Input('regexvalidation'),
    __metadata("design:type", String)
], NgInputBase.prototype, "_pattern", void 0);
__decorate([
    Input('tooltiptext'),
    __metadata("design:type", String)
], NgInputBase.prototype, "_tooltiptext", void 0);
__decorate([
    Input('disableautocomplete'),
    __metadata("design:type", Boolean)
], NgInputBase.prototype, "_disableautocomplete", void 0);

/**
 * Basis Komponente für NgInput
 */
class NgInputCommon extends NgInputBase {
    constructor() {
        super(...arguments);
        /**
         * Max länge an Zeichen für Eingabefeld
         */
        this._maxlength = null;
        /**
         * Fix breite für das Control definieren.
         */
        this._controlwidth = null;
        /**
         * Resource Key für Validation Message Required bei Control
         */
        this._validationMessageRequired = 'VALIDATION_ERROR_REQUIRED';
        /**
         * Resource Key für Validation Message Required in Validation Summary
         */
        this._validationMessageRequiredSummary = 'VALIDATION_ERROR_SUMMARY_REQUIRED';
        /**
         * Resource Key für Validation Message Pattern bei Control
         */
        this._validationMessagePattern = 'VALIDATION_ERROR_PATTERN';
        /**
         * Resource Key für Validation Message Pattern in Validation Summary
         */
        this._validationMessagePatternSummary = 'VALIDATION_ERROR_SUMMARY_PATTERN';
    }
    /**
     * Methode validiert, ob der Wert den gegebenen Kriterien entspricht
     */
    validateData(c) {
        let error = null;
        if (this._isrequired) {
            error = Validation.required(c, this._label, this._validationMessageRequired, this._validationMessageRequiredSummary);
        }
        if (error === null && this._pattern !== undefined && this._pattern !== null) {
            error = Validation.patternValidator(c, this._pattern, this._label, this._validationMessagePattern, this._validationMessagePatternSummary);
        }
        return error;
    }
}
NgInputCommon.ɵfac = function NgInputCommon_Factory(t) { return ɵNgInputCommon_BaseFactory(t || NgInputCommon); };
NgInputCommon.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NgInputCommon, inputs: { _maxlength: ["maxlength", "_maxlength"], _controlwidth: ["controlwidth", "_controlwidth"], _validationMessageRequired: ["validationmessagerequired", "_validationMessageRequired"], _validationMessageRequiredSummary: ["validationmessagesummaryrequired", "_validationMessageRequiredSummary"], _validationMessagePattern: ["validationmessagepattern", "_validationMessagePattern"], _validationMessagePatternSummary: ["validationmessagesummarypattern", "_validationMessagePatternSummary"] }, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
__decorate([
    Input('maxlength'),
    __metadata("design:type", Number)
], NgInputCommon.prototype, "_maxlength", void 0);
__decorate([
    Input('controlwidth'),
    __metadata("design:type", String)
], NgInputCommon.prototype, "_controlwidth", void 0);
__decorate([
    Input('validationmessagerequired'),
    __metadata("design:type", String)
], NgInputCommon.prototype, "_validationMessageRequired", void 0);
__decorate([
    Input('validationmessagesummaryrequired'),
    __metadata("design:type", String)
], NgInputCommon.prototype, "_validationMessageRequiredSummary", void 0);
__decorate([
    Input('validationmessagepattern'),
    __metadata("design:type", String)
], NgInputCommon.prototype, "_validationMessagePattern", void 0);
__decorate([
    Input('validationmessagesummarypattern'),
    __metadata("design:type", String)
], NgInputCommon.prototype, "_validationMessagePatternSummary", void 0);

/**
 * Basis Komponente für NgInputArea
 */
class NgInputAreaCommon extends NgInputCommon {
    constructor() {
        super(...arguments);
        /**
         * Definiert die Höhe der TextArea Box.
         */
        this._rows = 5;
        /**
         * Definiert die Höhe der TextArea Box. Ist normalfall leer, da Höhe auch über Rows gesetzt werden kann.
         */
        this._height = null;
        /**
         * Property mit dem Custom CSS Klassen auf dem Form-Control definiert werden können.
         */
        this._customClasses = '';
    }
    /**
     * Getter für die Länge des Inputs
     */
    get _currentLength() {
        if (this.value === null || this.value === undefined) {
            return 0;
        }
        else {
            return this.value.length + this.value.split(/\r|\n/).length - 1;
        }
    }
    /**
     * Methode wird 'true' ergeben wenn ein Key gedrückt wird und maxlength ist nicht definiert
     */
    onKeyPress(event) {
        // Exist if MaxLength not defined
        if (this._maxlength === undefined || this._maxlength === null) {
            return true;
        }
        if (this._currentLength >= this._maxlength || ((event.keyCode === 13 || event.keyCode === 10) && this._currentLength + 1 >= this._maxlength)) {
            event.preventDefault();
        }
    }
}
NgInputAreaCommon.ɵfac = function NgInputAreaCommon_Factory(t) { return ɵNgInputAreaCommon_BaseFactory(t || NgInputAreaCommon); };
NgInputAreaCommon.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NgInputAreaCommon, inputs: { _rows: ["rows", "_rows"], _height: ["height", "_height"], _customClasses: ["customCssClass", "_customClasses"] }, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
__decorate([
    Input('rows'),
    __metadata("design:type", Number)
], NgInputAreaCommon.prototype, "_rows", void 0);
__decorate([
    Input('height'),
    __metadata("design:type", String)
], NgInputAreaCommon.prototype, "_height", void 0);
__decorate([
    Input('customCssClass'),
    __metadata("design:type", String)
], NgInputAreaCommon.prototype, "_customClasses", void 0);

/**
 * Basis Komponente für NgInputDecimal
 */
class NgInputDecimalCommon extends NgInputBase {
    constructor() {
        super(...arguments);
        /**
         * Definiert das Negative Werte erlaubt sind
         */
        this._allownegativ = false;
        /**
         * Definiert den minimalen Wert
         */
        this._minvalue = undefined;
        /**
         * Definiert den maximalen Wert
         */
        this._maxvalue = undefined;
        /**
         * Resource Key für Validation Message Required bei Control
         */
        this._validationMessageRequired = 'VALIDATION_ERROR_REQUIRED';
        /**
         * Resource Key für Validation Message Required in Validation Summary
         */
        this._validationMessageRequiredSummary = 'VALIDATION_ERROR_SUMMARY_REQUIRED';
        /**
         * Resource Key für Validation Message MinValue bei Control
         */
        this._validationMessageMinValue = 'VALIDATION_ERROR_MINVALUE';
        /**
         * Resource Key für Validation Message MinValue in Validation Summary
         */
        this._validationMessageMinValueSummary = 'VALIDATION_ERROR_SUMMARY_MINVALUE';
        /**
         * Resource Key für Validation Message MaxValue bei Control
         */
        this._validationMessageMaxValue = 'VALIDATION_ERROR_MAXVALUE';
        /**
         * Resource Key für Validation Message MaxValue in Validation Summary
         */
        this._validationMessageMaxValueSummary = 'VALIDATION_ERROR_SUMMARY_MAXVALUE';
    }
    /**
     * Methode die erzeugt den Control in Abhängigkeit davon, ob negative Were erlaubt sing oder nicht
     */
    OnClassInit() {
        super.OnClassInit();
        /**
         * Definiert die Werte die erlaubt sind
         */
        this._allowedchars = '0123456789' + this.GetDecimalSymbol();
        if (this._allownegativ) {
            this._allowedchars = this._allowedchars + '-';
        }
    }
    /**
     * Konvertiert den Wert des Inputs
     */
    ConvertInputValue(value) {
        if (value === '' || value === null) {
            return null;
        }
        else {
            if (this._allownegativ === true && value === '-') {
                return '-';
            }
            else if (value === '.') {
                return '0.';
            }
            else {
                return parseFloat(value);
            }
        }
    }
    /**
     * Methode validiert ob der Wert entspricht den gegebenen Kriterien wenn ein Key gedrückt wird
     */
    OnKeyPressValidation(position, character) {
        if (this._allownegativ === false && character === '-' || this._allownegativ === true && position > 0 && character === '-') {
            return false;
        }
        // Verhindern von Doppelpunkt Eingabe (45..545)
        if (this._value !== null && this._value.toString().length < position && character === '.') {
            return false;
        }
        if (character === this.GetDecimalSymbol() && this._value !== null && this._value.toString().indexOf(this.GetDecimalSymbol()) >= 0) {
            return false;
        }
        else {
            return true;
        }
    }
    /**
     * Methode validiert ob der Wert entspricht den gegebenen Kriterien
     */
    validateData(c) {
        /**
         * Error Meldung, die angezeigt wird, wenn die Kriterien nicht erfüllt sind
         */
        let error = null;
        if (this._isrequired) {
            error = Validation.required(c, this._label, this._validationMessageRequired, this._validationMessageRequiredSummary);
        }
        if (error === null && this._minvalue !== undefined && this._minvalue !== null) {
            error = Validation.minValue(c, this._minvalue, this._label, this._validationMessageMinValue, this._validationMessageMinValueSummary);
        }
        if (error === null && this._maxvalue !== undefined && this._maxvalue !== null) {
            error = Validation.maxValue(c, this._maxvalue, this._label, this._validationMessageMaxValue, this._validationMessageMaxValueSummary);
        }
        return error;
    }
}
NgInputDecimalCommon.ɵfac = function NgInputDecimalCommon_Factory(t) { return ɵNgInputDecimalCommon_BaseFactory(t || NgInputDecimalCommon); };
NgInputDecimalCommon.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NgInputDecimalCommon, inputs: { _allownegativ: ["allownegativ", "_allownegativ"], _minvalue: ["minvalue", "_minvalue"], _maxvalue: ["maxvalue", "_maxvalue"], _validationMessageRequired: ["validationmessagerequired", "_validationMessageRequired"], _validationMessageRequiredSummary: ["validationmessagesummaryrequired", "_validationMessageRequiredSummary"], _validationMessageMinValue: ["validationmessageminvalue", "_validationMessageMinValue"], _validationMessageMinValueSummary: ["validationmessagesummaryminvalue", "_validationMessageMinValueSummary"], _validationMessageMaxValue: ["validationmessagemaxvalue", "_validationMessageMaxValue"], _validationMessageMaxValueSummary: ["validationmessagesummarymaxvalue", "_validationMessageMaxValueSummary"] }, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
__decorate([
    Input('allownegativ'),
    __metadata("design:type", Boolean)
], NgInputDecimalCommon.prototype, "_allownegativ", void 0);
__decorate([
    Input('minvalue'),
    __metadata("design:type", Number)
], NgInputDecimalCommon.prototype, "_minvalue", void 0);
__decorate([
    Input('maxvalue'),
    __metadata("design:type", Number)
], NgInputDecimalCommon.prototype, "_maxvalue", void 0);
__decorate([
    Input('validationmessagerequired'),
    __metadata("design:type", String)
], NgInputDecimalCommon.prototype, "_validationMessageRequired", void 0);
__decorate([
    Input('validationmessagesummaryrequired'),
    __metadata("design:type", String)
], NgInputDecimalCommon.prototype, "_validationMessageRequiredSummary", void 0);
__decorate([
    Input('validationmessageminvalue'),
    __metadata("design:type", String)
], NgInputDecimalCommon.prototype, "_validationMessageMinValue", void 0);
__decorate([
    Input('validationmessagesummaryminvalue'),
    __metadata("design:type", String)
], NgInputDecimalCommon.prototype, "_validationMessageMinValueSummary", void 0);
__decorate([
    Input('validationmessagemaxvalue'),
    __metadata("design:type", String)
], NgInputDecimalCommon.prototype, "_validationMessageMaxValue", void 0);
__decorate([
    Input('validationmessagesummarymaxvalue'),
    __metadata("design:type", String)
], NgInputDecimalCommon.prototype, "_validationMessageMaxValueSummary", void 0);

/**
 * Basis Komponente für NgInputCurrency
 */
class NgInputCurrencyCommon extends NgInputDecimalCommon {
}

/**
 * Basis Komponente für NgInputEmail
 */
class NgInputEmailCommon extends NgInputCommon {
    constructor() {
        super(...arguments);
        /**
         * Resource Key für Validation Message Email bei Control
         */
        this._validationMessageEmail = 'VALIDATION_ERROR_EMAIL';
        /**
         * Resource Key für Validation Message Email in Validation Summary
         */
        this._validationMessageEmailSummary = 'VALIDATION_ERROR_SUMMARY_EMAIL';
    }
    /**
     * Methode validiert, ob der Wert den gegebenen Kriteriten entspricht
     */
    validateData(c) {
        let error = super.validateData(c);
        if (error === null) {
            error = Validation.email(c, this._label, this._validationMessageEmail, this._validationMessageEmailSummary);
        }
        return error;
    }
}
NgInputEmailCommon.ɵfac = function NgInputEmailCommon_Factory(t) { return ɵNgInputEmailCommon_BaseFactory(t || NgInputEmailCommon); };
NgInputEmailCommon.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NgInputEmailCommon, inputs: { _validationMessageEmail: ["validationmessageemail", "_validationMessageEmail"], _validationMessageEmailSummary: ["validationmessagesummaryemail", "_validationMessageEmailSummary"] }, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
__decorate([
    Input('validationmessageemail'),
    __metadata("design:type", String)
], NgInputEmailCommon.prototype, "_validationMessageEmail", void 0);
__decorate([
    Input('validationmessagesummaryemail'),
    __metadata("design:type", String)
], NgInputEmailCommon.prototype, "_validationMessageEmailSummary", void 0);

/**
 * Basis Komponente für NgInputInteger
 */
class NgInputIntegerCommon extends NgInputBase {
    constructor() {
        super(...arguments);
        /**
         * Definiert das Negative Werte erlaubt sind
         */
        this._allownegativ = false;
        /**
         * Definiert den minimalen Wert
         */
        this._minvalue = undefined;
        /**
         * Definiert den maximalen Wert
         */
        this._maxvalue = undefined;
        /**
         * Resource Key für Validation Message Required bei Control
         */
        this._validationMessageRequired = 'VALIDATION_ERROR_REQUIRED';
        /**
         * Resource Key für Validation Message Required in Validation Summary
         */
        this._validationMessageRequiredSummary = 'VALIDATION_ERROR_SUMMARY_REQUIRED';
        /**
         * Resource Key für Validation Message MinValue bei Control
         */
        this._validationMessageMinValue = 'VALIDATION_ERROR_MINVALUE';
        /**
         * Resource Key für Validation Message MinValue in Validation Summary
         */
        this._validationMessageMinValueSummary = 'VALIDATION_ERROR_SUMMARY_MINVALUE';
        /**
         * Resource Key für Validation Message MaxValue bei Control
         */
        this._validationMessageMaxValue = 'VALIDATION_ERROR_MAXVALUE';
        /**
         * Resource Key für Validation Message MaxValue in Validation Summary
         */
        this._validationMessageMaxValueSummary = 'VALIDATION_ERROR_SUMMARY_MAXVALUE';
    }
    /**
     * Methode die erzeugt den Control in Abhängigkeit davon, ob negative Were erlaubt sing oder nicht
     */
    OnClassInit() {
        super.OnClassInit();
        /**
         * Definiert die Wete die erlaubt sind
         */
        this._allowedchars = '0123456789';
        if (this._allownegativ) {
            this._allowedchars = this._allowedchars + '-';
        }
    }
    /**
     * Konvertiert den Wert des Inputs
     */
    ConvertInputValue(value) {
        if (value === '' || value === null) {
            return null;
        }
        else {
            if (this._allownegativ === true && value === '-') {
                return '-';
            }
            else {
                return parseInt(value, 10);
            }
        }
    }
    /**
     * Methode validiert ob der Wert entspricht den gegebenen Kriterien wenn ein Key gedrückt wird
     */
    OnKeyPressValidation(position, character) {
        if (this._allownegativ === false && character === '-' || this._allownegativ === true && position > 0 && character === '-') {
            return false;
        }
        return true;
    }
    /**
     * Methode validiert ob der Wert entspricht den gegebenen Kriterien
     */
    validateData(c) {
        /**
         * Error Meldung, die angezeigt wird, wenn die Kriterien nicht erfüllt sind
         */
        let error = null;
        if (this._isrequired) {
            error = Validation.required(c, this._label, this._validationMessageRequired, this._validationMessageRequiredSummary);
        }
        if (error === null && this._minvalue !== undefined && this._minvalue !== null) {
            error = Validation.minValue(c, this._minvalue, this._label, this._validationMessageMinValue, this._validationMessageMinValueSummary);
        }
        if (error === null && this._maxvalue !== undefined && this._maxvalue !== null) {
            error = Validation.maxValue(c, this._maxvalue, this._label, this._validationMessageMaxValue, this._validationMessageMaxValueSummary);
        }
        return error;
    }
}
NgInputIntegerCommon.ɵfac = function NgInputIntegerCommon_Factory(t) { return ɵNgInputIntegerCommon_BaseFactory(t || NgInputIntegerCommon); };
NgInputIntegerCommon.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NgInputIntegerCommon, inputs: { _allownegativ: ["allownegativ", "_allownegativ"], _minvalue: ["minvalue", "_minvalue"], _maxvalue: ["maxvalue", "_maxvalue"], _validationMessageRequired: ["validationmessagerequired", "_validationMessageRequired"], _validationMessageRequiredSummary: ["validationmessagesummaryrequired", "_validationMessageRequiredSummary"], _validationMessageMinValue: ["validationmessageminvalue", "_validationMessageMinValue"], _validationMessageMinValueSummary: ["validationmessagesummaryminvalue", "_validationMessageMinValueSummary"], _validationMessageMaxValue: ["validationmessagemaxvalue", "_validationMessageMaxValue"], _validationMessageMaxValueSummary: ["validationmessagesummarymaxvalue", "_validationMessageMaxValueSummary"] }, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
__decorate([
    Input('allownegativ'),
    __metadata("design:type", Boolean)
], NgInputIntegerCommon.prototype, "_allownegativ", void 0);
__decorate([
    Input('minvalue'),
    __metadata("design:type", Number)
], NgInputIntegerCommon.prototype, "_minvalue", void 0);
__decorate([
    Input('maxvalue'),
    __metadata("design:type", Number)
], NgInputIntegerCommon.prototype, "_maxvalue", void 0);
__decorate([
    Input('validationmessagerequired'),
    __metadata("design:type", String)
], NgInputIntegerCommon.prototype, "_validationMessageRequired", void 0);
__decorate([
    Input('validationmessagesummaryrequired'),
    __metadata("design:type", String)
], NgInputIntegerCommon.prototype, "_validationMessageRequiredSummary", void 0);
__decorate([
    Input('validationmessageminvalue'),
    __metadata("design:type", String)
], NgInputIntegerCommon.prototype, "_validationMessageMinValue", void 0);
__decorate([
    Input('validationmessagesummaryminvalue'),
    __metadata("design:type", String)
], NgInputIntegerCommon.prototype, "_validationMessageMinValueSummary", void 0);
__decorate([
    Input('validationmessagemaxvalue'),
    __metadata("design:type", String)
], NgInputIntegerCommon.prototype, "_validationMessageMaxValue", void 0);
__decorate([
    Input('validationmessagesummarymaxvalue'),
    __metadata("design:type", String)
], NgInputIntegerCommon.prototype, "_validationMessageMaxValueSummary", void 0);

/**
 * Basis Komponente für NgInputPassword
 */
class NgInputPasswordCommon extends NgInputCommon {
    constructor() {
        super(...arguments);
        /**
         * Resource Key für Validation Message MinLength bei Control
         */
        this._validationMessageMinLength = 'VALIDATION_ERROR_MINLENGTH';
        /**
         * Resource Key für Validation Message MinLength in Validation Summary
         */
        this._validationMessageMinLengthSummary = 'VALIDATION_ERROR_SUMMARY_MINLENGTH';
        /**
         * Min. Textlänge
         */
        this._minlength = 5;
    }
    /**
     * Methode validiert, ob der Wert den gegebenen Kriteriten entspricht
     */
    validateData(c) {
        let error = super.validateData(c);
        if (error === null) {
            error = Validation.minLength(c, this._minlength, this._label, this._validationMessageMinLength, this._validationMessageMinLengthSummary);
        }
        return error;
    }
}
NgInputPasswordCommon.ɵfac = function NgInputPasswordCommon_Factory(t) { return ɵNgInputPasswordCommon_BaseFactory(t || NgInputPasswordCommon); };
NgInputPasswordCommon.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NgInputPasswordCommon, inputs: { _validationMessageMinLength: ["validationmessageminlength", "_validationMessageMinLength"], _validationMessageMinLengthSummary: ["validationmessagesummaryminlength", "_validationMessageMinLengthSummary"], _minlength: ["minlength", "_minlength"] }, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
__decorate([
    Input('validationmessageminlength'),
    __metadata("design:type", String)
], NgInputPasswordCommon.prototype, "_validationMessageMinLength", void 0);
__decorate([
    Input('validationmessagesummaryminlength'),
    __metadata("design:type", String)
], NgInputPasswordCommon.prototype, "_validationMessageMinLengthSummary", void 0);
__decorate([
    Input('minlength'),
    __metadata("design:type", Number)
], NgInputPasswordCommon.prototype, "_minlength", void 0);

/**
 * Basis Komponente für NgInputSearch
 */
class NgInputSearchCommon extends NgInputCommon {
    constructor() {
        super(...arguments);
        /**
         * Name des Such-Icons
         */
        this._searchIconName = '';
        /**
       * Text welcher auf dem Button angezeigt wird
       */
        this._buttontext = '';
        /**
         * Event wenn auf das Such-Icon geclickt wird
         */
        this.clickaction = new EventEmitter();
    }
    /**
     * Methode sendet den Wert des Inputs durch das Event
     */
    searchClick() {
        this.clickaction.emit(this.value);
    }
}
NgInputSearchCommon.ɵfac = function NgInputSearchCommon_Factory(t) { return ɵNgInputSearchCommon_BaseFactory(t || NgInputSearchCommon); };
NgInputSearchCommon.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NgInputSearchCommon, inputs: { _searchIconName: ["iconname", "_searchIconName"], _buttontext: ["buttontext", "_buttontext"] }, outputs: { clickaction: "onclick" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
__decorate([
    Input('iconname'),
    __metadata("design:type", String)
], NgInputSearchCommon.prototype, "_searchIconName", void 0);
__decorate([
    Input('buttontext'),
    __metadata("design:type", String)
], NgInputSearchCommon.prototype, "_buttontext", void 0);
__decorate([
    Output('onclick'),
    __metadata("design:type", EventEmitter)
], NgInputSearchCommon.prototype, "clickaction", void 0);

/**
 * Model für Pager Settings
 */
class PagerData {
    /**
     * Konstruktor
     * @param PageSize Anzahl Elemente pro Seite
     * @param CurrentPageIndex Aktuelle Seite
     * @param TotalRowCount Total Rows in Datenbank
     */
    constructor(PageSize, CurrentPageIndex, TotalRowCount) {
        /**
         * Gesamte Anzahl der Zeilen
        */
        this.TotalRowCount = 0;
        /**
         * Aktueller Index der Seite
         */
        this.CurrentPageIndex = 0;
        /**
         * PageSize
         */
        this.PageSize = 0;
        this.PageSize = PageSize;
        this.CurrentPageIndex = CurrentPageIndex;
        this.TotalRowCount = TotalRowCount;
    }
}
/**
 * GridResponse-Klasse
 */
class GridResponse {
}
/**
 * Model für Sortierung
 */
class SortDescriptor {
    /**
     * Konstruktor
     * @param sortcolumn Column die Sortiert wird
     * @param sortorder Art der Sortierung
     */
    constructor(sortcolumn, sortorder) {
        this.SortColumn = sortcolumn;
        this.SortOrder = sortorder;
    }
}
/**
 * Enum für Sortierung
 */
var SortOrder;
(function (SortOrder) {
    SortOrder[SortOrder["None"] = 0] = "None";
    SortOrder[SortOrder["Ascending"] = 1] = "Ascending";
    SortOrder[SortOrder["Descending"] = 2] = "Descending";
})(SortOrder || (SortOrder = {}));

/**
 *Basis Komponente für NgGrid
 */
class NgGridCommon {
    constructor(cd) {
        this.cd = cd;
        /**
         * Private Property. Enthielt die Column Menge. Type: number. Default ist 0
         */
        this.ColumnCount = 0;
        /**
         * Protected Property. Enthielt Array of Pages. Default value: empty array []
         */
        this.paginators = [];
        /**
         * Protected Property. Enthielt die Nummer der aktiven Seite. Type: number. Default ist 1
         */
        this.activePage = 1;
        /**
         * Protected Property. Enthielt die Nummer der ersten angezeigtenen Seite in Pager. Type: number. Default ist 1
         */
        this.firstPageNumber = 1;
        /**
         * Text in Pager für 'Seite x von y'.
         * Folgende Interpolation Texte sind vorhanden:
         * {{CURRENTPAGE}}: Aktuelle Seite
         * {{TOTALPAGES}}: Anzahl Seiten
         */
        this.pagingText = 'Seite {{CURRENTPAGE}} von {{TOTALPAGES}}';
        /**
         * Text in Page für Anzahl Seitenelemente pro Seite
         * Folgende Interpolation Texte sind vorhanden:
         * {{PAGESIZE}}: Anzahl Elemente pro Seite
         */
        this.pageSizeText = 'Einträge pro Seite {{PAGESIZE}}';
        /**
         * Output EventEmitter. Wird aufgerufen wenn das Pager geklickt ist.
         */
        this._pagingEvent = new EventEmitter();
        /**
         * Output EventEmitter. Wird aufgerufen wenn ein Header geklickt ist, damit das Column soritert wird.
         */
        this._sortingevent = new EventEmitter();
        /**
         * Output EventEmitter. Wird aufgerufen wenn ein PageSize geklickt ist, damit PageSizing geändert wird.
         */
        this._pageSizeChanged = new EventEmitter();
        //#endregion
        /**
         * Aktuelle Sortierung
         */
        this.sortDirection = SortOrder.None;
        /**
         * Aktuell Sortierte Spalte
         */
        this.sortColumn = '';
    }
    /**
     * Setzt die neue Seite
     * @param newStartIndex Neuer Seiten Index (Zero-Based)
     */
    pageChange(newStartIndex) {
        this._pagingEvent.emit(newStartIndex);
    }
    /**
     * Setzt die Page Size auf dem Grid neu
     * @param pageSize Grösse der Page
     */
    pageSizeChanged(pageSize) {
        this._pageSizeChanged.emit(pageSize);
    }
    /**
     * Die Methode erhöht die Column-Stücke um eins
     */
    RegisterColumn() {
        this.ColumnCount++;
        // Detect Changes ausführen, da ColumnChange nach OnInit ausgeführt wird.
        this.cd.detectChanges();
    }
    /**
     * Die Methode verringert die Column-Stücke um eins
     */
    UnregisterColumn() {
        this.ColumnCount--;
    }
    /**
     * Die Methode deffiniert das Sortierung Flow
     */
    SortBy(command) {
        if (command === this.sortColumn) {
            switch (this.sortDirection) {
                case SortOrder.None:
                case SortOrder.Descending:
                    this.sortDirection = SortOrder.Ascending;
                    break;
                case SortOrder.Ascending:
                    this.sortDirection = SortOrder.Descending;
                    break;
            }
        }
        else {
            this.sortDirection = SortOrder.Ascending;
        }
        const result = new SortDescriptor();
        result.SortColumn = command;
        result.SortOrder = this.sortDirection;
        this._sortingevent.emit(result);
    }
    /**
     * Model für Sortierung
     * @param sortDescription Settings für aktuelle sortierung
     */
    set ApplySort(sortDescription) {
        this.sortColumn = sortDescription.SortColumn;
        this.sortDirection = sortDescription.SortOrder;
    }
    /**
     * Methode welche die aktuelle Sortierte Spalte zurückgibt
     */
    GetSortColumn() {
        return this.sortColumn;
    }
    /**
     * Methode welche die Sortierung für die Spalte zurückgibt
     */
    GetSortDirection() {
        return this.sortDirection;
    }
}
NgGridCommon.ɵfac = function NgGridCommon_Factory(t) { ɵngcc0.ɵɵinvalidFactory(); };
NgGridCommon.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NgGridCommon, inputs: { pagingText: ["pagingtext", "pagingText"], pageSizeText: ["pagesizetext", "pageSizeText"], ApplySort: ["sortdata", "ApplySort"], value: "value", pagerdata: "pagerdata", name: "name", _emptytext: ["emptytext", "_emptytext"], _maxvisiblepagenumbers: ["maxvisiblepagenumbers", "_maxvisiblepagenumbers"], _headers: ["headers", "_headers"], _body: ["body", "_body"] }, outputs: { _pagingEvent: "onpaging", _sortingevent: "onsorting", _pageSizeChanged: "onpagesizechanged" } });
__decorate([
    Input('value'),
    __metadata("design:type", Object)
], NgGridCommon.prototype, "value", void 0);
__decorate([
    Input('pagerdata'),
    __metadata("design:type", PagerData)
], NgGridCommon.prototype, "pagerdata", void 0);
__decorate([
    Input('name'),
    __metadata("design:type", String)
], NgGridCommon.prototype, "name", void 0);
__decorate([
    Input('emptytext'),
    __metadata("design:type", String)
], NgGridCommon.prototype, "_emptytext", void 0);
__decorate([
    Input('pagingtext'),
    __metadata("design:type", String)
], NgGridCommon.prototype, "pagingText", void 0);
__decorate([
    Input('pagesizetext'),
    __metadata("design:type", String)
], NgGridCommon.prototype, "pageSizeText", void 0);
__decorate([
    Input('maxvisiblepagenumbers'),
    __metadata("design:type", Number)
], NgGridCommon.prototype, "_maxvisiblepagenumbers", void 0);
__decorate([
    Input('headers'),
    __metadata("design:type", TemplateRef)
], NgGridCommon.prototype, "_headers", void 0);
__decorate([
    Input('body'),
    __metadata("design:type", TemplateRef)
], NgGridCommon.prototype, "_body", void 0);
__decorate([
    Output('onpaging'),
    __metadata("design:type", EventEmitter)
], NgGridCommon.prototype, "_pagingEvent", void 0);
__decorate([
    Output('onsorting'),
    __metadata("design:type", EventEmitter)
], NgGridCommon.prototype, "_sortingevent", void 0);
__decorate([
    Output('onpagesizechanged'),
    __metadata("design:type", EventEmitter)
], NgGridCommon.prototype, "_pageSizeChanged", void 0);
__decorate([
    Input('sortdata'),
    __metadata("design:type", SortDescriptor),
    __metadata("design:paramtypes", [SortDescriptor])
], NgGridCommon.prototype, "ApplySort", null);

/**
 * Erzeugt ein Boolean
 * @param value
 */
function convertToBoolean$1(value) {
    if (value === null || value === undefined || typeof value === 'boolean') {
        return value;
    }
    return value.toString() === 'true';
}
/**
 * Erzeugt ein Number
 * @param value
 */
function convertToNumber$1(value) {
    if (value === null || value === undefined || typeof value === 'number') {
        return value;
    }
    return parseFloat(value.toString());
}
/**
 * Erzeugt aus einer Map ein Objekt
 * @param map Map mit Key und Values. Key ist ein String. Value kann ein Objekt sein.
 */
function mapToObject$1(map) {
    const obj = {};
    map.forEach((v, k) => {
        obj[k] = v;
    });
    return obj;
}

/**
 * Base Komponente für GridColumn
 */
class NgGridColumnBaseCommon {
    /**
     * Konstruktor
     */
    constructor(grid, el) {
        this.grid = grid;
        this.el = el;
    }
    //#endregion
    //#region Interface Implementations
    /**
    * lifecycle hook - OnInit. Wird aufgeruren sobald das Komponent initialisiert ist.
    */
    ngOnInit() {
        const rootElement = this.el.nativeElement;
        const parentElement = rootElement.parentElement;
        while (rootElement.firstChild) {
            parentElement.insertBefore(rootElement.firstChild, rootElement);
        }
        parentElement.removeChild(rootElement);
        if (this.IsHeader()) {
            this.grid.RegisterColumn();
        }
    }
    /**
     * lifecycle hook - ngOnDestroy. Wird aufgeruren wenn das Component zerstört wird.
     */
    ngOnDestroy() {
        if (this.IsHeader()) {
            this.grid.UnregisterColumn();
        }
    }
    //#endregion
    //#region Type Handling
    /**
     * die Methode ergibt boolean Wert, ob das Element Header ist.
     */
    IsHeader() {
        return this.type === 'header';
    }
    /**
     * die Methode ergibt boolean Wert, ob das Element Body ist.
     */
    IsBody() {
        return this.type === 'body';
    }
    /**
     * die Methode ergibt boolean Wert, ob das Element Footer ist.
     */
    IsFooter() {
        return this.type === 'footer';
    }
    //#endregion
    /**
     * Die Methode deffiniert wie das Grid sortiert wird, abhängig von gekligte Column
     */
    SortByColumn() {
        if (this.SortKey !== undefined && this.SortKey !== null && this.SortKey !== '') {
            return this.grid.SortBy(this.SortKey);
        }
    }
    /**
     * die Methode ergibt boolean Wert und definiert, ob das Column für Sortierung aktiviert ist, gemäß eingegebene sortKey
     */
    IsSortedColumn() {
        return this.grid.GetSortColumn() === this.SortKey;
    }
    /**
     * Die methode definiert die Dortirung Richtung. Die Werte sind: none, asc, desc.
     */
    GetSortDirection() {
        switch (this.grid.GetSortDirection()) {
            case SortOrder.None:
                return 'none';
            case SortOrder.Ascending:
                return 'asc';
            case SortOrder.Descending:
                return 'desc';
            default:
                return 'none';
        }
    }
}
NgGridColumnBaseCommon.ɵfac = function NgGridColumnBaseCommon_Factory(t) { ɵngcc0.ɵɵinvalidFactory(); };
NgGridColumnBaseCommon.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NgGridColumnBaseCommon, inputs: { name: "name", value: "value", header: "header", width: "width", type: "type", SortKey: ["sortkey", "SortKey"] } });
__decorate([
    Input('name'),
    __metadata("design:type", Object)
], NgGridColumnBaseCommon.prototype, "name", void 0);
__decorate([
    Input('value'),
    __metadata("design:type", Object)
], NgGridColumnBaseCommon.prototype, "value", void 0);
__decorate([
    Input('header'),
    __metadata("design:type", String)
], NgGridColumnBaseCommon.prototype, "header", void 0);
__decorate([
    Input('width'),
    __metadata("design:type", String)
], NgGridColumnBaseCommon.prototype, "width", void 0);
__decorate([
    Input('type'),
    __metadata("design:type", String)
], NgGridColumnBaseCommon.prototype, "type", void 0);
__decorate([
    Input('sortkey'),
    __metadata("design:type", String)
], NgGridColumnBaseCommon.prototype, "SortKey", void 0);

/**
 * Komponente für NgGridColumnCommon. Extends NgGridColumnBaseCommon
 */
class NgGridColumnCommon extends NgGridColumnBaseCommon {
    /**
     * Konstruktor
     */
    constructor(grid, el) {
        super(grid, el);
        /**
        * Das Property enthielt boolean Wert für die CSS Klasse ellipsis. Default is false.
        */
        this._ellipsis = false;
    }
    /**
     * Input Parameter für das css Class ellipsis. Das Setter setzt das boolean Wert auf das private property _ellipsis
     */
    set ellipsis(v) {
        this._ellipsis = convertToBoolean$1(v);
    }
    /**
     * Getter für das private property _ellipsis. Ergibt das boolean Wert des Property
     */
    get ellipsis() {
        return this._ellipsis;
    }
    /**
     * Die Methode returns das Wert des Property _ellipsis
     */
    IsEllipsis() {
        return this._ellipsis;
    }
}
NgGridColumnCommon.ɵfac = function NgGridColumnCommon_Factory(t) { ɵngcc0.ɵɵinvalidFactory(); };
NgGridColumnCommon.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NgGridColumnCommon, inputs: { ellipsis: "ellipsis" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
__decorate([
    Input('ellipsis'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], NgGridColumnCommon.prototype, "ellipsis", null);

/**
 * Komponente für NgGridColumnActionCommon. Extends NgGridColumnBaseCommon
 */
class NgGridColumnActionCommon extends NgGridColumnBaseCommon {
    /**
    * Konstruktor
    * @param el Element Referenz
    * @param grid NgGridCommon
    */
    constructor(grid, el) {
        super(grid, el);
    }
}

/**
 * Basiskomponente für Paging
 */
class NgPagingCommon {
    /**
     * Konstruktor
     */
    constructor() {
        /**
         * Item für jedes Paging Element (Seitenzahl)
         */
        this.paginators = [];
        /**
         * Aktiver Seitenindex
         */
        this.activePageIndex = 0;
        /**
         * Erster Seitenindex
         */
        this.firstPageIndex = 0;
        /**
         * Letzter Seitenindex
         */
        this.lastPageIndex = 0;
        /**
         * Total Anzahl Rows
         */
        this.totalRowCount = 0;
        /**
         * Anzahl Rows pro Seite
         */
        this.pageSize = 20;
        /**
         * Text in Pager für 'Seite x von y'.
         * Folgende Interpolation Texte sind vorhanden:
         * {{CURRENTPAGE}}: Aktuelle Seite
         * {{TOTALPAGES}}: Anzahl Seiten
         */
        this.pagingText = 'Seite {{CURRENTPAGE}} von {{TOTALPAGES}}';
        /**
         * Text in Page für Anzahl Seitenelemente pro Seite
         * Folgende Interpolation Texte sind vorhanden:
         * {{PAGESIZE}}: Anzahl Elemente pro Seite
         */
        this.pageSizeText = 'Einträge pro Seite {{PAGESIZE}}';
        /**
         * Event wenn im Grid die Seite geändert wird. Als Parameter wird der neue PageIndex mitgegeben.
         */
        this._pagingEvent = new EventEmitter();
        /**
         * Event wenn im Pager die PageSize geändert wird
         */
        this._pagesizeChangedEvent = new EventEmitter();
    }
    //#region Input and Outputs
    /**
     * Property für Pager Data
     */
    set PagerData(p) {
        if (p != null) {
            this.totalRowCount = p.TotalRowCount;
            this.activePageIndex = p.CurrentPageIndex;
            this.pageSize = p.PageSize;
            this.pagedata = p;
        }
        this.createPager();
    }
    /**
     * Getter für pagesize. returns String
     */
    GetPageSizeText() {
        const interpolation = new Interpolation();
        const data = {
            PAGESIZE: this.getPageSize()
        };
        return interpolation.interpolateString(this.pageSizeText, data);
    }
    /**
     * Die Methode erstellt den Text, der auf den Pager renderierrt wird. Current page und TotalPage
     */
    GetPagingText() {
        const interpolation = new Interpolation();
        const data = {
            CURRENTPAGE: this.getCurrentPageNumber(),
            TOTALPAGES: this.getTotalPageNumber()
        };
        return interpolation.interpolateString(this.pagingText, data);
    }
    /**
     * Ändert die Seitegrösse
     * @param newSize: Neue Page Size
     */
    changePageSize(newSize) {
        this.pageSize = newSize;
        // Parent Controls über neue Page Size informieren
        this._pagesizeChangedEvent.emit(newSize);
    }
    //#endregion
    //#region Protected Methods
    /**
     * Erzeugt die Pager Daten
     */
    createPager() {
        this.paginators = [];
        if (this.totalRowCount > 0) {
            let totalPageCount = Math.ceil(this.totalRowCount / this.pageSize);
            // PageCount auf 1 stellen, wenn keine Records vorhanden sind.
            if (totalPageCount === 0) {
                totalPageCount = 1;
            }
            // PageIndex berechnen
            this.lastPageIndex = totalPageCount - 1;
            const startPageIndex = this.getStartPageIndex(totalPageCount);
            const endPageIndex = this.getEndPageIndex(totalPageCount);
            for (let i = startPageIndex; i <= endPageIndex; i++) {
                this.paginators.push(i);
            }
        }
        else {
            this.paginators.push(0);
        }
    }
    /**
     * Methode löst den Event aus, dass ein Paging stattgefunden hat
     */
    paged(newPageIndex) {
        const pagerData = new PagerData(this.pagedata.PageSize, newPageIndex, this.pagedata.TotalRowCount);
        this._pagingEvent.emit(pagerData);
    }
    /**
     * Gibt den Start Index zurück
     * @param totalPageCount Total Anzahl Seiten
     */
    getStartPageIndex(totalPageCount) {
        let startingPageToDisplay = 0;
        startingPageToDisplay = this.activePageIndex - 2;
        if ((totalPageCount - this.activePageIndex - 1) < 2) {
            startingPageToDisplay = totalPageCount - 5;
        }
        if (startingPageToDisplay < 0) {
            startingPageToDisplay = 0;
        }
        return startingPageToDisplay;
    }
    /**
     * Gibt den letzten Seitenindex zurück.
     * @param totalPageCount Total Anzahl Seiten
     */
    getEndPageIndex(totalPageCount) {
        let endingPageToDisplay = this.activePageIndex + 2;
        const maxEndingPageIndex = (4 > (totalPageCount - 1)) ? (totalPageCount - 1) : 4;
        if (endingPageToDisplay > totalPageCount - 1) {
            endingPageToDisplay = totalPageCount - 1;
        }
        else if (this.activePageIndex < 2) {
            endingPageToDisplay = maxEndingPageIndex;
        }
        return endingPageToDisplay;
    }
    //#endregion
    //#region Public Methods
    /**
     * Andert die Seite auf den neuen Index
     * @param newPageIndex Seiten Index. Dies entspricht der Seitenzahl - 1.
     */
    changePage(newPageIndex) {
        if (this.activePageIndex !== newPageIndex) {
            this.paged(newPageIndex);
        }
    }
    /**
     * Paging auf nächste Seite
     */
    nextPage() {
        if (this.activePageIndex !== this.lastPageIndex) {
            this.paged(this.activePageIndex + 1);
        }
    }
    /**
     * Paging eine Seite zurück
     */
    previousPage() {
        if (this.activePageIndex !== this.firstPageIndex) {
            this.paged(this.activePageIndex - 1);
        }
    }
    /**
     * Paging auf 1. Seite
     */
    firstPage() {
        if (this.activePageIndex !== this.firstPageIndex) {
            this.paged(0);
        }
    }
    /**
     * Paging auf letzter Seite
     */
    lastPage() {
        if (this.activePageIndex !== this.lastPageIndex) {
            this.paged(this.lastPageIndex);
        }
    }
    /**
     * Gibt die aktuelle Seitenzahl zurück
     */
    getCurrentPageNumber() {
        return this.activePageIndex + 1;
    }
    /**
     * Gibt die totale Anzahl Seiten zurück
     */
    getTotalPageNumber() {
        return this.lastPageIndex + 1;
    }
    /**
     * Gibt die aktuelle Pager Size zurück
     */
    getPageSize() {
        return this.pageSize;
    }
}
NgPagingCommon.ɵfac = function NgPagingCommon_Factory(t) { return new (t || NgPagingCommon)(); };
NgPagingCommon.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NgPagingCommon, inputs: { pagingText: ["pagingtext", "pagingText"], pageSizeText: ["pagesizetext", "pageSizeText"], PagerData: ["pagerdata", "PagerData"], name: "name" }, outputs: { _pagingEvent: "onpaging", _pagesizeChangedEvent: "onpagesizechanged" } });
__decorate([
    Input('pagerdata'),
    __metadata("design:type", PagerData),
    __metadata("design:paramtypes", [PagerData])
], NgPagingCommon.prototype, "PagerData", null);
__decorate([
    Input('pagingtext'),
    __metadata("design:type", String)
], NgPagingCommon.prototype, "pagingText", void 0);
__decorate([
    Input('pagesizetext'),
    __metadata("design:type", String)
], NgPagingCommon.prototype, "pageSizeText", void 0);
__decorate([
    Input('name'),
    __metadata("design:type", String)
], NgPagingCommon.prototype, "name", void 0);
__decorate([
    Output('onpaging'),
    __metadata("design:type", EventEmitter)
], NgPagingCommon.prototype, "_pagingEvent", void 0);
__decorate([
    Output('onpagesizechanged'),
    __metadata("design:type", EventEmitter)
], NgPagingCommon.prototype, "_pagesizeChangedEvent", void 0);

/**
 * Base Grid Action Button
 */
class NgGridButtonCommon {
    constructor() {
        /**
         * Input Property für Styling des Buttons. Deffiniert die Css Klassen des Buttons
         */
        this.iconstyle = '';
        /**
         * Button ist deaktiviert
         */
        this._isdisabledvalue = false;
        /**
        * Event wenn auf den Button geklickt wird
        */
        this.clickaction = new EventEmitter();
    }
    /**
     * Deaktivieren von Buttons
     * @param v Deaktiviert den Button
     * @return Definiert ob der Button deaktiviert ist
     */
    set isdisabled(v) {
        if (v === null || v === undefined || typeof v === 'boolean') {
            this._isdisabledvalue = v;
        }
        else {
            this._isdisabledvalue = v === 'true';
        }
    }
    get isdisabled() {
        return this._isdisabledvalue;
    }
    /**
     * Die Methode wird das cklickaction Emitter aktivieren
     */
    callaction() {
        if (!this._isdisabledvalue) {
            this.clickaction.emit(this.iconstyle);
        }
    }
}
NgGridButtonCommon.ɵfac = function NgGridButtonCommon_Factory(t) { return new (t || NgGridButtonCommon)(); };
NgGridButtonCommon.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NgGridButtonCommon, inputs: { iconstyle: "iconstyle", isdisabled: "isdisabled", icon: "icon" }, outputs: { clickaction: "onclick" } });
__decorate([
    Input('iconstyle'),
    __metadata("design:type", String)
], NgGridButtonCommon.prototype, "iconstyle", void 0);
__decorate([
    Input('icon'),
    __metadata("design:type", String)
], NgGridButtonCommon.prototype, "icon", void 0);
__decorate([
    Input('isdisabled'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], NgGridButtonCommon.prototype, "isdisabled", null);
__decorate([
    Output('onclick'),
    __metadata("design:type", EventEmitter)
], NgGridButtonCommon.prototype, "clickaction", void 0);

/**
 * Basis Komponente für NgGridImage
 */
class NgGridImageCommon {
}
NgGridImageCommon.ɵfac = function NgGridImageCommon_Factory(t) { return new (t || NgGridImageCommon)(); };
NgGridImageCommon.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NgGridImageCommon, inputs: { iconstyle: "iconstyle" } });
__decorate([
    Input('iconstyle'),
    __metadata("design:type", String)
], NgGridImageCommon.prototype, "iconstyle", void 0);

/**
 * Moment
 */
const moment$1 = moment_;
/**
 * Injectable directive
 */
let NgBaseDateTimeControl = class NgBaseDateTimeControl extends NgBaseModelControl {
    // #region Constructor
    /**
     * Konstruktor
     * @param parent typ NgFormularCommon
     * @param injector typ Injector
     * @param _elementRef typ ElementRef
     */
    constructor(parent, injector, _elementRef) {
        super(parent, injector);
        this._elementRef = _elementRef;
        // #endregion
        //#region Abstract Methods
        /**
         * das property enthielt das Value als string. Default ist ''
         */
        this._valueAsString = '';
        /**
         * Definiert das Control als Required
         */
        this._isrequired = false;
        /**
         * TextBox Placeholder
         */
        this._placeholder = null;
        /**
         * Resource Key für Validation Message Required bei Control
         */
        this._validationMessageRequired = 'VALIDATION_ERROR_REQUIRED';
        /**
         * Resource Key für Validation Message Required in Validation Summary
         */
        this._validationMessageRequiredSummary = 'VALIDATION_ERROR_SUMMARY_REQUIRED';
        /**
         * Resource Key für Validation Message DateTimeFormat bei Control
         */
        this._validationMessageDateTimeFormat = 'VALIDATION_ERROR_DATETIMEFORMAT';
        /**
         * Resource Key für Validation Message DateTimeFormat in Validation Summary
         */
        this._validationMessageDateTimeFormatSummary = 'VALIDATION_ERROR_SUMMARY_DATETIMEFORMAT';
    }
    //#endregion
    //#region Variablen
    //#endregion
    // #region Properties
    //#endregion
    //#region ValueControlAccess
    /**
     * Overwrite WriteValue to Set correct Date Object
     */
    writeValue(value) {
        if (value === '' || value === null || value === undefined) {
            this._value = null;
        }
        else {
            this._value = this.getDate(value).toDate();
        }
        super.writeValue(this._value);
    }
    /**
    * JSON Date String in ein UTC DateTime Object konvertieren, welches vom Control verwendete werden kann
    */
    getDate(timestamp) {
        const date = new Date(timestamp);
        const year = date.getUTCFullYear();
        const month = date.getUTCMonth();
        const day = date.getUTCDate();
        const hours = date.getUTCHours();
        const minutes = date.getUTCMinutes();
        const seconds = date.getUTCSeconds();
        return moment$1(Date.UTC(year, month, day, hours, minutes, seconds));
    }
    //#endregion
    // #region Value as String
    /**
     * Das Input bekommt das value von typ string
     */
    set valuestring(v) {
        this._valueAsString = v;
        let date = moment$1(v, [this.GetDateTimeFormatString()], true);
        date = this.ModifyParsedDateTimeValue(date).utc();
        if (date.isValid()) {
            this.value = date.toDate();
        }
        else {
            this.value = null;
        }
    }
    /**
     * getter für valuestring
     */
    get valuestring() {
        if (this.value === null) {
            return this._valueAsString;
        }
        else {
            const date = moment$1.utc(this.value);
            return date.local().format(this.GetDateTimeFormatString());
        }
    }
    /**
     * setzt das value von typ string zu property valuestring
     */
    setValueString(v) {
        this.valuestring = v;
    }
    // #endregion
    //#region Validation
    /**
     * prüft ob das Date ist valid
     */
    IsDateValid() {
        // NULL ist gültig
        if (this._valueAsString === null || this._valueAsString === undefined || this._valueAsString === '') {
            return true;
        }
        let date = moment$1(this.valuestring, [this.GetDateTimeFormatString()], true);
        date = this.ModifyParsedDateTimeValue(date).utc();
        return date.isValid();
    }
    /**
     * Validator
     */
    validateData(c) {
        let error = null;
        error = Validation.isValidDate(this, this._label, this._validationMessageDateTimeFormat, this._validationMessageDateTimeFormatSummary);
        if (this._isrequired) {
            error = Validation.required(c, this._label, this._validationMessageRequired, this._validationMessageRequiredSummary);
        }
        return error;
    }
};
NgBaseDateTimeControl.ɵfac = function NgBaseDateTimeControl_Factory(t) { return new (t || NgBaseDateTimeControl)(ɵngcc0.ɵɵinject(NgFormularCommon), ɵngcc0.ɵɵinject(ɵngcc0.Injector), ɵngcc0.ɵɵinject(ɵngcc0.ElementRef)); };
NgBaseDateTimeControl.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: NgBaseDateTimeControl, factory: NgBaseDateTimeControl.ɵfac });
NgBaseDateTimeControl.ctorParameters = () => [
    { type: NgFormularCommon },
    { type: Injector },
    { type: ElementRef }
];
__decorate([
    Input('isrequired'),
    __metadata("design:type", Boolean)
], NgBaseDateTimeControl.prototype, "_isrequired", void 0);
__decorate([
    Input('placeholder'),
    __metadata("design:type", String)
], NgBaseDateTimeControl.prototype, "_placeholder", void 0);
__decorate([
    Input('validationmessagerequired'),
    __metadata("design:type", String)
], NgBaseDateTimeControl.prototype, "_validationMessageRequired", void 0);
__decorate([
    Input('validationmessagesummaryrequired'),
    __metadata("design:type", String)
], NgBaseDateTimeControl.prototype, "_validationMessageRequiredSummary", void 0);
__decorate([
    Input('validationmessagedatetimeformat'),
    __metadata("design:type", String)
], NgBaseDateTimeControl.prototype, "_validationMessageDateTimeFormat", void 0);
__decorate([
    Input('validationmessagesummarydatetimeformat'),
    __metadata("design:type", String)
], NgBaseDateTimeControl.prototype, "_validationMessageDateTimeFormatSummary", void 0);
__decorate([
    Input('valuestring'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], NgBaseDateTimeControl.prototype, "valuestring", null);
NgBaseDateTimeControl = __decorate([ __metadata("design:paramtypes", [NgFormularCommon, Injector, ElementRef])
], NgBaseDateTimeControl);

/**
 * Moment
 */
const moment$2 = moment_;
/**
 * Komponente für NgDateCommon. Extends NgBaseDateTimeControl
 */
class NgDateCommon extends NgBaseDateTimeControl {
    // #endregion
    /**
     * Konstruktor
     * @param parent typ NgFormularCommon
     * @param injector typ Injector
     * @param _elementRef typ ElementRef
     */
    constructor(parent, injector, _elementRef) {
        super(parent, injector, _elementRef);
        this._elementRef = _elementRef;
        // #region Constants
        /**
         * Format des Datums
         */
        this.DATEFORMAT = 'DD.MM.YYYY';
        /**
         * Maske
         */
        this._mask = { mask: [/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/], guide: true, placeholderChar: '_', keepCharPositions: true };
        /**
         * Min Date
         */
        this._mindate = null;
        /**
         * Min Date
         */
        this._maxdate = null;
        /**
         * Definiert ob der Date Selector angezeigt wird
         */
        this._showselector = false;
        /**
         * Resource Key für Validation Message MinDate bei Control
         */
        this._validationMessageMinDate = 'VALIDATION_ERROR_MINDATE';
        /**
         * Resource Key für Validation Message MinDate in Validation Summary
         */
        this._validationMessageMinDateSummary = 'VALIDATION_ERROR_SUMMARY_MINDATE';
        /**
         * Resource Key für Validation Message MaxDate bei Control
         */
        this._validationMessageMaxDate = 'VALIDATION_ERROR_MAXDATE';
        /**
         * Resource Key für Validation Message MaxDate in Validation Summary
         */
        this._validationMessageMaxDateSummary = 'VALIDATION_ERROR_SUMMARY_MAXDATE';
    }
    // #endregion
    // #region Properties
    /**
     * Min Date
     */
    set mindate(v) {
        const date = moment$2(v, [this.DATEFORMAT], true);
        if (date.isValid()) {
            this._mindate = super.getDate(date).toDate();
        }
        else {
            this._mindate = null;
        }
    }
    /**
     * Min Date
     */
    set maxdate(v) {
        const date = moment$2(v, [this.DATEFORMAT], true);
        if (date.isValid()) {
            this._maxdate = super.getDate(date).toDate();
        }
        else {
            this._maxdate = null;
        }
    }
    // #region Abstract Methods
    /**
     * Methode ergibt Datum-Format vom String
     */
    GetDateTimeFormatString() {
        return this.DATEFORMAT;
    }
    /**
     * Methode ergibt Datum - Moment
     */
    ModifyParsedDateTimeValue(v) {
        return v;
    }
    // #endregion
    // #region Date Selector
    /**
     * Zeigt Date Selector an
     */
    showDateSelector() {
        // Touch Event auslösen
        this.onTouch();
        if (this._showselector) {
            this._showselector = false;
        }
        else {
            this._showselector = true;
        }
    }
    /**
     * HostListener
     */
    onClick(targetElement) {
        const clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this._showselector = false;
        }
    }
    /**
     * Date Selector
     */
    dateselect(v) {
        if (v.date === null) {
            this.setValueString('');
        }
        else {
            this.value = moment$2(v.date).utc().toDate();
        }
        this._showselector = false;
    }
    // #endregion
    /**
     * Validator
     */
    validateData(c) {
        let error = null;
        error = super.validateData(c);
        if (error === null && c.value !== null && c.value !== undefined && c.value !== '' && this._mindate !== undefined && this._mindate !== null) {
            error = Validation.minDate(this, this._mindate, this._label, this._validationMessageMinDate, this._validationMessageMinDateSummary);
        }
        if (error === null && c.value !== null && c.value !== undefined && c.value !== '' && this._maxdate !== undefined && this._maxdate !== null) {
            error = Validation.maxDate(this, this._maxdate, this._label, this._validationMessageMaxDate, this._validationMessageMaxDateSummary);
        }
        return error;
    }
}
NgDateCommon.ɵfac = function NgDateCommon_Factory(t) { ɵngcc0.ɵɵinvalidFactory(); };
NgDateCommon.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NgDateCommon, hostBindings: function NgDateCommon_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function NgDateCommon_click_HostBindingHandler($event) { return ctx.onClick($event.target); }, false, ɵngcc0.ɵɵresolveDocument);
    } }, inputs: { _validationMessageMinDate: ["validationmessagemindate", "_validationMessageMinDate"], _validationMessageMinDateSummary: ["validationmessagesummarymindate", "_validationMessageMinDateSummary"], _validationMessageMaxDate: ["validationmessagemaxdate", "_validationMessageMaxDate"], _validationMessageMaxDateSummary: ["validationmessagesummarymaxdate", "_validationMessageMaxDateSummary"], mindate: "mindate", maxdate: "maxdate" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
__decorate([
    Input('mindate'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], NgDateCommon.prototype, "mindate", null);
__decorate([
    Input('maxdate'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], NgDateCommon.prototype, "maxdate", null);
__decorate([
    Input('validationmessagemindate'),
    __metadata("design:type", String)
], NgDateCommon.prototype, "_validationMessageMinDate", void 0);
__decorate([
    Input('validationmessagesummarymindate'),
    __metadata("design:type", String)
], NgDateCommon.prototype, "_validationMessageMinDateSummary", void 0);
__decorate([
    Input('validationmessagemaxdate'),
    __metadata("design:type", String)
], NgDateCommon.prototype, "_validationMessageMaxDate", void 0);
__decorate([
    Input('validationmessagesummarymaxdate'),
    __metadata("design:type", String)
], NgDateCommon.prototype, "_validationMessageMaxDateSummary", void 0);
__decorate([
    HostListener('document:click', ['$event.target']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NgDateCommon.prototype, "onClick", null);

/**
 * Moment
 */
const moment$3 = moment_;
// #region Helper Classes
/**
 *Basis Komponente für DateSelectorItem
 */
class DateSelectorItem {
    /**
     * Konstruktor
     * @param displaytext Anzeigetext
     * @param date Datum
     * @param isenabled Element ist aktiv
     * @param isselected Element ist selektiert
     * @param iscurrent Element ist aktuelles Element
     * @param isnew Element ist neu
     */
    constructor(displaytext, date, isenabled, isselected, iscurrent, isnew) {
        /**
         * DisplayText Property; default Wert - ''
         */
        this.displaytext = '';
        /**
         * Datum
         */
        this.date = undefined;
        /**
         * Boolean Property, die zeigt, ob das Control enabled ist; default Wert - false
         */
        this.isenabled = false;
        /**
         * Boolean Property, die zeigt, ob das Element aktuell ist; default Wert - false
         */
        this.iscurrent = false;
        /**
         * Boolean Property, die zeigt, ob das Element selektiert ist; default Wert - false
         */
        this.isselected = false;
        /**
         * Boolean Property, die zeigt, ob das Element neu ist; default Wert - false
         */
        this.isnew = false;
        this.displaytext = displaytext;
        this.date = date;
        this.isenabled = isenabled;
        this.iscurrent = iscurrent;
        this.isselected = isselected;
        this.isnew = isnew;
    }
}
// #endregion
// @Component({
//   selector: 'ngDateSelector',
//   templateUrl: './dateselector.html',
// })
/**
 *Basis Komponente für NgDateSelector
 */
class NgDateSelectorCommon {
    constructor() {
        /**
         * Anfang des Kalenders
         */
        this.beginOfCalendar = 1;
        /**
         * Array von Daten
         */
        this.dates = [];
        /**
         * Datum Selector
         */
        this._dateselection = false;
        /**
         * Time Selector
         */
        this._timeselection = false;
        /**
         * Monat
         */
        this._month = 4;
        /**
         * Jahr
         */
        this._year = 2018;
        /**
         * Boolean Property für automatische Selektierung; default Wert - false
         */
        this._autoapplyselection = false;
        /**
         * Output Event beim Datum Selektieren
         */
        this.onSelectDate = new EventEmitter();
        //#endregion
    }
    /**
     * Input für ursprüngliches Datum
     */
    get initialValue() {
        return this._initialValue.toDate();
    }
    set initialValue(v) {
        if (v === null || v === undefined) {
            this._initialValue = null;
        }
        else {
            this._initialValue = moment$3(v);
        }
        this._selectedValue = null;
        if (this._initialValue === null) {
            this.initCalendar(moment$3());
        }
        else {
            this.initCalendar(this._initialValue);
        }
    }
    /**
     * Ursprünglicher Kalender
     */
    initCalendar(v) {
        /**
         * Monat und Jahr setzen
         */
        this._month = v.month();
        this._year = v.year();
        /**
         * Daten für Kalender initialiseren
         */
        this.initDates();
    }
    /**
     * Init Event
     */
    ngOnInit() {
        /**
         * Init Initial Date if Empty
         */
        if (this._initialValue === undefined) {
            this.initialValue = null;
        }
        this.initDates();
    }
    /**
     * Initial Datum
     */
    initDates() {
        const currentMonth = moment$3(new Date(this._year, this._month, 1));
        const lastMonth = moment$3(new Date(this._year, this._month, 1));
        lastMonth.add({ months: -1 });
        const nextMonths = moment$3(new Date(this._year, this._month, 1));
        nextMonths.add({ months: 1 });
        const weekdayBegin = currentMonth.weekday();
        const weekdayEnd = moment$3(new Date(currentMonth.year(), currentMonth.month(), currentMonth.daysInMonth())).weekday();
        // Clear Array
        const daysInCalendar = [];
        this.dates = [];
        if (weekdayBegin !== this.beginOfCalendar) {
            const lastMonthDay = lastMonth.daysInMonth();
            const lastMonthDate = new Date(lastMonth.year(), lastMonth.month(), lastMonthDay);
            const lastMonthWeekday = moment$3(lastMonthDate).weekday();
            let daysInLastMonth = 7 - (((7 + this.beginOfCalendar) - lastMonthWeekday) % 7);
            if (daysInLastMonth === 7) {
                daysInLastMonth = 0;
            }
            for (let day = lastMonthDay; day >= lastMonthDay - daysInLastMonth; day--) {
                daysInCalendar.splice(0, 0, new DateSelectorItem(day.toString(), new Date(lastMonth.year(), lastMonth.month(), day), false, false, false, false));
            }
        }
        // Add all Days in Month
        for (let dayinmonth = 1; dayinmonth <= currentMonth.daysInMonth(); dayinmonth++) {
            let isSelectedDate = false;
            let isNewDate = false;
            const isCurrentDate = moment$3().month() === this._month && moment$3().year() === this._year && moment$3().date() === dayinmonth;
            // Initial Wert setzen, falls vorhanden
            if (this._initialValue !== null) {
                isSelectedDate = this._initialValue.month() === this._month && this._initialValue.year() === this._year && this._initialValue.date() === dayinmonth;
            }
            // Selected Date Wert setzen, falls Wert gesetzt
            if (this._selectedValue !== null) {
                isNewDate = this._selectedValue.month() === this._month && this._selectedValue.year() === this._year && this._selectedValue.date() === dayinmonth;
            }
            daysInCalendar.push(new DateSelectorItem(dayinmonth.toString(), moment$3([this._year, this._month, dayinmonth]).toDate(), true, isSelectedDate, isCurrentDate, isNewDate));
        }
        let endOfCalender;
        if (this.beginOfCalendar === 0) {
            endOfCalender = 6;
        }
        else {
            endOfCalender = 0;
        }
        if (weekdayEnd !== endOfCalender) {
            let countMissingDays;
            if (this.beginOfCalendar === 0) {
                countMissingDays = endOfCalender - weekdayEnd;
            }
            else {
                countMissingDays = 7 - weekdayEnd;
            }
            for (let i = 1; i <= countMissingDays; i++) {
                daysInCalendar.push(new DateSelectorItem(i.toString(), new Date(nextMonths.year(), nextMonths.month(), i), false, false, false, false));
            }
        }
        for (let index = 0; index < daysInCalendar.length / 7; index++) {
            for (let day = 0; day < 7; day++) {
                if (day === 0) {
                    this.dates[index] = [];
                }
                this.dates[index].push(daysInCalendar[(index * 7) + day]);
            }
        }
    }
    /**
     * Modus ändern
     */
    changeMode() {
        if (this.beginOfCalendar === 0) {
            this.beginOfCalendar = 1;
        }
        else {
            this.beginOfCalendar = 0;
        }
        this.initDates();
    }
    /**
     * Vorheriger Monat
     */
    monthBack() {
        this._month = this._month - 1;
        if (this._month < 0) {
            this._month = 11;
            this._year = this._year - 1;
        }
        this.initDates();
    }
    /**
     * Nächster Monat
     */
    monthNext() {
        this._month = this._month + 1;
        if (this._month > 11) {
            this._month = 0;
            this._year = this._year + 1;
        }
        this.initDates();
    }
    /**
     * Methode ergibt das selektierte Datum
     */
    selectDate(v) {
        if (v.isenabled) {
            this.dates.forEach(date => date.filter(filter => filter.isnew).forEach(itm => itm.isnew = false));
            this.dates.forEach(date => date.filter(filter => filter.isselected).forEach(itm => itm.isselected = false));
            v.isnew = true;
            v.isselected = true;
            const dateValue = moment$3(v.date);
            // Übernehmen der Zeit aus dem bestehenden Wert
            if (this._selectedValue === null) {
                if (this._initialValue !== null) {
                    dateValue.hour(this._initialValue.hour());
                    dateValue.minute(this._initialValue.minute());
                }
            }
            else {
                dateValue.hour(this._selectedValue.hour());
                dateValue.minute(this._selectedValue.minute());
            }
            // Sekunden un Milisekunden Clean
            dateValue.second(0);
            dateValue.millisecond(0);
            this._selectedValue = dateValue;
            if (this._autoapplyselection) {
                this.applySelection();
            }
        }
    }
    //#region Time Settings
    /**
     * Getter für Stunden Uhrzeit
     */
    getHours() {
        if (this._selectedValue === null) {
            /**
             * Wert aus Init Value lesen
             */
            if (this._initialValue === null) {
                return 0;
            }
            else {
                return this._initialValue.hour();
            }
        }
        else {
            return this._selectedValue.hour();
        }
    }
    /**
     * Setter für Stunden Uhrzeit
     */
    setHours(v) {
        /**
         * Select Value setzen falls leer
         */
        this.initSelectedValue();
        if (v === null) {
            this._selectedValue.hour(0);
        }
        else {
            this._selectedValue.hour(v);
        }
    }
    /**
     * Getter für Minuten Uhrzeit
     */
    getMinutes() {
        if (this._selectedValue === null) {
            /**
             * Wert aus Init Value lesen
             */
            if (this._initialValue === null) {
                return 0;
            }
            else {
                return this._initialValue.minutes();
            }
        }
        else {
            return this._selectedValue.minutes();
        }
    }
    /**
     * Setter für Minuten Uhrzeit
     */
    setMinutes(v) {
        /**
         * Select Value setzen falls leer
         */
        this.initSelectedValue();
        if (v === null) {
            this._selectedValue.minutes(0);
        }
        else {
            this._selectedValue.minutes(v);
        }
    }
    initSelectedValue() {
        /**
         * Select Value setzen falls leer
         */
        if (this._selectedValue === null) {
            if (this._initialValue === null) {
                this._selectedValue = moment$3();
            }
            else {
                this._selectedValue = this._initialValue;
            }
        }
    }
    //#endregion
    //#region Button Actions
    /**
     * Auswahl auf aktuelle Zeit stellen
     */
    setToday() {
        this._selectedValue = moment$3();
        /**
         * Sekunden un Milisekunden Clean
         */
        this._selectedValue.second(0);
        this._selectedValue.millisecond(0);
        /**
         * Kalender Daten initialisieren falls Kalender angezeigt
         */
        if (this._dateselection) {
            this.initCalendar(this._selectedValue);
        }
        if (this._autoapplyselection) {
            this.applySelection();
        }
    }
    /**
     * Selektierung übernehmen
     */
    applySelection() {
        if (this._timeselection === false && this._selectedValue !== null) {
            this._selectedValue.hour(0);
            this._selectedValue.minute(0);
            this._selectedValue.second(0);
            this._selectedValue.millisecond(0);
        }
        if (this._dateselection === false && this._selectedValue !== null) {
            const tempValue = this._selectedValue.local();
            tempValue.date(1);
            tempValue.month(0);
            tempValue.year(1900);
            this._selectedValue = tempValue.utc();
        }
        this.onSelectDate.emit({
            date: this._selectedValue
        });
    }
    /**
     * Selektierung resetten
     */
    resetSelection() {
        this.onSelectDate.emit({
            date: null
        });
    }
}
NgDateSelectorCommon.ɵfac = function NgDateSelectorCommon_Factory(t) { return new (t || NgDateSelectorCommon)(); };
NgDateSelectorCommon.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NgDateSelectorCommon, inputs: { _dateselection: ["dateselection", "_dateselection"], _timeselection: ["timeselection", "_timeselection"], _month: ["month", "_month"], _year: ["year", "_year"], _autoapplyselection: ["autoapplyselection", "_autoapplyselection"], initialValue: "initialValue" }, outputs: { onSelectDate: "onSelect" } });
__decorate([
    Input('dateselection'),
    __metadata("design:type", Boolean)
], NgDateSelectorCommon.prototype, "_dateselection", void 0);
__decorate([
    Input('timeselection'),
    __metadata("design:type", Boolean)
], NgDateSelectorCommon.prototype, "_timeselection", void 0);
__decorate([
    Input('month'),
    __metadata("design:type", Number)
], NgDateSelectorCommon.prototype, "_month", void 0);
__decorate([
    Input('year'),
    __metadata("design:type", Number)
], NgDateSelectorCommon.prototype, "_year", void 0);
__decorate([
    Input('autoapplyselection'),
    __metadata("design:type", Object)
], NgDateSelectorCommon.prototype, "_autoapplyselection", void 0);
__decorate([
    Input('initialValue'),
    __metadata("design:type", Date),
    __metadata("design:paramtypes", [Date])
], NgDateSelectorCommon.prototype, "initialValue", null);
__decorate([
    Output('onSelect'),
    __metadata("design:type", Object)
], NgDateSelectorCommon.prototype, "onSelectDate", void 0);

/**
 * Moment
 */
const moment$4 = moment_;
/**
 * Komponente für NgDateTimeCommon. Extends NgBaseDateTimeControl
 */
class NgDateTimeCommon extends NgBaseDateTimeControl {
    // #endregion
    /**
     * Konstruktor
     * @param parent typ NgFormularCommon
     * @param injector typ Injector
     * @param _elementRef typ ElementRef
     */
    constructor(parent, injector, _elementRef) {
        super(parent, injector, _elementRef);
        this._elementRef = _elementRef;
        // #region Constants
        /**
         * Format des Datums
         */
        this.DATEFORMAT = 'DD.MM.YYYY HH:mm';
        /**
         * Maske
         */
        this._mask = { mask: [/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/, ' ', /[0-2]/, /\d/, ':', /[0-5]/, /\d/], guide: true, placeholderChar: '_', keepCharPositions: true };
        /**
         * Minimaler Wert des Datums
         */
        this._mindate = null;
        /**
         * Maximaler Wert des Datums
         */
        this._maxdate = null;
        /**
         * Definiert ob der Date Selector angezeigt wird
         */
        this._showselector = false;
        /**
         * Resource Key für Validation Message MinDate bei Control
         */
        this._validationMessageMinDate = 'VALIDATION_ERROR_MINDATE';
        /**
         * Resource Key für Validation Message MinDate in Validation Summary
         */
        this._validationMessageMinDateSummary = 'VALIDATION_ERROR_SUMMARY_MINDATE';
        /**
         * Resource Key für Validation Message MaxDate bei Control
         */
        this._validationMessageMaxDate = 'VALIDATION_ERROR_MAXDATE';
        /**
         * Resource Key für Validation Message MaxDate in Validation Summary
         */
        this._validationMessageMaxDateSummary = 'VALIDATION_ERROR_SUMMARY_MAXDATE';
    }
    // #endregion
    // #region Properties
    /**
     * Min Date
     */
    set mindate(v) {
        const date = moment$4(v, [this.DATEFORMAT], true);
        if (date.isValid()) {
            this._mindate = super.getDate(date).toDate();
        }
        else {
            this._mindate = null;
        }
    }
    /**
     * Max Date
     */
    set maxdate(v) {
        const date = moment$4(v, [this.DATEFORMAT], true);
        if (date.isValid()) {
            this._maxdate = super.getDate(date).toDate();
        }
        else {
            this._maxdate = null;
        }
    }
    // #region Abstract Methods
    /**
     * Methode ergibt Datum-Format vom String
     */
    GetDateTimeFormatString() {
        return this.DATEFORMAT;
    }
    /**
     * Methode modifiziert den parsed Wert des Datums
     */
    ModifyParsedDateTimeValue(v) {
        return v;
    }
    // #endregion
    // #region Date Selector
    /**
     * DateSelector wird beim Click-Event angezeigt
     */
    showDateSelector() {
        /**
         * Touch Event auslösen
         */
        this.onTouch();
        if (this._showselector) {
            this._showselector = false;
        }
        else {
            this._showselector = true;
        }
    }
    /**
     * HostListener
     */
    onClick(targetElement) {
        const clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this._showselector = false;
        }
    }
    /**
     * Methode ergibt das selektierte Datum
     */
    dateselect(v) {
        if (v.date === null) {
            this.setValueString('');
        }
        else {
            this.value = moment$4(v.date).utc().toDate();
        }
        this._showselector = false;
    }
    // #endregion
    /**
     * Validator
     */
    validateData(c) {
        let error = null;
        error = super.validateData(c);
        if (error === null && c.value !== null && c.value !== undefined && c.value !== '' && this._mindate !== undefined && this._mindate !== null) {
            error = Validation.minDate(this, this._mindate, this._label, this._validationMessageMinDate, this._validationMessageMinDateSummary);
        }
        if (error === null && c.value !== null && c.value !== undefined && c.value !== '' && this._maxdate !== undefined && this._maxdate !== null) {
            error = Validation.maxDate(this, this._maxdate, this._label, this._validationMessageMaxDate, this._validationMessageMaxDateSummary);
        }
        return error;
    }
}
NgDateTimeCommon.ɵfac = function NgDateTimeCommon_Factory(t) { ɵngcc0.ɵɵinvalidFactory(); };
NgDateTimeCommon.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NgDateTimeCommon, hostBindings: function NgDateTimeCommon_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function NgDateTimeCommon_click_HostBindingHandler($event) { return ctx.onClick($event.target); }, false, ɵngcc0.ɵɵresolveDocument);
    } }, inputs: { _validationMessageMinDate: ["validationmessagemindate", "_validationMessageMinDate"], _validationMessageMinDateSummary: ["validationmessagesummarymindate", "_validationMessageMinDateSummary"], _validationMessageMaxDate: ["validationmessagemaxdate", "_validationMessageMaxDate"], _validationMessageMaxDateSummary: ["validationmessagesummarymaxdate", "_validationMessageMaxDateSummary"], mindate: "mindate", maxdate: "maxdate" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
__decorate([
    Input('mindate'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], NgDateTimeCommon.prototype, "mindate", null);
__decorate([
    Input('maxdate'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], NgDateTimeCommon.prototype, "maxdate", null);
__decorate([
    Input('validationmessagemindate'),
    __metadata("design:type", String)
], NgDateTimeCommon.prototype, "_validationMessageMinDate", void 0);
__decorate([
    Input('validationmessagesummarymindate'),
    __metadata("design:type", String)
], NgDateTimeCommon.prototype, "_validationMessageMinDateSummary", void 0);
__decorate([
    Input('validationmessagemaxdate'),
    __metadata("design:type", String)
], NgDateTimeCommon.prototype, "_validationMessageMaxDate", void 0);
__decorate([
    Input('validationmessagesummarymaxdate'),
    __metadata("design:type", String)
], NgDateTimeCommon.prototype, "_validationMessageMaxDateSummary", void 0);
__decorate([
    HostListener('document:click', ['$event.target']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NgDateTimeCommon.prototype, "onClick", null);

/**
 * Moment
 */
const moment$5 = moment_;
/**
 * Komponente für NgTimeCommon. Extends NgBaseDateTimeControl
 */
class NgTimeCommon extends NgBaseDateTimeControl {
    // #endregion
    /**
     * Konstruktor
     * @param parent typ NgFormularCommon
     * @param injector typ Injector
     * @param _elementRef typ ElementRef
     */
    constructor(parent, injector, _elementRef) {
        super(parent, injector, _elementRef);
        this._elementRef = _elementRef;
        // #region Constants
        /**
         * Format des Datums
         */
        this.TIMEFORMAT = 'HH:mm';
        /**
         * Maske
         */
        this._mask = { mask: [/[0-2]/, /\d/, ':', /[0-5]/, /\d/], guide: true, placeholderChar: '_', keepCharPositions: true };
        /**
         * Min Time
         */
        this._mintime = null;
        /**
         * Max Time
         */
        this._maxtime = null;
        /**
         * Definiert ob der Date Selector angezeigt wird
         */
        this._showselector = false;
        /**
         * Resource Key für Validation Message MinTime bei Control
         */
        this._validationMessageMinTime = 'VALIDATION_ERROR_MINTIME';
        /**
         * Resource Key für Validation Message MinTime in Validation Summary
         */
        this._validationMessageMinTimeSummary = 'VALIDATION_ERROR_SUMMARY_MINTIME';
        /**
         * Resource Key für Validation Message MinTime bei Control
         */
        this._validationMessageMaxTime = 'VALIDATION_ERROR_MAXTIME';
        /**
         * Resource Key für Validation Message MinTime in Validation Summary
         */
        this._validationMessageMaxTimeSummary = 'VALIDATION_ERROR_SUMMARY_MAXTIME';
    }
    // #endregion
    // #region Properties
    /**
     * Min Time
     */
    set mintime(v) {
        let time = moment$5(v, [this.TIMEFORMAT], true);
        time = this.ModifyParsedDateTimeValue(time);
        if (time.isValid()) {
            this._mintime = super.getDate(time).toDate();
        }
        else {
            this._mintime = null;
        }
    }
    /**
     * Max Time
     */
    set maxtime(v) {
        let time = moment$5(v, [this.TIMEFORMAT], true);
        time = this.ModifyParsedDateTimeValue(time);
        if (time.isValid()) {
            this._maxtime = super.getDate(time).toDate();
        }
        else {
            this._maxtime = null;
        }
    }
    // #region Abstract Methods
    /**
     * Methode ergibt Datum-Format vom String
     */
    GetDateTimeFormatString() {
        return this.TIMEFORMAT;
    }
    /**
     * Methode ergibt Datum - Moment
     */
    ModifyParsedDateTimeValue(v) {
        v.date(1);
        v.month(0);
        v.year(1900);
        return v;
    }
    // #endregion
    // #region Time Selector
    /**
     * Zeigt Date Selector an
     */
    showTimeSelector() {
        // Touch Event auslösen
        this.onTouch();
        if (this._showselector) {
            this._showselector = false;
        }
        else {
            this._showselector = true;
        }
    }
    /**
     * HostListener
     */
    onClick(targetElement) {
        const clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this._showselector = false;
        }
    }
    /**
     * Time Selector
     */
    timeselect(v) {
        if (v.date === null) {
            this.setValueString('');
        }
        else {
            this.value = moment$5(v.date).utc().toDate();
        }
        this._showselector = false;
    }
    // #endregion
    /**
     * Validator
     */
    validateData(c) {
        let error = null;
        error = super.validateData(c);
        if (error === null && c.value !== null && c.value !== undefined && c.value !== '' && this._mintime !== undefined && this._mintime !== null) {
            error = Validation.minTime(this, this._mintime, this._label, this._validationMessageMinTime, this._validationMessageMinTimeSummary);
        }
        if (error === null && c.value !== null && c.value !== undefined && c.value !== '' && this._maxtime !== undefined && this._maxtime !== null) {
            error = Validation.maxTime(this, this._maxtime, this._label, this._validationMessageMaxTime, this._validationMessageMaxTimeSummary);
        }
        return error;
    }
}
NgTimeCommon.ɵfac = function NgTimeCommon_Factory(t) { ɵngcc0.ɵɵinvalidFactory(); };
NgTimeCommon.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NgTimeCommon, hostBindings: function NgTimeCommon_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function NgTimeCommon_click_HostBindingHandler($event) { return ctx.onClick($event.target); }, false, ɵngcc0.ɵɵresolveDocument);
    } }, inputs: { _validationMessageMinTime: ["validationmessagemintime", "_validationMessageMinTime"], _validationMessageMinTimeSummary: ["validationmessagesummarymintime", "_validationMessageMinTimeSummary"], _validationMessageMaxTime: ["validationmessagemaxtime", "_validationMessageMaxTime"], _validationMessageMaxTimeSummary: ["validationmessagesummarymaxtime", "_validationMessageMaxTimeSummary"], mintime: "mintime", maxtime: "maxtime" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
__decorate([
    Input('mintime'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], NgTimeCommon.prototype, "mintime", null);
__decorate([
    Input('maxtime'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], NgTimeCommon.prototype, "maxtime", null);
__decorate([
    Input('validationmessagemintime'),
    __metadata("design:type", String)
], NgTimeCommon.prototype, "_validationMessageMinTime", void 0);
__decorate([
    Input('validationmessagesummarymintime'),
    __metadata("design:type", String)
], NgTimeCommon.prototype, "_validationMessageMinTimeSummary", void 0);
__decorate([
    Input('validationmessagemaxtime'),
    __metadata("design:type", String)
], NgTimeCommon.prototype, "_validationMessageMaxTime", void 0);
__decorate([
    Input('validationmessagesummarymaxtime'),
    __metadata("design:type", String)
], NgTimeCommon.prototype, "_validationMessageMaxTimeSummary", void 0);
__decorate([
    HostListener('document:click', ['$event.target']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NgTimeCommon.prototype, "onClick", null);

/**
 * Common Klasse für Static Label Control
 **/
class NgStaticLabelCommon extends NgInputBase {
    constructor() {
        super(...arguments);
        /**
         * Erlaubt HTML Content in der Anzeige des Wertes
         */
        this._allowhtml = false;
    }
    /**
     * Validierung des Controls
     *
     * @param c Control das Validiert werden soll
     * @returns Fehlermeldung aus Validation oder NULL
     */
    validateData(c) {
        // Keine Validierung, daher immer NULL
        return null;
    }
}
NgStaticLabelCommon.ɵfac = function NgStaticLabelCommon_Factory(t) { return ɵNgStaticLabelCommon_BaseFactory(t || NgStaticLabelCommon); };
NgStaticLabelCommon.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NgStaticLabelCommon, inputs: { _allowhtml: ["allowhtml", "_allowhtml"] }, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
__decorate([
    Input('allowhtml'),
    __metadata("design:type", Boolean)
], NgStaticLabelCommon.prototype, "_allowhtml", void 0);

/**
 * Common Control für Form Item Container.
 **/
class NgStaticFormContainerCommon extends NgBaseModelControl {
    constructor() {
        super(...arguments);
        /**
         * Definiert den Container als Required Form Item
         */
        this._isrequired = false;
        /**
         * Text welcher als Tooltip angezeigt wird.
         */
        this._tooltiptext = '';
    }
    /**
     * Definiert den Container als Required Form Item
     */
    get isrequired() {
        return this._isrequired;
    }
    /**
     * Definiert den Container als Required Form Item
     */
    set isrequired(v) {
        this._isrequired = convertToBoolean$1(v);
    }
    /**
     * Validierung des Controls
     *
     * @description Validierung wird auf dem Form Container nicht gemacht, da kein Model Binding vorhanden.
     * @param c Control das Validiert werden soll
     * @returns Fehlermeldung aus Validation oder NULL
     */
    validateData(c) {
        // Keine Validierung, daher immer NULL
        return null;
    }
}
NgStaticFormContainerCommon.ɵfac = function NgStaticFormContainerCommon_Factory(t) { return ɵNgStaticFormContainerCommon_BaseFactory(t || NgStaticFormContainerCommon); };
NgStaticFormContainerCommon.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NgStaticFormContainerCommon, inputs: { _tooltiptext: ["tooltiptext", "_tooltiptext"], isrequired: "isrequired" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
__decorate([
    Input('tooltiptext'),
    __metadata("design:type", String)
], NgStaticFormContainerCommon.prototype, "_tooltiptext", void 0);
__decorate([
    Input('isrequired'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], NgStaticFormContainerCommon.prototype, "isrequired", null);

/**
 * Base Komponente für NgWizardCommon
 */
class NgWizardCommon {
    constructor() {
        /**
         * Name des Controls
         */
        this._name = '';
        /**
         * Boolean Property prüft ob Navigation im Wizard disabled ist; default Wert - false
         */
        this._disableNavigation = false;
        /**
         * EventEmitter wenn der Schritt geändert wird
         */
        this._onStepChanged = new EventEmitter();
        /**
         * Leere Implementation von 'propagateChange'. Muss gemacht werden, damit kein Fehler entsteht
         */
        this.propagateChange = () => { };
        /**
         * Leere Implementation von 'propagateTouch'. Muss gemacht werden, damit kein Fehler entsteht
         */
        this.propagateTouch = () => { };
    }
    /**
     * Setter und Getter für aktueller Schritt
     */
    set currentstep(v) {
        this.changeStep(v);
        this.propagateChange(this._currentstep);
    }
    get currentstep() {
        return this._currentstep;
    }
    setStepInternal(step) {
        this._currentstep = step;
        this.propagateChange(this._currentstep);
    }
    // #region Control initialisieren
    /**
     * AfterContentInit Event
     */
    ngAfterContentInit() {
        this.initSteps();
    }
    /**
     * Ursprünglicher Schritt wird selektiert
     */
    initSteps() {
        const activeStep = this.wizardItems().filter((step) => step._active);
        if (activeStep.length === 0) {
            const initStep = this.wizardItems().toArray()[0];
            this.selectStep(initStep);
            initStep._disabled = false;
            this.setStepInternal(initStep._id);
        }
    }
    // #endregion
    /**
     * Schritt selektieren
     * @param step Step welcher selektiert werden soll
     */
    selectStep(step) {
        // Cancel if Navigation disabled
        if (this._disableNavigation) {
            return;
        }
        this.changeStep(step._id);
    }
    /**
     * Auf nächsten/vorherigen Schritt gehen
     * @param step Step auf welchen gewechselt werden soll
     */
    changeStep(step) {
        if (this.wizardItems() === undefined || this.wizardItems() === null) {
            return;
        }
        const wizardItemsArray = this.wizardItems().toArray();
        const itemsCount = wizardItemsArray.length;
        const currentItemIndex = wizardItemsArray.findIndex(itm => itm._id === step);
        for (let i = 0; i < itemsCount; i++) {
            const item = wizardItemsArray[i];
            if (i < currentItemIndex) {
                item._iscomplete = true;
            }
            else {
                item._iscomplete = false;
            }
            if (i > currentItemIndex + 1) {
                item._disabled = true;
            }
            else {
                item._disabled = false;
            }
            if (i === currentItemIndex) {
                item._active = true;
            }
            else {
                item._active = false;
            }
        }
        this.setStepInternal(step);
        this._onStepChanged.emit(step);
    }
    /**
     * Methode, damit andere Controls änderungen im Control mitbekommen können
     * Zur Änderungsinfo die Methode propagateChange aufrufen.
     */
    registerOnChange(fn) {
        this.propagateChange = (obj) => fn(obj);
    }
    /**
     * Methode, damit andere Controls änderungen mitbekommen, wenn das Control aktiviert (Focus) wird.
     */
    registerOnTouched(fn) {
        this.propagateTouch = (obj) => fn(obj);
    }
    /**
     * Methode zum schreiben von Werten aus dem Model in das Control
     */
    writeValue(value) {
        if (value) {
            this.changeStep(value);
        }
    }
}
NgWizardCommon.ɵfac = function NgWizardCommon_Factory(t) { return new (t || NgWizardCommon)(); };
NgWizardCommon.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NgWizardCommon, inputs: { _name: ["name", "_name"], _disableNavigation: ["disablenavigation", "_disableNavigation"], currentstep: "currentstep" }, outputs: { _onStepChanged: "stepchanged" } });
__decorate([
    Input('name'),
    __metadata("design:type", String)
], NgWizardCommon.prototype, "_name", void 0);
__decorate([
    Input('disablenavigation'),
    __metadata("design:type", Boolean)
], NgWizardCommon.prototype, "_disableNavigation", void 0);
__decorate([
    Input('currentstep'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], NgWizardCommon.prototype, "currentstep", null);
__decorate([
    Output('stepchanged'),
    __metadata("design:type", EventEmitter)
], NgWizardCommon.prototype, "_onStepChanged", void 0);

/**
 * Basis Komponente für NgWizardItem
 */
class NgWizardItemCommon {
    constructor() {
        /**
         * Prüft ob der Schritt abgeschlossen wurde.
         */
        this._iscomplete = false;
        /**
         * Prüft ob der Schritt disabled ist.
         */
        this._disabled = true;
    }
}
NgWizardItemCommon.ɵfac = function NgWizardItemCommon_Factory(t) { return new (t || NgWizardItemCommon)(); };
NgWizardItemCommon.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NgWizardItemCommon, inputs: { _iscomplete: ["iscomplete", "_iscomplete"], _disabled: ["disabled", "_disabled"], _active: ["active", "_active"], _id: ["id", "_id"], _label: ["label", "_label"] } });
__decorate([
    Input('active'),
    __metadata("design:type", Boolean)
], NgWizardItemCommon.prototype, "_active", void 0);
__decorate([
    Input('iscomplete'),
    __metadata("design:type", Boolean)
], NgWizardItemCommon.prototype, "_iscomplete", void 0);
__decorate([
    Input('disabled'),
    __metadata("design:type", Boolean)
], NgWizardItemCommon.prototype, "_disabled", void 0);
__decorate([
    Input('id'),
    __metadata("design:type", String)
], NgWizardItemCommon.prototype, "_id", void 0);
__decorate([
    Input('label'),
    __metadata("design:type", String)
], NgWizardItemCommon.prototype, "_label", void 0);

/**
 * Komponente für NgTinyMceCommon. Extends NgInputBase
 */
class NgTinyMceCommon extends NgInputBase {
    constructor() {
        super(...arguments);
        /**
         * TextBox Placeholder
         */
        this._maxlength = null;
        /**
         * Resource Key für Validation Message Required bei Control
         */
        this._validationMessageRequired = 'VALIDATION_ERROR_REQUIRED';
        /**
         * Resource Key für Validation Message Required in Validation Summary
         */
        this._validationMessageRequiredSummary = 'VALIDATION_ERROR_SUMMARY_REQUIRED';
    }
    /**
     * Validator
     */
    validateData(c) {
        let error = null;
        if (this._isrequired) {
            error = Validation.required(c, this._label, this._validationMessageRequired, this._validationMessageRequiredSummary);
        }
        return error;
    }
}
NgTinyMceCommon.ɵfac = function NgTinyMceCommon_Factory(t) { return ɵNgTinyMceCommon_BaseFactory(t || NgTinyMceCommon); };
NgTinyMceCommon.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NgTinyMceCommon, inputs: { _maxlength: ["maxlength", "_maxlength"], _validationMessageRequired: ["validationmessagerequired", "_validationMessageRequired"], _validationMessageRequiredSummary: ["validationmessagesummaryrequired", "_validationMessageRequiredSummary"] }, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
__decorate([
    Input("maxlength"),
    __metadata("design:type", Number)
], NgTinyMceCommon.prototype, "_maxlength", void 0);
__decorate([
    Input("validationmessagerequired"),
    __metadata("design:type", String)
], NgTinyMceCommon.prototype, "_validationMessageRequired", void 0);
__decorate([
    Input("validationmessagesummaryrequired"),
    __metadata("design:type", String)
], NgTinyMceCommon.prototype, "_validationMessageRequiredSummary", void 0);

/**
 * Klasse EVents. Еnthalt verchiedene Outputs
 */
let Events = class Events {
    constructor() {
        this.onBeforePaste = new EventEmitter();
        this.onBlur = new EventEmitter();
        this.onClick = new EventEmitter();
        this.onContextMenu = new EventEmitter();
        this.onCopy = new EventEmitter();
        this.onCut = new EventEmitter();
        this.onDblclick = new EventEmitter();
        this.onDrag = new EventEmitter();
        this.onDragDrop = new EventEmitter();
        this.onDragEnd = new EventEmitter();
        this.onDragGesture = new EventEmitter();
        this.onDragOver = new EventEmitter();
        this.onDrop = new EventEmitter();
        this.onEditorContentChange = new EventEmitter();
        this.onFocus = new EventEmitter();
        this.onFocusIn = new EventEmitter();
        this.onFocusOut = new EventEmitter();
        this.onKeyDown = new EventEmitter();
        this.onKeyPress = new EventEmitter();
        this.onKeyUp = new EventEmitter();
        this.onMouseDown = new EventEmitter();
        this.onMouseEnter = new EventEmitter();
        this.onMouseLeave = new EventEmitter();
        this.onMouseMove = new EventEmitter();
        this.onMouseOut = new EventEmitter();
        this.onMouseOver = new EventEmitter();
        this.onMouseUp = new EventEmitter();
        this.onPaste = new EventEmitter();
        this.onSelectionChange = new EventEmitter();
        this.onActivate = new EventEmitter();
        this.onAddUndo = new EventEmitter();
        this.onBeforeAddUndo = new EventEmitter();
        this.onBeforeExecCommand = new EventEmitter();
        this.onBeforeGetContent = new EventEmitter();
        this.onBeforeRenderUI = new EventEmitter();
        this.onBeforeSetContent = new EventEmitter();
        this.onChange = new EventEmitter();
        this.onClearUndos = new EventEmitter();
        this.onDeactivate = new EventEmitter();
        this.onDirty = new EventEmitter();
        this.onExecCommand = new EventEmitter();
        this.onGetContent = new EventEmitter();
        this.onHide = new EventEmitter();
        this.onInit = new EventEmitter();
        this.onLoadContent = new EventEmitter();
        this.onNodeChange = new EventEmitter();
        this.onPostProcess = new EventEmitter();
        this.onPostRender = new EventEmitter();
        this.onPreInit = new EventEmitter();
        this.onPreProcess = new EventEmitter();
        this.onProgressState = new EventEmitter();
        this.onRedo = new EventEmitter();
        this.onRemove = new EventEmitter();
        this.onReset = new EventEmitter();
        this.onSaveContent = new EventEmitter();
        this.onSetAttrib = new EventEmitter();
        this.onObjectResizeStart = new EventEmitter();
        this.onObjectResized = new EventEmitter();
        this.onObjectSelected = new EventEmitter();
        this.onSetContent = new EventEmitter();
        this.onShow = new EventEmitter();
        this.onSubmit = new EventEmitter();
        this.onUndo = new EventEmitter();
        this.onVisualAid = new EventEmitter();
    }
};
Events.ɵfac = function Events_Factory(t) { return new (t || Events)(); };
Events.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: Events, outputs: { onBeforePaste: "onBeforePaste", onBlur: "onBlur", onClick: "onClick", onContextMenu: "onContextMenu", onCopy: "onCopy", onCut: "onCut", onDblclick: "onDblclick", onDrag: "onDrag", onDragDrop: "onDragDrop", onDragEnd: "onDragEnd", onDragGesture: "onDragGesture", onDragOver: "onDragOver", onDrop: "onDrop", onEditorContentChange: "onEditorContentChange", onFocus: "onFocus", onFocusIn: "onFocusIn", onFocusOut: "onFocusOut", onKeyDown: "onKeyDown", onKeyPress: "onKeyPress", onKeyUp: "onKeyUp", onMouseDown: "onMouseDown", onMouseEnter: "onMouseEnter", onMouseLeave: "onMouseLeave", onMouseMove: "onMouseMove", onMouseOut: "onMouseOut", onMouseOver: "onMouseOver", onMouseUp: "onMouseUp", onPaste: "onPaste", onSelectionChange: "onSelectionChange", onActivate: "onActivate", onAddUndo: "onAddUndo", onBeforeAddUndo: "onBeforeAddUndo", onBeforeExecCommand: "onBeforeExecCommand", onBeforeGetContent: "onBeforeGetContent", onBeforeRenderUI: "onBeforeRenderUI", onBeforeSetContent: "onBeforeSetContent", onChange: "onChange", onClearUndos: "onClearUndos", onDeactivate: "onDeactivate", onDirty: "onDirty", onExecCommand: "onExecCommand", onGetContent: "onGetContent", onHide: "onHide", onInit: "onInit", onLoadContent: "onLoadContent", onNodeChange: "onNodeChange", onPostProcess: "onPostProcess", onPostRender: "onPostRender", onPreInit: "onPreInit", onPreProcess: "onPreProcess", onProgressState: "onProgressState", onRedo: "onRedo", onRemove: "onRemove", onReset: "onReset", onSaveContent: "onSaveContent", onSetAttrib: "onSetAttrib", onObjectResizeStart: "onObjectResizeStart", onObjectResized: "onObjectResized", onObjectSelected: "onObjectSelected", onSetContent: "onSetContent", onShow: "onShow", onSubmit: "onSubmit", onUndo: "onUndo", onVisualAid: "onVisualAid" } });
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onBeforePaste", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onBlur", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onClick", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onContextMenu", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onCopy", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onCut", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onDblclick", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onDrag", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onDragDrop", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onDragEnd", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onDragGesture", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onDragOver", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onDrop", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onEditorContentChange", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onFocus", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onFocusIn", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onFocusOut", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onKeyDown", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onKeyPress", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onKeyUp", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onMouseDown", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onMouseEnter", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onMouseLeave", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onMouseMove", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onMouseOut", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onMouseOver", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onMouseUp", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onPaste", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onSelectionChange", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onActivate", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onAddUndo", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onBeforeAddUndo", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onBeforeExecCommand", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onBeforeGetContent", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onBeforeRenderUI", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onBeforeSetContent", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onChange", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onClearUndos", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onDeactivate", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onDirty", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onExecCommand", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onGetContent", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onHide", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onInit", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onLoadContent", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onNodeChange", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onPostProcess", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onPostRender", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onPreInit", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onPreProcess", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onProgressState", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onRedo", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onRemove", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onReset", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onSaveContent", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onSetAttrib", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onObjectResizeStart", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onObjectResized", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onObjectSelected", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onSetContent", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onShow", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onSubmit", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onUndo", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onVisualAid", void 0);
/**
 * Enthielt key words von alle Events für Tiny MCE
 */
const validEvents = [
    'onActivate',
    'onAddUndo',
    'onBeforeAddUndo',
    'onBeforeExecCommand',
    'onBeforeGetContent',
    'onBeforeRenderUI',
    'onBeforeSetContent',
    'onBeforePaste',
    'onBlur',
    'onChange',
    'onClearUndos',
    'onClick',
    'onContextMenu',
    'onCopy',
    'onCut',
    'onDblclick',
    'onDeactivate',
    'onDirty',
    'onDrag',
    'onDragDrop',
    'onDragEnd',
    'onDragGesture',
    'onDragOver',
    'onDrop',
    'onExecCommand',
    'onFocus',
    'onFocusIn',
    'onFocusOut',
    'onGetContent',
    'onHide',
    'onInit',
    'onKeyDown',
    'onKeyPress',
    'onKeyUp',
    'onLoadContent',
    'onMouseDown',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    'onNodeChange',
    'onObjectResizeStart',
    'onObjectResized',
    'onObjectSelected',
    'onPaste',
    'onPostProcess',
    'onPostRender',
    'onPreProcess',
    'onProgressState',
    'onRedo',
    'onRemove',
    'onReset',
    'onSaveContent',
    'onSelectionChange',
    'onSetAttrib',
    'onSetContent',
    'onShow',
    'onSubmit',
    'onUndo',
    'onVisualAid'
];

/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
const getTinymce = () => {
    const w = window;
    return w && w.tinymce ? w.tinymce : null;
};
const ɵ0 = getTinymce;

/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
/**
 * Bind Handler Event
 */
const bindHandlers = (ctx, editor, initEvent) => {
    validEvents.forEach((eventName) => {
        const eventEmitter = ctx[eventName];
        if (eventEmitter.observers.length > 0) {
            if (eventName === 'onInit') {
                ctx.ngZone.run(() => eventEmitter.emit({ event: initEvent, editor }));
            }
            else {
                editor.on(eventName.substring(2), ctx.ngZone.run(() => (event) => eventEmitter.emit({ event, editor })));
            }
        }
    });
};
/**
 * Unique Wert
 */
let unique = 0;
/**
 * UUID
 */
const uuid = (prefix) => {
    const date = new Date();
    const time = date.getTime();
    const random = Math.floor(Math.random() * 1000000000);
    unique++;
    return prefix + '_' + random + unique + String(time);
};
/**
 * Prüft ob das Element ein HTMLTextAreaElement ist
 */
const isTextarea = (element) => {
    return typeof element !== 'undefined' && element.tagName.toLowerCase() === 'textarea';
};
/**
 * Plugins-Array Normalisierung
 */
const normalizePluginArray = (plugins) => {
    if (typeof plugins === 'undefined' || plugins === '') {
        return [];
    }
    return Array.isArray(plugins) ? plugins : plugins.split(' ');
};
const ɵ0$1 = normalizePluginArray;
/**
 * Merge von Plugins
 */
const mergePlugins = (initPlugins, inputPlugins) => normalizePluginArray(initPlugins).concat(normalizePluginArray(inputPlugins));

/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
/**
*Funktion.  Fügt ein scripttag hinzu. Verlangt:
* scriptId: string,
* doc: Document,
* url: string,
 *callback: callbackFn
 */
const injectScriptTag = (scriptId, doc, url, callback) => {
    const scriptTag = doc.createElement('script');
    scriptTag.type = 'application/javascript';
    scriptTag.id = scriptId;
    scriptTag.addEventListener('load', callback);
    scriptTag.src = url;
    doc.head.appendChild(scriptTag);
};
const ɵ0$2 = injectScriptTag;
/**
 * Funktion create. Returns IStateObj
 */
const create = () => {
    return {
        listeners: [],
        scriptId: uuid('tiny-script'),
        scriptLoaded: false
    };
};
/**
 * Funktion load. Verlangt:
 * state: IStateObj
 * doc: Document
 * url: string
 * callback: callbackFn
 */
const load = (state, doc, url, callback) => {
    if (state.scriptLoaded) {
        callback();
    }
    else {
        state.listeners.push(callback);
        if (!doc.getElementById(state.scriptId)) {
            injectScriptTag(state.scriptId, doc, url, () => {
                state.listeners.forEach((fn) => fn());
                state.scriptLoaded = true;
            });
        }
    }
};

// Source: https://github.com/cnblogs/tinymce-angular
const scriptState = create();
const EDITOR_COMPONENT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NgTinyMceEditorComponent),
    multi: true
};
let NgTinyMceEditorComponent = class NgTinyMceEditorComponent extends Events {
    constructor(elementRef, ngZone) {
        super();
        this.element = undefined;
        this.id = '';
        this.toolbar = null;
        this.onTouchedCallback = () => { };
        this.onChangeCallback = (x) => { };
        this.changeInEditor = false;
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.initialise = this.initialise.bind(this);
    }
    writeValue(value) {
        this.initialValue = value || this.initialValue;
        if (this.editor && this.editor.initialized && typeof value === 'string') {
            console.log("Set Value to TinyMCE with WriteValue");
            this.editor.setContent(value);
        }
    }
    set value(v) {
        if (this.editor && this.changeInEditor == false) {
            console.log("Set Value to TinyMCE with Value");
            this.editor.setContent(v);
        }
        else
            this.initialValue = v;
    }
    get value() {
        console.log("Read Value");
        return this.editor.getContent();
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    setDisabledState(isDisabled) {
        if (this.editor) {
            this.editor.setMode(isDisabled ? 'readonly' : 'design');
        }
        else if (isDisabled) {
            this.init = Object.assign(Object.assign({}, this.init), { readonly: true });
        }
    }
    ngAfterViewInit() {
        this.id = this.id || uuid('tiny-react');
        this.inline = typeof this.inline !== 'undefined' ? this.inline : this.init && this.init.inline;
        this.createElement();
        if (getTinymce() !== null) {
            this.initialise();
        }
        else if (this.element) {
            const doc = this.element.ownerDocument;
            let url = '';
            if (this.hostUrl) {
                url = this.hostUrl;
            }
            else {
                const channel = this.cloudChannel || 'stable';
                const apiKey = this.apiKey || '';
                url = `https://cloud.tinymce.com/${channel}/tinymce.min.js?apiKey=${apiKey}`;
            }
            load(scriptState, doc, url, this.initialise);
        }
    }
    ngOnDestroy() {
        if (getTinymce() !== null) {
            getTinymce().remove(this.editor);
        }
    }
    createElement() {
        const tagName = typeof this.tagName === 'string' ? this.tagName : 'div';
        this.element = document.createElement(this.inline ? tagName : 'textarea');
        if (this.element) {
            this.element.id = this.id;
            if (isTextarea(this.element)) {
                this.element.style.visibility = 'hidden';
            }
            this.elementRef.nativeElement.appendChild(this.element);
        }
    }
    initialise() {
        const finalInit = Object.assign(Object.assign({}, this.init), { selector: `#${this.id}`, inline: this.inline, plugins: mergePlugins(this.init && this.init.plugins, this.plugins), toolbar: this.toolbar || (this.init && this.init.toolbar), branding: false, setup: (editor) => {
                this.editor = editor;
                editor.on('init', (e) => {
                    this.initEditor(e, editor);
                });
                if (this.init && typeof this.init.setup === 'function') {
                    this.init.setup(editor);
                }
            } });
        if (isTextarea(this.element)) {
            this.element.style.visibility = '';
        }
        this.ngZone.runOutsideAngular(() => {
            getTinymce().init(finalInit);
        });
    }
    initEditor(initEvent, editor) {
        if (typeof this.initialValue === 'string') {
            this.ngZone.run(() => editor.setContent(this.initialValue));
        }
        editor.once('blur', () => this.ngZone.run(() => this.onTouchedCallback()));
        editor.on('focus', () => this.ngZone.run(() => {
            console.log("Has Focus");
            this.changeInEditor = true;
        }));
        editor.on('blur', () => this.ngZone.run(() => {
            console.log("Lost Focus");
            this.changeInEditor = false;
        }));
        editor.on('setcontent', ({ content, format }) => format === 'html' && content && this.ngZone.run(() => this.onChangeCallback(content)));
        editor.on('change keyup undo redo', () => this.ngZone.run(() => {
            console.log("Change Event");
            this.onChangeCallback(editor.getContent());
            this.onEditorContentChange.emit(editor);
        }));
        bindHandlers(this, editor, initEvent);
    }
};
NgTinyMceEditorComponent.ɵfac = function NgTinyMceEditorComponent_Factory(t) { return new (t || NgTinyMceEditorComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
NgTinyMceEditorComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NgTinyMceEditorComponent, selectors: [["ngTinyMceEditor"]], inputs: { id: "id", toolbar: "toolbar", initialValue: "initialValue", value: "value", init: "init", inline: "inline", cloudChannel: "cloudChannel", apiKey: "apiKey", hostUrl: "hostUrl", tagName: "tagName", plugins: "plugins" }, features: [ɵngcc0.ɵɵProvidersFeature([EDITOR_COMPONENT_VALUE_ACCESSOR]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, template: function NgTinyMceEditorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NgTinyMceEditorComponent_ng_template_0_Template, 0, 0, "ng-template");
    } }, styles: ["[_nghost-%COMP%] { display: block; }"] });
NgTinyMceEditorComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone }
];
__decorate([
    Input(),
    __metadata("design:type", String)
], NgTinyMceEditorComponent.prototype, "cloudChannel", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NgTinyMceEditorComponent.prototype, "apiKey", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NgTinyMceEditorComponent.prototype, "hostUrl", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], NgTinyMceEditorComponent.prototype, "init", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], NgTinyMceEditorComponent.prototype, "id", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NgTinyMceEditorComponent.prototype, "initialValue", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], NgTinyMceEditorComponent.prototype, "inline", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NgTinyMceEditorComponent.prototype, "tagName", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NgTinyMceEditorComponent.prototype, "plugins", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], NgTinyMceEditorComponent.prototype, "toolbar", void 0);
__decorate([
    Input("value"),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], NgTinyMceEditorComponent.prototype, "value", null);
NgTinyMceEditorComponent = __decorate([ __metadata("design:paramtypes", [ElementRef, NgZone])
], NgTinyMceEditorComponent);

let jNetworkTinyMceEditorModule = class jNetworkTinyMceEditorModule {
};
jNetworkTinyMceEditorModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: jNetworkTinyMceEditorModule });
jNetworkTinyMceEditorModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function jNetworkTinyMceEditorModule_Factory(t) { return new (t || jNetworkTinyMceEditorModule)(); }, imports: [[]] });

/**
 * Basis Komponente für NgTreeView
 */
class NgTreeViewCommon {
    constructor() {
        /**
         * Das Property enthielt array of nodes. Default value: empty array [].
         */
        this.nodes = [];
        /**
         * Das Property enthielt node attribute: 'isCollapsed'. Es wird benutzt beim rendering. Für Expand/Collapsed Sicht des Node(Wert)
         */
        this.collapseAttr = 'isCollapsed';
        /**
         * Das Property enthielt node attribute: 'isSelected'. Es wird benutzt beim Vorbereitung des Data des TreeView
         */
        this.selectAttr = 'isSelected';
        /**
        * Das Property enthielt node attribute: 'isIndeterminate'. Es wird benutzt beim Vorbereitung des Data des TreeView
        */
        this.inDeterminateAttr = 'isIndeterminate';
        /**
         * Providen data for tree.
         */
        this._data = [];
        /**
         * Input property für den Namen des TreeView. Type string. Default value: ""
         */
        this._name = "";
        /**
         * A flag indicating data is flatten in array and prepare is required.(Default
         * is false).
         */
        this.prepareData = false;
        /**
         * Attribute for Text in Tree
         */
        this.textAttr = 'data';
        /**
         * Name of ID property in input data.
         */
        this.idAttr = 'id';
        /**
         * Name of parent property in input data.
         */
        this.parentAttr = 'PARENT_ID';
        /**
         * Name of children list property in input data.
         */
        this.childrenAttr = 'children';
        /**
         * Output Emitter. Emit das ID des selected Node.
         */
        this.selectedIdEmitter = new EventEmitter();
        /**
         * Output Emitter. Emit das TextAttr des selected Node.
         */
        this.selectedTextEmitter = new EventEmitter();
        /**
         * Output Emitter. Emit wenn ein Node selektiert wird.
         */
        this.selectedItemEmitter = new EventEmitter();
    }
    /**
     * Getter für Data des TreeView
     */
    get data() {
        return this._data;
    }
    /**
     * Input Property für Data des TreeView
     */
    set data(value) {
        this._data = value;
        this.nodes = value;
        // this.nodes.forEach(node => node["typeId"] = "13")    
        this.LoadTree();
        if (this._collapseAll !== undefined) {
            this.collapseAllNode(this._collapseAll);
        }
    }
    /**
     * Die Directive erhält die actions für das TreeView
     */
    set treeviewTemplate(v) {
        this.templateTree = v;
    }
    /**
     * Getter für das TreeView Template
     */
    get treeviewTemplate() {
        return this.templateTree;
    }
    /**
     * Setter property. Deffiniert das FileIcon für das TreeView
     */
    set treefileicon(v) {
        this.fileicontemplate = v;
    }
    /**
     * Getter property. Ergibt das FileIcon für das TreeView
     */
    get treefileicon() {
        return this.fileicontemplate;
    }
    // @Input("titleAction") _titleAction: string
    /**
     * Collapse or expand all parent nodes.
     */
    set collapseAll(value) {
        this._collapseAll = value;
        if (this.nodes && this.nodes.length && this.nodes.length > 0) {
            this.collapseAllNode(this._collapseAll);
        }
        // this._recursiveEdit(
        //   this.nodes, this.childrenAttr, this.collapseAttr, this._collapseAll);
        // this.cd.detectChanges();
    }
    /**
     * Getter für das collapse property. Ergibt boolean Wert, ob die Items collapsed/expand sind.
     */
    get collapseAll() {
        return this._collapseAll;
    }
    /**
     * Select or deselect all nodes.
     */
    set selectAll(value) {
        this._selectAll = value;
        this._recursiveEdit(this.nodes, this.childrenAttr, this.selectAttr, value);
        this._recursiveEdit(this.nodes, this.childrenAttr, this.inDeterminateAttr, false);
    }
    /**
     * Input property - setter. Deffiniert das ID des selektierten Item(node)
     */
    set selectedId(v) {
        this.selectedNode = this.findNode(this.nodes, v, this.idAttr);
        // if (this.selectedNode) {
        //   this.selectedIdEmitter.emit(this.selectedNode[this.idAttr]);
        //   this.selectedTextEmitter.emit(this.selectedNode[this.textAttr]);
        // }
    }
    /**
     * Getter. Ergibt das ID des selektierten Item(node)
     */
    get selectedId() {
        return this.selectedNode ? this.selectedNode[this.idAttr] : null;
    }
    /**
     * Setter für das selektierte Wert(node). Wenn aufgerufen das ID und TextAttr des selected Node wird emitted
     */
    set selectedNode(v) {
        this._selectedNode = v;
        if (this._selectedNode) {
            this.selectedIdEmitter.emit(this.selectedId);
            this.selectedTextEmitter.emit(v[this.textAttr]);
        }
    }
    /**
     * Getter für das selektierte Wert(node). Ergibt das selektierte Wert(node).
     */
    get selectedNode() {
        return this._selectedNode;
    }
    /**
     * A lifecycle hook that is called after Angular has initialized all data-bound properties of a directive.
     * Define an ngOnInit() method to handle any additional initialization tasks.
     */
    ngOnInit() {
        this.collapseAllNode(this._collapseAll);
        if (this.selectedId)
            this.openSelectedNode(this.nodes);
    }
    /**
     * Funktion setzt alle parent items recusiv zum selected node
     * auf collapsed = false
     */
    openSelectedNode(data) {
        let result = false;
        for (let i = 0; i < data.length; i++) {
            if (data[i][this.childrenAttr].length && data[i][this.idAttr] != this.selectedId)
                result = this.openSelectedNode(data[i][this.childrenAttr]);
            if (result || data[i][this.idAttr] == this.selectedId) {
                data[i][this.collapseAttr] = false;
                return true;
            }
        }
        return false;
    }
    /**
     * Die Methode vorbereitet die Daten für das TreeView. Die Funktion sollte geändert werden abhängig von dem kommenden Daten (wenn array)
     */
    LoadTree() {
        //if the tree structure require array the function below should be changed
        const cloned = this._data.map(x => Object.assign({}, x));
        // If data is flat, prepare data with recursive function.
        this.nodes = this.prepareData ? this._getPreparedData(cloned) : this._data;
    }
    /**
     * Die Methode collapse/expand den selectierten Node
     */
    onCollapseClick(node) {
        if (node[this.childrenAttr].length) {
            node[this.collapseAttr] = !node[this.collapseAttr];
        }
    }
    /**
     * Die Methode set den selektierten Node und emit es.
     */
    onClick(node) {
        this.selectedNode = node;
        this.selectedItemEmitter.emit(this.selectedNode);
        // this.cd.detectChanges();
    }
    /**
     * Die Methode wird ein event mit Meldung zu Parent emit-en.
     */
    sendMsgToParent(msg) {
        this.selectedItemEmitter.emit(msg);
    }
    /**
     * Die Methode wird alle Nodes collapse
     */
    collapseAllNode(command) {
        this.nodes.forEach(node => {
            if (node[this.childrenAttr].length) {
                collapseAllHIdden(node, this.collapseAttr, command, this.childrenAttr);
            }
        });
        function collapseAllHIdden(node, collapseAttr, command, childrenAttr) {
            node[collapseAttr] = command;
            node.children.forEach((child) => {
                if (child[childrenAttr].length) {
                    collapseAllHIdden(child, collapseAttr, command, childrenAttr);
                }
            });
        }
    }
    /**
     * Funktion gibt node aus der liste zurück, welches das Value auf dem gewünschten Attribut hat
     * Wenn node nicht gefunden wird, wird null zurück gegeben
     * @param data Liste der nodes
     * @param searchValue Das gesuchte value
     * @param attr Der namen des Attributs auf dem das value gesucht wird
     */
    findNode(data, searchValue, attr) {
        let result = null;
        for (let i = 0; i < data.length; i++) {
            if (data[i][attr] == searchValue)
                result = data[i];
            else {
                if (data[i][this.childrenAttr].length) {
                    let recursiveResult = this.findNode(data[i][this.childrenAttr], searchValue, attr);
                    if (recursiveResult)
                        result = recursiveResult;
                }
            }
        }
        return result;
    }
    /**
     * Die Methode editiert (recursive) alle eingegebene Nodes abhängig von gegebenen Attibute und Value Kriterien.
     */
    _recursiveEdit(list, childrenAttr, attr, value) {
        if (Array.isArray(list)) {
            for (let i = 0, len = list.length; i < len; i++) {
                list[i][attr] = value;
                if (list[i][childrenAttr].length) {
                    this._recursiveEdit(list[i][childrenAttr], childrenAttr, attr, value);
                }
            }
        }
    }
    /**
     * Die Methode erstellt eine standarte Sicht-Liste von Nodes
     */
    _getPreparedData(list) {
        const tree = [], lookup = {};
        for (let i = 0, len = list.length; i < len; i++) {
            lookup[list[i][this.idAttr]] = list[i];
            list[i][this.childrenAttr] = [];
            list[i][this.collapseAttr] = true;
            list[i][this.selectAttr] = false;
            list[i][this.inDeterminateAttr] = false;
        }
        for (let i = 0, len = list.length; i < len; i++) {
            if (list[i][this.parentAttr]) {
                lookup[list[i][this.parentAttr]][this.childrenAttr].push(list[i]);
            }
            else {
                tree.push(list[i]);
            }
        }
        return tree;
    }
}
NgTreeViewCommon.ɵfac = function NgTreeViewCommon_Factory(t) { return new (t || NgTreeViewCommon)(); };
NgTreeViewCommon.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NgTreeViewCommon, contentQueries: function NgTreeViewCommon_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵstaticContentQuery(dirIndex, _c1, true);
        ɵngcc0.ɵɵstaticContentQuery(dirIndex, _c2, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.treeviewTemplate = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.treefileicon = _t.first);
    } }, inputs: { _name: ["name", "_name"], prepareData: "prepareData", textAttr: "textAttr", idAttr: "idAttr", parentAttr: "parentAttr", childrenAttr: "childrenAttr", data: "data", templateTree: ["template", "templateTree"], fileicontemplate: "fileicontemplate", collapseAll: "collapseAll", selectAll: "selectAll", selectedId: "selectedId", _title: ["title", "_title"] }, outputs: { selectedIdEmitter: "selectedIdChange", selectedTextEmitter: "selectedTextChanged", selectedItemEmitter: "onselecteditem" } });
__decorate([
    Input('data'),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], NgTreeViewCommon.prototype, "data", null);
__decorate([
    Input("template"),
    __metadata("design:type", TemplateRef)
], NgTreeViewCommon.prototype, "templateTree", void 0);
__decorate([
    ContentChild("actions", { static: true }),
    __metadata("design:type", TemplateRef),
    __metadata("design:paramtypes", [TemplateRef])
], NgTreeViewCommon.prototype, "treeviewTemplate", null);
__decorate([
    Input('fileicontemplate'),
    __metadata("design:type", TemplateRef)
], NgTreeViewCommon.prototype, "fileicontemplate", void 0);
__decorate([
    ContentChild("treefileicon", { static: true }),
    __metadata("design:type", TemplateRef),
    __metadata("design:paramtypes", [TemplateRef])
], NgTreeViewCommon.prototype, "treefileicon", null);
__decorate([
    Input("name"),
    __metadata("design:type", String)
], NgTreeViewCommon.prototype, "_name", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], NgTreeViewCommon.prototype, "prepareData", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], NgTreeViewCommon.prototype, "textAttr", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], NgTreeViewCommon.prototype, "idAttr", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], NgTreeViewCommon.prototype, "parentAttr", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], NgTreeViewCommon.prototype, "childrenAttr", void 0);
__decorate([
    Input("title"),
    __metadata("design:type", Object)
], NgTreeViewCommon.prototype, "_title", void 0);
__decorate([
    Input('collapseAll'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], NgTreeViewCommon.prototype, "collapseAll", null);
__decorate([
    Input('selectAll'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], NgTreeViewCommon.prototype, "selectAll", null);
__decorate([
    Input("selectedId"),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], NgTreeViewCommon.prototype, "selectedId", null);
__decorate([
    Output("selectedIdChange"),
    __metadata("design:type", EventEmitter)
], NgTreeViewCommon.prototype, "selectedIdEmitter", void 0);
__decorate([
    Output("selectedTextChanged"),
    __metadata("design:type", EventEmitter)
], NgTreeViewCommon.prototype, "selectedTextEmitter", void 0);
__decorate([
    Output("onselecteditem"),
    __metadata("design:type", EventEmitter)
], NgTreeViewCommon.prototype, "selectedItemEmitter", void 0);

/**
 * Komponente für NgTreeViewChildCommon. Extends NgTreeViewCommon
 */
class NgTreeViewChildCommon extends NgTreeViewCommon {
    /**
     * A lifecycle hook that is called after Angular has initialized all data-bound properties of a directive.
     * Define an ngOnInit() method to handle any additional initialization tasks.
     */
    ngOnInit() {
        this.collapseAllNode(this.collapseAll);
    }
}
NgTreeViewChildCommon.ɵfac = function NgTreeViewChildCommon_Factory(t) { return ɵNgTreeViewChildCommon_BaseFactory(t || NgTreeViewChildCommon); };
NgTreeViewChildCommon.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NgTreeViewChildCommon, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });

/**
 *Basis Komponente für NgTreeItemAction
 */
class NgTreeItemActionCommon {
    /**
     * Konstruktor
     * @param el Element Referenz
     */
    constructor(el) {
        this.el = el;
        /**
        * Event wenn auf das Icon geclickt wird
        */
        this.clickaction = new EventEmitter();
    }
    /**
     * lifecycle OnInit hook. Wird aufgeruren sobald das Komponent initialisiert ist.
     */
    ngOnInit() {
        let rootElement = this.el.nativeElement;
        let parentElement = rootElement.parentElement;
        while (rootElement.firstChild) {
            parentElement.insertBefore(rootElement.firstChild, rootElement);
        }
        parentElement.removeChild(rootElement);
    }
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
                return initialClass;
        }
    }
    /**
    * Die Methode wird das cklickaction Emitter aktivieren.
    */
    iconaction() {
        this.clickaction.emit();
    }
}
NgTreeItemActionCommon.ɵfac = function NgTreeItemActionCommon_Factory(t) { ɵngcc0.ɵɵinvalidFactory(); };
NgTreeItemActionCommon.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NgTreeItemActionCommon, inputs: { node: ["item", "node"], _title: ["title", "_title"], iconstyle: "iconstyle" }, outputs: { clickaction: "onclick" } });
__decorate([
    Input("item"),
    __metadata("design:type", Object)
], NgTreeItemActionCommon.prototype, "node", void 0);
__decorate([
    Input("title"),
    __metadata("design:type", String)
], NgTreeItemActionCommon.prototype, "_title", void 0);
__decorate([
    Input("iconstyle"),
    __metadata("design:type", String)
], NgTreeItemActionCommon.prototype, "iconstyle", void 0);
__decorate([
    Output("onclick"),
    __metadata("design:type", EventEmitter)
], NgTreeItemActionCommon.prototype, "clickaction", void 0);

/**
 * Enum für Tooltip Positionen
 */
var TooltipPosition;
(function (TooltipPosition) {
    TooltipPosition[TooltipPosition["none"] = 0] = "none";
    // tslint:disable-next-line:no-bitwise
    TooltipPosition[TooltipPosition["top"] = 1] = "top";
    // tslint:disable-next-line:no-bitwise
    TooltipPosition[TooltipPosition["right"] = 2] = "right";
    // tslint:disable-next-line:no-bitwise
    TooltipPosition[TooltipPosition["bottom"] = 4] = "bottom";
    // tslint:disable-next-line:no-bitwise
    TooltipPosition[TooltipPosition["left"] = 8] = "left";
})(TooltipPosition || (TooltipPosition = {}));

/**
 * Tooltip Component
 *
 * Benötigt im HTML Markup folgende Identifier
 * - container: Container für ng-content in welchem das Element angezeigt wird, wo der Tooltip angehängt wird.
 * - tooltip: Container für Tooltip
 *
 * Tooltip muss in 2 Schritten angezeigt werden. In einem ersten Schritt wird der Tooltip Markup erzeugt mit (ngIf). In einem 2. Schritt
 * kann der Tooltip dann über die CSS visibility angezeigt werden. Wird dies nicht so gemacht, kann es bei gewissen Browsern zu einem Flacker Effekt führen.
 *
 */
class NgTooltipCommon {
    /**
     * Konstruktor
     * @param ref Element Referenz
     */
    constructor(cdRef, ref) {
        this.cdRef = cdRef;
        this.ref = ref;
        /**
         * Property für Enum in Angular HTML Template
         */
        this.TooltipPosition = TooltipPosition;
        /**
         * Definiert ob der Tooltip sichtbar ist
         */
        this._isTooltipVisible = false;
        /**
         * Position des Tooltips oben
         */
        this.TopPos = 0;
        /**
         * Position des Tooltips links
         */
        this.LeftPos = 0;
        /**
         * Position des Tooltips. Werte: left|top|right|bottom|auto
         *
         * Wert 'auto' kann mit einem anderen Wert kombiniert werden.
         */
        this._position = 'right|auto';
        /**
         * Definiert ob der Tooltip sichtbar sein soll
         */
        this.IsTooltipContentVisible = false;
        /**
         * Methode wenn Content geändert hat und Proporties im UI neu gesetzt werden müssen.
         */
        this.onContentChange = () => {
            setTimeout(() => {
                this.getLeftPosition();
                this.getTopPosition();
            });
        };
    }
    /**
     * Setter für Inline Mode für Tooltip
     */
    set inlinemode(value) {
        this._inlinemode = convertToBoolean$1(value);
    }
    /**
     * Getter für Inline Mode für Tooltip
     */
    get inlinemode() {
        return this._inlinemode;
    }
    /**
     * Setter für Name des Containers für den Tooltip. Wird benötigt, da Tooltip via NGIF ausgeblendet werden kann.
     */
    set tooltip(content) {
        if (content !== undefined) {
            document.body.appendChild(content.nativeElement);
        }
        this.tooltipcontainer = content;
        this.onContentChange();
        this.cdRef.detectChanges();
    }
    /**
     * Ervent wenn das Control initialisert wird
     */
    ngOnInit() {
        // Register Event Listener
        window.addEventListener('scroll', this.onContentChange, true);
        window.addEventListener('resize', this.onContentChange, true);
        if (this.tooltipcontainer !== undefined) {
            document.body.appendChild(this.tooltipcontainer.nativeElement);
        }
    }
    /**
     * Event wenn das Control zerstört wird.
     */
    ngOnDestroy() {
        // Unregister Event Listener
        window.removeEventListener('scroll', this.onContentChange, true);
        window.removeEventListener('resize', this.onContentChange, true);
        if (this.tooltipcontainer !== undefined) {
            document.body.removeChild(this.tooltipcontainer.nativeElement);
        }
    }
    /**
     * Berechnet die Position des Tooltips von Oben
     */
    getTopPosition() {
        if (this.content !== null && this.content !== undefined) {
            const item = this.content.nativeElement;
            if (item.children.length >= 1) {
                const childItem = item.firstElementChild;
                const contentPosition = childItem.getBoundingClientRect();
                switch (this.GetTooltipPosition()) {
                    case TooltipPosition.top:
                        this.TopPos = contentPosition.top - this.getToolTipHeight();
                        return contentPosition.top - this.getToolTipHeight();
                    case TooltipPosition.right:
                        this.TopPos = contentPosition.top + (contentPosition.height / 2) - (this.getToolTipHeight() / 2);
                        return contentPosition.top + (contentPosition.height / 2) - (this.getToolTipHeight() / 2);
                    case TooltipPosition.bottom:
                        this.TopPos = contentPosition.top + contentPosition.height;
                        return contentPosition.top + contentPosition.height;
                    case TooltipPosition.left:
                        this.TopPos = contentPosition.top + (contentPosition.height / 2) - (this.getToolTipHeight() / 2);
                        return contentPosition.top + (contentPosition.height / 2) - (this.getToolTipHeight() / 2);
                }
                return childItem.clientTop + childItem.offsetTop - ((this.getToolTipHeight() / 2) - (childItem.clientHeight / 2));
            }
            else {
                return this.content.nativeElement.offsetTop;
            }
        }
        else {
            return this.ref.nativeElement.offsetTop;
        }
    }
    /**
     * Berechnet die Position des Tooltips von Links
     */
    getLeftPosition() {
        if (this.content !== null && this.content !== undefined) {
            const item = this.content.nativeElement;
            if (item.children.length >= 1) {
                const childItem = item.firstElementChild;
                const contentPosition = childItem.getBoundingClientRect();
                switch (this.GetTooltipPosition()) {
                    case TooltipPosition.top:
                        this.LeftPos = contentPosition.left + (contentPosition.width / 2) - (this.getToolTipWidth() / 2);
                        return contentPosition.left + (contentPosition.width / 2) - (this.getToolTipWidth() / 2);
                    case TooltipPosition.right:
                        this.LeftPos = contentPosition.left + contentPosition.width;
                        return contentPosition.left + contentPosition.width;
                    case TooltipPosition.bottom:
                        this.LeftPos = contentPosition.left + (childItem.clientWidth / 2) - (this.getToolTipWidth() / 2);
                        return contentPosition.left + (childItem.clientWidth / 2) - (this.getToolTipWidth() / 2);
                    case TooltipPosition.left:
                        this.LeftPos = contentPosition.left - this.getToolTipWidth();
                        return contentPosition.left - this.getToolTipWidth();
                }
                return this.content.nativeElement.offsetTop;
            }
            else {
                return this.content.nativeElement.offsetTop;
            }
        }
        else {
            return this.ref.nativeElement.offsetLeft;
        }
    }
    /**
     * Berechnet die Höhe des Tooltips
     */
    getToolTipHeight() {
        if (this.tooltipcontainer) {
            return this.tooltipcontainer.nativeElement.clientHeight;
        }
        else {
            return 0;
        }
    }
    /**
     * Berechnet die Breite die Tooltips
     */
    getToolTipWidth() {
        if (this.tooltipcontainer) {
            return this.tooltipcontainer.nativeElement.clientWidth;
        }
        else {
            return 0;
        }
    }
    /**
     * Definiert ob der Tooltip im Markup vorhanden ist
     */
    IsTooltipVisible() {
        return this._isTooltipVisible;
    }
    /**
     * Tooltip anzeigen
     */
    ShowTooltip() {
        this._isTooltipVisible = true;
        setTimeout(() => {
            this.getLeftPosition();
            this.getTopPosition();
            this.IsTooltipContentVisible = true;
        });
    }
    /**
     * Tooltip ausblenden
     */
    HideTooltip() {
        this._isTooltipVisible = false;
        this.IsTooltipContentVisible = false;
    }
    /**
     * Gibt die Position des Tooltips zurück
     */
    GetTooltipPosition() {
        const validPositions = this.ValidatePositions();
        // tslint:disable-next-line:no-bitwise
        if (this.HasPosition(TooltipPosition.right) && (validPositions & TooltipPosition.right)) {
            return TooltipPosition.right;
        }
        // tslint:disable-next-line:no-bitwise
        if (this.HasPosition(TooltipPosition.top) && (validPositions & TooltipPosition.top)) {
            return TooltipPosition.top;
        }
        // tslint:disable-next-line:no-bitwise
        if (this.HasPosition(TooltipPosition.left) && (validPositions & TooltipPosition.left)) {
            return TooltipPosition.left;
        }
        // tslint:disable-next-line:no-bitwise
        if (this.HasPosition(TooltipPosition.bottom) && (validPositions & TooltipPosition.bottom)) {
            return TooltipPosition.bottom;
        }
        // Get Auto Position or Default
        if (this.IsAutoPosition()) {
            // tslint:disable-next-line:no-bitwise
            if (validPositions & TooltipPosition.right) {
                return TooltipPosition.right;
            }
            // tslint:disable-next-line:no-bitwise
            if (validPositions & TooltipPosition.top) {
                return TooltipPosition.top;
            }
            // tslint:disable-next-line:no-bitwise
            if (validPositions & TooltipPosition.left) {
                return TooltipPosition.left;
            }
            // tslint:disable-next-line:no-bitwise
            if (validPositions & TooltipPosition.bottom) {
                return TooltipPosition.bottom;
            }
            return TooltipPosition.right;
        }
        else {
            return this.GetPosition();
        }
    }
    /**
     * Definiert ob AutoPosition aktiv ist
     */
    IsAutoPosition() {
        const positions = this._position.split('|');
        return positions.indexOf('auto') >= 0;
    }
    /**
     * Gibt die definierte Position für den Tooltip zurück
     */
    GetPosition() {
        const positions = this._position.split('|');
        if (this.HasPosition(TooltipPosition.left)) {
            return TooltipPosition.left;
        }
        if (this.HasPosition(TooltipPosition.top)) {
            return TooltipPosition.top;
        }
        if (this.HasPosition(TooltipPosition.right)) {
            return TooltipPosition.right;
        }
        if (this.HasPosition(TooltipPosition.bottom)) {
            return TooltipPosition.bottom;
        }
        // Default Position if empty
        return TooltipPosition.right;
    }
    /**
     * Gibt zurück, ob die Position konfiguriert wurde
     *
     * @param position Position auf welche geprüft wird
     */
    HasPosition(position) {
        const positions = this._position.split('|');
        if (position === TooltipPosition.right && positions.indexOf('right') >= 0) {
            return true;
        }
        if (position === TooltipPosition.top && positions.indexOf('top') >= 0) {
            return true;
        }
        if (position === TooltipPosition.left && positions.indexOf('left') >= 0) {
            return true;
        }
        if (position === TooltipPosition.bottom && positions.indexOf('bottom') >= 0) {
            return true;
        }
        return false;
    }
    /**
     * Prüft ob die Position gültig ist, resp. der Tooltip auf die Position platz hat
     */
    ValidatePositions() {
        // Check if Container is false
        if (this.tooltipcontainer === undefined) {
            return TooltipPosition.right;
        }
        let allowedPositions = TooltipPosition.none;
        const basePosition = this.content.nativeElement.firstElementChild.getBoundingClientRect();
        const tooltipRect = this.tooltipcontainer.nativeElement.getBoundingClientRect();
        const leftPosOk = basePosition.left - tooltipRect.width > 0;
        const rightPosOk = basePosition.right + tooltipRect.width < window.innerWidth;
        const topPosOk = basePosition.top - tooltipRect.height > 0;
        const bottomPosOk = basePosition.bottom + tooltipRect.height < window.innerHeight;
        const leftHalfPosOk = basePosition.left - (tooltipRect.width / 2) > 0;
        const rightHalfPosOk = basePosition.right + (tooltipRect.width / 2) < window.innerWidth;
        const topHalfPosOk = basePosition.top - (tooltipRect.height / 2) > 0;
        const bottomHalfPosOk = basePosition.bottom + (tooltipRect.height / 2) < window.innerHeight;
        if (leftPosOk && topHalfPosOk && bottomHalfPosOk) {
            // tslint:disable-next-line:no-bitwise
            allowedPositions = allowedPositions | TooltipPosition.left;
        }
        if (rightPosOk && topHalfPosOk && bottomHalfPosOk) {
            // tslint:disable-next-line:no-bitwise
            allowedPositions = allowedPositions | TooltipPosition.right;
        }
        if (topPosOk && leftHalfPosOk && rightHalfPosOk) {
            // tslint:disable-next-line:no-bitwise
            allowedPositions = allowedPositions | TooltipPosition.top;
        }
        if (bottomPosOk && leftHalfPosOk && rightHalfPosOk) {
            // tslint:disable-next-line:no-bitwise
            allowedPositions = allowedPositions | TooltipPosition.bottom;
        }
        return allowedPositions;
    }
}
NgTooltipCommon.ɵfac = function NgTooltipCommon_Factory(t) { ɵngcc0.ɵɵinvalidFactory(); };
NgTooltipCommon.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NgTooltipCommon, viewQuery: function NgTooltipCommon_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c3, true);
        ɵngcc0.ɵɵstaticViewQuery(_c4, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tooltip = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.content = _t.first);
    } }, inputs: { _position: ["position", "_position"], inlinemode: "inlinemode", _tooltiptext: ["tooltiptext", "_tooltiptext"] } });
__decorate([
    Input('position'),
    __metadata("design:type", String)
], NgTooltipCommon.prototype, "_position", void 0);
__decorate([
    Input('tooltiptext'),
    __metadata("design:type", String)
], NgTooltipCommon.prototype, "_tooltiptext", void 0);
__decorate([
    Input('inlinemode'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], NgTooltipCommon.prototype, "inlinemode", null);
__decorate([
    ViewChild('container', { static: true }),
    __metadata("design:type", ElementRef)
], NgTooltipCommon.prototype, "content", void 0);
__decorate([
    ViewChild('tooltip', { static: true }),
    __metadata("design:type", ElementRef),
    __metadata("design:paramtypes", [ElementRef])
], NgTooltipCommon.prototype, "tooltip", null);

class NgUploadFile {
    constructor(ufile) {
        this.uploadId = ufile.uploadId;
        this.name = ufile.name;
        this.progress = ufile.progress;
        this.status = ufile.status;
        this.documentid = null;
    }
}
/**
 * Base Klasse für Uploader Control
 */
class NgUploadBase extends NgBaseModelControl {
    /**
     * Constructor
     */
    constructor(parent, injector, renderer, ngZone) {
        super(parent, injector);
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.options = {};
        this._allowedtypes = '*';
        this._autoupload = false;
        this._enablepause = true;
        this._endpoint = null;
        //#region Properties
        /**
         * Resource Key für Validation Message Required bei Control
         */
        this._validationMessageRequired = 'VALIDATION_ERROR_REQUIRED';
        /**
         * Resource Key für Validation Message Required in Validation Summary
         */
        this._validationMessageRequiredSummary = 'VALIDATION_ERROR_SUMMARY_REQUIRED';
        this.maxfilesize = 0;
        // Definiert das Control als Required
        this._isrequired = false;
        this.onfileerror = new EventEmitter();
        /**
         * Handling von neuen Files im Input Control
         */
        this.fileListener = () => {
            if (this.uploadInput.nativeElement.files) {
                this.uploadService.handleFileList(this.uploadInput.nativeElement.files);
            }
        };
        this.uploads = [];
        this.options.allowedTypes = '*';
        this.options.concurrency = 1;
        this.options.token = 'sometoken';
        this.options.autoUpload = this._autoupload;
        this.options.withCredentials = true;
        this.options.chunkSize = 1024 * 16 * 8;
        this.options.headers = (f) => ({
            'Content-Disposition': `filename=${encodeURI(f.name)}`
        });
        // Init new Service Instance
        this.uploadService = new UploadxService(this.ngZone);
        this.uploadService.init(this.options);
        // Subscripe Event for State changes
        this.uploadService.events.subscribe((ufile) => this.onUpload(ufile));
    }
    set allowedtypes(types) {
        this._allowedtypes = types;
        this.setAllowedTypes(types);
    }
    get allowedtypes() {
        return this._allowedtypes;
    }
    set autoupload(v) {
        this._autoupload = v;
        this.options.autoUpload = v;
        this.uploadService.connect(this.options);
    }
    get autoupload() {
        return this._autoupload;
    }
    set enablepause(v) {
        this._enablepause = v;
    }
    get enablepause() {
        return this._enablepause;
    }
    //#endregion
    /**
     * Definiert den Registration Endpoint für Uploads.
     */
    set endpoint(v) {
        this._endpoint = v;
        this.setEndpoint(v);
    }
    get endpoint() {
        return this._endpoint;
    }
    /**
     * Initialisiert das Control
     */
    ngOnInit() {
        super.ngOnInit();
        // Init Event Listener for Input File Control and Handling Files
        this.listenerFn = this.renderer.listen(this.uploadInput.nativeElement, 'change', this.fileListener);
        this.setAllowedTypes(this._allowedtypes);
        this.setEndpoint(this._endpoint);
        if (this._endpoint === null) {
            throw new Error('endpoint is not defined!');
        }
        this.uploadService.connect(this.options);
    }
    /**
     * Destroy des Controls
     */
    ngOnDestroy() {
        if (this.listenerFn) {
            this.listenerFn();
        }
    }
    //#region All File Events
    /**
     * Cancel all Uploaded files
     */
    cancelAll() {
        if (this.HasQueueItem() === true) {
            this.uploadService.control({ action: 'cancelAll' });
        }
    }
    /**
     * Upload all queued Files
     */
    uploadAll() {
        if (this.IsStateToUpload() === true) {
            this.uploadService.control({ action: 'uploadAll' });
        }
    }
    /**
     * Pause all Uploads
     */
    pauseAll() {
        if (this.IsUploading() === true) {
            this.uploadService.control({ action: 'pauseAll' });
        }
    }
    //#endregion
    //#region Singel File Events
    /**
     * Cancel single upload
     * @param uploadId ID of File to cancel
     */
    cancel(uploadId) {
        this.uploadService.control({ action: 'cancel', uploadId: uploadId });
    }
    /**
     * Cancel Single File
     * @param uploadId ID of File to Cancel
     */
    pause(uploadId) {
        this.uploadService.control({ action: 'pause', uploadId });
    }
    /**
     * Upload Single File
     *
     * @param uploadId ID of File to Upload
     */
    upload(uploadId) {
        this.uploadService.control({ action: 'upload', uploadId });
    }
    //#endregion
    //#region UI Property Helper
    HasQueueItem() {
        return this.uploads.length > 0;
    }
    IsStateToUpload() {
        return this.uploads.filter(itm => itm.status === 'added' || itm.status === 'paused').length > 0;
    }
    IsUploading() {
        return this.uploads.filter(itm => itm.status === 'uploading').length > 0;
    }
    IsPaused() {
        return this.uploads.filter(itm => itm.status === 'paused').length > 0;
    }
    Filename() {
        if (this.uploads.length > 0) {
            return this.uploads[0].name;
        }
        else {
            return 'Keine Datei ausgewählt';
        }
    }
    HasSuccessUpload() {
        if (this.uploads.length > 0) {
            return this.uploads.filter(itm => itm.status !== 'complete').length === 0;
        }
        else {
            return false;
        }
    }
    Progress() {
        if (this.uploads.length > 0) {
            return this.uploads[0].progress;
        }
        else {
            return 0;
        }
    }
    //#endregion
    //#region Validation
    validateData(c) {
        let error = null;
        if (this._isrequired) {
            error = Validation.required(c, this._label, this._validationMessageRequired, this._validationMessageRequiredSummary);
        }
        return error;
    }
    //#endregion
    /**
     * Setzt die erlaubten Datentypen für den Upload
     *
     * @param types Erlaubte File Extensions
     */
    setAllowedTypes(types) {
        this.renderer.setAttribute(this.uploadInput.nativeElement, 'accept', types);
        this.options.allowedTypes = types;
    }
    /**
     * Setzt den Upload Endpoit
     * @param url Register URI
     */
    setEndpoint(url) {
        this.options.endpoint = url;
    }
    /**
     * Prüft ob die Dateierweiterung gültig ist
     *
     * @param filename Dateiname
     */
    isExtensionValid(filename) {
        if (this._allowedtypes === '*') {
            return true;
        }
        let isValid = false;
        const extensions = this._allowedtypes.split('|');
        extensions.forEach(itm => {
            if (filename.endsWith(itm)) {
                isValid = true;
            }
        });
        return isValid;
    }
    /**
     * Prüft ob das File nicht zu gross ist.
     *
     * @param filesize Max File Size in Bytes
     */
    isFileSizeValid(filesize) {
        if (this.maxfilesize === 0) {
            return true;
        }
        return this.maxfilesize >= filesize;
    }
    /**
     * Upload Event
     *
     * @param uploadsOutStream Upload Item
     */
    onUpload(ufile) {
        const index = this.uploads.findIndex(f => f.uploadId === ufile.uploadId);
        if (ufile.status === 'added') {
            if (this.isExtensionValid(ufile.name) && this.isFileSizeValid(ufile.size) && this.CustomAddValidation(ufile)) {
                this.uploads.push(new NgUploadFile(ufile));
            }
            else {
                this.cancel(ufile.uploadId);
                if (!this.isExtensionValid(ufile.name)) {
                    this.onfileerror.emit('INVALID_EXTENSION');
                }
                else if (!this.isFileSizeValid(ufile.size)) {
                    this.onfileerror.emit('INVALID_FILESIZE');
                }
            }
        }
        else if (ufile.status === 'cancelled') {
            if (index >= 0) {
                this.uploads.splice(index, 1);
            }
            this.SetUploadValue(null);
        }
        else if (ufile.status === 'complete') {
            this.uploads[index].progress = ufile.progress;
            this.uploads[index].status = ufile.status;
            this.SetUploadValue(ufile);
        }
        else {
            if (index >= 0) {
                this.uploads[index].progress = ufile.progress;
                this.uploads[index].status = ufile.status;
            }
        }
    }
}
NgUploadBase.ɵfac = function NgUploadBase_Factory(t) { ɵngcc0.ɵɵinvalidFactory(); };
NgUploadBase.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NgUploadBase, viewQuery: function NgUploadBase_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c5, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.uploadInput = _t.first);
    } }, inputs: { _validationMessageRequired: ["validationmessagerequired", "_validationMessageRequired"], _validationMessageRequiredSummary: ["validationmessagesummaryrequired", "_validationMessageRequiredSummary"], maxfilesize: "maxfilesize", _isrequired: ["isrequired", "_isrequired"], allowedtypes: "allowedtypes", autoupload: "autoupload", enablepause: "enablepause", endpoint: "endpoint" }, outputs: { onfileerror: "onfileerror" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
__decorate([
    Input('validationmessagerequired'),
    __metadata("design:type", String)
], NgUploadBase.prototype, "_validationMessageRequired", void 0);
__decorate([
    Input('validationmessagesummaryrequired'),
    __metadata("design:type", String)
], NgUploadBase.prototype, "_validationMessageRequiredSummary", void 0);
__decorate([
    Input('allowedtypes'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], NgUploadBase.prototype, "allowedtypes", null);
__decorate([
    Input('autoupload'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], NgUploadBase.prototype, "autoupload", null);
__decorate([
    Input('enablepause'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], NgUploadBase.prototype, "enablepause", null);
__decorate([
    Input('maxfilesize'),
    __metadata("design:type", Number)
], NgUploadBase.prototype, "maxfilesize", void 0);
__decorate([
    Input('isrequired'),
    __metadata("design:type", Boolean)
], NgUploadBase.prototype, "_isrequired", void 0);
__decorate([
    Input('endpoint'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], NgUploadBase.prototype, "endpoint", null);
__decorate([
    Output('onfileerror'),
    __metadata("design:type", Object)
], NgUploadBase.prototype, "onfileerror", void 0);
__decorate([
    ViewChild('files'),
    __metadata("design:type", ElementRef)
], NgUploadBase.prototype, "uploadInput", void 0);

/**
 * Upload Komponente für ein einzelnes File
 */
class NgUploadSingleCommon extends NgUploadBase {
    /**
    * Macht keine Validierung in diesem Control
    *
    * @param file File das hinzugefügt wurde
    */
    CustomAddValidation(file) {
        return true;
    }
    /**
     * Setzt die File ID des hochgeladen Files in das Model
     *
     * @param file ID des Files
     */
    SetUploadValue(file) {
        if (file === null) {
            super.setValue(null);
        }
        else {
            if (file.response !== undefined && file.response !== null && file.response.documentid !== null && file.response.documentid !== undefined) {
                super.setValue(file.response.documentid);
            }
            else {
                super.setValue(file.uploadId);
            }
        }
    }
}

/**
 * Upload Componente für mehrere Files
 */
class NgUploadMultipleCommon extends NgUploadBase {
    constructor() {
        super(...arguments);
        this.maxfiles = 0;
        this.minfiles = 0;
        /**
         * Resource Key für Validation Message Required bei Control
         */
        this._validationMessageMinFiles = 'VALIDATION_ERROR_FILESMIN';
        /**
         * Resource Key für Validation Message Required in Validation Summary
         */
        this._validationMessageMinFilesSummary = 'VALIDATION_ERROR_SUMMARY_FILESMIN';
    }
    /**
     * Prüft ob die max. Files in der Queue nicht überschritten werden
     *
     * @param file File das hinzugefügt wurde
     */
    CustomAddValidation(file) {
        if (this.maxfiles > 0 && this.uploads.length >= this.maxfiles) {
            this.onfileerror.emit('INVALID_MAXFILES');
            return false;
        }
        else {
            return true;
        }
    }
    /**
     * Setzt die File ID's der hochgeladen Files in das Model
     *
     * @param file ID des Files welches hochgeladen wurde.
     */
    SetUploadValue(file) {
        let documentid = null;
        if (file === null) {
            documentid = null;
        }
        else {
            if (file.response !== undefined && file.response !== null && file.response.documentid !== null && file.response.documentid !== undefined) {
                documentid = file.response.documentid;
            }
            else {
                documentid = file.uploadId;
            }
            // Document ID aktualisieren, damit Wert von Server in Model gesetzt werden kann.
            this.uploads.filter(itm => itm !== null && itm.uploadId === file.uploadId).forEach(itm => {
                itm.documentid = documentid;
            });
        }
        // List of Files
        const fileIds = [];
        // Add all Items with Uploaded State to Model
        this.uploads.filter(itm => itm.status === 'complete').forEach(itm => {
            if (itm.documentid !== null && itm.documentid !== undefined) {
                fileIds.push(itm.documentid);
            }
        });
        if (fileIds.length > 0) {
            super.setValue(fileIds);
        }
        else {
            super.setValue(null);
        }
    }
    /**
     * Gibt die Anzahl der komplett hochgeladenen Files zurück
     */
    UploadedFileCount() {
        return this.uploads.filter(itm => itm.status === 'complete').length;
    }
    /**
     * Validiert das Control
     *
     * @param c Control
     */
    validateData(c) {
        let error = super.validateData(c);
        if (error === null) {
            error = Validation.minFiles(this, this.minfiles, this._label, this._validationMessageMinFiles, this._validationMessageMinFilesSummary);
        }
        return error;
    }
}
NgUploadMultipleCommon.ɵfac = function NgUploadMultipleCommon_Factory(t) { return ɵNgUploadMultipleCommon_BaseFactory(t || NgUploadMultipleCommon); };
NgUploadMultipleCommon.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NgUploadMultipleCommon, inputs: { maxfiles: "maxfiles", minfiles: "minfiles", _validationMessageMinFiles: ["validationmessageminfiles", "_validationMessageMinFiles"], _validationMessageMinFilesSummary: ["validationmessagesummaryminfiles", "_validationMessageMinFilesSummary"] }, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
__decorate([
    Input('maxfiles'),
    __metadata("design:type", Number)
], NgUploadMultipleCommon.prototype, "maxfiles", void 0);
__decorate([
    Input('minfiles'),
    __metadata("design:type", Number)
], NgUploadMultipleCommon.prototype, "minfiles", void 0);
__decorate([
    Input('validationmessageminfiles'),
    __metadata("design:type", String)
], NgUploadMultipleCommon.prototype, "_validationMessageMinFiles", void 0);
__decorate([
    Input('validationmessagesummaryminfiles'),
    __metadata("design:type", String)
], NgUploadMultipleCommon.prototype, "_validationMessageMinFilesSummary", void 0);

/**
 * Model für Sprachen
 */
class LanguageModel {
}

/**
 * Injection Token für Language Service
 */
const LANGUAGE_SERVICE = new InjectionToken('LanguageService');
/**
 * Base Service für Localisation von Fehlermeldungen
 *
 * @example
 *
 * // Eigene Beispielimplementierung für Application
 *
 * (at)Injectable()
 * export class ControlsLanguageService extends LanguageService {
 *
 *   constructor(private http: HttpClient) {
 *     super();
 *   }
 *
 *    configUrl = 'assets/languages.json';
 *
 *    public GetLanguages(): Observable<LanguageModel[]> {
 *      return this.http.get(this.configUrl);
 *    }
 *  }
 *
 */
let LanguageService = class LanguageService {
};
LanguageService.ɵfac = function LanguageService_Factory(t) { return new (t || LanguageService)(); };
LanguageService.ɵprov = ɵɵdefineInjectable({ factory: function LanguageService_Factory() { return new LanguageService(); }, token: LanguageService, providedIn: "root" });
/**
 * Standardservice für interne Übersetzungen der Fehlermeldungen
 * */
let InternalLanguageService = class InternalLanguageService extends LanguageService {
    GetLanguages() {
        return new Observable((observer) => {
            const result = [];
            const de = new LanguageModel();
            de.IsoCode = 'de';
            de.Icon = '/icons/de.png';
            de.Text = 'Deutsch';
            const en = new LanguageModel();
            en.IsoCode = 'en';
            en.Icon = '/icons/en.png';
            en.Text = 'Englisch';
            result.push(de);
            result.push(en);
            observer.next(result);
            observer.complete();
        });
    }
};
InternalLanguageService.ɵfac = function InternalLanguageService_Factory(t) { return ɵInternalLanguageService_BaseFactory(t || InternalLanguageService); };
InternalLanguageService.ɵprov = ɵɵdefineInjectable({ factory: function InternalLanguageService_Factory() { return new InternalLanguageService(); }, token: InternalLanguageService, providedIn: "root" });

/**
 * Base Klasse für Multi Language Input Control
 */
let NgMultilanguageInputCommon = class NgMultilanguageInputCommon extends NgInputBase {
    /**
    * Konstruktor
    * Inject des Formulars
    */
    constructor(parent, injector) {
        super(parent, injector);
        /**
        * Max länge an Zeichen für Eingabefeld
        */
        this._maxlength = null;
        /**
         * Fix breite für das Control definieren.
         */
        this._controlwidth = null;
        /**
         * Aktiviert den Validator, das min. eine Sprache erfasst sein muss
         */
        this._anyrequired = false;
        /**
         * Resource Key für Validation Message Required bei Control
         */
        this._validationMessageRequired = 'VALIDATION_ERROR_MULTILANGUAGEREQUIRED';
        /**
         * Resource Key für Validation Message Required in Validation Summary
         */
        this._validationMessageRequiredSummary = 'VALIDATION_ERROR_SUMMARY_MULTILANGUAGEREQUIRED';
        /**
         * Resource Key für Validation Message Pattern bei Control
         */
        this._validationMessageRequiredAny = 'VALIDATION_ERROR_MULTILANGUAGEREQUIREDANY';
        /**
         * Resource Key für Validation Message Pattern in Validation Summary
         */
        this._validationMessageRequiredAnySummary = 'VALIDATION_ERROR_SUMMARY_MULTILANGUAGEREQUIREDANY';
        /**
         * Sprache für das Control
         */
        this.languages = [];
        /**
         * Selektierte Sprace des Controls
         */
        this.selectedLanguage = null;
        this.lngLanguageService = injector.get(LANGUAGE_SERVICE, new InternalLanguageService());
        this.lngLanguageService.GetLanguages().subscribe((result) => {
            this.languages = result;
            if (this.languages.length > 0) {
                this.selectedLanguage = this.languages[0];
                // Control Validierung ausführen, da Wert potentiell bereits gesetzt sein kann
                this.UpdateValueAndValidity();
            }
        });
    }
    /**
     * Collection der Sprachen
     */
    get Languages() {
        return this.languages;
    }
    get SelectedIcon() {
        if (this.selectedLanguage) {
            return this.selectedLanguage.Icon;
        }
        else {
            return '';
        }
    }
    get LanguageValue() {
        if (this.value) {
            const currentIsoCode = this.selectedLanguage ? this.selectedLanguage.IsoCode : null;
            // Fallback falls keine Selektierte Sprache
            if (currentIsoCode === null) {
                return '';
            }
            return this.value[currentIsoCode];
        }
        else {
            return '';
        }
    }
    SetLanguageValue(value) {
        if (this.value) {
            const currentIsoCode = this.selectedLanguage ? this.selectedLanguage.IsoCode : null;
            // Fallback falls keine Selektierte Sprache
            if (currentIsoCode === null) {
                return;
            }
            this.value[currentIsoCode] = value;
            this.propagateChange(this._value);
        }
    }
    SelectLanguage(language) {
        this.selectedLanguage = language;
    }
    IsEmpty(sprache) {
        if (this.value) {
            // Fallback falls keine Selektierte Sprache
            if (sprache === null) {
                return true;
            }
            return this.value[sprache.IsoCode] === undefined || this.value[sprache.IsoCode] === '' || this.value[sprache.IsoCode] === null;
        }
        else {
            return true;
        }
    }
    IsAnyEmpty() {
        let found = false;
        if (this.value) {
            this.languages.forEach((itm) => {
                if (itm === null) {
                    found = true;
                    return;
                }
                if (this.value[itm.IsoCode] === undefined || this.value[itm.IsoCode] === '' || this.value[itm.IsoCode] === null) {
                    found = true;
                    return;
                }
            });
        }
        return found;
    }
    /**
     * Methode validiert, ob der Wert den gegebenen Kriterien entspricht
     */
    validateData(c) {
        let error = null;
        if (error === null && c.value !== null && c.value !== undefined && c.value !== '' && this._isrequired !== undefined && this._isrequired === true) {
            error = Validation.multilanguageRequired(c, this.languages, this._label, this._validationMessageRequired, this._validationMessageRequiredSummary);
        }
        if (error === null && c.value !== null && c.value !== undefined && c.value !== '' && this._anyrequired !== undefined && this._anyrequired === true) {
            error = Validation.multilanguageRequiredAny(c, this.languages, this._label, this._validationMessageRequiredAny, this._validationMessageRequiredAnySummary);
        }
        return error;
    }
};
NgMultilanguageInputCommon.ɵfac = function NgMultilanguageInputCommon_Factory(t) { return new (t || NgMultilanguageInputCommon)(ɵngcc0.ɵɵdirectiveInject(NgFormularCommon, 1), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Injector)); };
NgMultilanguageInputCommon.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NgMultilanguageInputCommon, inputs: { _maxlength: ["maxlength", "_maxlength"], _controlwidth: ["controlwidth", "_controlwidth"], _anyrequired: ["requiredany", "_anyrequired"], _validationMessageRequired: ["validationmessagerequired", "_validationMessageRequired"], _validationMessageRequiredSummary: ["validationmessagesummaryrequired", "_validationMessageRequiredSummary"], _validationMessageRequiredAny: ["validationmessagerequiredany", "_validationMessageRequiredAny"], _validationMessageRequiredAnySummary: ["validationmessagesummaryrequiredany", "_validationMessageRequiredAnySummary"] }, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
__decorate([
    Input('maxlength'),
    __metadata("design:type", Number)
], NgMultilanguageInputCommon.prototype, "_maxlength", void 0);
__decorate([
    Input('controlwidth'),
    __metadata("design:type", String)
], NgMultilanguageInputCommon.prototype, "_controlwidth", void 0);
__decorate([
    Input('requiredany'),
    __metadata("design:type", Boolean)
], NgMultilanguageInputCommon.prototype, "_anyrequired", void 0);
__decorate([
    Input('validationmessagerequired'),
    __metadata("design:type", String)
], NgMultilanguageInputCommon.prototype, "_validationMessageRequired", void 0);
__decorate([
    Input('validationmessagesummaryrequired'),
    __metadata("design:type", String)
], NgMultilanguageInputCommon.prototype, "_validationMessageRequiredSummary", void 0);
__decorate([
    Input('validationmessagerequiredany'),
    __metadata("design:type", String)
], NgMultilanguageInputCommon.prototype, "_validationMessageRequiredAny", void 0);
__decorate([
    Input('validationmessagesummaryrequiredany'),
    __metadata("design:type", String)
], NgMultilanguageInputCommon.prototype, "_validationMessageRequiredAnySummary", void 0);
NgMultilanguageInputCommon = __decorate([
    __param(0, Host()),
    __metadata("design:paramtypes", [NgFormularCommon, Injector])
], NgMultilanguageInputCommon);

/**
 * Base Klasse für Multi Language Textarea Control
 */
let NgMultilanguageInputAreaCommon = class NgMultilanguageInputAreaCommon extends NgInputBase {
    /**
    * Konstruktor
    * Inject des Formulars
    */
    constructor(parent, injector) {
        super(parent, injector);
        /**
        * Max länge an Zeichen für Eingabefeld
        */
        this._maxlength = null;
        /**
        * Anzahl Rows für TextArea
        */
        this._rows = 7;
        /**
         * Fix breite für das Control definieren.
         */
        this._controlwidth = null;
        /**
         * Aktiviert den Validator, das min. eine Sprache erfasst sein muss
         */
        this._anyrequired = false;
        /**
         * Resource Key für Validation Message Required bei Control
         */
        this._validationMessageRequired = 'VALIDATION_ERROR_MULTILANGUAGEREQUIRED';
        /**
         * Resource Key für Validation Message Required in Validation Summary
         */
        this._validationMessageRequiredSummary = 'VALIDATION_ERROR_SUMMARY_MULTILANGUAGEREQUIRED';
        /**
         * Resource Key für Validation Message Pattern bei Control
         */
        this._validationMessageRequiredAny = 'VALIDATION_ERROR_MULTILANGUAGEREQUIREDANY';
        /**
         * Resource Key für Validation Message Pattern in Validation Summary
         */
        this._validationMessageRequiredAnySummary = 'VALIDATION_ERROR_SUMMARY_MULTILANGUAGEREQUIREDANY';
        /**
         * Sprache für das Control
         */
        this.languages = [];
        /**
         * Selektierte Sprace des Controls
         */
        this.selectedLanguage = null;
        this.lngLanguageService = injector.get(LANGUAGE_SERVICE, new InternalLanguageService());
        this.lngLanguageService.GetLanguages().subscribe((result) => {
            this.languages = result;
            if (this.languages.length > 0) {
                this.selectedLanguage = this.languages[0];
            }
            // Control Validierung ausführen, da Wert potentiell bereits gesetzt sein kann
            this.UpdateValueAndValidity();
        });
    }
    /**
     * Collection der Sprachen
     */
    get Languages() {
        return this.languages;
    }
    get SelectedIcon() {
        if (this.selectedLanguage) {
            return this.selectedLanguage.Icon;
        }
        else {
            return '';
        }
    }
    get LanguageValue() {
        if (this.value) {
            const currentIsoCode = this.selectedLanguage ? this.selectedLanguage.IsoCode : null;
            // Fallback falls keine Selektierte Sprache
            if (currentIsoCode === null) {
                return '';
            }
            return this.value[currentIsoCode];
        }
        else {
            return '';
        }
    }
    SetLanguageValue(value) {
        if (this.value) {
            const currentIsoCode = this.selectedLanguage ? this.selectedLanguage.IsoCode : null;
            // Fallback falls keine Selektierte Sprache
            if (currentIsoCode === null) {
                return;
            }
            this.value[currentIsoCode] = value;
            this.propagateChange(this._value);
        }
    }
    SelectLanguage(language) {
        this.selectedLanguage = language;
    }
    IsEmpty(sprache) {
        if (this.value) {
            // Fallback falls keine Selektierte Sprache
            if (sprache === null) {
                return true;
            }
            return this.value[sprache.IsoCode] === undefined || this.value[sprache.IsoCode] === '' || this.value[sprache.IsoCode] === null;
        }
        else {
            return true;
        }
    }
    IsAnyEmpty() {
        let found = false;
        if (this.value) {
            this.languages.forEach((itm) => {
                if (itm === null) {
                    found = true;
                    return;
                }
                if (this.value[itm.IsoCode] === undefined || this.value[itm.IsoCode] === '' || this.value[itm.IsoCode] === null) {
                    found = true;
                    return;
                }
            });
        }
        return found;
    }
    /**
     * Methode validiert, ob der Wert den gegebenen Kriterien entspricht
     */
    validateData(c) {
        let error = null;
        if (error === null && c.value !== null && c.value !== undefined && c.value !== '' && this._isrequired !== undefined && this._isrequired === true) {
            error = Validation.multilanguageRequired(c, this.languages, this._label, this._validationMessageRequired, this._validationMessageRequiredSummary);
        }
        if (error === null && c.value !== null && c.value !== undefined && c.value !== '' && this._anyrequired !== undefined && this._anyrequired === true) {
            error = Validation.multilanguageRequiredAny(c, this.languages, this._label, this._validationMessageRequiredAny, this._validationMessageRequiredAnySummary);
        }
        return error;
    }
};
NgMultilanguageInputAreaCommon.ɵfac = function NgMultilanguageInputAreaCommon_Factory(t) { return new (t || NgMultilanguageInputAreaCommon)(ɵngcc0.ɵɵdirectiveInject(NgFormularCommon, 1), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Injector)); };
NgMultilanguageInputAreaCommon.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NgMultilanguageInputAreaCommon, inputs: { _maxlength: ["maxlength", "_maxlength"], _rows: ["rows", "_rows"], _controlwidth: ["controlwidth", "_controlwidth"], _anyrequired: ["requiredany", "_anyrequired"], _validationMessageRequired: ["validationmessagerequired", "_validationMessageRequired"], _validationMessageRequiredSummary: ["validationmessagesummaryrequired", "_validationMessageRequiredSummary"], _validationMessageRequiredAny: ["validationmessagerequiredany", "_validationMessageRequiredAny"], _validationMessageRequiredAnySummary: ["validationmessagesummaryrequiredany", "_validationMessageRequiredAnySummary"] }, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
__decorate([
    Input('maxlength'),
    __metadata("design:type", Number)
], NgMultilanguageInputAreaCommon.prototype, "_maxlength", void 0);
__decorate([
    Input('rows'),
    __metadata("design:type", Number)
], NgMultilanguageInputAreaCommon.prototype, "_rows", void 0);
__decorate([
    Input('controlwidth'),
    __metadata("design:type", String)
], NgMultilanguageInputAreaCommon.prototype, "_controlwidth", void 0);
__decorate([
    Input('requiredany'),
    __metadata("design:type", Boolean)
], NgMultilanguageInputAreaCommon.prototype, "_anyrequired", void 0);
__decorate([
    Input('validationmessagerequired'),
    __metadata("design:type", String)
], NgMultilanguageInputAreaCommon.prototype, "_validationMessageRequired", void 0);
__decorate([
    Input('validationmessagesummaryrequired'),
    __metadata("design:type", String)
], NgMultilanguageInputAreaCommon.prototype, "_validationMessageRequiredSummary", void 0);
__decorate([
    Input('validationmessagerequiredany'),
    __metadata("design:type", String)
], NgMultilanguageInputAreaCommon.prototype, "_validationMessageRequiredAny", void 0);
__decorate([
    Input('validationmessagesummaryrequiredany'),
    __metadata("design:type", String)
], NgMultilanguageInputAreaCommon.prototype, "_validationMessageRequiredAnySummary", void 0);
NgMultilanguageInputAreaCommon = __decorate([
    __param(0, Host()),
    __metadata("design:paramtypes", [NgFormularCommon, Injector])
], NgMultilanguageInputAreaCommon);

/**
 * Basis Klasse für Confirm Service implementation
 */
class ServiceConfirmCommon {
    /**
     * Konstruktor
     * @param appRef ApplicationRef zum Anhängen des Dialogs an den Content
     * @param injector Injector um die Instanz zu erzeuge
     */
    constructor(appRef, injector) {
        this.appRef = appRef;
        this.injector = injector;
        //#region Properties
        /**
         * Referenz auf IConfirm Instanz.
         */
        this.component = null;
    }
    //#endregion
    //#region Protected Methods
    /**
     * Erzeugt eine Instanz für den Dialog
     */
    CreateInstance() {
        // ComponentFactory aus Service laden
        const factory = this.GetComponentFactory();
        // Instanz der Komponente erzeugen und an die View anhängen
        this.component = factory.create(this.injector);
        this.appRef.attachView(this.component.hostView);
    }
    /**
      * Entfernt die Instanz des Dialogs
      */
    DestroyInstance() {
        // Dialog aus View entfernen und Komponenten löschen
        this.appRef.detachView(this.component.hostView);
        this.component.destroy();
    }
    /**
     * Zeigt den Dialog an
     */
    OpenDialog() {
        const dialog = this.component.instance;
        dialog.show();
        return dialog;
    }
    /**
     * Blendet den Dialog aus
     */
    CloseDialog() {
        const dialog = this.component.instance;
        dialog.hide();
    }
    /**
     * Interne Methode für die Implementation des Confirm Dialogs. Steuert die Feedbacks, die Erzeugung und Anzeige des Dialogs
     */
    Confirm() {
        // Dialog erzeugen
        this.CreateInstance();
        const instance = this.OpenDialog();
        // Konfiguration der Dialog Instanz durch Service Implementation zulassen
        this.ConfigureDialog(instance);
        // Event Emitter für Confirmation im Service. Event Emitter Asynchron initialiseren
        const confirmTask = new EventEmitter(true);
        // Callback wenn Dialog bestätigt wurde
        instance.onconfirm.subscribe(value => {
            // Dialog entfernen
            this.CloseDialog();
            this.DestroyInstance();
            // Emit auf Service auslösen
            confirmTask.emit(value);
        });
        // Confirm Emitter für Result zurückgeben
        return confirmTask;
    }
}

/**
 * Basis Klasse für Confirm Dialog
 */
class NgConfirmCommon {
    constructor() {
        //#region Input / Output Properties
        /**
         * Event wenn Dialog geschlossen wird
         */
        this.onconfirm = new EventEmitter();
        /**
       * Dialog Titel für Confirm Dialog
       */
        this.title = '';
        /**
         * Nachricht die auf dem Dialog angezeigt wird
         */
        this.message = '';
        /**
         * Icon welches auf dem Dialog angezeigt wird
         */
        this.image = '';
        /**
         * Map mit Buttons die in Dialog angezeigt werden.
         */
        this.buttons = [];
        //#endregion
        //#region Internal Properties and Methods
        /**
         * Definiert ob der Dialog sichtbar ist
         */
        this.isvisible = false;
        //#endregion
    }
    /**
     * Definiert, ob für den Dialog ein Image definiert wurde
     */
    hasImage() {
        return this.image !== '';
    }
    //#endregion
    //#region Public Methods
    /**
     * Action wenn Button auf Dialog geklickt wurde. Löst den EventEmitter aus und blendet den Dialog aus.
     * @param action
     */
    confirm(action) {
        this.onconfirm.emit(action);
        this.isvisible = false;
    }
    /**
     * Zeigt den Dialog an
     */
    show() {
        this.isvisible = true;
    }
    /**
     * Blendet den Dialog aus
     */
    hide() {
        this.isvisible = false;
    }
}
NgConfirmCommon.ɵfac = function NgConfirmCommon_Factory(t) { return new (t || NgConfirmCommon)(); };
NgConfirmCommon.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NgConfirmCommon, inputs: { title: "title", message: "message", image: "image", buttons: "buttons" }, outputs: { onconfirm: "onconfirm" } });
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], NgConfirmCommon.prototype, "onconfirm", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NgConfirmCommon.prototype, "title", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NgConfirmCommon.prototype, "message", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NgConfirmCommon.prototype, "image", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], NgConfirmCommon.prototype, "buttons", void 0);

/**
 * Klasse für Button Templates in Confirm Button
 */
class NgConfirmButton {
    /**
     * Konstruktor
     * @param key Key für Button
     * @param text Text für Button
     */
    constructor(key = '', text = '') {
        /**
         * Key des Buttons. Wird als Result beim Confirm zurückgegeben
         */
        this.key = '';
        /**
         * Anzeigetext des Buttons
         */
        this.text = '';
        this.key = key;
        this.text = text;
    }
}

/**
 * Injection Token für Language Resource Service
 */
const LANGUAGERESOURCE_SERVICE$1 = new InjectionToken('LanguageResourceService');
/**
 * Base Service für Localisation von Fehlermeldungen
 *
 * @example
 *
 * // Eigene Beispielimplementierung für Application mit ngx-translate
 * (at)Injectable()
 * export class ControlsLocalisation extends LanguageResourceService {
 *
 *   constructor(private translate: TranslateService) {
 *     super();
 *
 *     this.translate.setDefaultLang('de');
 *     this.translate.use('de');
 *   }
 *
 *     public GetString(key: string, params?: any): Observable<string> {
 *        return this.translate.get(key, params);
 *     }
 *  }
 *
 */
/**
* Service für interne Übersetzungen
* */
let LanguageResourceService$1 = class LanguageResourceService {
};
LanguageResourceService$1.ɵfac = function LanguageResourceService$1_Factory(t) { return new (t || LanguageResourceService$1)(); };
LanguageResourceService$1.ɵprov = ɵɵdefineInjectable({ factory: function LanguageResourceService_Factory() { return new LanguageResourceService$1(); }, token: LanguageResourceService$1, providedIn: "root" });
/**
 * Standardservice für interne Übersetzungen der Fehlermeldungen
 * */
let InternalLanguageResourceService$1 = class InternalLanguageResourceService extends LanguageResourceService$1 {
    /**
     * Konstruktor
     * */
    constructor() {
        super();
        /**
         * Language Resources für Controls Library
         */
        this.data = new Map();
        // Set Languages
        this.data.set('de', new Map());
        this.data.get('de').set('VALIDATION_ERROR_REQUIRED', 'Feld ist erforderlich.');
        this.data.get('de').set('VALIDATION_ERROR_SUMMARY_REQUIRED', 'Feld "{{FIELD}}" ist erforderlich.');
        this.data.get('de').set('VALIDATION_ERROR_MINVALUE', 'Wert darf nicht kleiner als {{MINVALUE}} sein.');
        this.data.get('de').set('VALIDATION_ERROR_SUMMARY_MINVALUE', 'Feld "{{FIELD}}" darf nicht kleiner als {{MINVALUE}} sein.');
        this.data.get('de').set('VALIDATION_ERROR_PATTERN', 'Wert entspricht nicht der Format Vorlage.');
        this.data.get('de').set('VALIDATION_ERROR_SUMMARY_PATTERN', 'Feld "{{FIELD}}" entspricht nicht der Format Vorlage.');
        this.data.get('de').set('VALIDATION_ERROR_MAXVALUE', 'Wert darf nicht grösser als {{MAXVALUE}} sein.');
        this.data.get('de').set('VALIDATION_ERROR_SUMMARY_MAXVALUE', 'Feld "{{FIELD}}" darf nicht grösser als {{MAXVALUE}} sein.');
        this.data.get('de').set('VALIDATION_ERROR_EMAIL', 'Feld ist keine E-Mail Adresse');
        this.data.get('de').set('VALIDATION_ERROR_SUMMARY_EMAIL', 'Feld "{{FIELD}}" ist keine E-Mail Adresse');
        this.data.get('de').set('VALIDATION_ERROR_MINLENGTH', 'Feld erfordert min. {{MINLENGTH}} Zeichen.');
        this.data.get('de').set('VALIDATION_ERROR_SUMMARY_MINLENGTH', 'Feld "{{FIELD}}" erfordert min. {{MINLENGTH}} Zeichen.');
        this.data.get('de').set('VALIDATION_ERROR_MINDATE', 'Feld muss neuer oder gleich {{MINDATE}} sein.');
        this.data.get('de').set('VALIDATION_ERROR_SUMMARY_MINDATE', 'Feld "{{FIELD}}" muss neuer oder gleich {{MINDATE}} sein.');
        this.data.get('de').set('VALIDATION_ERROR_MAXDATE', 'Feld muss älter oder gleich {{MAXDATE}} sein.');
        this.data.get('de').set('VALIDATION_ERROR_SUMMARY_MAXDATE', 'Feld "{{FIELD}}" muss älter oder gleich {{MAXDATE}} sein.');
        this.data.get('de').set('VALIDATION_ERROR_MINTIME', 'Feld muss neuer oder gleich {{MINTIME}} sein.');
        this.data.get('de').set('VALIDATION_ERROR_SUMMARY_MINTIME', 'Feld "{{FIELD}}" muss neuer oder gleich {{MINTIME}} sein.');
        this.data.get('de').set('VALIDATION_ERROR_MAXTIME', 'Feld muss älter oder gleich {{MAXTIME}} sein.');
        this.data.get('de').set('VALIDATION_ERROR_SUMMARY_MAXTIME', 'Feld "{{FIELD}}" muss älter oder gleich {{MAXTIME}} sein.');
        this.data.get('de').set('VALIDATION_ERROR_DATETIMEFORMAT', 'Feld ist kein gültiges Datum.');
        this.data.get('de').set('VALIDATION_ERROR_SUMMARY_DATETIMEFORMAT', 'Feld "{{FIELD}}" ist kein gültiges Datum.');
        this.data.get('de').set('VALIDATION_ERROR_FILESMIN', 'Es müssen min. {{MINFILES}} Dateien hochgeladen sein.');
        this.data.get('de').set('VALIDATION_ERROR_SUMMARY_FILESMIN', 'Feld "{{FIELD}}" muss min. {{MINFILES}} Dateien hochgeladen haben.');
        this.data.get('de').set('VALIDATION_ERROR_MULTILANGUAGEREQUIREDANY', 'Es muss min. 1 Sprache erfasst sein.');
        this.data.get('de').set('VALIDATION_ERROR_SUMMARY_MULTILANGUAGEREQUIREDANY', 'Feld "{{FIELD}}" muss min. 1 Sprache erfasst haben.');
        this.data.get('de').set('VALIDATION_ERROR_MULTILANGUAGEREQUIRED', 'Es müssen alle Sprachen erfasst sein.');
        this.data.get('de').set('VALIDATION_ERROR_SUMMARY_MULTILANGUAGEREQUIRED', 'Feld "{{FIELD}}" muss alle Sprachen erfasst haben.');
        // EN
        this.data.set('en', new Map());
    }
    /**
     * Die Funktion setzt die default Sprache auf DE, falls die Sprach-Setzung nicht möglich ist.
     */
    GetFallbackLanguage() {
        return 'de';
    }
    /**
     * Die Funktion ergibt die ausgewählte Sprache.
     */
    GetLanguage() {
        const language = navigator.language;
        if (language.indexOf('-') >= 0) {
            return language.split('-')[0];
        }
        else {
            return language;
        }
    }
    /**
    * Die Methode ergibt die selecte Sprache (string)  anhand von Key und Params
    */
    GetString(key, params) {
        return new Observable((observer) => {
            let language = this.GetLanguage();
            if (!this.data.has(language)) {
                language = this.GetFallbackLanguage();
                // Return Key if no Language exists
                if (!this.data.has(language)) {
                    observer.next(key);
                    observer.complete();
                    return;
                }
            }
            if (this.data.get(language).has(key)) {
                const resource = this.data.get(language).get(key);
                if (params !== undefined && params !== null) {
                    const formatter = new Interpolation();
                    observer.next(formatter.interpolateString(resource, params));
                    observer.complete();
                    return;
                }
                else {
                    observer.next(resource);
                    observer.complete();
                    return;
                }
            }
            else {
                observer.next(key);
                observer.complete();
                return;
            }
        });
    }
};
InternalLanguageResourceService$1.ɵfac = function InternalLanguageResourceService$1_Factory(t) { return new (t || InternalLanguageResourceService$1)(); };
InternalLanguageResourceService$1.ɵprov = ɵɵdefineInjectable({ factory: function InternalLanguageResourceService_Factory() { return new InternalLanguageResourceService$1(); }, token: InternalLanguageResourceService$1, providedIn: "root" });
InternalLanguageResourceService$1 = __decorate([ __metadata("design:paramtypes", [])
], InternalLanguageResourceService$1);

/**
 * Model für Sprachen
 */
class LanguageModel$1 {
}

let JNetworkCommonListboxOptionModule = class JNetworkCommonListboxOptionModule {
};
JNetworkCommonListboxOptionModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: JNetworkCommonListboxOptionModule });
JNetworkCommonListboxOptionModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function JNetworkCommonListboxOptionModule_Factory(t) { return new (t || JNetworkCommonListboxOptionModule)(); }, imports: [[]] });



/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LanguageResourceService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(InternalLanguageResourceService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();

const ɵNgCheckboxCommon_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(NgCheckboxCommon);


const ɵNgBaseListControl_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(NgBaseListControl);
const ɵNgBaseSelectControl_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(NgBaseSelectControl);


/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgListboxOptionDirective, [{
        type: Directive,
        args: [{ selector: '[ngOption], option' }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }]; }, { _value: [{
            type: Input,
            args: ['value']
        }] }); })();
const ɵNgListboxCommon_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(NgListboxCommon);



const ɵNgInputBase_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(NgInputBase);
const ɵNgInputCommon_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(NgInputCommon);
const ɵNgInputAreaCommon_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(NgInputAreaCommon);
const ɵNgInputDecimalCommon_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(NgInputDecimalCommon);
const ɵNgInputEmailCommon_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(NgInputEmailCommon);
const ɵNgInputIntegerCommon_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(NgInputIntegerCommon);
const ɵNgInputPasswordCommon_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(NgInputPasswordCommon);
const ɵNgInputSearchCommon_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(NgInputSearchCommon);






/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgBaseDateTimeControl, [{
        type: Injectable
    }], function () { return [{ type: NgFormularCommon }, { type: ɵngcc0.Injector }, { type: ɵngcc0.ElementRef }]; }, { _isrequired: [{
            type: Input,
            args: ['isrequired']
        }], _placeholder: [{
            type: Input,
            args: ['placeholder']
        }], _validationMessageRequired: [{
            type: Input,
            args: ['validationmessagerequired']
        }], _validationMessageRequiredSummary: [{
            type: Input,
            args: ['validationmessagesummaryrequired']
        }], _validationMessageDateTimeFormat: [{
            type: Input,
            args: ['validationmessagedatetimeformat']
        }], _validationMessageDateTimeFormatSummary: [{
            type: Input,
            args: ['validationmessagesummarydatetimeformat']
        }], valuestring: [{
            type: Input,
            args: ['valuestring']
        }] }); })();




const ɵNgStaticLabelCommon_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(NgStaticLabelCommon);
const ɵNgStaticFormContainerCommon_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(NgStaticFormContainerCommon);


const ɵNgTinyMceCommon_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(NgTinyMceCommon);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Events, [{
        type: Directive
    }], function () { return []; }, { onBeforePaste: [{
            type: Output
        }], onBlur: [{
            type: Output
        }], onClick: [{
            type: Output
        }], onContextMenu: [{
            type: Output
        }], onCopy: [{
            type: Output
        }], onCut: [{
            type: Output
        }], onDblclick: [{
            type: Output
        }], onDrag: [{
            type: Output
        }], onDragDrop: [{
            type: Output
        }], onDragEnd: [{
            type: Output
        }], onDragGesture: [{
            type: Output
        }], onDragOver: [{
            type: Output
        }], onDrop: [{
            type: Output
        }], onEditorContentChange: [{
            type: Output
        }], onFocus: [{
            type: Output
        }], onFocusIn: [{
            type: Output
        }], onFocusOut: [{
            type: Output
        }], onKeyDown: [{
            type: Output
        }], onKeyPress: [{
            type: Output
        }], onKeyUp: [{
            type: Output
        }], onMouseDown: [{
            type: Output
        }], onMouseEnter: [{
            type: Output
        }], onMouseLeave: [{
            type: Output
        }], onMouseMove: [{
            type: Output
        }], onMouseOut: [{
            type: Output
        }], onMouseOver: [{
            type: Output
        }], onMouseUp: [{
            type: Output
        }], onPaste: [{
            type: Output
        }], onSelectionChange: [{
            type: Output
        }], onActivate: [{
            type: Output
        }], onAddUndo: [{
            type: Output
        }], onBeforeAddUndo: [{
            type: Output
        }], onBeforeExecCommand: [{
            type: Output
        }], onBeforeGetContent: [{
            type: Output
        }], onBeforeRenderUI: [{
            type: Output
        }], onBeforeSetContent: [{
            type: Output
        }], onChange: [{
            type: Output
        }], onClearUndos: [{
            type: Output
        }], onDeactivate: [{
            type: Output
        }], onDirty: [{
            type: Output
        }], onExecCommand: [{
            type: Output
        }], onGetContent: [{
            type: Output
        }], onHide: [{
            type: Output
        }], onInit: [{
            type: Output
        }], onLoadContent: [{
            type: Output
        }], onNodeChange: [{
            type: Output
        }], onPostProcess: [{
            type: Output
        }], onPostRender: [{
            type: Output
        }], onPreInit: [{
            type: Output
        }], onPreProcess: [{
            type: Output
        }], onProgressState: [{
            type: Output
        }], onRedo: [{
            type: Output
        }], onRemove: [{
            type: Output
        }], onReset: [{
            type: Output
        }], onSaveContent: [{
            type: Output
        }], onSetAttrib: [{
            type: Output
        }], onObjectResizeStart: [{
            type: Output
        }], onObjectResized: [{
            type: Output
        }], onObjectSelected: [{
            type: Output
        }], onSetContent: [{
            type: Output
        }], onShow: [{
            type: Output
        }], onSubmit: [{
            type: Output
        }], onUndo: [{
            type: Output
        }], onVisualAid: [{
            type: Output
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgTinyMceEditorComponent, [{
        type: Component,
        args: [{
                selector: 'ngTinyMceEditor',
                template: '<ng-template></ng-template>',
                providers: [EDITOR_COMPONENT_VALUE_ACCESSOR],
                styles: [':host { display: block; }']
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }]; }, { id: [{
            type: Input
        }], toolbar: [{
            type: Input
        }], initialValue: [{
            type: Input
        }], value: [{
            type: Input,
            args: ["value"]
        }], init: [{
            type: Input
        }], inline: [{
            type: Input
        }], cloudChannel: [{
            type: Input
        }], apiKey: [{
            type: Input
        }], hostUrl: [{
            type: Input
        }], tagName: [{
            type: Input
        }], plugins: [{
            type: Input
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(jNetworkTinyMceEditorModule, { declarations: [NgTinyMceEditorComponent], exports: [NgTinyMceEditorComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(jNetworkTinyMceEditorModule, [{
        type: NgModule,
        args: [{
                declarations: [NgTinyMceEditorComponent],
                imports: [],
                exports: [NgTinyMceEditorComponent]
            }]
    }], null, null); })();

const ɵNgTreeViewChildCommon_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(NgTreeViewChildCommon);



const ɵNgUploadMultipleCommon_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(NgUploadMultipleCommon);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LanguageService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
const ɵInternalLanguageService_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(InternalLanguageService);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(InternalLanguageService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();



/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LanguageResourceService$1, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(InternalLanguageResourceService$1, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(JNetworkCommonListboxOptionModule, { declarations: [NgListboxOptionDirective], exports: [NgListboxOptionDirective] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(JNetworkCommonListboxOptionModule, [{
        type: NgModule,
        args: [{
                declarations: [NgListboxOptionDirective],
                imports: [],
                exports: [NgListboxOptionDirective]
            }]
    }], null, null); })();

/*
 * Public API Surface of jNetwork-controls-common
 */

/**
 * Generated bundle index. Do not edit.
 */

export { GridResponse, Interpolation, JNetworkCommonListboxOptionModule, LANGUAGERESOURCE_SERVICE$1 as LANGUAGERESOURCE_SERVICE, LANGUAGE_SERVICE, LanguageModel$1 as LanguageModel, LanguageResourceService$1 as LanguageResourceService, LanguageService, NgButtonCommon, NgCheckboxCommon, NgConfirmButton, NgConfirmCommon, NgDateCommon, NgDateSelectorCommon, NgDateTimeCommon, NgDialogCommon, NgDropdownCommon, NgDropdownOptionCommon, NgFormularCommon, NgGridButtonCommon, NgGridColumnActionCommon, NgGridColumnBaseCommon, NgGridColumnCommon, NgGridCommon, NgGridImageCommon, NgInputAreaCommon, NgInputCommon, NgInputCurrencyCommon, NgInputDecimalCommon, NgInputEmailCommon, NgInputIntegerCommon, NgInputPasswordCommon, NgInputSearchCommon, NgListboxCommon, NgListboxOptionDirective, NgMultilanguageInputAreaCommon, NgMultilanguageInputCommon, NgPagingCommon, NgRadiobuttonCommon, NgRadiobuttonsCommon, NgStaticFormContainerCommon, NgStaticLabelCommon, NgTabCommon, NgTabItemCommon, NgTimeCommon, NgTinyMceCommon, NgTinyMceEditorComponent, NgTooltipCommon, NgTreeItemActionCommon, NgTreeViewChildCommon, NgTreeViewCommon, NgUploadFile, NgUploadMultipleCommon, NgUploadSingleCommon, NgValidationSummaryCommon, NgWizardCommon, NgWizardItemCommon, PagerData, ServiceConfirmCommon, SortDescriptor, SortOrder, TooltipPosition, Validation, ValidationErrorItem, convertToBoolean, convertToNumber, isDefined, jNetworkTinyMceEditorModule, mapToObject, NgUploadBase as ɵa, NgBaseModelControl as ɵb, NgBaseSelectControl as ɵc, NgBaseListControl as ɵd, NgInputBase as ɵe, NgBaseDateTimeControl as ɵf, Events as ɵg };

//# sourceMappingURL=jnetwork-jngcontrols-common.js.map