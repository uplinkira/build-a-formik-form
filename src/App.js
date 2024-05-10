import React from "react";
import { useFormik } from "formik";

function App() {
  // Initialize the useFormik hook to manage form state and validation
  const formik = useFormik({
    // Set initial form values for email and password fields
    initialValues: {
      email: "",
      password: "",
    },
    // Define form submission behavior
    onSubmit: (values) => {
      // Display an alert when login is successful
      alert("Login Successful");
    },
    // Define form validation rules
    validate: (values) => {
      let errors = {};
      // Check if email field is empty
      if (!values.email) {
        errors.email = "Email field is required";
      } else if (
        // Check if email format is valid using regular expression
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
      ) {
        errors.email = "Email format is invalid";
      }
      // Check if password field is empty
      if (!values.password) {
        errors.password = "Password field is required";
      }
      return errors;
    },
  });

  return (
    <div>
      {/* Form component */}
      <form onSubmit={formik.handleSubmit}>
        {/* Email input field */}
        <div>Email:</div>
        <input
          id="emailField"
          type="text"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {/* Display error message if email field is invalid */}
        {formik.errors.email ? (
          <div id="emailError" style={{ color: "red" }}>
            {formik.errors.email}
          </div>
        ) : null}
        {/* Password input field */}
        <div>Password:</div>
        <input
          id="pswField"
          type="password" // Change input type to password for security
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <br />
        {/* Display error message if password field is invalid */}
        {formik.errors.password ? (
          <div id="pswError" style={{ color: "red" }}>
            {formik.errors.password}
          </div>
        ) : null}
        {/* Submit button */}
        <button id="submitBtn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
