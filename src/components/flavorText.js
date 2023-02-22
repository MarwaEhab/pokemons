import React, { useEffect, useState } from "react";

function FlavorText({ id }) {
  const [flavorText, setFalvorText] = useState("");

  useEffect(() => {
    if (id) {
      fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
        .then((res) => res.json())
        .then((json) => setFalvorText(json));
    }
  }, [id]);

  return (
    <div className="flavorText">
      <p>
        {flavorText.flavor_text_entries &&
          flavorText.flavor_text_entries[0].flavor_text}
      </p>
    </div>
  );
}

export default FlavorText;
