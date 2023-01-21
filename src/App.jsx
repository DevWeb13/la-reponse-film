import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import UserList from "./pages/UserList/UserList";
import Header from "./components/Header/Header";

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/coup-de-coeur" element={<UserList />} />
				<Route path="*" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
