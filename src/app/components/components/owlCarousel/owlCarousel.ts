import {Component, Input, ElementRef, HostBinding, AfterViewInit, OnDestroy} from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-owl-carousel',
  template: `
    <ng-content></ng-content>`
})
export class OwlCarouselComponent implements AfterViewInit, OnDestroy {
  @HostBinding('class') defaultClass = 'owl-carousel';
  @Input() options: any;

  $owlElement: any;
  defaultOptions: any = {};

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit() {
    // use default - empty
    for (const key in this.options) {
      if (this.defaultOptions === '') {
        this.defaultOptions[key] = this.options[key];
      }
    }
    this.$owlElement = $(this.el.nativeElement).owlCarousel(this.defaultOptions);
    console.log(this.options);
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
    this.$owlElement.owlCarousel('destroy');
    this.$owlElement = null;
  }
}
