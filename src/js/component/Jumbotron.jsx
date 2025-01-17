import React from "react";

const Jumbotron = () => {
  return (
    <div className="d-flex">
      <div className="text-start m-4 p-5 bg-light rounded">
        <h1 className="display-1">A Warm Welcome!</h1>
        <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <button type="button" className="d-flex btn btn-primary">Call to Action!</button>
      </div>
    </div>
  );
};
export default Jumbotron;