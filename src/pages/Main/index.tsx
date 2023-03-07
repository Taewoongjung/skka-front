import React from 'react';
import {useObserver} from 'mobx-react';
import {Contents, InnerDivInTheNameOfTitle, Table} from "./style";
import Desk from "../../components/Desk";
import Entrance from "../../components/Entrance";
import SideBar from "../../components/SideBar";
import SideBarState from "../../state_manager/store";
import EmptySpace from "../../components/EmptySpace";

const Main = () => {

    const sideBarState = new SideBarState();

    return useObserver(() => (
         <div>
             <SideBar obj={sideBarState}/>

            <Contents>
            <Table>
                <EmptySpace sideBarObj={sideBarState}/>
                <EmptySpace sideBarObj={sideBarState}/>
                <div>
                    <InnerDivInTheNameOfTitle>SKKA - 죽전 보정점 </InnerDivInTheNameOfTitle><br/>
                    <InnerDivInTheNameOfTitle>좌석 배치도</InnerDivInTheNameOfTitle>
                </div>
                <EmptySpace sideBarObj={sideBarState}/>
                <EmptySpace sideBarObj={sideBarState}/>
                <EmptySpace sideBarObj={sideBarState}/>
                <Desk sideBarObj={sideBarState} seatNum={1} />
                <Desk sideBarObj={sideBarState} seatNum={2}/>
                <Desk sideBarObj={sideBarState} seatNum={3}/>
                <Entrance/>
                <EmptySpace sideBarObj={sideBarState}/>
                <Desk sideBarObj={sideBarState} seatNum={4}/>
                <Desk sideBarObj={sideBarState} seatNum={5}/>
                <Desk sideBarObj={sideBarState} seatNum={6}/>
                <EmptySpace sideBarObj={sideBarState}/>
                <EmptySpace sideBarObj={sideBarState}/>
                <Desk sideBarObj={sideBarState} seatNum={7}/>
                <Desk sideBarObj={sideBarState} seatNum={8}/>
                <Desk sideBarObj={sideBarState} seatNum={9}/>
                <EmptySpace sideBarObj={sideBarState}/>
                <EmptySpace sideBarObj={sideBarState}/>
                <Desk sideBarObj={sideBarState} seatNum={10}/>
                <Desk sideBarObj={sideBarState} seatNum={11}/>
                <Desk sideBarObj={sideBarState} seatNum={12}/>
                <EmptySpace sideBarObj={sideBarState}/>
                <EmptySpace sideBarObj={sideBarState}/>
                <Desk sideBarObj={sideBarState} seatNum={13}/>
                <Desk sideBarObj={sideBarState} seatNum={14}/>
                <Desk sideBarObj={sideBarState} seatNum={15}/>
                <EmptySpace sideBarObj={sideBarState}/>
                <EmptySpace sideBarObj={sideBarState}/>
                <Desk sideBarObj={sideBarState} seatNum={16}/>
                <Desk sideBarObj={sideBarState} seatNum={17}/>
                <Desk sideBarObj={sideBarState} seatNum={18}/>
                <EmptySpace sideBarObj={sideBarState}/>
                <EmptySpace sideBarObj={sideBarState}/>
                <Desk sideBarObj={sideBarState} seatNum={19}/>
                <Desk sideBarObj={sideBarState} seatNum={20}/>
                <Desk sideBarObj={sideBarState} seatNum={21}/>
                <EmptySpace sideBarObj={sideBarState}/>
            </Table>
            </Contents>
        </div>
    ));
}

export default Main;