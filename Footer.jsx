import React from "react";

function Footer() {
  var currYear = new Date().getFullYear();

  return (
    <footer>
      <p>Copyright @ {currYear}: modify by vaijulbalar</p>
    </footer>
  );
}

export default Footer;
