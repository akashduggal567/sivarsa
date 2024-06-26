'use client';
import Card from "../../../../Card";
import { GridItem } from "../../../../page";
import { BackendCommonTitle } from "../page";

export default function WebWonderFrameworks() {
    return <>
        <GridItem><MainTitle /> </GridItem>
        <GridItem><DatabaseManagement /></GridItem>
        <GridItem><CloudIntegration /></GridItem>

        <GridItem><BackendCommonTitle /></GridItem>
        <GridItem></GridItem>
        <GridItem><ServerSideLogic /></GridItem>


        <GridItem></GridItem>
        <GridItem><ApiDevelopment /></GridItem>
        <GridItem></GridItem>
    </>;
}

function MainTitle() {
    return <Card
        isHeadline
        isHeadlineNumberOnly
        textColor={"#F3C7E7"}
        title={"Skills"}
    />;
}

function DatabaseManagement() {
    return <Card
        isHeadline
        textColor={"#F846E6"}
        title={"Database Management"}
        titleIcon={
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <g clip-path="url(#clip0_113_5785)">
                    <path d="M34.2877 7.625H32.3877V32.3875H34.2877V30.475H40.0002V28.575H34.2877V24.7625H40.0002V22.8625H34.2877V17.15H40.0002V15.2375H34.2877V11.4375H40.0002V9.525H34.2877V7.625Z" fill="#F846E6" />
                    <path d="M7.625 32.3875V34.2875H9.525V40H11.425V34.2875H15.2375V40H17.15V34.2875H22.8625V40H24.7625V34.2875H28.575V40H30.475V34.2875H32.3875V32.3875H7.625Z" fill="#F846E6" />
                    <path d="M28.5754 9.52502H11.4254V11.4375H9.52539V28.575H11.4254V26.675H15.2379V24.7625H19.0504V22.8625H20.9504V20.9625H22.8629V19.05H24.7629V17.15H26.6629V13.3375H28.5754V28.575H30.4754V11.4375H28.5754V9.52502ZM17.1504 19.05H13.3379V17.15H17.1504V19.05ZM22.8629 15.2375H13.3379V13.3375H22.8629V15.2375Z" fill="#F846E6" />
                    <path d="M28.5748 28.575H11.4248V30.4749H28.5748V28.575Z" fill="#F846E6" />
                    <path d="M26.6627 24.7625H24.7627V26.675H26.6627V24.7625Z" fill="#F846E6" />
                    <path d="M22.8627 24.7625H20.9502V26.675H22.8627V24.7625Z" fill="#F846E6" />
                    <path d="M32.3875 7.625V5.725H30.475V0H28.575V5.725H24.7625V0H22.8625V5.725H17.15V0H15.2375V5.725H11.425V0H9.525V5.725H7.625V7.625H32.3875Z" fill="#F846E6" />
                    <path d="M7.625 7.625H5.7125V9.525H0V11.4375H5.7125V15.2375H0V17.15H5.7125V22.8625H0V24.7625H5.7125V28.575H0V30.475H5.7125V32.3875H7.625V7.625Z" fill="#F846E6" />
                </g>
                <defs>
                    <clipPath id="clip0_113_5785">
                        <rect width="40" height="40" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        }
    />;
}


