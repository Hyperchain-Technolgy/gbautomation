import Nav from "./Nav"

const Header = () => {
  return (
    <header className="flex justify-between items-center relative z-10 bg-slate-100">
      <img src="/logo.png" className="h-16" alt="Logo" />
      <Nav />
    </header>
  )
}

export default Header