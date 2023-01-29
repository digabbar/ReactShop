import React from "react";
const MealsContext = React.createContext({
  meals: [],
  loading: false,
  error: null,
});
export default MealsContext;
