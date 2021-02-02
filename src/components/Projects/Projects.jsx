import React from 'react';
import Icon1 from '../../images/Progressive Budget.png';
import Icon2 from '../../images/Progressive Budget.png';
import Icon3 from '../../images/Progressive Budget.png';
import Icon4 from '../../images/Progressive Budget.png';
import { ProjectContainer, ProjectH1, ProjectWrapper, ProjectCard, ProjectIcon, ProjectH2, ProjectP } from './ProjectElements';

const Projects = () => {
    return (
        <ProjectContainer id='portfolio'>
            <ProjectH1>My Portfolio</ProjectH1>
            <ProjectWrapper>
                <ProjectCard>
                    <ProjectIcon src={Icon1}/>
                    <ProjectH2>Project info</ProjectH2>
                    <ProjectP>Description</ProjectP>
                </ProjectCard>
                <ProjectCard>
                    <ProjectIcon src={Icon2}/>
                    <ProjectH2>Project info</ProjectH2>
                    <ProjectP>Description</ProjectP>
                </ProjectCard>
                <ProjectCard>
                    <ProjectIcon src={Icon3}/>
                    <ProjectH2>Project info</ProjectH2>
                    <ProjectP>Description</ProjectP>
                </ProjectCard>
                <ProjectCard>
                    <ProjectIcon src={Icon4}/>
                    <ProjectH2>Project info</ProjectH2>
                    <ProjectP>Description</ProjectP>
                </ProjectCard>

            </ProjectWrapper>
        </ProjectContainer>
    )
}

export default Projects
