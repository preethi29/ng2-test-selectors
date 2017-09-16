# ng2-test-selectors
Angular2 library to add selectors to any element  to facilitate quering elements in unit-testing or functional testing. The selectors are added only in development mode. 
Calling 'enableProdMode()' removes the selectors.

## Installation

To install this library, run:

```bash
$ npm install ng2-test-selectors --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install ng2-test-selectors
```

and then from your Angular `AppModule`:

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

    // Specify your library as an import
    Ng2TestSelectorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its components, directives and pipes in your Angular application:

```xml
<!-- You can now use your library directive in any component -->
<h1 testId="test-title">
  {{title}}
</h1>
```

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
