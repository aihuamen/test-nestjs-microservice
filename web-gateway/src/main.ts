import { NestFactory } from '@nestjs/core';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { map } from 'rxjs/operators';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  // const client = ClientProxyFactory.create({ transport: Transport.NATS });
  // await client.connect();
  // client
  //   .send<string>({ cmd: 'hello' }, 'yee')
  //   .pipe(map((s) => s.length))
  //   .subscribe((n) => console.log(n));
}
bootstrap();
