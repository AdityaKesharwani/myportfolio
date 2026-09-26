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
          content="Full Stack Developer with 5+ years of experience building scalable, secure and production-ready web applications using Laravel, PHP, React.js, JavaScript, TypeScript and modern cloud technologies."
        />
        <meta property="og:title" content={`${PERSONAL_INFO.name} | Full Stack Developer`} />
        <meta
          property="og:description"
          content="Architectural tech portfolio showcasing high-performance web systems, APIs, and enterprise cloud applications."
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
