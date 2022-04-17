import React from "react";

const ItemListContainer = () => {
  return (
    <div className="container p-5">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card h-100">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Art 1</h5>
              <p class="card-text">...</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Art 2</h5>
              <p class="card-text">... </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Art 3</h5>
              <p class="card-text">... </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
