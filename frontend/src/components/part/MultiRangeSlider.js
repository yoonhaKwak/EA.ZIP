import React, { useCallback, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import "../../styles/css/multiRangeSlider.css";

//min, max,onChange 가 부모로 보낼 데이터 변수.
const MultiRangeSlider = ({ min, max, onChange }) => {
    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);
    const minValRef = useRef(min);
    const maxValRef = useRef(max);
    const range = useRef(null);

    // Convert to percentage
    const getPercent = useCallback(
        (value) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );

    // Set width of the range to decrease from the left side
    useEffect(() => {
        const minPercent = getPercent(minVal);
        const maxPercent = getPercent(maxValRef.current);

        if (range.current) {
            range.current.style.left = `${minPercent}%`;
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [minVal, getPercent]);

    // Set width of the range to decrease from the right side
    useEffect(() => {
        const minPercent = getPercent(minValRef.current);
        const maxPercent = getPercent(maxVal);

        if (range.current) {
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [maxVal, getPercent]);

    // Get min and max values when their state changes
    useEffect(() => {
        onChange({ min: minVal, max: maxVal });
    }, [minVal, maxVal, onChange]);

    //if ~ else 사용해서 금액에 따라 억/천/백/십/일 원 입력해주는 함수 입력.
    return (
        <div className="container">
            <input
                type="range"
                min={min}
                max={max}
                value={minVal}
                step={10}
                ruler={true}
                label={true}
                onChange={(event) => {
                    const value = Math.min(Number(event.target.value), maxVal - 10);
                    setMinVal(value);
                    minValRef.current = value;
                }}
                className="thumb thumb--left"
                style={{ zIndex: minVal > max - 1 && "5" }}
            />
            <input
                type="range"
                min={min}
                max={max}
                value={maxVal}
                step={10}
                ruler={true}
                label={true}
                onChange={(event) => {
                    const value = Math.max(Number(event.target.value), minVal + 10);
                    setMaxVal(value);
                    maxValRef.current = value;
                }}
                className="thumb thumb--right"
            />

            <div className="slider">
                <div className="slider__track" />
                <div ref={range} className="slider__range" />
                <div className="slider__left-value" style={{ paddingLeft: '1.5px', lineHeight: '10px' }}>|</div>
                <div className="slider__left-value" style={{ lineHeight: '45px', textAlign: 'center' }}>{minVal}</div>
                <div className="slider__right-value" style={{ paddingRight: '11.5px', lineHeight: '10px' }}>|</div>
                <div className="slider__right-value" style={{ lineHeight: '45px', textAlign: 'center' }}>{maxVal}</div>
            </div>
        </div>
    );
};

MultiRangeSlider.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
};

export default MultiRangeSlider;



// realprice = (price + "만").toString()
// .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","); //매물가격이 1억을 넘지 못할 경우
// }
// else {
// if (price % 10000 === 0) {

// pricel = (price / 10000);         //매물 가격이 1억을 넘되 만 단위가 없을 경우
// realprice = (pricel + "억").toString()
//     .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

// }
// else {
// if (!(price % 1000 === 0)) { //매물 가격이 1억을 넘되 만 단위가 1000미만일 경우
//     pricel = (price / 10000);
//     pricel = Math.floor(pricel);
//     pricel = pricel.toFixed(0);
//     pricem = (price % 10000);
//     pricem = pricem.toString()
//         .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
//     realprice = (pricel + "억 " + pricem + "만").toString();
// }
// else {    //그외 나머지
//     pricel = price.toString()
//         .replace(/\B(?<!\.\d*)(?=(\d{4})+(?!\d))/g, "억 ")
//         .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
//     realprice = (pricel + "만").toString();
// }
// }
// }
// }