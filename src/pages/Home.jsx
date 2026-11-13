import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import SkillsPreview from '../components/home/SkillsPreview';
import FeaturedProjects from '../components/home/FeaturedProjects';
import ResumeSection from '../components/common/ResumeSection';
import HomeCTA from '../components/home/HomeCTA';
import { PERSONAL_INFO } from '../utils/constants';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>{PERSONAL_INFO.name} | Full Stack Developer &amp; Digital Architect</title>
        <meta
          name="description"
          content="Full Stack Developer with 5+ years of experience building scalable, secure, production-ready web applications using Laravel, PHP, React.js, JavaScript, TypeScript, and modern cloud architecture."
        />
        <link rel="canonical" href="https://adityakesharwani.com/" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={`${PERSONAL_INFO.name} | Full Stack Developer`} />
        <meta
          property="og:description"
          content="Architectural technology portfolio for high-performance web systems, API engineering, ERP delivery, and enterprise cloud solutions."
        />
        <meta property="og:url" content="https://adityakesharwani.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${PERSONAL_INFO.name} | Full Stack Developer`} />
        <meta
          name="twitter:description"
          content="Full Stack Developer specializing in Laravel, PHP, React.js, and enterprise-grade digital product engineering."
        />
      </Helmet>

      <Hero />
      <SkillsPreview />
      <FeaturedProjects />
      <ResumeSection />
      <HomeCTA />
    </>
  );
}
