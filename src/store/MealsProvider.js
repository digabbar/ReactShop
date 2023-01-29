import React, { useState, useEffect } from "react";
import MealsContext from "./meals-context";
const MealsProvider = (props) => {
  const [mealsData, setMealsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchMeals = async () => {
    setError(null);
    setLoading(true);
    try {
      const response = await fetch(
        "https://react-http-6be32-default-rtdb.firebaseio.com/meals.json"
      );
      const data = await response.json();
      const transformedData = [];
      for (let key in data) {
        transformedData.push({
          id: key,
          ...data[key],
        });
      }
      console.log(transformedData);
      setMealsData(transformedData);
    } catch (e) {
      setError(e.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  return (
    <MealsContext.Provider
      value={{
        meals: mealsData,
        loading,
        error,
      }}
    >
      {props.children}
    </MealsContext.Provider>
  );
};

export default MealsProvider;
