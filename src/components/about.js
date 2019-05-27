import React, { Component } from 'react';
import { UserCard } from 'react-ui-cards'

class About extends Component {
    render() {
        return (
            <UserCard className='height-class' header='/cover-pic.png' avatar='/Profile_pic.jpg' name='Pravesh Tora' positionName='Software Engineer'>
            </UserCard>)
    }
}
export default About;