function CloudIntegration() {
    return <Card
        isHeadline
        textColor={"#F846E6"}
        title={"Cloud Integration"}
        titleIcon={
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <g clip-path="url(#clip0_113_5799)">
                    <path d="M40 28.575H36.1875V32.3875H40V28.575Z" fill="#F846E6" fill-opacity="0.8" />
                    <path d="M36.1871 32.3875H34.2871V34.2875H36.1871V32.3875Z" fill="#F846E6" fill-opacity="0.8" />
                    <path d="M36.1877 20.95V15.2375H38.1002V9.52502H32.3877V15.2375H34.2877V20.95H36.1877Z" fill="#F846E6" fill-opacity="0.8" />
                    <path d="M34.2877 34.2875H32.3877V36.2H34.2877V34.2875Z" fill="#F846E6" fill-opacity="0.8" />
                    <path d="M34.2877 20.95H32.3877V22.8625H34.2877V20.95Z" fill="#F846E6" fill-opacity="0.8" />
                    <path d="M32.3871 36.2H30.4746V40H32.3871V36.2Z" fill="#F846E6" fill-opacity="0.8" />
                    <path d="M32.3871 22.8625H30.4746V24.7625H32.3871V22.8625Z" fill="#F846E6" fill-opacity="0.8" />
                    <path d="M30.4752 24.7625H28.5752V26.675H30.4752V24.7625Z" fill="#F846E6" fill-opacity="0.8" />
                    <path d="M28.5746 26.675H26.6621V40H28.5746V26.675Z" fill="#F846E6" fill-opacity="0.8" />
                    <path d="M28.5752 20.95V5.7125H30.4752V0H24.7627V5.7125H26.6627V20.95H28.5752ZM26.6627 1.9125H28.5752V3.8125H26.6627V1.9125Z" fill="#F846E6" fill-opacity="0.8" />
                    <path d="M26.6627 20.95H24.7627V22.8625H26.6627V20.95Z" fill="#F846E6" fill-opacity="0.8" />
                    <path d="M24.7623 22.8625H22.8623V40H24.7623V22.8625Z" fill="#F846E6" fill-opacity="0.8" />
                    <path d="M17.1377 19.05H19.0502V40H20.9502V19.05H22.8627V13.3375H17.1377V19.05Z" fill="#F846E6" fill-opacity="0.8" />
                    <path d="M17.1373 22.8625H15.2373V40H17.1373V22.8625Z" fill="#F846E6" fill-opacity="0.8" />
                    <path d="M15.2379 20.95H13.3379V22.8625H15.2379V20.95Z" fill="#F846E6" fill-opacity="0.8" />
                    <path d="M13.3373 30.475H11.4248V40H13.3373V30.475Z" fill="#F846E6" fill-opacity="0.8" />
                    <path d="M13.3379 11.4375H15.2379V5.71252H9.52539V11.4375H11.4254V20.95H13.3379V11.4375Z" fill="#F846E6" fill-opacity="0.8" />
                    <path d="M11.4254 28.575H9.52539V30.4749H11.4254V28.575Z" fill="#F846E6" fill-opacity="0.8" />
                    <path d="M9.525 36.2H7.625V40H9.525V36.2Z" fill="#F846E6" fill-opacity="0.8" />
                    <path d="M9.525 26.675H7.625V28.575H9.525V26.675Z" fill="#F846E6" fill-opacity="0.8" />
                    <path d="M9.525 24.7625V19.05H3.8125V24.7625H5.7125V26.675H7.625V24.7625H9.525ZM5.7125 22.8626V20.95H7.625V22.8626H5.7125Z" fill="#F846E6" fill-opacity="0.8" />
                    <path d="M7.62539 34.2875H5.71289V36.2H7.62539V34.2875Z" fill="#F846E6" fill-opacity="0.8" />
                    <path d="M5.7125 32.3875H3.8125V34.2875H5.7125V32.3875Z" fill="#F846E6" fill-opacity="0.8" />
                    <path d="M3.8125 28.575H0V32.3875H3.8125V28.575Z" fill="#F846E6" fill-opacity="0.8" />
                </g>
                <defs>
                    <clipPath id="clip0_113_5799">
                        <rect width="40" height="40" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        }
    />;
}

