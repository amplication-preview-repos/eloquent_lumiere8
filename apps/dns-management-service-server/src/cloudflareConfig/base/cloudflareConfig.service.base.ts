/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  CloudflareConfig as PrismaCloudflareConfig,
  Account as PrismaAccount,
} from "@prisma/client";

export class CloudflareConfigServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.CloudflareConfigCountArgs, "select">
  ): Promise<number> {
    return this.prisma.cloudflareConfig.count(args);
  }

  async cloudflareConfigs(
    args: Prisma.CloudflareConfigFindManyArgs
  ): Promise<PrismaCloudflareConfig[]> {
    return this.prisma.cloudflareConfig.findMany(args);
  }
  async cloudflareConfig(
    args: Prisma.CloudflareConfigFindUniqueArgs
  ): Promise<PrismaCloudflareConfig | null> {
    return this.prisma.cloudflareConfig.findUnique(args);
  }
  async createCloudflareConfig(
    args: Prisma.CloudflareConfigCreateArgs
  ): Promise<PrismaCloudflareConfig> {
    return this.prisma.cloudflareConfig.create(args);
  }
  async updateCloudflareConfig(
    args: Prisma.CloudflareConfigUpdateArgs
  ): Promise<PrismaCloudflareConfig> {
    return this.prisma.cloudflareConfig.update(args);
  }
  async deleteCloudflareConfig(
    args: Prisma.CloudflareConfigDeleteArgs
  ): Promise<PrismaCloudflareConfig> {
    return this.prisma.cloudflareConfig.delete(args);
  }

  async getAccount(parentId: string): Promise<PrismaAccount | null> {
    return this.prisma.cloudflareConfig
      .findUnique({
        where: { id: parentId },
      })
      .account();
  }
}
