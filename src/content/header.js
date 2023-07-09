import { Link } from "react-router-dom";

function Header() {
  return (
      <div className='row text-center bg-danger p-3'>
        <div className='col'>
        <Link className='link' to="/football">football</Link>
        </div>
      </div>
  );
}

export default Header
