import type { PropsWithChildren } from "react";
import { SwiperSlide } from "swiper/react";

const SectionItems = (props: PropsWithChildren<unknown>) => {
  const { children } = props;
  return <SwiperSlide>{children}</SwiperSlide>;
};

SectionItems.displayName = "SwiperSlide";

export default SectionItems;
