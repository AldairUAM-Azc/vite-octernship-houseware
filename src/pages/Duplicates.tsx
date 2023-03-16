import { useLocation, useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { useState } from "react"

function Duplicates() {
  const navigate = useNavigate()
  const location = useLocation();
  const [input, setInput] = useState(location.state.originalInput);
  const [hasNoDuplicates, setHasNoDuplicates] = useState(false)
  const [isFirstRender, setIsFirstRender] = useState(false)

  function Prompt() {
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
          ? <Prompt />
          : null
      }
      <div className="cards">
        {Array.from(input).map((char, index) => <Card
          value={char}
          key={index}
          index={index}
          input={input}
          setInput={setInput}
          setHasNoDuplicates={setHasNoDuplicates}
          setFirstRender={setIsFirstRender}
        />)}
      </div>
    </div>
  )
}

export default Duplicates;