import React from 'react';
import AddItems from './Components/AddItems';
import UpperBar from './Components/UpperBar';
import TableImage from './Components/TableImage';
import FilteredItems from './Components/FilteredItems';
import SumOfAllPrices from './Components/SumOfAllPrices';


function App() {
  return (
    <div className="App">
      <UpperBar/>
      <AddItems/>
      <TableImage/>
      <FilteredItems/>
      <SumOfAllPrices/>
    </div>
  );
}

export default App;
