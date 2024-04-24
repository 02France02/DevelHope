import { useRef } from "react";

export function UnControlledForm() {
  const formRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    //Form Method
    const form = new FormData(e.target);

    const userData = {
      username: formRef.current.username.value,
      password: formRef.current.password.value,
    };


    console.log(userData);
   

    formRef.current.reset();
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit} ref={formRef}>
          <label htmlFor="username">username</label>
          <input type="text" id="username" name="username"  />

          <label htmlFor="password">password</label>
          <input type="text" id="password" name="password"  />

          <button>Login</button>
        </form>
      </div>
    </>
  );
}

