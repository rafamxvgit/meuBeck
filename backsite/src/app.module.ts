import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProfessorModule } from './professor/professor.module';
import { PostModule } from './post/post.module';
import { AuthModule } from './auth/auth.module';
import { JWTStrategy } from './auth/strategies/jwt.strategy';

@Module({
  imports: [UserModule, ProfessorModule, PostModule, AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService, JWTStrategy],
})
export class AppModule {}
