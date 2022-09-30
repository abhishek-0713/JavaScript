let navbar = () => {
  return ` <div><a href="worlNews.html">ZEE News</a></div>
  
    <div>
      <input type="text" id="search" placeholder="Search" />
    </div>
    
    <div id="nav">
        <div id="in">India</div>
        <div id="ch">China</div>
        <div id="us">USA</div>
        <div id="uk">UK</div>
        <div id="nz">NewZeland</div>
      </div>
      `;
};

document.getElementById("navbar").innerHTML = navbar();

export default navbar;
