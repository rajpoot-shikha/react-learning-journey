//decide the shape of inputs
//1. btn text
//2. btn type
interface Props {
  children: string;
  //making color prop optional
  //confining the values of color to some fix values, so that if by mistake it is sent to something unwanted we get compile time error by typescript compliler.
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

function Button({ children, color = "primary", onClick }: Props) {
  return (
    <div>
      <button type="button" className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
    </div>
  );
}

export default Button;
