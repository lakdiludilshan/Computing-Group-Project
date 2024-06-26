import {
  __commonJS
} from "./chunk-CEQRFMJQ.js";

// node_modules/bootstrap/js/dist/util/index.js
var require_util = __commonJS({
  "node_modules/bootstrap/js/dist/util/index.js"(exports, module) {
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.Index = {}));
    })(exports, function(exports2) {
      "use strict";
      const MAX_UID = 1e6;
      const MILLISECONDS_MULTIPLIER = 1e3;
      const TRANSITION_END = "transitionend";
      const parseSelector = (selector) => {
        if (selector && window.CSS && window.CSS.escape) {
          selector = selector.replace(/#([^\s"#']+)/g, (match, id) => `#${CSS.escape(id)}`);
        }
        return selector;
      };
      const toType = (object) => {
        if (object === null || object === void 0) {
          return `${object}`;
        }
        return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
      };
      const getUID = (prefix) => {
        do {
          prefix += Math.floor(Math.random() * MAX_UID);
        } while (document.getElementById(prefix));
        return prefix;
      };
      const getTransitionDurationFromElement = (element) => {
        if (!element) {
          return 0;
        }
        let {
          transitionDuration,
          transitionDelay
        } = window.getComputedStyle(element);
        const floatTransitionDuration = Number.parseFloat(transitionDuration);
        const floatTransitionDelay = Number.parseFloat(transitionDelay);
        if (!floatTransitionDuration && !floatTransitionDelay) {
          return 0;
        }
        transitionDuration = transitionDuration.split(",")[0];
        transitionDelay = transitionDelay.split(",")[0];
        return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
      };
      const triggerTransitionEnd = (element) => {
        element.dispatchEvent(new Event(TRANSITION_END));
      };
      const isElement = (object) => {
        if (!object || typeof object !== "object") {
          return false;
        }
        if (typeof object.jquery !== "undefined") {
          object = object[0];
        }
        return typeof object.nodeType !== "undefined";
      };
      const getElement = (object) => {
        if (isElement(object)) {
          return object.jquery ? object[0] : object;
        }
        if (typeof object === "string" && object.length > 0) {
          return document.querySelector(parseSelector(object));
        }
        return null;
      };
      const isVisible = (element) => {
        if (!isElement(element) || element.getClientRects().length === 0) {
          return false;
        }
        const elementIsVisible = getComputedStyle(element).getPropertyValue("visibility") === "visible";
        const closedDetails = element.closest("details:not([open])");
        if (!closedDetails) {
          return elementIsVisible;
        }
        if (closedDetails !== element) {
          const summary = element.closest("summary");
          if (summary && summary.parentNode !== closedDetails) {
            return false;
          }
          if (summary === null) {
            return false;
          }
        }
        return elementIsVisible;
      };
      const isDisabled = (element) => {
        if (!element || element.nodeType !== Node.ELEMENT_NODE) {
          return true;
        }
        if (element.classList.contains("disabled")) {
          return true;
        }
        if (typeof element.disabled !== "undefined") {
          return element.disabled;
        }
        return element.hasAttribute("disabled") && element.getAttribute("disabled") !== "false";
      };
      const findShadowRoot = (element) => {
        if (!document.documentElement.attachShadow) {
          return null;
        }
        if (typeof element.getRootNode === "function") {
          const root = element.getRootNode();
          return root instanceof ShadowRoot ? root : null;
        }
        if (element instanceof ShadowRoot) {
          return element;
        }
        if (!element.parentNode) {
          return null;
        }
        return findShadowRoot(element.parentNode);
      };
      const noop = () => {
      };
      const reflow = (element) => {
        element.offsetHeight;
      };
      const getjQuery = () => {
        if (window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")) {
          return window.jQuery;
        }
        return null;
      };
      const DOMContentLoadedCallbacks = [];
      const onDOMContentLoaded = (callback) => {
        if (document.readyState === "loading") {
          if (!DOMContentLoadedCallbacks.length) {
            document.addEventListener("DOMContentLoaded", () => {
              for (const callback2 of DOMContentLoadedCallbacks) {
                callback2();
              }
            });
          }
          DOMContentLoadedCallbacks.push(callback);
        } else {
          callback();
        }
      };
      const isRTL = () => document.documentElement.dir === "rtl";
      const defineJQueryPlugin = (plugin) => {
        onDOMContentLoaded(() => {
          const $ = getjQuery();
          if ($) {
            const name = plugin.NAME;
            const JQUERY_NO_CONFLICT = $.fn[name];
            $.fn[name] = plugin.jQueryInterface;
            $.fn[name].Constructor = plugin;
            $.fn[name].noConflict = () => {
              $.fn[name] = JQUERY_NO_CONFLICT;
              return plugin.jQueryInterface;
            };
          }
        });
      };
      const execute = (possibleCallback, args = [], defaultValue = possibleCallback) => {
        return typeof possibleCallback === "function" ? possibleCallback(...args) : defaultValue;
      };
      const executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
        if (!waitForTransition) {
          execute(callback);
          return;
        }
        const durationPadding = 5;
        const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
        let called = false;
        const handler = ({
          target
        }) => {
          if (target !== transitionElement) {
            return;
          }
          called = true;
          transitionElement.removeEventListener(TRANSITION_END, handler);
          execute(callback);
        };
        transitionElement.addEventListener(TRANSITION_END, handler);
        setTimeout(() => {
          if (!called) {
            triggerTransitionEnd(transitionElement);
          }
        }, emulatedDuration);
      };
      const getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {
        const listLength = list.length;
        let index = list.indexOf(activeElement);
        if (index === -1) {
          return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
        }
        index += shouldGetNext ? 1 : -1;
        if (isCycleAllowed) {
          index = (index + listLength) % listLength;
        }
        return list[Math.max(0, Math.min(index, listLength - 1))];
      };
      exports2.defineJQueryPlugin = defineJQueryPlugin;
      exports2.execute = execute;
      exports2.executeAfterTransition = executeAfterTransition;
      exports2.findShadowRoot = findShadowRoot;
      exports2.getElement = getElement;
      exports2.getNextActiveElement = getNextActiveElement;
      exports2.getTransitionDurationFromElement = getTransitionDurationFromElement;
      exports2.getUID = getUID;
      exports2.getjQuery = getjQuery;
      exports2.isDisabled = isDisabled;
      exports2.isElement = isElement;
      exports2.isRTL = isRTL;
      exports2.isVisible = isVisible;
      exports2.noop = noop;
      exports2.onDOMContentLoaded = onDOMContentLoaded;
      exports2.parseSelector = parseSelector;
      exports2.reflow = reflow;
      exports2.toType = toType;
      exports2.triggerTransitionEnd = triggerTransitionEnd;
      Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
    });
  }
});

