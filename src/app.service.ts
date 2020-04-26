import { Injectable } from '@nestjs/common';
import { HelloNameDto } from './dto/hello-name.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHelloName(helloNameDto: HelloNameDto): string {
    return `Hello ${helloNameDto.name}!`;
  }
}
