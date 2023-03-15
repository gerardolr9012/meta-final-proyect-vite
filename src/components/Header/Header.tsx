import React from 'react';
import {Logo, Nav} from "..";

export const Header = (): JSX.Element => {
    return <header>
        <Logo className={'logo'} src={'../../assets/Logo.svg'}/>
        <Nav/>
    </header>
}
