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
 }

 renderOrNot(array){
   let counter = 0;

   array.map(function(item){
     counter += 1
   })

   return counter
 }


  render () {

    // console.log(this.props.user.education.length)
    return (


      <div id="entire-container">
        {(!this.props.user.firstName) ? <h1>User Not Found</h1> : null}
        <h1>{this.props.user.firstName} {this.props.user.lastName}</h1>
        {this.props.user.headline ?
          <h2>{this.props.user.headline}</h2> : null

        }
        {this.props.user.location ?
          <h2>{this.props.user.location}</h2> : null

        }

        {this.props.user.education ? (this.props.user.education.length ? (

                  <div>
                  <h2>Education</h2>
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

      <div>
      <h2>Experience</h2>
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


    {(!this.props.notSelf) ? (  <div>
        <Link to="createProfile"><h2>Edit Profile</h2></Link>
        <Link to={`userdashboard/${this.props.user.id}`}><h2>View Dashboard</h2></Link>
      </div>
    )
    : null }
    </div>
    )
  }
}
