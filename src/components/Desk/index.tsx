import {useLocalObservable, useObserver} from "mobx-react";
import {Image} from "../style";
import React, {useCallback} from "react";

const Desk = (props:any) => {
    const state = useLocalObservable(() => ({
        seatNumber: props.seatNum,
        sideBarObject: props.sideBarObj,
        isDragging: false,
        profileImg: require("./desk.png")
    }));

    const clickHandler = useCallback((e:any) => {
        state.sideBarObject.setStateTrue();
        state.sideBarObject.setSeatNum(state.seatNumber);
        state.sideBarObject.setReserveRetrieve();
    },[]);

    return useObserver(() => (
        <div>
            <Image onClick={clickHandler} src={state.profileImg}/>
        </div>
    ));
}

export default Desk;
