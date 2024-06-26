'use client';
import { useRouter } from "next/navigation";
import { GridItem } from "../../../page";
import Card from "../../../Card";
import { TalentOnTap } from "../page";

export default function StaffingService() {
    const router = useRouter();

    return <>
        <GridItem><MainTitle /></GridItem>
        <GridItem><TechExpert /></GridItem>
        <GridItem><FlexibleStaff /></GridItem>

        <GridItem><DomainSpecialist /></GridItem>
        <GridItem><GlobalReact /></GridItem>
        <GridItem></GridItem>
        <GridItem></GridItem>
        <GridItem></GridItem>
        <GridItem><TalentOnTap /></GridItem>
    </>;
}

function MainTitle() {
    return <Card
        isHeadline
        isHeadlineNumberOnly
        textColor={"#CAAE57"}
        title={"Skills"}
    />;
}

function GlobalReact() {
    return <Card
        isHeadline
        textColor={"#F5BB0B"}
        title={"Global Reach"}
        titleIcon={
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <g clip-path="url(#clip0_113_9810)">
                    <path d="M39.9996 36.1875H38.0996V40H39.9996V36.1875Z" fill="#F5BB0B" fill-opacity="0.4" />
                    <path d="M39.9996 13.3375H38.0996V15.2375H39.9996V13.3375Z" fill="#F5BB0B" fill-opacity="0.4" />
                    <path d="M38.1002 32.3875H36.2002V36.1875H38.1002V32.3875Z" fill="#F5BB0B" fill-opacity="0.4" />
                    <path d="M38.1002 11.425H36.2002V13.3375H38.1002V11.425Z" fill="#F5BB0B" fill-opacity="0.4" />
                    <path d="M36.1996 28.575H34.2871V32.3875H36.1996V28.575Z" fill="#F5BB0B" fill-opacity="0.4" />
                    <path d="M38.1002 15.2375H32.3877V17.15H38.1002V15.2375Z" fill="#F5BB0B" fill-opacity="0.4" />
                    <path d="M36.1996 9.52502H34.2871V11.425H36.1996V9.52502Z" fill="#F5BB0B" fill-opacity="0.4" />
                    <path d="M32.3879 24.7625V20.95H30.4879V17.15H28.5754V13.3375H26.6754V11.425H24.7629V7.625H32.3879V5.7125H30.4879V3.8125H28.5754V5.7125H24.7629V1.9125H26.6754V0H22.8629V11.425H20.9629V13.3375H19.0504V17.15H17.1504V20.95H15.2379V24.7625H13.3379V28.575H17.1504V30.475H22.8629V28.575H28.5754V26.675H32.3879V28.575H34.2879V24.7625H32.3879ZM20.9629 28.575H19.0504V26.675H20.9629V28.575ZM26.6754 26.675H24.7629V24.7625H22.8629V22.8625H24.7629V24.7625H26.6754V26.675ZM26.6754 19.05H24.7629V15.2375H22.8629V13.3375H24.7629V15.2375H26.6754V19.05ZM30.4879 24.7625H28.5754V22.8625H30.4879V24.7625Z" fill="#F5BB0B" fill-opacity="0.4" />
                    <path d="M34.2877 11.425H32.3877V13.3375H34.2877V11.425Z" fill="#F5BB0B" fill-opacity="0.4" />
                    <path d="M32.3873 13.3375H30.4873V15.2375H32.3873V13.3375Z" fill="#F5BB0B" fill-opacity="0.4" />
                    <path d="M28.5748 1.91248H26.6748V3.81248H28.5748V1.91248Z" fill="#F5BB0B" fill-opacity="0.4" />
                    <path d="M13.3375 28.575H11.4375V32.3875H13.3375V28.575Z" fill="#F5BB0B" fill-opacity="0.4" />
                    <path d="M13.3375 7.625H11.4375V9.525H13.3375V7.625Z" fill="#F5BB0B" fill-opacity="0.4" />
                    <path d="M11.4379 32.3875H9.52539V36.1875H11.4379V32.3875Z" fill="#F5BB0B" fill-opacity="0.4" />
                    <path d="M11.4379 5.71252H9.52539V7.62502H11.4379V5.71252Z" fill="#F5BB0B" fill-opacity="0.4" />
                    <path d="M9.525 36.1875H7.625V40H9.525V36.1875Z" fill="#F5BB0B" fill-opacity="0.4" />
                    <path d="M9.525 30.475H7.625V32.3875H9.525V30.475Z" fill="#F5BB0B" fill-opacity="0.4" />
                    <path d="M11.4371 9.52502H1.91211V11.425H11.4371V9.52502Z" fill="#F5BB0B" fill-opacity="0.4" />
                    <path d="M9.52461 3.8125H5.72461V5.7125H9.52461V3.8125Z" fill="#F5BB0B" fill-opacity="0.4" />
                    <path d="M7.62461 28.575H5.72461V30.475H7.62461V28.575Z" fill="#F5BB0B" fill-opacity="0.4" />
                    <path d="M5.725 30.475H3.8125V32.3875H5.725V30.475Z" fill="#F5BB0B" fill-opacity="0.4" />
                    <path d="M5.72461 5.71252H1.91211V7.62502H5.72461V5.71252Z" fill="#F5BB0B" fill-opacity="0.4" />
                    <path d="M3.81211 32.3875H1.91211V36.1875H3.81211V32.3875Z" fill="#F5BB0B" fill-opacity="0.4" />
                    <path d="M1.9125 36.1875H0V40H1.9125V36.1875Z" fill="#F5BB0B" fill-opacity="0.4" />
                    <path d="M1.9125 7.625H0V9.525H1.9125V7.625Z" fill="#F5BB0B" fill-opacity="0.4" />
                </g>
                <defs>
                    <clipPath id="clip0_113_9810">
                        <rect width="40" height="40" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        }
    />;
}


