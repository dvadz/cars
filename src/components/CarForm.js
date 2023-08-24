import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addCar } from "../store";

const CarForm = () => {
  const dispatch = useDispatch();

  const { name, cost } = useSelector((state) => {
    return state.form;
  });

  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value));
  };

  const handleCostChange = (event) => {
    dispatch(changeCost(parseInt(event.target.value || 0)));
  };

  const handleSubmit = (event) => {
    console.log("submit");
    event.preventDefault();
    dispatch(addCar({ name, cost }));
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add a Car</h4>
      <form>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input is-expanded"
              onChange={handleNameChange}
              value={name}
            ></input>
          </div>
          <div className="field">
            <label className="label">Cost</label>
            <input
              className=" input is-expanded"
              onChange={handleCostChange}
              value={cost || ""}
              type="number"
            ></input>
          </div>
          <div className="field">
            <button className="button is-link" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CarForm;
