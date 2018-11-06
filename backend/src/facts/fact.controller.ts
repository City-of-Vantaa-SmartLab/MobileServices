import {
    Controller,
    Get,
    Res,
    Logger
} from '@nestjs/common';
import { ApiUseTags, ApiResponse } from '@nestjs/swagger';
import { FactService } from './fact.service';

@ApiUseTags('facts')
@Controller('/api/facts')
export class FactController {

    constructor(
        private readonly factService: FactService,
        private readonly logger: Logger) {
        this.logger = new Logger('FactController');
    }

    @Get()
    @ApiResponse({ status: 200, description: 'List of facts as response.' })
    @ApiResponse({ status: 500, description: 'Server error.' })
    async get(@Res() response) {
        try {
            const facts = await this.factService.getFacts();
            return response.status(200).json(facts);
        } catch (error) {
            this.logger.error(`Failed to get facts: ${error}`);
            return response.status(500).json(`Failed to get facts: ${error.message}`);
        }
    }
}