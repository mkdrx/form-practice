import { useState } from "react";

const SimpleInput = (props) => {
  // Name Input states
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  // Email Input states
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  // Validations for name input
  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  // Validations for email input
  const validRegex = /\S+@\S+\.\S+/;
  const enteredEmailIsValid = enteredEmail.match(validRegex);
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  // Validation for the whole form
  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  // Updates the Name input state on every keystroke
  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  // Name input blur handler
  const nameInputBlurHandler = (e) => {
    setEnteredNameTouched(true);
  };

  // Updates the Email input stat on every keystroke
  const emailInputChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  // Email input blue handler
  const emailInputBlurHandler = (e) => {
    setEnteredEmailTouched(true);
  };

  // Form submission handler
  const formSubmissionHandler = (e) => {
    e.preventDefault();

    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);

    // Name and email input validation
    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }

    console.log(enteredName);
    console.log(enteredEmail);

    // Resets the states once submitted
    setEnteredName("");
    setEnteredNameTouched(false);
    setEnteredEmail("");
    setEnteredEmailTouched(false);
  };

  // Control the css - changes depending on state
  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name can not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsInvalid && (
          <p className="error-text">Email does not meet criteria.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
