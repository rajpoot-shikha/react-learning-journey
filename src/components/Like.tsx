import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

interface Props {
  onClick: () => void;
}

function Like({ onClick }: Props) {
  const [status, setStatus] = useState(false);
  const toggle = () => {
    //whatever status is pass inverted value
    setStatus(!status);
    onClick();
  };

  if (status)
    return (
      <AiFillHeart color="#ff6b81" size={20} onClick={toggle}></AiFillHeart>
    );
  else return <AiOutlineHeart size={20} onClick={toggle}></AiOutlineHeart>;
}
export default Like;
