var Ibstrup = (function () {

	'use strict';

    /**
     * Create the constructor
     * @param {String} selector The selector to use
     */
    var Constructor = function (selector) {
      if (!selector) return;
      if (selector === 'document') {
        this.elems = [document];
      } else if (selector === 'window') {
        this.elems = [window];
      } else {
        this.elems = document.querySelectorAll(selector);
      }
    };

    /**
     * Do ajax stuff
     * @param  {String} url The URL to get
     */
    Constructor.prototype.ajax = function (url) {
      // Do some XHR/Fetch thing here
      console.log(url);
    };

    /**
     * Run a callback on each item
     * @param  {Function} callback The callback function to run
     */
    Constructor.prototype.each = function (callback) {
      if (!callback || typeof callback !== 'function') return;
      for (var i = 0; i < this.elems.length; i++) {
        callback(this.elems[i], i);
      }
      return this;
    };

    /**
     * Add a class to elements
     * @param {String} className The class name
     */
    Constructor.prototype.addClass = function (className) {
      this.each(function (item) {
        item.classList.add(className);
      });
      return this;
    };

    /**
     * Remove a class to elements
     * @param {String} className The class name
     */
    Constructor.prototype.removeClass = function (className) {
      this.each(function (item) {
        item.classList.remove(className);
      });
      return this;
    };

    /**
     * Instantiate a new constructor
     */
    var instantiate = function (selector) {
      return new Constructor(selector);
    };

    /**
     * Return the constructor instantiation
     */
    return instantiate;

})();