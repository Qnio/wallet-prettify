import React from 'react';
import './AddressPettify.css';

export interface WalletAddress {
    address: string,
    tileWidth: string,
    tileHeight: string
}

export const AddressPrettify = ({address, tileWidth, tileHeight}: WalletAddress) => {
    const changeLeadingTwoSigns = address.replace(/^.{2}/g, '00');
    const addressToColourArray = changeLeadingTwoSigns.split(/(?<=^(?:.{6})+)(?!$)/);

    return (
        <div className='address-container'>
            <div>
                {address}
            </div>
            <div className='display-address-block'>
                {addressToColourArray.map(element => {
                    const tile = {
                        backgroundColor: `#${element}`,
                        width: `${tileWidth}`,
                        height: `${tileHeight}`
                    }
                    return <div style={tile}>&nbsp;</div>
                })}
            </div>
        </div>
    )
}
