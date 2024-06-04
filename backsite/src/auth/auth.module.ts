import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  controllers: [ConfigModule.forRoot(), UserModule, JwtModule.register({
    privateKey: "eSetDTSGtghib/3S8RCmvvtTDs0ItERmlN7sXg0nqj4=",
    signOptions: {
      expiresIn: '1902s',
    },
}),
PassportModule,
AuthController],
  providers: [AuthService],
})
export class AuthModule {}
