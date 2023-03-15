import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleChange = (ev: React.FormEvent<HTMLInputElement>) => {
    setInput(ev.currentTarget.value);
  }

  const handleSubmit = (ev: React.SyntheticEvent) => {
    ev.preventDefault();
    validateInput(input)
      ? navigate("/validated")
      : alert("Can't process empty input")
  }

  const validateInput = (input: string) => {
    return input.trim().length != 0;
  }

  return (
    <>
      <h1>
        Welcome to My Intern Application
      </h1>

      <form onSubmit={ev => handleSubmit(ev)}>
        <input type="text" value={input} onChange={ev => handleChange(ev)} />
        <button type="submit">Change Your LOIF</button>
      </form>
    </>
  )
}
export default Home;