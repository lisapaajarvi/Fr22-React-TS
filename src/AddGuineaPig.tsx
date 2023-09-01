import { useState } from "react";
import { Guineapig } from "./App";
import { Heading2 } from "./styles";

interface Props {
  addNewGuineapig: (guineapig: Guineapig) => void;
}

export default function AddGuineaPig({ addNewGuineapig }: Props) {
  const [guineaPigName, setGuineaPigName] = useState("");
  const [guineaPigAge, setGuineaPigAge] = useState("");
  const [guineaPigLikes, setGuineaPigLikes] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("formulär sparat");
    const newPig = {
      name: guineaPigName,
      age: Number(guineaPigAge),
      likes: guineaPigLikes,
      id: Date.now(),
    };
    addNewGuineapig(newPig);
    setGuineaPigName("");
    setGuineaPigAge("");
    setGuineaPigLikes("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Heading2>Lägg till marsvin här:</Heading2>
        <div>
          <h4>Marsvinets namn:</h4>
          <input
            type="text"
            value={guineaPigName}
            required
            onChange={(e) => setGuineaPigName(e.target.value)}
          />
        </div>
        <div>
          <h4>Marsvinets ålder:</h4>
          <input
            type="number"
            value={guineaPigAge}
            required
            onChange={(e) => setGuineaPigAge(e.target.value)}
          />
        </div>
        <div>
          <h4>Vad gillar marsvinet?</h4>
          <input
            type="text"
            value={guineaPigLikes}
            onChange={(e) => setGuineaPigLikes(e.target.value)}
          />
        </div>
        <button type="submit">Spara</button>
      </form>
    </div>
  );
}
