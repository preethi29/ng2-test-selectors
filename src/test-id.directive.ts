import {Directive, ElementRef, Input, isDevMode, OnInit, Renderer2} from '@angular/core';

@Directive({
    selector: '[testId]',
})
export class TestIdDirective implements OnInit {
    @Input() testId: string;
    isDevMode: boolean;

    constructor(private elRef: ElementRef, private renderer: Renderer2) {
        this.isDevMode = isDevMode();
    }

    ngOnInit() {
        if (this.isDevMode) {
            this.renderer.setAttribute(this.elRef.nativeElement, 'id', this.testId);
        }
        this.renderer.removeAttribute(this.elRef.nativeElement, 'testId');
    }
}
