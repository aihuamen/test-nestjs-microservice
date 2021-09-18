import { Controller, Logger } from '@nestjs/common';
import {
  Ctx,
  MessagePattern,
  NatsContext,
  Payload,
} from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private logger = new Logger('ServiceOne');
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'hello' })
  getHello(@Payload() data: string, @Ctx() context: NatsContext): string {
    this.logger.log(`Data: ${data} , Context: ${context.getSubject()}`);
    return this.appService.getHello();
  }
}
