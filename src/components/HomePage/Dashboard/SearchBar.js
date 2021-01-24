import React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { search } from "../../../actions/categoriesAction";
import { searchSelector } from "../../../selectors";

const SearchBar = ({search, searchText}) => {
  return <div className="input-field">
    <i className="material-icons prefix">search</i>
    <input id="search" type="text" onChange={e => search(e.target.value)} value={searchText}/>
    <label htmlFor="search">Search</label>
  </div>;
}

const enhance = compose(
  connect(state => ({
    searchText: searchSelector(state),
  }), dispatch => ({
    search: (text) => dispatch(search(text)),
  }))
)

export default enhance(SearchBar);