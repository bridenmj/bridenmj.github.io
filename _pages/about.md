---
layout: home
permalink: /
title: "Michael Briden — Applied ML Researcher"
excerpt: "Trustworthy and uncertainty-aware AI for medical forecasting, multimodal learning, and clinical data."
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

<section class="home-hero" aria-labelledby="intro-title">
  <div class="home-hero__copy">
    <p class="eyebrow">Machine learning · Biomedical research</p>
    <h1 id="intro-title">Machine learning for medical forecasting.</h1>
    <p class="home-hero__lede">I study how longitudinal and multimodal clinical data can support better predictions of wound healing, with work spanning survival analysis, generative modeling, and efficient fine-tuning.</p>
    <div class="home-actions">
      <a class="action action--primary" href="#selected-work">Explore selected work</a>
      <a class="action" href="/Michael_Briden_Resume.docx">View résumé</a>
    </div>
  </div>
  <aside class="research-index" aria-label="Research focus">
    <p class="research-index__label">Current questions</p>
    <ol>
      <li><span>01</span>How can longitudinal signals predict when a wound will heal?</li>
      <li><span>02</span>How should images, RNA, text, and proteomics be combined?</li>
      <li><span>03</span>How can models remain reliable with limited, noisy labels?</li>
    </ol>
  </aside>
</section>

<section class="home-section" id="selected-work" aria-labelledby="work-title">
  <header class="section-heading">
    <p class="eyebrow">Selected work</p>
    <h2 id="work-title">Research, built and examined</h2>
    <p>Three threads that connect methodological depth with applied biomedical questions.</p>
  </header>

  <div class="project-list">
    <article class="project-feature project-feature--wound">
      <div class="project-feature__visual" aria-hidden="true"><span class="signal signal--one"></span><span class="signal signal--two"></span><span class="signal signal--three"></span><p>Observed → forecast</p></div>
      <div class="project-feature__copy">
        <p class="project-meta">Survival analysis · Longitudinal proteomics · 2025–present</p>
        <h3>Survival modeling of chronic wound healing</h3>
        <p>Modeling patient-level healing trajectories with Cox time-varying survival models to predict healing time from longitudinal wound proteomics data.</p>
        <a class="text-link" href="/projects/wound-forecasting/">Project case study <span aria-hidden="true">→</span></a>
      </div>
    </article>

    <article class="project-feature project-feature--reverse project-feature--multimodal">
      <div class="project-feature__visual" aria-hidden="true"><span class="modality modality--image">Image</span><span class="modality modality--rna">RNA</span><span class="modality modality--text">Text</span><p>Modalities → outcome</p></div>
      <div class="project-feature__copy">
        <p class="project-meta">PEFT · Multimodal generation · 2024–present</p>
        <h3>Tell Me If It Heals</h3>
        <p>Building a parameter-efficient multimodal generative model that integrates wound images, RNA, and text to predict medical outcomes.</p>
        <a class="text-link" href="/projects/tell-me-if-it-heals/">Project case study <span aria-hidden="true">→</span></a>
      </div>
    </article>

    <article class="project-feature project-feature--representation">
      <div class="project-feature__visual" aria-hidden="true"><div class="embedding embedding--a"></div><div class="embedding embedding--b"></div><div class="embedding embedding--c"></div><p>Subjects → shared space</p></div>
      <div class="project-feature__copy">
        <p class="project-meta">EEG · Contrastive learning · Multimodal fusion</p>
        <h3>Subject-aware representation learning</h3>
        <p>Developing explainable contrastive and fusion methods for biomedical signals, including EEG analysis across subjects and multiple feature views.</p>
        <a class="text-link" href="https://github.com/bridenmj/Metacognition">View code <span aria-hidden="true">↗</span></a>
      </div>
    </article>
  </div>
</section>

<section class="home-section home-section--split" aria-labelledby="research-title">
  <div><p class="eyebrow">Selected research</p><h2 id="research-title">Methods grounded in difficult data</h2></div>
  <div class="publication-list">
    <article>
      <p class="publication-list__venue">Neurovision Workshop · CVPR 2022</p>
      <h3>Towards Metacognition: Incorporating Subject-Aware Supervised Contrastive Learning With Deep Fusion Networks to Learn Confidence</h3>
      <p>Michael Briden and Narges Norouzi</p>
      <div><a href="https://drive.google.com/file/d/1Nea9FWOAzDYEan3KPcKEUsy5JReY8eeR/view">Paper ↗</a><a href="https://github.com/bridenmj/Metacognition">Code ↗</a></div>
    </article>
    <article>
      <p class="publication-list__venue">EMBC 2023</p>
      <h3>Uniform Selection and Representation Matching: A Framework for Classifying Wound Healing Stage</h3>
      <p>Michael Briden and Narges Norouzi</p>
    </article>
    <a class="text-link" href="/publications/">View all research <span aria-hidden="true">→</span></a>
  </div>
</section>

<section class="home-section home-about" aria-labelledby="about-title">
  <p class="eyebrow">About</p>
  <div>
    <h2 id="about-title">Mathematical foundations, applied research.</h2>
    <p>I earned my Ph.D. in Computer Science from UC Santa Cruz in 2025. My dissertation focused on representation learning and generative forecasting for noisy and limited clinical data, with applications in wound healing and EEG. I previously studied mathematics with a concentration in probability and statistics.</p>
    <p><a class="text-link" href="/Michael_Briden_Resume.docx">Experience and résumé <span aria-hidden="true">→</span></a></p>
  </div>
</section>

<section class="home-contact" aria-labelledby="contact-title">
  <p class="eyebrow">Connect</p>
  <h2 id="contact-title">Interested in applied ML research and the systems behind it.</h2>
  <div class="home-contact__links">
    <a href="mailto:mbriden@ucsc.edu">Email ↗</a>
    <a href="https://github.com/bridenmj">GitHub ↗</a>
    <a href="https://www.linkedin.com/in/michaelbriden/">LinkedIn ↗</a>
    <a href="/Michael_Briden_Resume.docx">Résumé →</a>
  </div>
</section>
