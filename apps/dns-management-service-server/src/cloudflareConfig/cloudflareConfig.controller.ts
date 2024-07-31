import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CloudflareConfigService } from "./cloudflareConfig.service";
import { CloudflareConfigControllerBase } from "./base/cloudflareConfig.controller.base";

@swagger.ApiTags("cloudflareConfigs")
@common.Controller("cloudflareConfigs")
export class CloudflareConfigController extends CloudflareConfigControllerBase {
  constructor(
    protected readonly service: CloudflareConfigService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
