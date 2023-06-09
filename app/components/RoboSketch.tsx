import React from 'react'

const RoboSketch = () => {
    return (
        <>
            <div className="roboSketchContainer">
                <div className="mouthBoxRobo mt-4">
                    <div className="face w-40 h-40 bg-orange-100 border-red-200 rounded-full">
                        <div className="eyesBox relative">
                            <div className="eyeRight absolute">
                                <div className="eyeDrop"></div>
                            </div>
                            <div className="eyeLeft absolute">
                                <div className="eyeDrop"></div>
                            </div>
                        </div>
                    </div>
                    <div className="earLeft"></div>
                    <div className="earRight"></div>
                </div>
                <div className="bodyBoxRobo">
                    <div className="chestandAbdomin"></div>
                    <div className="handLeft"></div>
                    <div className="handright"></div>
                </div>
                <div className="footBoxRobo">
                    <div className="footLeft"></div>
                    <div className="footRight"></div>
                </div>
            </div>
        </>
    )
}

export default RoboSketch
