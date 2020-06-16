import React from 'react';
import { inject, observer } from 'mobx-react';

import { authFields } from '../../config.js';
import { ACTIONS } from '../../constants.js';
import AuthInput from '../../components/auth/authInput.js';
import ErrorMessage from '../../components/auth/errorMessage.js';
import '../../global.css'


const SignUp = inject('store')(observer(({store}) => {

  store.userInfo.action = ACTIONS.signup;

	return (
    <div className='container-left'>
      <ErrorMessage />
    	<form onSubmit={store.handleSubmit} className='ui form'>
         { authFields.map((field, index) => (
            <div key={index}>
              <AuthInput field={field} />
            </div>
          ))
        }
    		<button style={{alignItems: 'center'}} className='ui button'>Sign Up</button>
    	</form>	
    	<div className='text-center'>
    		<div>Already have an account?</div>
        <a href='/login'>Log In</a>
    	</div>
		</div>
	);
}
));


export default SignUp;