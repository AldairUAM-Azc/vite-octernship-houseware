import { useState } from "react";

function Card({
  value,
  index,
  input,
  setInput,
  setHasNoDuplicates,
  setFirstRender
}) {

  const handleCloseButton = ev => {
    const cardElement = ev.target.nextSibling
    const selectedChar = cardElement.innerText;
    const indexSelectedChar = index
    
    console.log({ selectedChar, indexSelectedChar })
    const removedDuplicates = Array.from(input)
    .filter((char, index) =>
    char !== selectedChar || index === indexSelectedChar)
    .join("");
    setInput(removedDuplicates)
    setHasNoDuplicates(new Set(removedDuplicates).size === removedDuplicates.length)
    setFirstRender(true)
  }

  return (
    <div>
      <button className="card">
        <span onClick={handleCloseButton}>❌</span>
        <h3>{value}</h3>
      </button>
    </div>
  )
}

export default Card;