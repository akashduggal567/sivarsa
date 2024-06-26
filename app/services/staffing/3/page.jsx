'use client';
import { useRouter } from "next/navigation";
import { GridItem } from "../../../page";
import { TalentOnTap } from "../page";
import Card from "../../../Card";

export default function Talent() {
    const router = useRouter();

    return <>
        <GridItem><Discovery /></GridItem>
        <GridItem></GridItem>
        <GridItem><TalentSourcing /></GridItem>

        <GridItem>
            <Matching />
        </GridItem>
        <GridItem>
            <OnBoarding />
        </GridItem>
        <GridItem>
        </GridItem>

        <GridItem><OngoingSupport />
        </GridItem>
        <GridItem>
        </GridItem>
        <GridItem><TalentOnTap /></GridItem>
    </>;
}

function Discovery() {
    return <Card
        isHeadline
        backgroundColor={"linear-gradient(0deg, #B88D01 0%, #171717 70%)"}
        textColor={"#F5DCAE"}
        title={"Discovery"}
        subtitle="Understanding your staffing needs and project requirements."
        subtitleColor="rgba(245, 220, 174, 0.80)"
    />;
}

function TalentSourcing() {
    return <Card
        isHeadline
        backgroundColor={"linear-gradient(0deg, #B88D01 0%, #171717 70%)"}
        textColor={"#F5DCAE"}
        title={"Talen Sourcing"}
        subtitle="Identifying and screening the best candidates."
        subtitleColor="rgba(245, 220, 174, 0.80)"
    />;
}

function Matching() {
    return <Card
        isHeadline
        backgroundColor={"linear-gradient(0deg, #B88D01 0%, #171717 70%)"}
        textColor={"#F5DCAE"}
        title={"Matching"}
        subtitle="Aligning talent with your specific project goals."
        subtitleColor="rgba(245, 220, 174, 0.80)"
    />;
}

function OnBoarding() {
    return <Card
        isHeadline
        backgroundColor={"linear-gradient(0deg, #B88D01 0%, #171717 70%)"}
        textColor={"#F5DCAE"}
        title={"Onboarding"}
        subtitle="Seamlessly integrating new team members into your workflow."
        subtitleColor="rgba(245, 220, 174, 0.80)"
    />;
}

function OngoingSupport() {
    return <Card
        isHeadline
        backgroundColor={"linear-gradient(0deg, #B88D01 0%, #171717 70%)"}
        textColor={"#F5DCAE"}
        title={"Ongoing Support"}
        subtitle="Continuous support to ensure smooth collaboration."
        subtitleColor="rgba(245, 220, 174, 0.80)"
    />;
}