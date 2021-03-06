import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { MdCopyAll } from "react-icons/md";
import pattern from "../../assets/bg_pattern_1.png";
import unicorn from "./static/unicorn.png";
import cat from "./static/cat.png";
import unicorn_2 from "./static/unicorn_2.png";
import drum from "./static/drum.png";
import dragon from "./static/dragon.png";
import experiment from "./static/experiment.png";
import What from "./components/what";
import Tokenomics from "./components/tokenomics";
import Fair from "./components/fair";
import Upcoming from "./components/upcoming";
import Roadmap from "./components/roadmap";
import AsSeen from "./components/as_seen";
import CoreValues from "./components/core_values";
import Featured from "./components/featured";
import FAQ from "./components/faq";
import ContactUS from "./components/contact_us";
import CryptoNews from "./components/news";
import Map from "./components/map";
import homepage_content from "./static/content/content";
import hero_background_7 from "../../assets/hero_background_7_0.png";
import twitter from "./static/twitter.png";
import reddit from "./static/reddit.png";
import instagram from "./static/instagram.png";
import telegram from "./static/telegram.png";
import CopyToClipboard from "react-copy-to-clipboard";

const Home = () => {
    return (
        <div>
            <Navbar homepage={true} />
            <div className="min-h-screen" id="section1">
                <div className="bg-primary-grayed rounded-br-16xl">
                    <div className="hero overflow-hidden bg-secondary-light rounded-br-16xl">
                        <div
                            className="max-w-screen-lgxl container mx-auto relative px-8 md:px-0"
                            style={{ zIndex: 1 }}>
                            <div className="flex items-center justify-center gap-2 py-20 md:justify-between">
                                <div className="md:w-2/3 md:space-y-6 space-y-8  relative z-10">
                                    <h2 className="text-xl space-y-4 text-center py-4">
                                        <span className="font-medium text-4xl md:text-6xl text-primary uppercase">
                                            Community Driven
                                        </span>
                                        <span className="block text-4xl md:text-6xl font-nomal text-gray-800">
                                            Decentralized
                                            <span className="text-4xl md:text-6xl font-nomal text-yellow-600">
                                                {" "}
                                                Protocol
                                            </span>
                                        </span>
                                    </h2>
                                    <div className="flex flex-wrap justify-between gap-1">
                                        {homepage_content.contracts_1.map((contract) => (
                                            <div className="bg-primary text-white text-sm py-1 px-2 rounded-full flex gap-2 items-center">
                                                <div className="w-6">
                                                    <img src={contract.img} alt="" />
                                                </div>
                                                <span>
                                                    {contract.licence.substr(0, 6)}...
                                                    {contract.licence.substr(
                                                        contract.licence.length - 9
                                                    )}
                                                    
                                                </span>
                                                <CopyToClipboard text={contract.licence}>
                                                    <button className="rounded hover:bg-primary-dark focus:bg-primary-darker">
                                                        <MdCopyAll size={22} />
                                                    </button>
                                                </CopyToClipboard>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex flex-wrap justify-between gap-1">
                                        {homepage_content.contracts_2.map((contract) => (
                                            <div className="bg-primary text-white text-sm py-1 px-2 rounded-full flex gap-2 items-center">
                                                <div className="w-6">
                                                    <img src={contract.img} alt="" />
                                                </div>
                                                <span>
                                                    {contract.licence.substr(0, 6)}...
                                                    {contract.licence.substr(
                                                        contract.licence.length - 9
                                                    )}</span>
                                                <CopyToClipboard text={contract.licence}>
                                                    <button className="rounded hover:bg-primary-dark focus:bg-primary-darker">
                                                        <MdCopyAll size={22} />
                                                    </button>
                                                </CopyToClipboard>
                                            </div>
                                        ))}
                                    </div>

                                    <div class="flex gap-4">
                                        <a
                                            href="https://lunachow.com/wp-content/uploads/2021/08/LunaChow-Whitepaper-V2.pdf"
                                            className="block text-center w-1/2 rounded-full py-3 px-4 bg-gradient-to-b from-yellow-500 to-yellow-600 font-medium text-white">
                                            Whitepaper
                                        </a>

                                        <a
                                            href="https://www.lunachow.com//wp-content/uploads/2021/08/audit.pdf"
                                            className="block text-center w-1/2 rounded-full py-3 px-4 bg-gradient-to-b from-yellow-500 to-yellow-600 font-medium text-white">
                                            Audit
                                        </a>
                                    </div>

                                    <div className="flex gap-4">
                                        <a
                                            href="/charity"
                                            className="block text-center w-1/2 rounded-full py-3 px-4 bg-gradient-to-b from-yellow-500 to-yellow-600 font-medium text-white">
                                            Donate
                                        </a>

                                        <a
                                            href="/swap"
                                            target="_blank"
                                            className="block text-center w-1/2 rounded-full py-3 px-4 bg-gradient-to-b from-yellow-500 to-yellow-600 font-medium text-white">
                                            Swap
                                        </a>
                                    </div>

                                    <div className="flex gap-4 items-center justify-center">
                                        <a href="#">
                                            <img src={telegram} alt="" />
                                        </a>

                                        <a href="#">
                                            <img src={instagram} alt="" />
                                        </a>
                                        <a href="#">
                                            <img src={twitter} alt="" />
                                        </a>
                                        <a href="#">
                                            <img src={reddit} alt="" />
                                        </a>
                                    </div>
                                </div>

                                <div className="hidden md:flex w-1/2 h-96 justify-center relative z-0">
                                    <img
                                        src={hero_background_7}
                                        alt=""
                                        className="object-cover drop-shadow-2xl relative transform scale-125"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="relative h-8">
                            <div className="absolute -bottom-40 -left-20 w-full">
                                {/* <img src={pattern} alt="" style={{ transform: "scaleY(-1)" }} /> */}
                            </div>
                        </div>
                    </div>

                    <div className="py-32 px-8 md:flex items-center justify-center gap-16 space-y-4">
                        <div className="space-y-8">
                            <h2 className="text-center md:text-left text-6xl text-primary font-bold">
                                Buy $LUCHOW
                            </h2>
                            <p className="text-center md:text-left text-2xl text-gray-600 max-w-md">
                                You can buy $LUCHOW on Uniswap, Pancakeswap, Quickswap, Dexlab,
                                Sushiswap, 1inch.
                            </p>
                        </div>

                        <div class="space-y-4">
                            <div className="flex justify-center gap-4">
                                <a href="https://app.uniswap.org/#/swap">
                                    <img src={unicorn} alt="" className="w-32" />
                                </a>
                                <a href="https://pancakeswap.finance/swap">
                                    <img src={cat} alt="" className="w-32" />
                                </a>
                                <a href="https://trade.dexlab.space/#/swap">
                                    <img src={experiment} alt="" className="w-32" />
                                </a>
                            </div>
                            <div className="flex justify-center gap-4">
                                <a href="https://quickswap.exchange/#/swap">
                                    <img src={dragon} alt="" className="w-32" />
                                </a>
                                <a href="https://app.sushi.com/swap">
                                    <img src={drum} alt="" className="w-32" />
                                </a>
                                <a href="https://app.1inch.io/#/1/swap/ETH/DAI">
                                    <img src={unicorn_2} alt="" className="w-32" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <What />
            <Tokenomics />
            <Fair />
            <Upcoming />
            <Map />
            <Roadmap />
            <AsSeen />
            <CoreValues />
            <Featured />
            <FAQ />
            <CryptoNews />
            <ContactUS />

            <Footer />
        </div>
    );
};

export default Home;
