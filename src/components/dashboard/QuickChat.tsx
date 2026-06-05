export default function QuickChat() {
  return (
    <div className="backdrop-blur-xl bg-white/5 border border-cyan-400/20 rounded-3xl p-6 shadow-xl shadow-cyan-500/10">
      <h3 className="text-xl font-bold text-cyan-300 mb-4">
        Trò chuyện nhanh
      </h3>

      <div className="space-y-3">
        <div className="bg-cyan-500/20 p-3 rounded-2xl w-fit max-w-[80%]">
          Ê bro 😎
        </div>

        <div className="bg-black/40 p-3 rounded-2xl ml-auto w-fit max-w-[80%]">
          Web bạn trông cháy quá 🔥
        </div>
      </div>

      <div className="mt-5 flex gap-3">
        <input
          placeholder="Type a message..."
          className="flex-1 bg-black/40 border border-cyan-400/20 rounded-2xl px-4 py-3 outline-none"
        />

        <button className="px-5 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 font-bold">
          Gửi
        </button>
      </div>
    </div>
  )
}