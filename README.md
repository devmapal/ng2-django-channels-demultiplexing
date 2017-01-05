# ng2-django-channels-demultiplexing

## Installation

To install this library, run:

```bash
$ npm install ng2-django-channels-demultiplexing --save
```

## Usage

Sample Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import library
import { Ng2DjangoChannelsDemultiplexingModule } from 'ng2-django-channels-demultiplexing';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify library as an import and configure the WebSocket URL
    Ng2DjangoChannelsDemultiplexingModule.forRoot({websocket_url: 'ws://127.0.0.1:8001/api/ws'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once imported, you can use WebSocketDemultiplexingService in your Angular application:

```typescript
import { Injectable } from '@angular/core';
import { Demultiplexing, WebSocketDemultiplexingService } from 'ng2-django-channels-demultiplexing';

@Injectable()
export class SomeService {
  constructor(private webSocketDemultiplexerService: WebSocketDemultiplexerService) {
    this.webSocketDemultiplexerService.subscribe('some_stream', (payload: Object) => {
      ...
    });
  }

  sendData(stream: string, data: Object): void {
    this.webSocketDemultiplexerService.sendData(
      stream,
	  data
    );
  }
}
```

## License

MIT © [Fabian Schaffert](mailto:fabian@schaffert.cc)
