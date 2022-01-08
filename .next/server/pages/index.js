"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 194:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: external "react-icons/bs"
const bs_namespaceObject = require("react-icons/bs");
;// CONCATENATED MODULE: external "react-icons/ai"
const ai_namespaceObject = require("react-icons/ai");
;// CONCATENATED MODULE: ./components/navbar.js



function Navbar() {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "bg-white shadow-md shadow-slate-300 py-4",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text-5xl nav-brand tracking-normal",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "mr-2 text-pink-500",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(ai_namespaceObject.AiOutlineVideoCameraAdd, {
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "block bg-gradient-to-br text-transparent bg-clip-text from-red-600 via-pink-600 to-purple-600",
                                    children: "VidTok"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text-pink-500 text-xl",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(bs_namespaceObject.BsFillExclamationCircleFill, {
                        })
                    })
                ]
            })
        })
    }));
};

;// CONCATENATED MODULE: ./components/layout.js



function Layout(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: props.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "favicon.ico"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.googleapis.com"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "https://pro.fontawesome.com/releases/v5.10.0/css/all.css",
                        integrity: "sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container mt-8",
                children: props.children
            })
        ]
    }));
};

;// CONCATENATED MODULE: external "react-icons/bi"
const bi_namespaceObject = require("react-icons/bi");
;// CONCATENATED MODULE: ./pages/index.js



async function getServerSideProps(ctx) {
    let url = ctx.query.url;
    if (ctx.query.url) {
        url = ctx.query.url;
    } else {
        url = '';
    }
    const res = await fetch('https://hadi-api.herokuapp.com/api/tiktok?url=' + url);
    const data = await res.json();
    // console.log(data);
    return {
        props: {
            vidlink: data
        }
    };
}
function Home({ vidlink  }) {
    let res = vidlink;
    if (res) {
        res = vidlink;
    } else {
        res = '';
    }
    let result = res.result;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout, {
        title: "VIDTOK",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "text-center",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                    className: "text-7xl leading-7",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                            className: "nav-brand bg-gradient-to-br bg-clip-text text-transparent from-red-500 via-pink-500 to-purple-600",
                            children: [
                                "VidTok. ",
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-gray-700 font-normal md:text-3xl text-xl",
                            children: "Download any videos from TikTok"
                        }),
                        ' '
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "bg-white rounded-2xl w-full p-5 my-10 shadow-md",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "text-center md:text-5xl text-2xl flex justify-center text-gray-800",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(bi_namespaceObject.BiSearchAlt, {
                                className: "mr-1"
                            }),
                            " Search"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "text",
                                name: "url",
                                placeholder: "Example: https://www.tiktok.com/@kucingsiapaini/video/7016660836626337051?is_from_webapp=1&sender_device=pc&web_id7048440335769290241",
                                className: "border-4 w-full rounded-full mt-3 p-3 text-xl text-center focus:outline-2 focus:outline-pink-500"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-center mt-4",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    type: "submit",
                                    className: "bg-pink-500 rounded-full px-5 py-2 font-semibold text-white",
                                    children: "SUBMIT"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: result ? 'bg-white rounded-2xl w-full p-5 my-10 shadow-md' : 'hidden',
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text-center md:text-5xl text-2xl flex justify-center text-gray-800",
                        children: "Results"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "md:flex justify-between",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "bg-white rounded-2xl w-full p-5 my-1 shadow-md md:mr-3",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "text-center font-semibold text-gray-700 md:text-xl",
                                        children: "Video Links"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "mt-2 flex justify-center items-center gap-5",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: result ? result.video.nowm : '',
                                                className: "bg-pink-500 rounded-full px-3 py-1 font-semibold text-white md:text-sm text-xs",
                                                children: "No WM"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: result ? result.video.mp4 : '',
                                                className: "bg-pink-500 rounded-full px-3 py-1 font-semibold text-white md:text-sm text-xs",
                                                children: "MP4"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: result ? result.video.original : '',
                                                className: "bg-pink-500 rounded-full px-3 py-1 font-semibold text-white md:text-sm text-xs",
                                                children: "Original"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "bg-white rounded-2xl w-full p-5 my-1 shadow-md md:ml-3",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "text-center font-semibold text-gray-700 md:text-xl",
                                        children: "Audio Links"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "mt-2 flex justify-center gap-5",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: result ? result.audio_only.audio1 : '',
                                                className: "bg-pink-500 rounded-full px-3 py-1 font-semibold text-white md:text-sm text-xs",
                                                children: "Audio 1"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: result ? result.audio_only.audio2 : '',
                                                className: "bg-pink-500 rounded-full px-3 py-1 font-semibold text-white md:text-sm text-xs",
                                                children: "Audio 2"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: result ? result.audio_only.original : '',
                                                className: "bg-pink-500 rounded-full px-3 py-1 font-semibold text-white md:text-sm text-xs",
                                                children: "Original"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: result ? 'text-center pb-3 pt-5' : 'absolute bottom-0 left-1/2 transform -translate-x-1/2 w-fit pb-3 pt-5',
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                    children: [
                        "Developed with ❤ by ",
                        /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                            children: "Rizki Maulana"
                        })
                    ]
                })
            })
        ]
    }));
};


/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(194));
module.exports = __webpack_exports__;

})();