'use client';
import { useRouter } from "next/navigation";
import { GridItem } from "../../../../page";
import { AICommonTitle } from "../1/page";
import Card from "../../../../Card";

export default function WebWonderFrameworks() {
    const router = useRouter();

    return <>
        <GridItem><MainTitle /> </GridItem>
        <GridItem><ChatbotIntegration /></GridItem>
        <GridItem><DataAnalytics /></GridItem>

        <GridItem><AICommonTitle /></GridItem>
        <GridItem><UserInterestPrediction /></GridItem>
        <GridItem />


        <GridItem></GridItem>
        <GridItem />
        <GridItem><ProcessAutomation /></GridItem>
    </>;
}

function MainTitle() {
    return <Card
        isHeadline
        isHeadlineNumberOnly
        textColor={"#F1C5AA"}
        title={"Skills"}
    />;
}

function ChatbotIntegration() {
    return <Card
        isHeadline
        textColor={"#F36601"}
        title={"Chatbot Integration"}
        titleIcon={
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <g clip-path="url(#clip0_113_6148)">
                    <path d="M39.9996 19.05H38.0996V32.3875H39.9996V19.05Z" fill="#F36601" />
                    <path d="M38.1002 32.3875H36.2002V34.2875H38.1002V32.3875Z" fill="#F36601" />
                    <path d="M38.1002 17.15H36.2002V19.05H38.1002V17.15Z" fill="#F36601" />
                    <path d="M34.2877 38.1H32.3877V40H36.2002V34.2875H34.2877V38.1Z" fill="#F36601" />
                    <path d="M32.3873 15.2375H24.7623V13.3375H22.8623V15.2375H19.0498V17.15H36.1998V15.2375H34.2873V9.52502H32.3873V15.2375Z" fill="#F36601" />
                    <path d="M32.3871 36.2H30.4746V38.1H32.3871V36.2Z" fill="#F36601" />
                    <path d="M32.3877 19.05H28.5752V20.9625H26.6752V19.05H22.8627V20.9625H20.9502V24.7625H22.8627V26.675H24.7627V28.5751H26.6752V30.4875H28.5752V28.5751H30.4752V26.675H32.3877V24.7625H34.2877V20.9625H32.3877V19.05Z" fill="#F36601" />
                    <path d="M32.3871 7.625H30.4746V9.525H32.3871V7.625Z" fill="#F36601" />
                    <path d="M30.4752 34.2875H28.5752V36.2H30.4752V34.2875Z" fill="#F36601" />
                    <path d="M30.4752 5.72498H28.5752V7.62498H30.4752V5.72498Z" fill="#F36601" />
                    <path d="M28.5748 32.3875H19.0498V34.2875H28.5748V32.3875Z" fill="#F36601" />
                    <path d="M28.5752 3.8125H24.7627V5.725H28.5752V3.8125Z" fill="#F36601" />
                    <path d="M24.7627 1.91248H20.9502V3.81248H24.7627V1.91248Z" fill="#F36601" />
                    <path d="M24.7623 11.4375V13.3375H26.6748V9.525H20.9498V7.625H19.0498V11.4375H24.7623Z" fill="#F36601" />
                    <path d="M19.0504 30.4875H17.1504V32.3875H19.0504V30.4875Z" fill="#F36601" />
                    <path d="M19.0504 17.15H17.1504V19.05H19.0504V17.15Z" fill="#F36601" />
                    <path d="M19.0504 5.72498H17.1504V7.62498H19.0504V5.72498Z" fill="#F36601" />
                    <path d="M17.1504 19.05H13.3379V20.9625H15.2379V28.5751H9.52539V30.4875H17.1504V19.05Z" fill="#F36601" />
                    <path d="M17.1498 3.8125H15.2373V5.725H17.1498V3.8125Z" fill="#F36601" />
                    <path d="M20.9504 0H13.3379V1.9125H20.9504V0Z" fill="#F36601" />
                    <path d="M15.2379 5.72498H13.3379V7.62498H15.2379V5.72498Z" fill="#F36601" />
                    <path d="M13.3375 20.9625H11.4375V22.8625H13.3375V20.9625Z" fill="#F36601" />
                    <path d="M13.3379 1.91248H9.52539V3.81248H13.3379V1.91248Z" fill="#F36601" />
                    <path d="M11.4379 22.8625H9.52539V24.7625H11.4379V22.8625Z" fill="#F36601" />
                    <path d="M11.4379 15.2375H9.52539V19.05H11.4379V15.2375Z" fill="#F36601" />
                    <path d="M9.525 19.05H7.625V22.8626H9.525V19.05Z" fill="#F36601" />
                    <path d="M9.525 13.3375H7.625V15.2375H9.525V13.3375Z" fill="#F36601" />
                    <path d="M13.3379 11.4375V7.625H11.4379V9.525H5.71289V13.3375H7.62539V11.4375H13.3379Z" fill="#F36601" />
                    <path d="M9.52539 3.8125H5.71289V5.725H9.52539V3.8125Z" fill="#F36601" />
                    <path d="M3.8125 30.4874V28.575H1.9125V30.4874H0V32.3875H9.525V30.4874H3.8125Z" fill="#F36601" />
                    <path d="M5.7125 24.7625H3.8125V28.575H5.7125V24.7625Z" fill="#F36601" />
                    <path d="M5.7125 5.72498H3.8125V7.62498H5.7125V5.72498Z" fill="#F36601" />
                    <path d="M3.81211 22.8625H1.91211V24.7625H3.81211V22.8625Z" fill="#F36601" />
                    <path d="M3.81211 7.625H1.91211V9.525H3.81211V7.625Z" fill="#F36601" />
                    <path d="M1.9125 9.52502H0V22.8625H1.9125V9.52502Z" fill="#F36601" />
                </g>
                <defs>
                    <clipPath id="clip0_113_6148">
                        <rect width="40" height="40" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        }
    />;
}

