import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CloudflareConfigServiceBase } from "./base/cloudflareConfig.service.base";

@Injectable()
export class CloudflareConfigService extends CloudflareConfigServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
