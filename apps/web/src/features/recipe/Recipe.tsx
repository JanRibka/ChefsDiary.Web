import { useParams } from "react-router-dom";

const Recipe = () => {
  const { id } = useParams();
  return <>{id}</>;
};

export default Recipe;
