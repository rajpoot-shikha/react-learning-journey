import { useState } from "react";

//1.decide on the shape of inputs 2.Put them in a interface.
interface Props {
  items: string[];
  title: String;
  onSelectItem: (item: String) => void;
}

function ListGroup({ items, title, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{title}</h1>
      {items.length === 0 && <p>No Element Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              index === selectedIndex
                ? "list-group-item active"
                : "list-group-item"
            }
            //when the logic gets complex it is moved to a separate function
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
