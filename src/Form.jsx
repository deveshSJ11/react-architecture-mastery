import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    fullName: "",
    userName: "",
  });
  // let handleNameChange = (event) => {
  //   setFullName(event.target.value);
  // };

  // let handleUsername = (event) => {
  //   setUserName(event.target.value);
  // };

   let handleInputChange = (event) => {
   
    setFormData( (currData) => {
        
          return {...currData, [event.target.name]:event.target.value };
    })
   };

   let handleSubmit =(event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
       fullName: "",
       userName: "",
       password:"",
    });
   }

  return (
  
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name</label>
        <input
          placeholder="Enter Full name"
          type="text"
          value={formData.fullName}
          onChange={handleInputChange}
          id="fullName"
          name="fullName"
        />
  
     
            <br></br>
            <br></br>

        <label htmlFor="userName">Username</label>
        <input
          placeholder="Enter username"
          type="text"
          value={formData.userName}
          onChange={handleInputChange}
          id="userName"
          name="userName"
        />
        <br></br>
            <br></br>

        <label htmlFor="password">Password</label>
        <input
          placeholder="Enter password"
          type="password"
          value={formData.password}
          onChange={handleInputChange}
          id="password"
          name="password"
        />
        <button type="submit">Submit</button>
      </form>
   
  );
}
