import React from "react";
import Screen0 from "./Screen0"

const Carousel = ({ screen , title }: any) => {
    let sc;
    if (screen == 0)
        sc = <Screen0 title={title} />
    return (
        <div>
            {sc}
        </div>
    );
};

export default Carousel;