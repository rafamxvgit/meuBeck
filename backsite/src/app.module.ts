import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProfessorModule } from './professor/professor.module';

@Module({
  imports: [UserModule, ProfessorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
