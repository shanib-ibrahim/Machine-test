import { userActions } from "./user-slice";

export const fetchUserData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("https://reqres.in/api/users?page=2");

      if (!response.ok) throw new Error("Could not fetch user data");

      const data = await response.json();

      return data;
    };
    try {
      const userData = await fetchData();
      dispatch(userActions.saveUserData({ users: userData }));
    } catch (error) {
      console.error(error.message);
    }
  };
};
