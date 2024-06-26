'use client';
import { GridItem } from "../../../../page";
import Card from "../../../../Card";
import { UICommonTitle } from "../page";
import localFont from 'next/font/local';

// Font files can be colocated inside of `app`
const titleFont = localFont({
    src: '../../../../fonts/PPMondwest-Regular.otf',
    display: 'swap',
});

export default function WebWonderSkills() {
    return <>
        <GridItem />
        <GridItem></GridItem>
        <GridItem><ClientRetention /></GridItem>

        <GridItem><HappyUsers /> </GridItem>
        <GridItem><ProjectsDelievered /></GridItem>
        <GridItem></GridItem>

        <GridItem />
        <GridItem><UICommonTitle /></GridItem>
        <GridItem />
    </>;
}

function ProjectsDelievered() {
    return <Card
        isStats
        backgroundColor={"#6B2BA3"}
        textColor={"#CFB8E5"}
        title={<div style={{ display: "flex", flexDirection: "row", gap: 2, alignItems: "center" }}>
            3 <sup className={titleFont.className} style={{ fontSize: "0.5em" }}>+</sup>
        </div>}
        subtitle={"Projects Delievered"}
    />;
}

function HappyUsers() {
    return <Card
        isStats
        backgroundColor={"#734FA3"}
        textColor={"#CFB8E5"}
        title={"20k"}
        subtitle={"Happy Users"}
    />;
}


function ClientRetention() {
    return <Card
        backgroundColor={"#A964E5"}
        textColor={"#CFB8E5"}
        title={<div style={{ display: "flex", flexDirection: "row", gap: 2, alignItems: "center" }}>
            98 <sup className={titleFont.className} style={{ fontSize: "0.5em" }}>%</sup>
        </div>}
        subtitle={"Client Retention"}
        isStats
    />;
}