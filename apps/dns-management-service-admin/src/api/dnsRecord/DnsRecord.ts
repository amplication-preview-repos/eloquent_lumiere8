import { Tenant } from "../tenant/Tenant";

export type DnsRecord = {
  content: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  tenant?: Tenant | null;
  ttl: number | null;
  typeField: string | null;
  updatedAt: Date;
};
