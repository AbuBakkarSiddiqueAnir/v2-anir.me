import { g as sn } from "./index.0fa819ad.js";
import { c as Ho } from "./_commonjsHelpers.725317a4.js";
var On = { exports: {} };
(function (Qt, pr) {
  (function (gt, St) {
    St(pr);
  })(Ho, function (gt) {
    function St(i, e) {
      for (var n = 0; n < e.length; n++) {
        var t = e[n];
        (t.enumerable = t.enumerable || !1),
          (t.configurable = !0),
          "value" in t && (t.writable = !0),
          Object.defineProperty(i, t.key, t);
      }
    }
    function To(i, e, n) {
      return e && St(i.prototype, e), n && St(i, n), i;
    }
    /*!
     * Observer 3.12.4
     * https://gsap.com
     *
     * @license Copyright 2008-2023, GreenSock. All rights reserved.
     * Subject to the terms at https://gsap.com/standard-license or for
     * Club GSAP members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */ var de,
      Or,
      Be,
      Ct,
      Tt,
      jt,
      An,
      At,
      dr,
      Fn,
      ht,
      Qe,
      In,
      Yn = function () {
        return (
          de ||
          (typeof window < "u" && (de = window.gsap) && de.registerPlugin && de)
        );
      },
      Ln = 1,
      er = [],
      T = [],
      st = [],
      gr = Date.now,
      ln = function (e, n) {
        return n;
      },
      ko = function () {
        var e = dr.core,
          n = e.bridge || {},
          t = e._scrollers,
          r = e._proxies;
        t.push.apply(t, T),
          r.push.apply(r, st),
          (T = t),
          (st = r),
          (ln = function (a, l) {
            return n[a](l);
          });
      },
      kt = function (e, n) {
        return ~st.indexOf(e) && st[st.indexOf(e) + 1][n];
      },
      hr = function (e) {
        return !!~Fn.indexOf(e);
      },
      be = function (e, n, t, r, o) {
        return e.addEventListener(n, t, { passive: !r, capture: !!o });
      },
      ye = function (e, n, t, r) {
        return e.removeEventListener(n, t, !!r);
      },
      Ar = "scrollLeft",
      Fr = "scrollTop",
      an = function () {
        return (ht && ht.isPressed) || T.cache++;
      },
      Ir = function (e, n) {
        var t = function r(o) {
          if (o || o === 0) {
            Ln && (Be.history.scrollRestoration = "manual");
            var a = ht && ht.isPressed;
            (o = r.v = Math.round(o) || (ht && ht.iOS ? 1 : 0)),
              e(o),
              (r.cacheID = T.cache),
              a && ln("ss", o);
          } else
            (n || T.cache !== r.cacheID || ln("ref")) &&
              ((r.cacheID = T.cache), (r.v = e()));
          return r.v + r.offset;
        };
        return (t.offset = 0), e && t;
      },
      Se = {
        s: Ar,
        p: "left",
        p2: "Left",
        os: "right",
        os2: "Right",
        d: "width",
        d2: "Width",
        a: "x",
        sc: Ir(function (i) {
          return arguments.length
            ? Be.scrollTo(i, re.sc())
            : Be.pageXOffset || Ct[Ar] || Tt[Ar] || jt[Ar] || 0;
        }),
      },
      re = {
        s: Fr,
        p: "top",
        p2: "Top",
        os: "bottom",
        os2: "Bottom",
        d: "height",
        d2: "Height",
        a: "y",
        op: Se,
        sc: Ir(function (i) {
          return arguments.length
            ? Be.scrollTo(Se.sc(), i)
            : Be.pageYOffset || Ct[Fr] || Tt[Fr] || jt[Fr] || 0;
        }),
      },
      Ye = function (e, n) {
        return (
          ((n && n._ctx && n._ctx.selector) || de.utils.toArray)(e)[0] ||
          (typeof e == "string" && de.config().nullTargetWarn !== !1
            ? console.warn("Element not found:", e)
            : null)
        );
      },
      Et = function (e, n) {
        var t = n.s,
          r = n.sc;
        hr(e) && (e = Ct.scrollingElement || Tt);
        var o = T.indexOf(e),
          a = r === re.sc ? 1 : 2;
        !~o && (o = T.push(e) - 1), T[o + a] || be(e, "scroll", an);
        var l = T[o + a],
          f =
            l ||
            (T[o + a] =
              Ir(kt(e, t), !0) ||
              (hr(e)
                ? r
                : Ir(function (x) {
                    return arguments.length ? (e[t] = x) : e[t];
                  })));
        return (
          (f.target = e),
          l || (f.smooth = de.getProperty(e, "scrollBehavior") === "smooth"),
          f
        );
      },
      un = function (e, n, t) {
        var r = e,
          o = e,
          a = gr(),
          l = a,
          f = n || 50,
          x = Math.max(500, f * 3),
          A = function (_, V) {
            var X = gr();
            V || X - a > f
              ? ((o = r), (r = _), (l = a), (a = X))
              : t
                ? (r += _)
                : (r = o + ((_ - o) / (X - l)) * (a - l));
          },
          R = function () {
            (o = r = t ? 0 : r), (l = a = 0);
          },
          g = function (_) {
            var V = l,
              X = o,
              ne = gr();
            return (
              (_ || _ === 0) && _ !== r && A(_),
              a === l || ne - l > x
                ? 0
                : ((r + (t ? X : -X)) / ((t ? ne : a) - V)) * 1e3
            );
          };
        return { update: A, reset: R, getVelocity: g };
      },
      _r = function (e, n) {
        return (
          n && !e._gsapAllow && e.preventDefault(),
          e.changedTouches ? e.changedTouches[0] : e
        );
      },
      zn = function (e) {
        var n = Math.max.apply(Math, e),
          t = Math.min.apply(Math, e);
        return Math.abs(n) >= Math.abs(t) ? n : t;
      },
      Xn = function () {
        (dr = de.core.globals().ScrollTrigger), dr && dr.core && ko();
      },
      Nn = function (e) {
        return (
          (de = e || Yn()),
          !Or &&
            de &&
            typeof document < "u" &&
            document.body &&
            ((Be = window),
            (Ct = document),
            (Tt = Ct.documentElement),
            (jt = Ct.body),
            (Fn = [Be, Ct, Tt, jt]),
            de.utils.clamp,
            (In = de.core.context || function () {}),
            (At = "onpointerenter" in jt ? "pointer" : "mouse"),
            (An = q.isTouch =
              Be.matchMedia &&
              Be.matchMedia("(hover: none), (pointer: coarse)").matches
                ? 1
                : "ontouchstart" in Be ||
                    navigator.maxTouchPoints > 0 ||
                    navigator.msMaxTouchPoints > 0
                  ? 2
                  : 0),
            (Qe = q.eventTypes =
              (
                "ontouchstart" in Tt
                  ? "touchstart,touchmove,touchcancel,touchend"
                  : "onpointerdown" in Tt
                    ? "pointerdown,pointermove,pointercancel,pointerup"
                    : "mousedown,mousemove,mouseup,mouseup"
              ).split(",")),
            setTimeout(function () {
              return (Ln = 0);
            }, 500),
            Xn(),
            (Or = 1)),
          Or
        );
      };
    (Se.op = re), (T.cache = 0);
    var q = (function () {
      function i(n) {
        this.init(n);
      }
      var e = i.prototype;
      return (
        (e.init = function (t) {
          Or || Nn(de) || console.warn("Please gsap.registerPlugin(Observer)"),
            dr || Xn();
          var r = t.tolerance,
            o = t.dragMinimum,
            a = t.type,
            l = t.target,
            f = t.lineHeight,
            x = t.debounce,
            A = t.preventDefault,
            R = t.onStop,
            g = t.onStopDelay,
            c = t.ignore,
            _ = t.wheelSpeed,
            V = t.event,
            X = t.onDragStart,
            ne = t.onDragEnd,
            H = t.onDrag,
            ge = t.onPress,
            S = t.onRelease,
            Ze = t.onRight,
            N = t.onLeft,
            b = t.onUp,
            Pe = t.onDown,
            Le = t.onChangeX,
            h = t.onChangeY,
            he = t.onChange,
            w = t.onToggleX,
            vt = t.onToggleY,
            oe = t.onHover,
            De = t.onHoverEnd,
            Re = t.onMove,
            Y = t.ignoreCheck,
            Z = t.isNormalizer,
            J = t.onGestureStart,
            s = t.onGestureEnd,
            ie = t.onWheel,
            Ht = t.onEnable,
            Pt = t.onDisable,
            Je = t.onClick,
            wt = t.scrollSpeed,
            Oe = t.capture,
            Q = t.allowClicks,
            Ae = t.lockAxis,
            ve = t.onLockAxis;
          (this.target = l = Ye(l) || Tt),
            (this.vars = t),
            c && (c = de.utils.toArray(c)),
            (r = r || 1e-9),
            (o = o || 0),
            (_ = _ || 1),
            (wt = wt || 1),
            (a = a || "wheel,touch,pointer"),
            (x = x !== !1),
            f || (f = parseFloat(Be.getComputedStyle(jt).lineHeight) || 22);
          var Dt,
            Fe,
            ut,
            F,
            j,
            ze,
            Ge,
            u = this,
            Ve = 0,
            xt = 0,
            Wt = Et(l, Se),
            ee = Et(l, re),
            Gt = Wt(),
            Vt = ee(),
            Mr =
              ~a.indexOf("touch") &&
              !~a.indexOf("pointer") &&
              Qe[0] === "pointerdown",
            se = hr(l),
            $ = l.ownerDocument || Ct,
            et = [0, 0, 0],
            tt = [0, 0, 0],
            $t = 0,
            bt = function () {
              return ($t = gr());
            },
            ct = function (m, I) {
              return (
                ((u.event = m) && c && ~c.indexOf(m.target)) ||
                (I && Mr && m.pointerType !== "touch") ||
                (Y && Y(m, I))
              );
            },
            Xe = function () {
              u._vx.reset(), u._vy.reset(), Fe.pause(), R && R(u);
            },
            Ut = function () {
              var m = (u.deltaX = zn(et)),
                I = (u.deltaY = zn(tt)),
                te = Math.abs(m) >= r,
                p = Math.abs(I) >= r;
              he && (te || p) && he(u, m, I, et, tt),
                te &&
                  (Ze && u.deltaX > 0 && Ze(u),
                  N && u.deltaX < 0 && N(u),
                  Le && Le(u),
                  w && u.deltaX < 0 != Ve < 0 && w(u),
                  (Ve = u.deltaX),
                  (et[0] = et[1] = et[2] = 0)),
                p &&
                  (Pe && u.deltaY > 0 && Pe(u),
                  b && u.deltaY < 0 && b(u),
                  h && h(u),
                  vt && u.deltaY < 0 != xt < 0 && vt(u),
                  (xt = u.deltaY),
                  (tt[0] = tt[1] = tt[2] = 0)),
                (F || ut) && (Re && Re(u), ut && (H(u), (ut = !1)), (F = !1)),
                ze && !(ze = !1) && ve && ve(u),
                j && (ie(u), (j = !1)),
                (Dt = 0);
            },
            ur = function (m, I, te) {
              (et[te] += m),
                (tt[te] += I),
                u._vx.update(m),
                u._vy.update(I),
                x ? Dt || (Dt = requestAnimationFrame(Ut)) : Ut();
            },
            cr = function (m, I) {
              Ae &&
                !Ge &&
                ((u.axis = Ge = Math.abs(m) > Math.abs(I) ? "x" : "y"),
                (ze = !0)),
                Ge !== "y" && ((et[2] += m), u._vx.update(m, !0)),
                Ge !== "x" && ((tt[2] += I), u._vy.update(I, !0)),
                x ? Dt || (Dt = requestAnimationFrame(Ut)) : Ut();
            },
            qt = function (m) {
              if (!ct(m, 1)) {
                m = _r(m, A);
                var I = m.clientX,
                  te = m.clientY,
                  p = I - u.x,
                  E = te - u.y,
                  v = u.isDragging;
                (u.x = I),
                  (u.y = te),
                  (v ||
                    Math.abs(u.startX - I) >= o ||
                    Math.abs(u.startY - te) >= o) &&
                    (H && (ut = !0),
                    v || (u.isDragging = !0),
                    cr(p, E),
                    v || (X && X(u)));
              }
            },
            Rt = (u.onPress = function (y) {
              ct(y, 1) ||
                (y && y.button) ||
                ((u.axis = Ge = null),
                Fe.pause(),
                (u.isPressed = !0),
                (y = _r(y)),
                (Ve = xt = 0),
                (u.startX = u.x = y.clientX),
                (u.startY = u.y = y.clientY),
                u._vx.reset(),
                u._vy.reset(),
                be(Z ? l : $, Qe[1], qt, A, !0),
                (u.deltaX = u.deltaY = 0),
                ge && ge(u));
            }),
            Ot = (u.onRelease = function (y) {
              if (!ct(y, 1)) {
                ye(Z ? l : $, Qe[1], qt, !0);
                var m = !isNaN(u.y - u.startY),
                  I = u.isDragging,
                  te =
                    I &&
                    (Math.abs(u.x - u.startX) > 3 ||
                      Math.abs(u.y - u.startY) > 3),
                  p = _r(y);
                !te &&
                  m &&
                  (u._vx.reset(),
                  u._vy.reset(),
                  A &&
                    Q &&
                    de.delayedCall(0.08, function () {
                      if (gr() - $t > 300 && !y.defaultPrevented) {
                        if (y.target.click) y.target.click();
                        else if ($.createEvent) {
                          var E = $.createEvent("MouseEvents");
                          E.initMouseEvent(
                            "click",
                            !0,
                            !0,
                            Be,
                            1,
                            p.screenX,
                            p.screenY,
                            p.clientX,
                            p.clientY,
                            !1,
                            !1,
                            !1,
                            !1,
                            0,
                            null,
                          ),
                            y.target.dispatchEvent(E);
                        }
                      }
                    })),
                  (u.isDragging = u.isGesturing = u.isPressed = !1),
                  R && I && !Z && Fe.restart(!0),
                  ne && I && ne(u),
                  S && S(u, te);
              }
            }),
            D = function (m) {
              return (
                m.touches &&
                m.touches.length > 1 &&
                (u.isGesturing = !0) &&
                J(m, u.isDragging)
              );
            },
            Kt = function () {
              return (u.isGesturing = !1) || s(u);
            },
            rt = function (m) {
              if (!ct(m)) {
                var I = Wt(),
                  te = ee();
                ur((I - Gt) * wt, (te - Vt) * wt, 1),
                  (Gt = I),
                  (Vt = te),
                  R && Fe.restart(!0);
              }
            },
            nt = function (m) {
              if (!ct(m)) {
                (m = _r(m, A)), ie && (j = !0);
                var I =
                  (m.deltaMode === 1
                    ? f
                    : m.deltaMode === 2
                      ? Be.innerHeight
                      : 1) * _;
                ur(m.deltaX * I, m.deltaY * I, 0), R && !Z && Fe.restart(!0);
              }
            },
            ot = function (m) {
              if (!ct(m)) {
                var I = m.clientX,
                  te = m.clientY,
                  p = I - u.x,
                  E = te - u.y;
                (u.x = I),
                  (u.y = te),
                  (F = !0),
                  R && Fe.restart(!0),
                  (p || E) && cr(p, E);
              }
            },
            Zt = function (m) {
              (u.event = m), oe(u);
            },
            fr = function (m) {
              (u.event = m), De(u);
            },
            yt = function (m) {
              return ct(m) || (_r(m, A) && Je(u));
            };
          (Fe = u._dc = de.delayedCall(g || 0.25, Xe).pause()),
            (u.deltaX = u.deltaY = 0),
            (u._vx = un(0, 50, !0)),
            (u._vy = un(0, 50, !0)),
            (u.scrollX = Wt),
            (u.scrollY = ee),
            (u.isDragging = u.isGesturing = u.isPressed = !1),
            In(this),
            (u.enable = function (y) {
              return (
                u.isEnabled ||
                  (be(se ? $ : l, "scroll", an),
                  a.indexOf("scroll") >= 0 &&
                    be(se ? $ : l, "scroll", rt, A, Oe),
                  a.indexOf("wheel") >= 0 && be(l, "wheel", nt, A, Oe),
                  ((a.indexOf("touch") >= 0 && An) ||
                    a.indexOf("pointer") >= 0) &&
                    (be(l, Qe[0], Rt, A, Oe),
                    be($, Qe[2], Ot),
                    be($, Qe[3], Ot),
                    Q && be(l, "click", bt, !1, !0),
                    Je && be(l, "click", yt),
                    J && be($, "gesturestart", D),
                    s && be($, "gestureend", Kt),
                    oe && be(l, At + "enter", Zt),
                    De && be(l, At + "leave", fr),
                    Re && be(l, At + "move", ot)),
                  (u.isEnabled = !0),
                  y && y.type && Rt(y),
                  Ht && Ht(u)),
                u
              );
            }),
            (u.disable = function () {
              u.isEnabled &&
                (er.filter(function (y) {
                  return y !== u && hr(y.target);
                }).length || ye(se ? $ : l, "scroll", an),
                u.isPressed &&
                  (u._vx.reset(), u._vy.reset(), ye(Z ? l : $, Qe[1], qt, !0)),
                ye(se ? $ : l, "scroll", rt, Oe),
                ye(l, "wheel", nt, Oe),
                ye(l, Qe[0], Rt, Oe),
                ye($, Qe[2], Ot),
                ye($, Qe[3], Ot),
                ye(l, "click", bt, !0),
                ye(l, "click", yt),
                ye($, "gesturestart", D),
                ye($, "gestureend", Kt),
                ye(l, At + "enter", Zt),
                ye(l, At + "leave", fr),
                ye(l, At + "move", ot),
                (u.isEnabled = u.isPressed = u.isDragging = !1),
                Pt && Pt(u));
            }),
            (u.kill = u.revert =
              function () {
                u.disable();
                var y = er.indexOf(u);
                y >= 0 && er.splice(y, 1), ht === u && (ht = 0);
              }),
            er.push(u),
            Z && hr(l) && (ht = u),
            u.enable(V);
        }),
        To(i, [
          {
            key: "velocityX",
            get: function () {
              return this._vx.getVelocity();
            },
          },
          {
            key: "velocityY",
            get: function () {
              return this._vy.getVelocity();
            },
          },
        ]),
        i
      );
    })();
    (q.version = "3.12.4"),
      (q.create = function (i) {
        return new q(i);
      }),
      (q.register = Nn),
      (q.getAll = function () {
        return er.slice();
      }),
      (q.getById = function (i) {
        return er.filter(function (e) {
          return e.vars.id === i;
        })[0];
      }),
      Yn() && de.registerPlugin(q);
    /*!
     * ScrollTrigger 3.12.4
     * https://gsap.com
     *
     * @license Copyright 2008-2023, GreenSock. All rights reserved.
     * Subject to the terms at https://gsap.com/standard-license or for
     * Club GSAP members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */ var d,
      tr,
      P,
      B,
      je,
      z,
      Bn,
      Yr,
      mr,
      rr,
      Lr,
      zr,
      me,
      Xr,
      cn,
      Ce,
      Hn,
      Wn,
      nr,
      Gn,
      fn,
      Vn,
      Te,
      $n,
      Un,
      qn,
      Mt,
      pn,
      dn,
      or,
      gn,
      Nr,
      hn,
      _n,
      Br = 1,
      ke = Date.now,
      mn = ke(),
      Ue = 0,
      vr = 0,
      Kn = function (e, n, t) {
        var r = He(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
        return (t["_" + n + "Clamp"] = r), r ? e.substr(6, e.length - 7) : e;
      },
      Zn = function (e, n) {
        return n && (!He(e) || e.substr(0, 6) !== "clamp(")
          ? "clamp(" + e + ")"
          : e;
      },
      Eo = function i() {
        return vr && requestAnimationFrame(i);
      },
      Jn = function () {
        return (Xr = 1);
      },
      Qn = function () {
        return (Xr = 0);
      },
      lt = function (e) {
        return e;
      },
      wr = function (e) {
        return Math.round(e * 1e5) / 1e5 || 0;
      },
      jn = function () {
        return typeof window < "u";
      },
      eo = function () {
        return d || (jn() && (d = window.gsap) && d.registerPlugin && d);
      },
      Ft = function (e) {
        return !!~Bn.indexOf(e);
      },
      to = function (e) {
        return (
          (e === "Height" ? gn : P["inner" + e]) ||
          je["client" + e] ||
          z["client" + e]
        );
      },
      ro = function (e) {
        return (
          kt(e, "getBoundingClientRect") ||
          (Ft(e)
            ? function () {
                return (en.width = P.innerWidth), (en.height = gn), en;
              }
            : function () {
                return _t(e);
              })
        );
      },
      Mo = function (e, n, t) {
        var r = t.d,
          o = t.d2,
          a = t.a;
        return (a = kt(e, "getBoundingClientRect"))
          ? function () {
              return a()[r];
            }
          : function () {
              return (n ? to(o) : e["client" + o]) || 0;
            };
      },
      Po = function (e, n) {
        return !n || ~st.indexOf(e)
          ? ro(e)
          : function () {
              return en;
            };
      },
      at = function (e, n) {
        var t = n.s,
          r = n.d2,
          o = n.d,
          a = n.a;
        return Math.max(
          0,
          (t = "scroll" + r) && (a = kt(e, t))
            ? a() - ro(e)()[o]
            : Ft(e)
              ? (je[t] || z[t]) - to(r)
              : e[t] - e["offset" + r],
        );
      },
      Hr = function (e, n) {
        for (var t = 0; t < nr.length; t += 3)
          (!n || ~n.indexOf(nr[t + 1])) && e(nr[t], nr[t + 1], nr[t + 2]);
      },
      He = function (e) {
        return typeof e == "string";
      },
      Ee = function (e) {
        return typeof e == "function";
      },
      Wr = function (e) {
        return typeof e == "number";
      },
      It = function (e) {
        return typeof e == "object";
      },
      xr = function (e, n, t) {
        return e && e.progress(n ? 0 : 1) && t && e.pause();
      },
      vn = function (e, n) {
        if (e.enabled) {
          var t = e._ctx
            ? e._ctx.add(function () {
                return n(e);
              })
            : n(e);
          t && t.totalTime && (e.callbackAnimation = t);
        }
      },
      ir = Math.abs,
      no = "left",
      oo = "top",
      wn = "right",
      xn = "bottom",
      Yt = "width",
      Lt = "height",
      br = "Right",
      yr = "Left",
      Sr = "Top",
      Cr = "Bottom",
      K = "padding",
      qe = "margin",
      sr = "Width",
      bn = "Height",
      ae = "px",
      Ke = function (e) {
        return P.getComputedStyle(e);
      },
      Do = function (e) {
        var n = Ke(e).position;
        e.style.position = n === "absolute" || n === "fixed" ? n : "relative";
      },
      io = function (e, n) {
        for (var t in n) t in e || (e[t] = n[t]);
        return e;
      },
      _t = function (e, n) {
        var t =
            n &&
            Ke(e)[cn] !== "matrix(1, 0, 0, 1, 0, 0)" &&
            d
              .to(e, {
                x: 0,
                y: 0,
                xPercent: 0,
                yPercent: 0,
                rotation: 0,
                rotationX: 0,
                rotationY: 0,
                scale: 1,
                skewX: 0,
                skewY: 0,
              })
              .progress(1),
          r = e.getBoundingClientRect();
        return t && t.progress(0).kill(), r;
      },
      yn = function (e, n) {
        var t = n.d2;
        return e["offset" + t] || e["client" + t] || 0;
      },
      so = function (e) {
        var n = [],
          t = e.labels,
          r = e.duration(),
          o;
        for (o in t) n.push(t[o] / r);
        return n;
      },
      Ro = function (e) {
        return function (n) {
          return d.utils.snap(so(e), n);
        };
      },
      Sn = function (e) {
        var n = d.utils.snap(e),
          t =
            Array.isArray(e) &&
            e.slice(0).sort(function (r, o) {
              return r - o;
            });
        return t
          ? function (r, o, a) {
              a === void 0 && (a = 0.001);
              var l;
              if (!o) return n(r);
              if (o > 0) {
                for (r -= a, l = 0; l < t.length; l++)
                  if (t[l] >= r) return t[l];
                return t[l - 1];
              } else
                for (l = t.length, r += a; l--; ) if (t[l] <= r) return t[l];
              return t[0];
            }
          : function (r, o, a) {
              a === void 0 && (a = 0.001);
              var l = n(r);
              return !o || Math.abs(l - r) < a || l - r < 0 == o < 0
                ? l
                : n(o < 0 ? r - e : r + e);
            };
      },
      Oo = function (e) {
        return function (n, t) {
          return Sn(so(e))(n, t.direction);
        };
      },
      Gr = function (e, n, t, r) {
        return t.split(",").forEach(function (o) {
          return e(n, o, r);
        });
      },
      ue = function (e, n, t, r, o) {
        return e.addEventListener(n, t, { passive: !r, capture: !!o });
      },
      ce = function (e, n, t, r) {
        return e.removeEventListener(n, t, !!r);
      },
      Vr = function (e, n, t) {
        (t = t && t.wheelHandler),
          t && (e(n, "wheel", t), e(n, "touchmove", t));
      },
      lo = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal",
      },
      $r = { toggleActions: "play", anticipatePin: 0 },
      Ur = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
      qr = function (e, n) {
        if (He(e)) {
          var t = e.indexOf("="),
            r = ~t ? +(e.charAt(t - 1) + 1) * parseFloat(e.substr(t + 1)) : 0;
          ~t &&
            (e.indexOf("%") > t && (r *= n / 100), (e = e.substr(0, t - 1))),
            (e =
              r +
              (e in Ur
                ? Ur[e] * n
                : ~e.indexOf("%")
                  ? (parseFloat(e) * n) / 100
                  : parseFloat(e) || 0));
        }
        return e;
      },
      Kr = function (e, n, t, r, o, a, l, f) {
        var x = o.startColor,
          A = o.endColor,
          R = o.fontSize,
          g = o.indent,
          c = o.fontWeight,
          _ = B.createElement("div"),
          V = Ft(t) || kt(t, "pinType") === "fixed",
          X = e.indexOf("scroller") !== -1,
          ne = V ? z : t,
          H = e.indexOf("start") !== -1,
          ge = H ? x : A,
          S =
            "border-color:" +
            ge +
            ";font-size:" +
            R +
            ";color:" +
            ge +
            ";font-weight:" +
            c +
            ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return (
          (S += "position:" + ((X || f) && V ? "fixed;" : "absolute;")),
          (X || f || !V) &&
            (S += (r === re ? wn : xn) + ":" + (a + parseFloat(g)) + "px;"),
          l &&
            (S +=
              "box-sizing:border-box;text-align:left;width:" +
              l.offsetWidth +
              "px;"),
          (_._isStart = H),
          _.setAttribute(
            "class",
            "gsap-marker-" + e + (n ? " marker-" + n : ""),
          ),
          (_.style.cssText = S),
          (_.innerText = n || n === 0 ? e + "-" + n : e),
          ne.children[0]
            ? ne.insertBefore(_, ne.children[0])
            : ne.appendChild(_),
          (_._offset = _["offset" + r.op.d2]),
          Zr(_, 0, r, H),
          _
        );
      },
      Zr = function (e, n, t, r) {
        var o = { display: "block" },
          a = t[r ? "os2" : "p2"],
          l = t[r ? "p2" : "os2"];
        (e._isFlipped = r),
          (o[t.a + "Percent"] = r ? -100 : 0),
          (o[t.a] = r ? "1px" : 0),
          (o["border" + a + sr] = 1),
          (o["border" + l + sr] = 0),
          (o[t.p] = n + "px"),
          d.set(e, o);
      },
      C = [],
      Cn = {},
      Tr,
      ao = function () {
        return ke() - Ue > 34 && (Tr || (Tr = requestAnimationFrame(mt)));
      },
      lr = function () {
        (!Te || !Te.isPressed || Te.startX > z.clientWidth) &&
          (T.cache++,
          Te ? Tr || (Tr = requestAnimationFrame(mt)) : mt(),
          Ue || Xt("scrollStart"),
          (Ue = ke()));
      },
      Tn = function () {
        (qn = P.innerWidth), (Un = P.innerHeight);
      },
      kr = function () {
        T.cache++,
          !me &&
            !Vn &&
            !B.fullscreenElement &&
            !B.webkitFullscreenElement &&
            (!$n ||
              qn !== P.innerWidth ||
              Math.abs(P.innerHeight - Un) > P.innerHeight * 0.25) &&
            Yr.restart(!0);
      },
      zt = {},
      Ao = [],
      uo = function i() {
        return ce(k, "scrollEnd", i) || Bt(!0);
      },
      Xt = function (e) {
        return (
          (zt[e] &&
            zt[e].map(function (n) {
              return n();
            })) ||
          Ao
        );
      },
      We = [],
      co = function (e) {
        for (var n = 0; n < We.length; n += 5)
          (!e || (We[n + 4] && We[n + 4].query === e)) &&
            ((We[n].style.cssText = We[n + 1]),
            We[n].getBBox && We[n].setAttribute("transform", We[n + 2] || ""),
            (We[n + 3].uncache = 1));
      },
      kn = function (e, n) {
        var t;
        for (Ce = 0; Ce < C.length; Ce++)
          (t = C[Ce]),
            t && (!n || t._ctx === n) && (e ? t.kill(1) : t.revert(!0, !0));
        (Nr = !0), n && co(n), n || Xt("revert");
      },
      fo = function (e, n) {
        T.cache++,
          (n || !Me) &&
            T.forEach(function (t) {
              return Ee(t) && t.cacheID++ && (t.rec = 0);
            }),
          He(e) && (P.history.scrollRestoration = dn = e);
      },
      Me,
      Nt = 0,
      po,
      Fo = function () {
        if (po !== Nt) {
          var e = (po = Nt);
          requestAnimationFrame(function () {
            return e === Nt && Bt(!0);
          });
        }
      },
      go = function () {
        z.appendChild(or),
          (gn = (!Te && or.offsetHeight) || P.innerHeight),
          z.removeChild(or);
      },
      ho = function (e) {
        return mr(
          ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end",
        ).forEach(function (n) {
          return (n.style.display = e ? "none" : "block");
        });
      },
      Bt = function (e, n) {
        if (Ue && !e && !Nr) {
          ue(k, "scrollEnd", uo);
          return;
        }
        go(),
          (Me = k.isRefreshing = !0),
          T.forEach(function (r) {
            return Ee(r) && ++r.cacheID && (r.rec = r());
          });
        var t = Xt("refreshInit");
        Gn && k.sort(),
          n || kn(),
          T.forEach(function (r) {
            Ee(r) &&
              (r.smooth && (r.target.style.scrollBehavior = "auto"), r(0));
          }),
          C.slice(0).forEach(function (r) {
            return r.refresh();
          }),
          (Nr = !1),
          C.forEach(function (r) {
            if (r._subPinOffset && r.pin) {
              var o = r.vars.horizontal ? "offsetWidth" : "offsetHeight",
                a = r.pin[o];
              r.revert(!0, 1), r.adjustPinSpacing(r.pin[o] - a), r.refresh();
            }
          }),
          (hn = 1),
          ho(!0),
          C.forEach(function (r) {
            var o = at(r.scroller, r._dir),
              a = r.vars.end === "max" || (r._endClamp && r.end > o),
              l = r._startClamp && r.start >= o;
            (a || l) &&
              r.setPositions(
                l ? o - 1 : r.start,
                a ? Math.max(l ? o : r.start + 1, o) : r.end,
                !0,
              );
          }),
          ho(!1),
          (hn = 0),
          t.forEach(function (r) {
            return r && r.render && r.render(-1);
          }),
          T.forEach(function (r) {
            Ee(r) &&
              (r.smooth &&
                requestAnimationFrame(function () {
                  return (r.target.style.scrollBehavior = "smooth");
                }),
              r.rec && r(r.rec));
          }),
          fo(dn, 1),
          Yr.pause(),
          Nt++,
          (Me = 2),
          mt(2),
          C.forEach(function (r) {
            return Ee(r.vars.onRefresh) && r.vars.onRefresh(r);
          }),
          (Me = k.isRefreshing = !1),
          Xt("refresh");
      },
      En = 0,
      Jr = 1,
      Er,
      mt = function (e) {
        if (e === 2 || (!Me && !Nr)) {
          (k.isUpdating = !0), Er && Er.update(0);
          var n = C.length,
            t = ke(),
            r = t - mn >= 50,
            o = n && C[0].scroll();
          if (
            ((Jr = En > o ? -1 : 1),
            Me || (En = o),
            r &&
              (Ue && !Xr && t - Ue > 200 && ((Ue = 0), Xt("scrollEnd")),
              (Lr = mn),
              (mn = t)),
            Jr < 0)
          ) {
            for (Ce = n; Ce-- > 0; ) C[Ce] && C[Ce].update(0, r);
            Jr = 1;
          } else for (Ce = 0; Ce < n; Ce++) C[Ce] && C[Ce].update(0, r);
          k.isUpdating = !1;
        }
        Tr = 0;
      },
      Mn = [
        no,
        oo,
        xn,
        wn,
        qe + Cr,
        qe + br,
        qe + Sr,
        qe + yr,
        "display",
        "flexShrink",
        "float",
        "zIndex",
        "gridColumnStart",
        "gridColumnEnd",
        "gridRowStart",
        "gridRowEnd",
        "gridArea",
        "justifySelf",
        "alignSelf",
        "placeSelf",
        "order",
      ],
      Qr = Mn.concat([
        Yt,
        Lt,
        "boxSizing",
        "max" + sr,
        "max" + bn,
        "position",
        qe,
        K,
        K + Sr,
        K + br,
        K + Cr,
        K + yr,
      ]),
      Io = function (e, n, t) {
        ar(t);
        var r = e._gsap;
        if (r.spacerIsNative) ar(r.spacerState);
        else if (e._gsap.swappedIn) {
          var o = n.parentNode;
          o && (o.insertBefore(e, n), o.removeChild(n));
        }
        e._gsap.swappedIn = !1;
      },
      Pn = function (e, n, t, r) {
        if (!e._gsap.swappedIn) {
          for (var o = Mn.length, a = n.style, l = e.style, f; o--; )
            (f = Mn[o]), (a[f] = t[f]);
          (a.position = t.position === "absolute" ? "absolute" : "relative"),
            t.display === "inline" && (a.display = "inline-block"),
            (l[xn] = l[wn] = "auto"),
            (a.flexBasis = t.flexBasis || "auto"),
            (a.overflow = "visible"),
            (a.boxSizing = "border-box"),
            (a[Yt] = yn(e, Se) + ae),
            (a[Lt] = yn(e, re) + ae),
            (a[K] = l[qe] = l[oo] = l[no] = "0"),
            ar(r),
            (l[Yt] = l["max" + sr] = t[Yt]),
            (l[Lt] = l["max" + bn] = t[Lt]),
            (l[K] = t[K]),
            e.parentNode !== n &&
              (e.parentNode.insertBefore(n, e), n.appendChild(e)),
            (e._gsap.swappedIn = !0);
        }
      },
      Yo = /([A-Z])/g,
      ar = function (e) {
        if (e) {
          var n = e.t.style,
            t = e.length,
            r = 0,
            o,
            a;
          for ((e.t._gsap || d.core.getCache(e.t)).uncache = 1; r < t; r += 2)
            (a = e[r + 1]),
              (o = e[r]),
              a
                ? (n[o] = a)
                : n[o] && n.removeProperty(o.replace(Yo, "-$1").toLowerCase());
        }
      },
      jr = function (e) {
        for (var n = Qr.length, t = e.style, r = [], o = 0; o < n; o++)
          r.push(Qr[o], t[Qr[o]]);
        return (r.t = e), r;
      },
      Lo = function (e, n, t) {
        for (var r = [], o = e.length, a = t ? 8 : 0, l; a < o; a += 2)
          (l = e[a]), r.push(l, l in n ? n[l] : e[a + 1]);
        return (r.t = e.t), r;
      },
      en = { left: 0, top: 0 },
      _o = function (e, n, t, r, o, a, l, f, x, A, R, g, c, _) {
        Ee(e) && (e = e(f)),
          He(e) &&
            e.substr(0, 3) === "max" &&
            (e = g + (e.charAt(4) === "=" ? qr("0" + e.substr(3), t) : 0));
        var V = c ? c.time() : 0,
          X,
          ne,
          H;
        if ((c && c.seek(0), isNaN(e) || (e = +e), Wr(e)))
          c &&
            (e = d.utils.mapRange(
              c.scrollTrigger.start,
              c.scrollTrigger.end,
              0,
              g,
              e,
            )),
            l && Zr(l, t, r, !0);
        else {
          Ee(n) && (n = n(f));
          var ge = (e || "0").split(" "),
            S,
            Ze,
            N,
            b;
          (H = Ye(n, f) || z),
            (S = _t(H) || {}),
            (!S || (!S.left && !S.top)) &&
              Ke(H).display === "none" &&
              ((b = H.style.display),
              (H.style.display = "block"),
              (S = _t(H)),
              b ? (H.style.display = b) : H.style.removeProperty("display")),
            (Ze = qr(ge[0], S[r.d])),
            (N = qr(ge[1] || "0", t)),
            (e = S[r.p] - x[r.p] - A + Ze + o - N),
            l && Zr(l, N, r, t - N < 20 || (l._isStart && N > 20)),
            (t -= t - N);
        }
        if ((_ && ((f[_] = e || -0.001), e < 0 && (e = 0)), a)) {
          var Pe = e + t,
            Le = a._isStart;
          (X = "scroll" + r.d2),
            Zr(
              a,
              Pe,
              r,
              (Le && Pe > 20) ||
                (!Le &&
                  (R ? Math.max(z[X], je[X]) : a.parentNode[X]) <= Pe + 1),
            ),
            R &&
              ((x = _t(l)),
              R && (a.style[r.op.p] = x[r.op.p] - r.op.m - a._offset + ae));
        }
        return (
          c &&
            H &&
            ((X = _t(H)),
            c.seek(g),
            (ne = _t(H)),
            (c._caScrollDist = X[r.p] - ne[r.p]),
            (e = (e / c._caScrollDist) * g)),
          c && c.seek(V),
          c ? e : Math.round(e)
        );
      },
      zo = /(webkit|moz|length|cssText|inset)/i,
      mo = function (e, n, t, r) {
        if (e.parentNode !== n) {
          var o = e.style,
            a,
            l;
          if (n === z) {
            (e._stOrig = o.cssText), (l = Ke(e));
            for (a in l)
              !+a &&
                !zo.test(a) &&
                l[a] &&
                typeof o[a] == "string" &&
                a !== "0" &&
                (o[a] = l[a]);
            (o.top = t), (o.left = r);
          } else o.cssText = e._stOrig;
          (d.core.getCache(e).uncache = 1), n.appendChild(e);
        }
      },
      vo = function (e, n, t) {
        var r = n,
          o = r;
        return function (a) {
          var l = Math.round(e());
          return (
            l !== r &&
              l !== o &&
              Math.abs(l - r) > 3 &&
              Math.abs(l - o) > 3 &&
              ((a = l), t && t()),
            (o = r),
            (r = a),
            a
          );
        };
      },
      tn = function (e, n, t) {
        var r = {};
        (r[n.p] = "+=" + t), d.set(e, r);
      },
      wo = function (e, n) {
        var t = Et(e, n),
          r = "_scroll" + n.p2,
          o = function a(l, f, x, A, R) {
            var g = a.tween,
              c = f.onComplete,
              _ = {};
            x = x || t();
            var V = vo(t, x, function () {
              g.kill(), (a.tween = 0);
            });
            return (
              (R = (A && R) || 0),
              (A = A || l - x),
              g && g.kill(),
              (f[r] = l),
              (f.modifiers = _),
              (_[r] = function () {
                return V(x + A * g.ratio + R * g.ratio * g.ratio);
              }),
              (f.onUpdate = function () {
                T.cache++, a.tween && mt();
              }),
              (f.onComplete = function () {
                (a.tween = 0), c && c.call(g);
              }),
              (g = a.tween = d.to(e, f)),
              g
            );
          };
        return (
          (e[r] = t),
          (t.wheelHandler = function () {
            return o.tween && o.tween.kill() && (o.tween = 0);
          }),
          ue(e, "wheel", t.wheelHandler),
          k.isTouch && ue(e, "touchmove", t.wheelHandler),
          o
        );
      },
      k = (function () {
        function i(n, t) {
          tr ||
            i.register(d) ||
            console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
            pn(this),
            this.init(n, t);
        }
        var e = i.prototype;
        return (
          (e.init = function (t, r) {
            if (
              ((this.progress = this.start = 0),
              this.vars && this.kill(!0, !0),
              !vr)
            ) {
              this.update = this.refresh = this.kill = lt;
              return;
            }
            t = io(He(t) || Wr(t) || t.nodeType ? { trigger: t } : t, $r);
            var o = t,
              a = o.onUpdate,
              l = o.toggleClass,
              f = o.id,
              x = o.onToggle,
              A = o.onRefresh,
              R = o.scrub,
              g = o.trigger,
              c = o.pin,
              _ = o.pinSpacing,
              V = o.invalidateOnRefresh,
              X = o.anticipatePin,
              ne = o.onScrubComplete,
              H = o.onSnapComplete,
              ge = o.once,
              S = o.snap,
              Ze = o.pinReparent,
              N = o.pinSpacer,
              b = o.containerAnimation,
              Pe = o.fastScrollEnd,
              Le = o.preventOverlaps,
              h =
                t.horizontal || (t.containerAnimation && t.horizontal !== !1)
                  ? Se
                  : re,
              he = !R && R !== 0,
              w = Ye(t.scroller || P),
              vt = d.core.getCache(w),
              oe = Ft(w),
              De =
                ("pinType" in t
                  ? t.pinType
                  : kt(w, "pinType") || (oe && "fixed")) === "fixed",
              Re = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
              Y = he && t.toggleActions.split(" "),
              Z = "markers" in t ? t.markers : $r.markers,
              J = oe ? 0 : parseFloat(Ke(w)["border" + h.p2 + sr]) || 0,
              s = this,
              ie =
                t.onRefreshInit &&
                function () {
                  return t.onRefreshInit(s);
                },
              Ht = Mo(w, oe, h),
              Pt = Po(w, oe),
              Je = 0,
              wt = 0,
              Oe = 0,
              Q = Et(w, h),
              Ae,
              ve,
              Dt,
              Fe,
              ut,
              F,
              j,
              ze,
              Ge,
              u,
              Ve,
              xt,
              Wt,
              ee,
              Gt,
              Vt,
              Mr,
              se,
              $,
              et,
              tt,
              $t,
              bt,
              ct,
              Xe,
              Ut,
              ur,
              cr,
              qt,
              Rt,
              Ot,
              D,
              Kt,
              rt,
              nt,
              ot,
              Zt,
              fr,
              yt;
            if (
              ((s._startClamp = s._endClamp = !1),
              (s._dir = h),
              (X *= 45),
              (s.scroller = w),
              (s.scroll = b ? b.time.bind(b) : Q),
              (Fe = Q()),
              (s.vars = t),
              (r = r || t.animation),
              "refreshPriority" in t &&
                ((Gn = 1), t.refreshPriority === -9999 && (Er = s)),
              (vt.tweenScroll = vt.tweenScroll || {
                top: wo(w, re),
                left: wo(w, Se),
              }),
              (s.tweenTo = Ae = vt.tweenScroll[h.p]),
              (s.scrubDuration = function (p) {
                (Kt = Wr(p) && p),
                  Kt
                    ? D
                      ? D.duration(p)
                      : (D = d.to(r, {
                          ease: "expo",
                          totalProgress: "+=0",
                          duration: Kt,
                          paused: !0,
                          onComplete: function () {
                            return ne && ne(s);
                          },
                        }))
                    : (D && D.progress(1).kill(), (D = 0));
              }),
              r &&
                ((r.vars.lazy = !1),
                (r._initted && !s.isReverted) ||
                  (r.vars.immediateRender !== !1 &&
                    t.immediateRender !== !1 &&
                    r.duration() &&
                    r.render(0, !0, !0)),
                (s.animation = r.pause()),
                (r.scrollTrigger = s),
                s.scrubDuration(R),
                (Rt = 0),
                f || (f = r.vars.id)),
              S &&
                ((!It(S) || S.push) && (S = { snapTo: S }),
                "scrollBehavior" in z.style &&
                  d.set(oe ? [z, je] : w, { scrollBehavior: "auto" }),
                T.forEach(function (p) {
                  return (
                    Ee(p) &&
                    p.target === (oe ? B.scrollingElement || je : w) &&
                    (p.smooth = !1)
                  );
                }),
                (Dt = Ee(S.snapTo)
                  ? S.snapTo
                  : S.snapTo === "labels"
                    ? Ro(r)
                    : S.snapTo === "labelsDirectional"
                      ? Oo(r)
                      : S.directional !== !1
                        ? function (p, E) {
                            return Sn(S.snapTo)(
                              p,
                              ke() - wt < 500 ? 0 : E.direction,
                            );
                          }
                        : d.utils.snap(S.snapTo)),
                (rt = S.duration || { min: 0.1, max: 2 }),
                (rt = It(rt) ? rr(rt.min, rt.max) : rr(rt, rt)),
                (nt = d
                  .delayedCall(S.delay || Kt / 2 || 0.1, function () {
                    var p = Q(),
                      E = ke() - wt < 500,
                      v = Ae.tween;
                    if (
                      (E || Math.abs(s.getVelocity()) < 10) &&
                      !v &&
                      !Xr &&
                      Je !== p
                    ) {
                      var M = (p - F) / ee,
                        fe = r && !he ? r.totalProgress() : M,
                        O = E ? 0 : ((fe - Ot) / (ke() - Lr)) * 1e3 || 0,
                        U = d.utils.clamp(-M, 1 - M, (ir(O / 2) * O) / 0.185),
                        Ie = M + (S.inertia === !1 ? 0 : U),
                        pe = rr(0, 1, Dt(Ie, s)),
                        W = Math.round(F + pe * ee),
                        L = S,
                        it = L.onStart,
                        G = L.onInterrupt,
                        $e = L.onComplete;
                      if (p <= j && p >= F && W !== p) {
                        if (v && !v._initted && v.data <= ir(W - p)) return;
                        S.inertia === !1 && (U = pe - M),
                          Ae(
                            W,
                            {
                              duration: rt(
                                ir(
                                  (Math.max(ir(Ie - fe), ir(pe - fe)) * 0.185) /
                                    O /
                                    0.05 || 0,
                                ),
                              ),
                              ease: S.ease || "power3",
                              data: ir(W - p),
                              onInterrupt: function () {
                                return nt.restart(!0) && G && G(s);
                              },
                              onComplete: function () {
                                s.update(),
                                  (Je = Q()),
                                  D && r && r.progress(pe),
                                  (Rt = Ot =
                                    r && !he ? r.totalProgress() : s.progress),
                                  H && H(s),
                                  $e && $e(s);
                              },
                            },
                            p,
                            U * ee,
                            W - p - U * ee,
                          ),
                          it && it(s, Ae.tween);
                      }
                    } else s.isActive && Je !== p && nt.restart(!0);
                  })
                  .pause())),
              f && (Cn[f] = s),
              (g = s.trigger = Ye(g || (c !== !0 && c))),
              (yt = g && g._gsap && g._gsap.stRevert),
              yt && (yt = yt(s)),
              (c = c === !0 ? g : Ye(c)),
              He(l) && (l = { targets: g, className: l }),
              c &&
                (_ === !1 ||
                  _ === qe ||
                  (_ =
                    !_ &&
                    c.parentNode &&
                    c.parentNode.style &&
                    Ke(c.parentNode).display === "flex"
                      ? !1
                      : K),
                (s.pin = c),
                (ve = d.core.getCache(c)),
                ve.spacer
                  ? (Gt = ve.pinState)
                  : (N &&
                      ((N = Ye(N)),
                      N && !N.nodeType && (N = N.current || N.nativeElement),
                      (ve.spacerIsNative = !!N),
                      N && (ve.spacerState = jr(N))),
                    (ve.spacer = se = N || B.createElement("div")),
                    se.classList.add("pin-spacer"),
                    f && se.classList.add("pin-spacer-" + f),
                    (ve.pinState = Gt = jr(c))),
                t.force3D !== !1 && d.set(c, { force3D: !0 }),
                (s.spacer = se = ve.spacer),
                (qt = Ke(c)),
                (ct = qt[_ + h.os2]),
                (et = d.getProperty(c)),
                (tt = d.quickSetter(c, h.a, ae)),
                Pn(c, se, qt),
                (Mr = jr(c))),
              Z)
            ) {
              (xt = It(Z) ? io(Z, lo) : lo),
                (u = Kr("scroller-start", f, w, h, xt, 0)),
                (Ve = Kr("scroller-end", f, w, h, xt, 0, u)),
                ($ = u["offset" + h.op.d2]);
              var y = Ye(kt(w, "content") || w);
              (ze = this.markerStart = Kr("start", f, y, h, xt, $, 0, b)),
                (Ge = this.markerEnd = Kr("end", f, y, h, xt, $, 0, b)),
                b && (fr = d.quickSetter([ze, Ge], h.a, ae)),
                !De &&
                  !(st.length && kt(w, "fixedMarkers") === !0) &&
                  (Do(oe ? z : w),
                  d.set([u, Ve], { force3D: !0 }),
                  (Ut = d.quickSetter(u, h.a, ae)),
                  (cr = d.quickSetter(Ve, h.a, ae)));
            }
            if (b) {
              var m = b.vars.onUpdate,
                I = b.vars.onUpdateParams;
              b.eventCallback("onUpdate", function () {
                s.update(0, 0, 1), m && m.apply(b, I || []);
              });
            }
            if (
              ((s.previous = function () {
                return C[C.indexOf(s) - 1];
              }),
              (s.next = function () {
                return C[C.indexOf(s) + 1];
              }),
              (s.revert = function (p, E) {
                if (!E) return s.kill(!0);
                var v = p !== !1 || !s.enabled,
                  M = me;
                v !== s.isReverted &&
                  (v &&
                    ((ot = Math.max(Q(), s.scroll.rec || 0)),
                    (Oe = s.progress),
                    (Zt = r && r.progress())),
                  ze &&
                    [ze, Ge, u, Ve].forEach(function (fe) {
                      return (fe.style.display = v ? "none" : "block");
                    }),
                  v && ((me = s), s.update(v)),
                  c &&
                    (!Ze || !s.isActive) &&
                    (v ? Io(c, se, Gt) : Pn(c, se, Ke(c), Xe)),
                  v || s.update(v),
                  (me = M),
                  (s.isReverted = v));
              }),
              (s.refresh = function (p, E, v, M) {
                if (!((me || !s.enabled) && !E)) {
                  if (c && p && Ue) {
                    ue(i, "scrollEnd", uo);
                    return;
                  }
                  !Me && ie && ie(s),
                    (me = s),
                    Ae.tween && !v && (Ae.tween.kill(), (Ae.tween = 0)),
                    D && D.pause(),
                    V && r && r.revert({ kill: !1 }).invalidate(),
                    s.isReverted || s.revert(!0, !0),
                    (s._subPinOffset = !1);
                  var fe = Ht(),
                    O = Pt(),
                    U = b ? b.duration() : at(w, h),
                    Ie = ee <= 0.01,
                    pe = 0,
                    W = M || 0,
                    L = It(v) ? v.end : t.end,
                    it = t.endTrigger || g,
                    G = It(v)
                      ? v.start
                      : t.start ||
                        (t.start === 0 || !g ? 0 : c ? "0 0" : "0 100%"),
                    $e = (s.pinnedContainer =
                      t.pinnedContainer && Ye(t.pinnedContainer, s)),
                    ft = (g && Math.max(0, C.indexOf(s))) || 0,
                    Ne = ft,
                    _e,
                    we,
                    Jt,
                    nn,
                    xe,
                    le,
                    pt,
                    Rn,
                    Co,
                    Pr,
                    dt,
                    Dr,
                    on;
                  for (
                    Z &&
                    It(v) &&
                    ((Dr = d.getProperty(u, h.p)),
                    (on = d.getProperty(Ve, h.p)));
                    Ne--;

                  )
                    (le = C[Ne]),
                      le.end || le.refresh(0, 1) || (me = s),
                      (pt = le.pin),
                      pt &&
                        (pt === g || pt === c || pt === $e) &&
                        !le.isReverted &&
                        (Pr || (Pr = []), Pr.unshift(le), le.revert(!0, !0)),
                      le !== C[Ne] && (ft--, Ne--);
                  for (
                    Ee(G) && (G = G(s)),
                      G = Kn(G, "start", s),
                      F =
                        _o(
                          G,
                          g,
                          fe,
                          h,
                          Q(),
                          ze,
                          u,
                          s,
                          O,
                          J,
                          De,
                          U,
                          b,
                          s._startClamp && "_startClamp",
                        ) || (c ? -0.001 : 0),
                      Ee(L) && (L = L(s)),
                      He(L) &&
                        !L.indexOf("+=") &&
                        (~L.indexOf(" ")
                          ? (L = (He(G) ? G.split(" ")[0] : "") + L)
                          : ((pe = qr(L.substr(2), fe)),
                            (L = He(G)
                              ? G
                              : (b
                                  ? d.utils.mapRange(
                                      0,
                                      b.duration(),
                                      b.scrollTrigger.start,
                                      b.scrollTrigger.end,
                                      F,
                                    )
                                  : F) + pe),
                            (it = g))),
                      L = Kn(L, "end", s),
                      j =
                        Math.max(
                          F,
                          _o(
                            L || (it ? "100% 0" : U),
                            it,
                            fe,
                            h,
                            Q() + pe,
                            Ge,
                            Ve,
                            s,
                            O,
                            J,
                            De,
                            U,
                            b,
                            s._endClamp && "_endClamp",
                          ),
                        ) || -0.001,
                      pe = 0,
                      Ne = ft;
                    Ne--;

                  )
                    (le = C[Ne]),
                      (pt = le.pin),
                      pt &&
                        le.start - le._pinPush <= F &&
                        !b &&
                        le.end > 0 &&
                        ((_e =
                          le.end -
                          (s._startClamp ? Math.max(0, le.start) : le.start)),
                        ((pt === g && le.start - le._pinPush < F) ||
                          pt === $e) &&
                          isNaN(G) &&
                          (pe += _e * (1 - le.progress)),
                        pt === c && (W += _e));
                  if (
                    ((F += pe),
                    (j += pe),
                    s._startClamp && (s._startClamp += pe),
                    s._endClamp &&
                      !Me &&
                      ((s._endClamp = j || -0.001),
                      (j = Math.min(j, at(w, h)))),
                    (ee = j - F || ((F -= 0.01) && 0.001)),
                    Ie &&
                      (Oe = d.utils.clamp(0, 1, d.utils.normalize(F, j, ot))),
                    (s._pinPush = W),
                    ze &&
                      pe &&
                      ((_e = {}),
                      (_e[h.a] = "+=" + pe),
                      $e && (_e[h.p] = "-=" + Q()),
                      d.set([ze, Ge], _e)),
                    c && !(hn && s.end >= at(w, h)))
                  )
                    (_e = Ke(c)),
                      (nn = h === re),
                      (Jt = Q()),
                      ($t = parseFloat(et(h.a)) + W),
                      !U &&
                        j > 1 &&
                        ((dt = (oe ? B.scrollingElement || je : w).style),
                        (dt = {
                          style: dt,
                          value: dt["overflow" + h.a.toUpperCase()],
                        }),
                        oe &&
                          Ke(z)["overflow" + h.a.toUpperCase()] !== "scroll" &&
                          (dt.style["overflow" + h.a.toUpperCase()] =
                            "scroll")),
                      Pn(c, se, _e),
                      (Mr = jr(c)),
                      (we = _t(c, !0)),
                      (Rn = De && Et(w, nn ? Se : re)()),
                      _ &&
                        ((Xe = [_ + h.os2, ee + W + ae]),
                        (Xe.t = se),
                        (Ne = _ === K ? yn(c, h) + ee + W : 0),
                        Ne &&
                          (Xe.push(h.d, Ne + ae),
                          se.style.flexBasis !== "auto" &&
                            (se.style.flexBasis = Ne + ae)),
                        ar(Xe),
                        $e &&
                          C.forEach(function (Rr) {
                            Rr.pin === $e &&
                              Rr.vars.pinSpacing !== !1 &&
                              (Rr._subPinOffset = !0);
                          }),
                        De && Q(ot)),
                      De &&
                        ((xe = {
                          top: we.top + (nn ? Jt - F : Rn) + ae,
                          left: we.left + (nn ? Rn : Jt - F) + ae,
                          boxSizing: "border-box",
                          position: "fixed",
                        }),
                        (xe[Yt] = xe["max" + sr] = Math.ceil(we.width) + ae),
                        (xe[Lt] = xe["max" + bn] = Math.ceil(we.height) + ae),
                        (xe[qe] =
                          xe[qe + Sr] =
                          xe[qe + br] =
                          xe[qe + Cr] =
                          xe[qe + yr] =
                            "0"),
                        (xe[K] = _e[K]),
                        (xe[K + Sr] = _e[K + Sr]),
                        (xe[K + br] = _e[K + br]),
                        (xe[K + Cr] = _e[K + Cr]),
                        (xe[K + yr] = _e[K + yr]),
                        (Vt = Lo(Gt, xe, Ze)),
                        Me && Q(0)),
                      r
                        ? ((Co = r._initted),
                          fn(1),
                          r.render(r.duration(), !0, !0),
                          (bt = et(h.a) - $t + ee + W),
                          (ur = Math.abs(ee - bt) > 1),
                          De && ur && Vt.splice(Vt.length - 2, 2),
                          r.render(0, !0, !0),
                          Co || r.invalidate(!0),
                          r.parent || r.totalTime(r.totalTime()),
                          fn(0))
                        : (bt = ee),
                      dt &&
                        (dt.value
                          ? (dt.style["overflow" + h.a.toUpperCase()] =
                              dt.value)
                          : dt.style.removeProperty("overflow-" + h.a));
                  else if (g && Q() && !b)
                    for (we = g.parentNode; we && we !== z; )
                      we._pinOffset &&
                        ((F -= we._pinOffset), (j -= we._pinOffset)),
                        (we = we.parentNode);
                  Pr &&
                    Pr.forEach(function (Rr) {
                      return Rr.revert(!1, !0);
                    }),
                    (s.start = F),
                    (s.end = j),
                    (Fe = ut = Me ? ot : Q()),
                    !b && !Me && (Fe < ot && Q(ot), (s.scroll.rec = 0)),
                    s.revert(!1, !0),
                    (wt = ke()),
                    nt && ((Je = -1), nt.restart(!0)),
                    (me = 0),
                    r &&
                      he &&
                      (r._initted || Zt) &&
                      r.progress() !== Zt &&
                      r.progress(Zt || 0, !0).render(r.time(), !0, !0),
                    (Ie || Oe !== s.progress || b) &&
                      (r &&
                        !he &&
                        r.totalProgress(
                          b && F < -0.001 && !Oe
                            ? d.utils.normalize(F, j, 0)
                            : Oe,
                          !0,
                        ),
                      (s.progress = Ie || (Fe - F) / ee === Oe ? 0 : Oe)),
                    c && _ && (se._pinOffset = Math.round(s.progress * bt)),
                    D && D.invalidate(),
                    isNaN(Dr) ||
                      ((Dr -= d.getProperty(u, h.p)),
                      (on -= d.getProperty(Ve, h.p)),
                      tn(u, h, Dr),
                      tn(ze, h, Dr - (M || 0)),
                      tn(Ve, h, on),
                      tn(Ge, h, on - (M || 0))),
                    Ie && !Me && s.update(),
                    A && !Me && !Wt && ((Wt = !0), A(s), (Wt = !1));
                }
              }),
              (s.getVelocity = function () {
                return ((Q() - ut) / (ke() - Lr)) * 1e3 || 0;
              }),
              (s.endAnimation = function () {
                xr(s.callbackAnimation),
                  r &&
                    (D
                      ? D.progress(1)
                      : r.paused()
                        ? he || xr(r, s.direction < 0, 1)
                        : xr(r, r.reversed()));
              }),
              (s.labelToScroll = function (p) {
                return (
                  (r &&
                    r.labels &&
                    (F || s.refresh() || F) +
                      (r.labels[p] / r.duration()) * ee) ||
                  0
                );
              }),
              (s.getTrailing = function (p) {
                var E = C.indexOf(s),
                  v =
                    s.direction > 0 ? C.slice(0, E).reverse() : C.slice(E + 1);
                return (
                  He(p)
                    ? v.filter(function (M) {
                        return M.vars.preventOverlaps === p;
                      })
                    : v
                ).filter(function (M) {
                  return s.direction > 0 ? M.end <= F : M.start >= j;
                });
              }),
              (s.update = function (p, E, v) {
                if (!(b && !v && !p)) {
                  var M = Me === !0 ? ot : s.scroll(),
                    fe = p ? 0 : (M - F) / ee,
                    O = fe < 0 ? 0 : fe > 1 ? 1 : fe || 0,
                    U = s.progress,
                    Ie,
                    pe,
                    W,
                    L,
                    it,
                    G,
                    $e,
                    ft;
                  if (
                    (E &&
                      ((ut = Fe),
                      (Fe = b ? Q() : M),
                      S &&
                        ((Ot = Rt), (Rt = r && !he ? r.totalProgress() : O))),
                    X &&
                      !O &&
                      c &&
                      !me &&
                      !Br &&
                      Ue &&
                      F < M + ((M - ut) / (ke() - Lr)) * X &&
                      (O = 1e-4),
                    O !== U && s.enabled)
                  ) {
                    if (
                      ((Ie = s.isActive = !!O && O < 1),
                      (pe = !!U && U < 1),
                      (G = Ie !== pe),
                      (it = G || !!O != !!U),
                      (s.direction = O > U ? 1 : -1),
                      (s.progress = O),
                      it &&
                        !me &&
                        ((W = O && !U ? 0 : O === 1 ? 1 : U === 1 ? 2 : 3),
                        he &&
                          ((L =
                            (!G && Y[W + 1] !== "none" && Y[W + 1]) || Y[W]),
                          (ft =
                            r &&
                            (L === "complete" || L === "reset" || L in r)))),
                      Le &&
                        (G || ft) &&
                        (ft || R || !r) &&
                        (Ee(Le)
                          ? Le(s)
                          : s.getTrailing(Le).forEach(function (Jt) {
                              return Jt.endAnimation();
                            })),
                      he ||
                        (D && !me && !Br
                          ? (D._dp._time - D._start !== D._time &&
                              D.render(D._dp._time - D._start),
                            D.resetTo
                              ? D.resetTo(
                                  "totalProgress",
                                  O,
                                  r._tTime / r._tDur,
                                )
                              : ((D.vars.totalProgress = O),
                                D.invalidate().restart()))
                          : r && r.totalProgress(O, !!(me && (wt || p)))),
                      c)
                    ) {
                      if ((p && _ && (se.style[_ + h.os2] = ct), !De))
                        tt(wr($t + bt * O));
                      else if (it) {
                        if (
                          (($e = !p && O > U && j + 1 > M && M + 1 >= at(w, h)),
                          Ze)
                        )
                          if (!p && (Ie || $e)) {
                            var Ne = _t(c, !0),
                              _e = M - F;
                            mo(
                              c,
                              z,
                              Ne.top + (h === re ? _e : 0) + ae,
                              Ne.left + (h === re ? 0 : _e) + ae,
                            );
                          } else mo(c, se);
                        ar(Ie || $e ? Vt : Mr),
                          (ur && O < 1 && Ie) ||
                            tt($t + (O === 1 && !$e ? bt : 0));
                      }
                    }
                    S && !Ae.tween && !me && !Br && nt.restart(!0),
                      l &&
                        (G || (ge && O && (O < 1 || !_n))) &&
                        mr(l.targets).forEach(function (Jt) {
                          return Jt.classList[Ie || ge ? "add" : "remove"](
                            l.className,
                          );
                        }),
                      a && !he && !p && a(s),
                      it && !me
                        ? (he &&
                            (ft &&
                              (L === "complete"
                                ? r.pause().totalProgress(1)
                                : L === "reset"
                                  ? r.restart(!0).pause()
                                  : L === "restart"
                                    ? r.restart(!0)
                                    : r[L]()),
                            a && a(s)),
                          (G || !_n) &&
                            (x && G && vn(s, x),
                            Re[W] && vn(s, Re[W]),
                            ge && (O === 1 ? s.kill(!1, 1) : (Re[W] = 0)),
                            G ||
                              ((W = O === 1 ? 1 : 3), Re[W] && vn(s, Re[W]))),
                          Pe &&
                            !Ie &&
                            Math.abs(s.getVelocity()) > (Wr(Pe) ? Pe : 2500) &&
                            (xr(s.callbackAnimation),
                            D
                              ? D.progress(1)
                              : xr(r, L === "reverse" ? 1 : !O, 1)))
                        : he && a && !me && a(s);
                  }
                  if (cr) {
                    var we = b
                      ? (M / b.duration()) * (b._caScrollDist || 0)
                      : M;
                    Ut(we + (u._isFlipped ? 1 : 0)), cr(we);
                  }
                  fr && fr((-M / b.duration()) * (b._caScrollDist || 0));
                }
              }),
              (s.enable = function (p, E) {
                s.enabled ||
                  ((s.enabled = !0),
                  ue(w, "resize", kr),
                  oe || ue(w, "scroll", lr),
                  ie && ue(i, "refreshInit", ie),
                  p !== !1 && ((s.progress = Oe = 0), (Fe = ut = Je = Q())),
                  E !== !1 && s.refresh());
              }),
              (s.getTween = function (p) {
                return p && Ae ? Ae.tween : D;
              }),
              (s.setPositions = function (p, E, v, M) {
                if (b) {
                  var fe = b.scrollTrigger,
                    O = b.duration(),
                    U = fe.end - fe.start;
                  (p = fe.start + (U * p) / O), (E = fe.start + (U * E) / O);
                }
                s.refresh(
                  !1,
                  !1,
                  {
                    start: Zn(p, v && !!s._startClamp),
                    end: Zn(E, v && !!s._endClamp),
                  },
                  M,
                ),
                  s.update();
              }),
              (s.adjustPinSpacing = function (p) {
                if (Xe && p) {
                  var E = Xe.indexOf(h.d) + 1;
                  (Xe[E] = parseFloat(Xe[E]) + p + ae),
                    (Xe[1] = parseFloat(Xe[1]) + p + ae),
                    ar(Xe);
                }
              }),
              (s.disable = function (p, E) {
                if (
                  s.enabled &&
                  (p !== !1 && s.revert(!0, !0),
                  (s.enabled = s.isActive = !1),
                  E || (D && D.pause()),
                  (ot = 0),
                  ve && (ve.uncache = 1),
                  ie && ce(i, "refreshInit", ie),
                  nt &&
                    (nt.pause(), Ae.tween && Ae.tween.kill() && (Ae.tween = 0)),
                  !oe)
                ) {
                  for (var v = C.length; v--; )
                    if (C[v].scroller === w && C[v] !== s) return;
                  ce(w, "resize", kr), oe || ce(w, "scroll", lr);
                }
              }),
              (s.kill = function (p, E) {
                s.disable(p, E), D && !E && D.kill(), f && delete Cn[f];
                var v = C.indexOf(s);
                v >= 0 && C.splice(v, 1),
                  v === Ce && Jr > 0 && Ce--,
                  (v = 0),
                  C.forEach(function (M) {
                    return M.scroller === s.scroller && (v = 1);
                  }),
                  v || Me || (s.scroll.rec = 0),
                  r &&
                    ((r.scrollTrigger = null),
                    p && r.revert({ kill: !1 }),
                    E || r.kill()),
                  ze &&
                    [ze, Ge, u, Ve].forEach(function (M) {
                      return M.parentNode && M.parentNode.removeChild(M);
                    }),
                  Er === s && (Er = 0),
                  c &&
                    (ve && (ve.uncache = 1),
                    (v = 0),
                    C.forEach(function (M) {
                      return M.pin === c && v++;
                    }),
                    v || (ve.spacer = 0)),
                  t.onKill && t.onKill(s);
              }),
              C.push(s),
              s.enable(!1, !1),
              yt && yt(s),
              r && r.add && !ee)
            ) {
              var te = s.update;
              (s.update = function () {
                (s.update = te), F || j || s.refresh();
              }),
                d.delayedCall(0.01, s.update),
                (ee = 0.01),
                (F = j = 0);
            } else s.refresh();
            c && Fo();
          }),
          (i.register = function (t) {
            return (
              tr ||
                ((d = t || eo()),
                jn() && window.document && i.enable(),
                (tr = vr)),
              tr
            );
          }),
          (i.defaults = function (t) {
            if (t) for (var r in t) $r[r] = t[r];
            return $r;
          }),
          (i.disable = function (t, r) {
            (vr = 0),
              C.forEach(function (a) {
                return a[r ? "kill" : "disable"](t);
              }),
              ce(P, "wheel", lr),
              ce(B, "scroll", lr),
              clearInterval(zr),
              ce(B, "touchcancel", lt),
              ce(z, "touchstart", lt),
              Gr(ce, B, "pointerdown,touchstart,mousedown", Jn),
              Gr(ce, B, "pointerup,touchend,mouseup", Qn),
              Yr.kill(),
              Hr(ce);
            for (var o = 0; o < T.length; o += 3)
              Vr(ce, T[o], T[o + 1]), Vr(ce, T[o], T[o + 2]);
          }),
          (i.enable = function () {
            if (
              ((P = window),
              (B = document),
              (je = B.documentElement),
              (z = B.body),
              d &&
                ((mr = d.utils.toArray),
                (rr = d.utils.clamp),
                (pn = d.core.context || lt),
                (fn = d.core.suppressOverwrites || lt),
                (dn = P.history.scrollRestoration || "auto"),
                (En = P.pageYOffset),
                d.core.globals("ScrollTrigger", i),
                z))
            ) {
              (vr = 1),
                (or = document.createElement("div")),
                (or.style.height = "100vh"),
                (or.style.position = "absolute"),
                go(),
                Eo(),
                q.register(d),
                (i.isTouch = q.isTouch),
                (Mt =
                  q.isTouch &&
                  /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
                ue(P, "wheel", lr),
                (Bn = [P, B, je, z]),
                d.matchMedia
                  ? ((i.matchMedia = function (f) {
                      var x = d.matchMedia(),
                        A;
                      for (A in f) x.add(A, f[A]);
                      return x;
                    }),
                    d.addEventListener("matchMediaInit", function () {
                      return kn();
                    }),
                    d.addEventListener("matchMediaRevert", function () {
                      return co();
                    }),
                    d.addEventListener("matchMedia", function () {
                      Bt(0, 1), Xt("matchMedia");
                    }),
                    d.matchMedia("(orientation: portrait)", function () {
                      return Tn(), Tn;
                    }))
                  : console.warn("Requires GSAP 3.11.0 or later"),
                Tn(),
                ue(B, "scroll", lr);
              var t = z.style,
                r = t.borderTopStyle,
                o = d.core.Animation.prototype,
                a,
                l;
              for (
                o.revert ||
                  Object.defineProperty(o, "revert", {
                    value: function () {
                      return this.time(-0.01, !0);
                    },
                  }),
                  t.borderTopStyle = "solid",
                  a = _t(z),
                  re.m = Math.round(a.top + re.sc()) || 0,
                  Se.m = Math.round(a.left + Se.sc()) || 0,
                  r
                    ? (t.borderTopStyle = r)
                    : t.removeProperty("border-top-style"),
                  zr = setInterval(ao, 250),
                  d.delayedCall(0.5, function () {
                    return (Br = 0);
                  }),
                  ue(B, "touchcancel", lt),
                  ue(z, "touchstart", lt),
                  Gr(ue, B, "pointerdown,touchstart,mousedown", Jn),
                  Gr(ue, B, "pointerup,touchend,mouseup", Qn),
                  cn = d.utils.checkPrefix("transform"),
                  Qr.push(cn),
                  tr = ke(),
                  Yr = d.delayedCall(0.2, Bt).pause(),
                  nr = [
                    B,
                    "visibilitychange",
                    function () {
                      var f = P.innerWidth,
                        x = P.innerHeight;
                      B.hidden
                        ? ((Hn = f), (Wn = x))
                        : (Hn !== f || Wn !== x) && kr();
                    },
                    B,
                    "DOMContentLoaded",
                    Bt,
                    P,
                    "load",
                    Bt,
                    P,
                    "resize",
                    kr,
                  ],
                  Hr(ue),
                  C.forEach(function (f) {
                    return f.enable(0, 1);
                  }),
                  l = 0;
                l < T.length;
                l += 3
              )
                Vr(ce, T[l], T[l + 1]), Vr(ce, T[l], T[l + 2]);
            }
          }),
          (i.config = function (t) {
            "limitCallbacks" in t && (_n = !!t.limitCallbacks);
            var r = t.syncInterval;
            (r && clearInterval(zr)) || ((zr = r) && setInterval(ao, r)),
              "ignoreMobileResize" in t &&
                ($n = i.isTouch === 1 && t.ignoreMobileResize),
              "autoRefreshEvents" in t &&
                (Hr(ce) || Hr(ue, t.autoRefreshEvents || "none"),
                (Vn = (t.autoRefreshEvents + "").indexOf("resize") === -1));
          }),
          (i.scrollerProxy = function (t, r) {
            var o = Ye(t),
              a = T.indexOf(o),
              l = Ft(o);
            ~a && T.splice(a, l ? 6 : 2),
              r && (l ? st.unshift(P, r, z, r, je, r) : st.unshift(o, r));
          }),
          (i.clearMatchMedia = function (t) {
            C.forEach(function (r) {
              return r._ctx && r._ctx.query === t && r._ctx.kill(!0, !0);
            });
          }),
          (i.isInViewport = function (t, r, o) {
            var a = (He(t) ? Ye(t) : t).getBoundingClientRect(),
              l = a[o ? Yt : Lt] * r || 0;
            return o
              ? a.right - l > 0 && a.left + l < P.innerWidth
              : a.bottom - l > 0 && a.top + l < P.innerHeight;
          }),
          (i.positionInViewport = function (t, r, o) {
            He(t) && (t = Ye(t));
            var a = t.getBoundingClientRect(),
              l = a[o ? Yt : Lt],
              f =
                r == null
                  ? l / 2
                  : r in Ur
                    ? Ur[r] * l
                    : ~r.indexOf("%")
                      ? (parseFloat(r) * l) / 100
                      : parseFloat(r) || 0;
            return o
              ? (a.left + f) / P.innerWidth
              : (a.top + f) / P.innerHeight;
          }),
          (i.killAll = function (t) {
            if (
              (C.slice(0).forEach(function (o) {
                return o.vars.id !== "ScrollSmoother" && o.kill();
              }),
              t !== !0)
            ) {
              var r = zt.killAll || [];
              (zt = {}),
                r.forEach(function (o) {
                  return o();
                });
            }
          }),
          i
        );
      })();
    (k.version = "3.12.4"),
      (k.saveStyles = function (i) {
        return i
          ? mr(i).forEach(function (e) {
              if (e && e.style) {
                var n = We.indexOf(e);
                n >= 0 && We.splice(n, 5),
                  We.push(
                    e,
                    e.style.cssText,
                    e.getBBox && e.getAttribute("transform"),
                    d.core.getCache(e),
                    pn(),
                  );
              }
            })
          : We;
      }),
      (k.revert = function (i, e) {
        return kn(!i, e);
      }),
      (k.create = function (i, e) {
        return new k(i, e);
      }),
      (k.refresh = function (i) {
        return i ? kr() : (tr || k.register()) && Bt(!0);
      }),
      (k.update = function (i) {
        return ++T.cache && mt(i === !0 ? 2 : 0);
      }),
      (k.clearScrollMemory = fo),
      (k.maxScroll = function (i, e) {
        return at(i, e ? Se : re);
      }),
      (k.getScrollFunc = function (i, e) {
        return Et(Ye(i), e ? Se : re);
      }),
      (k.getById = function (i) {
        return Cn[i];
      }),
      (k.getAll = function () {
        return C.filter(function (i) {
          return i.vars.id !== "ScrollSmoother";
        });
      }),
      (k.isScrolling = function () {
        return !!Ue;
      }),
      (k.snapDirectional = Sn),
      (k.addEventListener = function (i, e) {
        var n = zt[i] || (zt[i] = []);
        ~n.indexOf(e) || n.push(e);
      }),
      (k.removeEventListener = function (i, e) {
        var n = zt[i],
          t = n && n.indexOf(e);
        t >= 0 && n.splice(t, 1);
      }),
      (k.batch = function (i, e) {
        var n = [],
          t = {},
          r = e.interval || 0.016,
          o = e.batchMax || 1e9,
          a = function (x, A) {
            var R = [],
              g = [],
              c = d
                .delayedCall(r, function () {
                  A(R, g), (R = []), (g = []);
                })
                .pause();
            return function (_) {
              R.length || c.restart(!0),
                R.push(_.trigger),
                g.push(_),
                o <= R.length && c.progress(1);
            };
          },
          l;
        for (l in e)
          t[l] =
            l.substr(0, 2) === "on" && Ee(e[l]) && l !== "onRefreshInit"
              ? a(l, e[l])
              : e[l];
        return (
          Ee(o) &&
            ((o = o()),
            ue(k, "refresh", function () {
              return (o = e.batchMax());
            })),
          mr(i).forEach(function (f) {
            var x = {};
            for (l in t) x[l] = t[l];
            (x.trigger = f), n.push(k.create(x));
          }),
          n
        );
      });
    var xo = function (e, n, t, r) {
        return (
          n > r ? e(r) : n < 0 && e(0),
          t > r ? (r - n) / (t - n) : t < 0 ? n / (n - t) : 1
        );
      },
      Dn = function i(e, n) {
        n === !0
          ? e.style.removeProperty("touch-action")
          : (e.style.touchAction =
              n === !0
                ? "auto"
                : n
                  ? "pan-" + n + (q.isTouch ? " pinch-zoom" : "")
                  : "none"),
          e === je && i(z, n);
      },
      rn = { auto: 1, scroll: 1 },
      Xo = function (e) {
        var n = e.event,
          t = e.target,
          r = e.axis,
          o = (n.changedTouches ? n.changedTouches[0] : n).target,
          a = o._gsap || d.core.getCache(o),
          l = ke(),
          f;
        if (!a._isScrollT || l - a._isScrollT > 2e3) {
          for (
            ;
            o &&
            o !== z &&
            ((o.scrollHeight <= o.clientHeight &&
              o.scrollWidth <= o.clientWidth) ||
              !(rn[(f = Ke(o)).overflowY] || rn[f.overflowX]));

          )
            o = o.parentNode;
          (a._isScroll =
            o &&
            o !== t &&
            !Ft(o) &&
            (rn[(f = Ke(o)).overflowY] || rn[f.overflowX])),
            (a._isScrollT = l);
        }
        (a._isScroll || r === "x") &&
          (n.stopPropagation(), (n._gsapAllow = !0));
      },
      bo = function (e, n, t, r) {
        return q.create({
          target: e,
          capture: !0,
          debounce: !1,
          lockAxis: !0,
          type: n,
          onWheel: (r = r && Xo),
          onPress: r,
          onDrag: r,
          onScroll: r,
          onEnable: function () {
            return t && ue(B, q.eventTypes[0], So, !1, !0);
          },
          onDisable: function () {
            return ce(B, q.eventTypes[0], So, !0);
          },
        });
      },
      No = /(input|label|select|textarea)/i,
      yo,
      So = function (e) {
        var n = No.test(e.target.tagName);
        (n || yo) && ((e._gsapAllow = !0), (yo = n));
      },
      Bo = function (e) {
        It(e) || (e = {}),
          (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
          e.type || (e.type = "wheel,touch"),
          (e.debounce = !!e.debounce),
          (e.id = e.id || "normalizer");
        var n = e,
          t = n.normalizeScrollX,
          r = n.momentum,
          o = n.allowNestedScroll,
          a = n.onRelease,
          l,
          f,
          x = Ye(e.target) || je,
          A = d.core.globals().ScrollSmoother,
          R = A && A.get(),
          g =
            Mt &&
            ((e.content && Ye(e.content)) ||
              (R && e.content !== !1 && !R.smooth() && R.content())),
          c = Et(x, re),
          _ = Et(x, Se),
          V = 1,
          X =
            (q.isTouch && P.visualViewport
              ? P.visualViewport.scale * P.visualViewport.width
              : P.outerWidth) / P.innerWidth,
          ne = 0,
          H = Ee(r)
            ? function () {
                return r(l);
              }
            : function () {
                return r || 2.8;
              },
          ge,
          S,
          Ze = bo(x, e.type, !0, o),
          N = function () {
            return (S = !1);
          },
          b = lt,
          Pe = lt,
          Le = function () {
            (f = at(x, re)),
              (Pe = rr(Mt ? 1 : 0, f)),
              t && (b = rr(0, at(x, Se))),
              (ge = Nt);
          },
          h = function () {
            (g._gsap.y = wr(parseFloat(g._gsap.y) + c.offset) + "px"),
              (g.style.transform =
                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                parseFloat(g._gsap.y) +
                ", 0, 1)"),
              (c.offset = c.cacheID = 0);
          },
          he = function () {
            if (S) {
              requestAnimationFrame(N);
              var Z = wr(l.deltaY / 2),
                J = Pe(c.v - Z);
              if (g && J !== c.v + c.offset) {
                c.offset = J - c.v;
                var s = wr((parseFloat(g && g._gsap.y) || 0) - c.offset);
                (g.style.transform =
                  "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                  s +
                  ", 0, 1)"),
                  (g._gsap.y = s + "px"),
                  (c.cacheID = T.cache),
                  mt();
              }
              return !0;
            }
            c.offset && h(), (S = !0);
          },
          w,
          vt,
          oe,
          De,
          Re = function () {
            Le(),
              w.isActive() &&
                w.vars.scrollY > f &&
                (c() > f ? w.progress(1) && c(f) : w.resetTo("scrollY", f));
          };
        return (
          g && d.set(g, { y: "+=0" }),
          (e.ignoreCheck = function (Y) {
            return (
              (Mt && Y.type === "touchmove" && he()) ||
              (V > 1.05 && Y.type !== "touchstart") ||
              l.isGesturing ||
              (Y.touches && Y.touches.length > 1)
            );
          }),
          (e.onPress = function () {
            S = !1;
            var Y = V;
            (V = wr(((P.visualViewport && P.visualViewport.scale) || 1) / X)),
              w.pause(),
              Y !== V && Dn(x, V > 1.01 ? !0 : t ? !1 : "x"),
              (vt = _()),
              (oe = c()),
              Le(),
              (ge = Nt);
          }),
          (e.onRelease = e.onGestureStart =
            function (Y, Z) {
              if ((c.offset && h(), !Z)) De.restart(!0);
              else {
                T.cache++;
                var J = H(),
                  s,
                  ie;
                t &&
                  ((s = _()),
                  (ie = s + (J * 0.05 * -Y.velocityX) / 0.227),
                  (J *= xo(_, s, ie, at(x, Se))),
                  (w.vars.scrollX = b(ie))),
                  (s = c()),
                  (ie = s + (J * 0.05 * -Y.velocityY) / 0.227),
                  (J *= xo(c, s, ie, at(x, re))),
                  (w.vars.scrollY = Pe(ie)),
                  w.invalidate().duration(J).play(0.01),
                  ((Mt && w.vars.scrollY >= f) || s >= f - 1) &&
                    d.to({}, { onUpdate: Re, duration: J });
              }
              a && a(Y);
            }),
          (e.onWheel = function () {
            w._ts && w.pause(), ke() - ne > 1e3 && ((ge = 0), (ne = ke()));
          }),
          (e.onChange = function (Y, Z, J, s, ie) {
            if (
              (Nt !== ge && Le(),
              Z &&
                t &&
                _(b(s[2] === Z ? vt + (Y.startX - Y.x) : _() + Z - s[1])),
              J)
            ) {
              c.offset && h();
              var Ht = ie[2] === J,
                Pt = Ht ? oe + Y.startY - Y.y : c() + J - ie[1],
                Je = Pe(Pt);
              Ht && Pt !== Je && (oe += Je - Pt), c(Je);
            }
            (J || Z) && mt();
          }),
          (e.onEnable = function () {
            Dn(x, t ? !1 : "x"),
              k.addEventListener("refresh", Re),
              ue(P, "resize", Re),
              c.smooth &&
                ((c.target.style.scrollBehavior = "auto"),
                (c.smooth = _.smooth = !1)),
              Ze.enable();
          }),
          (e.onDisable = function () {
            Dn(x, !0),
              ce(P, "resize", Re),
              k.removeEventListener("refresh", Re),
              Ze.kill();
          }),
          (e.lockAxis = e.lockAxis !== !1),
          (l = new q(e)),
          (l.iOS = Mt),
          Mt && !c() && c(1),
          Mt && d.ticker.add(lt),
          (De = l._dc),
          (w = d.to(l, {
            ease: "power4",
            paused: !0,
            scrollX: t ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
              scrollY: vo(c, c(), function () {
                return w.pause();
              }),
            },
            onUpdate: mt,
            onComplete: De.vars.onComplete,
          })),
          l
        );
      };
    (k.sort = function (i) {
      return C.sort(
        i ||
          function (e, n) {
            return (
              (e.vars.refreshPriority || 0) * -1e6 +
              e.start -
              (n.start + (n.vars.refreshPriority || 0) * -1e6)
            );
          },
      );
    }),
      (k.observe = function (i) {
        return new q(i);
      }),
      (k.normalizeScroll = function (i) {
        if (typeof i > "u") return Te;
        if (i === !0 && Te) return Te.enable();
        if (i === !1) {
          Te && Te.kill(), (Te = i);
          return;
        }
        var e = i instanceof q ? i : Bo(i);
        return (
          Te && Te.target === e.target && Te.kill(), Ft(e.target) && (Te = e), e
        );
      }),
      (k.core = {
        _getVelocityProp: un,
        _inputObserver: bo,
        _scrollers: T,
        _proxies: st,
        bridge: {
          ss: function () {
            Ue || Xt("scrollStart"), (Ue = ke());
          },
          ref: function () {
            return me;
          },
        },
      }),
      eo() && d.registerPlugin(k),
      (gt.ScrollTrigger = k),
      (gt.default = k),
      typeof window > "u" || window !== gt
        ? Object.defineProperty(gt, "__esModule", { value: !0 })
        : delete window.default;
  });
})(On, On.exports);
var Wo = On.exports;
sn.registerPlugin(Wo.ScrollTrigger);
const Uo = (Qt, pr = 0, gt = 0.5, St = "ease") =>
    sn.from(Qt, { opacity: 0, y: pr, duration: gt, ease: St }),
  qo = (Qt, pr = 0, gt = 0.5, St = "ease") =>
    sn.from(Qt, { opacity: 0, x: pr, duration: gt, ease: St }),
  Go = { start: "top 80%", end: "bottom 70%" },
  Ko = (Qt) => sn.timeline({ scrollTrigger: { trigger: Qt, ...Go } });
export { Uo as a, Ko as c, qo as f };
