import { SortOrder } from "../../util/SortOrder";

export type DnsRecordOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  tenantId?: SortOrder;
  ttl?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
