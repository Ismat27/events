import { Footer } from "../footer/footer"
import { Header } from "../header/header"

const MainLayout = ({children}) => {
  return (
    <div className="main-layout">
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </div>
  )
}

export default MainLayout