'use client';
import Card from "../Card";
import { GridItem } from "../page";
import { useRouter } from 'next/navigation';
import localFont from 'next/font/local';

// Font files can be colocated inside of `app`
const titleFont = localFont({
    src: '../fonts/PPMondwest-Regular.otf',
    display: 'swap',
});

export default function Journey() {
    const router = useRouter();

    return <>
        <GridItem />
        <GridItem />
        <GridItem><OurJourney /></GridItem>

        <GridItem />
        <GridItem>
            <CoffeesConsumed />
        </GridItem>
        <GridItem />

        <GridItem>
            <ProjectsDelievered onClick={() => router.push("/services/staffing")} />
        </GridItem>
        <GridItem />
        <GridItem>
            <LeanTeam onClick={() => router.push("/mobile-application/1")} />
        </GridItem>
    </>;
}



function OurJourney() {
    return <Card
        isHeadline
        backgroundColor={"#FBFBFB"}
        textColor={"#171717"}
        title={"Our Journey"}
    />;
}

function CoffeesConsumed() {
    return <Card
        isStats
        title={<div style={{ display: "flex", flexDirection: "row", gap: 2, alignItems: "center" }}>
            1000 <sup className={titleFont.className} style={{ fontSize: "0.5em"}}>+</sup>
        </div>}
        backgroundColor={"#6FF04A"}
        textColor={"#0B6222"}
        subtitle={"Coffees consumed"}
    />;
}

function ProjectsDelievered() {
    return <Card
        isStats
        backgroundColor={"#763DF8"}
        textColor={"#CFB8E5"}
        title={<div style={{ display: "flex", flexDirection: "row", gap: 2, alignItems: "center" }}>
            9 <sup className={titleFont.className} style={{ fontSize: "0.5em"}}>+</sup>
        </div>}
        subtitle={"Projects Delievered"}
    />;
}

function LeanTeam() {
    return <Card
        isStats
        backgroundColor={"#545454"}
        textColor={"white"}
        title={<div style={{ display: "flex", flexDirection: "row", gap: 2, alignItems: "center" }}>
            15 <sup className={titleFont.className} style={{ fontSize: "0.5em"}}>+</sup>
        </div>}
        subtitle={"Lean Team"}
    />;
}
