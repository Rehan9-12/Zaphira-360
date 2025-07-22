import logo from "../assets/logo.png";

function Header() {
  return (
    <div className="w-full h-auto bg-white border-b border-gray-400 flex justify-between px-10 font-sans text-2xl py-4 items-center">
      <img src={logo} alt="Logo" className="h-12 md:h-18 ml-4 cursor-pointer" />
      <img src="https://cdn-icons-png.flaticon.com/512/60/60992.png" className="w-6 md:w-8 cursor-pointer" alt="" />{/* 🛒 Shopping Cart Emoji */}
    </div>
  );
}

export default Header;
