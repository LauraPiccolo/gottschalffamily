

const Layout = ({ children, settings }) => {

    return (
        <div className="container">
            <header>
                This is the Header
            </header>
                {children}
            <footer>
                This is the footer
            </footer>
        </div>
    )
}
  
export default Layout
