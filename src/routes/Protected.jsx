import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RouteProtector = ({ isVerified, children }) => {
  const navigate = useNavigate();
  console.log(isVerified);

  if (isVerified?.token) {
    return children;
  } else {
    navigate("/login");
  }
};

export default RouteProtector;
