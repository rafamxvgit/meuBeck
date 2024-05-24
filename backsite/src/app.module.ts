import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProfessorModule } from './professor/professor.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [UserModule, ProfessorModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
