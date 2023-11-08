import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { env } from 'process';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit{
    
    async onModuleInit() {
        console.log(env.DATABASE_URL);
        
        await this.$connect()
    }

}
