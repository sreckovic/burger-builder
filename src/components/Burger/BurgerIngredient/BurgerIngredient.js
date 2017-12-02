import React, { Component } from "react";
import PropTypes from "prop-types";

import classes from "./BurgerIngredient.css";

class BurgerIngredient extends Component {
  render() {
    let igredient = null;

    switch (this.props.type) {
      case "bread-bottom":
        igredient = <div className={classes.BreadBottom} />;
        break;
      case "bread-top":
        igredient = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1} />
            <div className={classes.Seeds2} />
          </div>
        );
        break;
      case "meat":
        igredient = <div className={classes.Meat} />;
        break;
      case "cheese":
        igredient = <div className={classes.Cheese} />;
        break;
      case "salad":
        igredient = <div className={classes.Salad} />;
        break;
      case "bacon":
        igredient = <div className={classes.Bacon} />;
        break;
      default:
        igredient = null;
    }

    return igredient;
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;
