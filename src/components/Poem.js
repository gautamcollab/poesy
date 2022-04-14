import React, {useState} from "react";

function Poem({poem}) {
  const {id, title, content, author} = poem
  const [read, setRead] = useState(false)
  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <p>
        <strong>- By {author}</strong>
      </p>
      <button onClick={() => setRead({
        
      })}>Mark as read</button>
    </div>
  );
}

export default Poem;