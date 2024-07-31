import { CloudflareConfig } from "../cloudflareConfig/CloudflareConfig";
import { Tenant } from "../tenant/Tenant";

export type Account = {
  cloudflareConfigs?: Array<CloudflareConfig>;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  tenants?: Array<Tenant>;
  updatedAt: Date;
};
