const Hamburger = ({ isOpen, toggle }: { isOpen: boolean; toggle: () => void }) => {
    return (
      <button
        className="hamburger"
        aria-expanded={isOpen}
        aria-controls=""
        onClick={toggle}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    );
  };
  
  export default Hamburger;