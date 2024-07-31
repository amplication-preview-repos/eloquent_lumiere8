import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { DnsRecordCreateNestedManyWithoutTenantsInput } from "./DnsRecordCreateNestedManyWithoutTenantsInput";

export type TenantCreateInput = {
  account?: AccountWhereUniqueInput | null;
  dnsRecords?: DnsRecordCreateNestedManyWithoutTenantsInput;
  name?: string | null;
};
