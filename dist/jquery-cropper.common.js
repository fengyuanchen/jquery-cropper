/*!
 * jQuery Cropper v1.0.1
 * https://fengyuanchen.github.io/jquery-cropper
 *
 * Copyright 2018-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2019-10-19T08:48:33.062Z
 */

'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var $ = _interopDefault(require('jquery'));
var Cropper = _interopDefault(require('cropperjs'));

if ($ && $.fn && Cropper) {
  var AnotherCropper = $.fn.cropper;
  var NAMESPACE = 'cropper';

  $.fn.cropper = function jQueryCropper(option) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var result;
    this.each(function (i, element) {
      var $element = $(element);
      var isDestroy = option === 'destroy';
      var cropper = $element.data(NAMESPACE);

      if (!cropper) {
        if (isDestroy) {
          return;
        }

        var options = $.extend({}, $element.data(), $.isPlainObject(option) && option);
        cropper = new Cropper(element, options);
        $element.data(NAMESPACE, cropper);
      }

      if (typeof option === 'string') {
        var fn = cropper[option];

        if ($.isFunction(fn)) {
          result = fn.apply(cropper, args);

          if (result === cropper) {
            result = undefined;
          }

          if (isDestroy) {
            $element.removeData(NAMESPACE);
          }
        }
      }
    });
    return result !== undefined ? result : this;
  };

  $.fn.cropper.Constructor = Cropper;
  $.fn.cropper.setDefaults = Cropper.setDefaults;

  $.fn.cropper.noConflict = function noConflict() {
    $.fn.cropper = AnotherCropper;
    return this;
  };
}
