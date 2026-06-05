import { TypeAnimation } from 'react-type-animation'

export default function Header(props: any) {
  const {
    currentDate,
    currentTime,
    setShowAvatar,
  } = props

  return (
    <header className="backdrop-blur-xl bg-white/5 border border-cyan-400/20 rounded-3xl p-5 flex flex-col md:flex-row items-center justify-between shadow-2xl shadow-cyan-500/10">

      <div>
        <h1 className="text-4xl font-black tracking-widest bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
          PHAN VIỆT
        </h1>

        <p className="text-cyan-300 mt-2">
          <TypeAnimation
            sequence={[
              'Chào mừng đến với website!',
              2000,
              'Rất vui vì bạn đã ghé thăm',
              2000,
              'Chúc bạn vui vẻ!! ^.^',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </p>

        <p className="text-gray-400 mt-1">
          Mọi thắc mắc liên hệ sđt: 0931.00.1990
        </p>
      </div>

      <div className="bg-black/40 border border-cyan-400/20 px-5 py-3 rounded-2xl text-center">
        <p className="text-gray-400 text-sm">ĐỒNG HỒ</p>
        {currentDate}
        <h2 className="text-2xl font-bold text-cyan-300">
          {currentTime}
        </h2>
      </div>

      <div className="bg-black/40 border border-cyan-400/20 px-5 py-3 rounded-2xl text-center">
        <p className="text-gray-400 text-sm">TRẠNG THÁI</p>
        <h2 className="text-cyan-300 font-bold">
          Trực tuyến ⚡
        </h2>
      </div>

      <div
        onClick={() => setShowAvatar(true)}
        className="w-16 h-16 rounded-full overflow-hidden border-2 border-cyan-400 shadow-[0_0_20px_#00ffff] cursor-pointer"
      >
        <img
          src="/avatar.jpg"
          alt="Phan Viet"
          className="w-full h-full object-cover"
        />
      </div>

    </header>
  )
}