# ng2-test-selectors
Angular2 library to add selectors to any element  to facilitate quering elements in unit-tests or e2e-tests. 

The selectors are added only in development mode. 
Calling 'enableProdMode()' removes the selectors from the elements.

The library provides two directives:
 * **testId** - adds id to the element in development mode
 * **testClass** - adds class to the element in development mode

## Installation

To install this library, run:

```bash
$ npm install ng2-test-selectors --save
```

## Usage

Import '**Ng2TestSelectorsModule**' in your application's `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { Ng2TestSelectorsModule } from 'ng2-test-selectors';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify Ng2TestSelectorsModule from library as an import
    Ng2TestSelectorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once the module is imported, you can use the directives in your Angular application:

* testId
```xml
<!-- You can now use 'testId' directive in any component -->
<h1 testId="test-title">
    My Application
</h1>
```
The above template will be rendered in development mode as below:

![testId](/testId.jpg)


* testClass
```xml
<!-- You can now use 'testclass' directive in any component -->
<h1 testClass="test-title">
    My Application
</h1>
```
The above template will be rendered in development mode as below:

![testClass](/testClass.jpg)

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Preethi S](mailto:preethi.ms34@gmail.com)
