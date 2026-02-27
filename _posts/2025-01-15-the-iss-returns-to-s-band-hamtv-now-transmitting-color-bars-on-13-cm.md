---
layout: post
title: "The ISS Returns to S-Band: HamTV Now Transmitting Color Bars on 13 cm"
date: 2026-01-15T10:00:00.000-08:00
image: /assets/media/screenshot_2026-01-04_02-56-15.png
tags:
  - ISS
  - HamTV
  - S-Band
  - SSTV
---



Since just before Christmas 2025, the HamTV experiment aboard the International Space Station has resumed active video transmissions on the 13 cm amateur radio band. Where the downlink had previously been limited to a black screen, the signal at 2395 MHz is now carrying full-colour test pattern video.

This change may seem modest at first glance. It isn’t.

For radio amateurs, this represents a stable, continuous, real-world S-band signal from a crewed spacecraft in low Earth orbit. It provides a practical and repeatable opportunity to experiment with microwave-band reception, satellite tracking, RF chain design, and digital video demodulation—using readily available hardware and open-source software that actually rewards the effort.

## **Why HamTV on S-Band Matters**

HamTV has always been about more than video. It is one of the few opportunities amateurs have to work with:

* A microwave downlink from LEO
* A known, repeatable transmitter
* A signal with real bandwidth and modulation complexity
* A platform that may eventually carry live or recorded video content, but today already provides a meaningful signal worth copying

Unlike many brief or experimental payloads, the ISS offers long-term continuity. That makes it an ideal learning platform—not just for reception, but for developing skills that translate directly into broader satellite and microwave work.

If you can receive HamTV, you are learning how to:

* Track fast-moving spacecraft accurately
* Build and characterize low-noise S-band RF chains
* Work with preamplifiers, filters, and feed systems
* Demodulate and view real digital video signals
* Use Software Defined Radios (SDRs) as serious RF instruments

Those skills scale.

## **Open-Source Software Makes This Accessible**

One of the most encouraging aspects of the current HamTV transmissions is how accessible the signal has become from the software side.

There is open-source software available today that can:

* Demodulate the HamTV signal
* Decode the video stream
* Display it live or from recorded IQ data
* Output to common media players and analysis tools

This removes a major historical barrier. You no longer need proprietary hardware or closed software stacks to participate meaningfully. A modest SDR, a well-designed RF front end, and freely available tools are enough to get started.

## **A Practical Learning Platform in Orbit**

The ISS is not just a target. It is a teaching tool.

HamTV allows amateurs to:

* Develop confidence working at S-band and above
* Experiment with antenna design and polarization
* Understand link budgets and noise figure the hard way
* Learn what actually matters in a microwave receive system

Most importantly, it allows experimentation to happen incrementally. You can start with a minimal setup, improve one component at a time, and see the results immediately on a real signal.

## **What’s Coming Next on AMSAT-CA**

This article is the first in a short, focused series aimed at helping amateurs move from curiosity to capability.

Upcoming posts will include:

1. **A Minimally Viable HamTV Receive Station**
   Experiments using easily obtained antennas, low-noise amplifiers, and simple RF chains to demonstrate what is *just enough* to receive the signal.
2. **Selecting and Using a Software Defined Radio for S-Band Reception**
   A practical discussion of SDR selection, front-end considerations, sampling bandwidth, dynamic range, frequency stability, and how SDR choice affects real-world microwave performance.
3. **Demodulating and Displaying the Video**
   A straightforward walkthrough of software tools, signal recording, demodulation steps, and video display—no black boxes.
4. **Tracking and Automation Pathways**
   Several approaches to tracking the ISS at S-band, from manual methods to semi- and fully-automated solutions, using commonly available tools.

Along the way, we’ll share real results with real hardware, so others can decide for themselves how far they want to push their experiments.

## **The Bigger Picture**

The goal here isn’t just to receive colour bars.

It’s to lower the barrier to microwave experimentation, spark repeat engagement, and build practical skills across the amateur community. These short primers will eventually be consolidated into a complete technical paper documenting what was learned, what worked, what didn’t, and how others can build on it.

HamTV on the ISS gives us a rare thing:
A persistent, meaningful microwave experiment that amateurs can grow with over time.

If you’ve ever been curious about S-band, this is the moment.

Stay tuned—pun fully intended—as we find out just how interesting a test pattern can be.
