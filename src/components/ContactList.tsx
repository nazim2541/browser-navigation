
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

import { useBackButtonNavigation } from "../context/BackButtonNavigationContext";
import { users } from "../data/UserData";


const itemsPerPage = 5;

const ContactList: React.FC = () => {
	const navigate = useNavigate();
	const location = useLocation();
  const { setFrom } = useBackButtonNavigation();

	const [searchParams, setSearchParams] = useSearchParams();
	const pageFromUrl = parseInt(searchParams.get("page") || "1", 10);
  const [currentPage,setCurrentPage] = useState<number>(pageFromUrl)
	const startIndex = (pageFromUrl - 1) * itemsPerPage;
	const currentPageData = users.slice(startIndex, startIndex + itemsPerPage);

	useEffect(() => {
		if (pageFromUrl !== currentPage) {
			setCurrentPage(pageFromUrl);
		}
	}, [pageFromUrl, currentPage, setCurrentPage]);

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
		setSearchParams({ page: page.toString() });
	};


  const handleDetails = (userId: number) => {
    setFrom(location);
    navigate(`/contactDetails/${userId}`);
  };

  const handleAddContact=()=>{
    setFrom(location);
    navigate("/contactAdd")
  }

  return (
		<div className="app-container">
     <h1>Contact List</h1>
			<div className="right-side">
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>#</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Username</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{currentPageData.map((user) => (
							<tr key={user.id} >
								<td>{user.id}</td>
								<td>{user.firstName}</td>
								<td>{user.lastName}</td>
								<td>{user.username}</td>
								<td>
									<Button onClick={() => handleAddContact()}>Add Contact</Button>
								</td>
								<td>

									<Button onClick={() => handleDetails(user.id)}>Details</Button>
								</td>
							</tr>
						))}
					</tbody>
				</Table>

				<div>
					<button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
						Previous
					</button>
					<span> Page {currentPage} </span>
					<button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage * itemsPerPage >= users.length}>
						Next
					</button>
				</div>

			</div>
		</div>
	);
};

export default ContactList;
