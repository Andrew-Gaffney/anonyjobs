import React from 'react';
import { Link } from 'react-router';

export default function Home (props) {

	return(
		<div>
			<div className="cover">
				<img className="wide-image" src="anonyjob-photo.jpg"/>
				<div id='home' className='center'>
				<h1 className='text-center'> Welcome to JobFair </h1>
				<h3 id="slogan">We'll help you find the best jobs based on your talent and skills alone. Cut the bias, and find the best opportunities.</h3>
				<div id = 'button-div'>
					<a href="/api/auth/linkedin"><button id = 'login-button' className="btn btn-primary fa fa-linkedin-square" type="submit"> Login with LinkedIn</button></a>
				</div>
				</div>


			</div>
			<div>



			<div className="home-page-marketing">
				<h1>Are you a recruiter searching for top talent? JobFair can help you find the best and brightest.</h1>
			</div>
			<div id='home' className='center'>
				<h1 className='text-center'>Welcome to Job Fair</h1>
				<div id = 'button-div'>
					<a href="/api/auth/linkedin"><button id = 'login-button' className="btn btn-primary fa fa-linkedin-square" type="submit"> Login with LinkedIn</button></a>
				</div>
			</div>

		</div>
	</div>
		)
}
