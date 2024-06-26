'use client';
import { GridItem } from "../../../../page";
import Card from "../../../../Card";

export default function WebWonderSkills() {
    return <>
        <GridItem />
        <GridItem><Discovery /></GridItem>
        <GridItem><Design /></GridItem>

        <GridItem><Development /></GridItem>
        <GridItem><Testing /></GridItem>
        <GridItem><Deployment /></GridItem>

        <GridItem><Title /></GridItem>
        <GridItem />
        <GridItem />
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

function Discovery() {
    return <Card
        isHeadline
        backgroundColor={"linear-gradient(180deg, rgba(49, 177, 12, 0.90) 0%, #171717 100%)"}
        textColor={"#C7DFB8"}
        title={"Discovery"}
        subtitle="Understanding your vision and goals."
    />;
}

function Design() {
    return <Card
        isHeadline
        backgroundColor={"linear-gradient(180deg, #31B10C 0%, #171717 100%)"}
        textColor={"#C7DFB8"}
        title={"Design"}
        subtitle="Crafting engaging and user-friendly interfaces."
    />;
}

function Deployment() {
    return <Card
        isHeadline
        backgroundColor={"linear-gradient(180deg, #31B10C 0%, #171717 100%)"}
        textColor={"#C7DFB8"}
        title={"Deployment"}
        subtitle="Launching and keeping your site running smoothly."
    />;
}

function Development() {
    return <Card
        isHeadline
        backgroundColor={"linear-gradient(180deg, #31B10C 0%, #171717 100%)"}
        textColor={"#C7DFB8"}
        title={"Development"}
        subtitle="Building robust and scalable websites."
    />;
}

function Testing() {
    return <Card
        isHeadline
        backgroundColor={"linear-gradient(180deg, #31B10C 0%, #171717 100%)"}
        textColor={"#C7DFB8"}
        title={"Testing"}
        subtitle="Ensuring flawless performance across all devices."
    />;
}