import React, {useState} from 'react';
import Icon1 from '../../images/Progressive Budget.png';
import Icon2 from '../../images/Progressive Budget.png';
import Icon3 from '../../images/Progressive Budget.png';
import Icon4 from '../../images/Progressive Budget.png';
import { ProjectContainer, ProjectH1, ProjectWrapper, ProjectCard, ProjectIcon, ProjectH2, ProjectP, BtnWrap, Button } from './ProjectElements';


const Projects = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <ProjectContainer id='portfolio'>
            <ProjectH1>My Portfolio</ProjectH1>
            <ProjectWrapper>
                <ProjectCard>
                    <ProjectIcon src={Icon1}/>
                    <ProjectH2>Budget App</ProjectH2>
                    {/* <ProjectP>Description</ProjectP> */}
                    <BtnWrap>
                        <Button
                            onClick={event => window.location.href='https://github.com/DevVlady/Progressive_Budget'}
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            // primary='false'
                            // dark='true'
                            spy={true}
                            // exact='true'
                            // offset={-80}
                        >Github</Button>
                        <Button
                            onClick={event => window.location.href='https://my-progressive-budget.herokuapp.com/'}
                        >Deploy</Button>
                    </BtnWrap>
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
                <ProjectCard>
                    <ProjectIcon src={Icon4}/>
                    <ProjectH2>Project info</ProjectH2>
                    <ProjectP>Description</ProjectP>
                </ProjectCard>
                <ProjectCard>
                    <ProjectIcon src={Icon4}/>
                    <ProjectH2>Project info</ProjectH2>
                    <ProjectP>Description</ProjectP>
                </ProjectCard>
                <ProjectCard>
                    <ProjectIcon src={Icon4}/>
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
