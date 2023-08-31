import { Guineapig } from "./App";

interface Props {
  guineapigs: Guineapig[];
}

export default function ShowGuineaPigs(props: Props) {
  return (
    <div>
      <h2>Här visas marsvin:</h2>
      <ol>
        {props.guineapigs.map((gp) => (
          <li key={gp.id}>
            {gp.name}, {gp.age} {" år"} {gp.likes && ", gillar: " + gp.likes}
          </li>
        ))}
      </ol>
    </div>
  );
}
