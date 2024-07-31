import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";

export type CloudflareConfigCreateInput = {
  account?: AccountWhereUniqueInput | null;
  apiEmail?: string | null;
  apiKey?: string | null;
};