function DataAnalytics() {
    return <Card
        isHeadline
        textColor={"#F36601"}
        title={"Data Analytics"}
        titleIcon={
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <g clip-path="url(#clip0_113_6190)">
                    <path d="M37.1506 29.5313H35.2381V27.6251H33.3381V25.7251H31.4256V21.9126H29.5256V25.7251H27.6256V27.6251H25.7131V29.5376H21.9131V31.4376H25.7131V33.3376H27.6256V35.2501H29.5256V37.1501H31.4256V39.0501H37.1506V37.1501H39.0506V31.4376H37.1506V29.5313ZM37.1506 35.2438H35.2381V33.3313H33.3381V31.4313H31.4256V29.5313H33.3381V31.4313H35.2381V33.3313H37.1506V35.2438Z" fill="#F36601" fill-opacity="0.8" />
                    <path d="M33.3373 12.3813H31.4248V21.9063H33.3373V12.3813Z" fill="#F36601" fill-opacity="0.8" />
                    <path d="M31.4254 8.56885H29.5254V12.3813H31.4254V8.56885Z" fill="#F36601" fill-opacity="0.8" />
                    <path d="M29.525 6.66882H27.625V8.56882H29.525V6.66882Z" fill="#F36601" fill-opacity="0.8" />
                    <path d="M27.6254 16.1938H25.7129V18.0938H27.6254V16.1938Z" fill="#F36601" fill-opacity="0.8" />
                    <path d="M27.6254 4.7688H25.7129V6.6688H27.6254V4.7688Z" fill="#F36601" fill-opacity="0.8" />
                    <path d="M25.7125 18.0938H23.8125V20.0062H25.7125V18.0938Z" fill="#F36601" fill-opacity="0.8" />
                    <path d="M25.7125 14.2812H23.8125V16.1937H25.7125V14.2812Z" fill="#F36601" fill-opacity="0.8" />
                    <path d="M23.8131 20.0063H21.9131V21.9063H23.8131V20.0063Z" fill="#F36601" fill-opacity="0.8" />
                    <path d="M23.8131 12.3813H21.9131V14.2813H23.8131V12.3813Z" fill="#F36601" fill-opacity="0.8" />
                    <path d="M25.7131 2.85632H21.9131V4.76882H25.7131V2.85632Z" fill="#F36601" fill-opacity="0.8" />
                    <path d="M21.9127 31.4313H12.3877V33.3313H21.9127V31.4313Z" fill="#F36601" fill-opacity="0.8" />
                    <path d="M20.0006 12.3813H18.1006V16.1938H20.0006V12.3813Z" fill="#F36601" fill-opacity="0.8" />
                    <path d="M18.1 16.1938H16.1875V18.0938H18.1V16.1938Z" fill="#F36601" fill-opacity="0.8" />
                    <path d="M16.1881 18.0938H14.2881V21.9062H16.1881V18.0938Z" fill="#F36601" fill-opacity="0.8" />
                    <path d="M21.9127 0.956299H12.3877V2.8563H21.9127V0.956299Z" fill="#F36601" fill-opacity="0.8" />
                    <path d="M12.3877 29.5312H8.5752V31.4313H12.3877V29.5312Z" fill="#F36601" fill-opacity="0.8" />
                    <path d="M12.3881 20.0063H10.4756V21.9063H12.3881V20.0063Z" fill="#F36601" fill-opacity="0.8" />
                    <path d="M12.3881 12.3813H10.4756V14.2813H12.3881V12.3813Z" fill="#F36601" fill-opacity="0.8" />
                    <path d="M12.3877 2.85632H8.5752V4.76882H12.3877V2.85632Z" fill="#F36601" fill-opacity="0.8" />
                    <path d="M10.4752 18.0938H8.5752V20.0062H10.4752V18.0938Z" fill="#F36601" fill-opacity="0.8" />
                    <path d="M10.4752 14.2812H8.5752V16.1937H10.4752V14.2812Z" fill="#F36601" fill-opacity="0.8" />
                    <path d="M8.5748 27.6188H6.6748V29.5313H8.5748V27.6188Z" fill="#F36601" fill-opacity="0.8" />
                    <path d="M8.5748 16.1938H6.6748V18.0938H8.5748V16.1938Z" fill="#F36601" fill-opacity="0.8" />
                    <path d="M8.5748 4.7688H6.6748V6.6688H8.5748V4.7688Z" fill="#F36601" fill-opacity="0.8" />
                    <path d="M6.6752 25.7188H4.7627V27.6187H6.6752V25.7188Z" fill="#F36601" fill-opacity="0.8" />
                    <path d="M6.6752 6.66882H4.7627V8.56882H6.6752V6.66882Z" fill="#F36601" fill-opacity="0.8" />
                    <path d="M4.7623 21.9062H2.8623V25.7188H4.7623V21.9062Z" fill="#F36601" fill-opacity="0.8" />
                    <path d="M4.7623 8.56885H2.8623V12.3813H4.7623V8.56885Z" fill="#F36601" fill-opacity="0.8" />
                    <path d="M2.8627 12.3813H0.950195V21.9063H2.8627V12.3813Z" fill="#F36601" fill-opacity="0.8" />
                </g>
                <defs>
                    <clipPath id="clip0_113_6190">
                        <rect width="40" height="40" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        }
    />;
}

