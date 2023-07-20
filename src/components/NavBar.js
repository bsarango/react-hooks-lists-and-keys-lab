import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkComps = links.map((link)=>{
    return <a key={link} href={`#${link}`}>{link}</a>
  })

  return <nav>
    {console.log(linkComps)}
    {linkComps}
  </nav>;
}

export default NavBar;
