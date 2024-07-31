import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CloudflareConfigResolverBase } from "./base/cloudflareConfig.resolver.base";
import { CloudflareConfig } from "./base/CloudflareConfig";
import { CloudflareConfigService } from "./cloudflareConfig.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CloudflareConfig)
export class CloudflareConfigResolver extends CloudflareConfigResolverBase {
  constructor(
    protected readonly service: CloudflareConfigService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
