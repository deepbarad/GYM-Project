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
  },
  {
    title: "Middle Name",
    name: "middleName",
    type: "text",
    placeholder: "Your Middle Name",
  },
  {
    title: "Last Name",
    name: "lastName",
    type: "text",
    placeholder: "Your Last Name",
  },
  {
    title: "Email",
    name: "email",
    type: "text",
    placeholder: "Your Email",
  },
  {
    title: "Contact No.",
    name: "contactNo",
    type: "text",
    placeholder: "Your Contact No.",
  },
  {
    title: "Data of Birth",
    name: "dataOfBirth",
    type: "date",
  },
  {
    title: "State",
    name: "state",
    type: "text",
    placeholder: "Your State",
  },
  {
    title: "City",
    name: "city",
    type: "text",
    placeholder: "Your City",
  },

  {
    title: "Age",
    name: "age",
    type: "number",
    placeholder: "Your Age",
  },
  {
    title: "Current Weight (lbs)*",
    name: "currentWeight",
    type: "number",
    placeholder: "Your Current Weight (lbs)*",
  },
  {
    title: "Desired Weight (lbs)*",
    name: "currentWeight",
    type: "number",
    placeholder: "Your Desired Weight (lbs)*",
  },
  {
    title: "Gender :",
    name: "gender",
    type: "radio",
    option: genderOption,
    orientation: "horizontal",
  },
  {
    title: "Address-1",
    name: "address1",
    type: "textarea",
    placeholder: "Your Address",
  },
  {
    title: "Address-2",
    name: "address2",
    type: "textarea",
    placeholder: "Your Address",
  },
  {
    title: "Do You Require Personal Trainer?",
    type: "radio",
    name: "trainer",
    option: queOption,
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
