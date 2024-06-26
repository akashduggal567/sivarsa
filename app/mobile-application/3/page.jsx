'use client';
import { useRouter } from "next/navigation";
import { GridItem } from "../../page";
import Card from "../../Card";

export default function AppMakers() {
    const router = useRouter();

    return <>
        <GridItem><MainTitle /></GridItem>
        <GridItem><NativeAppDev /></GridItem>
        <GridItem><CustomMobileApps /></GridItem>


        <GridItem><CrossPlatform /></GridItem>
        <GridItem><AppStoreOptimization /></GridItem>
        <GridItem />

        <GridItem>
        </GridItem>
        <GridItem />
        <GridItem><CommonTitle /></GridItem>
    </>;
}

function CustomMobileApps() {
    return <Card
        isHeadline
        textColor={"#23A3FF"}
        title={"Custom Mobile Apps"}
        titleIcon={
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="31" viewBox="0 0 40 31" fill="none">
                <path d="M39.9996 1.9126H38.0996V28.5751H39.9996V1.9126Z" fill="#23A3FF" fill-opacity="0.8" />
                <path d="M38.1004 28.575H1.90039V30.4874H38.1004V28.575Z" fill="#23A3FF" fill-opacity="0.8" />
                <path d="M36.1873 0H32.3873V1.9125H30.4748V3.8125H28.5748V5.725H26.6623V7.625H24.7623V9.525H22.8623V11.4375H20.9498V13.3375H19.0498V17.15H22.8623V15.2375H24.7623V13.3375H26.6623V11.4375H28.5748V9.525H30.4748V7.625H32.3873V5.725H34.2873V3.8125H36.1873V0Z" fill="#23A3FF" fill-opacity="0.8" />
                <path d="M19.0502 17.1499H17.1377V19.0499H19.0502V17.1499Z" fill="#23A3FF" fill-opacity="0.8" />
                <path d="M17.1373 9.5249H15.2373V11.4374H17.1373V9.5249Z" fill="#23A3FF" fill-opacity="0.8" />
                <path d="M17.1373 19.05H11.4248V20.9625H17.1373V19.05Z" fill="#23A3FF" fill-opacity="0.8" />
                <path d="M15.2379 11.4375H13.3379V13.3375H15.2379V11.4375Z" fill="#23A3FF" fill-opacity="0.8" />
                <path d="M15.2373 7.625H11.4248V9.525H15.2373V7.625Z" fill="#23A3FF" fill-opacity="0.8" />
                <path d="M13.3373 13.3374H11.4248V15.2374H13.3373V13.3374Z" fill="#23A3FF" fill-opacity="0.8" />
                <path d="M11.4254 15.2375H9.52539V19.05H11.4254V15.2375Z" fill="#23A3FF" fill-opacity="0.8" />
                <path d="M11.4254 9.5249H9.52539V11.4374H11.4254V9.5249Z" fill="#23A3FF" fill-opacity="0.8" />
                <path d="M9.525 11.4375H7.625V13.3375H9.525V11.4375Z" fill="#23A3FF" fill-opacity="0.8" />
                <path d="M5.7125 5.725H24.7625V3.8125H3.8125V26.675H36.1875V7.625H34.2875V24.7625H5.7125V5.725Z" fill="#23A3FF" fill-opacity="0.8" />
                <path d="M28.5754 0H1.90039V1.9125H28.5754V0Z" fill="#23A3FF" fill-opacity="0.8" />
                <path d="M1.9 1.9126H0V28.5751H1.9V1.9126Z" fill="#23A3FF" fill-opacity="0.8" />
            </svg>
        }
    />;
}


function NativeAppDev() {
    return <Card
        isHeadline
        textColor={"#23A3FF"}
        title={"Native App Development"}
        titleIcon={
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <g clip-path="url(#clip0_113_5992)">
                    <path d="M39.9996 1.9126H38.0996V38.1001H39.9996V1.9126Z" fill="#23A3FF" />
                    <path d="M38.1004 38.1001H1.90039V40.0001H38.1004V38.1001Z" fill="#23A3FF" />
                    <path d="M36.1875 3.8125H3.8125V36.2H36.1875V3.8125ZM19.05 7.625H20.95V15.2375H19.05V7.625ZM11.425 7.625H17.1375V15.2375H11.425V7.625ZM7.625 7.625H9.525V15.2375H7.625V7.625ZM7.625 17.15H13.3375V24.7625H7.625V17.15ZM15.2375 32.3875H13.3375V34.2875H11.425V32.3875H13.3375V28.575H11.425V26.675H13.3375V28.575H15.2375V32.3875ZM15.2375 17.15H17.1375V24.7625H15.2375V17.15ZM22.8625 34.2875H17.1375V32.3875H22.8625V34.2875ZM19.05 24.7625V17.15H24.7625V24.7625H19.05ZM28.575 28.575H26.6625V32.3875H28.575V34.2875H26.6625V32.3875H24.7625V28.575H26.6625V26.675H28.575V28.575ZM28.575 24.7625H26.6625V17.15H28.575V24.7625ZM28.575 15.2375H22.8625V7.625H28.575V15.2375ZM32.375 24.7625H30.475V17.15H32.375V24.7625ZM32.375 15.2375H30.475V7.625H32.375V15.2375Z" fill="#23A3FF" />
                    <path d="M26.6627 9.5249H24.7627V13.3374H26.6627V9.5249Z" fill="#23A3FF" />
                    <path d="M22.8627 19.05H20.9502V22.8626H22.8627V19.05Z" fill="#23A3FF" />
                    <path d="M15.2379 9.5249H13.3379V13.3374H15.2379V9.5249Z" fill="#23A3FF" />
                    <path d="M11.4254 19.05H9.52539V22.8626H11.4254V19.05Z" fill="#23A3FF" />
                    <path d="M38.1004 0H1.90039V1.9125H38.1004V0Z" fill="#23A3FF" />
                    <path d="M1.9 1.9126H0V38.1001H1.9V1.9126Z" fill="#23A3FF" />
                </g>
                <defs>
                    <clipPath id="clip0_113_5992">
                        <rect width="40" height="40" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        }
    />;
}

