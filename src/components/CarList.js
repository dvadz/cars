import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

const CarList = () => {
  const dispatch = useDispatch();

  const { cars, name } = useSelector(
    ({ form: { name }, cars: { searchTerm, data } }) => {
      const filterCars = data.filter((car) => {
        return car.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
      return { cars: filterCars, name };
    }
  );

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };

  const renderedCars = cars.map((car) => {
    return (
      <div key={car.id} className="panel">
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleCarDelete(car)}
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="car-list">
      {renderedCars}
      <hr></hr>
    </div>
  );
};

export default CarList;
