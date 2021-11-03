import React from "react";
import Slider from "react-slick";
import pattern from "../../../../assets/bg_pattern_2.jpg";
import homepage_content from "../../static/content/content";
import coins from "./static/coins.png";

const What = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="min-h-screen" id="about_section">
            <div className="background-top relative" style={{ zIndex: -99 }}>
                <div className="absolute right-0 -top-40">
                    <img
                        src={pattern}
                        alt=""
                        style={{ transform: "scaleX(-1)" }}
                    />
                </div>
            </div>

            <div className="container px-8 mx-auto py-32 space-y-20">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl font-bold text-primary">
                        What is{" "}
                        <span className="uppercase text-yellow-500">
                            $Luchow
                        </span>{" "}
                        Token
                    </h2>
                    <p className="text-lg text-gray-600">
                        The revolutionary LunaChow burn structure at launch -
                        Burn now, not later!
                    </p>
                </div>

                <div className="">
                    {/* <div className="hidden md:block relative -right-24">
                        <img src={coins} alt="" className="h-64"/>
                    </div> */}

                    <Slider {...settings}>
                        {homepage_content.what_section_slider.map((what) => (
                            <div className="p-2">
                                <div className="px-8 py-12 bg-primary rounded-8xl space-y-4" style={{height: '280px'}}>
                                    <h3 className="font-medium text-primary-darker text-center text-lg">
                                        {what.tite}
                                    </h3>
                                    <p className="text-white text-sm">
                                        {what.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            <div className="background-top relative" style={{ zIndex: -99 }}>
                <div className="absolute w-full left-0 -top-36 md:-top-72">
                    <img
                        src={pattern}
                        alt=""
                        className="w-full"
                        style={{ transform: "scaleY(-1)" }}
                    />
                </div>
            </div>
        </div>
    );
};

export default What;
