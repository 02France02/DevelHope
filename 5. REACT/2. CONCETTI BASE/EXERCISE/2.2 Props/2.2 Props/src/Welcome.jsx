function Welcome({ name = "guest",  age}) {
  return (
    <>
      <h2>Welcome</h2>
      <p> <strong>{name}</strong>, your age is {age}</p>
    </>
  );
}

export default Welcome;
