'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/******/(function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/var installedModules = {};
  /******/
  /******/ // The require function
  /******/function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/if (installedModules[moduleId]) {
      /******/return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/var module = installedModules[moduleId] = {
      /******/i: moduleId,
      /******/l: false,
      /******/exports: {}
      /******/ };
    /******/
    /******/ // Execute the module function
    /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ // Flag the module as loaded
    /******/module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/__webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/__webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/__webpack_require__.d = function (exports, name, getter) {
    /******/if (!__webpack_require__.o(exports, name)) {
      /******/Object.defineProperty(exports, name, {
        /******/configurable: false,
        /******/enumerable: true,
        /******/get: getter
        /******/ });
      /******/
    }
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/__webpack_require__.n = function (module) {
    /******/var getter = module && module.__esModule ?
    /******/function getDefault() {
      return module['default'];
    } :
    /******/function getModuleExports() {
      return module;
    };
    /******/__webpack_require__.d(getter, 'a', getter);
    /******/return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/__webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/__webpack_require__.p = "";
  /******/
  /******/ // Load entry module and return exports
  /******/return __webpack_require__(__webpack_require__.s = 0);
  /******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports, __webpack_require__) {

  var mod = __webpack_require__(1);
  var slider = __webpack_require__(2);
  var hamburger = __webpack_require__(3);
  var blog = __webpack_require__(4);
  var scrollto = __webpack_require__(5);
  var animate = __webpack_require__(6);
  var paralax = __webpack_require__(7);
  var flip = __webpack_require__(8);
  var mailer = __webpack_require__(9);

  window.onload = function () {
    if (document.querySelector('.hero__arrow')) scrollto(animate, 700);
    if (document.querySelector('.paralax-container')) paralax();
    if (document.querySelector('.hamburger')) hamburger();
    if (document.querySelector('.container-blog')) blog();
    if (document.querySelector('.slider')) slider();
    if (document.querySelector('.flip')) flip();
    if (document.querySelector('.popout') && document.querySelector('.feedback-form')) mailer();
    if (document.querySelector('.about-contacts__map')) var map = new google.maps.Map(document.querySelector('.about-contacts__map'), {
      center: { lat: 48.575, lng: 35.09 },
      zoom: 17,
      scrollwheel: false,
      styles: [{ elementType: 'geometry', stylers: [{ color: '#ffffff' }] }, {
        featureType: 'landscape',
        elementType: 'labels',
        stylers: [{ visibility: 'off' }]
      }, {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#111111' }]
      }, { elementType: 'labels.text.fill', stylers: [{ color: '#a6a6a6' }] }, {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ color: '#eaeaea' }]
      }, {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#c2c2c2' }]
      }, {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: '#61dac9' }]
      }, {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#c2c2c2' }]
      }],
      disableDefaultUI: true
    });
  };

  /***/
},
/* 1 */
/***/function (module, exports) {

  module.exports = function (a) {
    console.log(a);
    console.log(a);
    console.log(a);
  };

  /***/
},
/* 2 */
/***/function (module, exports) {
  var Slider = function () {
    function Slider(link, data) {
      _classCallCheck(this, Slider);

      this.container = document.querySelector(link);
      this.inProgress = false;
      this.currentElementId = 0;
      this.defineProps();
      this.initData(data);
      this.insertData();
      this.initActiveEl();
      this.initActiveDesc();
      this.addHandlers();
    }

    _createClass(Slider, [{
      key: 'defineProps',
      value: function defineProps() {
        this.desc = {
          title: this.container.querySelector('.slider-desc-title'),
          tech: this.container.querySelector('.slider-desc-technologies'),
          link: this.container.querySelector('.slider-desc-link')
        };
        this.mainSlideContainer = this.container.querySelector('.slider-demo-list');
        this.controls = {
          up: {
            slideContainer: this.container.querySelector('.slider-controls-up .slider-controls-list'),
            button: this.container.querySelector('.slider-controls-up__button')
          },
          down: {
            slideContainer: this.container.querySelector('.slider-controls-down .slider-controls-list'),
            button: this.container.querySelector('.slider-controls-down__button')
          }
        };
      }
    }, {
      key: 'createElement',
      value: function createElement(liClass, imClass, imLink) {
        var li = document.createElement('li'),
            img = document.createElement('img');
        li.classList.add(liClass);
        img.setAttribute('src', imLink);
        img.classList.add(imClass);
        li.appendChild(img);
        return li;
      }
    }, {
      key: 'initData',
      value: function initData(data) {
        this.data = {
          mainList: [],
          upList: [],
          downList: []
        };
        //КОСТЫЛЬ
        this.json = data;
        //
        this.data.maxID = data.length - 1;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var obj = _step.value;

            this.data.mainList.push(this.createElement('slider-demo-list__item', 'slider-demo-list__img', obj.img));
            this.data.upList.push(this.createElement('slider-controls__item', 'slider-controls-list__img', obj.img));
            this.data.downList.push(this.createElement('slider-controls__item', 'slider-controls-list__img', obj.img));
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }, {
      key: 'insertData',
      value: function insertData() {
        for (var i = 0; i < this.data.mainList.length; ++i) {
          this.mainSlideContainer.appendChild(this.data.mainList[i]);
          this.controls.up.slideContainer.appendChild(this.data.upList[i]);
          this.controls.down.slideContainer.appendChild(this.data.downList[i]);
        }
      }
    }, {
      key: 'getSubIds',
      value: function getSubIds() {
        return [this.currentElementId == 0 ? this.data.maxID : this.currentElementId - 1, this.currentElementId == this.data.maxID ? 0 : this.currentElementId + 1];
      }
    }, {
      key: 'initActiveEl',
      value: function initActiveEl() {
        var _getSubIds = this.getSubIds(),
            _getSubIds2 = _slicedToArray(_getSubIds, 2),
            upID = _getSubIds2[0],
            downID = _getSubIds2[1];

        this.data.mainList[this.currentElementId].classList.add('slider-demo-list__item--active');
        this.data.upList[upID].classList.add('slider-controls__item--active');
        this.data.downList[downID].classList.add('slider-controls__item--active');
      }
    }, {
      key: 'removeActiveEl',
      value: function removeActiveEl() {
        var _getSubIds3 = this.getSubIds(),
            _getSubIds4 = _slicedToArray(_getSubIds3, 2),
            upID = _getSubIds4[0],
            downID = _getSubIds4[1];

        this.data.mainList[this.currentElementId].classList.remove('slider-demo-list__item--active');
        this.data.upList[upID].classList.remove('slider-controls__item--active');
        this.data.downList[downID].classList.remove('slider-controls__item--active');
      }
    }, {
      key: 'unlockSlider',
      value: function unlockSlider() {
        this.inProgress = false;
      }
    }, {
      key: 'createLetterElement',
      value: function createLetterElement(data, cl) {
        var words = data.split(' '),
            span = document.createElement('span'),
            wspan = void 0,
            lspan = void 0;

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = words[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var word = _step2.value;

            wspan = document.createElement('span');
            wspan.classList.add('span-white-space');
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = word[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var letter = _step3.value;

                lspan = document.createElement('span');
                lspan.classList.add(cl);
                lspan.innerText = letter;
                wspan.appendChild(lspan);
              }
            } catch (err) {
              _didIteratorError3 = true;
              _iteratorError3 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                  _iterator3.return();
                }
              } finally {
                if (_didIteratorError3) {
                  throw _iteratorError3;
                }
              }
            }

            span.appendChild(wspan);
            wspan = document.createElement('span');
            wspan.innerText = ' ';
            span.appendChild(wspan);
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        return span;
      }
    }, {
      key: 'initActiveDesc',
      value: function initActiveDesc() {
        function animate(array) {
          var delay = 500 / array.length;

          var _loop = function _loop(i) {
            setTimeout(function () {
              array[i].classList.add('slider-desc-title__letter--active');
            }, delay * i);
          };

          for (var i = 0; i < array.length; ++i) {
            _loop(i);
          }
        }

        var item = this.json[this.currentElementId];
        this.desc.link.setAttribute('href', item.link);

        this.desc.title.innerHTML = '';
        this.desc.tech.innerHTML = '';

        this.desc.title.appendChild(this.createLetterElement(item.title, 'slider-desc-title__letter'));

        this.desc.tech.appendChild(this.createLetterElement(item.tech, 'slider-desc-title__letter'));

        var title = this.desc.title.querySelectorAll('.slider-desc-title__letter'),
            tech = this.desc.tech.querySelectorAll('.slider-desc-title__letter');

        animate(title);
        animate(tech);
      }
    }, {
      key: 'processUp',
      value: function processUp() {
        var _this = this;

        if (this.inProgress) return false;
        this.inProgress = true;
        this.removeActiveEl();
        this.currentElementId == 0 ? this.currentElementId = this.data.maxID : this.currentElementId--;
        this.initActiveEl();
        this.initActiveDesc();
        setTimeout(function () {
          _this.unlockSlider();
        }, 600);
      }
    }, {
      key: 'processDown',
      value: function processDown() {
        var _this2 = this;

        if (this.inProgress) return false;
        this.inProgress = true;
        this.removeActiveEl();
        this.currentElementId == this.data.maxID ? this.currentElementId = 0 : this.currentElementId++;
        this.initActiveEl();
        this.initActiveDesc();
        setTimeout(function () {
          _this2.unlockSlider();
        }, 500);
      }
    }, {
      key: 'addHandlers',
      value: function addHandlers() {
        var _this3 = this;

        this.controls.up.button.addEventListener('click', function () {
          return _this3.processUp();
        });
        this.controls.down.button.addEventListener('click', function () {
          return _this3.processDown();
        });
      }
    }]);

    return Slider;
  }();

  module.exports = function () {
    var data = [{
      title: 'Сайт школы онлайн образования',
      tech: 'hmtl,css,javascript,1',
      link: '#first',
      img: './img/works/work-1.png'
    }, {
      title: 'Агенство интернет-решений',
      tech: 'hmtl,css,javascript,2',
      link: '#second',
      img: './img/works/work-2.png'
    }, {
      title: 'Портал видеоуроков и ИТ сообщество',
      tech: 'hmtl,css,javascript,3',
      link: '#third',
      img: './img/works/work-3.png'
    }, {
      title: 'Йога студия',
      tech: 'hmtl,css,javascript,4',
      link: '#fourth',
      img: './img/works/work-4.png'
    }];

    new Slider('.slider', data);
  };

  /***/
},
/* 3 */
/***/function (module, exports) {

  function activate(e) {
    var container = document.querySelector('.hamburger-menu'),
        bgl = container.querySelector('.hamburger__bg-left'),
        bgr = container.querySelector('.hamburger__bg-right'),
        list = container.querySelector('.hamburger-menu__list'),
        items = container.querySelectorAll('.hamburger-menu__item');

    container.classList.add('hamburger-menu--active');

    setTimeout(function () {
      bgl.classList.add('hamburger__bg-left--active');
      bgr.classList.add('hamburger__bg-right--active');
      list.classList.add('hamburger-menu__list--active');

      var delay = 1000 / items.length;

      var _loop2 = function _loop2(i) {
        setTimeout(function () {
          items[i].classList.add('hamburger-menu__item--active');
        }, delay * i + 2);
      };

      for (var i = 0; i < items.length; ++i) {
        _loop2(i);
      }
    }, 100);
  }

  function close(e) {
    var container = document.querySelector('.hamburger-menu'),
        bgl = container.querySelector('.hamburger__bg-left'),
        bgr = container.querySelector('.hamburger__bg-right'),
        list = container.querySelector('.hamburger-menu__list'),
        items = container.querySelectorAll('.hamburger-menu__item');

    var delay = 500 / items.length;

    var _loop3 = function _loop3(i) {
      setTimeout(function () {
        var index = items.length - i - 1;
        items[index].classList.remove('hamburger-menu__item--active');

        if (i == items.length - 1) {
          bgl.classList.remove('hamburger__bg-left--active');
          bgr.classList.remove('hamburger__bg-right--active');
          list.classList.remove('hamburger-menu__list--active');
          setTimeout(function () {
            container.classList.remove('hamburger-menu--active');
          }, 300);
        }
      }, delay * i + 2);
    };

    for (var i = 0; i < items.length; ++i) {
      _loop3(i);
    }
  }

  module.exports = function () {
    var cl = document.querySelector('.hamburger-menu__close'),
        open = document.querySelector('.hamburger');

    open.addEventListener('click', activate);
    cl.addEventListener('click', close);
  };

  /***/
},
/* 4 */
/***/function (module, exports) {
  var Blog = function () {
    function Blog(link, data) {
      _classCallCheck(this, Blog);

      this.data = {
        posts: [],
        menuItems: [],
        active: 0,
        max: 0
      };

      this.buildElementsStruct(data);
      this.drawBlog(link);
      this.initialActiveState();
      this.initScrollListener();
      this.initButtonListener(link);
    }

    _createClass(Blog, [{
      key: 'buildElementsStruct',
      value: function buildElementsStruct(data) {
        for (var i = 0; i < data.length; ++i) {
          this.data.posts.push(this.createPost(data[i]));
          this.data.menuItems.push(this.createMenuItem(data[i].title, i));
        }
        this.data.max = this.data.menuItems.length;
      }
    }, {
      key: 'createPost',
      value: function createPost(post) {
        var blogPost = document.createElement('div'),
            blogPostTitle = document.createElement('div'),
            blogPostDate = document.createElement('div'),
            blogPostContent = document.createElement('div'),
            blogPostTitleH1 = document.createElement('h1');

        blogPost.classList.add('blog-post');
        blogPostTitle.classList.add('blog-post__title');
        blogPostDate.classList.add('blog-post__date');
        blogPostContent.classList.add('blog-post__content');
        blogPostTitleH1.classList.add('block-title');

        blogPostTitleH1.innerText = post.title;
        blogPostDate.innerText = post.date;

        blogPostTitle.appendChild(blogPostTitleH1);
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = post.text[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var paragraph = _step4.value;

            var p = document.createElement('p');
            p.innerText = paragraph;
            blogPostContent.appendChild(p);
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4.return) {
              _iterator4.return();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }

        blogPost.appendChild(blogPostTitle);
        blogPost.appendChild(blogPostDate);
        blogPost.appendChild(blogPostContent);

        return blogPost;
      }
    }, {
      key: 'createMenuItem',
      value: function createMenuItem(title, num) {
        var item = document.createElement('li'),
            link = document.createElement('a');

        item.classList.add('blog-menu__item');
        link.setAttribute('href', num);
        link.classList.add('blog-menu__link');
        link.innerText = title;

        item.appendChild(link);

        return item;
      }
    }, {
      key: 'createMenu',
      value: function createMenu(list) {
        var blogMenu = document.createElement('ul'),
            button = document.createElement('div');
        button.classList.add('blog-menu-tablet-button');
        blogMenu.classList.add('blog-menu');
        var _iteratorNormalCompletion5 = true;
        var _didIteratorError5 = false;
        var _iteratorError5 = undefined;

        try {
          for (var _iterator5 = list[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var menuItem = _step5.value;

            blogMenu.appendChild(menuItem);
          }
        } catch (err) {
          _didIteratorError5 = true;
          _iteratorError5 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion5 && _iterator5.return) {
              _iterator5.return();
            }
          } finally {
            if (_didIteratorError5) {
              throw _iteratorError5;
            }
          }
        }

        blogMenu.appendChild(button);

        return blogMenu;
      }
    }, {
      key: 'drawBlog',
      value: function drawBlog(link) {
        var menuContainer = document.createElement('div'),
            postsContainer = document.createElement('div');

        menuContainer.classList.add('blog-nav');
        postsContainer.classList.add('posts');

        menuContainer.appendChild(this.createMenu(this.data.menuItems));
        var _iteratorNormalCompletion6 = true;
        var _didIteratorError6 = false;
        var _iteratorError6 = undefined;

        try {
          for (var _iterator6 = this.data.posts[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
            var post = _step6.value;

            postsContainer.appendChild(post);
          }
        } catch (err) {
          _didIteratorError6 = true;
          _iteratorError6 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion6 && _iterator6.return) {
              _iterator6.return();
            }
          } finally {
            if (_didIteratorError6) {
              throw _iteratorError6;
            }
          }
        }

        var box = document.querySelector(link);
        box.appendChild(menuContainer);
        box.appendChild(postsContainer);
      }
    }, {
      key: 'initialActiveState',
      value: function initialActiveState() {
        this.data.menuItems[this.data.active].classList.add('blog-menu__item--active');
      }
    }, {
      key: 'movableMenu',
      value: function movableMenu(container, menu) {
        if (container.getBoundingClientRect().top < 0) {
          if (!menu.classList.contains('blog-menu--scroll-active')) {
            menu.classList.add('blog-menu--scroll-active');
            menu.querySelector('.blog-menu-tablet-button').classList.add('blog-menu-tablet-button--active');
          }
        } else {
          if (menu.classList.contains('blog-menu--scroll-active')) {
            menu.classList.remove('blog-menu--scroll-active');
            menu.querySelector('.blog-menu-tablet-button').classList.remove('blog-menu-tablet-button--active');
          }
        }
      }
    }, {
      key: 'processScroll',
      value: function processScroll() {
        var container = document.querySelector('.blog-nav');
        var elem = document.querySelector('.blog-menu');

        //Если блок пропал - не обрабатывать
        if (getComputedStyle(container).display != 'none') {
          //Двигаем меню
          this.movableMenu(container, elem);
        }

        if (this.data.posts[this.data.active].getBoundingClientRect().top + 200 > 0 && this.data.active - 1 >= 0) {
          this.data.menuItems[this.data.active].classList.remove('blog-menu__item--active');
          this.data.active--;
          this.data.menuItems[this.data.active].classList.add('blog-menu__item--active');
        }

        if (this.data.active + 1 <= this.data.max && this.data.posts[this.data.active + 1].getBoundingClientRect().top - 400 <= 0) {
          this.data.menuItems[this.data.active].classList.remove('blog-menu__item--active');
          this.data.active++;
          this.data.menuItems[this.data.active].classList.add('blog-menu__item--active');
        }
      }
    }, {
      key: 'initScrollListener',
      value: function initScrollListener() {
        var _this4 = this;

        window.addEventListener('scroll', function (e) {
          return _this4.processScroll();
        });
      }
    }, {
      key: 'linkListener',
      value: function linkListener(e) {
        this.data.posts[parseInt(e.target.getAttribute('href'))].scrollIntoView();
      }
    }, {
      key: 'initButtonListener',
      value: function initButtonListener(link) {
        var _this5 = this;

        document.querySelector('.blog-menu-tablet-button').addEventListener('click', function (e) {
          var menu = document.querySelector('.blog-menu');
          menu.classList.toggle('blog-menu--open');
          e.stopPropagation();
        });

        document.querySelector(link).addEventListener('click', function () {
          var menu = document.querySelector('.blog-menu');
          if (menu.classList.contains('blog-menu--open')) menu.classList.remove('blog-menu--open');
        });

        var _iteratorNormalCompletion7 = true;
        var _didIteratorError7 = false;
        var _iteratorError7 = undefined;

        try {
          for (var _iterator7 = this.data.menuItems[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
            var _link = _step7.value;

            var a = _link.querySelector('.blog-menu__link');
            a.addEventListener('click', function (e) {
              e.preventDefault();
              _this5.linkListener(e);
            });
          }
        } catch (err) {
          _didIteratorError7 = true;
          _iteratorError7 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion7 && _iterator7.return) {
              _iterator7.return();
            }
          } finally {
            if (_didIteratorError7) {
              throw _iteratorError7;
            }
          }
        }
      }
    }]);

    return Blog;
  }();

  module.exports = function () {
    var data = [{
      title: 'Самое важное в SASS',
      date: '22 ноября 2016',
      text: ['Таким образом начало повседневной работы по формированию позиции позволяет выполнять важные задания по разработке направлений прогрессивного развития. Разнообразный и богатый опыт новая модель организационной деятельности играет важную роль в формировании новых предложений. Товарищи! Новая модель организационной деятельности играет важную роль в формировании систем массового участия.', 'Не следует, однако забывать, что укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия. Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленых задач. Тавариши! Постоянный количественный рост и сфера нашей активности способствует подготовке и реализации модели развития. С другой стороны рамки и место обучения кадров влечет за собой процесс внедрения и модернизации системы обучения кадров, соответсвует насущным потребностям.']
    }, {
      title: 'Приёмы в верстке, без которых не обходится ни один сайт',
      date: '13 ноября 2016',
      text: ['Таким образом начало повседневной работы по формированию позиции позволяет выполнять важные задания по разработке направлений прогрессивного развития. Разнообразный и богатый опыт новая модель организационной деятельности играет важную роль в формировании новых предложений. Товарищи! Новая модель организационной деятельности играет важную роль в формировании систем массового участия.', 'Не следует, однако забывать, что укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия. Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленых задач. Тавариши! Постоянный количественный рост и сфера нашей активности способствует подготовке и реализации модели развития. С другой стороны рамки и место обучения кадров влечет за собой процесс внедрения и модернизации системы обучения кадров, соответсвует насущным потребностям.']
    }, {
      title: 'Приёмы в верстке, без которых не обходится ни один сайт',
      date: '13 ноября 2016',
      text: ['Таким образом начало повседневной работы по формированию позиции позволяет выполнять важные задания по разработке направлений прогрессивного развития. Разнообразный и богатый опыт новая модель организационной деятельности играет важную роль в формировании новых предложений. Товарищи! Новая модель организационной деятельности играет важную роль в формировании систем массового участия.', 'Не следует, однако забывать, что укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия. Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленых задач. Тавариши! Постоянный количественный рост и сфера нашей активности способствует подготовке и реализации модели развития. С другой стороны рамки и место обучения кадров влечет за собой процесс внедрения и модернизации системы обучения кадров, соответсвует насущным потребностям.']
    }, {
      title: 'Приёмы в верстке, без которых не обходится ни один сайт',
      date: '13 ноября 2016',
      text: ['Таким образом начало повседневной работы по формированию позиции позволяет выполнять важные задания по разработке направлений прогрессивного развития. Разнообразный и богатый опыт новая модель организационной деятельности играет важную роль в формировании новых предложений. Товарищи! Новая модель организационной деятельности играет важную роль в формировании систем массового участия.', 'Не следует, однако забывать, что укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия. Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленых задач. Тавариши! Постоянный количественный рост и сфера нашей активности способствует подготовке и реализации модели развития. С другой стороны рамки и место обучения кадров влечет за собой процесс внедрения и модернизации системы обучения кадров, соответсвует насущным потребностям.']
    }];

    new Blog('.container-blog', data);
  };

  /***/
},
/* 5 */
/***/function (module, exports) {

  module.exports = function (animate, duration) {
    var link = document.querySelector('.hero__arrow');

    link.addEventListener('click', function (e) {
      e.preventDefault();
      if (!e.currentTarget.classList.contains('hero__arrow')) {
        return false;
      }
      var target = document.getElementById(e.currentTarget.getAttribute('href').slice(1)),
          offset = target.getBoundingClientRect().top,
          baseOffset = window.pageYOffset,
          x = offset / duration;

      function scroll(step) {
        document.documentElement.scrollTop = baseOffset + step * x;
        document.body.scrollTop = baseOffset + step * x;
      }

      animate(scroll, duration);
    });
  };

  /***/
},
/* 6 */
/***/function (module, exports) {

  module.exports = function (draw, duration) {
    var start = performance.now();

    requestAnimationFrame(function animate(time) {
      var timePassed = time - start;

      if (timePassed > duration) timePassed = duration;

      draw(timePassed);

      if (timePassed < duration) {
        requestAnimationFrame(animate);
      }
    });
  };

  /***/
},
/* 7 */
/***/function (module, exports) {

  module.exports = function () {
    var container = document.querySelector('.welcome-wrap');
    if (getComputedStyle(container).zIndex == '201') {
      return false;
    }

    var parallaxContainer = document.querySelector('.paralax-container'),
        layers = parallaxContainer.children;
    parallaxContainer.setAttribute('data-loaded', '0');

    var path = './img/paralax-min/',
        imageLinks = [path + 'Layer-7-min.png', path + 'Layer-6-min.png', path + 'Layer-5-min.png', path + 'cloud3-min.png', path + 'Layer-4-min.png', path + 'Layer-3-min.png', path + 'cloud2-min.png', path + 'Layer-2-min.png', path + 'Layer-1-min.png', path + 'cloud1-min.png'];

    for (var i = 0; i < layers.length; ++i) {
      var image = layers[i].firstElementChild;
      image.setAttribute('src', imageLinks[i]);
      image.onload = function () {
        var container = document.querySelector('.paralax-container'),
            loaded = parseInt(container.getAttribute('data-loaded'));
        loaded++;
        container.setAttribute('data-loaded', loaded);
        container.classList.add('paralax-container--after-' + loaded);
        var l = loaded - 1;
        container.classList.remove('paralax-container--after-' + l);
        if (loaded == 10) {
          setTimeout(function () {
            document.querySelector('.welcome-wrap').classList.remove('background-tablets');
            container.classList.remove('paralax-container--after-10');
          }, 300);
        }
      };
    }

    var moveLayers = function moveLayers(e) {
      var initialX = window.innerWidth / 2 - e.pageX;
      var initialY = window.innerHeight / 2 - e.pageY;

      [].slice.call(layers).forEach(function (layer, index) {
        var divider = index / 50,
            positionX = initialX * divider,
            positionY = initialY * divider,
            bottomPosition = window.innerHeight / 2 * divider,
            transformString = 'translate3d(' + positionX + 'px,' + positionY + 'px, 0)',
            image = layer.firstElementChild;

        layer.style.transform = transformString;
        image.style.bottom = '-' + bottomPosition + 'px';
      });
    };

    window.addEventListener('mousemove', moveLayers);
  };

  /***/
},
/* 8 */
/***/function (module, exports) {

  module.exports = function () {
    var link = document.querySelector('.auth-button');
    var back = document.querySelector('.auth__back-link');

    link.addEventListener('click', function (e) {
      e.preventDefault();
      var flip = document.querySelector('.flip'),
          welcome = document.querySelector('.welcome'),
          auth = document.querySelector('.auth');

      flip.classList.toggle('flip--active');
      setTimeout(function () {
        welcome.classList.toggle('welcome--active');
        auth.classList.toggle('auth--active');
      }, 250);

      e.target.style.display = 'none';
    });

    back.addEventListener('click', function (e) {
      e.preventDefault();
      var flip = document.querySelector('.flip'),
          welcome = document.querySelector('.welcome'),
          auth = document.querySelector('.auth');

      flip.classList.toggle('flip--active');
      setTimeout(function () {
        welcome.classList.toggle('welcome--active');
        auth.classList.toggle('auth--active');
      }, 250);

      document.querySelector('.auth-button').style.display = 'block';
    });
  };

  /***/
},
/* 9 */
/***/function (module, exports) {

  function validate() {
    var form = document.querySelector('.feedback-form'),
        name = form.querySelector('.feedback-form__input[name="name"]'),
        mail = form.querySelector('.feedback-form__input[name="mail"]'),
        text = form.querySelector('.feedback-form__input[name="text"]');
    var valid = true;
    if (name.value.length < 1 || name.value == 'Заполните поле') {
      error(name, 'Заполните поле');
      valid = false;
    }
    if (name.value.length > 100) {
      error(name, 'Слишком длинное имя');
      valid = false;
    }
    if (text.value.length < 1 || text.value == 'Заполните поле') {
      error(text, 'Заполните поле');
      valid = false;
    }
    if (text.value.length > 400) {
      error(text, 'Слишком длинное сообщение, максимальная длина - 400 символов');
      valid = false;
    }

    if (mail.value.length < 1 || mail.value == 'Заполните поле') {
      error(mail, 'Заполните поле');
      valid = false;
    } else {
      var email = mail.value;
      email = email.split('@');
      if (email.length != 2) {
        error(mail, 'Некорректно указан адрес, нет "@"');
        valid = false;
      } else {
        if (email[1][email[1].length - 1] == '.') {
          error(mail, 'Адрес не может оканчиваться на "."');
          valid = false;
        }
        if (email[1].split('.').length != 2) {
          error(mail, 'Некорректно указан адрес почты');
          valid = false;
        }
      }
    }

    return valid;
  }
  function error(elem, msg) {
    if (!elem.classList.contains('feedback-form__input--error')) {
      elem.classList.add('feedback-form__input--error');
      elem.value = msg;
    }
  }
  function refresh() {
    var form = document.querySelector('.feedback-form'),
        name = form.querySelector('.feedback-form__input[name="name"]'),
        mail = form.querySelector('.feedback-form__input[name="mail"]'),
        text = form.querySelector('.feedback-form__input[name="text"]');
    if (name.classList.contains('feedback-form__input--error')) {
      name.classList.remove('feedback-form__input--error');
    }
    if (mail.classList.contains('feedback-form__input--error')) {
      mail.classList.remove('feedback-form__input--error');
    }
    if (text.classList.contains('feedback-form__input--error')) {
      text.classList.remove('feedback-form__input--error');
    }
    text.value = '';
    name.value = '';
    mail.value = '';
  }
  function refreshElem(e) {
    if (e.target.classList.contains('feedback-form__input--error')) {
      e.target.classList.remove('feedback-form__input--error');
      e.target.value = '';
    }
  }

  function send(e) {
    e.preventDefault();
    if (validate()) {
      var form = document.querySelector('.feedback-form');
      var xhr = new XMLHttpRequest(),
          data = {
        name: form.name.value,
        mail: form.mail.value,
        text: form.text.value
      };
      xhr.open('POST', '/works/email', true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.onload = function (oEvent) {
        if (xhr.status == 200) {
          showpop('Сообщение отправлено');
          console.log('отправлено');
        } else {
          showpop('Ошибка ' + xhr.status + '. Неудалось отправить сообщение.');
          console.log('не отправлено');
        }
      };
      xhr.send(JSON.stringify(data));
    }
  }
  function showpop(msg) {
    var popoutBlock = document.querySelector('.popout'),
        popoutContainer = document.querySelector('.popout__container');
    var popoutContent = document.querySelector('.popout__content');
    popoutContent.innerHTML = msg;
    popoutBlock.classList.add('popout--active');
    setTimeout(function () {
      popoutBlock.classList.add('popout--active2');
      setTimeout(function () {
        popoutContainer.classList.add('popout__container--active');
      }, 300);
    }, 50);
  }
  function closepop() {
    var popoutBlock = document.querySelector('.popout'),
        popoutContainer = document.querySelector('.popout__container');
    var popoutContent = document.querySelector('.popout__content');
    popoutContainer.classList.remove('popout__container--active');
    setTimeout(function () {
      popoutBlock.classList.remove('popout--active2');
      setTimeout(function () {
        popoutBlock.classList.remove('popout--active');
      }, 150);
    }, 300);
  }
  module.exports = function () {
    var form = document.querySelector('.feedback-form'),
        name = form.querySelector('.feedback-form__input[name="name"]'),
        mail = form.querySelector('.feedback-form__input[name="mail"]'),
        text = form.querySelector('.feedback-form__input[name="text"]'),
        close = document.querySelector('.popout__close');

    refresh();
    close.addEventListener('click', closepop);
    name.addEventListener('click', refreshElem);
    mail.addEventListener('click', refreshElem);
    text.addEventListener('click', refreshElem);

    document.querySelector('.feedback-form').addEventListener('submit', send);
  };

  /***/
}]
/******/);