import { CloudflareConfigCreateNestedManyWithoutAccountsInput } from "./CloudflareConfigCreateNestedManyWithoutAccountsInput";
import { TenantCreateNestedManyWithoutAccountsInput } from "./TenantCreateNestedManyWithoutAccountsInput";

export type AccountCreateInput = {
  cloudflareConfigs?: CloudflareConfigCreateNestedManyWithoutAccountsInput;
  email?: string | null;
  name?: string | null;
  tenants?: TenantCreateNestedManyWithoutAccountsInput;
};
