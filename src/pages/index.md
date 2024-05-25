---
notitle: true
is: forgetting something
title: Amey
description: Hello. It's me.
headInject: |
    <link rel="alternate" type="application/atom+xml" title="Amey in the blog" href="/in/blog.xml" />
---

{% assign hello = deets.greatings | random %}

# {{hello.hello}}! 👋 {style="margin-block-end: 0" class="needstitle"}

<sup id="needslang">{{hello.language}}</sup> {style="margin-block-start: 0"}

I'm Amey, a Ph.D. student in cryptography at the Department of Computer Science & Engineering at the University of Connecticut advised by [Dr. Benjamin Fuller](https://benjamin-fuller.uconn.edu/). 

I am interested in building fast & secure tools for noisy cryptography.
