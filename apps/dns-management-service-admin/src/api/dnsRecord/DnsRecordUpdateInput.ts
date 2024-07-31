import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type DnsRecordUpdateInput = {
  content?: string | null;
  name?: string | null;
  tenant?: TenantWhereUniqueInput | null;
  ttl?: number | null;
  typeField?: string | null;
};