function ServerSideLogic() {
    return <Card
        isHeadline
        textColor={"#F846E6"}
        title={"Servcer Side Logic"}
        titleIcon={
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <g clip-path="url(#clip0_113_5849)">
                    <path d="M38.1002 11.425H36.1877V17.15H28.5752V19.05H30.4752V20.95H32.3877V19.05H34.2877V20.95H36.1877V19.05H38.1002V20.95H36.1877V22.8625H38.1002V24.7625H40.0002V15.2375H38.1002V11.425Z" fill="#F846E6" fill-opacity="0.6" />
                    <path d="M36.1877 26.6625H34.2877V24.7625H32.3877V22.8625H30.4752V24.7625H28.5752V22.8625H26.6627V20.95H28.5752V19.05H26.6627V17.15H24.7627V22.8625H22.8627V24.7625H17.1377V26.6625H22.8627V28.575H24.7627V32.3875H26.6627V36.1875H24.7627V38.1H28.5752V36.1875H32.3877V34.2875H34.2877V32.3875H36.1877V28.575H38.1002V24.7625H36.1877V26.6625Z" fill="#F846E6" fill-opacity="0.6" />
                    <path d="M36.1871 22.8625H34.2871V24.7625H36.1871V22.8625Z" fill="#F846E6" fill-opacity="0.6" />
                    <path d="M36.1871 7.625H34.2871V11.425H36.1871V7.625Z" fill="#F846E6" fill-opacity="0.6" />
                    <path d="M34.2877 20.95H32.3877V22.8625H34.2877V20.95Z" fill="#F846E6" fill-opacity="0.6" />
                    <path d="M34.2877 5.71252H32.3877V7.62502H34.2877V5.71252Z" fill="#F846E6" fill-opacity="0.6" />
                    <path d="M30.4752 20.95H28.5752V22.8625H30.4752V20.95Z" fill="#F846E6" fill-opacity="0.6" />
                    <path d="M32.3877 3.8125H28.5752V5.7125H32.3877V3.8125Z" fill="#F846E6" fill-opacity="0.6" />
                    <path d="M28.5752 1.91248H24.7627V3.81248H28.5752V1.91248Z" fill="#F846E6" fill-opacity="0.6" />
                    <path d="M24.7623 15.2375H22.8623V17.15H24.7623V15.2375Z" fill="#F846E6" fill-opacity="0.6" />
                    <path d="M24.7623 38.1H15.2373V40H24.7623V38.1Z" fill="#F846E6" fill-opacity="0.6" />
                    <path d="M22.8627 17.15H17.1377V22.8625H22.8627V17.15ZM20.9502 20.95H19.0502V19.05H20.9502V20.95Z" fill="#F846E6" fill-opacity="0.6" />
                    <path d="M17.1373 7.625H19.0498V1.9125H24.7623V0H15.2373V1.9125H17.1373V7.625Z" fill="#F846E6" fill-opacity="0.6" />
                    <path d="M17.1373 22.8625H15.2373V24.7625H17.1373V22.8625Z" fill="#F846E6" fill-opacity="0.6" />
                    <path d="M15.2373 36.1875H11.4248V38.1H15.2373V36.1875Z" fill="#F846E6" fill-opacity="0.6" />
                    <path d="M15.2373 17.15H17.1373V15.2375H22.8623V13.3375H20.9498V7.625H19.0498V13.3375H17.1373V11.425H15.2373V15.2375H11.4248V17.15H13.3373V22.8625H15.2373V17.15Z" fill="#F846E6" fill-opacity="0.6" />
                    <path d="M15.2379 7.625H13.3379V11.425H15.2379V7.625Z" fill="#F846E6" fill-opacity="0.6" />
                    <path d="M15.2373 30.475H11.4248V32.3875H15.2373V30.475Z" fill="#F846E6" fill-opacity="0.6" />
                    <path d="M11.425 34.2875H7.625V36.1875H11.425V34.2875Z" fill="#F846E6" fill-opacity="0.6" />
                    <path d="M11.4254 28.575H9.52539V30.4749H11.4254V28.575Z" fill="#F846E6" fill-opacity="0.6" />
                    <path d="M11.425 13.3375H7.625V15.2375H11.425V13.3375Z" fill="#F846E6" fill-opacity="0.6" />
                    <path d="M11.425 7.62498H13.3375V3.81248H15.2375V1.91248H11.425V3.81248H7.625V5.71248H11.425V7.62498Z" fill="#F846E6" fill-opacity="0.6" />
                    <path d="M9.525 24.7625H7.625V28.575H9.525V24.7625Z" fill="#F846E6" fill-opacity="0.6" />
                    <path d="M7.62539 32.3875H5.71289V34.2875H7.62539V32.3875Z" fill="#F846E6" fill-opacity="0.6" />
                    <path d="M7.62539 5.71252H5.71289V7.62502H7.62539V5.71252Z" fill="#F846E6" fill-opacity="0.6" />
                    <path d="M5.7125 28.575H3.8125V32.3875H5.7125V28.575Z" fill="#F846E6" fill-opacity="0.6" />
                    <path d="M3.81289 24.7625H1.90039V28.575H3.81289V24.7625Z" fill="#F846E6" fill-opacity="0.6" />
                    <path d="M3.81289 13.3375H7.62539V11.425H5.71289V7.625H3.81289V11.425H1.90039V15.2375H3.81289V13.3375Z" fill="#F846E6" fill-opacity="0.6" />
                    <path d="M1.9 15.2375H0V24.7625H1.9V15.2375Z" fill="#F846E6" fill-opacity="0.6" />
                </g>
                <defs>
                    <clipPath id="clip0_113_5849">
                        <rect width="40" height="40" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        }
    />;
}


