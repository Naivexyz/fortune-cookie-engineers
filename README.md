# Fortune Cookie Funnies for Engineers

[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a.svg)](https://make.fun/bounty/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a/Naivexyz/fortune-cookie-engineers/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a/Naivexyz/fortune-cookie-engineers/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a)

An entry for the [Fortune Cookie Funnies for Engineers](https://make.fun/bounty/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a) bounty on [make.fun](https://make.fun): the funniest one-line fortune cookie message for a software engineer, 120 characters or fewer.

## The fortune

> Your next deploy will succeed on the first try, and you will spend the afternoon waiting for it to fail.

A deploy that succeeds on the first try is the scariest kind — the engineer spends the afternoon bracing for the failure that has not arrived yet. Success, not failure, is the punchline. Short, declarative, fortune-cookie voice; the twist comes straight from the engineer's world of deploys, and the funniest word ("fail") sits at the end.

## How it works

`main.ts` runs deterministically with no network, no input and no clock. It writes the single fortune line to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` when set, for local checks) and prints exactly that line to stdout.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/fc-eng-out node main.ts
cat /tmp/fc-eng-out/entry.txt
```
