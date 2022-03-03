import { useState } from "react"
import Carousel from "./Slider/Carousel"
import Section1 from './Section1/Section1'
import Section2 from './Section2/Section2'
import Section3 from "./Section3/Section3"


export default function HomeSection(props) {
    const [isLoading, setIsLoading] = useState()
    return(
        <>
        <Section1 />
        <Section2 />
        <Section3 />
        </>
    )
}