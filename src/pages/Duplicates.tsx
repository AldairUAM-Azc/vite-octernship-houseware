import { useLocation, useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { useEffect, useState } from "react"

function Duplicates() {
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
    const charColors = Object.fromEntries([...originalInput].map(x => [x, randomHex()]));
    setCharColors(charColors)
  }, [])

  function Message() {
    return (
      <div>
        {hasNoDuplicates
          ? <p>NO DUPLICATES 😁</p>
          : <p>Still Duplicates 😭</p>}
      </div>
    )
  }

  return (
    <div>
      <button onClick={() => navigate(-1)}> ⬅️ GO BACK</button>
      <h1>You're in the second page</h1>
      <p>Heres your ORIGINAL input {location.state.originalInput}</p>
      <p>Heres your CURRENT input {input}</p>

      {
        isFirstRender
          ? <Message />
          : null
      }
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