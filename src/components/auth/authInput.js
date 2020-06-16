import React from 'react';
import { inject, observer } from 'mobx-react';

const AuthInput = inject('store')(observer(({store, field}) => {
  return (
    <input
      name={field.name}
      onChange={store.handleChange}
      placeholder={field.placeholder}
      required={field.required}
      type={field.type}
    />
  )
}));

export default AuthInput;