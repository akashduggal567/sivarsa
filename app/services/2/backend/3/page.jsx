'use client';
import Card from "../../../../Card";
import { GridItem } from "../../../../page";
import { BackendCommonTitle } from "../page";

export default function WebWonderLanguages() {
    return <>
        <GridItem><Discovery /></GridItem>
        <GridItem />
        <GridItem><Design /></GridItem>

        <GridItem><BackendCommonTitle /></GridItem>
        <GridItem><Development /></GridItem>
        <GridItem></GridItem>

        <GridItem />
        <GridItem><Testing /></GridItem>
        <GridItem><Deployment /></GridItem>
 
    </>;
}


function Discovery() {
    return <Card
        isHeadline
        backgroundColor={"linear-gradient(160deg, #B639C2 1.19%, #171717 66.6%)"}
        textColor={"#F3C7E8"}
        title={"Discovery"}
        subtitle="Understanding your backend needs and project requirements.."
        subtitleColor="rgba(243, 199, 232, 0.80)"
    />;
}

function Design() {
    return <Card
        isHeadline
        backgroundColor={"linear-gradient(160deg, #B639C2 1.19%, #171717 66.6%)"}
        textColor={"#F3C7E8"}
        title={"Architecture Design"}
        subtitle="Designing a scalable and efficient backend architecture."
        subtitleColor="rgba(243, 199, 232, 0.80)"
    />;
}

function Development() {
    return <Card
        isHeadline
        backgroundColor={"linear-gradient(160deg, #B639C2 1.19%, #171717 66.6%)"}
        textColor={"#F3C7E8"}
        title={"Development"}
        subtitle="Writing clean and efficient code to implement backend services."
        subtitleColor="rgba(243, 199, 232, 0.80)"
    />;
}


function Testing() {
    return <Card
        isHeadline
        backgroundColor={"linear-gradient(160deg, #B639C2 1.19%, #171717 66.6%)"}
        textColor={"#F3C7E8"}
        title={"Testing"}
        subtitle="Rigorous testing to ensure performance, security, and reliability."
        subtitleColor="rgba(243, 199, 232, 0.80)"
    />;
}

function Deployment() {
    return <Card
        isHeadline
        backgroundColor={"linear-gradient(160deg, #B639C2 1.19%, #171717 66.6%)"}
        textColor={"#F3C7E8"}
        title={"Deployment"}
        subtitle="Launching and maintaining backend services."
        subtitleColor="rgba(243, 199, 232, 0.80)"
    />;
}

