import Header from "./Header"



export const Layout = ({children}) => {
    return (

        <main>
            <Header/>
            {children}
        </main>

    )
}