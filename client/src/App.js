import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminCommentEdit from "./pages/Admin/AdminEdit/CommentEdit";
import AdminDesignEdit from "./pages/Admin/AdminEdit/DesignEdit";
import AdminTopicEdit from "./pages/Admin/AdminEdit/TopicEdit";
import AdminVoteEdit from "./pages/Admin/AdminEdit/VoteEdit";
import AdminCommentManager from "./pages/Admin/AdminManager/CommentManager";
import AdminDesignManager from "./pages/Admin/AdminManager/DesignManager";
import AdminTopicManager from "./pages/Admin/AdminManager/TopicManager";
import AdminVoteManager from "./pages/Admin/AdminManager/VoteManager";
// import AdminDetailVote from "./pages/adminDetailVote/AdminDetail";
import AdminSharedLayout from "./pages/AdminSharedLayout";
import DesignChosen from "./pages/designPage/Design";
import Detail from "./pages/detail";
import Error from "./pages/Error/Error";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Login from "./pages/login";
import Profile from "./pages/Profile";
import ProtectedRoute from "./pages/ProtectedRoute";
import Register from "./pages/register";
import SharedLayout from "./pages/SharedLayout";
import Topicmanager from "./pages/Topicmanager";
import UpLoad from "./pages/upLoad/upLoad";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<ProtectedRoute>
							<SharedLayout />
						</ProtectedRoute>
					}
				>
					<Route index element={<Home />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/upload" element={<UpLoad />} />
					<Route path="/detail" element={<Detail />} />
					<Route path="/design" element={<DesignChosen />} />
				</Route>
				<Route path="/admin" element={<AdminSharedLayout />}>
					<Route path="/admin" element={<AdminDashboard />} />
					<Route path="/admin/topic" element={<AdminTopicManager />} />
					<Route path="/admin/design" element={<AdminDesignManager />} />
					<Route path="/admin/vote" element={<AdminVoteManager />} />
					<Route path="/admin/comment" element={<AdminCommentManager />} />
					<Route path="/admin/topic-edit" element={<AdminTopicEdit />} />
					<Route path="/admin/design-edit" element={<AdminDesignEdit />} />
					<Route path="/admin/vote-edit" element={<AdminVoteEdit />} />
					<Route path="/admin/comment-edit" element={<AdminCommentEdit />} />
				</Route>
				{/* <Route path="/admindetail" element={<AdminDetailVote />} /> */}
				<Route path="/topicmanager" element={<Topicmanager />} />
				<Route path="*" element={<Error />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route path="/landing" element={<SharedLayout />}>
					<Route index element={<Landing />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
