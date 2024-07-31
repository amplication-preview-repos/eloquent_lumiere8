import { Account } from "../account/Account";

export type CloudflareConfig = {
  account?: Account | null;
  apiEmail: string | null;
  apiKey: string | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
