import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../store";

const CarForm = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <form>
        <label>Name</label>
        <input></input>
      </form>
    </div>
  );
};

export default CarForm;
