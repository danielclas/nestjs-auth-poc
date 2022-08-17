import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService, private readonly jwtService: JwtService){}

    async validateUser(username: string, pass: string) {
        const user = await this.userService.findOne(username);
        if(user && user.password === pass){
            const {password, ...result} = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.userId};
        return {
            accessToken: this.jwtService.sign(payload)
        }
    }
}
