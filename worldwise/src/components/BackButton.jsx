import { useNavigate } from "react-router-dom";
import Button from "./Button";

function BackButton() {
  const nagivate = useNavigate();
  return (
    <Button
      type="back"
      onClick={(e) => {
        e.preventDefault();
        nagivate(-1);
      }}
    >
      &larr; Back
    </Button>
  );
}

export default BackButton;
