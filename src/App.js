//App.js

import React from 'react';
import './App.css';

import LineRechartComponent from './components/line.rechart';
import AreaRechartComponent from './components/area.rechart';
import PieRechartComponent from './components/pie.rechart';

function App() {
  return (
    <div className="App">
      <h2>Line Rechart</h2>
      <LineRechartComponent />

      <h2>Area Rechart</h2>
      <AreaRechartComponent />

      <h2>Pie Rechart</h2>
      <PieRechartComponent />

    </div>
  );
}

export default App;