function DomainSpecialist() {
    return <Card
        isHeadline
        textColor={"#F5BB0B"}
        title={"Domain Specialists"}
        titleIcon={
            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="40" viewBox="0 0 38 40" fill="none">
                <path d="M37.0938 15.2375H35.1937V19.05H33.2812V17.15H31.3813V15.2375H35.1937V13.3375H31.3813V11.425H29.4813V19.05H27.5688V20.95H10.4313V19.05H8.51875V11.425H6.625V13.3375H2.80625V15.2375H6.625V17.15H4.71875V19.05H2.80625V15.2375H0.90625V20.95H2.80625V22.8625H6.625V36.1875H8.525V38.1H10.4375V40H27.575V38.1H29.4875V36.1875H31.3875V22.8625H35.2V20.95H37.1L37.0938 15.2375ZM29.4813 26.675H8.51875V24.7625H29.4813V26.675Z" fill="#F5BB0B" fill-opacity="0.6" />
                <path d="M29.4809 9.52502H27.5684V11.425H29.4809V9.52502Z" fill="#F5BB0B" fill-opacity="0.6" />
                <path d="M29.4809 1.91248H27.5684V5.71248H29.4809V1.91248Z" fill="#F5BB0B" fill-opacity="0.6" />
                <path d="M27.5689 5.71252H25.6689V9.52502H27.5689V5.71252Z" fill="#F5BB0B" fill-opacity="0.6" />
                <path d="M27.5684 0H23.7559V1.9125H27.5684V0Z" fill="#F5BB0B" fill-opacity="0.6" />
                <path d="M25.6684 13.3375H23.7559V15.2375H25.6684V13.3375Z" fill="#F5BB0B" fill-opacity="0.6" />
                <path d="M23.7564 1.91248H21.8564V5.71248H23.7564V1.91248Z" fill="#F5BB0B" fill-opacity="0.6" />
                <path d="M21.8561 5.71252H19.9561V7.62502H21.8561V5.71252Z" fill="#F5BB0B" fill-opacity="0.6" />
                <path d="M18.0436 19.05H19.9561V17.15H21.8561V15.2375H16.1436V17.15H18.0436V19.05Z" fill="#F5BB0B" fill-opacity="0.6" />
                <path d="M19.9564 7.625H18.0439V9.525H19.9564V7.625Z" fill="#F5BB0B" fill-opacity="0.6" />
                <path d="M18.0436 5.71252H16.1436V7.62502H18.0436V5.71252Z" fill="#F5BB0B" fill-opacity="0.6" />
                <path d="M16.1439 1.91248H14.2314V5.71248H16.1439V1.91248Z" fill="#F5BB0B" fill-opacity="0.6" />
                <path d="M14.2311 13.3375H12.3311V15.2375H14.2311V13.3375Z" fill="#F5BB0B" fill-opacity="0.6" />
                <path d="M14.2316 0H10.4316V1.9125H14.2316V0Z" fill="#F5BB0B" fill-opacity="0.6" />
                <path d="M12.3316 5.71252H10.4316V9.52502H12.3316V5.71252Z" fill="#F5BB0B" fill-opacity="0.6" />
                <path d="M10.4311 9.52502H8.51855V11.425H10.4311V9.52502Z" fill="#F5BB0B" fill-opacity="0.6" />
                <path d="M10.4311 1.91248H8.51855V5.71248H10.4311V1.91248Z" fill="#F5BB0B" fill-opacity="0.6" />
            </svg>
        }
    />;
}

