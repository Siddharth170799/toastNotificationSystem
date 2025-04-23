import React, { useContext, useState } from "react";
import GlobalContext from "./Context";

const useToast = () => {
  const [userInput, setUserInput] = useState({});

  const { data, setData } = useContext(GlobalContext);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = () => {
    setData([...data, { ...userInput, display: true }]);
  };

  return { userInput, setUserInput, handleInput, handleSubmit, data };
};

export default useToast;
