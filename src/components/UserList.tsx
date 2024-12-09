// import { useEffect, useState } from "react";
// import { Button } from "react-bootstrap";
// import Table from "react-bootstrap/Table";
// import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

// const UserList = () => {
// 	const [searchParams, setSearchParams] = useSearchParams();
// 	const navigate = useNavigate();
//   const location = useLocation();

// 	const users = [
// 		{ id: 1, firstName: "Mark", lastName: "Otto", username: "@mdo" },
// 		{ id: 2, firstName: "Jacob", lastName: "Thornton", username: "@fat" },
// 		{ id: 3, firstName: "Larry", lastName: "the Bird", username: "@twitter" },
// 		{ id: 4, firstName: "John", lastName: "Doe", username: "@john" },
// 		{ id: 5, firstName: "Jane", lastName: "Smith", username: "@jane" },
// 		{ id: 6, firstName: "Bob", lastName: "Marley", username: "@bob" },
// 		{ id: 7, firstName: "Alice", lastName: "Wonderland", username: "@alice" },
// 		{ id: 8, firstName: "Charlie", lastName: "Brown", username: "@charlie" },
// 		{ id: 9, firstName: "David", lastName: "Johnson", username: "@david" },
// 		{ id: 10, firstName: "Eva", lastName: "Green", username: "@eva" },
// 		{ id: 11, firstName: "Mark", lastName: "Otto", username: "@mdo" },
// 		{ id: 12, firstName: "Jacob", lastName: "Thornton", username: "@fat" },
// 		{ id: 13, firstName: "Larry", lastName: "the Bird", username: "@twitter" },
// 		{ id: 14, firstName: "John", lastName: "Doe", username: "@john" },
// 		{ id: 15, firstName: "Jane", lastName: "Smith", username: "@jane" },
// 		{ id: 16, firstName: "Bob", lastName: "Marley", username: "@bob" },
// 		{ id: 17, firstName: "Alice", lastName: "Wonderland", username: "@alice" },
// 		{ id: 18, firstName: "Charlie", lastName: "Brown", username: "@charlie" },
// 		{ id: 19, firstName: "David", lastName: "Johnson", username: "@david" },
// 		{ id: 20, firstName: "Eva", lastName: "Green", username: "@eva" }
// 	];

// 	const itemsPerPage = 5;
// 	const queryParams = new URLSearchParams(location.search);
//   const pageFromUrl = parseInt(queryParams.get("page") || "1", 10);

//   const [currentPage, setCurrentPage] = useState(pageFromUrl);
// 	const startIndex = (currentPage - 1) * itemsPerPage;
// 	const endIndex = startIndex + itemsPerPage;
// 	const currentPageData = users.slice(startIndex, endIndex);

// 	useEffect(() => {
// 		setCurrentPage(pageFromUrl);
// 	}, [location.search]);

// 	const handlePageChange = (page: number) => {
// 		setSearchParams({ page: page.toString() });
// 	};

// 	return (
// 		<>
// 			<Button onClick={() => navigate}>Back button</Button>
// 			<Table striped bordered hover>
// 				<thead>
// 					<tr>
// 						<th>#</th>
// 						<th>First Name</th>
// 						<th>Last Name</th>
// 						<th>Username</th>
// 					</tr>
// 				</thead>
// 				<tbody>
// 					{currentPageData.map((user) => (
// 						<tr onClick={() => navigate("/userDetails")} key={user.id}>
// 							<td>{user.id}</td>
// 							<td>{user.firstName}</td>
// 							<td>{user.lastName}</td>
// 							<td>{user.username}</td>
// 						</tr>
// 					))}
// 				</tbody>
// 			</Table>
// 			<div>
// 				<button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
// 					Previous
// 				</button>
// 				<span> Page {currentPage} </span>
// 				<button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage * itemsPerPage >= users.length}>
// 					Next
// 				</button>
// 			</div>
// 			<button onClick={() => navigate("/userAddEdit")}>Add User</button>
// 			<button onClick={() => navigate("/userDetails")}>User Details</button>
// 		</>
// 	);
// };

// export default UserList;
// UserList.tsx


import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

import { useBackButtonNavigation } from "../context/BackButtonNavigationContext";
import { users } from "../data/UserData";


const itemsPerPage = 5;

const UserList: React.FC = () => {
	const navigate = useNavigate();
	const location = useLocation();
  const { setFrom } = useBackButtonNavigation();
	const [searchParams, setSearchParams] = useSearchParams();

	const pageFromUrl = parseInt(searchParams.get("page") || "1", 10);
  const [currentPage,setCurrentPage] = useState<number>(pageFromUrl)
	const startIndex = (pageFromUrl - 1) * itemsPerPage;
	const currentPageData = users.slice(startIndex, startIndex + itemsPerPage);


	const handlePageChange = (page: number) => {
		setCurrentPage(page);
		setSearchParams({ page: page.toString() });
	};


    const handleDetails = (userId: number) => {
      setFrom(location);
      navigate(`/userDetails/${userId}`);
    };

    const handleAddUser=()=>{
      setFrom(location);
      navigate("/userAdd")
    }

	return (
		<div className="app-container">
			<h1>User List</h1>
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
							<tr key={user.id}>
								<td>{user.id}</td>
								<td>{user.firstName}</td>
								<td>{user.lastName}</td>
								<td>{user.username}</td>
								<td>
									<Button onClick={() => handleAddUser()}>Add User</Button>
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
					<button
						onClick={() => handlePageChange(currentPage + 1)}
						disabled={currentPage * itemsPerPage >= users.length}
					>
						Next
					</button>
				</div>
			</div>
		</div>
	);
};

export default UserList;
