import { Fragment, useRef } from "react";
import useInput from "../hooks/useInput";

const UserForm = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  const {
    value: enteredTextArea,
    isValid: enteredTextAreaIsValid,
    hasError: textAreaHasError,
    valueChangeHandler: textAreaChangeHandler,
    inputBlurHandler: textAreaBlurHandler,
    reset: resetTextAreaInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredDate,
    isValid: enteredDateIsValid,
    hasError: dateInputHasError,
    valueChangeHandler: dateChangeHandler,
    inputBlurHandler: dateBlurHandler,
    reset: resetDateInput,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (
    enteredNameIsValid &&
    enteredEmailIsValid &&
    enteredTextAreaIsValid &&
    enteredDateIsValid
  ) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (
      !enteredNameIsValid ||
      !enteredEmailIsValid ||
      !enteredTextAreaIsValid
    ) {
      return;
    }

    resetNameInput();
    resetEmailInput();
    resetTextAreaInput();
    resetDateInput();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  const textAreaInputClasses = textAreaHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <Fragment>
      <h1>Registration Form</h1>
      <form onSubmit={formSubmitHandler}>
        <div className={nameInputClasses}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
          {nameInputHasError && (
            <p className="error-text">Name must not be empty.</p>
          )}
        </div>
        <div className={emailInputClasses}>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}
          />

          {emailInputHasError && (
            <p className="error-text">Please enter a valid email.</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="name">Your DOB</label>
          <input
            type="date"
            id="name"
            onChange={dateChangeHandler}
            onBlur={dateBlurHandler}
            value={enteredDate}
          />
          {dateInputHasError && (
            <p className="error-text">Please enter a valid date.</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="name">Your Country</label>
          <select id="country" name="country" className="form-control">
            <option value="Afghanistan">Afghanistan</option>
            <option value="Åland Islands">Åland Islands</option>
            <option value="Albania">Albania</option>
            <option value="Algeria">Algeria</option>
            <option value="India" selected>
              India
            </option>
            <option value="Indonesia">Indonesia</option>
            <option value="Iran, Islamic Republic of">
              Iran, Islamic Republic of
            </option>
            <option value="Iraq">Iraq</option>
            <option value="Ireland">Ireland</option>
          </select>
        </div>
        <div className={textAreaInputClasses}>
          <label htmlFor="textarea">About</label>
          <textarea
            type="text"
            id="textarea"
            onChange={textAreaChangeHandler}
            onBlur={textAreaBlurHandler}
            value={enteredTextArea}
            rows="4"
            cols="42"
          />

          {textAreaHasError && (
            <p className="error-text">Please enter about you.</p>
          )}
        </div>
        <div className="radioSelector">
          <label htmlFor="gender">Gender</label>
          <input type="radio" value="Male" name="gender" defaultChecked /> Male
          <input type="radio" value="Female" name="gender" /> Female
        </div>
        <div className="form-actions">
          <button disabled={!formIsValid}>Submit</button>
        </div>
      </form>
    </Fragment>
  );
};

export default UserForm;