// node_modules/bootstrap/js/dist/dom/event-handler.js
var require_event_handler = __commonJS({
  "node_modules/bootstrap/js/dist/dom/event-handler.js"(exports, module) {
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory(require_util()) : typeof define === "function" && define.amd ? define(["../util/index"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.EventHandler = factory(global.Index));
    })(exports, function(index_js) {
      "use strict";
      const namespaceRegex = /[^.]*(?=\..*)\.|.*/;
      const stripNameRegex = /\..*/;
      const stripUidRegex = /::\d+$/;
      const eventRegistry = {};
      let uidEvent = 1;
      const customEvents = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
      };
      const nativeEvents = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
      function makeEventUid(element, uid) {
        return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
      }
      function getElementEvents(element) {
        const uid = makeEventUid(element);
        element.uidEvent = uid;
        eventRegistry[uid] = eventRegistry[uid] || {};
        return eventRegistry[uid];
      }
      function bootstrapHandler(element, fn) {
        return function handler(event) {
          hydrateObj(event, {
            delegateTarget: element
          });
          if (handler.oneOff) {
            EventHandler.off(element, event.type, fn);
          }
          return fn.apply(element, [event]);
        };
      }
      function bootstrapDelegationHandler(element, selector, fn) {
        return function handler(event) {
          const domElements = element.querySelectorAll(selector);
          for (let {
            target
          } = event; target && target !== this; target = target.parentNode) {
            for (const domElement of domElements) {
              if (domElement !== target) {
                continue;
              }
              hydrateObj(event, {
                delegateTarget: target
              });
              if (handler.oneOff) {
                EventHandler.off(element, event.type, selector, fn);
              }
              return fn.apply(target, [event]);
            }
          }
        };
      }
      function findHandler(events, callable, delegationSelector = null) {
        return Object.values(events).find((event) => event.callable === callable && event.delegationSelector === delegationSelector);
      }
      function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
        const isDelegated = typeof handler === "string";
        const callable = isDelegated ? delegationFunction : handler || delegationFunction;
        let typeEvent = getTypeEvent(originalTypeEvent);
        if (!nativeEvents.has(typeEvent)) {
          typeEvent = originalTypeEvent;
        }
        return [isDelegated, callable, typeEvent];
      }
      function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
        if (typeof originalTypeEvent !== "string" || !element) {
          return;
        }
        let [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
        if (originalTypeEvent in customEvents) {
          const wrapFunction = (fn2) => {
            return function(event) {
              if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
                return fn2.call(this, event);
              }
            };
          };
          callable = wrapFunction(callable);
        }
        const events = getElementEvents(element);
        const handlers = events[typeEvent] || (events[typeEvent] = {});
        const previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);
        if (previousFunction) {
          previousFunction.oneOff = previousFunction.oneOff && oneOff;
          return;
        }
        const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ""));
        const fn = isDelegated ? bootstrapDelegationHandler(element, handler, callable) : bootstrapHandler(element, callable);
        fn.delegationSelector = isDelegated ? handler : null;
        fn.callable = callable;
        fn.oneOff = oneOff;
        fn.uidEvent = uid;
        handlers[uid] = fn;
        element.addEventListener(typeEvent, fn, isDelegated);
      }
      function removeHandler(element, events, typeEvent, handler, delegationSelector) {
        const fn = findHandler(events[typeEvent], handler, delegationSelector);
        if (!fn) {
          return;
        }
        element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
        delete events[typeEvent][fn.uidEvent];
      }
      function removeNamespacedHandlers(element, events, typeEvent, namespace) {
        const storeElementEvent = events[typeEvent] || {};
        for (const [handlerKey, event] of Object.entries(storeElementEvent)) {
          if (handlerKey.includes(namespace)) {
            removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
          }
        }
      }
      function getTypeEvent(event) {
        event = event.replace(stripNameRegex, "");
        return customEvents[event] || event;
      }
      const EventHandler = {
        on(element, event, handler, delegationFunction) {
          addHandler(element, event, handler, delegationFunction, false);
        },
        one(element, event, handler, delegationFunction) {
          addHandler(element, event, handler, delegationFunction, true);
        },
        off(element, originalTypeEvent, handler, delegationFunction) {
          if (typeof originalTypeEvent !== "string" || !element) {
            return;
          }
          const [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
          const inNamespace = typeEvent !== originalTypeEvent;
          const events = getElementEvents(element);
          const storeElementEvent = events[typeEvent] || {};
          const isNamespace = originalTypeEvent.startsWith(".");
          if (typeof callable !== "undefined") {
            if (!Object.keys(storeElementEvent).length) {
              return;
            }
            removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
            return;
          }
          if (isNamespace) {
            for (const elementEvent of Object.keys(events)) {
              removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
            }
          }
          for (const [keyHandlers, event] of Object.entries(storeElementEvent)) {
            const handlerKey = keyHandlers.replace(stripUidRegex, "");
            if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
              removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
            }
          }
        },
        trigger(element, event, args) {
          if (typeof event !== "string" || !element) {
            return null;
          }
          const $ = index_js.getjQuery();
          const typeEvent = getTypeEvent(event);
          const inNamespace = event !== typeEvent;
          let jQueryEvent = null;
          let bubbles = true;
          let nativeDispatch = true;
          let defaultPrevented = false;
          if (inNamespace && $) {
            jQueryEvent = $.Event(event, args);
            $(element).trigger(jQueryEvent);
            bubbles = !jQueryEvent.isPropagationStopped();
            nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
            defaultPrevented = jQueryEvent.isDefaultPrevented();
          }
          const evt = hydrateObj(new Event(event, {
            bubbles,
            cancelable: true
          }), args);
          if (defaultPrevented) {
            evt.preventDefault();
          }
          if (nativeDispatch) {
            element.dispatchEvent(evt);
          }
          if (evt.defaultPrevented && jQueryEvent) {
            jQueryEvent.preventDefault();
          }
          return evt;
        }
      };
      function hydrateObj(obj, meta = {}) {
        for (const [key, value] of Object.entries(meta)) {
          try {
            obj[key] = value;
          } catch (_unused) {
            Object.defineProperty(obj, key, {
              configurable: true,
              get() {
                return value;
              }
            });
          }
        }
        return obj;
      }
      return EventHandler;
    });
  }
});

