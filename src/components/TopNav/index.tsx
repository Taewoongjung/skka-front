import {useLocalStore, useObserver} from "mobx-react";
import {Bar, MenuIcon, NavItems, NavMenu, Whole} from "./style";
import {NavMenuItemsForNotLoggedIn} from "../NavMenuItems/ForLoggedIn";
import {useCallback} from "react";

const TopNav = () => {
    const state = useLocalStore(() => ({
        clicked: false
    }));

    const handleClick = useCallback((e:any) => {
        e.preventDefault();
        state.clicked=true;
    },[state.clicked]);

    return useObserver(() => (
        <Whole>
            <NavItems className="NavbarItems">
                <MenuIcon className="menu-icon" onClick={handleClick}>
                    <Bar className={state.clicked ? 'fas fa-times' : 'fas fa-bars'}></Bar>
                </MenuIcon>
                <NavMenu className={state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {NavMenuItemsForNotLoggedIn.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </NavMenu>
            </NavItems>
        </Whole>
    ))
}

export default TopNav;