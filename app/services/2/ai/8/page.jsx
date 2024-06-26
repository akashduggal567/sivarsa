'use client';
import Card from "../../../../Card";
import { GridItem } from "../../../../page";


export default function AppMakers() {
    return <>
        <GridItem><Title /></GridItem>
        <GridItem></GridItem>
        <GridItem><InnovativeSolution /></GridItem>

        <GridItem></GridItem>
        <GridItem><EfficiencyBoost /></GridItem>
        <GridItem>
        </GridItem>



        <GridItem>
        </GridItem>
        <GridItem />
        <GridItem><DecisionMaking /></GridItem>
    </>;
}


function Title() {
    return <Card
        isHeadline
        isHeadlineNumberOnly
        backgroundImage={<img id="noisy_bg" src="/ai_noisy_gradient.png" />}
        textColor={"#C7DFB8"}
        title={"Why Us?"}
        headlineStyle={{ position: "absolute", top: 20 }}
    />;
}


function InnovativeSolution() {
    return <Card
        isHeadline
        backgroundColor={"#AC550C"}
        textColor={"rgba(241, 198, 169, 0.80)"}
        title="Innovative Solutions"
        subtitle="Stay ahead with cutting-edge technology."
        subtitleColor="rgba(241, 197, 170, 0.80)"   
    />;
}

function EfficiencyBoost() {
    return <Card
        isHeadline
        backgroundColor={"#F66004"}
        textColor={"rgba(241, 198, 169, 0.80)"}
        title="Efficiency Boost"
        subtitle="Automate the mundane, embrace the extraordinary."
        subtitleColor="rgba(241, 197, 170, 0.80)"
    />;
}

function DecisionMaking() {
    return <Card
        isHeadline
        backgroundColor={"#CF8A54"}
        textColor={"#F1C6A9"}
        title="Enhanced Decision Making"
        subtitle="Let AI crunch the numbers while you focus on strategy.."
        subtitleColor="rgba(241, 197, 170, 0.80)"   
    />;
}

