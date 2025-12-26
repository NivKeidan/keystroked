---
slug: optimization-vs-vertical-scaling
title: Your Elegant Code is Just Vertical Scaling in disguise
underlying: Great engineering judgment is about resisting locally satisfying improvements (vertical scaling, micro-optimizations, dogmatic rules) in favor of systemic, context-aware decisions.
excerpt: Vertical scaling and code optimization seem worlds apart, but they share a common flaw: they often lead to short-term fixes that don't address the underlying problem. This post takes a deep dive into the biases that trick us into thinking we're solving real problems, and how to navigate these waters towards progress.
pubDate: Dec 17, 2025
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

You’ve just watched the same demo go bad for the second time. The loader is spinning for just a bit too much time, hanging awkwardly after the request was made to the backend. You and everyone else on the call exchange looks as you impatiently wait for the response to come through. Your product manager fills the vacuum with time-buying words, and luckily enough, the potential customer still shows interest at the end of the call. You dodged this one.

After the call, you all look at the logs and dashboards together: memory pressure steadily climbing and then container death. You know what needs to be done, this has been sitting in your mind since the previous demo that failed. You start outlining a stable, long-term solution when the PM naively suggests "Can't we just assign more memory to the container?". You are asked about the timeline for such a change, and judging by the manager's response to your answer, you can feel the wind changing direction...

## Capacity Without Change

We all know the drill. Vertical scaling is a local optimization: it increases capacity without touching the structure of the system itself. Nothing about how work flows, how responsibilities are divided, or where bottlenecks form actually changes. It’s inherently short-term and narrowly scoped, bounded by physical limits and diminishing returns. At best, it buys time. At worst, it concentrates risk, increases blast radius, and delays the moment when the system’s real constraints have to be confronted. That’s why it often feels like a compromise — something to justify, not celebrate.

These considerations are common talking points for any software development team. We all want to resolve a problem, and never face it again, forgetting it was ever an urgent issue. Short-term resolutions, local maximums and a single-component viewpoint are usually not the strengths of a solution we use to convince others of. Vertical scaling stands out as an example of this kind of anti pattern, but what about... improving code performance?

It’s worth looking at code optimization through the same kind of lens. It is a single component we are narrowly looking at, forgetting about the entire system around it. We sometimes make the now-super-efficient code snippet harder to maintain, increasing our dependency on it, adding even more scrutiny towards any decision that requires altering it. For most cases, we are taking one step further towards a bigger and more urgent blast in the future. The returns on such improvements are mathematically capped. The harder questions — about architecture, ownership, and flow — remain deferred.

And yet, we rarely talk about these two in the same way. Vertical scaling is often treated as a short-term trade-off while code optimization is regarded as thoughtful craftsmanship, a sign of care and technical excellence. As a software engineer, I often take pride in benchmarking, measuring performance, basing my decisions on data, and here I found myself choosing one solution over the other, without actually thinking - what would offer more progress?

## So, why do we value code optimization?

The real reason we appreciate code optimization has very little to do with technical necessity. Yes, efficient code matters—but the attraction runs deeper than performance metrics. Optimization is one of the rare moments in software development where the work itself is intrinsically satisfying. It demands that you dismantle a problem, understand it at a fundamental level, and reason about constraints, trade-offs, and edge cases. It’s craftsmanship in the purest sense: focus, creativity, and deep understanding converging into a tangible improvement.

That satisfaction, however, can be misleading. We are wired to value work that feels hard, time-consuming, and mentally demanding. The more effort we invest, the more meaningful the outcome appears—regardless of its actual impact. This effort bias makes optimized code feel *more valuable* than other alternatives. Our desire to go through the satisfying process causes us to push towards this solution. But effort or satisfaction is not the same as progress. A solution can be intellectually impressive and yet misaligned with what the system, or the business, actually needs.

## What more can’t we see

If vertical scaling is easily dismissed while code optimization is often valued — despite leading to similar outcomes — it’s worth asking what other familiar efforts we routinely mistake for progress.

Consider the following questions. Should code *never* repeat itself, or is duplication sometimes a reasonable trade-off for readability and flexibility? Are comments always a net positive? Does higher test coverage always mean higher confidence, or can it hide brittle tests that merely lock in existing behavior?
These aren’t trick questions. They highlight how often our instincts are shaped by habit and shared culture rather than deliberate reasoning.

## The really tough skill to master

One of the hardest skills to develop as an engineer is knowing what *not* to do — even when you clearly could or want to.

I once heard a veteran physics researcher say:
> Great physicists know which forces to neglect in order to simplify a complex problem.

That knowledge doesn’t come from formulas alone; it comes from experience. From seeing, in different contexts and problems, which details matter and which ones only distract you from the problem you’re actually trying to solve.

Software development is no different. With time, you develop an intuition for which interventions actually change a system’s trajectory — and which ones merely make the current shape last a bit longer. Sometimes that means resisting an optimization, other times it could mean to actually increase the CPU of a container. The skill isn’t in knowing *how* to improve things, but in recognizing when an effort is worth investing time for, and when it is a distraction from the problem the system, business or product need solved *at this moment*.

## Spreading the message

Becoming aware of how these biases affect your own decision making is only the first step. A non trivial one, but nonetheless. The next step is to help others notice them too. Arguing *against* an improvement — whether it’s an optimization, a refactor, or a scaling move — is often more difficult than proposing one. Intuition alone rarely convinces anyone, and articulating the reasoning behind it often relies on accumulated experiences that are hard to retrieve explicitly.

This is where judgment turns into culture. Rather than defending why a specific change was deferred, the goal is to make the context visible: what stage the product is in, what the business is optimizing for right now, and which constraints actually matter. By framing decisions through that lens, you give others a way to evaluate future choices on their own. Over time, that shared understanding allows teams to align naturally — not because they follow rules, but because they learn how to recognize what deserves attention in a given moment.

## Progress through Awareness

Real progress rarely comes from doing more; it comes from seeing more clearly. It is not about a specific improvement or a clever solution to a bottleneck. It emerges when we learn to recognize our own thought patterns and biases that guide our decisions. That awareness allows us to direct effort toward what actually matters and build the right thing. And once we master the skill of teaching others to do the same - we become truly closer to 10x.
