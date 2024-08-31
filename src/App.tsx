import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup";
import Like from "./components/Like";

//event handler
const handleClick = (item: String) => {
  console.log(item);
};

function App() {
  //ListGroup component can be reused for various kinds of lists.
  const colors = ["Red", "Yellow", "Blue", "Orange"];
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>YAYY ALERT</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        Button
      </Button>
      <ListGroup items={colors} title="Colors" onSelectItem={handleClick} />
      <Like
        onClick={() => {
          console.log("clicked");
        }}
      ></Like>
    </>
  );
}

export default App;
