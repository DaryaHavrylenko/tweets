import { useEffect, useState } from "react";
import { getUsers } from "../../services/operation";
import { UsersList } from "../../components/UsersList/UsersList";

const Tweets = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers().then(setUsers);
  }, []);
  return (
    <main>
      <UsersList users={users} />
    </main>
  );
};
export default Tweets;
