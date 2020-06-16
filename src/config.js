
export const authFields = [
  {
    "actions": ["signup"],
    "errorMessage": "Name must be at least 4 letters",
    "name": "name",
    "type": "text",
    "parent": null,
    "placeholder": "Full Name",
    "required": true,
    "isValid": (value) => {
      return value.length > 3;
    },
  }, {
    "actions": ["login", "signup"],
    "errorMessage": null,
    "name": "email",
    "type": "email",
    "parent": null,
    "placeholder": "Email",
    "required": true,
    "isValid": () => {
      return true
    },
  }, {
    "actions": ["signup"],
    "errorMessage": "Invalid phone number",
    "name": "phone",
    "type": "text",
    "parent": null,
    "placeholder": "Phone Number",
    "required": false,
    "isValid": (value) => {
      if (value) {
        const phoneRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
        return phoneRegex.test(value);
      } else {
        return true;
      }
    },
  }, {
    "actions": ["login", "signup"],
    "errorMessage": null,
    "name": "password",
    "type": "password",
    "parent": null,
    "placeholder": "Password",
    "required": true,
    "isValid": () => {
      return true
    },
  }, {
    "actions": ["signup"],
    "errorMessage": "Passwords do not match",
    "name": "confirmPassword",
    "type": "password",
    "parent": "password",
    "placeholder": "Confirm Password",
    "required": true,
    "isValid": (child, parent) => {
      return child === parent;
    },
  }, 
];