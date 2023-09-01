import { Guineapig } from "./App";
import GuineaPigCard from "./GuineaPigCard";
import { Heading2 } from "./styles";

interface Props {
  guineapigs: Guineapig[];
}

export default function ShowGuineaPigs(props: Props) {
  return (
    <div>
      <Heading2>Här visas marsvin:</Heading2>
      <ol>
        {props.guineapigs.map((gp) => (
          <GuineaPigCard guineapig={gp} />
        ))}
      </ol>
    </div>
  );
}
