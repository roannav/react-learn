import { useState } from "react";

// Controlled form
function App() {

  // local state for the text input
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    // prevent the form from acting like a regular, uncontrolled form
    // which would send a GET request and refresh the page
    e.preventDefault();
    
    // Reset form: clear out the text input
    setName("");  

    console.log('Form submitted');
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="Field">
            <label htmlFor="name">Name:</label>
            <input id="name"
              type="text" placeholder="Name" name="name"
              value={name} onChange={e => setName(e.target.value)} />
          </div>
          {/* submit button is disabled, if text input is empty */}
          <button disabled={!name} type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
