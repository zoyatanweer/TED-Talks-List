import React, { useState } from "react";
import "./styles.css";

const talksDB = { 
  Mind: [ 
    { name: "Inside the mind of a master procrastinator", 
     speaker: "Tim Urban" ,
     rating:"5/5"
    },
    {
      name: "The happy secret to better work",
      speaker: "Shawn Achor" ,
      rating:"4.8/5"
    },
    {
      name: "Mentalism, mind reading and the art of getting inside your head",
      speaker: "Derren Brown",
      rating: "4.5/5"
    }
  ],
  WellBeing: [ 
    { name: "What makes a good life? Lessons from the longest study on happiness", 
     speaker: "Robert Waldinger" ,
     rating:"5/5"
    },
    {
      name: "Sleep is your superpower", 
      speaker: "Matt Walker" ,
      rating:"4.7/5"
    },
    {
      name: "How to pratice emotional first aid",
      speaker: "Guy Winch",
      rating:"4.7/5"
    }
  ],
  BodyLanguage: [ 
    { 
      name: "How to make stress your friend",
      speaker: "Kelly McGonigal" ,
      rating:"5/5"
    },
    { 
      name: "Your body language may shape who you are", 
      speaker: "Amy Cuddy" ,
      rating:"5/5"
    },
    {
      name: "How to stay calm under pressure",
      speaker:"Noa Kageyama and Pen-Pen Chen" , 
      rating:"4.5/5"
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
              <div style={{ fontSize: "smaller" }}> {talk.rating} </div>

            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
