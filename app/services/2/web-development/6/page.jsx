'use client';
import { useRouter } from "next/navigation";
import { GridItem } from "../../../../page";
import Card from "../../../../Card";

export default function WebWonderLanguages() {
    const router = useRouter();

    return <>
        <GridItem><MainTitle /></GridItem>
        <GridItem>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "100%" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <g clip-path="url(#clip0_113_7783)">
                        <path d="M47.5657 6.61624C47.5657 3.15447 44.7594 0.348145 41.2976 0.348145C38.1367 0.348145 35.5237 2.68824 35.0932 5.73028L35.0297 5.6968C29.9036 3.3848 25.5856 7.47987 25.5856 7.47987L14.1641 18.9574L18.677 23.3035L27.8701 14.2717C32.1629 9.97866 34.5004 12.8843 34.5004 12.8843C37.7321 15.6144 34.6117 18.846 34.6117 18.846L39.2362 23.3035C43.0126 19.2248 43.2316 15.6652 42.0837 12.8335C45.1743 12.4466 47.5657 9.81159 47.5657 6.61624Z" fill="#F9AE41" />
                        <path d="M42.1425 35.4432C42.1639 35.4032 42.176 35.3799 42.176 35.3799C44.4882 30.2536 40.393 25.9356 40.393 25.9356L28.9152 14.5137L24.5693 19.027L33.6012 28.2199C37.894 32.5129 34.9883 34.8506 34.9883 34.8506C32.2585 38.0822 29.0268 34.9619 29.0268 34.9619L24.5693 39.5862C28.6478 43.3626 32.2077 43.5816 35.0391 42.4337C35.4261 45.5243 38.0612 47.9159 41.2566 47.9159C44.7184 47.9159 47.5245 45.1096 47.5245 41.6478C47.5245 38.4869 45.1846 35.8739 42.1425 35.4432Z" fill="#EE4035" />
                        <path d="M29.0122 24.7515L19.819 33.7831C15.526 38.0763 13.1885 35.1708 13.1885 35.1708C9.95691 32.4406 13.0771 29.2091 13.0771 29.2091L8.45291 24.7515C4.67654 28.83 4.45737 32.3896 5.60509 35.2212C2.51449 35.6084 0.123047 38.2432 0.123047 41.4387C0.123047 44.9005 2.92937 47.7066 6.39132 47.7066C9.55225 47.7068 12.1653 45.3669 12.5958 42.3249C12.636 42.3463 12.6592 42.3582 12.6592 42.3582C17.7856 44.6707 22.1033 40.5751 22.1033 40.5751L33.5251 29.0973L29.0122 24.7515Z" fill="#4F91CD" />
                        <path d="M14.0886 19.8352C9.79555 15.5421 12.7009 13.2045 12.7009 13.2045C15.4313 9.97283 18.6627 13.0932 18.6627 13.0932L23.1202 8.46902C19.0417 4.69265 15.4821 4.47367 12.6504 5.62139C12.2635 2.5306 9.62867 0.13916 6.43276 0.13916C2.97155 0.13916 0.165411 2.94549 0.165039 6.40725C0.165039 9.56837 2.50495 12.1814 5.54718 12.6119C5.52578 12.6521 5.51388 12.6755 5.51388 12.6755C3.20132 17.8015 7.29676 22.1193 7.29676 22.1193L18.7747 33.5412L23.1206 29.0283L14.0886 19.8352Z" fill="#7AC043" />
                    </g>
                    <defs>
                        <clipPath id="clip0_113_7783">
                            <rect width="47.6352" height="48" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <div>Joomla</div>
            </div>
        </GridItem>
        <GridItem />

        <GridItem>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "100%" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="50" viewBox="0 0 38 50" fill="none">
                    <g clip-path="url(#clip0_113_7778)">
                        <path d="M26.8516 10.5394C23.3382 7.11639 20.0052 3.78338 19.014 0C18.0229 3.78338 14.6899 7.11714 11.1765 10.5402C5.95163 15.765 0.00636502 21.7103 0.00636502 30.6286C-0.264011 41.0784 8.11388 49.8166 18.5637 49.997C29.0134 50.1774 37.7517 41.8895 37.9321 31.4397V30.629C38.0217 21.7103 32.0764 15.765 26.8516 10.5398V10.5394ZM9.73539 32.3397C9.19501 33.0605 8.65464 33.8712 8.29389 34.682C8.20351 34.7723 8.11351 34.9523 7.93389 34.9523L7.84388 34.9516C7.39351 34.9516 6.94276 34.1408 6.94276 34.1408C6.85238 33.9605 6.67238 33.6908 6.58276 33.5105L6.49238 33.3308C5.32088 30.8078 6.31201 27.2952 6.31201 27.2952C6.76201 25.5841 7.57313 23.8718 8.56426 22.4307C9.19464 21.5296 9.91576 20.6292 10.6361 19.7281L11.5373 20.6292L15.7714 24.9533C15.9518 25.1337 15.9518 25.4033 15.7714 25.5837L11.3569 30.5386L9.73501 32.3393L9.73539 32.3397ZM19.1944 44.7714C15.591 44.7714 12.6184 41.7984 12.708 38.1953C12.708 36.5735 13.3384 35.0427 14.3299 33.8712C15.6814 32.2493 17.3929 30.6282 19.2848 28.4663C21.4467 30.8086 22.8882 32.3397 24.2397 34.142C24.3301 34.2323 24.4201 34.4123 24.5101 34.5923C25.2308 35.6731 25.6808 36.9346 25.6808 38.2861C25.7704 41.8891 22.7982 44.7721 19.1944 44.7721V44.7714ZM31.5361 34.3212C31.4457 34.592 31.1761 34.7716 30.9057 34.8616L30.8153 34.8623C30.5449 34.772 30.3653 34.592 30.1849 34.412C29.0142 32.7008 27.7531 31.079 26.3116 29.6375L24.6004 27.8359L18.8348 21.8907C17.664 20.8099 16.4925 19.5484 15.4114 18.3773C15.4114 18.2873 15.3214 18.2873 15.3214 18.2873C15.141 18.0169 14.9614 17.7469 14.871 17.3862V17.2058C14.6907 16.2147 15.0514 15.2239 15.7722 14.5032C16.8529 13.4224 18.0244 12.2509 19.1052 11.0802C20.2759 12.3413 21.537 13.6024 22.7989 14.8635C25.3212 17.2058 27.5734 19.8184 29.6453 22.6111C31.3564 25.0429 32.2576 27.8359 32.2576 30.809C32.0768 31.8897 31.8964 33.1508 31.5364 34.3216L31.5361 34.3212Z" fill="#009CDE" />
                    </g>
                    <defs>
                        <clipPath id="clip0_113_7778">
                            <rect width="37.9332" height="50" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <div>Drupal</div>
            </div>
        </GridItem>
        <GridItem />
        <GridItem />


        <GridItem><CommonTitle /></GridItem>
        <GridItem />
        <GridItem>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "100%" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                    <g clip-path="url(#clip0_113_7768)">
                        <path d="M3.55371 24.9994C3.55371 33.4884 8.48707 40.8246 15.6408 44.3011L5.41051 16.2712C4.22052 18.9385 3.55371 21.8902 3.55371 24.9994Z" fill="#3456EA" />
                        <path d="M39.4782 23.9172C39.4782 21.2667 38.5262 19.4311 37.7096 18.0024C36.6224 16.2358 35.6035 14.7398 35.6035 12.9732C35.6035 11.0017 37.0987 9.16653 39.2048 9.16653C39.2999 9.16653 39.3901 9.17837 39.4827 9.18367C35.6671 5.688 30.5836 3.55371 25.0001 3.55371C17.5077 3.55371 10.9158 7.39789 7.08105 13.2205C7.58423 13.2356 8.05842 13.2462 8.4612 13.2462C10.7045 13.2462 14.1769 12.974 14.1769 12.974C15.333 12.9058 15.4693 14.6039 14.3144 14.7406C14.3144 14.7406 13.1526 14.8773 11.8597 14.945L19.6697 38.1754L24.3631 24.0992L21.0217 14.9442C19.8668 14.8765 18.7727 14.7398 18.7727 14.7398C17.617 14.672 17.7525 12.905 18.9082 12.9732C18.9082 12.9732 22.45 13.2454 24.5574 13.2454C26.8002 13.2454 30.273 12.9732 30.273 12.9732C31.43 12.905 31.5658 14.6031 30.4106 14.7398C30.4106 14.7398 29.2463 14.8765 27.9559 14.9442L35.7063 37.9987L37.8455 30.8502C38.7727 27.8838 39.4782 25.7532 39.4782 23.9172Z" fill="#3456EA" />
                        <path d="M25.3761 26.8752L18.9414 45.5734C20.8627 46.1382 22.8945 46.4471 24.9999 46.4471C27.4973 46.4471 29.8924 46.0153 32.1218 45.2314C32.0642 45.1396 32.012 45.042 31.9692 44.9359L25.3761 26.8752Z" fill="#3456EA" />
                        <path d="M43.8185 14.71C43.9107 15.3931 43.963 16.1264 43.963 16.9153C43.963 19.0916 43.5565 21.5381 42.3323 24.5971L35.7812 43.5376C42.1572 39.8195 46.4458 32.9118 46.4458 24.9999C46.4462 21.2712 45.4937 17.7649 43.8185 14.71Z" fill="#3456EA" />
                        <path d="M25.0002 0C11.2154 0 0 11.2146 0 24.9994C0 38.7858 11.2154 50 25.0002 50C38.7846 50 50.0016 38.7858 50.0016 24.9994C50.0012 11.2146 38.7846 0 25.0002 0ZM25.0002 48.8541C11.8476 48.8541 1.14632 38.1528 1.14632 24.9994C1.14632 11.8468 11.8472 1.14632 25.0002 1.14632C38.1524 1.14632 48.8529 11.8468 48.8529 24.9994C48.8529 38.1528 38.1524 48.8541 25.0002 48.8541Z" fill="#3456EA" />
                    </g>
                    <defs>
                        <clipPath id="clip0_113_7768">
                            <rect width="49.9988" height="50" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <div>WordPress</div>
            </div>
        </GridItem>
    </>;
}


function MainTitle() {
    return <Card
        isHeadline
        textColor={"#C7DFB8"}
        title={"CMS"}
    />;
}

function CommonTitle() {
    return <Card
        isHeadline
        isHeadlineNumberOnly
        backgroundColor={"linear-gradient(180deg, #31B10C 0%, #171717 100%)"}
        textColor={"#C7DFB8"}
        title={" Web Wonder"}
    />;
}