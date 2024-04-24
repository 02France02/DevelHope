import { Age } from "./Age";

function Welcome({ name = "guest",  age}) {
  return (
    <>
      <h2>Welcome</h2>
      <p> <strong>{name}</strong>, your age is <Age>{age}</Age></p>
    </>
  );
}

export default Welcome;
