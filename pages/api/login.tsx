import { Axios } from "../axios";

export async function loginDetails(email: any, password: any) {
  try {
    const request = await Axios.post(`/user/login`, {
      email: email,
      password: password,
    });

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
