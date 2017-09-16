import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TestIdDirective} from './test-id.directive';
import {TestClassDirective} from './test-class.directive';

export * from './test-id.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        TestIdDirective,
        TestClassDirective
    ],
    exports: [
        TestIdDirective,
        TestClassDirective
    ]
})
export class Ng2TestSelectorsModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: Ng2TestSelectorsModule,
        };
    }
}
