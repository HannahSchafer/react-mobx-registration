import { action, observable, decorate } from 'mobx';

import { ACTIONS, URLS } from '../constants.js';
import { authFields } from '../config.js';


class AuthStore {

  userInfo = {
    action: '',
    email: '',
    errors: [],
    name: '',
    password: '',
    passwordConfirmation: '',
    phone: '',
  };

  response = null;


  handleChange = (event) => {
    this.userInfo[event.target.name] = event.target.value;
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.userInfo.action === ACTIONS.signup) {
      this.validate();
    };

    if (!this.userInfo.errors.length) {
      const parameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.userInfo)
    };

    return fetch(URLS[this.userInfo.action], parameters)
      .then(response => {
        // set auth tokens to local storage
        this.response = response.data;
      })
      .catch(error => {
        console.log('error', error)
        alert('An error occured while attempting to authenticate.')
      })
    }
  };

  validate = () => {
    authFields.forEach((field) => {
      let userInput = this.userInfo[field.name];

      if (field.parent) {
        let parentInput = this.userInfo[field.parent]
        if (!field.isValid(userInput, parentInput)) {
          this.userInfo.errors.push(field.errorMessage)
        }
      } else if (!field.isValid(userInput)) {
        this.userInfo.errors.push(field.errorMessage)
      }
    })
  };
}

decorate(AuthStore, {
  handleChange: action,
  handleSubmit: action,
  userInfo: observable,
  response: observable,
})

export default AuthStore;
