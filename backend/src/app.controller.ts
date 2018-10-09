import { Get, Res, Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiUseTags } from '@nestjs/swagger';
const path = require('path');

@ApiUseTags('app')
@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  root(@Res() response): void {
    // the homepage will load our index.html which contains React logic
    response.sendFile(path.resolve(__dirname + '/../public/index.html'));
  }
}