function ApiDevelopment() {
    return <Card
        isHeadline
        textColor={"#F846E6"}
        title={"Api Development"}
        titleIcon={
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" viewBox="0 0 40 32" fill="none">
                <path d="M0.950195 17.9127H39.0502V12.2002H0.950195V17.9127ZM2.8627 14.1002H37.1502V16.0002H2.8627V14.1002Z" fill="#F846E6" fill-opacity="0.4" />
                <path d="M37.1498 19.8127H35.2373V31.2377H37.1498V19.8127Z" fill="#F846E6" fill-opacity="0.4" />
                <path d="M37.1498 0.762695H35.2373V10.2877H37.1498V0.762695Z" fill="#F846E6" fill-opacity="0.4" />
                <path d="M33.3375 19.8127H31.4375V31.2377H33.3375V19.8127Z" fill="#F846E6" fill-opacity="0.4" />
                <path d="M33.3375 0.762695H31.4375V10.2877H33.3375V0.762695Z" fill="#F846E6" fill-opacity="0.4" />
                <path d="M29.5254 0.762695H25.7129V10.2877H29.5254V0.762695Z" fill="#F846E6" fill-opacity="0.4" />
                <path d="M29.5254 19.8127H25.7129V31.2377H29.5254V19.8127Z" fill="#F846E6" fill-opacity="0.4" />
                <path d="M23.8131 19.8127H21.9131V31.2377H23.8131V19.8127Z" fill="#F846E6" fill-opacity="0.4" />
                <path d="M23.8131 0.762695H21.9131V10.2877H23.8131V0.762695Z" fill="#F846E6" fill-opacity="0.4" />
                <path d="M16.2002 0.762695H12.3877V10.2877H16.2002V0.762695Z" fill="#F846E6" fill-opacity="0.4" />
                <path d="M16.2002 19.8127H12.3877V31.2377H16.2002V19.8127Z" fill="#F846E6" fill-opacity="0.4" />
                <path d="M10.4752 19.8127H8.5752V31.2377H10.4752V19.8127Z" fill="#F846E6" fill-opacity="0.4" />
                <path d="M10.4752 0.762695H8.5752V10.2877H10.4752V0.762695Z" fill="#F846E6" fill-opacity="0.4" />
                <path d="M6.6748 0.762695H2.8623V10.2877H6.6748V0.762695Z" fill="#F846E6" fill-opacity="0.4" />
                <path d="M6.6748 19.8127H2.8623V31.2377H6.6748V19.8127Z" fill="#F846E6" fill-opacity="0.4" />
            </svg>
        }
    />;
}




