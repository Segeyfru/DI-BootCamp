import { ReactNode } from "react"

interface SectionProps {
    // readonly [key: string]: string | number
    content:string
    children: ReactNode
}


const Section =({children,content = "Bla-bla"}:SectionProps)=>{
    return(
        <>
        <section>{content}</section>
        <div>{children}</div>
        
        </>
    )
}
export default Section