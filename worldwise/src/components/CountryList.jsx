/* eslint-disable react/prop-types */
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from "./CountryItem";
import {v4 as uuidv4} from "uuid"
function CountryList({ isLoading, cities }) {
  if (isLoading) return <Spinner />;
  if (!cities.length) {
    return <Message message="Add your first city by clicking on the map!" />;
  }
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.contry))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr
  }, []);
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={uuidv4()} />
      ))}
    </ul>
  );
}

export default CountryList;
