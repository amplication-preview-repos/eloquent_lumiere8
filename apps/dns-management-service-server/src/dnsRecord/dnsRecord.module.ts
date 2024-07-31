import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DnsRecordModuleBase } from "./base/dnsRecord.module.base";
import { DnsRecordService } from "./dnsRecord.service";
import { DnsRecordController } from "./dnsRecord.controller";
import { DnsRecordResolver } from "./dnsRecord.resolver";

@Module({
  imports: [DnsRecordModuleBase, forwardRef(() => AuthModule)],
  controllers: [DnsRecordController],
  providers: [DnsRecordService, DnsRecordResolver],
  exports: [DnsRecordService],
})
export class DnsRecordModule {}
