import CoreValues from "@/components/about/CoreValues";
import Hero from "@/components/about/Hero";
import Story from "@/components/about/Story";


export default function Page() {

    return (
        <div className="h-full">
            <Hero />
            <Story />
            <CoreValues />
        </div>
    )
}