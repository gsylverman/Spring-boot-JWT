import axios from "axios";
import { useEffect, useState } from "react";

export interface ContactProps {}
const Contact: React.FC<ContactProps> = () => {
  const [token, setToken] = useState<string>("");

  const requestDataWithTokenValidation = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    fetch();
  };

  // axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

  const fetch = async () => {
    console.log({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    try {
      const response = await axios.get("http://localhost:8080/api/v1/data", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={requestDataWithTokenValidation}>
      <div>
        Token:
        <input
          onChange={(e) => setToken(e.target.value)}
          type="text"
          placeholder="token"
          value={token}
        />
      </div>
      <div>
        <input type="submit" value="Request data with token validation" />
      </div>
    </form>
  );
};

export default Contact;
