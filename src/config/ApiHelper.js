// import axios from "axios";
// const token = localStorage.getItem("Sign")
// export const ProfileGet = async () => {
//     try {
//       // Assuming you have the token stored in localStorage
  
//       const response = await axios.get(`${baseURL}/api/profileGet`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
  
//       console.log(response.data);
//       return response.data;
//     } catch (error) {
//       // Handle errors here
//       console.error("Error fetching profile:", error);
//       throw error; // You might want to handle or log the error appropriately
//     }
// }