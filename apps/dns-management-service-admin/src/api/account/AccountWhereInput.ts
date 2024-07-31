import { CloudflareConfigListRelationFilter } from "../cloudflareConfig/CloudflareConfigListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TenantListRelationFilter } from "../tenant/TenantListRelationFilter";

export type AccountWhereInput = {
  cloudflareConfigs?: CloudflareConfigListRelationFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  tenants?: TenantListRelationFilter;
};
