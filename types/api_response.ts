export const EVENT_TYPES = [
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


export type ApiResponse = {
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
