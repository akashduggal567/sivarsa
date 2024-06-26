'use client';
import { useRouter } from "next/navigation";
import { GridItem } from "../../../../page";
import Card from "../../../../Card";

export default function AppMakers() {
    const router = useRouter();

    return <>
        <GridItem><Title /></GridItem>

        <GridItem>
        </GridItem>
        <GridItem><PerfomanceOptimization /></GridItem>


        <GridItem>
        </GridItem>
        <GridItem><UCD /></GridItem>
        <GridItem>
        </GridItem>



        <GridItem>
        </GridItem>
        <GridItem />
        <GridItem><SEO /></GridItem>
    </>;
}

function Title() {
    return <Card
        isHeadline
        isHeadlineNumberOnly
        // backgroundColor={"linear-gradient(180deg, #31B10C 0%, #171717 100%)"}
        textColor={"#C7DFB8"}
        title={"Why Us?"}
        backgroundImage={<img id="noisy_bg" src="/noisy_bg.png" />}
        headlineStyle={{ position: "absolute", top: 20}}
    />;
}


function PerfomanceOptimization() {
    return <Card
        isHeadline
        backgroundColor={"#6C7D35"}
        textColor={"#C7DFB8"}
        title="Perfromance Optimization"
        subtitle="Fast loading times and smooth navigation"
    />;
}

function UCD() {
    return <Card
        isHeadline
        backgroundColor={"#4D7541"}
        textColor={"#C7DFB8"}
        title="User-Centric Design"
        subtitle="Building robust and scalable websites."
    />;
}

function SEO() {
    return <Card
        isHeadline
        backgroundColor={"#4D7541"}
        textColor={"#C7DFB8"}
        title="SEO Friendly"
        subtitle="Optimized for search engines to drive traffic."
    />;
}