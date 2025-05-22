const ARGS = process.argv.slice(2);

const EVENT_TYPES = [
  'CommitCommentEvent',
  'CreateEvent',
  'DeleteEvent',
  'ForkEvent',
  'GollumEvent',
  'IssueCommentEvent',
  'IssuesEvent',
  'MemberEvent',
  'PublicEvent',
  'PullRequestEvent',
  'PullRequestReviewEvent',
  'PullRequestReviewCommentEvent',
  'PullRequestReviewThreadEvent',
  'PushEvent',
  'ReleaseEvent',
  'SponsorshipEvent',
  'WatchEvent',
] as const;

// A light version of response github. 

type ResponseSignature = {
  id: string; 
  type: typeof EVENT_TYPES[number]; 
  actor: {
    id: number;
    login: string;
    display_login: string; 
    gravatar_id: string; 
    url: string;
    avatar_url: string;
  },
  repo: {
    id: number;
    name: string;
    url: string;
  },
  payload: {
    repository_id: number;
    push_id: number; 
    size: number;
    distinct_size: number; 
    ref: string;
    head: string;
    before: string;
    commits: Object[]
  }
}

if(!ARGS[0]) {
  try {
  throw new Error(
    "\x1b[31m[Error]\x1b[0m: You forgot to pass a github user. Please, check the" +
    "information and try again.");
  } catch(err) {

    if(err instanceof Error) {
      console.error(err.message);
    } else {
      console.error('Unknown Error');
    };
  }
};

try {
  // It's possible to get the ETag and store in cache. Posterior requests will 
  // Be compared by ETag, making the request only if the current ETag is different
  // From old ETag. 
  const EVENT_REQUEST = await fetch(`https://api.github.com/users/${ARGS[0]}/events`);
  const EVENTS: ResponseSignature[] = await EVENT_REQUEST.json();

  if(ARGS[1]) {
    const FILTER_EVENTS = EVENTS.filter((item) => {
      return item.type === ARGS[1];
    });
  
    if(FILTER_EVENTS.length === 0) {
      console.log(`There are not events for \x1b[34m${ARGS[1]}\x1b[0m`);
      process.exit(0);
    };
  
    for(const EVENT of FILTER_EVENTS) {
      console.log(`${ARGS[0]}  perfomed a \x1b[33m${ARGS[1]}\x1b[0m on ${EVENT.repo.name}`);
    };
  
  } else {
    for(const EVENT  of EVENTS) {
      console.log(`${ARGS[0]} perfomed a \x1b[33m${EVENT.type}\x1b[0m  on ${EVENT.repo.name}`);
    }
    process.exit(0);
  };

} catch (err) {
  console.error(err);
};

