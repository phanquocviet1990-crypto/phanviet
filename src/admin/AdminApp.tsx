import { useState } from "react"
import Sidebar from "./Sidebar"
import Home from "./pages/Home"
import Posts from "./pages/Posts"
import Users from "./pages/Users"

export default function AdminApp() {
  const [page, setPage] = useState("home")

  const renderPage = () => {
    switch (page) {
      case "home":
        return <Home />
      case "posts":
        return <Posts />
      case "users":
        return <Users />
      default:
        return <Home />
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <Sidebar setPage={setPage} />
      <div className="flex-1 p-6">{renderPage()}</div>
    </div>
  )
}