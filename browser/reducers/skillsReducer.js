import axios from 'axios';
///



/* ----------------------- CONSTANTS -----------*/
// All applications for all users
const SET_ALL_SKILLS = 'SET_ALL_SKILLS';


const initialState = {
	allSkills: []
}



/*---- action cretors */

// in process...

/*------------------ REDUCER */

export default function (state = initialState, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case SET_ALL_SKILLS:
      newState.allSkills = action.skills;
      break;
    default:
      return state;
  }
  return newState;
}
