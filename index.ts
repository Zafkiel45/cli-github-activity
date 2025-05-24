import type { ApiResponse } from "./types/api_response";
import { EVENT_TYPES } from "./types/api_response";
import { loopOverActivity } from "./utils/loop_over_activity";
import { yellowTextColor, redTextColor } from "./utils/paint_texts";

const ARGS = process.argv.slice(2);

function showEvents() {
  for (const EVENT of EVENT_TYPES) {
    console.log(EVENT);
  }
  process.exit(0);
}

async function getActivity() {
  if (!ARGS[0]) {
    throw new Error(`${redTextColor("[ERROR]")}: You forgot to pass a github user. Please, check the` + 
      "information and try again."
    );
  };

  try {
    // It's possible to get the ETag and store in cache. Posterior requests will
    // Be compared by ETag, making the request only if the current ETag is different
    // From old ETag.
    const EVENT_REQUEST = await fetch(`https://api.github.com/users/${ARGS[0]}/events`);
    const EVENTS: ApiResponse[] = await EVENT_REQUEST.json();

    if (ARGS[1]) {
      const FILTER_EVENTS = EVENTS.filter((item) => {
        return item.type === ARGS[1];
      });

      if (FILTER_EVENTS.length === 0) {
        console.log(`There are not events for ${yellowTextColor(ARGS[1])}`);
        process.exit(0);
      }

      loopOverActivity(ARGS[0], FILTER_EVENTS);
    } else {
      loopOverActivity(ARGS[0], EVENTS);
      process.exit(0);
    }
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error("Unknown Error");
    }
  }
}

if (ARGS[0] === "event") showEvents();

getActivity();
