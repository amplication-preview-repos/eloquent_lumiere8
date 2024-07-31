import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type DnsRecordWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  tenant?: TenantWhereUniqueInput;
  ttl?: IntNullableFilter;
  typeField?: StringNullableFilter;
};
