import {useLocalStore, useObserver} from "mobx-react";
import {Image} from "../style";

const Desk = () => {
    const state = useLocalStore(() => ({
        files: [],
        fileName: '',
        isDragging: false,
        profileImg: require("./desk.png")
    }));

    return useObserver(() => (
        <div>
            <Image src={state.profileImg}/>
        </div>
    ));
}

export default Desk;