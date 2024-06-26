'use client';
import Card from "../../../../Card";
import { GridItem } from "../../../../page";
import { UICommonTitle } from "../page";

export default function WebWonderLanguages() {
    return <>
        <GridItem><Discovery /></GridItem>
        <GridItem />
        <GridItem><Design /></GridItem>

        <GridItem><Development /></GridItem>
        <GridItem><Testing /></GridItem>
        <GridItem></GridItem>

        <GridItem />
        <GridItem><UICommonTitle /></GridItem>
        <GridItem></GridItem>
 
    </>;
}


function Discovery() {
    return <Card
        isHeadline
        backgroundColor={"linear-gradient(0deg, #5626C0 0%, #171717 100%)"}
        textColor={"#CFB8E5"}
        title={"Discovery"}
        subtitle="Digging deep into user needs and business goals.."
        subtitleColor="rgba(207, 184, 229, 0.80)"
    />;
}

function Design() {
    return <Card
        isHeadline
        backgroundColor={"linear-gradient(0deg, #5626C0 0%, #171717 100%)"}
        textColor={"#CFB8E5"}
        title={"Design"}
        subtitle="Conducting user research to gather insights."
        subtitleColor="rgba(207, 184, 229, 0.80)"
    />;
}

function Development() {
    return <Card
        isHeadline
        backgroundColor={"linear-gradient(0deg, #5626C0 0%, #171717 100%)"}
        textColor={"#CFB8E5"}
        title={"Development"}
        subtitle="Creating wireframes, prototypes, and visual designs.."
        subtitleColor="rgba(207, 184, 229, 0.80)"
    />;
}


function Testing() {
    return <Card
        isHeadline
        backgroundColor={"linear-gradient(0deg, #5626C0 0%, #171717 100%)"}
        textColor={"#CFB8E5"}
        title={"Testing"}
        subtitle="Conducting usability tests to refine designs.."
        subtitleColor="rgba(207, 184, 229, 0.80)"
    />;
}
