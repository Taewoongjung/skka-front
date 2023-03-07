import {useLocalObservable, useObserver} from "mobx-react";
import React, {useCallback} from "react";

const EmptySpace = (props:any) => {
    const state = useLocalObservable(() => ({
        sideBarObject: props.sideBarObj,
    }));

    const clickHandler = useCallback((e:any) => {
        state.sideBarObject.setStateFalse();
    },[]);

    return useObserver(() => (
        <div onClick={clickHandler} />
    ));
}

export default EmptySpace;