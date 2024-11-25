import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import Login from "../pages/Login";
import SignUp from "../pages/SignUp"
import Home from "../pages/Home";
import Game from "../pages/Game"
import Chat from "../pages/Chat"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "sign-up",
                element: <SignUp />
            },
            {
                path: "game",
                element: <Game />
            },
            {
                path: "chat",
                element: <Chat />
            }
        ]
    }
])

export default router
