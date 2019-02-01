import { NgForm, NgModel } from '@angular/forms';
import { Directive, HostBinding, Input, Component, ViewChild, QueryList, ContentChildren, AfterViewInit } from '@angular/core';

@Component({
  selector: 'ngFormular',
  templateUrl: './form.html'
})
export class NgFormular implements AfterViewInit {


  // Form Control
  @Input()
  ngFormular: string;

  // Default Label Size for Form
  @Input("labelsize") labelsize: number = 3;

  // Set Form CSS Class to HTML Tag
  @HostBinding('class')
  elementClass = 'form-horizontal';

  @ViewChild(NgForm)
  public form: NgForm;


  @ContentChildren(NgModel) public models: QueryList<NgModel>;
  
  ngAfterViewInit(): void {
    let ngContentModels = this.models.toArray();
    ngContentModels.forEach((model) => {
      this.form.addControl(model);
    });
  }

}
