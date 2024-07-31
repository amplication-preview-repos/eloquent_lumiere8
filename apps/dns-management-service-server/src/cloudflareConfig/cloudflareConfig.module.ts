import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CloudflareConfigModuleBase } from "./base/cloudflareConfig.module.base";
import { CloudflareConfigService } from "./cloudflareConfig.service";
import { CloudflareConfigController } from "./cloudflareConfig.controller";
import { CloudflareConfigResolver } from "./cloudflareConfig.resolver";

@Module({
  imports: [CloudflareConfigModuleBase, forwardRef(() => AuthModule)],
  controllers: [CloudflareConfigController],
  providers: [CloudflareConfigService, CloudflareConfigResolver],
  exports: [CloudflareConfigService],
})
export class CloudflareConfigModule {}
