import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup";
import Like from "./components/Like";
import ExpandableText from "./components/ExpandableText";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

//event handler
const handleClick = (item: String) => {
  console.log(item);
};

function App() {
  //ListGroup component can be reused for various kinds of lists.
  const colors = ["Red", "Yellow", "Blue", "Orange"];
  const [alertVisible, setAlertVisibility] = useState(false);

  //ex1 (Managing State): to change the name of player
  const [game, setGame] = useState({
    id: 1,
    player: {
      fname: "John",
      lname: "Smith",
    },
  });

  //ex2 (Managing State): to add a topping
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  //ex3 (Managing State): update quantity
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  const handleUpdateGame = () => {
    setGame({ ...game, player: { ...game.player, fname: "Nick" } });
    console.log(game);
  };

  const handleAddTopping = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Olives"] });
    console.log(pizza);
  };

  const handleUpdateQuantity = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: 2 } : item
      ),
    });
    console.log(cart);
  };

  // return (
  //   <>
  //     {alertVisible && (
  //       <Alert onClose={() => setAlertVisibility(false)}>YAYY ALERT</Alert>
  //     )}
  //     <Button color="primary" onClick={() => setAlertVisibility(true)}>
  //       Button
  //     </Button>
  //     <ListGroup items={colors} title="Colors" onSelectItem={handleClick} />
  //     <Like
  //       onClick={() => {
  //         console.log("clicked");
  //       }}
  //     ></Like>
  //     <button onClick={handleUpdateGame}>Update Game</button>
  //     <button onClick={handleAddTopping}>Add Topping</button>
  //     <button onClick={handleUpdateQuantity}>Update Quantity</button>
  //     <ExpandableText maxChars={10}>
  //       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, cumque
  //       aliquid, temporibus assumenda sint minus voluptatem minima sit rem in
  //       magni neque autem ullam cum accusantium dolor, laudantium ipsa rerum
  //       quos non? Accusamus numquam, quam exercitationem ut earum ratione nemo
  //       porro tenetur aliquid eligendi soluta ipsum repellendus dolorum dicta!
  //       Modi quidem aspernatur officiis, reiciendis suscipit explicabo magnam
  //       optio et exercitationem delectus ipsam pariatur mollitia, dignissimos
  //       obcaecati est inventore animi doloremque soluta aliquid ad nesciunt iure
  //       sint? Unde fugiat a rem odio culpa magni commodi natus? Cupiditate porro
  //       laborum provident nobis facilis quisquam, sit ducimus aut, vitae odio
  //       aperiam nulla nesciunt.
  //     </ExpandableText>
  //     <Form></Form>
  //   </>
  // );

  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);
  console.log("cartItems>>>", cartItems);
  return (
    <>
      <div>Learning about sharing data between components</div>
      <NavBar cartItemsCount={cartItems.length}></NavBar>
      <Cart cartItems={cartItems} onClear={() => setCartItems([])}></Cart>
    </>
  );
}

export default App;
