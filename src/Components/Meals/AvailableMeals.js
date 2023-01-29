import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import { useContext } from "react";
import MealsContext from "../../store/meals-context";
const AvailableMeals = () => {
  const mealsCtx = useContext(MealsContext);
  const mealsList = mealsCtx.meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  if (mealsCtx.loading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (mealsCtx.error) {
    return (
      <section className={classes.MealsError}>
        <p>{mealsCtx.error}</p>
      </section>
    );
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{!mealsCtx.loading && !mealsCtx.error && mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
