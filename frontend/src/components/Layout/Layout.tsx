import { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => {
  return <main className="flex-grow w-full bg-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
}

export default Layout 
