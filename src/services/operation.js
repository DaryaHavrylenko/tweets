import axios from "axios";
const limitPerPage = 9;
export const getUsers = async (page) => {
  try {
    const { data } = await axios.get(
      `https://639c400416d1763ab143d324.mockapi.io/users?page=${page}&limit=${limitPerPage}`
    );
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
// export const followingUser = async (id) => {
//   try {
//     const { data } = await axios.put(
//       `https://639c400416d1763ab143d324.mockapi.io/users/${id}`
//     );
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.log(error.message);
//   }
// };
