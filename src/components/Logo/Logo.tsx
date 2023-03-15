import React from 'react';
// @ts-ignore
import {ReactComponent as LogoSVG} from '../../assets/Logo.svg';

interface InterfaceLogo {
    src: string
    alt?: string
    className?: string
}

export const Logo = ({className}: InterfaceLogo): JSX.Element => {
    return (<LogoSVG className={className}/>);
};

