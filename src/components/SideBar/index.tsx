import {useLocalObservable, useObserver} from "mobx-react";
import React, {useCallback, useState} from "react";
import ReactiveButton from "reactive-button";
import {Bar} from "./style";
import axios from "axios";
import useInput from "../../hooks/useInput";

const SideBar = (props:any) => {
    const state = useLocalObservable(() => ({
        isDragging: false,
        thisObject: props.obj
    }));

    const [startTime, onChangeStartTime] = useInput('');
    const [startDate, onChangeStartDate] = useInput('');

    const [endedTime, onChangeEndTime] = useInput('');
    const [endedDate, onChangeEndDate] = useInput('');

    console.log("s time ", startDate+'T'+startTime);
    console.log("e time ", endedDate+'T'+endedTime);

    const onClickHandler = () => {
        setVisible("");
        setTimeout(() => {
            state.thisObject.setReserve();
        }, 200);
    };

    const onClickNextHandler = () => {
        setVisible("none")
    };

    const customerId = 1;
    const startedTime = startDate+'T'+startTime;
    const endTime = endedDate+'T'+endedTime;

    const onClickReserveHandler = useCallback((e:any) => {
        axios.post(`http://localhost:8080/seats/${state.thisObject._seatNum}`,
            {customerId, startedTime, endTime}
        )
    }, [state.thisObject, startedTime]);

    const [visibleNext, setVisible] = useState("");

    const tempStyle= {
        display: visibleNext
    }

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
                                📍 시작 날짜/시간 정하기
                                <p><input type="date" onChange={onChangeStartDate}/></p>
                                <p><input type="time" onChange={onChangeStartTime}/></p>
                                <p><input onClick={onClickNextHandler} type="button" value="다음" style={tempStyle}/></p>

                                {visibleNext === "none" &&
                                    <>
                                        <hr/>
                                        📍 퇴실 날짜/시간 정하기
                                        <p><input type="date" onChange={onChangeEndDate}/></p>
                                        <p><input type="time" onChange={onChangeEndTime}/></p>
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