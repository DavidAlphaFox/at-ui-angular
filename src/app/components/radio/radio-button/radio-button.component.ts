import {Component, ElementRef, HostBinding, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {RadioComponent} from "../radio.component";
import {RadioGroupComponent} from "../radio-group/radio-group.component";

@Component({
  selector: '[atRadioButton]',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css']
})
export class RadioButtonComponent extends RadioComponent implements OnInit {


  @Input()
  fill: string

  @Input()
  textColor: string

  @HostBinding('class.at-radio--checked')
  get buttonChecked() {
    return this._checked
  }

  @ViewChild('content_span') content_span: any

  _prefixCls = 'at-radio-button'

  ngOnInit() {
    if (this.fill) {
      this._renderer.setStyle(this.content_span.nativeElement, 'background-color', this.fill)
      this._renderer.setStyle(this.content_span.nativeElement, 'border-color', this.fill)
    }
    if (this.textColor) {
      this._renderer.setStyle(this.content_span.nativeElement, 'color', this.textColor)
    }
  }

}
