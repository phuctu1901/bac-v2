import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MailService } from 'src/services/mail.service';

@Module({
  imports: [ConfigModule],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
