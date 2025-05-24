import type { ApiResponse } from "../types/api_response";
import { yellowTextColor } from "./paint_texts";

export function loopOverActivity(user: string, activities: ApiResponse[]) {
  for (const EVENT of activities) {
    console.log(`${user} perfomed a ${yellowTextColor(EVENT.type)}  on ${EVENT.repo.name}`);
  }
}
