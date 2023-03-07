const { makeAutoObservable } = require('mobx');

class SideBarState {
    _seatNum: number | undefined;
    _state = false;
    _reserve = 'idle';

    constructor() {
        makeAutoObservable(this);
    }

    setReserve = () => {
        this._reserve = 'success';
    }

    setReserveRetrieve= () => {
        this._reserve = 'idle';
    }

    getState = () => {
        return this._state;
    }

    setStateTrue = () => {
        this._state = true;
    }

    setStateFalse = () => {
        this._state = false;
    }

    setSeatNum = (value:number) => {
        this._seatNum = value;
    }
}

export default SideBarState;