import Carousel from "./Slider/Carousel"
import Section1 from './Section1/Section1'
import Section2 from './Section2/Section2'
import Section3 from './Section3/Section3'
import { useState } from "react"

export default function HomeSection(props) {
    const [isLoading, setIsLoading] = useState(true)
    return(
        <>
        <Section1 />
        <Section2 />
        <Section3 />
        </>
    )
}