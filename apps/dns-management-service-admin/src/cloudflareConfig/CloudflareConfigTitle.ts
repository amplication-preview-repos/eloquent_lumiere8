import { CloudflareConfig as TCloudflareConfig } from "../api/cloudflareConfig/CloudflareConfig";

export const CLOUDFLARECONFIG_TITLE_FIELD = "apiKey";

export const CloudflareConfigTitle = (record: TCloudflareConfig): string => {
  return record.apiKey?.toString() || String(record.id);
};
