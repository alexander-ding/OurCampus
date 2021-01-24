import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { allSuggestedEventsSelector, selectedCategorySelector } from "../../../selectors";
import { selectCategory } from "../../../actions/categoriesAction";

const getCount = (events) => {
  const uniqueKeys = [...new Set(events.map(event => event.category))];
  let count = {};
  uniqueKeys.forEach(key => {
    count[key] = 0;
  });
  events.forEach(event => {
    count[event.category] += 1;
  })
  let counts = Object.entries(count).map(([category, n]) => ({
    category,
    count: n,
  }));
  counts.sort((a, b) => b.count - a.count)
  return counts;
}

const Categories = ({events, selectedCategory, select}) => {
  const counts = getCount(events);
  useEffect(() => {
    if (selectedCategory && !counts.map(count => count.category).includes(selectedCategory)) {
      select(null);
    }
  });

  return <form>
    <p>
      <label>
        <input type="radio" value="" checked={selectedCategory === null} onChange={event => select(null)}/>
        <span>All ({events.length})</span>
      </label>
    </p>
    { counts.map(count => 
      <p key={count.category}>
        <label>
          <input type="radio" value={count.category} checked={selectedCategory === count.category} onChange={event => select(event.target.value)}/>
          <span>{count.category} ({count.count})</span>
        </label>
      </p>) }
  </form>;
}

const enhance = compose(
  connect(state => ({
    events: allSuggestedEventsSelector(state),
    selectedCategory: selectedCategorySelector(state),
  }), dispatch => ({
    select: (category) => dispatch(selectCategory(category)),
  }))
)

export default enhance(Categories);