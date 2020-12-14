!function (e, t) {
	"object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.testplayer = t() : e.testplayer = t()
}
(window, function () {
	return function (e) {
		function t(t) {
			for (var n, a, i = t[0], o = t[1], s = 0, d = []; s < i.length; s++)
				a = i[s], r[a] && d.push(r[a][0]), r[a] = 0;
			for (n in o)
				Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
			for (l && l(t); d.length; )
				d.shift()()
		}
		var n = {},
		r = {
			1: 0
		};
		function a(t) {
			if (n[t])
				return n[t].exports;
			var r = n[t] = {
				i: t,
				l: !1,
				exports: {}
			};
			return e[t].call(r.exports, r, r.exports, a),
			r.l = !0,
			r.exports
		}
		a.e = function (e) {
			var t = [],
			n = r[e];
			if (0 !== n)
				if (n)
					t.push(n[2]);
				else {
					var i = new Promise(function (t, a) {
							n = r[e] = [t, a]
						});
					t.push(n[2] = i);
					var o,
					s = document.getElementsByTagName("head")[0],
					l = document.createElement("script");
					l.charset = "utf-8",
					l.timeout = 120,
					a.nc && l.setAttribute("nonce", a.nc),
					l.src = function (e) {
						return a.p + "" + ({}
							[e] || e) + ".bundle.js"
					}
					(e),
					o = function (t) {
						l.onerror = l.onload = null,
						clearTimeout(d);
						var n = r[e];
						if (0 !== n) {
							if (n) {
								var a = t && ("load" === t.type ? "missing" : t.type),
								i = t && t.target && t.target.src,
								o = new Error("Loading chunk " + e + " failed.\n(" + a + ": " + i + ")");
								o.type = a,
								o.request = i,
								n[1](o)
							}
							r[e] = undefined
						}
					};
					var d = setTimeout(function () {
							o({
								type: "timeout",
								target: l
							})
						}, 12e4);
					l.onerror = l.onload = o,
					s.appendChild(l)
				}
			return Promise.all(t)
		},
		a.m = e,
		a.c = n,
		a.d = function (e, t, n) {
			a.o(e, t) || Object.defineProperty(e, t, {
				enumerable: !0,
				get: n
			})
		},
		a.r = function (e) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
				value: "Module"
			}),
			Object.defineProperty(e, "__esModule", {
				value: !0
			})
		},
		a.t = function (e, t) {
			if (1 & t && (e = a(e)), 8 & t)
				return e;
			if (4 & t && "object" == typeof e && e && e.__esModule)
				return e;
			var n = Object.create(null);
			if (a.r(n), Object.defineProperty(n, "default", {
					enumerable: !0,
					value: e
				}), 2 & t && "string" != typeof e)
				for (var r in e)
					a.d(n, r, function (t) {
						return e[t]
					}
						.bind(null, r));
			return n
		},
		a.n = function (e) {
			var t = e && e.__esModule ? function () {
				return e["default"]
			}
			 : function () {
				return e
			};
			return a.d(t, "a", t),
			t
		},
		a.o = function (e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		},
		a.p = "https://media-cache.huaweicloud.com/video/hwplayer/1.3.0/dist/",
		a.oe = function (e) {
			throw console.error(e),
			e
		};
		var i = window.webpackJsonptestplayer = window.webpackJsonptestplayer || [],
		o = i.push.bind(i);
		i.push = t,
		i = i.slice();
		for (var s = 0; s < i.length; s++)
			t(i[s]);
		var l = o;
		return a(a.s = 2)
	}
	([function (e, t, n) {
				"use strict";
				var r = {
					utf8: {
						stringToBytes: function (e) {
							return r.bin.stringToBytes(unescape(encodeURIComponent(e)))
						},
						bytesToString: function (e) {
							return decodeURIComponent(escape(r.bin.bytesToString(e)))
						}
					},
					bin: {
						stringToBytes: function (e) {
							for (var t = [], n = 0; n < e.length; n++)
								t.push(255 & e.charCodeAt(n));
							return t
						},
						bytesToString: function (e) {
							for (var t = [], n = 0; n < e.length; n++)
								t.push(String.fromCharCode(e[n]));
							return t.join("")
						}
					}
				};
				e.exports = r
			}, function (e, t, n) {
				"use strict";
				var r,
				a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
					return typeof e
				}
				 : function (e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				};
				r = function () {
					return this
				}
				();
				try {
					r = r || Function("return this")() || (0, eval)("this")
				} catch (i) {
					"object" === ("undefined" == typeof window ? "undefined" : a(window)) && (r = window)
				}
				e.exports = r
			}, function (e, t, n) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var r,
				a,
				i = void 0,
				o = "/resource/hwplayer/1.3.0/lib/";
				var s = {},
				l = {},
				d = function () {
					l = {
						switcher: o + "plugins/js/videojs-resolution-switcher.js",
						thumbnails: o + "plugins/js/videojs.thumbnails.js",
						hlsjs: o + "plugins/js/videojs-hlsjs-plugin.js",
						flvjs: o + "flv-1.4.2.min.js",
						dashjs: o + "dash-2.9.2.all.min.js",
						flvjsPlugin: o + "plugins/js/videojs-flv-0.2.0.min.js",
						dashjsPlugin: o + "plugins/js/videojs-dash-2.9.1.min.js"
					},
					a = "new" === p ? !1 !== u ? !1 !== h ? 8 : 6 : !1 !== h ? 6 : 4 : 2
				},
				u = m("flvjs") && "false" !== m("flvjs") || !1,
				h = m("dashjs") && "false" !== m("dashjs") || !1,
				f = document.getElementsByTagName("head").item(0),
				c = {
					isIeAndIeVersion: function () {
						if (window.ActiveXObject || "ActiveXObject" in window) {
							var e,
							t = new RegExp("MSIE (\\d+\\.\\d+);"),
							n = navigator.userAgent;
							return t.test(n),
							e = parseFloat(RegExp.$1),
							isNaN(e) && (e = window.XMLHttpRequest ? 11 : 6),
							e
						}
						return !1
					},
					getVideojsType: function () {
						return !1 === c.isIeAndIeVersion() ? "new" : "old"
					},
					getVideojsUrl: function () {
						return "new" === c.getVideojsType() ? o + "video-js-7.5.4/video.js" : o + "video-js-5.20.5/video.min.js"
					},
					getVideojsCssUrl: function () {
						return "new" === c.getVideojsType() ? o + "video-js-7.5.4/video-js.css" : o + "video-js-5.20.5/video-js.css"
					},
					getSwfUrl: function () {
						return o + "player.swf"
					},
					loadCss: function (e) {
						var t = document.createElement("link");
						return t.type = "text/css",
						t.rel = "stylesheet",
						t.href = e,
						f.appendChild(t),
						t
					},
					loadScript: function (e, t, n) {
						return t.type = "text/javascript",
						t.src = n,
						t.charset = "utf-8",
						t.setAttribute("data-hwplayerId", e),
						f.appendChild(t),
						t
					},
					getScript: function (e) {
						var t = document.querySelector("script[data-hwplayerId=" + e + "]");
						return !!t && {
							script: t,
							loaded: "true" === t.getAttribute("data-hwplayerLoaded")
						}
					},
					deleteScript: function (e) {
						var t = document.querySelector("script[data-hwplayerId=" + e + "]");
						return t ? (t.parentNode.removeChild(t), t.onload = null, t.onreadystatechange = null, !0) : (console.warn("HWPLAYER: warn: script[data-hwplayerId=" + e + "]不存在"), !1)
					},
					scriptLoadedCallback: function (e, t) {
						t = "function" == typeof t ? t : function () {
							console.warn("HWPLAYER: warn: 您没有设置回调函数或者回调函数设置错误")
						},
						e.readyState ? "complete" === e.readyState ? (e.onreadystatechange = null, t()) : e.onreadystatechange = function () {
							"loaded" != e.readyState && "complete" != e.readyState || (e.onreadystatechange = null, t())
						}
						 : e.onload = function () {
							t()
						}
					},
					hwplayerInit: function () {
						var e,
						t = window.define;
						return t && "function" == typeof t && t.amd ? (i = window.hwplayerloaded = c.amdHwplayerloaded, e = "amd") : (i = window.hwplayerloaded = c.hwplayerloaded, e = "tag"),
						e
					},
					amdHwplayerloaded: function (e) {
						var t = void 0,
						n = void 0;
						"function" == typeof e ? t = e : null != e && (t = e.success, u = !!e.flv, h = !!e.dash, n = e.plugins, e.libPath && (o = e.libPath)),
						c.loadCss(c.getVideojsCssUrl()),
						c.loadCss(o + "plugins/css/videojs-allPlugins.css"),
						d(),
						t = "function" == typeof t ? t : function () {
							console.warn("HWPLAYER: warn: 您没有设置回调函数或者回调函数设置错误")
						},
						g && (s = {
								timestamp: (new Date).getTime()
							});
						var r = window.require,
						a = [c.getVideojsUrl()];
						r(a, function (e, a) {
							var i = c.getVideojsType(),
							o = [l.switcher, l.thumbnails],
							s = [];
							"new" === i && o.push(l.hlsjs),
							"new" === i && !1 !== u && (o.push(l.flvjsPlugin), s.push(l.flvjs)),
							"new" === i && !1 !== h && (o.push(l.dashjsPlugin), s.push(l.dashjs)),
							window.videojs = e,
							void 0 !== a && (window.flvjs = a),
							r(s, function () {
								r(o, function () {
									v(n).then(function () {
										t()
									})
								})
							})
						})
					},
					hwplayerloaded: function (e) {
						var t = void 0,
						n = void 0;
						"function" == typeof e ? t = e : null != e && (t = e.success, u = !!e.flv, h = !!e.dash, n = e.plugins, e.libPath && (o = e.libPath)),
						c.loadCss(c.getVideojsCssUrl()),
						c.loadCss(o + "plugins/css/videojs-allPlugins.css"),
						d(),
						t = "function" == typeof t ? t : function () {
							console.warn("HWPLAYER: warn: 您没有设置回调函数或者回调函数设置错误")
						},
						g && (s = {
								timestamp: (new Date).getTime()
							}),
						c.hwplayerLoad("videojs", c.getVideojsUrl(), function () {
							v(n).then(function () {
								var e = !0;
								c.hwplayerLoad("switcher", l.switcher, function () {
									e && _ === a && t(),
									_ === a && (e = !1)
								}),
								c.hwplayerLoad("thumbnails", l.thumbnails, function () {
									e && _ === a && t(),
									_ === a && (e = !1)
								}),
								"new" === p && c.hwplayerLoad("hlsjs", l.hlsjs, function () {
									e && _ === a && t(),
									_ === a && (e = !1)
								}),
								"new" === p && !1 !== u && c.hwplayerLoad("flvjs", l.flvjs, function () {
									c.hwplayerLoad("flvjsPlugin", l.flvjsPlugin, function () {
										e && _ === a && t(),
										_ === a && (e = !1)
									})
								}),
								"new" === p && !1 !== h && c.hwplayerLoad("dashjs", l.dashjs, function () {
									c.hwplayerLoad("dashjsPlugin", l.dashjsPlugin, function () {
										e && _ === a && t(),
										_ === a && (e = !1)
									})
								})
							})
						})
					},
					hwplayerLoad: function (e, t, n) {
						var r = c.getScript(e),
						a = c.scriptLoadedCallback;
						r && !0 === r.loaded ? n() : (r && c.deleteScript(e), a(r = document.createElement("script"), function () {
								_++,
								r.setAttribute("data-hwplayerLoaded", "true"),
								n()
							}), c.loadScript(e, r, t))
					},
					addHlsFlashSource: function () {
						var e = videojs.getTech("Flash").sourceHandlers;
						for (var t in e)
							if (e.hasOwnProperty(t) && e[t].supportType && "M3U8" === e[t].supportType)
								return;
						var n = {},
						r = /^(audio|video|application)\/(x-|vnd\.apple\.)?mpegurl/i;
						n.canPlayType = function (e) {
							return r.test(e) ? "maybe" : ""
						},
						n.canHandleSource = function (e, t) {
							return "maybe" === n.canPlayType(e.type)
						},
						n.handleSource = function (e, t, n) {
							t.setSrc(e.src)
						},
						n.dispose = function () {},
						videojs.getTech("Flash").registerSourceHandler(n, 0),
						n.VERSION = "__VERSION__",
						n.supportType = "M3U8",
						videojs.options.flash.swf = c.getSwfUrl()
					}
				},
				p = c.getVideojsType(),
				_ = 0,
				g = n(3),
				w = {
					"Now Playing": "正在播放",
					"Up Next": "下一个",
					Play: "播放",
					Pause: "暂停",
					"Current Time": "当前时间",
					Duration: "时长",
					"Remaining Time": "剩余时间",
					"Stream Type": "媒体流类型",
					LIVE: "直播",
					Loaded: "加载完毕",
					Progress: "进度",
					Fullscreen: "全屏",
					"Non-Fullscreen": "退出全屏",
					Mute: "静音",
					Unmute: "取消静音",
					"Playback Rate": "播放速度",
					Subtitles: "字幕",
					"subtitles off": "关闭字幕",
					Captions: "内嵌字幕",
					"captions off": "关闭内嵌字幕",
					Chapters: "节目段落",
					"Close Modal Dialog": "关闭弹窗",
					Descriptions: "描述",
					"descriptions off": "关闭描述",
					"Audio Track": "音轨",
					"You aborted the media playback": "视频播放被终止",
					"A network error caused the media download to fail part-way.": "网络错误导致视频下载中途失败。",
					"The media could not be loaded, either because the server or network failed or because the format is not supported.": "视频因格式不支持或者服务器或网络的问题无法加载。",
					"The media playback was aborted due to a corruption problem or because the media used features your browser did not support.": "由于视频文件损坏或是该视频使用了你的浏览器不支持的功能，播放终止。",
					"No compatible source was found for this media.": "无法找到此视频兼容的源。",
					"The media is encrypted and we do not have the keys to decrypt it.": "视频已加密，无法解密。",
					"Play Video": "播放视频",
					Close: "关闭",
					"Modal Window": "弹窗",
					"This is a modal window": "这是一个弹窗",
					"This modal can be closed by pressing the Escape key or activating the close button.": "可以按ESC按键或启用关闭按钮来关闭此弹窗。",
					", opens captions settings dialog": ", 开启标题设置弹窗",
					", opens subtitles settings dialog": ", 开启字幕设置弹窗",
					", opens descriptions settings dialog": ", 开启描述设置弹窗",
					", selected": ", 选择",
					"captions settings": "字幕设定",
					"Audio Player": "音频播放器",
					"Video Player": "视频播放器",
					Replay: "重播",
					"Progress Bar": "进度小节",
					"Volume Level": "音量",
					"subtitles settings": "字幕设定",
					"descriptions settings": "描述设定",
					Text: "文字",
					White: "白",
					Black: "黑",
					Red: "红",
					Green: "绿",
					Blue: "蓝",
					Yellow: "黄",
					Magenta: "紫红",
					Cyan: "青",
					Background: "背景",
					Window: "视窗",
					Transparent: "透明",
					"Semi-Transparent": "半透明",
					Opaque: "不透明",
					"Font Size": "字体尺寸",
					"Text Edge Style": "字体边缘样式",
					None: "无",
					Raised: "浮雕",
					Depressed: "压低",
					Uniform: "均匀",
					Dropshadow: "下阴影",
					"Font Family": "字体库",
					"Proportional Sans-Serif": "比例无细体",
					"Monospace Sans-Serif": "单间隔无细体",
					"Proportional Serif": "比例细体",
					"Monospace Serif": "单间隔细体",
					Casual: "舒适",
					Script: "手写体",
					"Small Caps": "小型大写字体",
					Reset: "重启",
					"restore all settings to the default values": "恢复全部设定至预设值",
					Done: "完成",
					"Caption Settings Dialog": "字幕设定视窗",
					"Beginning of dialog window. Escape will cancel and close the window.": "开始对话视窗。离开会取消及关闭视窗",
					"End of dialog window.": "结束对话视窗",
					Quality: "清晰度"
				};
				c.hwplayerInit();
				var v = function (e) {
					var t = Promise.resolve();
					if (null == e)
						return t;
					var r = void 0,
					a = void 0,
					i = void 0;
					return e.danmaku && (r = Promise.all([n.e(6), n.e(2)]).then(n.t.bind(null, 8, 7)).then(function (e) {
								(0, e.addDanmuPlugin)(videojs)
							})),
					e.playlist && (a = Promise.all([n.e(0), n.e(3)]).then(n.t.bind(null, 9, 7)).then(function (e) {
								return videojs.registerPlugin("playlist", e["default"]),
								Promise.all([n.e(0), n.e(7), n.e(4)]).then(n.t.bind(null, 10, 7)).then(function (e) {
									var t = e.playlistUi;
									videojs.registerPlugin("hwplaylist", t)
								})
							})),
					e.preview && (i = n.e(5).then(n.t.bind(null, 11, 7)).then(function (e) {
								var t = e.preview;
								videojs.registerPlugin("preview", t)
							})),
					Promise.all([r, a, i])
				};
				function m(e) {
					var t = document.getElementsByTagName("script");
					return (t[t.length - 1].src.match(new RegExp("(?:\\?|&)" + e + "=(.*?)(?=&|$)")) || ["", null])[1]
				}
				r = window.HWPlayer = function (e, t, n) {
					t = t || {};
					var r = videojs.mergeOptions({
							preload: "auto",
							controls: !0,
							stat: !1,
							isLive: !1,
							controlBar: {
								fullscreenToggle: !0,
								volumePanel: {
									inline: !1,
									vertical: !0
								}
							},
							playbackRates: [.5, 1, 1.5, 2],
							language: "zh-CN",
							html5: {
								hlsjsConfig: {}
							},
							flvjs: {
								mediaDataSource: {}
							},
							plugins: {
								videoJsResolutionSwitcher: {
									"default": "high",
									dynamicLabel: !0
								}
							}
						}, t);
					"old" === c.getVideojsType() && c.addHlsFlashSource(),
					videojs.addLanguage("zh-CN", w);
					var a = videojs(e, r, function () {
							n && n.apply(this)
						});
					a.getDomainId = function () {
						return a.options_.domainId
					},
					a.getUserId = function () {
						return a.options_.userId
					},
					a.loadSubtitles = function (e) {
						var t = new videojs.TextTrack({
								tech: a,
								kind: "subtitles",
								src: e,
								mode: "showing",
								label: "打开字幕",
								"default": !0
							});
						t.on("loadeddata", function () {
							a.textTracks().addTrack(t)
						})
					},
					g && r.stat && (g.collectData("20", s), g.collectData("10", {}));
					try {
						r.stat && g.bindPlayer && g.bindPlayer(a, {
							elementId: e
						})
					} catch (i) {
						console.error(i)
					}
					return a
				},
				t["default"] = {
					HWPlayer: r,
					hwplayerloaded: i
				}
			}, function (e, t, n) {
				"use strict";
				(function (t) {
					var r = i(n(4)),
					a = i(n(5));
					function i(e) {
						return e && e.__esModule ? e : {
							"default": e
						}
					}
					var o = {},
					s = o.playingState = {},
					l = "",
					d = !1,
					u = "1.0.1",
					h = null,
					f = [],
					c = {
						bindEvent: function (e, t, n, r) {
							r ? e.addEventListener ? e.addEventListener(t, n) : e.attachEvent("on" + t, n) : e["on" + t] = n
						},
						getOsInfo: function () {
							var e = navigator.userAgent.toLowerCase(),
							t = "Unknown",
							n = "Unknown";
							e.indexOf("win") > -1 ? (t = "Windows", n = e.indexOf("windows nt 5.0") > -1 ? "2000" : e.indexOf("windows nt 5.1") > -1 || e.indexOf("windows nt 5.2") > -1 ? "XP" : e.indexOf("windows nt 6.0") > -1 ? "Vista" : e.indexOf("windows nt 6.1") > -1 || e.indexOf("windows 7") > -1 ? "7" : e.indexOf("windows nt 6.2") > -1 || e.indexOf("windows 8") > -1 ? "8" : e.indexOf("windows nt 6.3") > -1 ? "8.1" : e.indexOf("windows nt 6.2") > -1 || e.indexOf("windows nt 10.0") > -1 ? "10" : "Unknown") : e.indexOf("iphone") > -1 ? t = "Iphone" : e.indexOf("mac") > -1 ? t = "Mac" : e.indexOf("x11") > -1 || e.indexOf("unix") > -1 || e.indexOf("sunname") > -1 || e.indexOf("bsd") > -1 ? t = "Unix" : e.indexOf("linux") > -1 ? e.indexOf("android") > -1 ? (t = "Android", n = e.indexOf("Android 4") > -1 ? "4" : e.indexOf("Android 5") > -1 ? "5" : e.indexOf("Android 6") > -1 ? "6" : e.indexOf("Android 7") > -1 ? "7" : e.indexOf("Android 8") > -1 ? "8" : e.indexOf("Android 9") > -1 ? "9" : e.indexOf("Android 10") > -1 ? "10" : "Unknown") : t = "Linux" : t = "Unknown";
							var r = new Object;
							return r.name = t,
							r.version = n,
							r
						},
						getNetworkType: function () {
							if (navigator.connection)
								switch (navigator.connection.effectiveType) {
								case "2G":
									return 1;
								case "3G":
								case "4G":
									return 2;
								case "5G":
									return 4;
								case "wifi":
								case "WIFI":
									return 5;
								default:
									return 6
								}
							return 6
						},
						getVideoType: function (e) {
							return e.duration() ? 0 : 1
						},
						getBrowerInfo: function () {
							var e = e || function (e) {
								var t = e.document,
								n = e.navigator.userAgent.toLowerCase(),
								r = t.documentMode,
								a = e.chrome || !1,
								i = {
									agent: n,
									isIE: /trident/.test(n),
									isGecko: n.indexOf("gecko") > 0 && n.indexOf("like gecko") < 0,
									isWebkit: n.indexOf("webkit") > 0,
									isStrict: "CSS1Compat" === t.compatMode,
									supportSubTitle: function () {
										return "track" in t.createElement("track")
									},
									ieVersion: function () {
										var t = e.navigator.userAgent.toLowerCase(),
										n = /(msie\s|trident.*rv:)([\w.]+)/.exec(t);
										try {
											return n[2]
										} catch (a) {
											return r
										}
									},
									operaVersion: function () {
										try {
											if (e.opera)
												return n.match(/opera.([\d.]+)/)[1];
											if (n.indexOf("opr") > 0)
												return n.match(/opr\/([\d.]+)/)[1]
										} catch (t) {
											return 0
										}
									}
								};
								try {
									i.type = i.isIE ? "IE" : e.opera || n.indexOf("opr") > 0 ? "Opera" : n.indexOf("chrome") > 0 ? "Chrome" : e.openDatabase ? "Safari" : n.indexOf("firefox") > 0 ? "Firefox" : "unknow",
									i.version = "IE" === i.type ? i.ieVersion() : "Firefox" === i.type ? n.match(/firefox\/([\d.]+)/)[1] : "Chrome" === i.type ? n.match(/chrome\/([\d.]+)/)[1] : "Opera" === i.type ? i.operaVersion() : "Safari" === i.type ? n.match(/version\/([\d.]+)/)[1] : "0",
									i.shell = function () {
										if (n.indexOf("edge") > 0)
											return i.version = n.match(/edge\/([\d.]+)/)[1] || i.version, "edge浏览器";
										if (n.indexOf("maxthon") > 0)
											return i.version = n.match(/maxthon\/([\d.]+)/)[1] || i.version, "傲游浏览器";
										if (n.indexOf("qqbrowser") > 0)
											return i.version = n.match(/qqbrowser\/([\d.]+)/)[1] || i.version, "QQ浏览器";
										if (n.indexOf("se 2.x") > 0)
											return "搜狗浏览器";
										if (a && "Opera" !== i.type) {
											var t = e.external,
											r = e.clientInformation.languages;
											if (t && "LiebaoGetVersion" in t)
												return "猎豹浏览器";
											if (n.indexOf("bidubrowser") > 0)
												return i.version = n.match(/bidubrowser\/([\d.]+)/)[1] || n.match(/chrome\/([\d.]+)/)[1], "百度浏览器";
											if (i.supportSubTitle() && void 0 === r) {
												var o = Object.keys(a.webstore).length;
												return o > 1 ? "360极速浏览器" : "360安全浏览器"
											}
											return "Chrome"
										}
										return i.type
									},
									i.name = i.shell()
								} catch (o) {}
								return {
									client: i
								}
							}
							(window);
							return e.client.name == undefined || "" == e.client.name ? (e.client.name = "Unknown", e.client.version = "Unknown") : e.client.version == undefined && (e.client.version = "Unknown"),
							e
						},
						zipData: function (e) {
							return r["default"].gzip(e)
						},
						generateUUID: function () {
							if (l)
								return l;
							var e = (new Date).getTime(),
							t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
									var n = (e + 16 * Math.random()) % 16 | 0;
									return e = Math.floor(e / 16),
									("x" == t ? n : 7 & n | 8).toString(16)
								});
							return l = t
						},
						base64Polyfill: function () {
							var e = t || window,
							n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
							function r(e) {
								this.message = e
							}
							r.prototype = new Error,
							r.prototype.name = "InvalidCharacterError",
							e.btoa || (e.btoa = function (e) {
								for (var t, a, i = String(e), o = "", s = 0, l = n; i.charAt(0 | s) || (l = "=", s % 1); o += l.charAt(63 & t >> 8 - s % 1 * 8)) {
									if ((a = i.charCodeAt(s += .75)) > 255)
										throw new r('"btoa" failed: The string to be encoded contains characters outside of the Latin1 range.');
									t = t << 8 | a
								}
								return o
							}),
							e.atob || (e.atob = function (e) {
								var t = String(e).replace(/[=]+$/, ""),
								a = "";
								if (t.length % 4 == 1)
									throw new r('"atob" failed: The string to be decoded is not correctly encoded.');
								for (var i, o, s = 0, l = 0; o = t.charAt(l++); ~o && (i = s % 4 ? 64 * i + o : o, s++ % 4) ? a += String.fromCharCode(255 & i >> (-2 * s & 6)) : 0)
									o = n.indexOf(o);
								return a
							})
						},
						dateFormat: function (e, t) {
							var n = {
								"M+": e.getMonth() + 1,
								"d+": e.getDate(),
								"h+": e.getHours(),
								"m+": e.getMinutes(),
								"s+": e.getSeconds(),
								"q+": Math.floor((e.getMonth() + 3) / 3),
								S: e.getMilliseconds()
							};
							for (var r in / (y + ) / .test(t) && (t = t.replace(RegExp.$1, (e.getFullYear() + "").substr(4 - RegExp.$1.length))), n)
								new RegExp("(" + r + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? n[r] : ("00" + n[r]).substr(("" + n[r]).length)));
							return t
						}
					};
					function p() {
						return o
					}
					function _(e) {
						f && f.length > 0 && null != h && (f.forEach(function (e) {
								g(e)
							}), f = []),
						g(e)
					}
					function g(e) {
						var t = void 0;
						switch (h) {
						case !1:
							"https://vdrp.hwcloudlive.com/api/v1/sdk/report",
							t = "vod";
							break;
						case !0:
							"https://lvrp.hwcloudlive.com/api/v1/sdk/report";
							break;
						default:
							return void f.push(e)
						}
						(0, a["default"])("9fd56232aa91fdf98fb88ab97fcd9567-" + c.dateFormat(new Date, "yyyy-MM-dd:hh")),
						e.event_id
					}
					function w(e, t) {
						var n = t && t.timestamp ? t.timestamp : (new Date).getTime();
						o[e] = Object.assign(t || {}, {
								flow_id: c.generateUUID(),
								timestamp: n,
								event_id: e,
								deviceOS_type: "h5"
							}),
						_(o[e])
					}
					function v(e) {
						var t = s[e];
						t ? t.length < 9 && s[e].push((new Date).getTime()) : s[e] = [(new Date).getTime()]
					}
					c.base64Polyfill(),
					e.exports = {
						bindPlayer: function (e) {
							var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
							n = c.generateUUID(),
							r = !document.getElementById(t.elementId).getAttribute("data-setup");
							o[n] = "",
							e.getStatOptions = function () {
								return {
									sessionId: n,
									stat: p()
								}
							},
							e.getStat = function () {
								return p()
							},
							r && function (e) {
								e.getStatOptions().sessionId;
								var t = [],
								n = [],
								r = !1,
								a = 0,
								i = 0,
								o = !1,
								p = 0,
								g = 0,
								m = 0,
								y = 0,
								b = 0,
								x = 0,
								k = 0,
								j = 0,
								S = function (r) {
									if (x && 0 != x) {
										m = -1;
										var a = e.currentSources(),
										o = "";
										o = btoa(a[0].src),
										w("35", {
											up_time: j,
											reason: r || 0,
											cpu_model: "NULL",
											player_version: u,
											project_id: "hwplayer",
											deviceOS_version: navigator.userAgent,
											NetworkType: c.getNetworkType(),
											network_operators: "NULL",
											periodicTimes: y,
											bufferTimesSum: g,
											seekTimesSum: i,
											seekDurationSum: n && n.length && n.reduce(function (e, t) {
												return e + t
											}),
											bufferDurationSum: t && t.length && t.reduce(function (e, t) {
												return e + t
											}),
											playtime: x,
											domain_id: e.getDomainId() || "default",
											user_id: e.getUserId() || "default",
											url: o
										}),
										e.clearInterval(T),
										T = null,
										x = 0
									} else
										f = []
								},
								z = !1,
								T = void Number(new Date);
								e.on("ready", function () {}),
								e.on("loadstart", function () {
									if (h = null, !z) {
										m = 1,
										z = !0;
										var t = e.currentSources();
										w("15", {
											url: btoa(t[0].src)
										}),
										c.bindEvent(window, "beforeunload", function () {
											e && S(1)
										}, !0)
									}
								}),
								e.on("loadeddata", function () {
									m = 2
								}),
								e.on("canplay", function () {}),
								e.on("texttrackchange", function () {}),
								e.on("pause", function () {
									var t = e.seeking(),
									n = e.ended();
									d && (x += (new Date).getTime() - b),
									d = !1,
									m = 4,
									n || (t ? r || (i++, r = !0, a = (new Date).getTime(), v("seek")) : v("pause"))
								}),
								e.on("play", function () {
									d || (k = Date.now(), w("5", {
											cpu_model: "NULL",
											player_version: u,
											project_id: "hwplayer",
											deviceOS_version: navigator.userAgent,
											NetworkType: c.getNetworkType(),
											network_operators: "NULL",
											domain_id: e.getDomainId() || "default",
											user_id: e.getUserId() || "default"
										}), v("play"))
								}),
								e.on("ratechange", function () {
									v("playRate")
								}),
								e.on("dispose", function () {
									e.clearInterval(T),
									T = null
								}),
								e.on("waiting", function () {
									o || (o = !0, p = (new Date).getTime(), g++, m = 6)
								}),
								e.on("playing", function () {
									if (m = 3, null == h && (h = e.duration() == Infinity), !d) {
										r ? (r = !1, n[i - 1] = (new Date).getTime() - a) : o && (o = !1, t[g - 1] = (new Date).getTime() - p),
										d = !0,
										b = (new Date).getTime();
										var f = e.currentSources(),
										v = "";
										if (v = btoa(f[0].src), w("25", {
												up_time: j = Date.now() - k,
												url: v,
												video_decode_mode: 0,
												Bitrate: "NULL",
												VGA: "NULL",
												content_name: "NULL",
												StreamType: c.getVideoType(e),
												Duration: e.duration(),
												VideoCodec: e.currentSource().type,
												cpu_model: "NULL",
												player_version: u,
												project_id: "hwplayer",
												deviceOS_version: navigator.userAgent,
												NetworkType: c.getNetworkType(),
												network_operators: "NULL",
												domain_id: e.getDomainId() || "default",
												user_id: e.getUserId() || "default"
											}), !T) {
											var x = function () {
												_({
													flow_id: l,
													timestamp: (new Date).getTime(),
													event_id: "30",
													CPULoad: -1,
													mem_Load: -1,
													FPS: -1,
													PlayerStatus: m,
													bufferTimes: g,
													bufferDuration: t.join(","),
													seekTimes: i,
													seekDuration: n.join(","),
													pause: s.pause && s.pause.join(","),
													Play: s.play && s.play.join(","),
													Seek: s.seek && s.seek.join(","),
													PlayRate: s.playRate && s.playRate.join(","),
													cpu_model: "NULL",
													player_version: u,
													project_id: "hwplayer",
													deviceOS_type: "h5",
													deviceOS_version: navigator.userAgent,
													NetworkType: c.getNetworkType(),
													network_operators: "NULL",
													domain_id: e.getDomainId() || "default",
													user_id: e.getUserId() || "default"
												}),
												y++
											};
											x(),
											T = e.setInterval(function () {
													x()
												}, 6e4)
										}
									}
								}),
								e.on("suspend", function () {
									m = 7
								}),
								e.on("ended", function () {
									S(0)
								}),
								e.on("abort", function () {
									S(1)
								}),
								e.on("error", function () {
									var t = e.error(),
									n = void 0,
									r = void 0;
									if (t)
										switch (t.code) {
										case 1:
											n = "12",
											r = "10";
											break;
										case 2:
											n = "11",
											r = "11";
											break;
										case 3:
										case 4:
											n = "10",
											r = "13";
											break;
										default:
											n = "12",
											r = "10"
										}
									S(1011 + n + "12" + r)
								})
							}
							(e)
						},
						collectData: w
					}
				}).call(this, n(1))
			}, function (e, t, n) {
				"use strict";
				var r,
				a,
				i,
				o,
				s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
					return typeof e
				}
				 : function (e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				};
				!function (n) {
					"object" === s(t) && void 0 !== e ? e.exports = n() : (a = [], (i = "function" == typeof(r = n) ? r.apply(t, a) : r) === undefined || (e.exports = i))
				}
				(function () {
					return function () {
						return function e(t, n, r) {
							function a(s, l) {
								if (!n[s]) {
									if (!t[s]) {
										if (!l && "function" == typeof o && o)
											return o(s, !0);
										if (i)
											return i(s, !0);
										var d = new Error("Cannot find module '" + s + "'");
										throw d.code = "MODULE_NOT_FOUND",
										d
									}
									var u = n[s] = {
										exports: {}
									};
									t[s][0].call(u.exports, function (e) {
										return a(t[s][1][e] || e)
									}, u, u.exports, e, t, n, r)
								}
								return n[s].exports
							}
							for (var i = "function" == typeof o && o, s = 0; s < r.length; s++)
								a(r[s]);
							return a
						}
					}
					()({
						1: [function (e, t, n) {
								var r = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
								function a(e, t) {
									return Object.prototype.hasOwnProperty.call(e, t)
								}
								n.assign = function (e) {
									for (var t = Array.prototype.slice.call(arguments, 1); t.length; ) {
										var n = t.shift();
										if (n) {
											if ("object" !== (void 0 === n ? "undefined" : s(n)))
												throw new TypeError(n + "must be non-object");
											for (var r in n)
												a(n, r) && (e[r] = n[r])
										}
									}
									return e
								},
								n.shrinkBuf = function (e, t) {
									return e.length === t ? e : e.subarray ? e.subarray(0, t) : (e.length = t, e)
								};
								var i = {
									arraySet: function (e, t, n, r, a) {
										if (t.subarray && e.subarray)
											e.set(t.subarray(n, n + r), a);
										else
											for (var i = 0; i < r; i++)
												e[a + i] = t[n + i]
									},
									flattenChunks: function (e) {
										var t,
										n,
										r,
										a,
										i,
										o;
										for (r = 0, t = 0, n = e.length; t < n; t++)
											r += e[t].length;
										for (o = new Uint8Array(r), a = 0, t = 0, n = e.length; t < n; t++)
											i = e[t], o.set(i, a), a += i.length;
										return o
									}
								},
								o = {
									arraySet: function (e, t, n, r, a) {
										for (var i = 0; i < r; i++)
											e[a + i] = t[n + i]
									},
									flattenChunks: function (e) {
										return [].concat.apply([], e)
									}
								};
								n.setTyped = function (e) {
									e ? (n.Buf8 = Uint8Array, n.Buf16 = Uint16Array, n.Buf32 = Int32Array, n.assign(n, i)) : (n.Buf8 = Array, n.Buf16 = Array, n.Buf32 = Array, n.assign(n, o))
								},
								n.setTyped(r)
							}, {}
						],
						2: [function (e, t, n) {
								var r = e("./common"),
								a = !0,
								i = !0;
								try {
									String.fromCharCode.apply(null, [0])
								} catch (d) {
									a = !1
								}
								try {
									String.fromCharCode.apply(null, new Uint8Array(1))
								} catch (d) {
									i = !1
								}
								for (var o = new r.Buf8(256), s = 0; s < 256; s++)
									o[s] = s >= 252 ? 6 : s >= 248 ? 5 : s >= 240 ? 4 : s >= 224 ? 3 : s >= 192 ? 2 : 1;
								function l(e, t) {
									if (t < 65534 && (e.subarray && i || !e.subarray && a))
										return String.fromCharCode.apply(null, r.shrinkBuf(e, t));
									for (var n = "", o = 0; o < t; o++)
										n += String.fromCharCode(e[o]);
									return n
								}
								o[254] = o[254] = 1,
								n.string2buf = function (e) {
									var t,
									n,
									a,
									i,
									o,
									s = e.length,
									l = 0;
									for (i = 0; i < s; i++)
										55296 == (64512 & (n = e.charCodeAt(i))) && i + 1 < s && 56320 == (64512 & (a = e.charCodeAt(i + 1))) && (n = 65536 + (n - 55296 << 10) + (a - 56320), i++), l += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4;
									for (t = new r.Buf8(l), o = 0, i = 0; o < l; i++)
										55296 == (64512 & (n = e.charCodeAt(i))) && i + 1 < s && 56320 == (64512 & (a = e.charCodeAt(i + 1))) && (n = 65536 + (n - 55296 << 10) + (a - 56320), i++), n < 128 ? t[o++] = n : n < 2048 ? (t[o++] = 192 | n >>> 6, t[o++] = 128 | 63 & n) : n < 65536 ? (t[o++] = 224 | n >>> 12, t[o++] = 128 | n >>> 6 & 63, t[o++] = 128 | 63 & n) : (t[o++] = 240 | n >>> 18, t[o++] = 128 | n >>> 12 & 63, t[o++] = 128 | n >>> 6 & 63, t[o++] = 128 | 63 & n);
									return t
								},
								n.buf2binstring = function (e) {
									return l(e, e.length)
								},
								n.binstring2buf = function (e) {
									for (var t = new r.Buf8(e.length), n = 0, a = t.length; n < a; n++)
										t[n] = e.charCodeAt(n);
									return t
								},
								n.buf2string = function (e, t) {
									var n,
									r,
									a,
									i,
									s = t || e.length,
									d = new Array(2 * s);
									for (r = 0, n = 0; n < s; )
										if ((a = e[n++]) < 128)
											d[r++] = a;
										else if ((i = o[a]) > 4)
											d[r++] = 65533, n += i - 1;
										else {
											for (a &= 2 === i ? 31 : 3 === i ? 15 : 7; i > 1 && n < s; )
												a = a << 6 | 63 & e[n++], i--;
											i > 1 ? d[r++] = 65533 : a < 65536 ? d[r++] = a : (a -= 65536, d[r++] = 55296 | a >> 10 & 1023, d[r++] = 56320 | 1023 & a)
										}
									return l(d, r)
								},
								n.utf8border = function (e, t) {
									var n;
									for ((t = t || e.length) > e.length && (t = e.length), n = t - 1; n >= 0 && 128 == (192 & e[n]); )
										n--;
									return n < 0 ? t : 0 === n ? t : n + o[e[n]] > t ? n : t
								}
							}, {
								"./common": 1
							}
						],
						3: [function (e, t, n) {
								t.exports = function (e, t, n, r) {
									for (var a = 65535 & e | 0, i = e >>> 16 & 65535 | 0, o = 0; 0 !== n; ) {
										n -= o = n > 2e3 ? 2e3 : n;
										do {
											i = i + (a = a + t[r++] | 0) | 0
										} while (--o);
										a %= 65521,
										i %= 65521
									}
									return a | i << 16 | 0
								}
							}, {}
						],
						4: [function (e, t, n) {
								var r = function () {
									for (var e, t = [], n = 0; n < 256; n++) {
										e = n;
										for (var r = 0; r < 8; r++)
											e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
										t[n] = e
									}
									return t
								}
								();
								t.exports = function (e, t, n, a) {
									var i = r,
									o = a + n;
									e ^= -1;
									for (var s = a; s < o; s++)
										e = e >>> 8 ^ i[255 & (e ^ t[s])];
									return -1 ^ e
								}
							}, {}
						],
						5: [function (e, t, n) {
								var r,
								a = e("../utils/common"),
								i = e("./trees"),
								o = e("./adler32"),
								s = e("./crc32"),
								l = e("./messages"),
								d = 0,
								u = 1,
								h = 3,
								f = 4,
								c = 5,
								p = 0,
								_ = 1,
								g = -2,
								w = -3,
								v = -5,
								m = -1,
								y = 1,
								b = 2,
								x = 3,
								k = 4,
								j = 0,
								S = 2,
								z = 8,
								T = 9,
								O = 15,
								A = 8,
								P = 286,
								C = 30,
								L = 19,
								B = 2 * P + 1,
								I = 15,
								U = 3,
								E = 258,
								D = E + U + 1,
								N = 32,
								M = 42,
								R = 69,
								V = 73,
								F = 91,
								H = 103,
								W = 113,
								q = 666,
								G = 1,
								Y = 2,
								$ = 3,
								X = 4,
								J = 3;
								function Q(e, t) {
									return e.msg = l[t],
									t
								}
								function K(e) {
									return (e << 1) - (e > 4 ? 9 : 0)
								}
								function Z(e) {
									for (var t = e.length; --t >= 0; )
										e[t] = 0
								}
								function ee(e) {
									var t = e.state,
									n = t.pending;
									n > e.avail_out && (n = e.avail_out),
									0 !== n && (a.arraySet(e.output, t.pending_buf, t.pending_out, n, e.next_out), e.next_out += n, t.pending_out += n, e.total_out += n, e.avail_out -= n, t.pending -= n, 0 === t.pending && (t.pending_out = 0))
								}
								function te(e, t) {
									i._tr_flush_block(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, t),
									e.block_start = e.strstart,
									ee(e.strm)
								}
								function ne(e, t) {
									e.pending_buf[e.pending++] = t
								}
								function re(e, t) {
									e.pending_buf[e.pending++] = t >>> 8 & 255,
									e.pending_buf[e.pending++] = 255 & t
								}
								function ae(e, t, n, r) {
									var i = e.avail_in;
									return i > r && (i = r),
									0 === i ? 0 : (e.avail_in -= i, a.arraySet(t, e.input, e.next_in, i, n), 1 === e.state.wrap ? e.adler = o(e.adler, t, i, n) : 2 === e.state.wrap && (e.adler = s(e.adler, t, i, n)), e.next_in += i, e.total_in += i, i)
								}
								function ie(e, t) {
									var n,
									r,
									a = e.max_chain_length,
									i = e.strstart,
									o = e.prev_length,
									s = e.nice_match,
									l = e.strstart > e.w_size - D ? e.strstart - (e.w_size - D) : 0,
									d = e.window,
									u = e.w_mask,
									h = e.prev,
									f = e.strstart + E,
									c = d[i + o - 1],
									p = d[i + o];
									e.prev_length >= e.good_match && (a >>= 2),
									s > e.lookahead && (s = e.lookahead);
									do {
										if (d[(n = t) + o] === p && d[n + o - 1] === c && d[n] === d[i] && d[++n] === d[i + 1]) {
											i += 2,
											n++;
											do {}
											while (d[++i] === d[++n] && d[++i] === d[++n] && d[++i] === d[++n] && d[++i] === d[++n] && d[++i] === d[++n] && d[++i] === d[++n] && d[++i] === d[++n] && d[++i] === d[++n] && i < f);
											if (r = E - (f - i), i = f - E, r > o) {
												if (e.match_start = t, o = r, r >= s)
													break;
												c = d[i + o - 1],
												p = d[i + o]
											}
										}
									} while ((t = h[t & u]) > l && 0 != --a);
									return o <= e.lookahead ? o : e.lookahead
								}
								function oe(e) {
									var t,
									n,
									r,
									i,
									o,
									s = e.w_size;
									do {
										if (i = e.window_size - e.lookahead - e.strstart, e.strstart >= s + (s - D)) {
											a.arraySet(e.window, e.window, s, s, 0),
											e.match_start -= s,
											e.strstart -= s,
											e.block_start -= s,
											t = n = e.hash_size;
											do {
												r = e.head[--t],
												e.head[t] = r >= s ? r - s : 0
											} while (--n);
											t = n = s;
											do {
												r = e.prev[--t],
												e.prev[t] = r >= s ? r - s : 0
											} while (--n);
											i += s
										}
										if (0 === e.strm.avail_in)
											break;
										if (n = ae(e.strm, e.window, e.strstart + e.lookahead, i), e.lookahead += n, e.lookahead + e.insert >= U)
											for (o = e.strstart - e.insert, e.ins_h = e.window[o], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[o + 1]) & e.hash_mask; e.insert && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[o + U - 1]) & e.hash_mask, e.prev[o & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = o, o++, e.insert--, !(e.lookahead + e.insert < U)); );
									} while (e.lookahead < D && 0 !== e.strm.avail_in)
								}
								function se(e, t) {
									for (var n, r; ; ) {
										if (e.lookahead < D) {
											if (oe(e), e.lookahead < D && t === d)
												return G;
											if (0 === e.lookahead)
												break
										}
										if (n = 0, e.lookahead >= U && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + U - 1]) & e.hash_mask, n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), 0 !== n && e.strstart - n <= e.w_size - D && (e.match_length = ie(e, n)), e.match_length >= U)
											if (r = i._tr_tally(e, e.strstart - e.match_start, e.match_length - U), e.lookahead -= e.match_length, e.match_length <= e.max_lazy_match && e.lookahead >= U) {
												e.match_length--;
												do {
													e.strstart++,
													e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + U - 1]) & e.hash_mask,
													n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h],
													e.head[e.ins_h] = e.strstart
												} while (0 != --e.match_length);
												e.strstart++
											} else
												e.strstart += e.match_length, e.match_length = 0, e.ins_h = e.window[e.strstart], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 1]) & e.hash_mask;
										else
											r = i._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++;
										if (r && (te(e, !1), 0 === e.strm.avail_out))
											return G
									}
									return e.insert = e.strstart < U - 1 ? e.strstart : U - 1,
									t === f ? (te(e, !0), 0 === e.strm.avail_out ? $ : X) : e.last_lit && (te(e, !1), 0 === e.strm.avail_out) ? G : Y
								}
								function le(e, t) {
									for (var n, r, a; ; ) {
										if (e.lookahead < D) {
											if (oe(e), e.lookahead < D && t === d)
												return G;
											if (0 === e.lookahead)
												break
										}
										if (n = 0, e.lookahead >= U && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + U - 1]) & e.hash_mask, n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), e.prev_length = e.match_length, e.prev_match = e.match_start, e.match_length = U - 1, 0 !== n && e.prev_length < e.max_lazy_match && e.strstart - n <= e.w_size - D && (e.match_length = ie(e, n), e.match_length <= 5 && (e.strategy === y || e.match_length === U && e.strstart - e.match_start > 4096) && (e.match_length = U - 1)), e.prev_length >= U && e.match_length <= e.prev_length) {
											a = e.strstart + e.lookahead - U,
											r = i._tr_tally(e, e.strstart - 1 - e.prev_match, e.prev_length - U),
											e.lookahead -= e.prev_length - 1,
											e.prev_length -= 2;
											do {
												++e.strstart <= a && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + U - 1]) & e.hash_mask, n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart)
											} while (0 != --e.prev_length);
											if (e.match_available = 0, e.match_length = U - 1, e.strstart++, r && (te(e, !1), 0 === e.strm.avail_out))
												return G
										} else if (e.match_available) {
											if ((r = i._tr_tally(e, 0, e.window[e.strstart - 1])) && te(e, !1), e.strstart++, e.lookahead--, 0 === e.strm.avail_out)
												return G
										} else
											e.match_available = 1, e.strstart++, e.lookahead--
									}
									return e.match_available && (r = i._tr_tally(e, 0, e.window[e.strstart - 1]), e.match_available = 0),
									e.insert = e.strstart < U - 1 ? e.strstart : U - 1,
									t === f ? (te(e, !0), 0 === e.strm.avail_out ? $ : X) : e.last_lit && (te(e, !1), 0 === e.strm.avail_out) ? G : Y
								}
								function de(e, t, n, r, a) {
									this.good_length = e,
									this.max_lazy = t,
									this.nice_length = n,
									this.max_chain = r,
									this.func = a
								}
								function ue(e) {
									var t;
									return e && e.state ? (e.total_in = e.total_out = 0, e.data_type = S, (t = e.state).pending = 0, t.pending_out = 0, t.wrap < 0 && (t.wrap = -t.wrap), t.status = t.wrap ? M : W, e.adler = 2 === t.wrap ? 0 : 1, t.last_flush = d, i._tr_init(t), p) : Q(e, g)
								}
								function he(e) {
									var t = ue(e);
									return t === p && function (e) {
										e.window_size = 2 * e.w_size,
										Z(e.head),
										e.max_lazy_match = r[e.level].max_lazy,
										e.good_match = r[e.level].good_length,
										e.nice_match = r[e.level].nice_length,
										e.max_chain_length = r[e.level].max_chain,
										e.strstart = 0,
										e.block_start = 0,
										e.lookahead = 0,
										e.insert = 0,
										e.match_length = e.prev_length = U - 1,
										e.match_available = 0,
										e.ins_h = 0
									}
									(e.state),
									t
								}
								function fe(e, t, n, r, i, o) {
									if (!e)
										return g;
									var s = 1;
									if (t === m && (t = 6), r < 0 ? (s = 0, r = -r) : r > 15 && (s = 2, r -= 16), i < 1 || i > T || n !== z || r < 8 || r > 15 || t < 0 || t > 9 || o < 0 || o > k)
										return Q(e, g);
									8 === r && (r = 9);
									var l = new function () {
										this.strm = null,
										this.status = 0,
										this.pending_buf = null,
										this.pending_buf_size = 0,
										this.pending_out = 0,
										this.pending = 0,
										this.wrap = 0,
										this.gzhead = null,
										this.gzindex = 0,
										this.method = z,
										this.last_flush = -1,
										this.w_size = 0,
										this.w_bits = 0,
										this.w_mask = 0,
										this.window = null,
										this.window_size = 0,
										this.prev = null,
										this.head = null,
										this.ins_h = 0,
										this.hash_size = 0,
										this.hash_bits = 0,
										this.hash_mask = 0,
										this.hash_shift = 0,
										this.block_start = 0,
										this.match_length = 0,
										this.prev_match = 0,
										this.match_available = 0,
										this.strstart = 0,
										this.match_start = 0,
										this.lookahead = 0,
										this.prev_length = 0,
										this.max_chain_length = 0,
										this.max_lazy_match = 0,
										this.level = 0,
										this.strategy = 0,
										this.good_match = 0,
										this.nice_match = 0,
										this.dyn_ltree = new a.Buf16(2 * B),
										this.dyn_dtree = new a.Buf16(2 * (2 * C + 1)),
										this.bl_tree = new a.Buf16(2 * (2 * L + 1)),
										Z(this.dyn_ltree),
										Z(this.dyn_dtree),
										Z(this.bl_tree),
										this.l_desc = null,
										this.d_desc = null,
										this.bl_desc = null,
										this.bl_count = new a.Buf16(I + 1),
										this.heap = new a.Buf16(2 * P + 1),
										Z(this.heap),
										this.heap_len = 0,
										this.heap_max = 0,
										this.depth = new a.Buf16(2 * P + 1),
										Z(this.depth),
										this.l_buf = 0,
										this.lit_bufsize = 0,
										this.last_lit = 0,
										this.d_buf = 0,
										this.opt_len = 0,
										this.static_len = 0,
										this.matches = 0,
										this.insert = 0,
										this.bi_buf = 0,
										this.bi_valid = 0
									};
									return e.state = l,
									l.strm = e,
									l.wrap = s,
									l.gzhead = null,
									l.w_bits = r,
									l.w_size = 1 << l.w_bits,
									l.w_mask = l.w_size - 1,
									l.hash_bits = i + 7,
									l.hash_size = 1 << l.hash_bits,
									l.hash_mask = l.hash_size - 1,
									l.hash_shift = ~~((l.hash_bits + U - 1) / U),
									l.window = new a.Buf8(2 * l.w_size),
									l.head = new a.Buf16(l.hash_size),
									l.prev = new a.Buf16(l.w_size),
									l.lit_bufsize = 1 << i + 6,
									l.pending_buf_size = 4 * l.lit_bufsize,
									l.pending_buf = new a.Buf8(l.pending_buf_size),
									l.d_buf = 1 * l.lit_bufsize,
									l.l_buf = 3 * l.lit_bufsize,
									l.level = t,
									l.strategy = o,
									l.method = n,
									he(e)
								}
								r = [new de(0, 0, 0, 0, function (e, t) {
										var n = 65535;
										for (n > e.pending_buf_size - 5 && (n = e.pending_buf_size - 5); ; ) {
											if (e.lookahead <= 1) {
												if (oe(e), 0 === e.lookahead && t === d)
													return G;
												if (0 === e.lookahead)
													break
											}
											e.strstart += e.lookahead,
											e.lookahead = 0;
											var r = e.block_start + n;
											if ((0 === e.strstart || e.strstart >= r) && (e.lookahead = e.strstart - r, e.strstart = r, te(e, !1), 0 === e.strm.avail_out))
												return G;
											if (e.strstart - e.block_start >= e.w_size - D && (te(e, !1), 0 === e.strm.avail_out))
												return G
										}
										return e.insert = 0,
										t === f ? (te(e, !0), 0 === e.strm.avail_out ? $ : X) : (e.strstart > e.block_start && (te(e, !1), e.strm.avail_out), G)
									}), new de(4, 4, 8, 4, se), new de(4, 5, 16, 8, se), new de(4, 6, 32, 32, se), new de(4, 4, 16, 16, le), new de(8, 16, 32, 32, le), new de(8, 16, 128, 128, le), new de(8, 32, 128, 256, le), new de(32, 128, 258, 1024, le), new de(32, 258, 258, 4096, le)],
								n.deflateInit = function (e, t) {
									return fe(e, t, z, O, A, j)
								},
								n.deflateInit2 = fe,
								n.deflateReset = he,
								n.deflateResetKeep = ue,
								n.deflateSetHeader = function (e, t) {
									return e && e.state ? 2 !== e.state.wrap ? g : (e.state.gzhead = t, p) : g
								},
								n.deflate = function (e, t) {
									var n,
									a,
									o,
									l;
									if (!e || !e.state || t > c || t < 0)
										return e ? Q(e, g) : g;
									if (a = e.state, !e.output || !e.input && 0 !== e.avail_in || a.status === q && t !== f)
										return Q(e, 0 === e.avail_out ? v : g);
									if (a.strm = e, n = a.last_flush, a.last_flush = t, a.status === M)
										if (2 === a.wrap)
											e.adler = 0, ne(a, 31), ne(a, 139), ne(a, 8), a.gzhead ? (ne(a, (a.gzhead.text ? 1 : 0) + (a.gzhead.hcrc ? 2 : 0) + (a.gzhead.extra ? 4 : 0) + (a.gzhead.name ? 8 : 0) + (a.gzhead.comment ? 16 : 0)), ne(a, 255 & a.gzhead.time), ne(a, a.gzhead.time >> 8 & 255), ne(a, a.gzhead.time >> 16 & 255), ne(a, a.gzhead.time >> 24 & 255), ne(a, 9 === a.level ? 2 : a.strategy >= b || a.level < 2 ? 4 : 0), ne(a, 255 & a.gzhead.os), a.gzhead.extra && a.gzhead.extra.length && (ne(a, 255 & a.gzhead.extra.length), ne(a, a.gzhead.extra.length >> 8 & 255)), a.gzhead.hcrc && (e.adler = s(e.adler, a.pending_buf, a.pending, 0)), a.gzindex = 0, a.status = R) : (ne(a, 0), ne(a, 0), ne(a, 0), ne(a, 0), ne(a, 0), ne(a, 9 === a.level ? 2 : a.strategy >= b || a.level < 2 ? 4 : 0), ne(a, J), a.status = W);
										else {
											var w = z + (a.w_bits - 8 << 4) << 8;
											w |= (a.strategy >= b || a.level < 2 ? 0 : a.level < 6 ? 1 : 6 === a.level ? 2 : 3) << 6,
											0 !== a.strstart && (w |= N),
											w += 31 - w % 31,
											a.status = W,
											re(a, w),
											0 !== a.strstart && (re(a, e.adler >>> 16), re(a, 65535 & e.adler)),
											e.adler = 1
										}
									if (a.status === R)
										if (a.gzhead.extra) {
											for (o = a.pending; a.gzindex < (65535 & a.gzhead.extra.length) && (a.pending !== a.pending_buf_size || (a.gzhead.hcrc && a.pending > o && (e.adler = s(e.adler, a.pending_buf, a.pending - o, o)), ee(e), o = a.pending, a.pending !== a.pending_buf_size)); )
												ne(a, 255 & a.gzhead.extra[a.gzindex]), a.gzindex++;
											a.gzhead.hcrc && a.pending > o && (e.adler = s(e.adler, a.pending_buf, a.pending - o, o)),
											a.gzindex === a.gzhead.extra.length && (a.gzindex = 0, a.status = V)
										} else
											a.status = V;
									if (a.status === V)
										if (a.gzhead.name) {
											o = a.pending;
											do {
												if (a.pending === a.pending_buf_size && (a.gzhead.hcrc && a.pending > o && (e.adler = s(e.adler, a.pending_buf, a.pending - o, o)), ee(e), o = a.pending, a.pending === a.pending_buf_size)) {
													l = 1;
													break
												}
												l = a.gzindex < a.gzhead.name.length ? 255 & a.gzhead.name.charCodeAt(a.gzindex++) : 0,
												ne(a, l)
											} while (0 !== l);
											a.gzhead.hcrc && a.pending > o && (e.adler = s(e.adler, a.pending_buf, a.pending - o, o)),
											0 === l && (a.gzindex = 0, a.status = F)
										} else
											a.status = F;
									if (a.status === F)
										if (a.gzhead.comment) {
											o = a.pending;
											do {
												if (a.pending === a.pending_buf_size && (a.gzhead.hcrc && a.pending > o && (e.adler = s(e.adler, a.pending_buf, a.pending - o, o)), ee(e), o = a.pending, a.pending === a.pending_buf_size)) {
													l = 1;
													break
												}
												l = a.gzindex < a.gzhead.comment.length ? 255 & a.gzhead.comment.charCodeAt(a.gzindex++) : 0,
												ne(a, l)
											} while (0 !== l);
											a.gzhead.hcrc && a.pending > o && (e.adler = s(e.adler, a.pending_buf, a.pending - o, o)),
											0 === l && (a.status = H)
										} else
											a.status = H;
									if (a.status === H && (a.gzhead.hcrc ? (a.pending + 2 > a.pending_buf_size && ee(e), a.pending + 2 <= a.pending_buf_size && (ne(a, 255 & e.adler), ne(a, e.adler >> 8 & 255), e.adler = 0, a.status = W)) : a.status = W), 0 !== a.pending) {
										if (ee(e), 0 === e.avail_out)
											return a.last_flush = -1, p
									} else if (0 === e.avail_in && K(t) <= K(n) && t !== f)
										return Q(e, v);
									if (a.status === q && 0 !== e.avail_in)
										return Q(e, v);
									if (0 !== e.avail_in || 0 !== a.lookahead || t !== d && a.status !== q) {
										var m = a.strategy === b ? function (e, t) {
											for (var n; ; ) {
												if (0 === e.lookahead && (oe(e), 0 === e.lookahead)) {
													if (t === d)
														return G;
													break
												}
												if (e.match_length = 0, n = i._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++, n && (te(e, !1), 0 === e.strm.avail_out))
													return G
											}
											return e.insert = 0,
											t === f ? (te(e, !0), 0 === e.strm.avail_out ? $ : X) : e.last_lit && (te(e, !1), 0 === e.strm.avail_out) ? G : Y
										}
										(a, t) : a.strategy === x ? function (e, t) {
											for (var n, r, a, o, s = e.window; ; ) {
												if (e.lookahead <= E) {
													if (oe(e), e.lookahead <= E && t === d)
														return G;
													if (0 === e.lookahead)
														break
												}
												if (e.match_length = 0, e.lookahead >= U && e.strstart > 0 && (r = s[a = e.strstart - 1]) === s[++a] && r === s[++a] && r === s[++a]) {
													o = e.strstart + E;
													do {}
													while (r === s[++a] && r === s[++a] && r === s[++a] && r === s[++a] && r === s[++a] && r === s[++a] && r === s[++a] && r === s[++a] && a < o);
													e.match_length = E - (o - a),
													e.match_length > e.lookahead && (e.match_length = e.lookahead)
												}
												if (e.match_length >= U ? (n = i._tr_tally(e, 1, e.match_length - U), e.lookahead -= e.match_length, e.strstart += e.match_length, e.match_length = 0) : (n = i._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++), n && (te(e, !1), 0 === e.strm.avail_out))
													return G
											}
											return e.insert = 0,
											t === f ? (te(e, !0), 0 === e.strm.avail_out ? $ : X) : e.last_lit && (te(e, !1), 0 === e.strm.avail_out) ? G : Y
										}
										(a, t) : r[a.level].func(a, t);
										if (m !== $ && m !== X || (a.status = q), m === G || m === $)
											return 0 === e.avail_out && (a.last_flush = -1), p;
										if (m === Y && (t === u ? i._tr_align(a) : t !== c && (i._tr_stored_block(a, 0, 0, !1), t === h && (Z(a.head), 0 === a.lookahead && (a.strstart = 0, a.block_start = 0, a.insert = 0))), ee(e), 0 === e.avail_out))
											return a.last_flush = -1, p
									}
									return t !== f ? p : a.wrap <= 0 ? _ : (2 === a.wrap ? (ne(a, 255 & e.adler), ne(a, e.adler >> 8 & 255), ne(a, e.adler >> 16 & 255), ne(a, e.adler >> 24 & 255), ne(a, 255 & e.total_in), ne(a, e.total_in >> 8 & 255), ne(a, e.total_in >> 16 & 255), ne(a, e.total_in >> 24 & 255)) : (re(a, e.adler >>> 16), re(a, 65535 & e.adler)), ee(e), a.wrap > 0 && (a.wrap = -a.wrap), 0 !== a.pending ? p : _)
								},
								n.deflateEnd = function (e) {
									var t;
									return e && e.state ? (t = e.state.status) !== M && t !== R && t !== V && t !== F && t !== H && t !== W && t !== q ? Q(e, g) : (e.state = null, t === W ? Q(e, w) : p) : g
								},
								n.deflateSetDictionary = function (e, t) {
									var n,
									r,
									i,
									s,
									l,
									d,
									u,
									h,
									f = t.length;
									if (!e || !e.state)
										return g;
									if (2 === (s = (n = e.state).wrap) || 1 === s && n.status !== M || n.lookahead)
										return g;
									for (1 === s && (e.adler = o(e.adler, t, f, 0)), n.wrap = 0, f >= n.w_size && (0 === s && (Z(n.head), n.strstart = 0, n.block_start = 0, n.insert = 0), h = new a.Buf8(n.w_size), a.arraySet(h, t, f - n.w_size, n.w_size, 0), t = h, f = n.w_size), l = e.avail_in, d = e.next_in, u = e.input, e.avail_in = f, e.next_in = 0, e.input = t, oe(n); n.lookahead >= U; ) {
										r = n.strstart,
										i = n.lookahead - (U - 1);
										do {
											n.ins_h = (n.ins_h << n.hash_shift ^ n.window[r + U - 1]) & n.hash_mask,
											n.prev[r & n.w_mask] = n.head[n.ins_h],
											n.head[n.ins_h] = r,
											r++
										} while (--i);
										n.strstart = r,
										n.lookahead = U - 1,
										oe(n)
									}
									return n.strstart += n.lookahead,
									n.block_start = n.strstart,
									n.insert = n.lookahead,
									n.lookahead = 0,
									n.match_length = n.prev_length = U - 1,
									n.match_available = 0,
									e.next_in = d,
									e.input = u,
									e.avail_in = l,
									n.wrap = s,
									p
								},
								n.deflateInfo = "pako deflate (from Nodeca project)"
							}, {
								"../utils/common": 1,
								"./adler32": 3,
								"./crc32": 4,
								"./messages": 6,
								"./trees": 7
							}
						],
						6: [function (e, t, n) {
								t.exports = {
									2: "need dictionary",
									1: "stream end",
									0: "",
									"-1": "file error",
									"-2": "stream error",
									"-3": "data error",
									"-4": "insufficient memory",
									"-5": "buffer error",
									"-6": "incompatible version"
								}
							}, {}
						],
						7: [function (e, t, n) {
								var r = e("../utils/common"),
								a = 4,
								i = 0,
								o = 1,
								s = 2;
								function l(e) {
									for (var t = e.length; --t >= 0; )
										e[t] = 0
								}
								var d = 0,
								u = 1,
								h = 2,
								f = 29,
								c = 256,
								p = c + 1 + f,
								_ = 30,
								g = 19,
								w = 2 * p + 1,
								v = 15,
								m = 16,
								y = 7,
								b = 256,
								x = 16,
								k = 17,
								j = 18,
								S = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
								z = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
								T = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
								O = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
								A = new Array(2 * (p + 2));
								l(A);
								var P = new Array(2 * _);
								l(P);
								var C = new Array(512);
								l(C);
								var L = new Array(256);
								l(L);
								var B = new Array(f);
								l(B);
								var I,
								U,
								E,
								D = new Array(_);
								function N(e, t, n, r, a) {
									this.static_tree = e,
									this.extra_bits = t,
									this.extra_base = n,
									this.elems = r,
									this.max_length = a,
									this.has_stree = e && e.length
								}
								function M(e, t) {
									this.dyn_tree = e,
									this.max_code = 0,
									this.stat_desc = t
								}
								function R(e) {
									return e < 256 ? C[e] : C[256 + (e >>> 7)]
								}
								function V(e, t) {
									e.pending_buf[e.pending++] = 255 & t,
									e.pending_buf[e.pending++] = t >>> 8 & 255
								}
								function F(e, t, n) {
									e.bi_valid > m - n ? (e.bi_buf |= t << e.bi_valid & 65535, V(e, e.bi_buf), e.bi_buf = t >> m - e.bi_valid, e.bi_valid += n - m) : (e.bi_buf |= t << e.bi_valid & 65535, e.bi_valid += n)
								}
								function H(e, t, n) {
									F(e, n[2 * t], n[2 * t + 1])
								}
								function W(e, t) {
									var n = 0;
									do {
										n |= 1 & e,
										e >>>= 1,
										n <<= 1
									} while (--t > 0);
									return n >>> 1
								}
								function q(e, t, n) {
									var r,
									a,
									i = new Array(v + 1),
									o = 0;
									for (r = 1; r <= v; r++)
										i[r] = o = o + n[r - 1] << 1;
									for (a = 0; a <= t; a++) {
										var s = e[2 * a + 1];
										0 !== s && (e[2 * a] = W(i[s]++, s))
									}
								}
								function G(e) {
									var t;
									for (t = 0; t < p; t++)
										e.dyn_ltree[2 * t] = 0;
									for (t = 0; t < _; t++)
										e.dyn_dtree[2 * t] = 0;
									for (t = 0; t < g; t++)
										e.bl_tree[2 * t] = 0;
									e.dyn_ltree[2 * b] = 1,
									e.opt_len = e.static_len = 0,
									e.last_lit = e.matches = 0
								}
								function Y(e) {
									e.bi_valid > 8 ? V(e, e.bi_buf) : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf),
									e.bi_buf = 0,
									e.bi_valid = 0
								}
								function $(e, t, n, r) {
									var a = 2 * t,
									i = 2 * n;
									return e[a] < e[i] || e[a] === e[i] && r[t] <= r[n]
								}
								function X(e, t, n) {
									for (var r = e.heap[n], a = n << 1; a <= e.heap_len && (a < e.heap_len && $(t, e.heap[a + 1], e.heap[a], e.depth) && a++, !$(t, r, e.heap[a], e.depth)); )
										e.heap[n] = e.heap[a], n = a, a <<= 1;
									e.heap[n] = r
								}
								function J(e, t, n) {
									var r,
									a,
									i,
									o,
									s = 0;
									if (0 !== e.last_lit)
										do {
											r = e.pending_buf[e.d_buf + 2 * s] << 8 | e.pending_buf[e.d_buf + 2 * s + 1],
											a = e.pending_buf[e.l_buf + s],
											s++,
											0 === r ? H(e, a, t) : (H(e, (i = L[a]) + c + 1, t), 0 !== (o = S[i]) && F(e, a -= B[i], o), H(e, i = R(--r), n), 0 !== (o = z[i]) && F(e, r -= D[i], o))
										} while (s < e.last_lit);
									H(e, b, t)
								}
								function Q(e, t) {
									var n,
									r,
									a,
									i = t.dyn_tree,
									o = t.stat_desc.static_tree,
									s = t.stat_desc.has_stree,
									l = t.stat_desc.elems,
									d = -1;
									for (e.heap_len = 0, e.heap_max = w, n = 0; n < l; n++)
										0 !== i[2 * n] ? (e.heap[++e.heap_len] = d = n, e.depth[n] = 0) : i[2 * n + 1] = 0;
									for (; e.heap_len < 2; )
										i[2 * (a = e.heap[++e.heap_len] = d < 2 ? ++d : 0)] = 1, e.depth[a] = 0, e.opt_len--, s && (e.static_len -= o[2 * a + 1]);
									for (t.max_code = d, n = e.heap_len >> 1; n >= 1; n--)
										X(e, i, n);
									a = l;
									do {
										n = e.heap[1],
										e.heap[1] = e.heap[e.heap_len--],
										X(e, i, 1),
										r = e.heap[1],
										e.heap[--e.heap_max] = n,
										e.heap[--e.heap_max] = r,
										i[2 * a] = i[2 * n] + i[2 * r],
										e.depth[a] = (e.depth[n] >= e.depth[r] ? e.depth[n] : e.depth[r]) + 1,
										i[2 * n + 1] = i[2 * r + 1] = a,
										e.heap[1] = a++,
										X(e, i, 1)
									} while (e.heap_len >= 2);
									e.heap[--e.heap_max] = e.heap[1],
									function (e, t) {
										var n,
										r,
										a,
										i,
										o,
										s,
										l = t.dyn_tree,
										d = t.max_code,
										u = t.stat_desc.static_tree,
										h = t.stat_desc.has_stree,
										f = t.stat_desc.extra_bits,
										c = t.stat_desc.extra_base,
										p = t.stat_desc.max_length,
										_ = 0;
										for (i = 0; i <= v; i++)
											e.bl_count[i] = 0;
										for (l[2 * e.heap[e.heap_max] + 1] = 0, n = e.heap_max + 1; n < w; n++)
											(i = l[2 * l[2 * (r = e.heap[n]) + 1] + 1] + 1) > p && (i = p, _++), l[2 * r + 1] = i, r > d || (e.bl_count[i]++, o = 0, r >= c && (o = f[r - c]), s = l[2 * r], e.opt_len += s * (i + o), h && (e.static_len += s * (u[2 * r + 1] + o)));
										if (0 !== _) {
											do {
												for (i = p - 1; 0 === e.bl_count[i]; )
													i--;
												e.bl_count[i]--,
												e.bl_count[i + 1] += 2,
												e.bl_count[p]--,
												_ -= 2
											} while (_ > 0);
											for (i = p; 0 !== i; i--)
												for (r = e.bl_count[i]; 0 !== r; )
													(a = e.heap[--n]) > d || (l[2 * a + 1] !== i && (e.opt_len += (i - l[2 * a + 1]) * l[2 * a], l[2 * a + 1] = i), r--)
										}
									}
									(e, t),
									q(i, d, e.bl_count)
								}
								function K(e, t, n) {
									var r,
									a,
									i = -1,
									o = t[1],
									s = 0,
									l = 7,
									d = 4;
									for (0 === o && (l = 138, d = 3), t[2 * (n + 1) + 1] = 65535, r = 0; r <= n; r++)
										a = o, o = t[2 * (r + 1) + 1], ++s < l && a === o || (s < d ? e.bl_tree[2 * a] += s : 0 !== a ? (a !== i && e.bl_tree[2 * a]++, e.bl_tree[2 * x]++) : s <= 10 ? e.bl_tree[2 * k]++ : e.bl_tree[2 * j]++, s = 0, i = a, 0 === o ? (l = 138, d = 3) : a === o ? (l = 6, d = 3) : (l = 7, d = 4))
								}
								function Z(e, t, n) {
									var r,
									a,
									i = -1,
									o = t[1],
									s = 0,
									l = 7,
									d = 4;
									for (0 === o && (l = 138, d = 3), r = 0; r <= n; r++)
										if (a = o, o = t[2 * (r + 1) + 1], !(++s < l && a === o)) {
											if (s < d) {
												do {
													H(e, a, e.bl_tree)
												} while (0 != --s)
											} else
												0 !== a ? (a !== i && (H(e, a, e.bl_tree), s--), H(e, x, e.bl_tree), F(e, s - 3, 2)) : s <= 10 ? (H(e, k, e.bl_tree), F(e, s - 3, 3)) : (H(e, j, e.bl_tree), F(e, s - 11, 7));
											s = 0,
											i = a,
											0 === o ? (l = 138, d = 3) : a === o ? (l = 6, d = 3) : (l = 7, d = 4)
										}
								}
								l(D);
								var ee = !1;
								function te(e, t, n, a) {
									F(e, (d << 1) + (a ? 1 : 0), 3),
									function (e, t, n, a) {
										Y(e),
										a && (V(e, n), V(e, ~n)),
										r.arraySet(e.pending_buf, e.window, t, n, e.pending),
										e.pending += n
									}
									(e, t, n, !0)
								}
								n._tr_init = function (e) {
									ee || (function () {
										var e,
										t,
										n,
										r,
										a,
										i = new Array(v + 1);
										for (n = 0, r = 0; r < f - 1; r++)
											for (B[r] = n, e = 0; e < 1 << S[r]; e++)
												L[n++] = r;
										for (L[n - 1] = r, a = 0, r = 0; r < 16; r++)
											for (D[r] = a, e = 0; e < 1 << z[r]; e++)
												C[a++] = r;
										for (a >>= 7; r < _; r++)
											for (D[r] = a << 7, e = 0; e < 1 << z[r] - 7; e++)
												C[256 + a++] = r;
										for (t = 0; t <= v; t++)
											i[t] = 0;
										for (e = 0; e <= 143; )
											A[2 * e + 1] = 8, e++, i[8]++;
										for (; e <= 255; )
											A[2 * e + 1] = 9, e++, i[9]++;
										for (; e <= 279; )
											A[2 * e + 1] = 7, e++, i[7]++;
										for (; e <= 287; )
											A[2 * e + 1] = 8, e++, i[8]++;
										for (q(A, p + 1, i), e = 0; e < _; e++)
											P[2 * e + 1] = 5, P[2 * e] = W(e, 5);
										I = new N(A, S, c + 1, p, v),
										U = new N(P, z, 0, _, v),
										E = new N(new Array(0), T, 0, g, y)
									}
										(), ee = !0),
									e.l_desc = new M(e.dyn_ltree, I),
									e.d_desc = new M(e.dyn_dtree, U),
									e.bl_desc = new M(e.bl_tree, E),
									e.bi_buf = 0,
									e.bi_valid = 0,
									G(e)
								},
								n._tr_stored_block = te,
								n._tr_flush_block = function (e, t, n, r) {
									var l,
									d,
									f = 0;
									e.level > 0 ? (e.strm.data_type === s && (e.strm.data_type = function (e) {
											var t,
											n = 4093624447;
											for (t = 0; t <= 31; t++, n >>>= 1)
												if (1 & n && 0 !== e.dyn_ltree[2 * t])
													return i;
											if (0 !== e.dyn_ltree[18] || 0 !== e.dyn_ltree[20] || 0 !== e.dyn_ltree[26])
												return o;
											for (t = 32; t < c; t++)
												if (0 !== e.dyn_ltree[2 * t])
													return o;
											return i
										}
											(e)), Q(e, e.l_desc), Q(e, e.d_desc), f = function (e) {
										var t;
										for (K(e, e.dyn_ltree, e.l_desc.max_code), K(e, e.dyn_dtree, e.d_desc.max_code), Q(e, e.bl_desc), t = g - 1; t >= 3 && 0 === e.bl_tree[2 * O[t] + 1]; t--);
										return e.opt_len += 3 * (t + 1) + 5 + 5 + 4,
										t
									}
										(e), l = e.opt_len + 3 + 7 >>> 3, (d = e.static_len + 3 + 7 >>> 3) <= l && (l = d)) : l = d = n + 5,
									n + 4 <= l && -1 !== t ? te(e, t, n, r) : e.strategy === a || d === l ? (F(e, (u << 1) + (r ? 1 : 0), 3), J(e, A, P)) : (F(e, (h << 1) + (r ? 1 : 0), 3), function (e, t, n, r) {
										var a;
										for (F(e, t - 257, 5), F(e, n - 1, 5), F(e, r - 4, 4), a = 0; a < r; a++)
											F(e, e.bl_tree[2 * O[a] + 1], 3);
										Z(e, e.dyn_ltree, t - 1),
										Z(e, e.dyn_dtree, n - 1)
									}
										(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, f + 1), J(e, e.dyn_ltree, e.dyn_dtree)),
									G(e),
									r && Y(e)
								},
								n._tr_tally = function (e, t, n) {
									return e.pending_buf[e.d_buf + 2 * e.last_lit] = t >>> 8 & 255,
									e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t,
									e.pending_buf[e.l_buf + e.last_lit] = 255 & n,
									e.last_lit++,
									0 === t ? e.dyn_ltree[2 * n]++ : (e.matches++, t--, e.dyn_ltree[2 * (L[n] + c + 1)]++, e.dyn_dtree[2 * R(t)]++),
									e.last_lit === e.lit_bufsize - 1
								},
								n._tr_align = function (e) {
									F(e, u << 1, 3),
									H(e, b, A),
									function (e) {
										16 === e.bi_valid ? (V(e, e.bi_buf), e.bi_buf = 0, e.bi_valid = 0) : e.bi_valid >= 8 && (e.pending_buf[e.pending++] = 255 & e.bi_buf, e.bi_buf >>= 8, e.bi_valid -= 8)
									}
									(e)
								}
							}, {
								"../utils/common": 1
							}
						],
						8: [function (e, t, n) {
								t.exports = function () {
									this.input = null,
									this.next_in = 0,
									this.avail_in = 0,
									this.total_in = 0,
									this.output = null,
									this.next_out = 0,
									this.avail_out = 0,
									this.total_out = 0,
									this.msg = "",
									this.state = null,
									this.data_type = 2,
									this.adler = 0
								}
							}, {}
						],
						"/lib/deflate.js": [function (e, t, n) {
								var r = e("./zlib/deflate"),
								a = e("./utils/common"),
								i = e("./utils/strings"),
								o = e("./zlib/messages"),
								s = e("./zlib/zstream"),
								l = Object.prototype.toString,
								d = 0,
								u = -1,
								h = 0,
								f = 8;
								function c(e) {
									if (!(this instanceof c))
										return new c(e);
									this.options = a.assign({
											level: u,
											method: f,
											chunkSize: 16384,
											windowBits: 15,
											memLevel: 8,
											strategy: h,
											to: ""
										}, e || {});
									var t = this.options;
									t.raw && t.windowBits > 0 ? t.windowBits = -t.windowBits : t.gzip && t.windowBits > 0 && t.windowBits < 16 && (t.windowBits += 16),
									this.err = 0,
									this.msg = "",
									this.ended = !1,
									this.chunks = [],
									this.strm = new s,
									this.strm.avail_out = 0;
									var n = r.deflateInit2(this.strm, t.level, t.method, t.windowBits, t.memLevel, t.strategy);
									if (n !== d)
										throw new Error(o[n]);
									if (t.header && r.deflateSetHeader(this.strm, t.header), t.dictionary) {
										var p;
										if (p = "string" == typeof t.dictionary ? i.string2buf(t.dictionary) : "[object ArrayBuffer]" === l.call(t.dictionary) ? new Uint8Array(t.dictionary) : t.dictionary, (n = r.deflateSetDictionary(this.strm, p)) !== d)
											throw new Error(o[n]);
										this._dict_set = !0
									}
								}
								function p(e, t) {
									var n = new c(t);
									if (n.push(e, !0), n.err)
										throw n.msg || o[n.err];
									return n.result
								}
								c.prototype.push = function (e, t) {
									var n,
									o,
									s = this.strm,
									u = this.options.chunkSize;
									if (this.ended)
										return !1;
									o = t === ~~t ? t : !0 === t ? 4 : 0,
									"string" == typeof e ? s.input = i.string2buf(e) : "[object ArrayBuffer]" === l.call(e) ? s.input = new Uint8Array(e) : s.input = e,
									s.next_in = 0,
									s.avail_in = s.input.length;
									do {
										if (0 === s.avail_out && (s.output = new a.Buf8(u), s.next_out = 0, s.avail_out = u), 1 !== (n = r.deflate(s, o)) && n !== d)
											return this.onEnd(n), this.ended = !0, !1;
										0 !== s.avail_out && (0 !== s.avail_in || 4 !== o && 2 !== o) || ("string" === this.options.to ? this.onData(i.buf2binstring(a.shrinkBuf(s.output, s.next_out))) : this.onData(a.shrinkBuf(s.output, s.next_out)))
									} while ((s.avail_in > 0 || 0 === s.avail_out) && 1 !== n);
									return 4 === o ? (n = r.deflateEnd(this.strm), this.onEnd(n), this.ended = !0, n === d) : 2 !== o || (this.onEnd(d), s.avail_out = 0, !0)
								},
								c.prototype.onData = function (e) {
									this.chunks.push(e)
								},
								c.prototype.onEnd = function (e) {
									e === d && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = a.flattenChunks(this.chunks)),
									this.chunks = [],
									this.err = e,
									this.msg = this.strm.msg
								},
								n.Deflate = c,
								n.deflate = p,
								n.deflateRaw = function (e, t) {
									return (t = t || {}).raw = !0,
									p(e, t)
								},
								n.gzip = function (e, t) {
									return (t = t || {}).gzip = !0,
									p(e, t)
								}
							}, {
								"./utils/common": 1,
								"./utils/strings": 2,
								"./zlib/deflate": 5,
								"./zlib/messages": 6,
								"./zlib/zstream": 8
							}
						]
					}, {}, [])("/lib/deflate.js")
				})
			}, function (e, t, n) {
				"use strict";
				!function () {
					var t = n(6),
					r = n(0).utf8,
					a = n(7),
					i = n(0).bin,
					o = function s(e, n) {
						e.constructor == String ? e = n && "binary" === n.encoding ? i.stringToBytes(e) : r.stringToBytes(e) : a(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || (e = e.toString());
						for (var o = t.bytesToWords(e), l = 8 * e.length, d = 1732584193, u = -271733879, h = -1732584194, f = 271733878, c = 0; c < o.length; c++)
							o[c] = 16711935 & (o[c] << 8 | o[c] >>> 24) | 4278255360 & (o[c] << 24 | o[c] >>> 8);
						o[l >>> 5] |= 128 << l % 32,
						o[14 + (l + 64 >>> 9 << 4)] = l;
						var p = s._ff,
						_ = s._gg,
						g = s._hh,
						w = s._ii;
						for (c = 0; c < o.length; c += 16) {
							var v = d,
							m = u,
							y = h,
							b = f;
							u = w(u = w(u = w(u = w(u = g(u = g(u = g(u = g(u = _(u = _(u = _(u = _(u = p(u = p(u = p(u = p(u, h = p(h, f = p(f, d = p(d, u, h, f, o[c + 0], 7, -680876936), u, h, o[c + 1], 12, -389564586), d, u, o[c + 2], 17, 606105819), f, d, o[c + 3], 22, -1044525330), h = p(h, f = p(f, d = p(d, u, h, f, o[c + 4], 7, -176418897), u, h, o[c + 5], 12, 1200080426), d, u, o[c + 6], 17, -1473231341), f, d, o[c + 7], 22, -45705983), h = p(h, f = p(f, d = p(d, u, h, f, o[c + 8], 7, 1770035416), u, h, o[c + 9], 12, -1958414417), d, u, o[c + 10], 17, -42063), f, d, o[c + 11], 22, -1990404162), h = p(h, f = p(f, d = p(d, u, h, f, o[c + 12], 7, 1804603682), u, h, o[c + 13], 12, -40341101), d, u, o[c + 14], 17, -1502002290), f, d, o[c + 15], 22, 1236535329), h = _(h, f = _(f, d = _(d, u, h, f, o[c + 1], 5, -165796510), u, h, o[c + 6], 9, -1069501632), d, u, o[c + 11], 14, 643717713), f, d, o[c + 0], 20, -373897302), h = _(h, f = _(f, d = _(d, u, h, f, o[c + 5], 5, -701558691), u, h, o[c + 10], 9, 38016083), d, u, o[c + 15], 14, -660478335), f, d, o[c + 4], 20, -405537848), h = _(h, f = _(f, d = _(d, u, h, f, o[c + 9], 5, 568446438), u, h, o[c + 14], 9, -1019803690), d, u, o[c + 3], 14, -187363961), f, d, o[c + 8], 20, 1163531501), h = _(h, f = _(f, d = _(d, u, h, f, o[c + 13], 5, -1444681467), u, h, o[c + 2], 9, -51403784), d, u, o[c + 7], 14, 1735328473), f, d, o[c + 12], 20, -1926607734), h = g(h, f = g(f, d = g(d, u, h, f, o[c + 5], 4, -378558), u, h, o[c + 8], 11, -2022574463), d, u, o[c + 11], 16, 1839030562), f, d, o[c + 14], 23, -35309556), h = g(h, f = g(f, d = g(d, u, h, f, o[c + 1], 4, -1530992060), u, h, o[c + 4], 11, 1272893353), d, u, o[c + 7], 16, -155497632), f, d, o[c + 10], 23, -1094730640), h = g(h, f = g(f, d = g(d, u, h, f, o[c + 13], 4, 681279174), u, h, o[c + 0], 11, -358537222), d, u, o[c + 3], 16, -722521979), f, d, o[c + 6], 23, 76029189), h = g(h, f = g(f, d = g(d, u, h, f, o[c + 9], 4, -640364487), u, h, o[c + 12], 11, -421815835), d, u, o[c + 15], 16, 530742520), f, d, o[c + 2], 23, -995338651), h = w(h, f = w(f, d = w(d, u, h, f, o[c + 0], 6, -198630844), u, h, o[c + 7], 10, 1126891415), d, u, o[c + 14], 15, -1416354905), f, d, o[c + 5], 21, -57434055), h = w(h, f = w(f, d = w(d, u, h, f, o[c + 12], 6, 1700485571), u, h, o[c + 3], 10, -1894986606), d, u, o[c + 10], 15, -1051523), f, d, o[c + 1], 21, -2054922799), h = w(h, f = w(f, d = w(d, u, h, f, o[c + 8], 6, 1873313359), u, h, o[c + 15], 10, -30611744), d, u, o[c + 6], 15, -1560198380), f, d, o[c + 13], 21, 1309151649), h = w(h, f = w(f, d = w(d, u, h, f, o[c + 4], 6, -145523070), u, h, o[c + 11], 10, -1120210379), d, u, o[c + 2], 15, 718787259), f, d, o[c + 9], 21, -343485551),
							d = d + v >>> 0,
							u = u + m >>> 0,
							h = h + y >>> 0,
							f = f + b >>> 0
						}
						return t.endian([d, u, h, f])
					};
					o._ff = function (e, t, n, r, a, i, o) {
						var s = e + (t & n | ~t & r) + (a >>> 0) + o;
						return (s << i | s >>> 32 - i) + t
					},
					o._gg = function (e, t, n, r, a, i, o) {
						var s = e + (t & r | n & ~r) + (a >>> 0) + o;
						return (s << i | s >>> 32 - i) + t
					},
					o._hh = function (e, t, n, r, a, i, o) {
						var s = e + (t ^ n ^ r) + (a >>> 0) + o;
						return (s << i | s >>> 32 - i) + t
					},
					o._ii = function (e, t, n, r, a, i, o) {
						var s = e + (n ^ (t | ~r)) + (a >>> 0) + o;
						return (s << i | s >>> 32 - i) + t
					},
					o._blocksize = 16,
					o._digestsize = 16,
					e.exports = function (e, n) {
						if (e === undefined || null === e)
							throw new Error("Illegal argument " + e);
						var r = t.wordsToBytes(o(e, n));
						return n && n.asBytes ? r : n && n.asString ? i.bytesToString(r) : t.bytesToHex(r)
					}
				}
				()
			}, function (e, t, n) {
				"use strict";
				!function () {
					var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
					n = {
						rotl: function (e, t) {
							return e << t | e >>> 32 - t
						},
						rotr: function (e, t) {
							return e << 32 - t | e >>> t
						},
						endian: function (e) {
							if (e.constructor == Number)
								return 16711935 & n.rotl(e, 8) | 4278255360 & n.rotl(e, 24);
							for (var t = 0; t < e.length; t++)
								e[t] = n.endian(e[t]);
							return e
						},
						randomBytes: function (e) {
							for (var t = []; e > 0; e--)
								t.push(Math.floor(256 * Math.random()));
							return t
						},
						bytesToWords: function (e) {
							for (var t = [], n = 0, r = 0; n < e.length; n++, r += 8)
								t[r >>> 5] |= e[n] << 24 - r % 32;
							return t
						},
						wordsToBytes: function (e) {
							for (var t = [], n = 0; n < 32 * e.length; n += 8)
								t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
							return t
						},
						bytesToHex: function (e) {
							for (var t = [], n = 0; n < e.length; n++)
								t.push((e[n] >>> 4).toString(16)), t.push((15 & e[n]).toString(16));
							return t.join("")
						},
						hexToBytes: function (e) {
							for (var t = [], n = 0; n < e.length; n += 2)
								t.push(parseInt(e.substr(n, 2), 16));
							return t
						},
						bytesToBase64: function (e) {
							for (var n = [], r = 0; r < e.length; r += 3)
								for (var a = e[r] << 16 | e[r + 1] << 8 | e[r + 2], i = 0; i < 4; i++)
									8 * r + 6 * i <= 8 * e.length ? n.push(t.charAt(a >>> 6 * (3 - i) & 63)) : n.push("=");
							return n.join("")
						},
						base64ToBytes: function (e) {
							e = e.replace(/[^A-Z0-9+\/]/gi, "");
							for (var n = [], r = 0, a = 0; r < e.length; a = ++r % 4)
								0 != a && n.push((t.indexOf(e.charAt(r - 1)) & Math.pow(2, -2 * a + 8) - 1) << 2 * a | t.indexOf(e.charAt(r)) >>> 6 - 2 * a);
							return n
						}
					};
					e.exports = n
				}
				()
			}, function (e, t, n) {
				"use strict";
				function r(e) {
					return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
				}
				e.exports = function (e) {
					return null != e && (r(e) || function (e) {
						return "function" == typeof e.readFloatLE && "function" == typeof e.slice && r(e.slice(0, 0))
					}
						(e) || !!e._isBuffer)
				}
			}
		])["default"]
});
