import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { useBackButtonNavigation } from "../context/BackButtonNavigationContext";
import { users } from "../data/UserData";

const UserDetails: React.FC = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const location = useLocation();
	const user = users.find((user) => user.id.toString() === id);
	const { setFrom } = useBackButtonNavigation();


  useEffect(() => {
    const handlePopState = () => {
      console.log("location",location.pathname.includes("userDetails"))
      navigate(-1);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [location.pathname, navigate]);


	if (!user) {
		return <div>User not found!</div>;
	}

	const handleBack = () => {
    navigate(-1);
	};

	const handleEdit = () => {
		setFrom(location);
		navigate(`/userEdit/${id}`, );
	};

	return (
		<div className="user-details-container">
			<h3>User Details</h3>
			<p>ID: {user.id}</p>
			<p>First Name: {user.firstName}</p>
			<p>Last Name: {user.lastName}</p>
			<p>Username: {user.username}</p>

			<Button onClick={() => handleBack()}>Back to List</Button>
			<Button onClick={() => handleEdit()}>Edit</Button>
		</div>
	);
};

export default UserDetails;
