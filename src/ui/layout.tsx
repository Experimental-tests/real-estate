import { MenuIcon } from 'ui/icons'
import Logo from '../components/logo'

const Layout: React.FC<React.ComponentProps<'div'>> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex  items-center h-[115px] shadow-header ">
        <div className="w-[450px] pl-20 2xl:w-[600px]">
          <MenuIcon />
        </div>
        <div className="pl-12 flex  justify-center items-center">
          <Logo />
        </div>
      </header>
      <main className="flex-1 flex">
        <img
          src="/map.png"
          className="object-cover w-[450px] 2xl:w-[600px] max-h-screen sticky top-0"
          alt="map"
        />
        <div className="px-16 py-6 overflow-hidden flex flex-col">
          {children}
        </div>
      </main>
    </div>
  )
}

export default Layout
