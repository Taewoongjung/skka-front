import {useLocalObservable, useObserver} from "mobx-react";
import React, {useCallback, useState} from "react";
import ReactiveButton from "reactive-button";
import {Bar} from "./style";
import axios from "axios";

const SideBar = (props:any) => {
    const state = useLocalObservable(() => ({
        isDragging: false,
        thisObject: props.obj
    }));

    const onClickHandler = () => {
        setTimeout(() => {
            state.thisObject.setReserve();
        }, 200);
    };

    const onClickNextHandler = () => {
        setVisible("none")
    };

    const onClickReserveHandler = useCallback((e:any) => {
        axios.post(`http://localhost:8080/seats/${state.thisObject._seatNum}`,
            {}
        )
    }, []);

    const [visibleNext, setVisible] = useState("");

    const tempStyle= {
        display: visibleNext
    }

    console.log("@@1 => ", state.thisObject)
    return useObserver(() => (
        <div>
            {state.thisObject.getState() &&
                <Bar>
                    <div>좌석 번호: {state.thisObject._seatNum}</div>
                    <br/><br/>
                    <ReactiveButton
                        buttonState={state.thisObject._reserve}
                        onClick={onClickHandler}
                        color={'primary'}
                        idleText={'예약하기'}
                        loadingText={'Loading'}
                        successText={'예약중...'}
                        errorText={'Error'}
                        type={'button'}
                        className={'class1 class2'}
                        style={{ borderRadius: '20px' }}
                        size={'normal'}
                        block={false}
                        messageDuration={9999999999}
                        buttonRef={null}
                        width={'50px'}
                        height={'30px'}
                        animation={true}
                    />

                    <br/><br/><br/>
                    {state.thisObject._reserve === "success" &&
                        <>
                            <hr/>
                            <form>
                                📍 날짜 정하기
                                <p><input type="date"/></p>
                                <p><input onClick={onClickNextHandler} type="button" value="다음" style={tempStyle}/></p>
                                {visibleNext == "none" &&
                                    <><hr/>
                                        📍 시간 정하기
                                    <p><input type="time"/></p>

                                        <hr/>
                                        <p><input onClick={onClickReserveHandler} type="button" value="예약"/></p>
                                    </>
                                }

                            </form>
                        </>
                    }

                </Bar>
            }
        </div>
    ));
}

export default SideBar;