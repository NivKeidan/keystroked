---
slug: optimization-vs-vertical-scaling
title: Why Code Optimization Is the Vertical Scaling We Pretend Is Fine
underlying: Great engineering judgment is about resisting locally satisfying improvements (vertical scaling, micro-optimizations, dogmatic rules) in favor of systemic, context-aware decisions.
excerpt: Code optimization is often treated as thoughtful craftsmanship, while vertical scaling is dismissed as a shortcut. That difference has less to do with outcomes and more to do with how we value effort. This post is about learning to recognize that bias, and knowing when improvement is just effort, not progress.
pubDate: Dec 13, 2025
readTime: 6 min read
asciiArt: |
   ╭──────────────────────╮
   │   ⟨ REST API ⟩       │
   │  ═══════════════════ │
   │  GET  /users  → 200  │
   │  POST /data   → 201  │
   │  PUT  /item   → 200  │
   ╰──────────────────────╯
tags:
  - Architecture
  - Philosophy
  - Humans
---

You’ve just watched the same demo go bad for the second time. The loader wouldn't stop spinning, hanging awkwardly after the request was made to the backend. You and everyone else on the call feel the awkward silence as you impatiently wait for a new container to spin up. Your product manager fills the vacuum with time-buying words, and luckily enough, the potential customer still shows interest at the end of the call. You dodged this one.

After the call, you all look at the logs together: CPU spikes, throttling, then death. You know what needs to be done, this has been sitting in your mind since the previous demo that failed. You start explaining your proposed solution, but the baffled PM disrupts you and asks “can’t we just increase the CPU?”.
This gentle moment isn’t really about CPU or containers. It’s about choosing the kind of problems we postpone — and the ones we pretend we’ve solved.

## Capacity Without Change

We all know the drill. Increasing CPU or memory only concentrates more responsibility into a single unit, and with that increases the blast radius of every failure. It doesn’t make the system more resilient or better structured; it simply allows it to fail later, and often more spectacularly. Vertical scaling gives the illusion of progress while preserving the same failure mode.

This pattern — improving capacity without changing behavior — shows up everywhere in engineering. What vertical scaling does to infrastructure, optimization does to code. By making a specific path faster or more efficient, we may allow the system to handle more load and respond a bit faster — but the underlying structure remains unchanged. Just like vertical scaling, we delay the moment of failure rather than altering its shape, pushing hard questions about architecture, ownership, and flow further down the road.

## So, why do we over-value code optimization?

The real reason we appreciate code optimization has very little to do, most of the time, with technical necessity. Yes, efficient code matters—but the attraction runs deeper than performance metrics. Optimization is one of the rare moments in software development where the work itself is intrinsically satisfying. It demands that you dismantle a problem, understand it at a fundamental level, and reason about constraints, trade-offs, and edge cases. There are no shortcuts. You can’t copy-paste your way through it. You have to invent or discover something.  It’s craftsmanship in the purest sense: focus, creativity, and deep understanding converging into a tangible improvement.

That satisfaction, however, carries a subtle risk. We are wired to value work that feels hard, time-consuming, and mentally demanding. The more effort we invest, the more meaningful the outcome appears—regardless of its actual impact. This effort bias makes optimized code feel *more valuable* than other alternatives. Our desire to go through the satisfying process causes us to push towards this solution. But effort or satisfaction is not the same as progress. A solution can be intellectually impressive and yet misaligned with what the system, or the business, actually needs.

## The really tough skill to master

One of the hardest skills to develop as an engineer is knowing what *not* to do — even when you clearly could or want to.

I once heard a veteran physics researcher say:
> great physicists know which forces to neglect in order to simplify a complex problem.

That knowledge doesn’t come from formulas alone; it comes from experience. From seeing, in different contexts and problems, which details matter and which ones only distract you from the problem you’re actually trying to solve.

Software development is no different. With time, you develop an intuition for where optimization will truly pay off, and where it will merely distract the team trying to make the system better. You learn to resist the urge to write the most optimized code you can, and instead focus on what the system and the business needs *right now*: be it product validation, maintainability, or simply focusing on other aspects of the system.

Alas, solely having this intuition isn’t sufficient as well. You also need to be able to communicate it. Convincing teammates and leads that *not* improving something is the right call is often harder than proposing an optimization. Intuition is difficult to transfer, especially when the person who has it no longer remembers all the small experiences that shaped it. On the other hand, passing on that judgment — and the underlying viewpoint  — is essential for building strong teams and healthy engineering culture. By sharing the reasoning, you will see the execution of these ideas by your peers become a reality, hopefully sooner than later.


## What more can’t we see

If vertical scaling is easily dismissed while code optimization is highly valued — despite leading to similar outcomes — it’s worth asking what other familiar efforts we routinely mistake for progress.

Take some familiar examples. Should code never repeat itself, or is duplication sometimes a reasonable trade-off for readability and flexibility? Are comments always a net positive? Do you actually enjoy reading AI-generated code that explains itself line by line? Does higher test coverage always mean higher confidence, or can it hide brittle tests that merely lock in existing behavior?
These aren’t trick questions. They highlight how often our instincts are shaped by habit and shared culture rather than deliberate reasoning.

## Progress through Awareness

Optimization isn’t bad. Vertical scaling isn’t bad. But mistaking familiar effort for real progress is, same as leaning towards a solution you would enjoy to execut. Learning to tell the difference is one of the hardest skills to develop. Doing so requires more than technical knowledge; it demands the ability to observe our own instincts and question why a solution feels right. Good engineering judgment comes from recognizing our own biases, and accounting for it deliberately rather than letting it quietly steer our decisions.
