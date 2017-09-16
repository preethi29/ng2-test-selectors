import {Directive, ElementRef, Input, isDevMode, OnInit, Renderer2} from '@angular/core';

@Directive({
    selector: '[testClass]',
})
export class TestClassDirective implements OnInit {
    @Input() testClass: string;
    isDevMode: boolean;

    constructor(private elRef: ElementRef, private renderer: Renderer2) {
        this.isDevMode = isDevMode();
    }

    ngOnInit() {
        if (this.isDevMode) {
            this.renderer.addClass(this.elRef.nativeElement, this.testClass);
        }
        this.renderer.removeAttribute(this.elRef.nativeElement, 'testClass');
    }
}
