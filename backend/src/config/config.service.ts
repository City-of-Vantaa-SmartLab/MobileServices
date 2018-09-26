import { Injectable } from '@nestjs/common';
import * as Joi from 'joi';
import * as dotenv from 'dotenv';
dotenv.config();

export interface EnvConfig {
  [prop: string]: string;
}

@Injectable()
export class ConfigService {
  private readonly envConfig: EnvConfig;

  constructor() {
    this.envConfig = this.validateInput(process.env);
  }

  get(key: string): string {
    return this.envConfig[key];
  }

  get applicationPort(): string {
    return this.envConfig.PORT;
  }

  get databaseHost(): string {
    return this.envConfig.DATABASE_HOST;
  }

  get databaseName(): string {
    return this.envConfig.DATABASE_NAME;
  }

  get databasePort(): number {
    return Number(this.envConfig.DATABASE_PORT);
  }

  get databaseUsername(): string {
    return this.envConfig.DATABASE_USERNAME;
  }

  get databasePassword(): string {
    return this.envConfig.DATABASE_PASSWORD;
  }

  get dropDatabaseSchema(): boolean {
    return Boolean(this.envConfig.DROP_DATABASE_SCHEMA);
  }

  get environment(): string {
    return this.envConfig.NODE_ENV;
  }

  get vantaaNewsPath(): string {
    return this.envConfig.VANTAA_NEWS_PATH;
  }

  get vantaaStoriesPath(): string {
    return this.envConfig.VANTAA_STORIES_PATH;
  }

  get vantaaAikuisopistoPath(): string {
    return this.envConfig.VANTAA_AIKUISOPISTO_PATH;
  }

  get vantaaNuorten(): string {
    return this.envConfig.VANTAA_NUORTEN_PATH;
  }

  get vantaaKaupunginmuseo(): string {
    return this.envConfig.VANTAA_KAUPUNGINMUSEO_PATH;
  }

  get vantaaEvents(): string {
    return this.envConfig.VANTAA_EVENTS_PATH;
  }

  /**
   * Ensures all needed variables are set, and returns the validated JavaScript object
   * including the applied default values.
   */
  private validateInput(envConfig: EnvConfig): EnvConfig {
    const envVarsSchema: Joi.ObjectSchema = Joi.object({
      PORT: Joi.number().default(3000),
      DATABASE_PORT: Joi.number().default(5432),
      DATABASE_HOST: Joi.string().default('localhost'),
      DATABASE_NAME: Joi.string().default('postgres'),
      DATABASE_USERNAME: Joi.string().default('postgres'),
      DATABASE_PASSWORD: Joi.string().default('password'),
      DROP_DATABASE_SCHEMA: Joi.boolean().default(false),
      NODE_ENV: Joi.string().allow('local', 'dev', 'test', 'production').default('local'),
      VANTAA_NEWS_PATH: Joi.string(),
      VANTAA_STORIES_PATH: Joi.string(),
    });

    const { error, value: validatedEnvConfig } = Joi.validate(
      envConfig,
      envVarsSchema,
      { allowUnknown: true }
    );
    if (error) {
      throw new Error(`Config validation error: ${error.message}`);
    }
    return validatedEnvConfig;
  }
}
