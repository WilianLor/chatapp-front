import { useContext } from "react";
import { UserContext } from "../contexts/userContext";

const useData = () => {
  const value = useContext(UserContext);

  return value;
};

export default useData;
