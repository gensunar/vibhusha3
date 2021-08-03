import Navbar from '../../Sections/Navbar/Navbar'
import Footer from '../../Sections/Footer/Footer'

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}