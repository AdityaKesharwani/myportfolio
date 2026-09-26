import React from 'react';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import ExperienceCard from './ExperienceCard';
import { EXPERIENCES } from '../../data/experience';

export default function ExperienceTimeline() {
  return (
    <section className="w-100 py-5 bg-surface border-bottom border-atelier" id="timeline">
      <Container>
        <SectionTitle
          indexTag="CAREER TIMELINE // CHRONOLOGICAL"
          title="Building. Improving. Delivering."
          description="Over 5+ years, I have worked across software development, backend engineering, API development, enterprise applications, and cloud deployment."
        />

        <div className="d-flex flex-column gap-4 pt-3">
          {EXPERIENCES.map((exp) => (
            <ExperienceCard key={exp.id} exp={exp} />
          ))}
        </div>
      </Container>
    </section>
  );
}
