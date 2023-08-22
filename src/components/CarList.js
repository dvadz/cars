import { useSelector } from "react-redux";

const CarList = () => {
  const cars = useSelector((state) => {
    return state.cars.data;
  });

  const renderedCars = cars.map((car) => {
    return (
      <div key={car.id}>
        <span>{car.name}</span> - $<span>{car.cost}</span>
      </div>
    );
  });

  return (
    <div>
      {renderedCars}
      <hr></hr>
    </div>
  );
};

export default CarList;