function ProcessAutomation() {
    return <Card
        isHeadline
        textColor={"#F36601"}
        title={"Process Automation"}
        titleIcon={
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <g clip-path="url(#clip0_113_6249)">
                    <path d="M40 36.1875H36.1875V38.1H40V36.1875Z" fill="#F36601" fill-opacity="0.6" />
                    <path d="M36.1871 38.1H34.2871V40H36.1871V38.1Z" fill="#F36601" fill-opacity="0.6" />
                    <path d="M34.2875 24.7625H32.375V26.6625H34.2875V28.5751H36.1875V19.05H34.2875V24.7625Z" fill="#F36601" fill-opacity="0.6" />
                    <path d="M34.2871 36.1875H30.4746V38.1H34.2871V36.1875Z" fill="#F36601" fill-opacity="0.6" />
                    <path d="M34.2875 17.15H32.375V19.05H34.2875V17.15Z" fill="#F36601" fill-opacity="0.6" />
                    <path d="M30.4746 34.2875H26.6621V36.1875H30.4746V34.2875Z" fill="#F36601" fill-opacity="0.6" />
                    <path d="M28.5752 26.6625H30.4752V24.7625H32.3752V22.8625H30.4752V17.15H32.3752V15.2375H30.4752V9.52502H28.5752V26.6625Z" fill="#F36601" fill-opacity="0.6" />
                    <path d="M26.6627 38.1H24.7627V40H26.6627V38.1Z" fill="#F36601" fill-opacity="0.6" />
                    <path d="M26.6627 22.8625H24.7627V24.7625H26.6627V22.8625Z" fill="#F36601" fill-opacity="0.6" />
                    <path d="M26.6627 19.05H24.7627V20.95H26.6627V19.05Z" fill="#F36601" fill-opacity="0.6" />
                    <path d="M24.7621 34.2875H22.8496V38.1H24.7621V34.2875Z" fill="#F36601" fill-opacity="0.6" />
                    <path d="M24.7627 30.475H17.1377V32.3875H24.7627V30.475Z" fill="#F36601" fill-opacity="0.6" />
                    <path d="M24.7621 1.90002H22.8496V3.81252H24.7621V1.90002Z" fill="#F36601" fill-opacity="0.6" />
                    <path d="M22.8498 0H19.0498V1.9H22.8498V0Z" fill="#F36601" fill-opacity="0.6" />
                    <path d="M24.7627 11.425H22.8502V9.52502H19.0502V11.425H20.9502V13.3375H19.0502V11.425H17.1377V15.2375H19.0502V17.15H22.8502V15.2375H24.7627V11.425Z" fill="#F36601" fill-opacity="0.6" />
                    <path d="M19.0502 34.2875H17.1377V38.1H19.0502V34.2875Z" fill="#F36601" fill-opacity="0.6" />
                    <path d="M13.3252 28.575H15.2377V30.475H17.1377V28.575H24.7627V30.475H26.6627V28.575H28.5752V26.6625H13.3252V28.575Z" fill="#F36601" fill-opacity="0.6" />
                    <path d="M19.0502 1.90002H17.1377V3.81252H19.0502V1.90002Z" fill="#F36601" fill-opacity="0.6" />
                    <path d="M17.1373 38.1H15.2373V40H17.1373V38.1Z" fill="#F36601" fill-opacity="0.6" />
                    <path d="M15.2373 34.2875H11.4248V36.1875H15.2373V34.2875Z" fill="#F36601" fill-opacity="0.6" />
                    <path d="M17.1377 5.7125V3.8125H15.2377V5.7125H13.3252V9.525H15.2377V7.625H26.6627V9.525H28.5752V5.7125H26.6627V3.8125H24.7627V5.7125H17.1377Z" fill="#F36601" fill-opacity="0.6" />
                    <path d="M13.3254 9.52502H11.4254V15.2375H9.52539V17.15H11.4254V22.8625H9.52539V24.7625H11.4254V26.6625H13.3254V9.52502Z" fill="#F36601" fill-opacity="0.6" />
                    <path d="M11.4248 36.1875H7.6123V38.1H11.4248V36.1875Z" fill="#F36601" fill-opacity="0.6" />
                    <path d="M9.5248 17.15H7.6123V19.05H9.5248V17.15Z" fill="#F36601" fill-opacity="0.6" />
                    <path d="M7.61289 38.1H5.71289V40H7.61289V38.1Z" fill="#F36601" fill-opacity="0.6" />
                    <path d="M7.61289 19.05H5.71289V28.5751H7.61289V26.6625H9.52539V24.7625H7.61289V19.05Z" fill="#F36601" fill-opacity="0.6" />
                    <path d="M5.71289 36.1875H1.90039V38.1H5.71289V36.1875Z" fill="#F36601" fill-opacity="0.6" />
                    <path d="M1.9 38.1H0V40H1.9V38.1Z" fill="#F36601" fill-opacity="0.6" />
                </g>
                <defs>
                    <clipPath id="clip0_113_6249">
                        <rect width="40" height="40" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        }
    />;
}

