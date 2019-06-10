import {Directive, Input, Attribute, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appColorFileSize]'
})
export class ColorFileSizeDirective implements OnInit {
  @Input('appColorFileSize')
  public color: string;

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    this.element.nativeElement.style.color = this.color;
  }
}
