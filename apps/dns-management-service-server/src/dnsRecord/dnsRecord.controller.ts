import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DnsRecordService } from "./dnsRecord.service";
import { DnsRecordControllerBase } from "./base/dnsRecord.controller.base";

@swagger.ApiTags("dnsRecords")
@common.Controller("dnsRecords")
export class DnsRecordController extends DnsRecordControllerBase {
  constructor(
    protected readonly service: DnsRecordService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
