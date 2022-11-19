import { useState } from "react";

const useForm = () => {

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const reset = () => {
    setInputValue("");
  };

  return [inputValue, handleInputChange, reset];
  
};

export default useForm;
