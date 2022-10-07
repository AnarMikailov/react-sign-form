import "./App.css";
import { useState } from "react";
function App() {
  const [submit, setSubmit] = useState(false);
  const [valid, setValid] = useState(false);
  const nameChangeHandler = (event) => {
    setValue({
      ...value,
      firstName: event.target.value,
    });
  };

  const lastnameChangeHandler = (event) => {
    setValue({ ...value, lastName: event.target.value });
  };

  const emailChangeHandler = (event) => {
    setValue({ ...value, email: event.target.value });
  };
  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    setSubmit(true);
    if (value.email && value.firstName && value.lastName) {
      setValid(true);
    }
  };

  return (
    <div className="App">
      {submit && valid ? (
        <div className="succes">Succes! Thanks for submitting</div>
      ) : null}

      <form onSubmit={submitHandler}>
        <input
          onChange={nameChangeHandler}
          value={value.firstName}
          type="text"
          placeholder="First Name"
        />
        {submit && !value.firstName ? (
          <span>Please enter firstname</span>
        ) : null}
        <input
          onChange={lastnameChangeHandler}
          value={value.lastName}
          type="text"
          placeholder="Last Name"
        />
        {submit && !value.lastName ? <span>Please enter Lastname</span> : null}
        <input
          onChange={emailChangeHandler}
          value={value.email}
          type="mail"
          placeholder="Email"
        />
        {submit && !value.email ? <span>Please enter Email</span> : null}
        <button>Confirm</button>
      </form>
    </div>
  );
}

export default App;
