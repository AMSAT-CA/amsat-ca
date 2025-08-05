---
layout: post
title: "Starting Your Satellite Journey: Downloading Weather Images from Space"
date: 2025-08-04T12:00:00.000-07:00
image: https://www.nesdis.noaa.gov/s3/styles/webp/s3/migrated/NOAA-15-Cane.JPG.webp
tags:
  - Weather
  - Satellite
  - Education
---
Ever looked up and wondered what Earth looks like from space, right now? With just a few accessible tools, you can receive live imagery from orbiting weather satellites. This isn’t just a cool trick. It’s one of the best ways to begin exploring satellite communications and radio science.

**The Software: SatDump**

The heart of this process is SatDump, an open-source decoder and visualizer that supports a wide variety of low Earth orbit (LEO) satellites. Among these are the NOAA-15 and NOAA-19 satellites (broadcasting analog APT), and the newer digital Meteor M2-3 and Meteor M2-4 satellites (broadcasting high-resolution LRPT). All of them transmit in the 137 MHz VHF weather satellite band, making them ideal for hobbyist reception.

With SatDump, you can decode their signals into live Earth images without an internet connection. The image below was captured using SatDump from Meteor M2-4, showing cloud formations over North America. It was received using only a modest antenna and a budget SDR.

**The Hardware: Compact, Affordable, Powerful**

You don’t need a satellite dish or professional lab gear. A USB software-defined radio like the AirSpy R2 is ideal for the task. It offers high sensitivity, fast tuning, and good dynamic range for around $200 CAD.

The antenna is just as important. A VHF turnstile antenna, either home-built or commercially made, provides excellent reception of 137 MHz signals. These antennas work especially well for the polar orbits of NOAA and Meteor satellites. They offer near-omnidirectional gain and circular polarization, which is critical for decoding satellite passes as they rise and fall over the horizon.

To significantly improve reception quality, add a low-noise preamplifier with a 137 MHz bandpass filter at the antenna feedpoint. This reduces coaxial losses and blocks out-of-band interference. It's especially helpful in urban areas, where strong FM radio and pager signals can easily swamp weaker satellite signals. With a filtered LNA mounted at the antenna, even short low-elevation passes can yield clear and detailed imagery.

**Currently Active Weather Satellites on 137 MHz (as of July 2025):**

Satellite - Frequency (MHz) - Modulation - Notes

NOAA-15 - 137.620 MHz - APT - Analog, degraded but still usable

NOAA-19 - 137.100 MHz - APT - Analog, main US legacy satellite

Meteor M2-3 - 137.900 MHz - LRPT - Digital QPSK, high-resolution imagery

Meteor M2-4 - 137.100 MHz (shared) - LRPT - Recently activated, excellent quality

*\*Note: NOAA-18 has been decommissioned and is no longer transmitting APT.\**

**Why This Matters**

This is more than a fun project. It introduces you to RF systems, decoding, orbital prediction, and signal processing. These are the same skills used in more advanced amateur satellite operations, such as tracking CubeSats or communicating through voice transponders.

**Get Started Today**

Install SatDump, plug in your SDR, and point your antenna toward the sky. Within minutes, you can begin capturing and decoding live signals from space.

AMSAT-CA encourages this kind of exploration as a gateway into the world of satellite operations. Every signal received builds knowledge, confidence, and connection with the broader space communications community.
