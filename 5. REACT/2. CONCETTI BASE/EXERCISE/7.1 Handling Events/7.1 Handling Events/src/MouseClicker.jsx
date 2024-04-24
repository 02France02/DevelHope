function MouseClicker({name}) {
    function handlePrint(e) {
        console.log(e.target.name);
    }
    return (
        <>
          <button type="button" onClick={handlePrint} name={name}>ClickMe</button>
        </>
    )
}
export default MouseClicker