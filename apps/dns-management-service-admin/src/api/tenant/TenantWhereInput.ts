import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { DnsRecordListRelationFilter } from "../dnsRecord/DnsRecordListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TenantWhereInput = {
  account?: AccountWhereUniqueInput;
  dnsRecords?: DnsRecordListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
