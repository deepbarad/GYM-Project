import axios from "axios";

const local_URL = import.meta.env.VITE_SERVER_URL;

export const addContactUs = async (data: any) => {
  try {
    const res = await axios.post(
      local_URL + "/api/contactUs/addContactUs",
      data
    );
    return res;
  } catch (error) {
    console.log("error", error);
  }
};

export const addGymStudent = async (data: any) => {
  try {
    const res = await axios.post(
      local_URL + "/api/gymStudent/addGymStudent",
      data
    );
    return res;
  } catch (error) {
    console.log("error", error);
  }
};
