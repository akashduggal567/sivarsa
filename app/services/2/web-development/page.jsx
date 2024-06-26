'use client';
import Card from "../../../Card";
import { GridItem } from "../../../page";

export default function WebDevelopmentPage() {
    return <>
        <GridItem><Uptime /></GridItem>
        <GridItem></GridItem>
        <GridItem>
            <Description />
        </GridItem>

        <GridItem />
        <GridItem>
            <Card videoSrc="/web_wonder_bg.mp4" />
        </GridItem>
        <GridItem><Visitors /></GridItem>

        <GridItem><Title /></GridItem>
        <GridItem></GridItem>
        <GridItem><Delivered /></GridItem>

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
        // headlineStyle={{ fontSize: 150, top: "-20px", position: "absolute" }}
        backgroundColor={"linear-gradient(180deg, #31B10C 0%, #171717 100%)"}
        textColor={"#C7DFB8"}
        title={"500k"}
        subtitle="Monthly Visitors"
    // subtitleStyle={{ position: "absolute", bottom: "10%", right: "-80px" }}
    />;
}

function Visitors() {
    return <Card
        isHeadline
        backgroundColor={"linear-gradient(180deg, #31B10C 0%, #171717 100%)"}
        textColor={"#C7DFB8"}
        title={"6+ "}
        subtitle="Websites Delivered"
    />;
}

function Delivered() {
    return <Card
        isHeadline
        backgroundColor={"linear-gradient(180deg, #31B10C 0%, #171717 100%)"}
        textColor={"#C7DFB8"}
        title={"99%"}
        subtitle="Uptime Guaranteed"
    />;
}



