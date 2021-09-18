import {
  Controller,
  Get,
  Inject,
  Logger,
  OnApplicationBootstrap,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { SERVICE_ONE } from './app.constant';

@Controller()
export class AppController implements OnApplicationBootstrap {
  private logger = new Logger('AppControler');

  constructor(@Inject(SERVICE_ONE) private readonly client: ClientProxy) {}

  async onApplicationBootstrap() {
    this.logger.log('Connect to service-one');
    await this.client.connect();
  }

  @Get()
  getHello(): Observable<string> {
    return this.client.send<string>({ cmd: 'hello' }, 'yee');
  }
}
