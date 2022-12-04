import { useState } from 'react'; 

export default function PersonForm() { 
  const [form, setForm] = useState({ 
    firstName: 'Walt', 
    lastName: 'Disney', 
    city: 'Anaheim, CA', 
  }); 

  return ( 
    <div id="person-form"> 
      <label> 
        First name: 
        <input 
          value={form.firstName} 
          onChange={e => { 
            setForm({ 
              ...form, 
              firstName: e.target.value 
            }); 
          }} 
        /> 
      </label> 
      <label> 
        Last name: 
        <input 
          value={form.lastName} 
          onChange={e => { 
            setForm({ 
              ...form, 
              lastName: e.target.value 
            }); 
          }} 
        /> 
      </label> 
      <label> 
        City: 
        <input 
          value={form.city} 
          onChange={e => { 
            setForm({ 
              ...form, 
              city: e.target.value 
            }); 
          }} 
        /> 
      </label> 
      <p> 
        {form.firstName}{' '} 
        {form.lastName}{' '} 
        ({form.city})
      </p> 
    </div> 
  ); 
} 
