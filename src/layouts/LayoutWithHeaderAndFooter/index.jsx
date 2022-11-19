import React from "react"
import Header from "../../components/Header/Header"

/**
 * Layout with header and footer.
 */
export default function LayoutWithHeaderAndFooter({children}) {
    return (
        <>
            <Header />
            {children}
            Footer
        </>
    )
}
