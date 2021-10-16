import React, { useState } from "react";
import Switch from "../switch";
import { MdInfoOutline, MdOutlineSettings } from "react-icons/md";
import { HiRefresh } from "react-icons/hi";

import FromInputField from "./FromInputField";
import ToInputField from "./ToInputField";
import SelectToken from "../select_token_card";

const ConversionCard = ({
    changeScreen,
    setFromInput,
    setToInput,
    fromInput,
    toInput,
}) => {
    
    const [tooltipVisibility, setTooltipVisibility] = useState(false);

    const handleInvertClick = () => {
        const temp = fromInput
        setFromInput(toInput)
        setToInput(temp)
    };

    const [displayTokenSelect, setDisplayTokenSelect] = useState(false);
    const [seletecingTokenFor, setSeletecingTokenFor] = useState("from"); // either from or to

    const handleTokenSelect = (token) => {
        if (seletecingTokenFor === "from") {
            setFromInput(token);
        } else setToInput(token);

        setDisplayTokenSelect(false)
    };

    return (
        <>
            {displayTokenSelect === true ? (
                <SelectToken
                    onBack={() => setDisplayTokenSelect(false)}
                    onSelect={handleTokenSelect}
                />
            ) : (
                <div className="max-w-md mx-auto rounded-2xl shadow p-8 bg-white space-y-8 relative">
                    <div className="flex items-center">
                        <Switch states={["Swap", "Pool"]} />
                        <div className="ml-auto settings flex items-center gap-4 text-red-500">
                            <button>
                                <MdOutlineSettings
                                    size={24}
                                    onClick={() => changeScreen("settings")}
                                />
                            </button>

                            <button>
                                <MdInfoOutline
                                    size={24}
                                    onMouseEnter={() =>
                                        setTooltipVisibility(true)
                                    }
                                    onMouseLeave={() =>
                                        setTooltipVisibility(false)
                                    }
                                />
                                <div
                                    className={`absolute w-64 bg-white p-2 rounded shadow -mt-4 ml-16 ${
                                        tooltipVisibility ? "visible" : "hidden"
                                    }`}
                                >
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Corporis, animi
                                        officiis? Perferendis, dolor. Aliquam ad
                                        beatae est amet ducimus facere omnis
                                        dolorum commodi sint impedit accusamus
                                        fuga, voluptatum, maxime sunt.
                                    </p>
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* form */}
                    <form action="">
                        <FromInputField
                            changeScreen={changeScreen}
                            onTokenChangeClick={() => {
                                setSeletecingTokenFor("from");
                                setDisplayTokenSelect(true);
                            }}
                            fromInput={fromInput}
                        />
                        <div className="flex justify-center mt-6 text-red-500">
                            <button type="button" onClick={handleInvertClick}>
                                <HiRefresh size={48} />
                            </button>
                        </div>
                        <ToInputField
                            changeScreen={changeScreen}
                            onTokenChangeClick={() => {
                                setSeletecingTokenFor("to");
                                setDisplayTokenSelect(true);
                            }}
                            toInput={toInput}
                        />

                        <div className="text-center pt-6">
                            <button
                                type="submit"
                                value="Connect to a Wallet"
                                className="py-2 px-4 bg-red-500 text-white rounded-xl mt-2 shadow-md"
                            >
                                Connect to a Wallet
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
};

export default ConversionCard;