import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DnsRecordServiceBase } from "./base/dnsRecord.service.base";

@Injectable()
export class DnsRecordService extends DnsRecordServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