// node_modules/bootstrap/js/dist/dom/manipulator.js
var require_manipulator = __commonJS({
  "node_modules/bootstrap/js/dist/dom/manipulator.js"(exports, module) {
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.Manipulator = factory());
    })(exports, function() {
      "use strict";
      function normalizeData(value) {
        if (value === "true") {
          return true;
        }
        if (value === "false") {
          return false;
        }
        if (value === Number(value).toString()) {
          return Number(value);
        }
        if (value === "" || value === "null") {
          return null;
        }
        if (typeof value !== "string") {
          return value;
        }
        try {
          return JSON.parse(decodeURIComponent(value));
        } catch (_unused) {
          return value;
        }
      }
      function normalizeDataKey(key) {
        return key.replace(/[A-Z]/g, (chr) => `-${chr.toLowerCase()}`);
      }
      const Manipulator = {
        setDataAttribute(element, key, value) {
          element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
        },
        removeDataAttribute(element, key) {
          element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
        },
        getDataAttributes(element) {
          if (!element) {
            return {};
          }
          const attributes = {};
          const bsKeys = Object.keys(element.dataset).filter((key) => key.startsWith("bs") && !key.startsWith("bsConfig"));
          for (const key of bsKeys) {
            let pureKey = key.replace(/^bs/, "");
            pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
            attributes[pureKey] = normalizeData(element.dataset[key]);
          }
          return attributes;
        },
        getDataAttribute(element, key) {
          return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
        }
      };
      return Manipulator;
    });
  }
});

