import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestIdDirective } from './test-id.directive';

export * from './test-id.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TestIdDirective,
  ],
  exports: [
    TestIdDirective,
  ]
})
export class Ng2TestSelectorsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: Ng2TestSelectorsModule,
    };
  }
}
