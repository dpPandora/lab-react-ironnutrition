function Search(props) {
  //console.log(props.food.name.toLowerCase());
  //console.log(props.searchTerm.toLowerCase());
  if (props.food.name.toLowerCase().includes(props.searchTerm.toLowerCase())) {
    return props.children;
  }
  else {
    return;
  }


}

export default Search;