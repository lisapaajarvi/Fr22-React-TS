import { useEffect, useState } from "react";
import "./App.css";
import AddGuineaPig from "./AddGuineaPig";
import ShowGuineaPigs from "./ShowGuineaPigs";
import Header from "./Header";
import { MainContainer } from "./styles";

export interface Guineapig {
  id: number;
  name: string;
  age: number;
  likes?: string;
}

function App() {
  const [guineapigs, setGuineapigs] = useState<Guineapig[]>([]);

  const getGuineapigs = () => {
    fetch("http://localhost:3000/guineapigs")
      .then((res) => res.json())
      .then((data: Guineapig[]) => {
        setGuineapigs(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getGuineapigs();
  }, []);

  const addNewGuineaPig = (newPig: Guineapig) => {
    fetch("http://localhost:3000/guineapigs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPig),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        getGuineapigs();
      });
  };

  return (
    <>
      <Header />
      <MainContainer>
        <AddGuineaPig addNewGuineapig={addNewGuineaPig} />
        <ShowGuineaPigs guineapigs={guineapigs} />
      </MainContainer>
    </>
  );
}

export default App;
