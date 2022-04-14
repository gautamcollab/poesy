import React, {useState} from "react";

function NewPoemForm() {
  const [form, setForm] = useState({
    title: '', 
    content: '', 
    author: '',
  }) 


  return (
    <form className="new-poem-form" onSubmit={async (e) => {
      e.preventDefault()
      let req = await fetch('http://localhost:8004/poems', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(form) 
      })
      let res = await req.json()
    }}>
      <input placeholder="Title" />
      <input placeholder="Author" />
      <textarea placeholder="Write your masterpiece here..." rows={10} />
      <input type="submit" />
    </form>
  );
}

export default NewPoemForm;
