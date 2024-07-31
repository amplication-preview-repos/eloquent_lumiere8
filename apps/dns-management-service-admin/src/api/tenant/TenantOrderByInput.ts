import { SortOrder } from "../../util/SortOrder";

export type TenantOrderByInput = {
  accountId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
