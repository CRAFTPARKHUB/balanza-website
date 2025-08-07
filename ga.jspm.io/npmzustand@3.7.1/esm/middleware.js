var e = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty;
var r = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = (t, o, r) => o in t ? e(t, o, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: r
}) : t[o] = r;
var __spreadValues$1 = (e, n) => {
    for (var a in n || (n = {})) o.call(n, a) && __defNormalProp$1(e, a, n[a]);
    if (t)
        for (var a of t(n)) r.call(n, a) && __defNormalProp$1(e, a, n[a]);
    return e
};
const redux = (e, t) => (o, r, n) => {
    n.dispatch = t => {
        o((o => e(o, t)), false, t);
        return t
    };
    n.dispatchFromDevtools = true;
    return __spreadValues$1({
        dispatch: (...e) => n.dispatch(...e)
    }, t)
};

function devtools(e, t) {
    return (o, r, n) => {
        var a;
        let s = false;
        if ("string" === typeof t && !s) {
            console.warn("[zustand devtools middleware]: passing `name` as directly will be not allowed in next majorpass the `name` in an object `{ name: ... }` instead");
            s = true
        }
        const i = void 0 === t ? {
            name: void 0,
            anonymousActionType: void 0
        } : "string" === typeof t ? {
            name: t
        } : t;
        "undefined" !== typeof(null == (a = null == i ? void 0 : i.serialize) ? void 0 : a.options) && console.warn("[zustand devtools middleware]: `serialize.options` is deprecated, just use `serialize`");
        let l;
        try {
            l = window.__REDUX_DEVTOOLS_EXTENSION__ || window.top.__REDUX_DEVTOOLS_EXTENSION__
        } catch {}
        if (!l) {
            "production" !== (
                import.meta.env &&
                import.meta.env.MODE) && "undefined" !== typeof window && console.warn("[zustand devtools middleware] Please install/enable Redux devtools extension");
            return e(o, r, n)
        }
        let d = Object.create(l.connect(i));
        let c = false;
        Object.defineProperty(n, "devtools", {
            get: () => {
                if (!c) {
                    console.warn("[zustand devtools middleware] `devtools` property on the store is deprecated it will be removed in the next major.\nYou shouldn't interact with the extension directly. But in case you still want to you can patch `window.__REDUX_DEVTOOLS_EXTENSION__` directly");
                    c = true
                }
                return d
            },
            set: e => {
                if (!c) {
                    console.warn("[zustand devtools middleware] `api.devtools` is deprecated, it will be removed in the next major.\nYou shouldn't interact with the extension directly. But in case you still want to you can patch `window.__REDUX_DEVTOOLS_EXTENSION__` directly");
                    c = true
                }
                d = e
            }
        });
        let u = false;
        Object.defineProperty(d, "prefix", {
            get: () => {
                if (!u) {
                    console.warn("[zustand devtools middleware] along with `api.devtools`, `api.devtools.prefix` is deprecated.\nWe no longer prefix the actions/names" + i.name === void 0 ? ", pass the `name` option to create a separate instance of devtools for each store." : ", because the `name` option already creates a separate instance of devtools for each store.");
                    u = true
                }
                return ""
            },
            set: () => {
                if (!u) {
                    console.warn("[zustand devtools middleware] along with `api.devtools`, `api.devtools.prefix` is deprecated.\nWe no longer prefix the actions/names" + i.name === void 0 ? ", pass the `name` option to create a separate instance of devtools for each store." : ", because the `name` option already creates a separate instance of devtools for each store.");
                    u = true
                }
            }
        });
        let p = true;
        n.setState = (e, t, n) => {
            o(e, t);
            p && d.send(void 0 === n ? {
                type: i.anonymousActionType || "anonymous"
            } : "string" === typeof n ? {
                type: n
            } : n, r())
        };
        const setStateFromDevtools = (...e) => {
            const t = p;
            p = false;
            o(...e);
            p = t
        };
        const v = e(n.setState, r, n);
        d.init(v);
        if (n.dispatchFromDevtools && "function" === typeof n.dispatch) {
            let e = false;
            const t = n.dispatch;
            n.dispatch = (...o) => {
                if ("__setState" === o[0].type && !e) {
                    console.warn('[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.');
                    e = true
                }
                t(...o)
            }
        }
        d.subscribe((e => {
            var t;
            switch (e.type) {
                case "ACTION":
                    if ("string" !== typeof e.payload) {
                        console.error("[zustand devtools middleware] Unsupported action format");
                        return
                    }
                    return parseJsonThen(e.payload, (e => {
                        "__setState" !== e.type ? n.dispatchFromDevtools && "function" === typeof n.dispatch && n.dispatch(e) : setStateFromDevtools(e.state)
                    }));
                case "DISPATCH":
                    switch (e.payload.type) {
                        case "RESET":
                            setStateFromDevtools(v);
                            return d.init(n.getState());
                        case "COMMIT":
                            return d.init(n.getState());
                        case "ROLLBACK":
                            return parseJsonThen(e.state, (e => {
                                setStateFromDevtools(e);
                                d.init(n.getState())
                            }));
                        case "JUMP_TO_STATE":
                        case "JUMP_TO_ACTION":
                            return parseJsonThen(e.state, (e => {
                                setStateFromDevtools(e)
                            }));
                        case "IMPORT_STATE":
                            {
                                const {
                                    nextLiftedState: o
                                } = e.payload;
                                const r = null == (t = o.computedStates.slice(-1)[0]) ? void 0 : t.state;
                                if (!r) return;setStateFromDevtools(r);d.send(null, o);
                                return
                            }
                        case "PAUSE_RECORDING":
                            return p = !p
                    }
                    return
            }
        }));
        return v
    }
}
const parseJsonThen = (e, t) => {
    let o;
    try {
        o = JSON.parse(e)
    } catch (e) {
        console.error("[zustand devtools middleware] Could not parse the received json", e)
    }
    void 0 !== o && t(o)
};
const subscribeWithSelector = e => (t, o, r) => {
    const n = r.subscribe;
    r.subscribe = (e, t, o) => {
        let a = e;
        if (t) {
            const n = (null == o ? void 0 : o.equalityFn) || Object.is;
            let s = e(r.getState());
            a = o => {
                const r = e(o);
                if (!n(s, r)) {
                    const e = s;
                    t(s = r, e)
                }
            };
            (null == o ? void 0 : o.fireImmediately) && t(s, s)
        }
        return n(a)
    };
    const a = e(t, o, r);
    return a
};
const combine = (e, t) => (o, r, n) => Object.assign({}, e, t(o, r, n));
var n = Object.defineProperty;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty;
var i = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (e, t, o) => t in e ? n(e, t, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: o
}) : e[t] = o;
var __spreadValues = (e, t) => {
    for (var o in t || (t = {})) s.call(t, o) && __defNormalProp(e, o, t[o]);
    if (a)
        for (var o of a(t)) i.call(t, o) && __defNormalProp(e, o, t[o]);
    return e
};
const toThenable = e => t => {
    try {
        const o = e(t);
        return o instanceof Promise ? o : {
            then(e) {
                return toThenable(e)(o)
            },
            catch (e) {
                return this
            }
        }
    } catch (e) {
        return {
            then(e) {
                return this
            },
            catch (t) {
                return toThenable(t)(e)
            }
        }
    }
};
const persist = (e, t) => (o, r, n) => {
    let a = __spreadValues({
        getStorage: () => localStorage,
        serialize: JSON.stringify,
        deserialize: JSON.parse,
        partialize: e => e,
        version: 0,
        merge: (e, t) => __spreadValues(__spreadValues({}, t), e)
    }, t);
    (a.blacklist || a.whitelist) && console.warn(`The ${a.blacklist?"blacklist":"whitelist"} option is deprecated and will be removed in the next version. Please use the 'partialize' option instead.`);
    let s = false;
    const i = new Set;
    const l = new Set;
    let d;
    try {
        d = a.getStorage()
    } catch (e) {}
    if (!d) return e(((...e) => {
        console.warn(`[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`);
        o(...e)
    }), r, n);
    d.removeItem || console.warn(`[zustand persist middleware] The given storage for item '${a.name}' does not contain a 'removeItem' method, which will be required in v4.`);
    const c = toThenable(a.serialize);
    const setItem = () => {
        const e = a.partialize(__spreadValues({}, r()));
        a.whitelist && Object.keys(e).forEach((t => {
            var o;
            !(null == (o = a.whitelist) ? void 0 : o.includes(t)) && delete e[t]
        }));
        a.blacklist && a.blacklist.forEach((t => delete e[t]));
        let t;
        const o = c({
            state: e,
            version: a.version
        }).then((e => d.setItem(a.name, e))).catch((e => {
            t = e
        }));
        if (t) throw t;
        return o
    };
    const u = n.setState;
    n.setState = (e, t) => {
        u(e, t);
        void setItem()
    };
    const p = e(((...e) => {
        o(...e);
        void setItem()
    }), r, n);
    let v;
    const hydrate = () => {
        var e;
        if (!d) return;
        s = false;
        i.forEach((e => e(r())));
        const t = (null == (e = a.onRehydrateStorage) ? void 0 : e.call(a, r())) || void 0;
        return toThenable(d.getItem.bind(d))(a.name).then((e => {
            if (e) return a.deserialize(e)
        })).then((e => {
            if (e) {
                if ("number" !== typeof e.version || e.version === a.version) return e.state;
                if (a.migrate) return a.migrate(e.state, e.version);
                console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
            }
        })).then((e => {
            v = a.merge(e, p);
            o(v, true);
            return setItem()
        })).then((() => {
            null == t ? void 0 : t(v, void 0);
            s = true;
            l.forEach((e => e(v)))
        })).catch((e => {
            null == t ? void 0 : t(void 0, e)
        }))
    };
    n.persist = {
        setOptions: e => {
            a = __spreadValues(__spreadValues({}, a), e);
            e.getStorage && (d = e.getStorage())
        },
        clearStorage: () => {
            var e;
            null == (e = null == d ? void 0 : d.removeItem) ? void 0 : e.call(d, a.name)
        },
        rehydrate: () => hydrate(),
        hasHydrated: () => s,
        onHydrate: e => {
            i.add(e);
            return () => {
                i.delete(e)
            }
        },
        onFinishHydration: e => {
            l.add(e);
            return () => {
                l.delete(e)
            }
        }
    };
    hydrate();
    return v || p
};
export {
    combine,
    devtools,
    persist,
    redux,
    subscribeWithSelector
};

//# sourceMappingURL=middleware.js.map