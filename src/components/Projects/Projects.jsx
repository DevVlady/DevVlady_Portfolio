import React, {useState} from 'react';
import Icon1 from '../../images/Progressive Budget.png';
import Icon2 from '../../images/WorkPlanner.png';
import Icon3 from '../../images/Fitness_Tracker2.png';
import Icon4 from '../../images/devHangout.jpg';
import Icon5 from '../../images/Charging Forward.png';
import Icon6 from '../../images/Employee_Directory.png';
import { ProjectContainer, ProjectH1, ProjectWrapper, ProjectCard, ProjectIcon, ProjectH2, BtnWrap, Button } from './ProjectElements';


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
                    <ProjectH2>Budget Tracker</ProjectH2>
                    <BtnWrap>
                        <Button
                            onClick={event => window.location.href='https://github.com/DevVlady/Progressive_Budget'}
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            spy={true}
                            // offset={-80}
                        >Github</Button>
                        <Button
                            onClick={event => window.location.href='https://my-progressive-budget.herokuapp.com/'}
                        >Deploy</Button>
                    </BtnWrap>
                </ProjectCard>
                <ProjectCard>
                    <ProjectIcon src={Icon2}/>
                    <ProjectH2>Work Planner</ProjectH2>
                    <BtnWrap>
                        <Button
                            onClick={event => window.location.href='https://github.com/DevVlady/Day_Planner'}
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            spy={true}
                            // offset={-80}
                        >Github</Button>
                        <Button
                            onClick={event => window.location.href='https://devvlady.github.io/Day_Planner/'}
                        >Deploy</Button>
                    </BtnWrap>
                </ProjectCard>
                <ProjectCard>
                    <ProjectIcon src={Icon3}/>
                    <ProjectH2>Fitness Tracker</ProjectH2>
                    <BtnWrap>
                        <Button
                            onClick={event => window.location.href='https://github.com/DevVlady/Fitness_Tracker'}
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            spy={true}
                            // offset={-80}
                        >Github</Button>
                        <Button
                            onClick={event => window.location.href='https://fitness-health-tracker.herokuapp.com/'}
                        >Deploy</Button>
                    </BtnWrap>

                </ProjectCard>
                <ProjectCard>
                    <ProjectIcon src={Icon4}/>
                    <ProjectH2>Dev Hangout</ProjectH2>
                    <BtnWrap>
                        <Button
                            onClick={event => window.location.href='https://github.com/DevVlady/Dev-Hangout'}
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            spy={true}
                            // offset={-80}
                        >Github</Button>
                        <Button
                            onClick={event => window.location.href='https://dev-hangout.herokuapp.com/'}
                        >Deploy</Button>
                    </BtnWrap>
                </ProjectCard>
                <ProjectCard>
                    <ProjectIcon src={Icon5}/>
                    <ProjectH2>Charging Forward</ProjectH2>
                    <BtnWrap>
                        <Button
                            onClick={event => window.location.href='https://github.com/DevVlady/Charging_Forward'}
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            spy={true}
                            // offset={-80}
                        >Github</Button>
                        <Button
                            onClick={event => window.location.href='https://devvlady.github.io/Charging_Forward/'}
                        >Deploy</Button>
                    </BtnWrap>
                </ProjectCard>
                <ProjectCard>
                    <ProjectIcon src={Icon6}/>
                    <ProjectH2>Project info</ProjectH2>
                    <BtnWrap>
                        <Button
                            onClick={event => window.location.href='https://github.com/DevVlady/Progressive_Budget'}
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            spy={true}
                            // offset={-80}
                        >Github</Button>
                        <Button
                            onClick={event => window.location.href='https://my-progressive-budget.herokuapp.com/'}
                        >Deploy</Button>
                    </BtnWrap>
                </ProjectCard>
                <ProjectCard>
                    <ProjectIcon src={Icon6}/>
                    <ProjectH2>Project info</ProjectH2>
                    <BtnWrap>
                        <Button
                            onClick={event => window.location.href='https://github.com/DevVlady/Progressive_Budget'}
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            spy={true}
                            // offset={-80}
                        >Github</Button>
                        <Button
                            onClick={event => window.location.href='https://my-progressive-budget.herokuapp.com/'}
                        >Deploy</Button>
                    </BtnWrap>
                </ProjectCard>
                <ProjectCard>
                    <ProjectIcon src={Icon6}/>
                    <ProjectH2>Project info</ProjectH2>
                    <BtnWrap>
                        <Button
                            onClick={event => window.location.href='https://github.com/DevVlady/Progressive_Budget'}
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            spy={true}
                            // offset={-80}
                        >Github</Button>
                        <Button
                            onClick={event => window.location.href='https://my-progressive-budget.herokuapp.com/'}
                        >Deploy</Button>
                    </BtnWrap>
                </ProjectCard>
                <ProjectCard>
                    <ProjectIcon src={Icon6}/>
                    <ProjectH2>Project info</ProjectH2>
                    <BtnWrap>
                        <Button
                            onClick={event => window.location.href='https://github.com/DevVlady/Progressive_Budget'}
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            spy={true}
                            // offset={-80}
                        >Github</Button>
                        <Button
                            onClick={event => window.location.href='https://my-progressive-budget.herokuapp.com/'}
                        >Deploy</Button>
                    </BtnWrap>
                </ProjectCard>

            </ProjectWrapper>
        </ProjectContainer>
    )
}

export default Projects
