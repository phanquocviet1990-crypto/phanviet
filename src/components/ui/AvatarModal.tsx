type AvatarModalProps = {
  showAvatar: boolean
  setShowAvatar: (show: boolean) => void
}

export default function AvatarModal({
  showAvatar,
  setShowAvatar,
}: AvatarModalProps) {
  if (!showAvatar) return null

  return (
    <div
      onClick={() => setShowAvatar(false)}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <div className="relative">
        <img
          src="/avatar.jpg"
          alt="Phan Viet"
          className="max-w-[90vw] max-h-[90vh] rounded-3xl border-2 border-cyan-400 shadow-[0_0_40px_#00ffff]"
        />

        <button
          onClick={() => setShowAvatar(false)}
          className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-red-500 text-white font-bold"
        >
          ✕
        </button>
      </div>
    </div>
  )
}