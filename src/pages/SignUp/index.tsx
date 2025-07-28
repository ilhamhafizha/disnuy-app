import { useState } from "react";
import styles from "./index.module.css";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const { createUser, error, loading } = useAuth({
    onSuccess: () => {
      navigate("/login");
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createUser(email, password, name);
  };
  return (
    <div className={styles.container}>
      <h1
        style={{
          color: "white",
          textAlign: "center",
        }}
      >
        Sign Up
      </h1>
      <form onSubmit={handleSubmit} className={styles.formWrapper}>
        <input
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Input your email"
        />
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Input your Name"
        />
        <input
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Input your password"
        />
        <button type="submit">{loading ? "Loading..." : "Sign Up"}</button>
        {error && <span className={styles.errorText}>{error}</span>}
      </form>
    </div>
  );
};

export default SignUp;
