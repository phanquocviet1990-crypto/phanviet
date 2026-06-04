import { useState } from "react"

export default function Dashboard() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Tin 1" },
    { id: 2, title: "Tin 2" }
  ])

  const [newPost, setNewPost] = useState("")

  const addPost = () => {
    if (!newPost) return
    setPosts([...posts, { id: Date.now(), title: newPost }])
    setNewPost("")
  }

  const deletePost = (id: number) => {
    setPosts(posts.filter(p => p.id !== id))
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      {/* thêm bài */}
      <div className="mb-4">
        <input
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          className="border p-2 mr-2"
          placeholder="Thêm nội dung"
        />
        <button onClick={addPost} className="bg-green-500 text-white px-4 py-2">
          Thêm
        </button>
      </div>

      {/* danh sách */}
      <ul>
        {posts.map(post => (
          <li key={post.id} className="flex justify-between p-2 border-b">
            {post.title}
            <button onClick={() => deletePost(post.id)} className="text-red-500">
              Xoá
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}