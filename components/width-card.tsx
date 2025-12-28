import React from 'react'

type Props = {
    children: React.ReactNode;
    className?: string;
}

const WidthCard = (props: Props) => {
    return (
        <div className={`
        max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
        ${props.className}`}>{props.children}</div>
    )
}

export default WidthCard