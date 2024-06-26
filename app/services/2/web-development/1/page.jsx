'use client';
import { GridItem } from "../../../../page";
import Card from "../../../../Card";
import localFont from 'next/font/local';

// Font files can be colocated inside of `app`
const titleFont = localFont({
    src: '../../../../fonts/PPMondwest-Regular.otf',
    display: 'swap',
});

export default function WebDevelopmentPage() {
    return <>
        <GridItem><Delivered /></GridItem>
        <GridItem></GridItem>
        <GridItem>
            <Description />
        </GridItem>

        <GridItem />
        <GridItem>
            <Uptime />
        </GridItem>
        <GridItem><Visitors /></GridItem>

        <GridItem><Title /></GridItem>
        <GridItem></GridItem>
        <GridItem></GridItem>

    </>;
}

function Title() {
    return <Card
        isHeadline
        isHeadlineNumberOnly
        backgroundColor={"linear-gradient(180deg, #31B10C 0%, #171717 100%)"}
        textColor={"#C7DFB8"}
        title={"Web Wonder"}
    />;
}


function Description() {
    return <Card
        isHeadline
        backgroundColor={"linear-gradient(180deg, #31B10C 0%, #171717 100%)"}
        textColor={"#C7DFB8"}
        title={"Building Digital websites that Dazzle"}
    />;
}

function Uptime() {
    return <Card
        backgroundColor={"#0B6222"}
        textColor={"#C7DFB8"}
        title={"500k"}
        subtitle="Monthly Visitors"
        isStats
    />;
}

function Visitors() {
    return <Card
        isHeadline
        backgroundColor={"#97B97F"}
        textColor={"#0B6222"}
        title={<div style={{ display: "flex", flexDirection: "row", gap: 2, alignItems: "center" }}>
            6 <sup className={titleFont.className} style={{ fontSize: "0.5em" }}>+</sup>
        </div>}
        subtitle="Websites Delivered"
        isStats
    />;
}

function Delivered() {
    return <Card
        isHeadline
        backgroundColor={"#C0E143"}
        textColor={"#0B6222"}
        title={"99%"}
        subtitle="Uptime Guaranteed"
        isStats
    />;
}



