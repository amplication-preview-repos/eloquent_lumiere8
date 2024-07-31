import { CloudflareConfigWhereInput } from "./CloudflareConfigWhereInput";
import { CloudflareConfigOrderByInput } from "./CloudflareConfigOrderByInput";

export type CloudflareConfigFindManyArgs = {
  where?: CloudflareConfigWhereInput;
  orderBy?: Array<CloudflareConfigOrderByInput>;
  skip?: number;
  take?: number;
};
