import React, { Component } from 'react';
import LensPropTypes from '../../prop-types/Lens';
import dataUri from './assets/textured-lens-data-uri';

export default class PositiveSpaceLens extends Component {
    static propTypes = LensPropTypes

    static defaultProps = {
        style: {}
    }

    get dimensions() {
        const {
            cursorOffset: {
                x: cursorOffsetX,
                y: cursorOffsetY
            }
        } = this.props;

        return {
            width: cursorOffsetX * 2,
            height: cursorOffsetY * 2
        };
    }

    get positionOffset() {
        const {
            cursorOffset: {
                x: cursorOffsetX,
                y: cursorOffsetY
            },
            position: {
                x: positionX,
                y: positionY
            },
            smallImage: {
                height: imageHeight,
                width: imageWidth
            }
        } = this.props;

        const {
            width,
            height
        } = this.dimensions

        const top = positionY - cursorOffsetY;
        const left = positionX - cursorOffsetX;
        const maxTop = imageHeight - height;
        const maxLeft = imageWidth - width;
        const minOffset = 0;
        return {
            top: Math.min(Math.max(top, minOffset), maxTop),
            left: Math.min(Math.max(left, minOffset), maxLeft)
        };
    }

    get defaultStyle() {
        const { fadeDurationInMs } = this.props;

        return {
            transition: `opacity ${fadeDurationInMs}ms ease-in`,
            backgroundImage: `url(${dataUri})`
        };
    }

    get userSpecifiedStyle() {
        const {
            style
        } = this.props;

        return style;
    }

    get isVisible() {
        const {
            isActive,
            isPositionOutside
        } = this.props;

        return (
            isActive &&
            !isPositionOutside
        );
    }

    get priorityStyle() {
        const {
            width,
            height
        } = this.dimensions

        const {
            top,
            left
        } = this.positionOffset

        return {
            position: 'absolute',
            top: `${top}px`,
            left: `${left}px`,
            width: `${width}px`,
            height: `${height}px`,
            opacity: this.isVisible ? 1 : 0
        };
    }

    get compositStyle() {
        return Object.assign(
            this.defaultStyle,
            this.userSpecifiedStyle,
            this.priorityStyle
        );
    }

    render() {
        return (
            <div style={this.compositStyle} />
        );
    }
}
