import React from 'react';
import { ReactComponent as ReadMore} from '../../assets/svgs/moreIcon.svg'
import { GenericObject } from '../../types';
import { Link } from 'react-router-dom';
import Image from '../common/Image';

interface ProjectCardProps {
  project: GenericObject;
}

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <div className="project-card card large-radius">
      <div className="content-section">
        <Link to={`/article/${props.project.name.toLowerCase().split(" ").join("-")}`}>
          <h4 className="project-title">{props.project.name}</h4>
        </Link>
        <p className="mt-20">{props.project.short}</p>
      </div>
      <Image src={props.project.imageUrl} className="banner" />
      {/* <img className="banner" src={props.project.imageUrl} alt={`Banner for ${props.project.name}`} /> */}
      <p className="read-more">
        <a href="https://google.com" target="_self">
          <ReadMore />
        </a>
      </p>
    </div>
  )
}

export default ProjectCard;
