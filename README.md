# github-activity

clone the repository:
```bash
git clone https://github.com/Zafkiel45/cli-github-activity
```
To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.2.1. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

# How to use:

You only need a github username, and optinally, a specific event of github. 
```bash
bun run index.ts <username> 
```
You wull see on cmd a list of all events of `user`. Optionally, you can filter the events by `events`: 
```bash
bun run index.ts <username> "PushEvent"
```

#  Events:

You can access a list of all events avaliables to use running the following command: 
```bash
bun run index.ts events
```
You will see something like:
```bash
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
```
