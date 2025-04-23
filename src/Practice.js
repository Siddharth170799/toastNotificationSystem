// import React, { useContext, useState } from "react";
// import GlobalContext from "./Context";
// import Form from "./Form";
// import Toast from "./Toast";

// const Practice = () => {
//   const [userInput, setUserInput] = useState({});

//   const { data, setData } = useContext(GlobalContext);

//   const handleInput = (e) => {
//     const { name, value } = e.target;
//     setUserInput((prev) => {
//       return {
//         ...prev,
//         [name]: value,
//       };
//     });
//   };

//   const handleSubmit = () => {
//     // setData([...data, { ...userInput, display: true }]);
//     // setUserInput({});
//     setData([...data, {...userInput,display:true}]);
//     setUserInput({});
//   };
// console.log(data)
//   return (
//     <>
//       <h1>Toast Notification System</h1>
//       <Form handleInput={handleInput} handleSubmit={handleSubmit} />
//       {data.map((item, index) => {
//         return (
//           <Toast
//             key={index}
//             title={item.title}
//             message={item.message}
//             duration={item.duration}
//             type={item.type}
//             position={item.position}
//             display={item.display}
//           />
//         );
//       })}
//     </>
//   );
// };

// export default Practice;

import React, { useContext, useState } from "react";
import GlobalContext from "./Context";
import Form from "./Form";
import Toast from "./Toast";
import useToast from "./useToast";

const Practice = () => {
  const { userInput, setUserInput, handleInput, handleSubmit, data } =
    useToast();

  return (
    <>
      <h1>Toast Notification System</h1>
      <Form handleInput={handleInput} handleSubmit={handleSubmit} />
      {data.map((item, index) => {
        return (
          <Toast
            key={index}
            title={item.title}
            message={item.message}
            duration={item.duration}
            type={item.type}
            position={item.position}
            display={item.display}
          />
        );
      })}
    </>
  );
};

export default Practice;
