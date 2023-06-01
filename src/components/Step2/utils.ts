export const inputs2 = [
  {
    id: 4,
    name: "email",
    type: "email",
    placeholder: "your email",
    label: "email",
    errorMessage: "should be a valid email address! ",
    required: true,
  },

  {
    id: 5,
    name: "password",
    type: "password",
    placeholder: "password",
    label: "password",
    errorMessage:
      "userName should be 8-20 characters include # to last character !",
    pattern: "^(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$",
    required: true,
  },

  {
    id: 6,
    name: "Confpassword",
    type: "password",
    placeholder: "confirm password",
    label: "Confpassword",
    errorMessage: "Password don't match!",
    required: true,
  },
];
