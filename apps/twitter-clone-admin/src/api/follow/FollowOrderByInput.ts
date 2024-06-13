import { SortOrder } from "../../util/SortOrder";

export type FollowOrderByInput = {
  comment?: SortOrder;
  createdAt?: SortOrder;
  follower?: SortOrder;
  following?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