function FlexibleStaff() {
    return <Card
        isHeadline
        textColor={"#F5BB0B"}
        title={"Flexible Staffing"}
        titleIcon={
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <g clip-path="url(#clip0_113_9780)">
                    <path d="M39.9996 1.91248H38.0996V20.95H39.9996V1.91248Z" fill="#F5BB0B" fill-opacity="0.8" />
                    <path d="M38.1004 0H17.1504V1.9125H38.1004V0Z" fill="#F5BB0B" fill-opacity="0.8" />
                    <path d="M38.0998 20.95H30.4873V22.8625H38.0998V20.95Z" fill="#F5BB0B" fill-opacity="0.8" />
                    <path d="M32.3873 13.3375H30.4873V17.15H32.3873V13.3375Z" fill="#F5BB0B" fill-opacity="0.8" />
                    <path d="M32.3873 7.625H30.4873V9.525H32.3873V7.625Z" fill="#F5BB0B" fill-opacity="0.8" />
                    <path d="M30.4877 22.8625H28.5752V24.7625H30.4877V22.8625Z" fill="#F5BB0B" fill-opacity="0.8" />
                    <path d="M28.5748 24.7625H26.6748V26.675H28.5748V24.7625Z" fill="#F5BB0B" fill-opacity="0.8" />
                    <path d="M26.6752 19.05V20.95H28.5752V19.05H30.4877V17.15H28.5752V13.3375H30.4877V11.425H28.5752V7.625H30.4877V5.7125H28.5752V3.8125H26.6752V5.7125H24.7627V7.625H26.6752V11.425H24.7627V13.3375H26.6752V17.15H24.7627V19.05H26.6752Z" fill="#F5BB0B" fill-opacity="0.8" />
                    <path d="M22.8629 22.8625H20.9629V28.575H26.6754V26.675H22.8629V22.8625Z" fill="#F5BB0B" fill-opacity="0.8" />
                    <path d="M24.7623 15.2375H22.8623V17.15H24.7623V15.2375Z" fill="#F5BB0B" fill-opacity="0.8" />
                    <path d="M24.7623 7.625H22.8623V11.425H24.7623V7.625Z" fill="#F5BB0B" fill-opacity="0.8" />
                    <path d="M22.8623 38.1H19.0498V40H22.8623V38.1Z" fill="#F5BB0B" fill-opacity="0.8" />
                    <path d="M19.0498 36.1875H15.2373V38.1H19.0498V36.1875Z" fill="#F5BB0B" fill-opacity="0.8" />
                    <path d="M17.1498 32.3875H15.2373V34.2875H17.1498V32.3875Z" fill="#F5BB0B" fill-opacity="0.8" />
                    <path d="M17.1498 1.91248H15.2373V13.3375H17.1498V1.91248Z" fill="#F5BB0B" fill-opacity="0.8" />
                    <path d="M5.72461 34.2875V36.1875H9.52461V40H11.4371V36.1875H15.2371V34.2875H5.72461Z" fill="#F5BB0B" fill-opacity="0.8" />
                    <path d="M15.2379 28.575H13.3379V30.475H15.2379V28.575Z" fill="#F5BB0B" fill-opacity="0.8" />
                    <path d="M15.2379 24.7625H13.3379V26.675H15.2379V24.7625Z" fill="#F5BB0B" fill-opacity="0.8" />
                    <path d="M13.3379 30.475H9.52539V32.3875H13.3379V30.475Z" fill="#F5BB0B" fill-opacity="0.8" />
                    <path d="M7.62461 24.7625H5.72461V26.675H7.62461V24.7625Z" fill="#F5BB0B" fill-opacity="0.8" />
                    <path d="M5.725 32.3875H3.8125V34.2875H5.725V32.3875Z" fill="#F5BB0B" fill-opacity="0.8" />
                    <path d="M5.72461 36.1875H1.91211V38.1H5.72461V36.1875Z" fill="#F5BB0B" fill-opacity="0.8" />
                    <path d="M3.81211 22.8625H5.72461V20.95H15.2371V22.8625H17.1496V32.3875H19.0496V19.05H17.1496V17.15H15.2371V15.2375H5.72461V17.15H3.81211V19.05H1.91211V32.3875H3.81211V22.8625Z" fill="#F5BB0B" fill-opacity="0.8" />
                    <path d="M1.9125 38.1H0V40H1.9125V38.1Z" fill="#F5BB0B" fill-opacity="0.8" />
                </g>
                <defs>
                    <clipPath id="clip0_113_9780">
                        <rect width="40" height="40" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        }
    />;
}

