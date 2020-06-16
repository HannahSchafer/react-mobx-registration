import React from 'react';
import { inject, observer } from 'mobx-react';

import { authFields } from '../../config.js';
import { ACTIONS } from '../../constants.js';
import AuthInput from '../../components/auth/authInput.js';
import '../../global.css'


const Login = inject('store')(observer(({store}) => {

  store.userInfo.action = ACTIONS.login;

	return (
    <div className='container-left'>
    	<form onSubmit={store.handleSubmit} className='ui form'>
        { authFields.map((field, index) => {
          if (field.actions.includes(ACTIONS.login)) {
            return (
              <div key={index}>
                <AuthInput field={field} />
              </div>
            )
          }
        })}
        <button className='ui button'>Log In</button>
      </form> 
    	<div className='text-center'>
    		<div>Create an account</div>
        <a href='/'>Sign Up</a>
    	</div>
		</div>
	);
}));

export default Login;