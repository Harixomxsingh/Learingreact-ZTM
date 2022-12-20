import { Component } from "react";

class SearchBox extends Component {
  render() {
    let { searchBox, onSearchChange } = this.props;

    return (
      <div>
        <input
          type="search"
          placeholder="Search Monster"
          className="search__box"
          value={searchBox}
          onChange={onSearchChange}
        />
      </div>
    );
  }
}

export default SearchBox;
