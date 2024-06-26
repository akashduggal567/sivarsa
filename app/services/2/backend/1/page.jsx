'use client';
import Card from "../../../../Card";
import { GridItem } from "../../../../page";
import { BackendCommonTitle } from "../page";
import localFont from 'next/font/local';

// Font files can be colocated inside of `app`
const titleFont = localFont({
    src: '../../../../fonts/PPMondwest-Regular.otf',
    display: 'swap',
});

export default function WebWonderSkills() {
    return <>
        <GridItem />
        <GridItem><ServerUptime /></GridItem>
        <GridItem></GridItem>

        <GridItem><BackendCommonTitle /></GridItem>
        <GridItem><ClientsServed /></GridItem>
        <GridItem></GridItem>

        <GridItem />
        <GridItem></GridItem>
        <GridItem><TechMastered /></GridItem>
    </>;
}

function ClientsServed() {
    return <Card
        isStats
        backgroundColor={"#F559C4"}
        textColor={"#F3C7E7"}
        title={<div style={{ display: "flex", flexDirection: "row", gap: 2, alignItems: "center" }}>
            9
            <sup
                className={titleFont.className}
                style={{ fontSize: "0.5em" }}>
                +
            </sup>
        </div>}
        subtitle={"Clients Served"}
    />;
}

function TechMastered() {
    return <Card
        isStats
        backgroundColor={"#BA51BA"}
        textColor={"#F3C7E7"}
        title={<div style={{ display: "flex", flexDirection: "row", gap: 2, alignItems: "center" }}>
            50
            <sup
                className={titleFont.className}
                style={{ fontSize: "0.5em" }}>
                +
            </sup>
        </div>}
        subtitle={"Technologies Mastered"}
    />;
}


function ServerUptime() {
    return <Card
        isStats
        backgroundColor={"#F19AD9"}
        textColor={"#AD3284"}
        title={<div style={{ display: "flex", flexDirection: "row", gap: 2, alignItems: "center" }}>
            97 <sup className={titleFont.className} style={{ fontSize: "0.5em" }}>%</sup>
        </div>}
        subtitle={"Server Uptime"}
    />;
}