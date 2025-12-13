---
slug: optimization-vs-vertical-scaling
title: 'Optimization vs. Vertical Scaling: A Curious Double Standard'
excerpt: Exploring the gap between how these decisions feel and how they actually behave, and why similar trade-offs trigger very different reactions from engineers.
pubDate: Dec 13, 2025
readTime: 666 min read
asciiArt: |
   ╭──────────────────────╮
   │   ⟨ REST API ⟩       │
   │  ═══════════════════ │
   │  GET  /users  → 200  │
   │  POST /data   → 201  │
   │  PUT  /item   → 200  │
   ╰──────────────────────╯
tags:
  - Design
  - Human
---

You’ve just watched the same demo go bad for the second time. The loader did not stop spinning for way too long after a request was made to the backend. You, with everyone else on the call, can sense the awkward silence while you impatiently wait for a new container to spin up. Your product guy fills the gap with time-stretching words, and luckily enough, the potential customer still shows interest at the end of the call. You dodged this one. After the call, you all look at the logs together: CPU spikes, throttling, then death. You know what to do, it is clear that setting up horizontal scaling is the right thing to do here. You start to explain, and the baffled product disrupts you and asks “can’t we just increase the CPU?”.

## Nobody likes a vertical scaler

We all know the drill. Increasing CPU or memory only concentrates more responsibility into a single unit, and with that increases the blast radius of every failure. You find yourself doubling resources time and time again - only to see the cost quadruples. Most importantly, vertical scaling doesn’t change the behavior of the system; it only pushes limits further away. The same bottlenecks remain, it is just a bit harder to see them, and growth continues on the same trajectory until the next spike exposes them again.

The same mechanics quietly apply to code optimization. Improving the performance of a single function increases its importance to the system while often reducing its maintainability. The gain is measurable, but local. As usage grows and new deals are signed, the system eventually hits the same CPU limits again—this time with a more complex and fragile code path at its center.

## Why do we love code optimization so much?

The real reason has very little to do with technical necessity. Yes, efficient code matters—but the attraction to optimization is far more human. In a profession where impact is often abstract and long-term, optimization offers something rare: immediate and visible craftsmanship, appreciated by others, backed by numbers, that you can confidently point to and say, *this is mine and this is good.* Who wouldn’t want to be the one in charge of enabling 10 times more requests in a single server? Who wouldn’t want to invent the next Dijkstra?

Premature optimization becomes an Achilles’ heel in many early-stage products and startups. The drive to write efficient code often misaligns with immediate business needs, where speed of iteration and clarity matter more than raw performance. Time spent optimizing paths that aren’t yet under real pressure is time not spent improving reliability, adding observability, or shipping features that validate demand. Assumptions that justified the optimization—traffic shape, data size, access patterns—are rarely stable early on. The result is code that is both harder to understand and more resistant to change, amplifying the cost of future work while providing diminishing returns as the system grows and the product shapes.

## The really tough skill to master

When I learned physics, I once heard a veteran researcher say that “great physicits simply know which forces are negligible”. This comes with a lot of experience, you start to develop the intuition as to what is more important than others - thus simplifying complex mathematical calculations. I believe this is the same for software development. With time, you begin to develop intuition on what and when to optimize. With experience and critical observation of one self, you learn to push aside your inner desire to write the most optimized code ever written, in favor of more immediate business requirements. On the other hand, you know where a bottleneck will be formed if something is done far from optimal.

And it is not enough to be able to have that intuition. You also need to be able to convey it properly to team mates and team leads. Getting that buy-in from your fellow team mates and managers is crucial to your personal success in a team, and even more crucial in passing on the knowledge and mindset to other team members. This is not an easy task with intuition. A lot of the times the person who has the intuition no longer remembers exactly what formed it and how to walk someone else step by step to the “correct” conclusion.

## What more can’t we see

If we agree that vertical scaling is often frowned upon while code optimization is treated far more kindly—despite leading to very similar outcomes in many cases—it’s worth asking what else we might be missing. What other practices do we follow simply because they’re widely accepted? Which guidelines do we repeat and enforce without fully understanding the context in which they were originally meant to apply? And if we don’t truly understand *why* a rule exists, how can we know when it’s appropriate to break it?

Take some familiar examples. Should code never repeat itself—or is duplication sometimes a reasonable trade-off for readability? Are comments always a net positive? Do we actually enjoy reading AI-generated code that explains itself line by line? These aren’t trick questions. They remind us that many of our instincts come from habit and shared culture, not from deliberate reasoning.

The point isn’t that these guidelines are wrong. Most of them exist for good reasons. The danger lies in applying them automatically, without revisiting the conditions that made them sensible in the first place. Seniority isn’t about knowing more rules—it’s about understanding which ones matter right now, which ones can be ignored, and which ones might quietly be holding you back.

Optimization isn’t bad. Vertical scaling isn’t bad. But mistaking familiar effort for real progress is—and learning to tell the difference is one of the hardest skills to develop.
