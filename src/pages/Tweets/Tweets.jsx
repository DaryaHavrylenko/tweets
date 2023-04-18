import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
// import { getUsers } from "../../services/operation";
import { UsersList } from "../../components/UsersList/UsersList";
// import { Spinner } from "../../components/Spinner/Spinner";
import data from "../../services/data/user.json";
// import { followingUser } from "../../services/operation";
import { GalleryContainer, ButtonGoBack } from "./Tweets.styled";

const Tweets = () => {
  const [users, setUsers] = useState(
    () => JSON.parse(localStorage.getItem("users")) ?? data
  );
  //   const [page, setPage] = useState(1);
  //   const [error, setError] = useState(null);
  //   const [totalCount, setTotalCount] = useState(0);
  //   const [isloading, setIsLoading] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  //   const dataTotalCount = 79;
  const goBack = location.state?.from ?? "/";

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       setIsLoading(true);
  //       try {
  //         const data = await getUsers(page);

  //         // setUsers((prevState) => (page === 1 ? data : [...prevState, ...data]));

  //         setTotalCount((prevState) =>
  //           page === 1 ? dataTotalCount - data.length : prevState - data.length
  //         );
  //         setError(null);
  //       } catch (error) {
  //         setError(error);
  //       } finally {
  //         setIsLoading(false);
  //       }
  //     };
  //     fetchData();
  //   }, [error, page]);

  //   const loadMore = () => {
  //     setPage((prevPage) => prevPage + 1);
  //   };
  const handleGoBack = () => {
    navigate(goBack);
  };

  const handleButton = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => {
        if (user.id === id) {
          return {
            ...user,
            isFollowing: user.isFollowing ? false : true,
            followers: user.isFollowing
              ? user.followers - 1
              : user.followers + 1,
          };
        }
        return user;
      })
    );
  };
  return (
    <GalleryContainer>
      <ButtonGoBack type="button" onClick={handleGoBack}>
        <AiOutlineArrowLeft size="1rem" />
      </ButtonGoBack>
      <UsersList users={users} onClick={handleButton} />
      {/* {!!totalCount &&
        (!isloading ? (
          <LoadMoreButton type="submit" onClick={loadMore}>
            load more
          </LoadMoreButton>
        ) : (
          <Spinner />
        ))} */}
    </GalleryContainer>
  );
};

export default Tweets;
