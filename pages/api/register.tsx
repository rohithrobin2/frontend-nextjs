import { Axios } from "../axios";

export async function registerDetails(fname: any, lname: any, email: any, password: any, roles: any) {
  try {
    const request = await Axios.post(`/user/register`,{
      name: fname + lname,
      role: roles,
      password: password,
      email: email
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
