import { DnsRecordWhereInput } from "./DnsRecordWhereInput";
import { DnsRecordOrderByInput } from "./DnsRecordOrderByInput";

export type DnsRecordFindManyArgs = {
  where?: DnsRecordWhereInput;
  orderBy?: Array<DnsRecordOrderByInput>;
  skip?: number;
  take?: number;
};
