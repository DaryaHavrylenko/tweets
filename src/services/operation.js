import axios from "axios";

export const getUsers = async () => {
  try {
    const { data } = await axios.get(
      `https://639c400416d1763ab143d324.mockapi.io/users?limit=12&p=1`
    );
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
