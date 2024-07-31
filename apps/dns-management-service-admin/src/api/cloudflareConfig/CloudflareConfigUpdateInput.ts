import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";

export type CloudflareConfigUpdateInput = {
  account?: AccountWhereUniqueInput | null;
  apiEmail?: string | null;
  apiKey?: string | null;
};
