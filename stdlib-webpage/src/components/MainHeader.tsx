import logo from "../assets/logo_white.svg";

function MainHeader() {
  return (
     <div className="w-screen h-16 py-0.5 px-20 bg-[#373a499b] drop-shadow-lg">
        <img className="w-36" src={logo} alt="stdlib logo" />
     </div>
  )
}

export default MainHeader