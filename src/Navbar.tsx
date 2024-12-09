import { Button } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
  <>
    <div className="left-side">
				<Button variant="link" onClick={() => navigate("/")}>
					User
				</Button>
				<Button variant="link" onClick={() => navigate("/contact")}>
					Contact
				</Button>
				<Button variant="link" onClick={() => navigate("/quotes")}>
					Quote
				</Button>
			</div>
      <div>
        <Outlet/>
      </div>
  </>
  );
}

export default Navbar;
