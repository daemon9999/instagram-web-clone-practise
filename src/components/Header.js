import Search from "./Search"
import { logout } from "firebase.js"
import { Link } from "react-router-dom"
export default function Header() {
    return (
            <header className="bg-white flex items-center justify-evenly  h-[61px] border-b border-gray-300   ">
                <Link className="h-[29px]" replace={true} to="/">
                    <img className="h-full" src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png" alt="logo" />
                </Link>
                <Search/>
                <button onClick={logout}>
                    Log out
                </button>
            </header>
    )
}