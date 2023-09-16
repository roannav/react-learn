import "./App.css";
import { useState, useEffect } from "react";
import { validateEmail } from "./utils";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  useEffect(() => {
    console.log("First name has changed to", firstName);
  }, [firstName]);

  useEffect(() => {
    console.log("Role has changed to", role);
  }, [role]);

  const getIsFormValid = () => {
    // The rules for the form to be valid are as follows:

    // The first name cannot be empty.
    if (!firstName) return false;

    // The email must be a valid email address and can't be empty.
    // A function called validateEmail has already been provided for you
    // to check if the email is valid.  It returns true if the email is valid,
    // otherwise false is returned.
    if (!email || !validateEmail(email)) return false;

    // The password must be at least 8 characters long.
    if (!password.value || password.value.length < 8) return false;

    // The role must be either individual or business.
    if (!((role == "individual") || (role == "business"))) return false;


    return true;
  };

  const clearForm = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword({
      value: "",
      isTouched: false,
    });
    setRole("role");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input placeholder="First name"
              value={firstName} onChange={e => setFirstName(e.target.value)} />
          </div>
          <div className="Field">
            <label>Last name</label>
            <input placeholder="Last name"
              value={lastName} onChange={e => setLastName(e.target.value)} />
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input placeholder="Email address"
              value={email} onChange={ e => setEmail(e.target.value) } />
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input
              type="password"
              placeholder="Password"
              value={password.value}
              onChange={e => {
                setPassword({ value: e.target.value, isTouched: true });
              }} 
              onFocus={()=> setPassword({ ...password, isTouched: true})}
              onBlur={()=> setPassword({ ...password, isTouched: true})}
           />
            {password.isTouched && (password.value.length < 8) && <PasswordErrorMessage />}
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select value={role} onChange={e => setRole(e.target.value)}>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>

          {/* Note: the following will silently fail,
          because the <button> or <input> type needs to be "submit":
          <input type="button" value="Submit" />
          */}
          
        </fieldset>
      </form>
    </div>
  );
}

export default App;
