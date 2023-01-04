import { Axios } from "../axios";

export async function registerDetails() {
  try {
    const request = await Axios.get("/register");

    return {
      success: true,
      data: request.data,
    };
  } catch (error) {
    return {
      success: false,
      message: error,
    };
  }
}
