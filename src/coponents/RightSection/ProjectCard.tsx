import React from 'react';
import { GenericObject } from '../../types';

interface ProjectCardProps {
  project: GenericObject;
}

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <div className="project-card card large-radius">
      <h4>{props.project.name}</h4>
      <p className="mt-20">{props.project.short}</p>
    </div>
  )
}

export default ProjectCard;
