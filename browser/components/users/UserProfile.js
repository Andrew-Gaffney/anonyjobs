import React, { Component } from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';
import {connect} from 'react-redux';
import UserApplications from './UserApplications';
import { Link } from 'react-router';

export default class UserProfile extends React.Component {

  constructor(props){
    super(props);
    this.renderOrNot = this.renderOrNot.bind(this)
    this.skillsArrayToObj = this.skillsArrayToObj.bind(this);
    this.renderSkills = this.renderSkills.bind(this)
  }

 renderOrNot(array){
   let counter = 0;

   array.map(function(item){
     counter += 1
   })

   return counter
 }

 skillsArrayToObj(array) {
   let skillsObj = {}
   array.forEach(function(skill){
     if (!skillsObj[skill.category]) {
       skillsObj[skill.category] = [];
     } else {
       skillsObj[skill.category].push(skill.name)
     }
   })
  return skillsObj;

 }

 renderSkills(array){
   console.log('i got into render skill')
   let skillsObj = this.skillsArrayToObj(array);
   let skillsCategories = Object.keys(skillsObj);
   let newDivs = []
   skillsCategories.forEach(function(category, index){
     let skills = skillsObj[category];
     let newDiv = (
       <div className="skill add-line-space" key={index}>
         <h3 id="skill-category"><strong>{category}</strong></h3>
         {
           skills.map(function(skill, index){
             return <h4 id="skill-name" key={index}>{skill}</h4>
           })
         }
       </div>
     )
  newDivs.push(newDiv)
   })
   return newDivs
 }


  render () {

    return (


      <div className="profile-container">
        {(!this.props.user.firstName) ? <h2 className="add-line-space">User Not Found</h2> : null}
        <h2 className="add-line-space">{this.props.user.firstName} {this.props.user.lastName}</h2>
        {this.props.user.headline ?
          <h4 className="add-line-space">{this.props.user.headline}</h4> : null

        }
        {this.props.user.location ?
          <h4 className="add-line-space">{this.props.user.location}</h4> : null

        }

        {this.props.user.summary ? (
          <div id="summary-header" className="add-line-space">
            <h3 className="add-line-space"><strong>Summary</strong></h3>
            <h4 className="add-line-space" id="profile-summary">{this.props.user.summary}</h4>
          </div>
        ) : null}


    <h3 className="add-line-space">Skills</h3>
    <div className="skills-container">
      {this.props.user.skills ? (this.props.user.skills.length ?
        this.renderSkills(this.props.user.skills) : null) : null}
    </div>

    {this.props.user.education ? (this.props.user.education.length ? (

              <div className="add-line-space">
              <h3>Education</h3>
              <table className="table">
                <thead>
                  <tr>
                    <th>School</th>
                    <th>Subject</th>
                    <th>Degree</th>
                    <th>Year of Graudation</th>
                    <th>Final GPA</th>
                  </tr>
                </thead>
              <tbody>
              {
                this.props.user.education.map((education, index) => { return (
                <tr key={index}>
                  <th>{education.schoolName}</th>
                  <th>{education.degreeName}</th>
                  <th>{education.degree}</th>
                  <th>{education.yearGraduated}</th>
                  <th>{education.finalGPA}</th>
                </tr>
                )
              }
              )}

              </tbody>
              </table>
              </div>
        ) : null) : null }





        {this.props.user.experiences ? (this.props.user.experiences.length ?
        (

        <div className="add-line-space">
        <h3>Experience</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Position</th>
              <th>Start</th>
              <th>End</th>
              <th>Responsibilities</th>
            </tr>
          </thead>
        <tbody>
        {
          this.props.user.experiences.map((experience, index) => { return (
          <tr key={index}>
            <th>{experience.companyName}</th>
            <th>{experience.role}</th>
            <th>{experience.startYear}</th>
            <th>{experience.endYear}</th>
            <th>{experience.responsibilities}</th>
          </tr>
          )
        }
        )}

        </tbody>
        </table>
        </div>
        ) : null) : null}


    {(!this.props.notSelf) ? (  <div className="bottom-profile-links">
        <Link to="/createProfile"><h4>Update Profile</h4></Link>
        <Link to={`userdashboard/${this.props.user.id}`}><h4>View Dashboard</h4></Link>
      </div>
    )
    : null }
    </div>
    )
  }
}
