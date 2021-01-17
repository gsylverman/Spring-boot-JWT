import axios from "axios";

export interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fetch = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8080/authenticate",
          {
            username: "admin",
            password: "password",
          }
        );
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  };

  return (
    <form onSubmit={login}>
      <div>
        Username:
        <input type="text" placeholder="username" />
      </div>
      <div>
        Password:
        <input type="text" placeholder="password" />
      </div>
      <div>
        <input type="submit" />
      </div>
    </form>
  );
};

export default Login;