// node_modules/bootstrap/js/dist/dom/data.js
var require_data = __commonJS({
  "node_modules/bootstrap/js/dist/dom/data.js"(exports, module) {
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.Data = factory());
    })(exports, function() {
      "use strict";
      const elementMap = /* @__PURE__ */ new Map();
      const data = {
        set(element, key, instance) {
          if (!elementMap.has(element)) {
            elementMap.set(element, /* @__PURE__ */ new Map());
          }
          const instanceMap = elementMap.get(element);
          if (!instanceMap.has(key) && instanceMap.size !== 0) {
            console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
            return;
          }
          instanceMap.set(key, instance);
        },
        get(element, key) {
          if (elementMap.has(element)) {
            return elementMap.get(element).get(key) || null;
          }
          return null;
        },
        remove(element, key) {
          if (!elementMap.has(element)) {
            return;
          }
          const instanceMap = elementMap.get(element);
          instanceMap.delete(key);
          if (instanceMap.size === 0) {
            elementMap.delete(element);
          }
        }
      };
      return data;
    });
  }
});

// node_modules/bootstrap/js/dist/util/config.js
var require_config = __commonJS({
  "node_modules/bootstrap/js/dist/util/config.js"(exports, module) {
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory(require_manipulator(), require_util()) : typeof define === "function" && define.amd ? define(["../dom/manipulator", "./index"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.Config = factory(global.Manipulator, global.Index));
    })(exports, function(Manipulator, index_js) {
      "use strict";
      class Config {
        // Getters
        static get Default() {
          return {};
        }
        static get DefaultType() {
          return {};
        }
        static get NAME() {
          throw new Error('You have to implement the static method "NAME", for each component!');
        }
        _getConfig(config) {
          config = this._mergeConfigObj(config);
          config = this._configAfterMerge(config);
          this._typeCheckConfig(config);
          return config;
        }
        _configAfterMerge(config) {
          return config;
        }
        _mergeConfigObj(config, element) {
          const jsonConfig = index_js.isElement(element) ? Manipulator.getDataAttribute(element, "config") : {};
          return {
            ...this.constructor.Default,
            ...typeof jsonConfig === "object" ? jsonConfig : {},
            ...index_js.isElement(element) ? Manipulator.getDataAttributes(element) : {},
            ...typeof config === "object" ? config : {}
          };
        }
        _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
          for (const [property, expectedTypes] of Object.entries(configTypes)) {
            const value = config[property];
            const valueType = index_js.isElement(value) ? "element" : index_js.toType(value);
            if (!new RegExp(expectedTypes).test(valueType)) {
              throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
            }
          }
        }
      }
      return Config;
    });
  }
});

