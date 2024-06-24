
import WidgetItem from "../WidgetItem/WidgetItem";

import style from "./WidgetSection.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

import { useRef } from "react";

import { WidgetItem as WidgetItemType } from "../../types/WidgetItem";

interface WidgetsSectionProps {
    title: string;
    widgets: WidgetItemType[];
}

const WidgetsSection = ({ title, widgets }: WidgetsSectionProps) => {
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    return (
        <section className={style.container}>
            <div className={style.header_section}>
                <h3>{title}</h3>
            </div>
            <div className={style.cards_section}>
                <div className={style.swiper_arrows_section}>
                    <div
                        role="button"
                        className="banner-swiper-arrows position-absolute"
                        style={{
                            top: "40%",
                            zIndex: 4,
                            transform: "translate(-50%, -50%)",
                        }}
                        ref={navigationPrevRef}
                    >
                        <i className="bi-chevron-left text-white fs-5"></i>
                    </div>
                    <div
                        role="button"
                        className="banner-swiper-arrows position-absolute"
                        style={{
                            top: "40%",
                            left: "100%",
                            zIndex: 4,
                            transform: "translate(-50%, -50%)",
                        }}
                        ref={navigationNextRef}
                    >
                        <i className="bi-chevron-right text-white fs-5"></i>
                    </div>
                </div>
                <Swiper
                    spaceBetween={40}
                    slidesPerView={4}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    modules={[Navigation]}
                    navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                        const navigation = swiper.params.navigation as {
                            prevEl: Element | null;
                            nextEl: Element | null;
                        };
                        navigation.prevEl = navigationPrevRef.current;
                        navigation.nextEl = navigationNextRef.current;
                    }}
                >
                    {widgets.map((widget, index) => (
                        <SwiperSlide key={widget._id}>
                            <WidgetItem {...widget} index={index} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default WidgetsSection;