# react-image-magnify

A React image magnification component for desktop and touch.

Desktop displays a side by side enlarged image view, with tinted control-image mask.
Supports delaying hover and hover-off, which may help reduce unintentional triggering.

Touch displays an in place enlarged image view.
Supports press to pan. Does not interfere with scrolling.

Supports arbitrary image sizes. Scales magnification automatically.

## Demo
[Desktop](https://goo.gl/YLldFQ)

[Touch](https://goo.gl/mxGybY)

<img src="./docs/qr.png?raw=true" alt="Touch Demo"/>

## Status
[![CircleCI](https://circleci.com/gh/ethanselzer/react-image-magnify.svg?style=svg)](https://circleci.com/gh/ethanselzer/react-image-magnify)

[![npm](https://nodei.co/npm/react-image-magnify.svg?downloads=true)](https://nodei.co/npm/react-image-magnify/)

## Installation

```sh
npm install --save react-image-magnify
```

## Usage
### Desktop

```JSX
import ReactImageMagnify from 'react-image-magnify';
...
<ReactImageMagnify {...{
    largeImage: {
        alt: 'large image description goes here',
        src: 'https://example.com/large/image.jpg',
        width: 1200,
        height: 1800
    },
    smallImage: {
        alt: 'small image description goes here',
        src: 'https://example.com/small/image.jpg',
        width: 400,
        height: 600
    }
}}/>
...
```
### Touch

```JavaScript
import ReactImageMagnifyTouch from 'react-image-magnify';
...
<ReactImageMagnifyTouch {...{
    largeImage: {
        alt: 'large image description goes here',
        src: 'https://example.com/large/image.jpg',
        width: 1200,
        height: 1800
    },
    smallImage: {
        alt: 'small image description goes here',
        src: 'https://example.com/small/image.jpg',
        width: 400,
        height: 600
    }
}}/>
...
```

## Props API

### Desktop and Touch
| Prop                          | Type   | Required | Default | Description                                                |
|-------------------------------|--------|----------|---------|------------------------------------------------------------|
| `smallImage`                  | Object | Yes      |         | Small image information. See `Image Struct` below.         |
| `largeImage`                  | Object | Yes      |         | Large image information. See `Image Struct` below.         |
| `className`                   | String | No       |         | CSS class applied to root container element.               |
| `style`                       | Object | No       |         | Style applied to root container element.                   |
| `fadeDurationInMs`            | Number | No       | 300     | Milliseconds duration of magnified image fade in/fade out. |
| `imageStyle`                  | Object | No       |         | Style applied to small image element.                      |
| `enlargedImageContainerStyle` | Object | No       |         | Style applied to enlarged image container element.         |
| `enlargedImageStyle`          | Object | No       |         | Style applied to enlarged image element.                   |

### Desktop Only
| Prop                          | Type   | Required | Default | Description                                                |
|-------------------------------|--------|----------|---------|------------------------------------------------------------|
| `hoverDelayInMs`              | Number | No       | 250     | Milliseconds to delay hover trigger.                       |
| `hoverOffDelayInMs`           | Number | No       | 150     | Milliseconds to delay hover-off trigger.                   |
| `lensStyle`                   | Object | No       |         | Style applied to tinted lens.                      |

### Touch Only
| Prop                          | Type   | Required | Default | Description                                                |
|-------------------------------|--------|----------|---------|------------------------------------------------------------|
| `isActivatedOnTouch`          | Boolean| No       | false   | Activate magnification immediately on touch.               |
| `pressDuration`               | Number | No       | 500     | Milliseconds to delay press activation (long touch).       |
| `pressMoveThreshold`          | Number | No       | 5       | Pixels of movement allowed during press activation         |

### Image Struct
```
{
    alt: String,
    src: String,
    width: Number,
    height: Number
}
```

## Support

Please [open an issue](https://github.com/ethanselzer/react-image-magnify/issues).

## Development

```ssh
git clone https://github.com/ethanselzer/react-image-magnify.git
cd react-image-magnify
npm install
```
See available commands:
```ssh
npm run
```

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch,
add commits, and [open a pull request](https://github.com/ethanselzer/react-image-magnify/compare/).

## License

MIT
