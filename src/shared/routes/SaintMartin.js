import React from 'react';
import Navbar from '../components/Navbar';

export default class SaintMartin extends React.Component {
  render() {
    return(
      <div>
        <div class="saint-martin-header">
          <Navbar />
          <h1> Saint-Martin </h1>
        </div>

        <div style={{marginTop: '50px'}} class="row">
          <div class="col-md-6">
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
          </div>
          <div class="col-md-6">
          </div>
        </div>

        <div style={{marginTop: '50px'}} class="row">
          <div class="col-md-6">
            <h2> Geographie </h2>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
          </div>
          <div class="col-md-6">
          </div>
        </div>

        <div style={{marginTop: '50px'}} class="row">
          <div class="col-md-6">
            <h2> Histoire </h2>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
          </div>
          <div class="col-md-6">
            <h2> Monuments </h2>
            <ul>
              <li> 1 </li>
              <li> 2 </li>
              <li> 3 </li>
              <li> 4 </li>
              <li> 5 </li>
              <li> 6 </li>
              <li> 7 </li>
            </ul>
          </div>
        </div>

      </div>
    );
  };
};
