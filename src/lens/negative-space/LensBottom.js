import React from 'react';
import Lens from './Lens';
import LensPropTypes from '../../prop-types/Lens';

const LensBottom = ({
    cursorOffset,
    position,
    fadeDurationInMs,
    isActive,
    isPositionOutside,
    smallImage,
    style: parentSpecifiedStyle
}) => {

    const clearLensHeight = cursorOffset.y * 2;
    const computedHeight = smallImage.height - position.y - cursorOffset.y;
    const maxHeight = smallImage.height - clearLensHeight;
    const height = Math.min(Math.max(computedHeight, 0), maxHeight)
    const clearLensBottom = position.y + cursorOffset.y;
    const top = Math.max(clearLensBottom, clearLensHeight);
    const computedStyle = {
        height: `${height}px`,
        width: '100%',
        top: `${top}px`
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

LensBottom.propTypes = LensPropTypes;

export default LensBottom;
