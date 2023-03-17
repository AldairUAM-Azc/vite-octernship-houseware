import { useLocation, useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { useEffect, useRef, useState } from "react"
import { Fireworks } from "@fireworks-js/react"
import type { FireworksHandlers } from "@fireworks-js/react";

const Duplicates = () => {
  const ref = useRef<FireworksHandlers>(null)
  const navigate = useNavigate()
  const location = useLocation();
  const originalInput = location.state.originalInput
  const [input, setInput] = useState(originalInput);
  const [hasNoDuplicates, setHasNoDuplicates] = useState(false)
  const [isFirstRender, setIsFirstRender] = useState(false)
  const [charColors, setCharColors] = useState({})

  const randomHex = (): string =>
    "#66" + Math.floor(Math.random() * 16777215).toString(16); // #66 to add transparency to the color

  useEffect(() => {
    ref.current.stop() //stop fireworks, they start by default
    const charColors = Object.fromEntries([...originalInput].map(x => [x, randomHex()]));
    setCharColors(charColors) // charColors maps a single character to a random color
  }, [])

  useEffect(() => {
    if (hasNoDuplicates) {
      ref.current.start()
    }
  }, [hasNoDuplicates])

  function Message() {
    return (
      <div>
        {hasNoDuplicates
          ? <p>NO DUPLICATES 😁</p>
          : <p>STILL DUPLICATES 😭</p>}
      </div>
    )
  }

  return (
    <div>
      <Fireworks
        ref={ref}
        options={{ opacity: 0.5 }}
        style={{
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          position: "fixed",
        }} />

      <button onClick={() => navigate(-1)}> ⬅️ GO BACK</button>

      <p>Heres your ORIGINAL input {location.state.originalInput}</p>
      <p>Heres your CURRENT input {input}</p>

      {isFirstRender
        ? <Message />
        : null}

      <div className="cards">
        {Array.from(input).map((char, index) =>
          <Card
            value={char}
            key={index}
            index={index}
            input={input}
            setInput={setInput}
            setHasNoDuplicates={setHasNoDuplicates}
            setFirstRender={setIsFirstRender}
            charColors={charColors}
          />)}
      </div>
    </div>
  )
}

export default Duplicates;