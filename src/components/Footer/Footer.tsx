import React from 'react';

interface InterfaceFooter {
    children?: React.ReactNode
}

export const Footer = ({children}: InterfaceFooter): JSX.Element => {

    return (
        <footer>{children}</footer>
    );
};

