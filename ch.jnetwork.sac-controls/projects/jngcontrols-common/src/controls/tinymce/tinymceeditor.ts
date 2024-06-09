// Source: https://github.com/cnblogs/tinymce-angular

import { AfterViewInit, Component, ElementRef, forwardRef, Input, NgZone, OnDestroy } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Events } from './events';
import { getTinymce } from './generic';
import * as ScriptLoader from './scriptLoader';
import { bindHandlers, isTextarea, mergePlugins, uuid } from './utils';


const scriptState = ScriptLoader.create();

const EDITOR_COMPONENT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NgTinyMceEditorComponent),
  multi: true
};

@Component({
  selector: 'ngTinyMceEditor',
  template: '<ng-template></ng-template>',
  styles: [':host { display: block; }'],
  providers: [EDITOR_COMPONENT_VALUE_ACCESSOR]
})
export class NgTinyMceEditorComponent extends Events implements AfterViewInit, ControlValueAccessor, OnDestroy {
  private elementRef: ElementRef;
  private element: Element | undefined = undefined;
  private editor: any;

  ngZone: NgZone;

  @Input() cloudChannel: string | undefined;
  @Input() apiKey: string | undefined;
  @Input() hostUrl: string | undefined;
  @Input() init: { [key: string]: any } | undefined;
  @Input() id = '';
  @Input() initialValue: string | undefined;
  @Input() inline: boolean | undefined;
  @Input() tagName: string | undefined;
  @Input() plugins: string | undefined;
  @Input() toolbar: string | string[] | null = null;

  private onTouchedCallback = () => {};
  private onChangeCallback = (x: any) => {};

  constructor(elementRef: ElementRef, ngZone: NgZone) {
    super();
    this.elementRef = elementRef;
    this.ngZone = ngZone;
    this.initialise = this.initialise.bind(this);
  }

  writeValue(value: string | null): void {
    this.initialValue = value || this.initialValue;

    if (this.editor && this.editor.initialized && typeof value === 'string') {
      console.log("Set Value to TinyMCE with WriteValue");
      this.editor.setContent(value);
    }
  }

  private changeInEditor: boolean = false;

  @Input("value")
  set value(v: string) {
    if (this.editor && this.changeInEditor == false) {
      console.log("Set Value to TinyMCE with Value");
      this.editor.setContent(v);
    }
    else
      this.initialValue = v;
  }

  get value(): string {
    console.log("Read Value")
    return this.editor.getContent();
  }


  registerOnChange(fn: (_: any) => void): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  setDisabledState(isDisabled: boolean) {
    if (this.editor) {
      this.editor.setMode(isDisabled ? 'readonly' : 'design');
    } else if (isDisabled) {
      this.init = { ...this.init, readonly: true };
    }
  }

  ngAfterViewInit() {
    this.id = this.id || uuid('tiny-react');
    this.inline = typeof this.inline !== 'undefined' ? this.inline : this.init && this.init.inline;
    this.createElement();
    if (getTinymce() !== null) {
      this.initialise();
    } else if (this.element) {
      const doc = this.element.ownerDocument;
      let url = '';
      if (this.hostUrl) {
        url = this.hostUrl;
      } else {
        const channel = this.cloudChannel || 'stable';
        const apiKey = this.apiKey || '';
        url = `https://cloud.tinymce.com/${channel}/tinymce.min.js?apiKey=${apiKey}`;
      }
      ScriptLoader.load(scriptState, doc, url, this.initialise);
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
    const finalInit = {
      ...this.init,
      selector: `#${this.id}`,
      inline: this.inline,
      plugins: mergePlugins(this.init && this.init.plugins, this.plugins),
      toolbar: this.toolbar || (this.init && this.init.toolbar),
      branding: false,
      setup: (editor: any) => {
        this.editor = editor;
        editor.on('init', (e: Event) => {
          this.initEditor(e, editor);
        });

        if (this.init && typeof this.init.setup === 'function') {
          this.init.setup(editor);
        }
      }
    };

    if (isTextarea(this.element)) {
      this.element.style.visibility = '';
    }

    this.ngZone.runOutsideAngular(() => {
      getTinymce().init(finalInit);
    });
  }

  private initEditor(initEvent: Event, editor: any) {
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
    }
    ));
    editor.on(
      'setcontent',
      ({ content, format }: any) => format === 'html' && content && this.ngZone.run(() => this.onChangeCallback(content))
    );
    editor.on('change keyup undo redo', () => this.ngZone.run(() => {
      console.log("Change Event");
      this.onChangeCallback(editor.getContent());
      this.onEditorContentChange.emit(editor);
    }
    ));
    bindHandlers(this, editor, initEvent);
  }
}
