 

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
 
  
    
    return (
      <nav id="main-navigation" aria-label="Primary" className="nav-wrap">
 
      
        <ul className={`primary-nav`}>
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