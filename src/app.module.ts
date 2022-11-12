import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { LogisticsModule } from './logistics/logistics.module';
import { ProductsModule } from './products/products.module';
import { EmailModule } from './email/email.module';
import { EmailService } from './email/email.service';
import { PrismaService } from './prisma.service';


@Module({
  imports: [AuthModule, UsersModule, OrdersModule, LogisticsModule, ProductsModule, EmailModule],
  controllers: [AppController],
  providers: [AppService,EmailService,PrismaService],
})
export class AppModule {}
