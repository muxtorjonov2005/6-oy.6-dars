import React from "react";

function MainLayout({ children }) {
  return (
    <div>
      <header></header>
      {children}
      <footer></footer>
    </div>
  );
}

export default MainLayout;
