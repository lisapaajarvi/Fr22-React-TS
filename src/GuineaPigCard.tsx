import { Guineapig } from "./App";

interface Props {
  guineapig: Guineapig;
}

export default function GuineaPigCard({ guineapig }: Props) {
  return (
    <li key={guineapig.id}>
      {guineapig.name}, {guineapig.age} {" år"}{" "}
      {guineapig.likes && ", gillar: " + guineapig.likes}
    </li>
  );
}
