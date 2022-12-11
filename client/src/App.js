import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/login";
import Register from "./pages/register";
import Error from "./pages/Error/Error";
import Detail from "./pages/detail";
import UpLoad from "./pages/upLoad/upLoad";
import DesignChosen from "./pages/designPage/Design";
import SharedLayout from "./pages/SharedLayout";
import AdminDetailVote from "./pages/adminDetailVote/AdminDetail";
import Topicmanager from "./pages/Topicmanager";
import Profile from "./pages/Profile";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<SharedLayout />}>
					<Route index element={<Home />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/upload" element={<UpLoad />} />
					<Route path="/detail" element={<Detail />} />
					<Route path="/design" element={<DesignChosen />} />
				</Route>
				<Route path="/admindetail" element={<AdminDetailVote />} />
				<Route path="/topicmanager" element={<Topicmanager />} />
				<Route path="*" element={<Error />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
