'use client';
import Card from "../../Card";
import { GridItem } from "../../page";

export default function AppMakers() {
    return <>
        <GridItem><MainTitle /> </GridItem>
        <GridItem>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "100%" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="51" height="50" viewBox="0 0 51 50" fill="none">
                    <path d="M25.6532 29.4085C28.0878 29.4085 30.0613 27.4349 30.0613 25.0004C30.0613 22.5659 28.0878 20.5923 25.6532 20.5923C23.2187 20.5923 21.2451 22.5659 21.2451 25.0004C21.2451 27.4349 23.2187 29.4085 25.6532 29.4085Z" fill="#61DAFB" />
                    <path d="M25.6533 34.0313C38.7167 34.0313 49.3066 29.9878 49.3066 25C49.3066 20.0122 38.7167 15.9688 25.6533 15.9688C12.5899 15.9688 2 20.0122 2 25C2 29.9878 12.5899 34.0313 25.6533 34.0313Z" stroke="#61DAFB" stroke-width="2.5" />
                    <path d="M17.8315 29.5156C24.3632 40.8288 33.1599 47.9783 37.4795 45.4844C41.7991 42.9904 40.0058 31.7976 33.4741 20.4844C26.9424 9.17116 18.1457 2.02172 13.8262 4.51563C9.50657 7.00955 11.2998 18.2024 17.8315 29.5156Z" stroke="#61DAFB" stroke-width="2.5" />
                    <path d="M17.8325 20.4844C11.3008 31.7976 9.50756 42.9904 13.8271 45.4844C18.1467 47.9783 26.9434 40.8288 33.4751 29.5156C40.0068 18.2024 41.8 7.00953 37.4805 4.51562C33.1609 2.0217 24.3642 9.17115 17.8325 20.4844Z" stroke="#61DAFB" stroke-width="2.5" />
                </svg>
                <div>React Native</div>
            </div>
        </GridItem>
        <GridItem />

        <GridItem>
        </GridItem>
        <GridItem>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "100%" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="41" height="50" viewBox="0 0 41 50" fill="none">
                    <path d="M7.69946 32.6974L0 24.998L25 0H40.3969L7.69946 32.6974ZM40.3969 23.0681H25L19.2325 28.8356L26.9319 36.535" fill="#42A5F5" fill-opacity="0.8" />
                    <path d="M19.2324 44.2326L25 50.0001H40.3969L26.9319 36.5352" fill="#0D47A1" />
                    <path d="M11.5518 36.5392L19.2391 28.8499L26.9264 36.5372L19.2391 44.2265L11.5518 36.5392Z" fill="#42A5F5" />
                    <path d="M19.2383 44.2264L26.9256 36.5391L27.9987 37.6121L20.3114 45.2995L19.2383 44.2264Z" fill="url(#paint0_linear_113_6967)" />
                    <path d="M19.2324 44.2324L30.6563 40.2857L26.9319 36.533" fill="url(#paint1_linear_113_6967)" />
                    <defs>
                        <linearGradient id="paint0_linear_113_6967" x1="23.0834" y1="40.3813" x2="24.1566" y2="41.4544" gradientUnits="userSpaceOnUse">
                            <stop offset="0.2" stop-opacity="0.15" />
                            <stop offset="0.85" stop-color="#616161" stop-opacity="0.01" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_113_6967" x1="19.2351" y1="40.3829" x2="30.6589" y2="40.3829" gradientUnits="userSpaceOnUse">
                            <stop offset="0.2" stop-opacity="0.55" />
                            <stop offset="0.85" stop-color="#616161" stop-opacity="0.01" />
                        </linearGradient>
                    </defs>
                </svg>
                <div>Flutter</div>
            </div>
        </GridItem>
        <GridItem>
        </GridItem>



        <GridItem>
        </GridItem>
        <GridItem />
        <GridItem><CommonTitle /></GridItem>
    </>;
}


function MainTitle() {
    return <Card
        isHeadline
        isHeadlineNumberOnly
        textColor={"#83C7E6"}
        title={"Frameworks"}
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
