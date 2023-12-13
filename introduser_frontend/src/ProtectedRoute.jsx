import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "./Providers/UserProvider";

const ProtectedRoute = ({ component: Component }) => {
  const navigate = useNavigate();
  const {fetchUser} = useUserContext();

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const accessToken = localStorage.getItem("access_token");
        if (accessToken) {
          const response = await fetchUser();
          console.log(response);
          if (response === null) {
            navigate("/login");
          }
        } else {
          navigate("/login");
        }
      } catch (error) {
        navigate("/login");
      }
    };
    checkAuthentication();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return Component;
};

export default ProtectedRoute;