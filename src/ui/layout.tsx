import { MenuIcon } from 'ui/icons'
import Logo from '../components/logo'

const Layout: React.FC<React.ComponentProps<'div'>> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-20 bg-white flex items-center h-[115px] shadow-header ">
        <div className="w-[450px] pl-20 2xl:w-[600px]">
          <MenuIcon />
        </div>
        <div className="pl-12 absolute inset-0 flex justify-center items-center">
          <Logo />
        </div>
      </header>
      <main className="flex-1 flex">
        <img
          src="/map.png"
          className="object-cover w-[400px] xl:w-[595px] h-[calc(100vh-115px)] sticky top-[115px]"
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
