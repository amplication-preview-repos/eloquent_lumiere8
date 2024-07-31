import { DnsRecord as TDnsRecord } from "../api/dnsRecord/DnsRecord";

export const DNSRECORD_TITLE_FIELD = "name";

export const DnsRecordTitle = (record: TDnsRecord): string => {
  return record.name?.toString() || String(record.id);
};
