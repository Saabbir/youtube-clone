import React from "react";

class SearchBar extends React.Component {
  state = {
    searchTerm: "",
  };

  setSearchTerm = (e) => {
    this.setState({
      searchTerm: e.target.value,
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();

    this.props.onTermSubmit(this.state.searchTerm);
  };

  render() {
    return (
      <div className="c-search-bar u-mt-32">
        <div className="l-container">
          <div className="c-form c-search-bar__form">
            <label className="c-form__label">Search</label>
            <form onSubmit={this.handleOnSubmit}>
              <input
                className="c-form__control"
                type="text"
                placeholder="Nodejs tutorial"
                value={this.state.searchTerm}
                onChange={this.setSearchTerm}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
