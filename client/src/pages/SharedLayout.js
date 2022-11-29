import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function SharedLayout() {
	return (
		<div>
			<Sidebar />
			<div>
				<div className="dashboard-page">
					<Outlet />
				</div>
			</div>
		</div>
	);
}

export default SharedLayout;
