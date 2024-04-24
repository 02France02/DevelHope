import { useNavigate, useParams } from "react-router-dom";

export function Welcome() {
  const navigate = useNavigate();
  const { name = "mario" } = useParams();

  const handleLogin = () => {
    navigate("login");
  };

  return (
    <>
      <h1>Hi, this is a WELCOME COMPONENT</h1>
      <h1>Hi, this is a {name} from useParams</h1>

      <div>
        <button onClick={handleLogin}>ENTER</button>
      </div>
    </>
  );
}
