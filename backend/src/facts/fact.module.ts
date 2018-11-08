import { Module, Logger } from '@nestjs/common';
import { FactController } from './fact.controller';
import { FactService } from './fact.service';

@Module({
    controllers: [FactController],
    providers: [FactService, Logger],
})
export class FactModule { }
