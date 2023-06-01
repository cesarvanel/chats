export const inputs1 = [
  {
    id: 1,
    name: "username",
    type: "text",
    placeholder: "Your username",
    label: "username",
    errorMessage: "userName should be 3-20 characters include any character!",
    pattern: "^[A-Za-z0-9]{3,20}$",
    required: true,
  },

  {
    id: 2,
    name: "number",
    type: "text",
    placeholder: "your phone ",
    label: "phone number",
    errorMessage: "should be a valid phone number!",
    pattern: "^\\+?[1-9][0-9]{7,14}$",
    required: true,
  },

  {
    id: 3,
    name: "job",
    type: "text",
    placeholder: "Your job title",
    label: "job title",
    errorMessage: "should be a 3-20 characters!",
    pattern: "^[A-Za-z0-9]{3,20}$",
    required: true,
  },
];
