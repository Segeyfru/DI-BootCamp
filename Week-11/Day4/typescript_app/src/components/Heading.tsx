import React, { ReactElement } from "react"
type HeadingProps = {
    title: string
}


const Heading = ({ title }: HeadingProps): React.ReactElement => {
    return (
        <>
            <h1>{title}</h1>
        </>
    )
}

export default Heading