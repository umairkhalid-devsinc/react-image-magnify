import React from 'react';
import Lens from './Lens';
import LensPropTypes from '../../prop-types/Lens';

const LensTop = ({
    cursorOffset,
    position,
    fadeDurationInMs,
    isActive,
    isPositionOutside,
    smallImage,
    style: parentSpecifiedStyle
}) => {
    const clearLensHeight =  cursorOffset.y * 2;
    const maxHeight = smallImage.height - clearLensHeight;
    const height = Math.min(Math.max(position.y - cursorOffset.y, 0), maxHeight)
    const computedStyle = {
        height: `${height}px`,
        width: '100%',
        top: '0px'
    };

    return (
        <Lens {...{
            fadeDurationInMs,
            isActive,
            isPositionOutside,
            style: Object.assign(
                {},
                parentSpecifiedStyle,
                computedStyle
            )
        }}/>
    );
};

LensTop.propTypes = LensPropTypes;

export default LensTop;
