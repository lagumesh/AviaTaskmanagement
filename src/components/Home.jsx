import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

const Home = () => {
	return (
		<>
			<div className="flex flex-col h-[100vh]">
				<div className="header w-full  bg-white fixed">
					<Header />
				</div>
				<div className="h-full w-full flex mt-[66px]">
					<div className="py-4 px-2 flex flex-col justify-between sidebar  w-28 h-full bg-white">
						<Sidebar />
					</div>
					<div className="overflow-scroll w-full">
						<Outlet />
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
