'use client';
import { useRouter } from "next/navigation";
import { GridItem } from "../../../page";
import { TalentOnTap } from "../page";
import Card from "../../../Card";

export default function Talent() {
    const router = useRouter();

    return <>
        <GridItem><MainTitle /></GridItem>
        <GridItem></GridItem>
        <GridItem><Permanent /></GridItem>

        <GridItem>
            <ContractEmployees />
        </GridItem>
        <GridItem />
        <GridItem />


        <GridItem />
        <GridItem><PartTimeEmployees /></GridItem>
        <GridItem><TalentOnTap /></GridItem>
    </>;
}

function MainTitle() {
    return <Card
        textColor={"#CAAE57"}
        title={"Offerings"}
    />;
}


function Permanent() {
    return <Card
        isHeadline
        backgroundColor={"#F29E11"}
        title={"Permanent Employees"}
        textColor="#9D5209"
    />;
}


function ContractEmployees() {
    return <Card
        isHeadline
        backgroundColor={"#F4B600"}
        title={"Contract Employees"}
        textColor="#9D5209"
    />;
}


function PartTimeEmployees() {
    return <Card
        isHeadline
        backgroundColor={"#F4D4A8"}
        title={"Part time employees"}
        textColor="#9D5209"
    />;
}