function TechExpert() {
    return <Card
        isHeadline
        textColor={"#F5BB0B"}
        title={"Technical Expertise"}
        titleIcon={
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <g clip-path="url(#clip0_113_9743)">
                    <path d="M40.0004 26.6625H38.0879V28.575H40.0004V26.6625Z" fill="#F5BB0B" />
                    <path d="M38.0875 17.15H30.475V9.52502H32.375V7.62502H30.475V5.71252H9.525V7.62502H7.6125V9.52502H5.7125V11.425H3.8125V13.3375H1.9V15.2375H0V20.95H1.9V19.05H11.425V22.8625H13.325V26.6625H15.2375V30.475H17.1375V34.2875H19.05V19.05H26.6625V22.8625H24.7625V26.6625H22.85V30.475H20.95V34.2875H19.05V36.1875H17.1375V38.1H19.05V40H20.95V38.1H22.85V36.1875H24.7625V34.2875H26.6625V32.3875H28.575V30.475H30.475V28.575H32.375V26.6625H34.2875V24.7625H36.1875V22.8625H38.0875V20.95H40V15.2375H38.0875V17.15ZM26.6625 17.15H13.325V15.2375H11.425V7.62502H19.05V9.52502H20.95V11.425H22.85V13.3375H24.7625V15.2375H26.6625V17.15Z" fill="#F5BB0B" />
                    <path d="M38.0875 32.3875H36.1875V34.2875H38.0875V32.3875Z" fill="#F5BB0B" />
                    <path d="M38.0875 13.3375H36.1875V15.2375H38.0875V13.3375Z" fill="#F5BB0B" />
                    <path d="M36.1871 34.2875H34.2871V36.1875H36.1871V34.2875Z" fill="#F5BB0B" />
                    <path d="M36.1871 30.475H34.2871V32.3875H36.1871V30.475Z" fill="#F5BB0B" />
                    <path d="M36.1871 11.425H34.2871V13.3375H36.1871V11.425Z" fill="#F5BB0B" />
                    <path d="M34.2875 3.81252H32.375V5.71252H34.2875V7.62502H36.1875V5.71252H38.0875V3.81252H36.1875V1.90002H34.2875V3.81252Z" fill="#F5BB0B" />
                    <path d="M34.2875 32.3875H32.375V34.2875H34.2875V32.3875Z" fill="#F5BB0B" />
                    <path d="M34.2875 9.52502H32.375V11.425H34.2875V9.52502Z" fill="#F5BB0B" />
                    <path d="M30.4752 38.1H28.5752V40H30.4752V38.1Z" fill="#F5BB0B" />
                    <path d="M30.4752 0H28.5752V1.9H30.4752V0Z" fill="#F5BB0B" />
                    <path d="M19.0502 9.52502H17.1377V11.425H19.0502V9.52502Z" fill="#F5BB0B" />
                    <path d="M19.0502 1.90002H17.1377V3.81252H19.0502V1.90002Z" fill="#F5BB0B" />
                    <path d="M17.1373 34.2875H15.2373V36.1875H17.1373V34.2875Z" fill="#F5BB0B" />
                    <path d="M17.1373 11.425H15.2373V13.3375H17.1373V11.425Z" fill="#F5BB0B" />
                    <path d="M15.2377 32.3875H13.3252V34.2875H15.2377V32.3875Z" fill="#F5BB0B" />
                    <path d="M15.2377 13.3375H13.3252V15.2375H15.2377V13.3375Z" fill="#F5BB0B" />
                    <path d="M13.3248 36.1875H11.4248V38.1H13.3248V36.1875Z" fill="#F5BB0B" />
                    <path d="M13.3248 30.475H11.4248V32.3875H13.3248V30.475Z" fill="#F5BB0B" />
                    <path d="M11.4254 28.575H9.52539V30.475H11.4254V28.575Z" fill="#F5BB0B" />
                    <path d="M9.5248 26.6625H7.6123V28.575H9.5248V26.6625Z" fill="#F5BB0B" />
                    <path d="M7.61289 24.7625H5.71289V26.6625H7.61289V24.7625Z" fill="#F5BB0B" />
                    <path d="M7.61289 3.8125H5.71289V5.7125H7.61289V3.8125Z" fill="#F5BB0B" />
                    <path d="M3.81289 30.475V32.3875H1.90039V34.2875H3.81289V36.1875H5.71289V34.2875H7.61289V32.3875H5.71289V30.475H3.81289Z" fill="#F5BB0B" />
                    <path d="M5.7125 22.8625H3.8125V24.7625H5.7125V22.8625Z" fill="#F5BB0B" />
                    <path d="M5.7125 5.71252H3.8125V7.62502H5.7125V5.71252Z" fill="#F5BB0B" />
                    <path d="M5.7125 1.90002H3.8125V3.81252H5.7125V1.90002Z" fill="#F5BB0B" />
                    <path d="M3.81289 20.95H1.90039V22.8625H3.81289V20.95Z" fill="#F5BB0B" />
                    <path d="M3.81289 3.8125H1.90039V5.7125H3.81289V3.8125Z" fill="#F5BB0B" />
                    <path d="M1.9 26.6625H0V28.575H1.9V26.6625Z" fill="#F5BB0B" />
                </g>
                <defs>
                    <clipPath id="clip0_113_9743">
                        <rect width="40" height="40" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        }
    />;
}