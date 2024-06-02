// src/App.js
import React from 'react';
import Counter from './components/CounterComponent';
import RichTextEditor from './components/RichTextEditor';
import UserDataForm from './components/userdataform'
import 'bootstrap/dist/css/bootstrap.min.css';
import UserData from './components/userData';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-7" >
            <Counter />
          </div>
          <div className="col-md-5">
            <RichTextEditor />
          </div>
        </div>
        <div className="row">
          <div className="col-md-7">
            {/* 1 of 3 */}
            <UserData/>
          </div>
          <div className="col-md-5">
            <UserDataForm/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
