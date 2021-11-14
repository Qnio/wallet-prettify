import React from 'react';

export interface WalletAddress {
    address: string,
    tileWidth?: string,
    tileHeight?: string
}

export const AddressPrettify = ({address, tileWidth = '100%', tileHeight = '5px'}: WalletAddress) => {
    const changeLeadingTwoSigns = address.replace(/^.{2}/g, '00');
    const addressToColourArray = changeLeadingTwoSigns.split(/(?<=^(?:.{6})+)(?!$)/);

    return (
        <div style={{display: 'flex', maxWidth: 'fit-content', flexDirection: 'column'}}>
            <div style={{display: 'flex'}}>
                {addressToColourArray.map(element => {
                    const tile = {
                        backgroundColor: `#${element}`,
                        width: `${tileWidth}`,
                        height: `${tileHeight}`
                    }
                    return <div key={Math.random().toString()} style={tile}>&nbsp;</div>
                })}
            </div>
        </div>
    )
}
