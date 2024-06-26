'use client';
import localFont from 'next/font/local';
import { GridItem } from './page';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import Card from './Card';


const titleFont = localFont({
    src: './fonts/PPNeueBit-Bold.otf',
    display: 'swap',
});

const subtitleFont = localFont({
    src: './fonts/PPGoshaSans-Regular.otf',
    display: 'swap',
});

export default function Navbar(props) {
    const router = useRouter();
    const pathname = usePathname();

    const prevClickHandler = () => {
        router.back();
    };

    const nextClickHandler = () => {
        if (pathname === "/services/staffing") {
            router.push("/services/staffing/1");
        } else if (pathname === "/services/staffing/1") {
            router.push("/services/staffing/2");
        } else if (pathname === "/services/staffing/2") {
            router.push("/services/staffing/3");
        } else if (pathname === "/services/staffing/3") {
            router.push("/services/staffing/4");
        } else if (pathname === "/services/staffing/4") {
            router.push("/services/staffing/5");
        } else if (pathname === "/services/staffing/5") {
            router.push("/services/staffing/6");
        } else if (pathname === "/services/staffing/6") {
            router.push("/services/staffing/7");
        } else if (pathname === "/services/staffing/7") {
            router.push("/services/staffing/8");
        }


        else if (pathname === "/services") {
            router.push("/services/2");
        } else if (pathname === "/services/2") {
            router.push("/journey");
        } else if (pathname === "/services/2/web-development") {
            router.push("/services/2/web-development/1");
        } else if (pathname === "/services/2/web-development/1") {
            router.push("/services/2/web-development/2");
        } else if (pathname === "/services/2/web-development/2") {
            router.push("/services/2/web-development/3");
        } else if (pathname === "/services/2/web-development/3") {
            router.push("/services/2/web-development/4");
        } else if (pathname === "/services/2/web-development/4") {
            router.push("/services/2/web-development/5");
        } else if (pathname === "/services/2/web-development/5") {
            router.push("/services/2/web-development/6");
        } else if (pathname === "/services/2/web-development/6") {
            router.push("/services/2/web-development/7");
        } else if (pathname === "/services/2/web-development/7") {
            router.push("/services/2/web-development/8");
        }

        else if (pathname === "/services/2/ai") {
            router.push("/services/2/ai/1");
        } else if (pathname === "/services/2/ai/1") {
            router.push("/services/2/ai/2");
        } else if (pathname === "/services/2/ai/2") {
            router.push("/services/2/ai/3");
        } else if (pathname === "/services/2/ai/3") {
            router.push("/services/2/ai/4");
        } else if (pathname === "/services/2/ai/4") {
            router.push("/services/2/ai/5");
        } else if (pathname === "/services/2/ai/5") {
            router.push("/services/2/ai/6");
        } else if (pathname === "/services/2/ai/6") {
            router.push("/services/2/ai/7");
        } else if (pathname === "/services/2/ai/7") {
            router.push("/services/2/ai/8");
        }

        else if (pathname === "/services/2/backend") {
            router.push("/services/2/backend/1");
        } else if (pathname === "/services/2/backend/1") {
            router.push("/services/2/backend/2");
        } else if (pathname === "/services/2/backend/2") {
            router.push("/services/2/backend/3");
        } else if (pathname === "/services/2/backend/3") {
            router.push("/services/2/backend/4");
        } else if (pathname === "/services/2/backend/4") {
            router.push("/services/2/backend/5");
        } else if (pathname === "/services/2/backend/5") {
            router.push("/services/2/backend/6");
        } else if (pathname === "/services/2/backend/6") {
            router.push("/services/2/backend/7");
        } else if (pathname === "/services/2/backend/7") {
            router.push("/services/2/backend/8");
        } else if (pathname === "/services/2/backend/8") {
            router.push("/services/2/backend/9");
        }


        else if (pathname === "/services/2/ui") {
            router.push("/services/2/ui/1");
        } else if (pathname === "/services/2/ui/1") {
            router.push("/services/2/ui/2");
        } else if (pathname === "/services/2/ui/2") {
            router.push("/services/2/ui/3");
        } else if (pathname === "/services/2/ui/3") {
            router.push("/services/2/ui/4");
        } else if (pathname === "/services/2/ui/4") {
            router.push("/services/2/ui/5");
        } else if (pathname === "/services/2/ui/5") {
            router.push("/services/2/ui/6");
        }

        else if (pathname === "/journey") {
            router.push("/past-work");
        } else if (pathname === "/past-work") {
            router.push("/testimonials");
        } else if (pathname === "/testimonials") {
            router.push("/founders");
        } else if (pathname === "/founders") {
            router.push("/contact-us");

        } else if (pathname === "/mobile-application/1") {
            router.push("/mobile-application/2");
        } else if (pathname === "/mobile-application/2") {
            router.push("/mobile-application/3");
        } else if (pathname === "/mobile-application/3") {
            router.push("/mobile-application/4");
        } else if (pathname === "/mobile-application/4") {
            router.push("/mobile-application/5");
        } else if (pathname === "/mobile-application/5") {
            router.push("/mobile-application/6");
        } else if (pathname === "/mobile-application/6") {
            router.push("/mobile-application/7");
        } else if (pathname === "/mobile-application/7") {
            router.push("/mobile-application/8");
        } else {
            router.push("/services");
        }
    };
    return <>
        <GridItem>
            {
                (pathname === "/")
                    ? <Card backgroundColor="#000000" />
                    : <div
                        className={`nav_bg ${titleFont.className}`}
                        onClick={prevClickHandler}
                    >
                        <img id="prev_bg" src="/prev_bg.png" />
                        <div id="prev_text">
                            Prev
                        </div>
                    </div>
            }
        </GridItem>
        <GridItem>
            <div className="brand_container">
                <div id="brand_name" className={subtitleFont.className}>
                    sivarsa
                </div>
                <img
                    id="logo"
                    src="/center_ramp.png"
                >
                </img>
                <button id="message_button">
                    Message Us
                </button>
            </div>
        </GridItem>
        <GridItem>
            {
                (pathname === "/contact-us")
                    || (pathname === "/services/staffing/8")
                    || (pathname === "/mobile-application/8")
                    || (pathname === "/services/2/web-development/8")
                    || (pathname === "/services/2/ai/8")
                    || (pathname === "/services/2/ui/6")
                    || (pathname === "/services/2/backend/9")
                    ? <Card backgroundColor="#000000" />
                    : <div
                        className={`nav_bg ${titleFont.className}`}
                        onClick={nextClickHandler}
                    >
                        <img id="next_bg" src="/next_bg.png" />
                        <div id="next_text">
                           Next
                        </div>
                    </div>
            }
        </GridItem>
    </>;
}