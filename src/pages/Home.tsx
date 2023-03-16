import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [originalInput, setOriginalInput] = useState("");
  const navigate = useNavigate();

  const handleChange = (ev: React.FormEvent<HTMLInputElement>) => {
    setOriginalInput(ev.currentTarget.value.trim());
  }

  const handleSubmit = (ev: React.SyntheticEvent) => {
    ev.preventDefault();
    validateInput(originalInput)
      ? navigate("/validated", { state: { originalInput } })
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
        <input type="text" value={originalInput} onChange={ev => handleChange(ev)} />
        <button type="submit">Change Your LOIF</button>
      </form>
    </>
  )
}
export default Home;