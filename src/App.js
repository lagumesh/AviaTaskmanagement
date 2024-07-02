import React, { useState } from "react";
import "./App.css"; // Import your global styles
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/pages/Main";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";

function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const handleLoginSuccess = () => {
		setIsAuthenticated(true);
	};

	return (
		<div className="App">
		<Router>
			<Routes>
				<Route path="/" element={<Home />} >
					<Route index element={<Dashboard />} />
					<Route path="/main" element={<Main />} />
				</Route>
			</Routes>
		</Router>
			{/* {isAuthenticated ? (
				<div className="flex flex-col h-screen">
					<Header />
					<div className="flex flex-grow">
						<Sidebar />
						<Main />
					</div>
				</div>
			) : (
				<Login onLoginSuccess={handleLoginSuccess} />
			)} */}
		</div>
	);
}

export default App;