function CrossPlatform() {
    return <Card
        isHeadline
        textColor={"#23A3FF"}
        title={"Native App Development"}
        titleIcon={
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <g clip-path="url(#clip0_113_6068)">
                    <path d="M40 3.8125H36.1875V5.7125H40V3.8125Z" fill="#23A3FF" fill-opacity="0.6" />
                    <path d="M40 34.2876H36.1875V36.1876H40V34.2876Z" fill="#23A3FF" fill-opacity="0.6" />
                    <path d="M36.1871 0H34.2871V3.8125H36.1871V0Z" fill="#23A3FF" fill-opacity="0.6" />
                    <path d="M36.1871 36.1875H34.2871V40H36.1871V36.1875Z" fill="#23A3FF" fill-opacity="0.6" />
                    <path d="M34.2879 5.7124H5.71289V34.2874H34.2879V5.7124ZM32.3879 32.3874H7.62539V7.6249H32.3879V32.3874Z" fill="#23A3FF" fill-opacity="0.6" />
                    <path d="M17.1504 30.4749H30.4754V17.1375H17.1504V30.4749ZM19.0504 19.05H28.5754V28.575H19.0504V19.05Z" fill="#23A3FF" fill-opacity="0.6" />
                    <path d="M11.4379 22.8624H13.3379V24.7624H15.2379V15.2374H24.7629V13.3374H22.8629V11.4249H20.9504V9.5249H13.3379V11.4249H11.4379V13.3374H9.52539V20.9499H11.4379V22.8624Z" fill="#23A3FF" fill-opacity="0.6" />
                    <path d="M5.7125 0H3.8125V3.8125H5.7125V0Z" fill="#23A3FF" fill-opacity="0.6" />
                    <path d="M5.7125 36.1875H3.8125V40H5.7125V36.1875Z" fill="#23A3FF" fill-opacity="0.6" />
                    <path d="M3.8125 3.8125H0V5.7125H3.8125V3.8125Z" fill="#23A3FF" fill-opacity="0.6" />
                    <path d="M3.8125 34.2876H0V36.1876H3.8125V34.2876Z" fill="#23A3FF" fill-opacity="0.6" />
                </g>
                <defs>
                    <clipPath id="clip0_113_6068">
                        <rect width="40" height="40" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        }
    />;
}

