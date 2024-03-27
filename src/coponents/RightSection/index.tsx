import React from 'react';
import './rightSection.scss'
import { GenericObject } from '../../types';
import ProjectCard from './ProjectCard';

interface RightSectionProps {
  sectionData: GenericObject;
}

const RightSection = (props: RightSectionProps) => {
  return (
    <div className="right-section">
      <h2 className="title">{props.sectionData.intro.title}</h2>
      <p className="mt-20">{props.sectionData.intro.description}</p>
      <h2 className="mt-50 title">{props.sectionData.projects.title}</h2>
      <div className="project-cards">
        {
          (props.sectionData.projects.articles ?? []).map((article: GenericObject) => (
            <ProjectCard project={article} />
          ))
        }
      </div>
    </div>
  )
}

export default RightSection;
