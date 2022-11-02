//import useInput from "../hooks/use-input";
import useInputV2 from "../hooks/use-inputV2";

const isValueNotEmpty = (val) => val.trim().length !== 0;

const isEmailCorrect = (val) => val.trim().includes("@");

const SomeInput = (props) => {
  const {
    inputValue: nameInputValue,
    isInputValid: isNameInputValid,
    isErrorShown: isNameInputErrorShown,
    onInputChangeHandler: onNameInputChangeHandler,
    onInputBlurHandler: onNameInputBlurHandler,
    resetInputHadler: resetNameInputHadler,
  } = useInputV2(isValueNotEmpty);

  const {
    inputValue: lastNameInputValue,
    isInputValid: isLastNameInputValid,
    isErrorShown: isLastNameInputErrorShown,
    onInputChangeHandler: onLastNameInputChangeHandler,
    onInputBlurHandler: onLastNameInputBlurHandler,
    resetInputHadler: resetLastNameInputHadler,
  } = useInputV2(isValueNotEmpty);

  const {
    inputValue: emailInputValue,
    isInputValid: isEmailInputValid,
    isErrorShown: isEmailInputErrorShown,
    onInputChangeHandler: onEmailInputChangeHandler,
    onInputBlurHandler: onEmailInputBlurHandler,
    resetInputHadler: resetEmailInputHadler,
  } = useInputV2(isEmailCorrect);

  const isFormValid =
    isNameInputValid && isLastNameInputValid && isEmailInputValid;

  const onFormSubmitHandler = (evt) => {
    evt.preventDefault();

    if (isFormValid) {
      console.log(nameInputValue, lastNameInputValue, emailInputValue);
      resetNameInputHadler();
      resetLastNameInputHadler();
      resetEmailInputHadler();
    }
  };

  return (
    <form onSubmit={onFormSubmitHandler}>
      <div className={`form-control ${isNameInputErrorShown && "invalid"}`}>
        <label htmlFor="name">Enter your name</label>
        <input
          type="text"
          id="name"
          value={nameInputValue}
          onChange={onNameInputChangeHandler}
          onBlur={onNameInputBlurHandler}
        />
        {isNameInputErrorShown && (
          <p className="error-text">The name is wrong</p>
        )}
      </div>
      <div className={`form-control ${isLastNameInputErrorShown && "invalid"}`}>
        <label htmlFor="name">Enter your last name</label>
        <input
          type="text"
          id="name"
          value={lastNameInputValue}
          onChange={onLastNameInputChangeHandler}
          onBlur={onLastNameInputBlurHandler}
        />
        {isLastNameInputErrorShown && (
          <p className="error-text">The last name is wrong</p>
        )}
      </div>
      <div className={`form-control ${isEmailInputErrorShown && "invalid"}`}>
        <label htmlFor="name">Enter your Email</label>
        <input
          type="text"
          id="name"
          value={emailInputValue}
          onChange={onEmailInputChangeHandler}
          onBlur={onEmailInputBlurHandler}
        />
        {isEmailInputErrorShown && (
          <p className="error-text">The Email address is wrong</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Отправить</button>
      </div>
    </form>
  );
};

export default SomeInput;
