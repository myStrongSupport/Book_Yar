import { useState } from "react";
const useForm = (validValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouch, setIsTouch] = useState(false);

  const valueIsValid = validValue(enteredValue);

  const valueIsinvalid = !enteredValue && isTouch;
  const valueChangeHander = (e) => {
    setEnteredValue(e.target.value);
  };
  const valueBlurHandler = (e) => {
    setIsTouch(true);
  };
  const rest = () => {
    setEnteredValue("");
    setIsTouch(false);
  };
  return {
    value: enteredValue,
    isInvalid: valueIsinvalid,
    isValid: valueIsValid,
    valueChangeHander,
    valueBlurHandler,
    rest,
  };
};

export default useForm;
