import React from 'react'
import Header from '../../components/Header/Header'

/**
 * Layout with only Header.
 */
export default function LayoutWithHeader({children}) {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

