import React from 'react';

export interface WalletAddress {
    address: string,
    tileWidth?: string,
    tileHeight?: string,
    space?: string,
    gap?: string,
    displayBg?: string
}

export const AddressPrettify = ({
                                    address,
                                    tileWidth = '100%',
                                    tileHeight = '3px',
                                    space = '0px',
                                    gap = '2px',
                                    displayBg = 'black'
                                }: WalletAddress) => {

    let addressToRgb: any[] = [];

    const getColorsFromAddress = (param: number) => {
        addressToRgb = [];
        let nextRow: string[] = [];
        address.slice(param, address.length).split('').forEach((char, index) => {
            nextRow.push(Number(char.charCodeAt(0)).toFixed(0));
            if ((index + 1) % 3 === 0) {
                addressToRgb.push(nextRow);
                nextRow = [];
            }
        });
        if (nextRow.length) {
            addressToRgb.push(nextRow);
        }
    }

    if (address.slice(0, 4) === 'xpub' ||
        address.slice(0, 4) === 'xprv' ||
        address.slice(0, 4) === 'tpub' ||
        address.slice(0, 4) === 'tprv') {

        getColorsFromAddress(4)

    } else if (
        address.slice(0, 3) === 'bc1' ||
        address.slice(0, 3) === 'tb1') {

        getColorsFromAddress(3)

    } else if (
        address.slice(0, 2) === '0x') {

        getColorsFromAddress(2)

    } else if (address.slice(0, 1) === '1' ||
        address.slice(0, 1) === '3' ||
        address.slice(0, 1) === '5' ||
        address.slice(0, 1) === 'K' ||
        address.slice(0, 1) === 'L' ||
        address.slice(0, 1) === 'M' ||
        address.slice(0, 1) === '2' ||
        address.slice(0, 1) === '9' ||
        address.slice(0, 1) === 'c' ||
        address.slice(0, 1) === 'm' ||
        address.slice(0, 1) === 'n') {
        getColorsFromAddress(1);

    } else {
        getColorsFromAddress(0);
    }


    const tileParams = {
        filter: `brightness(1.6) saturate(3)`,
        width: `${tileWidth}`,
        height: `${tileHeight}`,
        marginTop: `${space}`,
        marginRight: `${gap}`,
        marginLeft: `${gap}`,
        borderRadius: `5px`
    }

    return (
        <div style={{display: 'flex', maxWidth: 'fit-content', minWidth: 'fit-content', flexDirection: 'column'}}>
            <div>{address}</div>
            <div style={{
                display: 'flex',
                backgroundColor: `${displayBg}`,
                borderRadius: '5px',
                padding: '2px 1px'
            }}>
                {addressToRgb.map(element => {
                    const tile = {
                        backgroundColor: `rgb(${element[0]}, 
                                              ${element[1] ? element[1] : element[0]}, 
                                              ${element[2] ? element[2] : element[1] ? element[1] : element[0]})`
                    }
                    return <div key={Math.random().toString()} style={{...tile, ...tileParams}}>&nbsp;</div>
                })}
            </div>
        </div>
    )
}
