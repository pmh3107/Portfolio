import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserLayout from "./layout/UserLayout";
import UserProject from "./views/User/UserProject/UserProject";
import UserHome from "./views/User/UserHome/UserHome";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <UserLayout />,
			children: [
				{
					index: true,
					element: <UserHome />,
				},
				{
					path: "userProject",
					element: <UserProject />,
				},
			],
		},
		{
			path: "*",
			element: (
				<div>
					<h1>ERROR PAGE</h1>
				</div>
			),
		},
	]);
	return <RouterProvider router={router} />;
}

export default App;
