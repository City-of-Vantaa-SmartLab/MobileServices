import { Injectable, Logger } from '@nestjs/common';
import facts from './fact';

@Injectable()
export class FactService {

    constructor(
        private readonly logger: Logger) {
        this.logger = new Logger('FactService');
    }

    async getFacts() {
        try {
            return facts;
        } catch (error) {
            this.logger.error(`Failed to get facts: ${error}`);
            throw error;
        }
    }
}