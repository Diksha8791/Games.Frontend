import { useState } from "react";

interface ListGroupProps {
  cities: string[];
  title: string;
  //(item: string) => void;
  onSelectCity: (city: string) => void;
}

const ListGroup = (props: ListGroupProps) => {
  const { cities, title, onSelectCity } = props;
  const [selectedCity, setSelectedCity] = useState(-1);

  const handleClick = (index: number, city: string) => {
    setSelectedCity(index);
    console.log(city);
  };

  return (
    <>
      <h1>{title}</h1>
      <ul className="list-group">
        {cities.map((city, index) => (
          <li
            className={
              selectedCity === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={city + index}
            onClick={() => {
              handleClick(index, city);
              onSelectCity(city);
            }}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
