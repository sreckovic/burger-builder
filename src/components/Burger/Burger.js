import React from "react";
import BugerIngredient from "./BurgerIngredient/BurgerIngredient";

import classes from "./Burger.css";

const burger = props => {
  const transformedIngredients = Object.keys(props.ingredients).map(igKey => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <BugerIngredient key={igKey + i} type={igKey} />;
    });
  });

  return (
    <div className={classes.Burger}>
      <BugerIngredient type="bread-top" />
      {transformedIngredients}
      <BugerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
