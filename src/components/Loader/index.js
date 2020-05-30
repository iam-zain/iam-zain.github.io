import React from "react";

const Loader = ({ isLoading = false }) => {
  return isLoading ? (
    <div className="loader-wrp">
      <div class="spinner centered">
        <div class="cube1"></div>
        <div class="cube2"></div>
      </div>
    </div>
  ) : null;
};

export default Loader;
