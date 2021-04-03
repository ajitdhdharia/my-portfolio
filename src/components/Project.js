import React from "react";

import Card from "./Card";

function Project() {
  return (
    <div className="container">
      <div class="row row-cols-lg-3 row-cols-md-2 g-4">
        <div class="col">
        <Card />
          {/* <div class="card">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
            </div>
          </div> */}
        </div>
        <div class="col">
        <Card />
          {/* <div class="card">
            <div class="card-body">
              <h5 class="card-title">Card title</h5> 
            </div>
          </div> */}
        </div>
        <div class="col">
        <Card />
          {/* <div class="card">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
            </div>
          </div> */}
        </div>
        <div class="col">
        <Card />
          {/* <div class="card">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Project;
