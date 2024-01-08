import axios from "axios";

const local_URL = import.meta.env.VITE_SERVER_URL;

export const getAllHomeContain = async () => {
  try {
    const res = await axios.get(local_URL + "/api/homeContain/getHomeContain");
    return res;
  } catch (error) {
    console.log("error", error);
  }
};

export const getAllTrainers = async () => {
  try {
    const res = await axios.get(local_URL + "/api/trainer/getTrainer");
    return res;
  } catch (error) {
    console.log("error", error);
  }
};
export const getAllCarousel = async () => {
  try {
    const res = await axios.get(local_URL + "/api/carousel/getImage");
    return res;
  } catch (error) {
    console.log("error", error);
  }
};

export const getAllAbout = async () => {
  try {
    const res = await axios.get(
      local_URL + "/api/aboutContain/getAboutContain"
    );
    return res;
  } catch (error) {
    console.log("error", error);
  }
};

export const getAllJoinTable = async (day: any) => {
  try {
    const res = await axios.get(local_URL + `/api/admin/joinTable?day=${day}`);
    return res;
  } catch (error) {
    console.log("error", error);
  }
};

export const getAllGalleryImage = async () => {
  try {
    const res = await axios.get(local_URL + "/api/gallery/getGallery");
    return res;
  } catch (error) {
    console.log("error", error);
  }
};
