import {useLocalStore, useObserver} from "mobx-react";
import {Image} from "../style";

const Entrance = () => {
    const state = useLocalStore(() => ({
        files: [],
        fileName: '',
        isDragging: false,
        profileImg: require("./entrance.png")
    }));

    return useObserver(() => (
        <div>
            <Image src={state.profileImg}/>
        </div>
    ));
}

export default Entrance;