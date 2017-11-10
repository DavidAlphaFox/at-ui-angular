import { OnInit } from '@angular/core';
export declare type atInputSize = 'small' | 'normal' | 'large';
export declare class InputComponent implements OnInit {
    constructor();
    ngOnInit(): void;
    private _atStatus;
    private _atType;
    private _disabled;
    private _placeholder;
    private _type;
    private _atSize;
    private _icon;
    private _value;
    private _step;
    private _max;
    private _min;
    isMax: boolean;
    isMin: boolean;
    max: number;
    min: number;
    _prefixCls: string;
    _BindClass: {};
    atType: string;
    step: number;
    value: any;
    atSize: atInputSize;
    icon: string;
    type: string;
    disabled: boolean;
    atStatus: string;
    placeholder: string;
    showAppend: boolean;
    showPrepend: boolean;
    prepend: any;
    append: any;
    ngAfterContentInit(): void;
    trim(str: any): any;
    onChange: any;
    onTouched: any;
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => {}): void;
    registerOnTouched(fn: () => {}): void;
    numberUp(): void;
    numberDown(): void;
    setNumberStatus(): void;
}