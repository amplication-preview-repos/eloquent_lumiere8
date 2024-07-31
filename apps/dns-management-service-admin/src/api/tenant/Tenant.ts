import { Account } from "../account/Account";
import { DnsRecord } from "../dnsRecord/DnsRecord";

export type Tenant = {
  account?: Account | null;
  createdAt: Date;
  dnsRecords?: Array<DnsRecord>;
  id: string;
  name: string | null;
  updatedAt: Date;
};
