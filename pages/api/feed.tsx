import { Axios } from "../axios";

// const getFromStorage = () => {
//   if (typeof window !== "undefined") {
//     return window.localStorage.getItem("accessToken");
//   }
// };

const token = typeof window !== "undefined" ? window.localStorage.getItem("accessToken") : ""

console.log("tok", token);

const headers = {
  Authorization: `Bearer ${token}`,
};

export async function userDetails(id: any) {
  try {
    const request = await Axios.get(`/user/${id}`,{headers});

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
