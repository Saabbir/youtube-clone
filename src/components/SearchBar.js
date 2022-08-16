import React from "react";

class SearchBar extends React.Component {
  state = {
    term: "",
  };

  setSearchTerm = (e) => {
    this.setState({
      term: e.target.value.toUpperCase(),
    });
  };

  render() {
    return (
      <div className="c-search-bar u-mt-32">
        <div className="l-container">
          <div className="c-form c-search-bar__form">
            <label className="c-form__label">Search</label>
            <input
              className="c-form__control"
              type="text"
              placeholder="Nodejs tutorial"
              value={this.state.term}
              onChange={this.setSearchTerm}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