function UserInterestPrediction() {
    return <Card
        isHeadline
        textColor={"#F36601"}
        title={"User Interest Prediction"}
        titleIcon={
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <g clip-path="url(#clip0_113_6227)">
                    <path d="M1.9 9.52502H38.1V38.0875H40V1.90002H38.1V7.61252H1.9V1.90002H0V38.0875H1.9V9.52502Z" fill="#F36601" fill-opacity="0.4" />
                    <path d="M38.1004 38.0875H1.90039V40H38.1004V38.0875Z" fill="#F36601" fill-opacity="0.4" />
                    <path d="M34.2871 32.375H26.6621V34.2875H34.2871V32.375Z" fill="#F36601" fill-opacity="0.4" />
                    <path d="M34.2871 28.5625H26.6621V30.475H34.2871V28.5625Z" fill="#F36601" fill-opacity="0.4" />
                    <path d="M5.71289 13.325V24.7625H34.2879V13.325H5.71289ZM32.3754 22.85H19.0504V20.95H17.1379V22.85H7.61289V15.2375H26.6629V17.1375H28.5754V15.2375H32.3754V22.85Z" fill="#F36601" fill-opacity="0.4" />
                    <path d="M26.6623 17.1375H22.8623V19.0375H26.6623V17.1375Z" fill="#F36601" fill-opacity="0.4" />
                    <path d="M22.8623 19.0375H19.0498V20.95H22.8623V19.0375Z" fill="#F36601" fill-opacity="0.4" />
                    <path d="M20.9504 32.375H5.71289V34.2875H20.9504V32.375Z" fill="#F36601" fill-opacity="0.4" />
                    <path d="M20.9504 28.5625H5.71289V30.475H20.9504V28.5625Z" fill="#F36601" fill-opacity="0.4" />
                    <path d="M13.3373 3.80005H11.4248V5.71255H13.3373V3.80005Z" fill="#F36601" fill-opacity="0.4" />
                    <path d="M13.3379 17.1375H9.52539V20.95H13.3379V17.1375Z" fill="#F36601" fill-opacity="0.4" />
                    <path d="M9.5248 3.80005H7.6123V5.71255H9.5248V3.80005Z" fill="#F36601" fill-opacity="0.4" />
                    <path d="M5.7125 3.80005H3.8125V5.71255H5.7125V3.80005Z" fill="#F36601" fill-opacity="0.4" />
                    <path d="M38.1004 0H1.90039V1.9H38.1004V0Z" fill="#F36601" fill-opacity="0.4" />
                </g>
                <defs>
                    <clipPath id="clip0_113_6227">
                        <rect width="40" height="40" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        }
    />;
}


