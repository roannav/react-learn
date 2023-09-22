function DessertsList({ data }) {
  // select desserts that have less than 500 cal
  const filteredData = data.filter((dessert) => dessert.calories <= 500);
  // sort calories in ascending, so smallest one first
  filteredData.sort((a, b) => a.calories - b.calories);
  const dessertsList = filteredData.map((dessert) => (
    <li key={dessert.name + dessert.createdAt}>
      {dessert.name} - {dessert.calories} cal
    </li>
  ));
  return <ul>{dessertsList}</ul>;
}

export default DessertsList;
