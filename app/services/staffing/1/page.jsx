'use client';
import { useRouter } from "next/navigation";
import { GridItem } from "../../../page";
import { TalentOnTap } from "../page";
import Card from "../../../Card";
import localFont from 'next/font/local';

// Font files can be colocated inside of `app`
const titleFont = localFont({
    src: '../../../fonts/PPMondwest-Regular.otf',
    display: 'swap',
});

export default function Talent() {
    const router = useRouter();

    return <>
        <GridItem />
        <GridItem />
        <GridItem>
            <ClientRetention />
        </GridItem>

        <GridItem><ProfPlaced /></GridItem>
        <GridItem><ClientServed /></GridItem>
        <GridItem />

        <GridItem />
        <GridItem />
        <GridItem><TalentOnTap /></GridItem>
    </>;
}


function ClientRetention() {
    return <Card
        backgroundColor={"#F2D904"}
        textColor={"#9D5209"}
        title={<div style={{ display: "flex", flexDirection: "row", gap: 2, alignItems: "center" }}>
            100 <sup className={titleFont.className} style={{ fontSize: "0.5em" }}>+</sup>
        </div>}
        subtitle={"Client Retention"}
        isStats
    />;
}

function ClientServed() {
    return <Card
        backgroundColor={"#F2D904"}
        textColor={"#9D5209"}
        title={<div style={{ display: "flex", flexDirection: "row", gap: 2, alignItems: "center" }}>
            98 <sup className={titleFont.className} style={{ fontSize: "0.5em" }}>%</sup>
        </div>}
        subtitle={"Client Retention"}
        isStats
    />;
}

function ProfPlaced() {
    return <Card
        backgroundColor={"#CAAE57"}
        textColor={"#9D5209"}
        title={"1K "}
        subtitle={"Professionals Placed"}
        isStats
    />;
}