import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs } from '@fortawesome/free-brands-svg-icons/faJs';
import { faReact } from '@fortawesome/free-brands-svg-icons/faReact';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons/faHtml5';
import { faCss3 } from '@fortawesome/free-brands-svg-icons/faCss3';
import {faNodeJs} from '@fortawesome/free-brands-svg-icons/faNodeJs';
import {faJava} from '@fortawesome/free-brands-svg-icons/faJava'
class Skills extends Component {
    render() {
        return (
            <Card>
                <Card.Body>
                    <Card.Title style={{'text-align':'center'}}>
                        <h4>Skills</h4>
                    </Card.Title>
                    <Row>
                        <Col className="text-center">
                          <FontAwesomeIcon size="3x" icon={faJs} color="#F0DA50" />
                          <p>Javascript</p>
                        </Col>
                        <Col className="text-center">
                            <section>
                                <FontAwesomeIcon size="3x" icon={faReact} color="#61DAFB" />
                                <p>ReactJs</p>
                            </section>
                        </Col>
                        <Col className="text-center">
                            <section>
                                <FontAwesomeIcon size="3x" icon={faHtml5} color="#E34B26" />
                                <p>HTML5</p>
                            </section>
                        </Col>
                        <Col className="text-center">
                            <section>
                                <FontAwesomeIcon size="3x" icon={faCss3} color="#264DE4" />
                                <p>CSS3</p>
                            </section>
                        </Col>
                        <Col className="text-center">
                            <section>
                                <FontAwesomeIcon size="3x" icon={faNodeJs} color="#264DE4" />
                                <p>NodeJs</p>
                            </section>
                        </Col>
                        <Col className="text-center">
                            <section>
                                <FontAwesomeIcon size="3x" icon={faJava} color="#264DE4" />
                                <p>Java</p>
                            </section>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        );
    }
}

export default Skills;
