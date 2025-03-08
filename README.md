# jquery-cropper

[![Downloads](https://img.shields.io/npm/dm/jquery-cropper.svg)](https://www.npmjs.com/package/jquery-cropper) [![Version](https://img.shields.io/npm/v/jquery-cropper.svg)](https://www.npmjs.com/package/jquery-cropper) [![Gzip Size](https://img.shields.io/bundlephobia/minzip/jquery-cropper.svg)](https://unpkg.com/jquery-cropper/dist/jquery-cropper.common.js)

> A jQuery plugin wrapper for [Cropper.js 1.0](https://github.com/fengyuanchen/cropperjs/tree/v1).

- [Demo](https://fengyuanchen.github.io/jquery-cropper)

## Main npm package files

```text
dist/
├── jquery-cropper.js        (UMD)
├── jquery-cropper.min.js    (UMD, compressed)
├── jquery-cropper.common.js (CommonJS, default)
└── jquery-cropper.esm.js    (ES Module)
```

## Getting started

### Installation

```shell
npm install jquery-cropper jquery cropperjs@1
```

Include files:

```html
<script src="/path/to/jquery.js"></script><!-- jQuery is required -->
<script src="/path/to/cropper.js"></script><!-- Cropper.js is required -->
<link  href="/path/to/cropper.css" rel="stylesheet">
<script src="/path/to/jquery-cropper.js"></script>
```

### Usage

Initialize with `$.fn.cropper` method.

```html
<!-- Wrap the image or canvas element with a block element (container) -->
<div>
  <img id="image" src="picture.jpg">
</div>
```

```css
/* Limit image width to avoid overflow the container */
img {
  max-width: 100%; /* This rule is very important, please do not ignore this! */
}
```

```js
var $image = $('#image');

$image.cropper({
  aspectRatio: 16 / 9,
  crop: function(event) {
    console.log(event.detail.x);
    console.log(event.detail.y);
    console.log(event.detail.width);
    console.log(event.detail.height);
    console.log(event.detail.rotate);
    console.log(event.detail.scaleX);
    console.log(event.detail.scaleY);
  }
});

// Get the Cropper.js instance after initialized
var cropper = $image.data('cropper');
```

## Options

See the available [options](https://github.com/fengyuanchen/cropperjs/tree/v1#options) of Cropper.js.

```js
$().cropper(options);
```

## Methods

See the available [methods](https://github.com/fengyuanchen/cropperjs/tree/v1#methods) of Cropper.js.

```js
$().cropper('method', argument1, , argument2, ..., argumentN);
```

## Events

See the available [events](https://github.com/fengyuanchen/cropperjs/tree/v1#events) of Cropper.js.

```js
$().on('event', handler);
```

## No conflict

If you have to use other plugin with the same namespace, just call the `$.fn.cropper.noConflict` method to revert to it.

```html
<script src="other-plugin.js"></script>
<script src="jquery-cropper.js"></script>
<script>
  $.fn.cropper.noConflict();
  // Code that uses other plugin's "$().cropper" can follow here.
</script>
```

## Browser support

It is the same as the [browser support of Cropper.js](https://github.com/fengyuanchen/cropperjs/tree/v1#browser-support). As a jQuery plugin, you also need to see the [jQuery Browser Support](https://jquery.com/browser-support/).

## Contributing

Please read through our [contributing guidelines](CONTRIBUTING.md).

## Versioning

Maintained under the [Semantic Versioning guidelines](https://semver.org/).

## License

[MIT](https://opensource.org/licenses/MIT) © [Chen Fengyuan](https://chenfengyuan.com/)
