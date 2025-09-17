import {   useState } from "react";

const tabs = [
    {name:'home',slug:'#',order:1},
    {name:'about',slug:'#about',order:2},
    {name:'services',slug:'#services',order:3},
    {name:'contact',slug:'#contact',order:4},
    
]


// const hamburger = () => {
//     return (
//         <>
        
//         </>
//     )
// }
 
const Navigation = () => {
    const [isOpen,setIsOpen] = useState(false);
  
    
    return (
      <nav aria-label="Primary" className="nav-wrap">
        <button
  className="hamburger"
  aria-expanded={isOpen}
  aria-controls="primary-nav"
  onClick={() => setIsOpen((prev) => !prev)}
>
            <span></span>
            <span></span>
            <span></span>
        </button>
        <ul className={`primary-nav  ${isOpen ? 'open': ''}`}>
        {tabs.map(tab => {
            return (
            <li>
                <a href={tab.slug}> {tab.name} </a>
            </li>
            )
        })}
        </ul>
      </nav>
    )
}

export default Navigation;