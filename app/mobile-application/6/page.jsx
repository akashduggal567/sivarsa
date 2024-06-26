'use client';
import { useRouter } from "next/navigation";
import { GridItem } from "../../page";
import Card from "../../Card";

export default function AppMakers() {
    const router = useRouter();

    return <>
        <GridItem><MainTitle /></GridItem>
        <GridItem>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "100%" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                    <path d="M11.109 0H38.7935C40.1406 0 41.4487 0.214844 42.7177 0.664062C44.5529 1.32812 46.2124 2.5 47.462 4.02344C48.731 5.54688 49.5705 7.42188 49.8634 9.375C49.9805 10.0977 50 10.8203 50 11.543V38.5547C50 39.4141 49.961 40.293 49.7853 41.1328C49.3948 43.0664 48.4772 44.8828 47.1496 46.3477C45.8415 47.8125 44.1234 48.9062 42.2687 49.4922C41.1363 49.8438 39.9649 50 38.7739 50C38.2468 50 11.0309 50 10.6209 49.9805C8.62947 49.8828 6.65759 49.2383 4.99808 48.125C3.37762 47.0312 2.05001 45.5078 1.19097 43.75C0.449075 42.2461 0.0781263 40.5664 0.0781263 38.8867V11.1133C0.0390791 9.45312 0.390504 7.8125 1.11288 6.32813C1.95239 4.57031 3.26048 3.02734 4.88094 1.93359C6.54045 0.800781 8.49281 0.136719 10.4842 0.0390625C10.6795 0 10.8942 0 11.109 0Z" fill="url(#paint0_linear_113_7533)" />
                    <path d="M42.171 40.8984C41.9953 40.625 41.8 40.3516 41.5853 40.0977C41.0972 39.5117 40.531 39.0039 39.9062 38.5742C39.1253 38.0469 38.2077 37.7148 37.2706 37.6758C36.6068 37.6367 35.9429 37.7539 35.3182 37.9883C34.6934 38.2031 34.0882 38.5156 33.5025 38.8281C32.8192 39.1797 32.1358 39.5312 31.4135 39.8242C30.5544 40.1758 29.6563 40.4492 28.7387 40.6445C27.5868 40.8594 26.4154 40.9375 25.2635 40.918C23.1745 40.8789 21.0855 40.5664 19.0941 39.9805C17.337 39.4531 15.6579 38.7305 14.0765 37.8125C12.6903 37.0117 11.4018 36.0938 10.1913 35.0586C9.19562 34.1992 8.27801 33.2812 7.41897 32.3047C6.83326 31.6211 6.26708 30.8984 5.73994 30.1562C5.52518 29.8633 5.32994 29.5508 5.15423 29.2383L0 23.6719V11.0742C0 4.96094 4.93947 0 11.0504 0H20.9098L28.2116 7.42188C44.6895 18.6328 39.3596 30.9961 39.3596 30.9961C39.3596 30.9961 44.0452 36.2695 42.171 40.8984Z" fill="url(#paint1_linear_113_7533)" />
                    <path d="M28.2507 7.42188C44.7286 18.6328 39.3986 30.9961 39.3986 30.9961C39.3986 30.9961 44.0843 36.2891 42.1905 40.918C42.1905 40.918 40.2577 37.6758 37.0168 37.6758C33.893 37.6758 32.0578 40.918 25.7712 40.918C11.7728 40.918 5.1543 29.2188 5.1543 29.2188C17.7665 37.5195 26.3764 31.6406 26.3764 31.6406C20.6951 28.3398 8.60997 12.5586 8.60997 12.5586C19.1332 21.5234 23.6822 23.8867 23.6822 23.8867C20.9684 21.6406 13.3542 10.6641 13.3542 10.6641C19.4455 16.8359 31.5502 25.4492 31.5502 25.4492C34.9863 15.918 28.2507 7.42188 28.2507 7.42188Z" fill="white" />
                    <defs>
                        <linearGradient id="paint0_linear_113_7533" x1="29.7328" y1="-1.78418" x2="20.2826" y2="51.789" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FAAE42" />
                            <stop offset="1" stop-color="#EF3E31" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_113_7533" x1="25.5002" y1="0.807813" x2="18.5838" y2="40.0172" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#E39F3A" />
                            <stop offset="1" stop-color="#D33929" />
                        </linearGradient>
                    </defs>
                </svg>
                <div>Swift</div>
            </div>
        </GridItem>
        <GridItem>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "100%" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                    <path d="M50 0H0V50H50V0Z" fill="#F7DF1E" />
                    <path d="M33.5873 39.0625C34.5944 40.7069 35.9047 41.9156 38.2222 41.9156C40.169 41.9156 41.4127 40.9426 41.4127 39.5982C41.4127 37.9871 40.1349 37.4164 37.992 36.4791L36.8174 35.9752C33.4269 34.5307 31.1746 32.7212 31.1746 28.8958C31.1746 25.372 33.8595 22.6895 38.0555 22.6895C41.0428 22.6895 43.1904 23.7291 44.7381 26.4514L41.0793 28.8006C40.2738 27.3561 39.4047 26.7871 38.0555 26.7871C36.6793 26.7871 35.8071 27.6601 35.8071 28.8006C35.8071 30.2101 36.6801 30.7807 38.696 31.6537L39.8706 32.1569C43.8627 33.8688 46.1166 35.6141 46.1166 39.5379C46.1166 43.768 42.7936 46.0855 38.3309 46.0855C33.9674 46.0855 31.1484 44.0061 29.769 41.2807L33.5873 39.0625ZM16.9896 39.4696C17.7277 40.7791 18.3992 41.8863 20.0135 41.8863C21.5571 41.8863 22.5309 41.2823 22.5309 38.9339V22.9577H27.2293V38.9974C27.2293 43.8625 24.3769 46.0768 20.2135 46.0768C16.4515 46.0768 14.273 44.1299 13.165 41.7851L16.9896 39.4696Z" fill="black" />
                </svg>
                <div>JavaScript</div>
            </div>
        </GridItem>

        <GridItem>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "100%" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                    <path d="M50 50H0V0H50L24.4825 24.6375L50 50Z" fill="url(#paint0_radial_113_7540)" />
                    <defs>
                        <radialGradient id="paint0_radial_113_7540" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(48.3375 2.055) scale(57.2743)">
                            <stop offset="0.003" stop-color="#EF4857" />
                            <stop offset="0.469" stop-color="#D211EC" />
                            <stop offset="1" stop-color="#7F52FF" />
                        </radialGradient>
                    </defs>
                </svg>
                <div>Kotlin</div>
            </div>
        </GridItem>
        <GridItem>
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
        title={"Languages"}
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
