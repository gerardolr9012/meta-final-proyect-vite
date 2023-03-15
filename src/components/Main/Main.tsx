import React from 'react';

interface InterfaceMain {
    children?: React.ReactNode
}

export const Main = ({children}: InterfaceMain): JSX.Element => {

    return (
        <main>{children}</main>
    );
};

