import styles from "./Button.module.css";
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
      <button
        type="button"
        className={[styles.btn, styles["btn-" + color]].join(" ")}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
