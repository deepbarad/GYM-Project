const genderOption = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];
const queOption = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];

export const joinFormObject = [
  {
    title: "First Name",
    name: "firstName",
    type: "text",
    placeholder: "Your first Name",
    errorMessage: true,
  },
  {
    title: "Middle Name",
    name: "middleName",
    type: "text",
    placeholder: "Your Middle Name",
    errorMessage: true,
  },
  {
    title: "Last Name",
    name: "lastName",
    type: "text",
    placeholder: "Your Last Name",
    errorMessage: true,
  },
  {
    title: "Email",
    name: "email",
    type: "text",
    placeholder: "Your Email",
    errorMessage: true,
  },
  {
    title: "Contact No.",
    name: "contactNo",
    type: "text",
    placeholder: "Your Contact No.",
    errorMessage: true,
  },
  {
    title: "Data of Birth",
    name: "dateOfBirth",
    type: "date",
    errorMessage: true,
  },
  {
    title: "State",
    name: "state",
    type: "text",
    placeholder: "Your State",
    errorMessage: true,
  },
  {
    title: "City",
    name: "city",
    type: "text",
    placeholder: "Your City",
    errorMessage: true,
  },

  {
    title: "Age",
    name: "age",
    type: "number",
    placeholder: "Your Age",
    errorMessage: true,
  },
  {
    title: "Current Weight (lbs)*",
    name: "currentWeight",
    type: "number",
    placeholder: "Your Current Weight (lbs)*",
    errorMessage: true,
  },
  {
    title: "Desired Weight (lbs)*",
    name: "desiredWeight",
    type: "number",
    placeholder: "Your Desired Weight (lbs)*",
    errorMessage: true,
  },
  {
    title: "Gender :",
    name: "gender",
    type: "radio",
    option: genderOption,
    orientation: "horizontal",
    errorMessage: true,
  },
  {
    title: "Address-1",
    name: "address1",
    type: "textarea",
    placeholder: "Your Address",
    errorMessage: true,
  },
  {
    title: "Address-2",
    name: "address2",
    type: "textarea",
    placeholder: "Your Address",
    errorMessage: false,
  },
  {
    title: "Do You Require Personal Trainer?",
    type: "radio",
    name: "personalTrainer",
    option: queOption,
    errorMessage: true,
  },
];

export const contactUsObject = [
  {
    title: "UserName",
    name: "userName",
    type: "text",
  },
  {
    title: "Email",
    name: "email",
    type: "text",
  },
  {
    title: "Message",
    name: "message",
    type: "textarea",
  },
];
