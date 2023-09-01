import { Guineapig } from "./App";
import GuineaPigCard from "./GuineaPigCard";

interface Props {
  guineapigs: Guineapig[];
}

export default function ShowGuineaPigs(props: Props) {
  return (
    <div>
      <h2>Här visas marsvin:</h2>
      <ol>
        {props.guineapigs.map((gp) => (
          <GuineaPigCard guineapig={gp} />
        ))}
      </ol>
    </div>
  );
}
