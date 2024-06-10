import { PassportStrategy } from "@nestjs/passport"
import { ExtractJwt, Strategy } from "passport-jwt"
import { AuthService } from "../auth.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class JWTStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: "eSetDTSGtghib/3S8RCmvvtTDs0ItERmlN7sXg0nqj4=",
    });
  }
  async validate(payload:any) {
    return {
      id: payload.sub,
      email: payload.email,
      username: payload.username
    }
  }
}
