import React from 'react';
import './App.css';
import SmurfListView from './components/SmurfListView';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <h3>Smurfs 2020</h3>
      <br />
      <Form />
      <br />
      <SmurfListView />
    </div>
  );
}

export default App;