// node_modules/bootstrap/js/dist/base-component.js
var require_base_component = __commonJS({
  "node_modules/bootstrap/js/dist/base-component.js"(exports, module) {
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory(require_data(), require_event_handler(), require_config(), require_util()) : typeof define === "function" && define.amd ? define(["./dom/data", "./dom/event-handler", "./util/config", "./util/index"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.BaseComponent = factory(global.Data, global.EventHandler, global.Config, global.Index));
    })(exports, function(Data, EventHandler, Config, index_js) {
      "use strict";
      const VERSION = "5.3.3";
      class BaseComponent extends Config {
        constructor(element, config) {
          super();
          element = index_js.getElement(element);
          if (!element) {
            return;
          }
          this._element = element;
          this._config = this._getConfig(config);
          Data.set(this._element, this.constructor.DATA_KEY, this);
        }
        // Public
        dispose() {
          Data.remove(this._element, this.constructor.DATA_KEY);
          EventHandler.off(this._element, this.constructor.EVENT_KEY);
          for (const propertyName of Object.getOwnPropertyNames(this)) {
            this[propertyName] = null;
          }
        }
        _queueCallback(callback, element, isAnimated = true) {
          index_js.executeAfterTransition(callback, element, isAnimated);
        }
        _getConfig(config) {
          config = this._mergeConfigObj(config, this._element);
          config = this._configAfterMerge(config);
          this._typeCheckConfig(config);
          return config;
        }
        // Static
        static getInstance(element) {
          return Data.get(index_js.getElement(element), this.DATA_KEY);
        }
        static getOrCreateInstance(element, config = {}) {
          return this.getInstance(element) || new this(element, typeof config === "object" ? config : null);
        }
        static get VERSION() {
          return VERSION;
        }
        static get DATA_KEY() {
          return `bs.${this.NAME}`;
        }
        static get EVENT_KEY() {
          return `.${this.DATA_KEY}`;
        }
        static eventName(name) {
          return `${name}${this.EVENT_KEY}`;
        }
      }
      return BaseComponent;
    });
  }
});

