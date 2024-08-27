import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

//event handler
const handleClick = (item: String) => {
  console.log(item);
};

function App() {
  //ListGroup component can be reused for various kinds of lists.
  const colors = ["Red", "Yellow", "Blue", "Orange"];

  return (
    <>
      <Button color="danger" onClick={() => console.log("clicked")}>
        Button
      </Button>
      <ListGroup items={colors} title="Colors" onSelectItem={handleClick} />
    </>
  );
}

export default App;
