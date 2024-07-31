import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DnsRecordResolverBase } from "./base/dnsRecord.resolver.base";
import { DnsRecord } from "./base/DnsRecord";
import { DnsRecordService } from "./dnsRecord.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DnsRecord)
export class DnsRecordResolver extends DnsRecordResolverBase {
  constructor(
    protected readonly service: DnsRecordService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
