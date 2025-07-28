import { useState } from "react";
import styles from "./index.module.css";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { login, loading, error } = useAuth({
    onSuccess: () => {
      navigate("/");
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className={styles.container}>
      <h1
        style={{
          color: "white",
          textAlign: "center",
        }}
      >
        Login
      </h1>
      <form onSubmit={handleSubmit} className={styles.formWrapper}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Input your email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Input your password"
        />
        <button type="submit">{loading ? "Loading..." : "Login"}</button>
        <span className={styles.errorText}>{error}</span>
        <Link className={styles.signupText} to="/signup">
          No account yet? Sign up here
        </Link>
      </form>
    </div>
  );
};

export default Login;