// node_modules/bootstrap/js/dist/dom/selector-engine.js
var require_selector_engine = __commonJS({
  "node_modules/bootstrap/js/dist/dom/selector-engine.js"(exports, module) {
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory(require_util()) : typeof define === "function" && define.amd ? define(["../util/index"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.SelectorEngine = factory(global.Index));
    })(exports, function(index_js) {
      "use strict";
      const getSelector = (element) => {
        let selector = element.getAttribute("data-bs-target");
        if (!selector || selector === "#") {
          let hrefAttribute = element.getAttribute("href");
          if (!hrefAttribute || !hrefAttribute.includes("#") && !hrefAttribute.startsWith(".")) {
            return null;
          }
          if (hrefAttribute.includes("#") && !hrefAttribute.startsWith("#")) {
            hrefAttribute = `#${hrefAttribute.split("#")[1]}`;
          }
          selector = hrefAttribute && hrefAttribute !== "#" ? hrefAttribute.trim() : null;
        }
        return selector ? selector.split(",").map((sel) => index_js.parseSelector(sel)).join(",") : null;
      };
      const SelectorEngine = {
        find(selector, element = document.documentElement) {
          return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
        },
        findOne(selector, element = document.documentElement) {
          return Element.prototype.querySelector.call(element, selector);
        },
        children(element, selector) {
          return [].concat(...element.children).filter((child) => child.matches(selector));
        },
        parents(element, selector) {
          const parents = [];
          let ancestor = element.parentNode.closest(selector);
          while (ancestor) {
            parents.push(ancestor);
            ancestor = ancestor.parentNode.closest(selector);
          }
          return parents;
        },
        prev(element, selector) {
          let previous = element.previousElementSibling;
          while (previous) {
            if (previous.matches(selector)) {
              return [previous];
            }
            previous = previous.previousElementSibling;
          }
          return [];
        },
        // TODO: this is now unused; remove later along with prev()
        next(element, selector) {
          let next = element.nextElementSibling;
          while (next) {
            if (next.matches(selector)) {
              return [next];
            }
            next = next.nextElementSibling;
          }
          return [];
        },
        focusableChildren(element) {
          const focusables = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((selector) => `${selector}:not([tabindex^="-"])`).join(",");
          return this.find(focusables, element).filter((el) => !index_js.isDisabled(el) && index_js.isVisible(el));
        },
        getSelectorFromElement(element) {
          const selector = getSelector(element);
          if (selector) {
            return SelectorEngine.findOne(selector) ? selector : null;
          }
          return null;
        },
        getElementFromSelector(element) {
          const selector = getSelector(element);
          return selector ? SelectorEngine.findOne(selector) : null;
        },
        getMultipleElementsFromSelector(element) {
          const selector = getSelector(element);
          return selector ? SelectorEngine.find(selector) : [];
        }
      };
      return SelectorEngine;
    });
  }
});

export {
  require_util,
  require_event_handler,
  require_manipulator,
  require_base_component,
  require_selector_engine
};
/*! Bundled license information:

bootstrap/js/dist/util/index.js:
  (*!
    * Bootstrap index.js v5.3.3 (https://getbootstrap.com/)
    * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)

bootstrap/js/dist/dom/event-handler.js:
  (*!
    * Bootstrap event-handler.js v5.3.3 (https://getbootstrap.com/)
    * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)

bootstrap/js/dist/dom/manipulator.js:
  (*!
    * Bootstrap manipulator.js v5.3.3 (https://getbootstrap.com/)
    * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)

bootstrap/js/dist/dom/data.js:
  (*!
    * Bootstrap data.js v5.3.3 (https://getbootstrap.com/)
    * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)

bootstrap/js/dist/util/config.js:
  (*!
    * Bootstrap config.js v5.3.3 (https://getbootstrap.com/)
    * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)

bootstrap/js/dist/base-component.js:
  (*!
    * Bootstrap base-component.js v5.3.3 (https://getbootstrap.com/)
    * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)

bootstrap/js/dist/dom/selector-engine.js:
  (*!
    * Bootstrap selector-engine.js v5.3.3 (https://getbootstrap.com/)
    * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)
*/
//# sourceMappingURL=chunk-MBC3JGNJ.js.map
