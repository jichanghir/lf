!function(n){function e(t){if(r[t])return r[t].exports;var i=r[t]={i:t,l:!1,exports:{}};return n[t].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var r={};e.m=n,e.c=r,e.d=function(n,r,t){e.o(n,r)||Object.defineProperty(n,r,{configurable:!1,enumerable:!0,get:t})},e.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(r,"a",r),r},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="",e(e.s=0)}([function(module,exports,__webpack_require__){eval("__webpack_require__(1);\n__webpack_require__(2);\n__webpack_require__(3);\n__webpack_require__(4);\n__webpack_require__(5);\n__webpack_require__(6);\n__webpack_require__(7);\n__webpack_require__(8);\n__webpack_require__(9);\nmodule.exports = __webpack_require__(10);\n\n\n//////////////////\n// WEBPACK FOOTER\n// multi ./public/source/js/blog.js ./public/source/js/flipper.js ./public/source/js/gossip-slider.js ./public/source/js/hamburger.js ./public/source/js/main.js ./public/source/js/parallax-scroll.js ./public/source/js/parallax.js ./public/source/js/preloader.js ./public/source/js/skills.js ./public/source/js/works-slider.js\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///multi_./public/source/js/blog.js_./public/source/js/flipper.js_./public/source/js/gossip-slider.js_./public/source/js/hamburger.js_./public/source/js/main.js_./public/source/js/parallax-scroll.js_./public/source/js/parallax.js_./public/source/js/preloader.js_./public/source/js/skills.js_./public/source/js/works-slider.js?")},function(module,exports,__webpack_require__){"use strict";eval("\n\n$(function () {\n    var WIN = window;\n    var DOC = document;\n    var $articles = $('.blog__article');\n    var articles = $articles.toArray();\n    var $articlesList = $('#blog__article-list');\n    var $articleTitles = $('#blog__article-titles');\n    var activeArticleId = null;\n\n    function getCoords(elem) {\n        var box = elem.getBoundingClientRect();\n\n        return {\n            top: box.top + pageYOffset,\n            left: box.left + pageXOffset\n        };\n    }\n\n    function setArticleActive() {\n        function setActive(artcl) {\n            if (artcl.dataset.idtitle !== activeArticleId) {\n                $('.blog__article-title').removeClass('active');\n                $('#' + artcl.dataset.idtitle).addClass('active');\n                activeArticleId = artcl.dataset.idtitle;\n            }\n        }\n\n        if (WIN.pageYOffset < getCoords(articles[0]).top) {\n            setActive(articles[0]);\n        } else if (WIN.pageYOffset + WIN.innerHeight === DOC.body.offsetHeight) {\n            setActive(articles[articles.length - 1]);\n        } else {\n            articles.forEach(function (article) {\n                var elemTop = getCoords(article).top;\n                if (WIN.pageYOffset > elemTop - 150) {\n                    setActive(article);\n                }\n            });\n        }\n    }\n\n    function setArticleChords() {\n        var elemChords = getCoords($articleTitles[0]);\n\n        if (WIN.pageYOffset >= elemChords.top - 30) {\n\n            $articlesList.css({\n                'position': 'fixed',\n                'top': 30 + 'px',\n                'left': elemChords.left + 'px'\n            });\n        } else {\n            $articlesList.css({\n                'position': 'static'\n            });\n        }\n    }\n\n    if ($articlesList.length && $articles.length) {\n        $articlesList.css({\n            'width': $articlesList.outerWidth()\n        });\n\n        // выполниться только тогда когда будет действия скроллинг\n        $(WIN).scroll(function () {\n            WIN.screen.width >= 1200 && setArticleChords();\n            setArticleActive();\n        });\n\n        // выполниться при загрузке кода\n        WIN.screen.width >= 1200 && setArticleChords();\n        setArticleActive();\n\n        if (WIN.screen.width < 1200) {\n            $('#blog__article-adaptive-btn').on('click', function () {\n                $('#blog__article-titles').toggleClass('adaptive-show');\n            });\n            $('body').on('click', function (e) {\n                if (!$(e.target).closest('#blog__article-titles').length || $(e.target).hasClass('blog__article-link')) {\n                    $('#blog__article-titles').removeClass('adaptive-show');\n                }\n            });\n        }\n    }\n});\n\n//////////////////\n// WEBPACK FOOTER\n// ./public/source/js/blog.js\n// module id = 1\n// module chunks = 0\n\n//# sourceURL=webpack:///./public/source/js/blog.js?")},function(module,exports,__webpack_require__){"use strict";eval("\n\n{\n    var DOC = document;\n    var WIN = window;\n\n    var flipper = DOC.getElementById('flipper');\n    if (flipper) {\n        DOC.addEventListener('DOMContentLoaded', function () {\n            var flipperRotate = DOC.getElementsByClassName('flipper-rotate');\n\n            if (flipperRotate.length) {\n                for (var i = 0; i < flipperRotate.length; i++) {\n                    flipperRotate[i].addEventListener('click', function (e) {\n                        e.preventDefault();\n                        flipper.classList.toggle('rotate');\n                    });\n                }\n            }\n\n            DOC.getElementsByTagName('body')[0].addEventListener('click', function (e) {\n                if (!e.target.closest('#flipper') && !e.target.closest('.flipper-rotate')) {\n                    if (flipper.classList.contains('rotate')) {\n                        flipper.classList.remove('rotate');\n                    }\n                }\n            });\n        });\n    }\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./public/source/js/flipper.js\n// module id = 2\n// module chunks = 0\n\n//# sourceURL=webpack:///./public/source/js/flipper.js?")},function(module,exports,__webpack_require__){"use strict";eval("\n\n$(function () {\n    var slideToShow = 1;\n    if ($(document).width() >= 768) {\n        slideToShow = 2;\n    }\n    $('#gossip-slider').slick({\n        infinite: true,\n        arrows: false,\n        speed: 500,\n        cssEase: 'linear',\n        autoplay: true,\n        slidesToShow: slideToShow\n    });\n});\n\n//////////////////\n// WEBPACK FOOTER\n// ./public/source/js/gossip-slider.js\n// module id = 3\n// module chunks = 0\n\n//# sourceURL=webpack:///./public/source/js/gossip-slider.js?")},function(module,exports,__webpack_require__){"use strict";eval("\n\n$(function () {\n    var isOn = false;\n    var hamToggle = $('#ham-toggle');\n    var hamburgerMenu = $('#hamburger-menu');\n    var hamburgerMenuBg = $('#hamburger-menu-bg');\n    var bgScrollParallax = $('.bg-scroll-parallax');\n\n    var hide = function hide() {\n        hamToggle.removeClass(\"on\");\n        hamburgerMenu.removeClass(\"on\");\n        hamburgerMenuBg.removeClass(\"on\");\n        hamburgerMenuBg.addClass(\"off\");\n        bgScrollParallax.css('overflowY', 'auto');\n        isOn = false;\n    };\n\n    $('body').on('click', function (e) {\n\n        if ($(e.target).closest('#ham-toggle').length) {\n            if (!isOn) {\n                hamToggle.addClass(\"on\");\n                hamburgerMenu.addClass(\"on\");\n                hamburgerMenuBg.addClass(\"on\");\n                hamburgerMenuBg.removeClass(\"off\");\n                bgScrollParallax.css('overflowY', 'hidden');\n                isOn = true;\n            } else {\n                if (isOn) {\n                    hide();\n                }\n            }\n        } else if (!$(e.target).closest('.hamburger-menu__list').length) {\n            if (isOn) {\n                hide();\n            }\n        }\n    });\n});\n\n//////////////////\n// WEBPACK FOOTER\n// ./public/source/js/hamburger.js\n// module id = 4\n// module chunks = 0\n\n//# sourceURL=webpack:///./public/source/js/hamburger.js?")},function(module,exports,__webpack_require__){"use strict";eval("\n\n$(function () {\n    var destination = $('#top-section').outerHeight();\n\n    $('body').on('click', function (e) {\n        if ($(e.target).closest('#top-section__down').length) {\n            $('html, body').animate({ scrollTop: destination }, 700);\n        }\n    });\n});\n\n//////////////////\n// WEBPACK FOOTER\n// ./public/source/js/main.js\n// module id = 5\n// module chunks = 0\n\n//# sourceURL=webpack:///./public/source/js/main.js?")},function(module,exports,__webpack_require__){"use strict";eval("\n\n{\n    var DOC = document;\n    var WIN = window;\n\n    if (WIN.screen.width >= 1200) {\n        var parallaxContainer = DOC.getElementById('bg-parallax-scroll');\n        var topSection = DOC.getElementById('top-section');\n\n        var docHeight = DOC.documentElement.clientHeight > 550 ? DOC.documentElement.clientHeight : 550;\n\n        if (topSection) {\n            topSection.style.backgroundImage = 'none';\n        }\n\n        if (parallaxContainer) {\n            var layers = parallaxContainer.children;\n\n            var moveLayers = function moveLayers(e) {\n                [].slice.call(layers).forEach(function (layer, index) {\n                    var scrollVal = 0 - WIN.pageYOffset * (index / 10);\n\n                    var transformString = 'translateY(' + scrollVal + 'px)';\n                    layer.style.transform = transformString;\n                });\n            };\n\n            WIN.addEventListener('scroll', moveLayers);\n\n            DOC.addEventListener('DOMContentLoaded', function () {\n                [].slice.call(layers).forEach(function (layer, index) {\n                    var img = layer.children;\n                    img[0].setAttribute('src', '/images/parallax/lr' + (index + 1) + '.png');\n\n                    var height = docHeight * 2;\n                    layer.firstElementChild.style.height = height + 'px';\n                });\n            });\n        }\n    }\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./public/source/js/parallax-scroll.js\n// module id = 6\n// module chunks = 0\n\n//# sourceURL=webpack:///./public/source/js/parallax-scroll.js?")},function(module,exports,__webpack_require__){"use strict";eval("\n\n{\n    var DOC = document;\n    var WIN = window;\n\n    if (WIN.screen.width >= 1200) {\n\n        var parallaxContainer = DOC.getElementById('bg-parallax');\n        if (parallaxContainer) {\n            var layers = parallaxContainer.children;\n\n            var moveLayers = function moveLayers(e) {\n                var initialX = window.innerWidth / 2 - e.pageX;\n                var initialY = window.innerHeight / 2 - e.pageY;\n\n                [].slice.call(layers).forEach(function (layer, index) {\n                    var divider = index / 100;\n                    var posX = initialX * divider;\n                    var posY = initialY * divider;\n\n                    var transformString = 'translate(' + posX + 'px, ' + posY + 'px)';\n                    layer.style.transform = transformString;\n                });\n            };\n\n            WIN.addEventListener('mousemove', moveLayers);\n\n            DOC.addEventListener('DOMContentLoaded', function () {\n                [].slice.call(layers).forEach(function (layer, index) {\n                    var img = layer.children;\n                    img[0].setAttribute('src', '/images/parallax/lr' + (index + 1) + '.png');\n\n                    var width = DOC.documentElement.clientWidth * 1.2;\n                    layer.firstElementChild.style.width = width + 'px';\n                });\n            });\n        }\n    }\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./public/source/js/parallax.js\n// module id = 7\n// module chunks = 0\n\n//# sourceURL=webpack:///./public/source/js/parallax.js?")},function(module,exports,__webpack_require__){"use strict";eval("\n\nvar preloader = function () {\n    var percentTotal = 0,\n        preloader = $('#preloader');\n\n    var imgPath = $('*').map(function (index, element) {\n        var bg = $(element).css('background-image');\n        var img = $(element).is('img');\n        var path = void 0;\n\n        if (bg !== 'none') {\n            path = bg.replace('url(\"', '').replace('\")', '');\n        }\n\n        if (img) {\n            path = $(element).attr('src');\n        }\n        return path;\n    });\n\n    var setPercent = function setPercent(total, current) {\n        var percents = Math.ceil(current / total * 100);\n\n        $('#preloader__percent').text(percents + '%');\n\n        if (percents >= 100) {\n            preloader.fadeOut();\n        }\n    };\n\n    var loadImages = function loadImages(images) {\n        if (!images.length) {\n            preloader.fadeOut();\n        } else {\n            images.forEach(function (img) {\n                var fakeImg = $('<img>', {\n                    attr: {\n                        src: img\n                    }\n                });\n\n                fakeImg.on('load error', function () {\n                    percentTotal++;\n                    setPercent(images.length, percentTotal);\n                });\n            });\n        }\n    };\n\n    return {\n        init: function init() {\n            var imgs = imgPath.toArray();\n\n            loadImages(imgs);\n        }\n    };\n}();\n\n$(function () {\n    preloader.init();\n});\n\n//////////////////\n// WEBPACK FOOTER\n// ./public/source/js/preloader.js\n// module id = 8\n// module chunks = 0\n\n//# sourceURL=webpack:///./public/source/js/preloader.js?")},function(module,exports,__webpack_require__){"use strict";eval("\n\n$(function () {\n    var WIN = window;\n    var $skills = $('.skills');\n\n    function getCoords(elem) {\n        var box = elem.getBoundingClientRect();\n\n        return {\n            top: box.top + pageYOffset,\n            left: box.left + pageXOffset\n        };\n    }\n\n    if ($skills.length) {\n        var elemTop = getCoords($skills[0]).top;\n\n        $(WIN).scroll(function () {\n\n            var h = WIN.pageYOffset + WIN.innerHeight;\n\n            if (h > elemTop + 200) {\n                $skills.removeClass('clear');\n            }\n        });\n    }\n});\n\n//////////////////\n// WEBPACK FOOTER\n// ./public/source/js/skills.js\n// module id = 9\n// module chunks = 0\n\n//# sourceURL=webpack:///./public/source/js/skills.js?")},function(module,exports,__webpack_require__){"use strict";eval("\n\n$(function () {\n    $('#link-block').slick({\n        infinite: true,\n        speed: 500,\n        fade: true,\n        cssEase: 'linear',\n        prevArrow: '#link-block--btn-prev',\n        nextArrow: '#link-block--btn-next',\n        touchMove: false,\n        swipe: false\n    });\n\n    $('#img-block').slick({\n        infinite: true,\n        speed: 500,\n        fade: true,\n        cssEase: 'linear',\n        prevArrow: '#img-block--btn-prev',\n        nextArrow: '#img-block--btn-next',\n        touchMove: false,\n        swipe: false\n    });\n\n    $('#nav-slider--prev').slick({\n        infinite: true,\n        speed: 500,\n        vertical: true,\n        cssEase: 'linear',\n        prevArrow: '#nav-slider--prev--btn-prev',\n        nextArrow: '#nav-slider--prev--btn-next',\n        touchMove: false,\n        swipe: false\n    });\n\n    $('#nav-slider--next').slick({\n        infinite: true,\n        speed: 500,\n        vertical: true,\n        cssEase: 'linear',\n        prevArrow: '#nav-slider--next--btn-prev',\n        nextArrow: '#nav-slider--next--btn-next',\n        touchMove: false,\n        swipe: false\n    });\n\n    $('#btn-prev').on('click', function () {\n        $('#link-block--btn-prev, #img-block--btn-prev, #nav-slider--prev--btn-prev, #nav-slider--next--btn-next').trigger('click');\n    });\n\n    $('#btn-next').on('click', function () {\n        $('#link-block--btn-next, #img-block--btn-next, #nav-slider--prev--btn-next, #nav-slider--next--btn-prev').trigger('click');\n    });\n});\n\n//////////////////\n// WEBPACK FOOTER\n// ./public/source/js/works-slider.js\n// module id = 10\n// module chunks = 0\n\n//# sourceURL=webpack:///./public/source/js/works-slider.js?")}]);