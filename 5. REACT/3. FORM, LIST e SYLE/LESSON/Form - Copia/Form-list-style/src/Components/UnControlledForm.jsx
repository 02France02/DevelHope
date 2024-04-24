export function UnControlledForm() {
  function handleSubmit(e) {
    e.preventDefault();
    //FORM 
    // const name = e.target.name.value;
    // const message = e.target.message.value;

    //FORM DATA
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const message = formData.get("message");
    const userMessage = {
      name,
      message,
    };

    console.log();
    e.target.name = "";
    e.target.message = "";
  }

  return (
    <>
      <h2>Uncontrolled Form</h2>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="message">Message</label>
        <input type="text" name="message" id="message" />
        <button type="submit">Send</button>
      </form>
    </>
  );
}
