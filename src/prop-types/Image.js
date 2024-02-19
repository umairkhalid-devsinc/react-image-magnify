import PropTypes from 'prop-types';

const BaseImageShape = {
    alt: PropTypes.string,
    title: PropTypes.string,
    src: PropTypes.string.isRequired,
    srcSet: PropTypes.string,
    sizes: PropTypes.string,
    onLoad: PropTypes.func,
    onError: PropTypes.func
}

export const LargeImageShape = PropTypes.shape(
    Object.assign(
        {},
        BaseImageShape,
        {
            width: PropTypes.number.isRequired,
            height: PropTypes.number.isRequired
        }
    )
);

export const SmallImageShape = PropTypes.shape(
    Object.assign(
        {},
        BaseImageShape,
        {
            isFluidWidth: PropTypes.bool,
            width: !props.isFluidWidth ? PropTypes.number.isRequired : PropTypes.number,
            height: !props.isFluidWidth ? PropTypes.number.isRequired : PropTypes.number
        }
    )
);
