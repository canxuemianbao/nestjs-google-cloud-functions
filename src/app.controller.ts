import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { HelloNameDto } from './dto/hello-name.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  getHelloName(@Body() helloNameDto: HelloNameDto): string {
    return this.appService.getHelloName(helloNameDto);
  }
}
