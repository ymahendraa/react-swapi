import { useState } from "react";
import PlanetType from "../planet";

const useSaveToWishList = (planet: PlanetType) => {
  // load wish list from local storage
  const initialWishList = JSON.parse(localStorage.getItem("wishList") || "[]");
  const [wishList, setWishList] = useState<PlanetType[]>(initialWishList);
  const planetExists = wishList.find(
    (item: PlanetType) => item.name === planet.name
  );
  const saveToWishList = () => {
    if (!planetExists && planet) {
      const newWishList = [...wishList, planet];
      setWishList(newWishList);
      localStorage.setItem("wishList", JSON.stringify(newWishList));
      alert(`${planet.name} added to wish list!`);
    } else {
      alert(`${planet.name} already exists in wish list!`);
    }
  };

  const removeFromWishList = () => {
    if (planetExists && planet) {
      const newWishList = wishList.filter(
        (item: PlanetType) => item.name !== planet.name
      );
      setWishList(newWishList);
      localStorage.setItem("wishList", JSON.stringify(newWishList));
      alert(`${planet.name} removed from wish list!`);
    } else {
      alert(`${planet.name} does not exist in wish list!`);
    }
  };

  return { wishList, saveToWishList, planetExists, removeFromWishList };
};

export default useSaveToWishList;