function AppStoreOptimization() {
    return <Card
        isHeadline  
        textColor={"#23A3FF"}
        title={"App Store Optimization"}
        titleIcon={
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <g clip-path="url(#clip0_113_6027)">
                    <path d="M38.0875 7.6251H1.9V1.9126H0V38.1001H1.9V9.5251H38.0875V38.1001H40V1.9126H38.0875V7.6251Z" fill="#23A3FF" fill-opacity="0.4" />
                    <path d="M38.0879 38.1001H1.90039V40.0001H38.0879V38.1001Z" fill="#23A3FF" fill-opacity="0.4" />
                    <path d="M30.4752 28.5752H28.5752V30.4752H30.4752V28.5752Z" fill="#23A3FF" fill-opacity="0.4" />
                    <path d="M28.5752 22.8627H30.4752V24.7627H28.5752V26.6752H32.3752V20.9502H28.5752V22.8627Z" fill="#23A3FF" fill-opacity="0.4" />
                    <path d="M30.4752 17.1501H28.5752V19.0501H30.4752V17.1501Z" fill="#23A3FF" fill-opacity="0.4" />
                    <path d="M28.5746 30.4751H26.6621V32.3876H28.5746V30.4751Z" fill="#23A3FF" fill-opacity="0.4" />
                    <path d="M28.5746 26.675H26.6621V28.575H28.5746V26.675Z" fill="#23A3FF" fill-opacity="0.4" />
                    <path d="M28.5746 19.05H26.6621V20.95H28.5746V19.05Z" fill="#23A3FF" fill-opacity="0.4" />
                    <path d="M28.5746 15.2375H26.6621V17.15H28.5746V15.2375Z" fill="#23A3FF" fill-opacity="0.4" />
                    <path d="M26.6627 32.3877H24.7627V34.2877H26.6627V32.3877Z" fill="#23A3FF" fill-opacity="0.4" />
                    <path d="M26.6627 13.3376H24.7627V15.2376H26.6627V13.3376Z" fill="#23A3FF" fill-opacity="0.4" />
                    <path d="M24.7621 30.4751H22.8496V32.3876H24.7621V30.4751Z" fill="#23A3FF" fill-opacity="0.4" />
                    <path d="M24.7621 20.9502H22.8496V26.6752H24.7621V20.9502Z" fill="#23A3FF" fill-opacity="0.4" />
                    <path d="M24.7621 15.2375H22.8496V17.15H24.7621V15.2375Z" fill="#23A3FF" fill-opacity="0.4" />
                    <path d="M20.9502 34.2877H19.0502V32.3877H17.1377V36.1877H22.8502V32.3877H20.9502V34.2877Z" fill="#23A3FF" fill-opacity="0.4" />
                    <path d="M22.8502 26.675H17.1377V28.575H22.8502V26.675Z" fill="#23A3FF" fill-opacity="0.4" />
                    <path d="M22.8502 19.05H17.1377V20.95H22.8502V19.05Z" fill="#23A3FF" fill-opacity="0.4" />
                    <path d="M19.0502 13.3375H20.9502V15.2375H22.8502V11.4375H17.1377V15.2375H19.0502V13.3375Z" fill="#23A3FF" fill-opacity="0.4" />
                    <path d="M17.1373 30.4751H15.2373V32.3876H17.1373V30.4751Z" fill="#23A3FF" fill-opacity="0.4" />
                    <path d="M17.1373 20.9502H15.2373V26.6752H17.1373V20.9502Z" fill="#23A3FF" fill-opacity="0.4" />
                    <path d="M17.1373 15.2375H15.2373V17.15H17.1373V15.2375Z" fill="#23A3FF" fill-opacity="0.4" />
                    <path d="M15.2379 32.3877H13.3379V34.2877H15.2379V32.3877Z" fill="#23A3FF" fill-opacity="0.4" />
                    <path d="M15.2379 13.3376H13.3379V15.2376H15.2379V13.3376Z" fill="#23A3FF" fill-opacity="0.4" />
                    <path d="M13.3373 30.4751H11.4248V32.3876H13.3373V30.4751Z" fill="#23A3FF" fill-opacity="0.4" />
                    <path d="M13.3373 26.675H11.4248V28.575H13.3373V26.675Z" fill="#23A3FF" fill-opacity="0.4" />
                    <path d="M13.3373 19.05H11.4248V20.95H13.3373V19.05Z" fill="#23A3FF" fill-opacity="0.4" />
                    <path d="M13.3373 15.2375H11.4248V17.15H13.3373V15.2375Z" fill="#23A3FF" fill-opacity="0.4" />
                    <path d="M13.3373 3.8125H11.4248V5.7125H13.3373V3.8125Z" fill="#23A3FF" fill-opacity="0.4" />
                    <path d="M11.4254 28.5752H9.52539V30.4752H11.4254V28.5752Z" fill="#23A3FF" fill-opacity="0.4" />
                    <path d="M9.5248 24.7627V22.8627H11.4248V20.9502H7.6123V26.6752H11.4248V24.7627H9.5248Z" fill="#23A3FF" fill-opacity="0.4" />
                    <path d="M11.4254 17.1501H9.52539V19.0501H11.4254V17.1501Z" fill="#23A3FF" fill-opacity="0.4" />
                    <path d="M9.5248 3.8125H7.6123V5.7125H9.5248V3.8125Z" fill="#23A3FF" fill-opacity="0.4" />
                    <path d="M5.7125 3.8125H3.8125V5.7125H5.7125V3.8125Z" fill="#23A3FF" fill-opacity="0.4" />
                    <path d="M38.0879 0H1.90039V1.9125H38.0879V0Z" fill="#23A3FF" fill-opacity="0.4" />
                </g>
                <defs>
                    <clipPath id="clip0_113_6027">
                        <rect width="40" height="40" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        }
    />;
}

function CommonTitle({ onClick }) {
    return <Card
        isHeadline
        isHeadlineNumberOnly
        backgroundColor={"#101D68"}
        textColor={"#83C7E6"}
        title={"App Makers"}
    />;
}

function MainTitle() {
    return <Card
        isHeadline
        isHeadlineNumberOnly
        textColor={"#83C7E6"}
        title={"Skills"}
    />;
}