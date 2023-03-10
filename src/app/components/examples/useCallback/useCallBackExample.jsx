import React, { useRef, useState, useEffect, useCallback } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const withOutCallBack = useRef(0);
    const withCallBack = useRef(0);

    const handleChange = ({ target }) => {
        setData(prevState => ({ prevState, [target.name]: target.value }));
    };
    // WithOut
    const validateWithOutCallBack = (data) => {
        console.log(data);
    };
    useEffect(() => {
        withOutCallBack.current++;
    }, [validateWithOutCallBack]);

    // With
    const validateWithCallBack = useCallback((data) => {
        console.log(data);
    }, []);
    useEffect(() => {
        withCallBack.current++;
    }, [validateWithCallBack]);

    useEffect(() => {
        validateWithOutCallBack(data);
        validateWithCallBack(data);
    }, [data]);

    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>withOutCallBack: {withOutCallBack.current}</p>
            <p>withCallBack: {withCallBack.current}</p>

            <label htmlFor="email" className="form-label">Email</label>
            <input onChange={handleChange} name="email" value={data.email || ""} type="email" className="form-control" id="email"/>
        </CardWrapper>
    );
};

export default UseCallBackExample;
