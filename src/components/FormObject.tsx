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
  },
  {
    title: "Middle Name",
    name: "middleName",
    type: "text",
  },
  {
    title: "Last Name",
    name: "lastName",
    type: "text",
  },
  {
    title: "Email",
    name: "email",
    type: "text",
  },
  {
    title: "Contact No.",
    name: "contactNo",
    type: "text",
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
  },
  {
    title: "City",
    name: "city",
    type: "text",
  },

  {
    title: "Age",
    name: "age",
    type: "number",
  },
  {
    title: "Your Current Weight (lbs)*",
    name: "currentWeight",
    type: "number",
  },
  {
    title: "Desired Weight (lbs)*",
    name: "currentWeight",
    type: "number",
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
  },
  {
    title: "Address-2",
    name: "address2",
    type: "textarea",
  },
  {
    title: "Do You Require Personal Trainer?",
    type: "radio",
    name: "trainer",
    option: queOption,
  },
];
