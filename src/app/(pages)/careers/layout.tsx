import { Footer, Navbar } from '@/sections';
import React from 'react'

const CareersLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div>
            <Navbar />
            <div className="pb-[86px] md:pb-[98px] lg:pb-[130px]" />
            {children}
            <Footer />
        </div>
    )
}

export default CareersLayout