function Card({
  value,
  index,
  input,
  setInput,
  setHasNoDuplicates,
  setFirstRender,
  charColors
}) {

  const style = {
    backgroundColor: charColors[value]
    
  }

  const handleCloseButton = ev => {
    const cardElement = ev.target.nextSibling
    const selectedChar = cardElement.innerText;
    const indexSelectedChar = index

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
      <button className="card" style={{ backgroundColor: charColors[value]}}>
        <span onClick={handleCloseButton}>❌</span>
        <h3>{value}</h3>
      </button>
    </div>
  )
}

export default Card;