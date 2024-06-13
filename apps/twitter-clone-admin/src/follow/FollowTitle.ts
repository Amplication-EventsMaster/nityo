import { Follow as TFollow } from "../api/follow/Follow";

export const FOLLOW_TITLE_FIELD = "comment";

export const FollowTitle = (record: TFollow): string => {
  return record.comment?.toString() || String(record.id);
};
