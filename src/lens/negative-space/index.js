import React from 'react';

import LensTop from './LensTop';
import LensLeft from './LensLeft';
import LensRight from './LensRight';
import LensBottom from './LensBottom';

import LensPropTypes from '../../prop-types/Lens';

export default function NegativeSpaceLens(inputProps) {
    const { style: userSpecifiedStyle } = inputProps;

    const compositLensStyle = Object.assign(
        { backgroundColor: 'rgba(0,0,0,.4)' },
        userSpecifiedStyle
    );

    const props = Object.assign(
        {},
        inputProps,
        { style: compositLensStyle }
    );

    return (
        <div>
            <LensTop { ...props} />
            <LensLeft { ...props} />
            <LensRight { ...props} />
            <LensBottom { ...props} />
        </div>
    );
}

NegativeSpaceLens.propTypes = LensPropTypes;
