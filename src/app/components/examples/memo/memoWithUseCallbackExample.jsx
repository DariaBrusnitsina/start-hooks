import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

const LogOutButton = ({ onLogOut }) => {
    useEffect(() => {
        console.log("renfer btn");
    });
    return <button className="btn btn-primary m-2" onClick={onLogOut}>LogOut</button>;
};

LogOutButton.propTypes = {
    onLogOut: PropTypes.func
};

const MemorizedLogOutButton = React.memo(LogOutButton);

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);
    const handleLogOut = useCallback(() => {
        localStorage.removeItem("auth");
    }, []);
    return <>
    <button className="btn btn-primary m-2" onClick={() => setState(!state)}>initiate rerender</button>
    <MemorizedLogOutButton onLogOut={handleLogOut} />
    </>;
};

export default MemoWithUseCallbackExample;
