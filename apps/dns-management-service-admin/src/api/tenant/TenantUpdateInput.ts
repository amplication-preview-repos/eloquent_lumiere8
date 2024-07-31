import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { DnsRecordUpdateManyWithoutTenantsInput } from "./DnsRecordUpdateManyWithoutTenantsInput";

export type TenantUpdateInput = {
  account?: AccountWhereUniqueInput | null;
  dnsRecords?: DnsRecordUpdateManyWithoutTenantsInput;
  name?: string | null;
};
