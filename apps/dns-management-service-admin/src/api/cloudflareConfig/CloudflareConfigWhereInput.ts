import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CloudflareConfigWhereInput = {
  account?: AccountWhereUniqueInput;
  apiEmail?: StringNullableFilter;
  apiKey?: StringNullableFilter;
  id?: StringFilter;
};
