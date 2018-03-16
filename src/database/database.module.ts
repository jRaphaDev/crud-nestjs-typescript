import { Module } from '@nestjs/common';
import { connectionProvider } from './connection.provider';

@Module({
  components: [connectionProvider],
  exports: [connectionProvider],
})
export class DatabaseModule {}