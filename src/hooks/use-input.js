import { useState } from "react";

const useInput = (inputValidationFunc) => {
  const [inputValue, setInputValue] = useState("");
  const [wasInputTouched, setWasInputTouched] = useState(false);

  const isInputValid = inputValidationFunc(inputValue);
  const isErrorShown = !isInputValid && wasInputTouched;

  const onInputChangeHandler = (evt) => {
    const value = evt.target.value.trim();
    setInputValue(value);
  };

  const onInputBlurHandler = (evt) => {
    setWasInputTouched(true);
  };

  const resetInputHadler = () => {
    setInputValue("");
    setWasInputTouched(false);
  };

  return {
    inputValue,
    isInputValid,
    isErrorShown,
    onInputChangeHandler,
    onInputBlurHandler,
    resetInputHadler,
  };
};

export default useInput;
