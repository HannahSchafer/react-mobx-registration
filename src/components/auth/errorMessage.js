import React from 'react';
import { inject, observer } from 'mobx-react';

import './errorMessage.css'


const ErrorMessage = inject('store')(observer(({store}) => {
  return (
    <div>{ store.userInfo.errors.map(error => (
      <div className='error'>
        {error}
      </div>
    ))}
    </div>
  )
}));

export default ErrorMessage;