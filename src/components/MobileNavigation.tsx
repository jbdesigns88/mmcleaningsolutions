const tabs = [
    {name:'home',slug:'#',order:1},
    {name:'about',slug:'#about',order:2},
    {name:'services',slug:'#services',order:3},
    {name:'contact',slug:'#contact',order:4},
    
]
const MobileNavigation = ({isOpen,toggle} : {isOpen:boolean,toggle:()=> void}) => {
    return isOpen && (
              <nav id ="mobile-navigation" aria-label="mobile-navigation" className="mobile-nav-wrap">
         
        <ul className={`mobile-nav  }`}>
        {tabs.map(tab => {
            return (
            <li onClick={toggle}>
                <a  href={tab.slug}> {tab.name} </a>
            </li>
            )
        })}
        </ul>
      </nav>
    )
}

export default MobileNavigation;