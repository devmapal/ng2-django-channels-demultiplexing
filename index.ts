import { NgModule, ModuleWithProviders } from '@angular/core';

import { WebSocketDemultiplexerService } from './src/web-socket-demultiplexer.service';
import { WebSocketService } from './src/web-socket.service';
import { WebSocketServiceConfig } from './src/web-socket-service-config';

export { WebSocketDemultiplexerService } from './src/web-socket-demultiplexer.service';

@NgModule({
  providers: [
    WebSocketService,
    WebSocketDemultiplexerService
  ]
})
export class Ng2DjangoChannelsDemultiplexingModule {
  static forRoot(config: WebSocketServiceConfig): ModuleWithProviders {
    return {
      ngModule: Ng2DjangoChannelsDemultiplexingModule,
      providers: [
        {provide: WebSocketServiceConfig, useValue: config }
      ]
    };
  }
}
