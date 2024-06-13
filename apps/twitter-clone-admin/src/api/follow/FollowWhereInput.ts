import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type FollowWhereInput = {
  comment?: StringNullableFilter;
  follower?: StringNullableFilter;
  following?: StringNullableFilter;
  id?: StringFilter;
};
