import { CloudflareConfigUpdateManyWithoutAccountsInput } from "./CloudflareConfigUpdateManyWithoutAccountsInput";
import { TenantUpdateManyWithoutAccountsInput } from "./TenantUpdateManyWithoutAccountsInput";

export type AccountUpdateInput = {
  cloudflareConfigs?: CloudflareConfigUpdateManyWithoutAccountsInput;
  email?: string | null;
  name?: string | null;
  tenants?: TenantUpdateManyWithoutAccountsInput;
};
