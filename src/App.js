import React, { useState } from "react";
import "./styles.css";

const talksDB = { 
  Mind: [ 
    { name: "Inside the mind of a master procrastinator", 
     speaker: "Tim Urban" 
    },
    {
      name: "The happy secret to better work",
      speaker: "Shawn Achor"
    }
  ],
  WellBeing: [ 
    { name: "What makes a good life? Lessons from the longest study on happiness", 
     speaker: "Robert Waldinger" 
    },
    {
      name: "Sleep is your superpower", 
      speaker: "Matt Walker" 
    }
  ],
  BodyLanguage: [ 
    { 
      name: "How to make stress your friend",
      speaker: "Kelly McGonigal"
    },
    { 
      name: "Your body language may shape who you are", 
      speaker: "Amy Cuddy" 
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Mind");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>Best TED Talks</h1>
      <p style={{ fontSize: "1.3rem" }}>
        {" "}
       See my all time favourite TED talks here. Select a genre to see the names.{" "}
      </p>

      <div>
        {Object.keys(talksDB).map((genre) => ( 
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              backgroundColor:"black",
              border:"2px solid black",
              borderRadius: "0.5rem",
              color:"white",
              cursor: "pointer",
              fontSize: "1.1rem",
              margin: "1rem 0.3rem",
              padding: "0.5rem 1rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {talksDB[selectedGenre].map((talk) => ( 
            <li
              key={talk.name} 
              style={{
                backgroundColor:"#e9ecef",
                border: "2px solid #ef233c",
                borderRadius: "1rem",
                color: "black",
                listStyle: "none",
                margin: "1rem 0rem",
                padding: "1.5rem",
                width: "70%",
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {talk.name} </div> 
              <div style={{ fontSize: "smaller" }}> {talk.speaker} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
