import { Module } from '@nestjs/common'

// import { UserService } from './user.service'
import { ProductController } from './product.controller';
import { ProductRepository } from './product.repository';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [ DatabaseModule ],
  controllers: [ ProductController ],
  components: [ ProductRepository ],
  exports: [ ProductRepository ]
})
export class ProductModule {}
