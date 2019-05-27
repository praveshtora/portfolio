import Card from 'react-bootstrap/Card';
import React, { Component } from 'react';

class WorkExperience extends Component {
    render(){
        return (
            <Card>
                <Card.Body>
                    <Card.Title style={{'text-align':'center'}}>
                        <h4>Experience</h4>
                    </Card.Title>
                    <ul >
                        <li className='job-list'>
                            <h5><a target="_blank" rel="noopener noreferrer" href="https://www.orowealth.com/">Orowealth</a></h5>
                            <h6 className="text-muted">Jun 2018 - Dec 2018</h6>
                            <h4>Full Stack Developer</h4>
                            <p>Financial Planning Tool for Sharekhan and KYC flow for Orowealth</p>
                        </li>
                        <li className='job-list'>
                            <h5><a target="_blank" rel="noopener noreferrer" href="https://www.cdkglobal.com/">CDK GLOBAL</a></h5>
                            <h6 className="text-muted">Jul 2016 - May 2018</h6>
                            <h4>Member Technical</h4>
                            <p>Enterprise Information System and Enterprise Batch Jobs-
                            A microservice for getting legacy data and applying business logic to expose as Rest APIs to other teams to build products.</p>
                        </li>
                    </ul>
                </Card.Body>
            </Card>
        );
    }
}
export default WorkExperience;
