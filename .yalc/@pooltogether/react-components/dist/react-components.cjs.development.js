'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var utilities = require('@pooltogether/utilities');
var reactToastify = require('react-toastify');
var FeatherIcon = _interopDefault(require('feather-icons-react'));
var classnames = _interopDefault(require('classnames'));
var ReactTooltip = _interopDefault(require('react-tooltip'));
var CopyToClipboard = _interopDefault(require('react-copy-to-clipboard'));
var hooks = require('@pooltogether/hooks');
var currentPoolData = require('@pooltogether/current-pool-data');
var menuButton = require('@reach/menu-button');
var popover = require('@reach/popover');
var reactDeviceDetect = require('react-device-detect');
var framerMotion = require('framer-motion');
var jotai = require('jotai');
var evmChainsExtended = require('@pooltogether/evm-chains-extended');
var Cookies = _interopDefault(require('js-cookie'));
var reactHotkeys = require('react-hotkeys');
var Dialog = _interopDefault(require('@reach/dialog'));
var ethers = require('ethers');
var VisuallyHidden = _interopDefault(require('@reach/visually-hidden'));
var blockies = require('@download/blockies');
var Loader = _interopDefault(require('react-loader-spinner'));

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var runtime_1 = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined$1; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined$1) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined$1;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined$1;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined$1;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined$1, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined$1;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined$1;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined$1;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined$1;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined$1;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   module.exports 
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}
});

var Blur = /*#__PURE__*/reactToastify.cssTransition({
  enter: "blur-enter",
  exit: "blur-exit",
  duration: [450, 400],
  appendPosition: true
});
var DEFAULT_OPTIONS = {
  transition: Blur
};
var poolToast = {
  dismiss: function dismiss() {
    reactToastify.toast.dismiss();
  },
  rainbow: function rainbow(message, options) {
    if (options === void 0) {
      options = DEFAULT_OPTIONS;
    }

    reactToastify.toast.dismiss();
    reactToastify.toast(message, options);

    if (window) {
      setTimeout(reactToastify.toast.dismiss, 7000);
    }
  },
  success: function success(message, options) {
    if (options === void 0) {
      options = DEFAULT_OPTIONS;
    }

    reactToastify.toast.dismiss();
    reactToastify.toast.success(message, options);
  },
  error: function error(message, options) {
    if (options === void 0) {
      options = DEFAULT_OPTIONS;
    }

    reactToastify.toast.dismiss();
    reactToastify.toast.error(message, options);
  },
  info: function info(message, options) {
    if (options === void 0) {
      options = DEFAULT_OPTIONS;
    }

    reactToastify.toast.dismiss();
    reactToastify.toast.info(message, options);
  },
  warn: function warn(message, options) {
    if (options === void 0) {
      options = DEFAULT_OPTIONS;
    }

    reactToastify.toast.dismiss();
    reactToastify.toast.warn(message, options);
  }
};

var DEFAULT_TOKEN_PRECISION = 18;
var addTokenToMetamask = /*#__PURE__*/function () {
  var _ref = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(symbol, tokenAddress, decimals, tokenImgUrl) {
    var _window, ethereum;

    return runtime_1.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (decimals === void 0) {
              decimals = DEFAULT_TOKEN_PRECISION;
            }

            _context.prev = 1;
            symbol = symbol.replace('-', '').substr(0, 5);

            if (!(typeof window === 'undefined')) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", null);

          case 5:
            // @ts-ignore
            ethereum = (_window = window) == null ? void 0 : _window.ethereum;
            _context.next = 8;
            return ethereum.request({
              method: 'wallet_watchAsset',
              params: {
                type: 'ERC20',
                options: {
                  address: tokenAddress,
                  symbol: symbol,
                  decimals: decimals,
                  image: tokenImgUrl
                }
              }
            });

          case 8:
            return _context.abrupt("return", _context.sent);

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](1);
            console.error(_context.t0);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 11]]);
  }));

  return function addTokenToMetamask(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

var TOKEN_IMG_URL = {
  PTaUSDC: 'https://app.pooltogether.com/ptausdc@2x.png'
}; // needs to handle which network the user is on

function AddTokenToMetamaskButton(props) {
  var children = props.children,
      className = props.className,
      t = props.t,
      chainId = props.chainId,
      isWalletOnProperNetwork = props.isWalletOnProperNetwork,
      token = props.token;
  var currentNetworkName = utilities.getNetworkNiceNameByChainId(chainId);

  if (!token) {
    return null;
  }

  var handleAddTokenToMetamask = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(e) {
      var tokenImageUrl;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();

              if (isWalletOnProperNetwork) {
                _context.next = 4;
                break;
              }

              poolToast.warn(t('switchToNetworkToAddToken', "Switch to {{networkName}} to add token '{{token}}'", {
                networkName: currentNetworkName,
                token: token.symbol
              }));
              return _context.abrupt("return", null);

            case 4:
              tokenImageUrl = token.symbol === 'PTaUSDC' ? TOKEN_IMG_URL.PTaUSDC : undefined;
              addTokenToMetamask(token.symbol, token.address, Number(token.decimals), tokenImageUrl);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleAddTokenToMetamask(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return React__default.createElement("button", {
    onClick: handleAddTokenToMetamask,
    className: className
  }, children || t('addTicketTokenToMetamask', {
    token: token.symbol
  }));
}
AddTokenToMetamaskButton.defaultProps = {
  className: "trans hover:opacity-90 cursor-pointer inline-flex items-center"
};

var _excluded = ["theme", "size", "className"],
    _excluded2 = ["chevron", "theme", "size", "className"];

(function (SquareButtonTheme) {
  SquareButtonTheme["teal"] = "teal";
  SquareButtonTheme["tealOutline"] = "tealOutline";
  SquareButtonTheme["purple"] = "purple";
  SquareButtonTheme["purpleOutline"] = "purpleOutline";
  SquareButtonTheme["orange"] = "orange";
  SquareButtonTheme["orangeOutline"] = "orangeOutline";
  SquareButtonTheme["black"] = "black";
  SquareButtonTheme["blackOutline"] = "blackOutline";
  SquareButtonTheme["rainbow"] = "rainbow";
})(exports.SquareButtonTheme || (exports.SquareButtonTheme = {}));

(function (SquareButtonSize) {
  SquareButtonSize["sm"] = "sm";
  SquareButtonSize["md"] = "md";
  SquareButtonSize["lg"] = "lg";
})(exports.SquareButtonSize || (exports.SquareButtonSize = {}));

var SquareButton = function SquareButton(props) {
  var theme = props.theme,
      size = props.size,
      className = props.className,
      buttonProps = _objectWithoutPropertiesLoose(props, _excluded);

  return React__default.createElement("button", Object.assign({
    className: classnames('square-btn', getThemeClassName(theme), getSizeClassName(size), className)
  }, buttonProps));
};
SquareButton.defaultProps = {
  theme: exports.SquareButtonTheme.teal,
  size: exports.SquareButtonSize.md
};
var SquareLink = function SquareLink(props) {
  var chevron = props.chevron,
      theme = props.theme,
      size = props.size,
      className = props.className,
      linkProps = _objectWithoutPropertiesLoose(props, _excluded2);

  return React__default.createElement("a", Object.assign({}, linkProps, {
    className: classnames('square-btn', getThemeClassName(theme), getSizeClassName(size), className)
  }), props.children, ' ', chevron && React__default.createElement(FeatherIcon, {
    icon: 'chevron-right',
    className: classnames('inline-block -mt-1', getChevronClassName(size))
  }));
};
SquareLink.defaultProps = {
  theme: exports.SquareButtonTheme.teal,
  size: exports.SquareButtonSize.md
};

var getChevronClassName = function getChevronClassName(size) {
  switch (size) {
    default:
    case exports.SquareButtonSize.sm:
      {
        return 'w-5 h-5';
      }

    case exports.SquareButtonSize.md:
      {
        return 'w-6 h-6';
      }

    case exports.SquareButtonSize.lg:
      {
        return 'w-8 h-8';
      }
  }
};

var getThemeClassName = function getThemeClassName(theme) {
  switch (theme) {
    default:
    case exports.SquareButtonTheme.teal:
      {
        return 'square-btn--teal';
      }

    case exports.SquareButtonTheme.tealOutline:
      {
        return 'square-btn--teal-outline';
      }

    case exports.SquareButtonTheme.purple:
      {
        return 'square-btn--purple';
      }

    case exports.SquareButtonTheme.purpleOutline:
      {
        return 'square-btn--purple-outline';
      }

    case exports.SquareButtonTheme.orange:
      {
        return 'square-btn--orange';
      }

    case exports.SquareButtonTheme.orangeOutline:
      {
        return 'square-btn--orange-outline';
      }

    case exports.SquareButtonTheme.black:
      {
        return 'square-btn--black';
      }

    case exports.SquareButtonTheme.blackOutline:
      {
        return 'square-btn--black-outline';
      }

    case exports.SquareButtonTheme.rainbow:
      {
        return 'square-btn--rainbow gradient-background-anim';
      }
  }
};

var getSizeClassName = function getSizeClassName(size) {
  switch (size) {
    default:
    case exports.SquareButtonSize.sm:
      {
        return 'square-btn--sm';
      }

    case exports.SquareButtonSize.md:
      {
        return 'square-btn--md';
      }

    case exports.SquareButtonSize.lg:
      {
        return 'square-btn--lg';
      }
  }
};

function getLegacyButtonClassNames(props) {
  var border = props.border,
      bg = props.bg,
      bold = props.bold,
      text = props.text,
      hoverBg = props.hoverBg,
      hoverBorder = props.hoverBorder,
      hoverText = props.hoverText,
      noAnim = props.noAnim,
      padding = props.padding,
      rounded = props.rounded,
      inverse = props.inverse,
      basic = props.basic,
      secondary = props.secondary,
      tertiary = props.tertiary,
      selected = props.selected,
      transition = props.transition,
      className = props.className,
      textSize = props.textSize,
      width = props.width,
      disabled = props.disabled;
  var defaultClasses = 'border-2 inline-block text-center leading-snug cursor-pointer outline-none focus:outline-none active:outline-none no-underline';
  var animClass = noAnim ? '' : 'button-scale';

  if (selected) {
    defaultClasses += " opacity-50";
    animClass = "";
  } // eg. textSize='sm', textSize='xl'


  textSize = getLegacyTextSize(textSize);
  var defaultPadding = 'px-4 xs:px-6 sm:px-10 lg:px-12 py-2 sm:py-2';
  var defaultRounded = 'rounded-full';
  var defaultTrans = 'trans trans-fast';
  var defaultBorder = 'border-highlight-2';
  var defaultBg = 'bg-transparent';
  var defaultText = 'text-highlight-2';
  var defaultHoverBorder = 'hover:border-highlight-4';
  var defaultHoverBg = 'hover:bg-highlight-4';
  var defaultHoverText = 'hover:text-secondary';

  if (secondary) {
    defaultBorder = 'border-highlight-2 border-2';
    defaultBg = 'bg-primary';
    defaultText = 'text-highlight-2';
    defaultHoverBorder = 'hover:border-highlight-1';
    defaultHoverBg = 'hover:bg-body';
    defaultHoverText = 'hover:text-highlight-1';
  }

  if (tertiary) {
    defaultBorder = 'border-transparent border-2';
    defaultBg = 'bg-highlight-3';
    defaultText = 'text-highlight-9';
    defaultHoverBorder = 'hover:border-transparent';
    defaultHoverBg = 'hover:bg-purple';
    defaultHoverText = 'hover:text-white';
  }

  if (basic) {
    defaultBorder = 'border-transparent border-2';
    defaultBg = 'bg-transparent';
    defaultText = 'text-highlight-2';
    defaultHoverBorder = 'hover:border-transparent';
    defaultHoverBg = 'hover:bg-transparent';
    defaultHoverText = 'hover:text-highlight-1';
  }

  if (inverse) {
    defaultBorder = 'border-inverse';
    defaultBg = 'bg-transparent';
    defaultText = 'text-inverse';
    defaultHoverBorder = 'hover:border-highlight-4';
    defaultHoverBg = 'hover:bg-highlight-4';
    defaultHoverText = 'hover:text-secondary';
  }

  var opacity = '';

  if (disabled) {
    opacity = 'opacity-40 cursor-not-allowed pointer-events-none';
  }

  var boldClassName = bold || bold === undefined ? 'font-bold' : '';
  padding = padding ? "" + padding : defaultPadding;
  rounded = rounded ? "rounded-" + rounded : defaultRounded;
  transition = transition ? "" + transition : defaultTrans;
  width = width ? "" + width : '';
  border = border ? "border-" + border : defaultBorder;
  bg = bg ? "bg-" + bg : defaultBg;
  text = text ? "text-" + text : defaultText;
  hoverBorder = hoverBorder ? "hover:border-" + hoverBorder : defaultHoverBorder;
  hoverBg = hoverBg ? "hover:bg-" + hoverBg : defaultHoverBg;
  hoverText = hoverText ? "hover:text-" + hoverText : defaultHoverText;
  return classnames(className, defaultClasses, animClass, boldClassName, bg, border, padding, rounded, text, hoverBg, hoverBorder, hoverText, textSize, transition, width, opacity);
}

var getLegacyTextSize = function getLegacyTextSize(size) {
  switch (size) {
    case 'xxxs':
      return "text-xxxxs xs:text-xxxs sm:text-xxs lg:text-xs";

    case 'xxs':
      return "text-xxxs xs:text-xxs sm:text-xs lg:text-sm";

    case 'xs':
      return "text-xxs xs:text-xs sm:text-sm lg:text-base";

    case 'sm':
      return "text-xs xs:text-sm sm:text-base lg:text-lg";

    case 'lg':
      return "text-sm xs:text-lg sm:text-xl lg:text-2xl";

    case 'xl':
      return "text-lg xs:text-xl sm:text-2xl lg:text-3xl";

    case '2xl':
      return "text-xl xs:text-2xl sm:text-3xl lg:text-4xl";

    default:
      return "text-xxs xs:text-xs sm:text-sm lg:text-base";
  }
};

function Button(props) {
  var classes = getLegacyButtonClassNames(props);
  var type = props.type,
      onClick = props.onClick,
      disabled = props.disabled,
      children = props.children;
  return React__default.createElement("button", {
    children: children,
    type: type,
    onClick: onClick,
    disabled: disabled,
    className: classes
  });
}

var SPLIT_LENGTH = 2;
function Amount(props) {
  var _useState = React.useState(null),
      firstPart = _useState[0],
      setFirstPart = _useState[1];

  var _useState2 = React.useState(null),
      secondPart = _useState2[0],
      setSecondPart = _useState2[1];

  var _useState3 = React.useState(null),
      thirdPart = _useState3[0],
      setThirdPart = _useState3[1];

  var _useState4 = React.useState(null),
      fourthPart = _useState4[0],
      setFourthPart = _useState4[1];

  React.useEffect(function () {
    var _props$children;

    var str = typeof props.children === 'object' ? props.children[0] : (_props$children = props.children) == null ? void 0 : _props$children.toString();

    if ((str == null ? void 0 : str.length) > 0) {
      var parts = str.split('.');

      if (parts[0]) {
        setFirstPart(parts[0]);
      }

      if (parts[1] && parts[1].length >= SPLIT_LENGTH) {
        setSecondPart(parts[1].substring(0, 2 + (SPLIT_LENGTH - 2)));
        var firstSpaceIndex = parts[1].indexOf(' ');
        var indexOrLength = firstSpaceIndex > 0 ? firstSpaceIndex : parts[1].length;
        setThirdPart(parts[1].substring(SPLIT_LENGTH, indexOrLength));

        if (firstSpaceIndex > 0) {
          setFourthPart(parts[1].substring(firstSpaceIndex, parts[1].length));
        }
      }
    }
  }, [props.children]);
  return React__default.createElement(React__default.Fragment, null, React__default.createElement("span", null, firstPart, secondPart && React__default.createElement(React__default.Fragment, null, React__default.createElement("span", {
    className: 'opacity-40 font-light'
  }, ".", secondPart), React__default.createElement("span", {
    className: 'opacity-40 font-light'
  }, thirdPart)), ' ', fourthPart));
}

var BannerTheme = {
  purplePink: 'purplePink',
  rainbow: 'rainbow',
  rainbowBorder: 'rainbowBorder',
  purplePinkBorder: 'purplePinkBorder'
};
var Banner = function Banner(props) {
  var theme = props.theme,
      className = props.className,
      children = props.children,
      style = props.style,
      outerClassName = props.outerClassName,
      innerClassName = props.innerClassName;
  var defaultBorderRadius = props.defaultBorderRadius,
      defaultPadding = props.defaultPadding;
  var bannerClasses = {
    'p-6 sm:p-8': defaultPadding,
    'rounded-lg': defaultBorderRadius
  };

  if (theme === BannerTheme.rainbow) {
    return React__default.createElement("div", {
      className: classnames(bannerClasses, 'pool-gradient-3 text-purple', className),
      style: style
    }, children);
  } else if (theme === BannerTheme.rainbowBorder) {
    return React__default.createElement("div", {
      className: classnames('text-inverse p-1 rounded-lg pool-gradient-3', outerClassName)
    }, React__default.createElement("div", {
      className: classnames(bannerClasses, 'bg-body', innerClassName),
      style: style
    }, children));
  } else if (theme === BannerTheme.purplePinkBorder) {
    return React__default.createElement("div", {
      className: classnames('text-inverse p-1 rounded-lg pool-gradient-1', outerClassName)
    }, React__default.createElement("div", {
      className: classnames(bannerClasses, 'bg-body', innerClassName),
      style: style
    }, children));
  }

  return React__default.createElement("div", {
    className: classnames(bannerClasses, 'pool-gradient-1', className),
    style: style
  }, children);
};
Banner.defaultProps = {
  theme: BannerTheme.purplePink,
  defaultBorderRadius: true,
  defaultPadding: true
};

var BasicTable = function BasicTable(props) {
  var nestedTable = props.nestedTable,
      tableInstance = props.tableInstance,
      rowClassName = props.rowClassName,
      noHeader = props.noHeader,
      headerClassName = props.headerClassName;
  var getTableProps = tableInstance.getTableProps,
      getTableBodyProps = tableInstance.getTableBodyProps,
      headerGroups = tableInstance.headerGroups,
      rows = tableInstance.rows,
      prepareRow = tableInstance.prepareRow;
  var className = 'table table-fixed w-full align-top';
  return React__default.createElement(React__default.Fragment, null, React__default.createElement("table", Object.assign({}, getTableProps(), {
    className: className
  }), !noHeader && React__default.createElement("thead", {
    className: classnames('w-full', headerClassName)
  }, headerGroups.map(function (headerGroup, index) {
    return React__default.createElement("tr", Object.assign({
      key: "header-group-" + index
    }, headerGroup.getHeaderGroupProps(), {
      style: nestedTable ? {
        background: 'none'
      } : {},
      className: 'tr'
    }), headerGroup.headers.map(function (column) {
      return React__default.createElement("th", Object.assign({
        key: "column-" + column.id
      }, column.getHeaderProps([{
        className: "th " + column.className + " " + column.headerClassName,
        style: column.style
      }])), column.render('Header'));
    }));
  })), React__default.createElement("tbody", Object.assign({
    className: 'w-full'
  }, getTableBodyProps()), rows.map(function (row) {
    prepareRow(row);
    return React__default.createElement("tr", Object.assign({
      key: "row-" + row.id
    }, row.getRowProps(), {
      className: classnames('tr', rowClassName)
    }), row.cells.map(function (cell, index) {
      return React__default.createElement("td", Object.assign({
        key: "row-" + row.id + "-cell-" + index,
        className: 'td'
      }, cell.getCellProps([{
        className: "td " + cell.column.className,
        style: cell.column.style
      }])), cell.render('Cell'));
    }));
  }))));
};
BasicTable.defaultProps = {
  rowClassName: '',
  noHeader: false
};

var CardTheme = /*#__PURE__*/Object.freeze({
  "default": 'bg-card',
  purple: 'bg-card-purple'
});
var Card = function Card(props) {
  var children = props.children,
      className = props.className,
      roundedClassName = props.roundedClassName,
      paddingClassName = props.paddingClassName,
      sizeClassName = props.sizeClassName,
      backgroundClassName = props.backgroundClassName,
      theme = props.theme,
      style = props.style;
  return React__default.createElement("div", {
    className: classnames(roundedClassName || 'rounded-xl', sizeClassName, paddingClassName, backgroundClassName || theme, className),
    style: style
  }, children);
};
Card.defaultProps = {
  paddingClassName: 'p-4 xs:py-6 xs:px-8 sm:py-6 sm:px-12',
  sizeClassName: 'w-full',
  theme: CardTheme["default"]
};

var Chip = function Chip(props) {
  var className = props.className,
      text = props.text;
  var bgClasses = props.bgClasses,
      textClasses = props.textClasses;
  bgClasses = bgClasses || 'bg-accent-grey-5';
  textClasses = textClasses || 'text-accent-1';
  var sizeClasses = props.size || 'text-xxxxs xs:text-xxxs sm:text-xxxs lg:text-xxxs';
  var classes = classnames('font-inter rounded-full text-center py-2 px-2', className, textClasses, bgClasses, sizeClasses);
  return React__default.createElement("div", {
    className: classes,
    style: {
      lineHeight: '0.35rem'
    }
  }, text);
};

var Collapse = function Collapse(props) {
  var title = props.title,
      children = props.children,
      className = props.className;

  var _useState = React.useState(false),
      showContent = _useState[0],
      setShowContent = _useState[1];

  return React__default.createElement(React__default.Fragment, null, React__default.createElement("div", {
    className: classnames('flex cursor-pointer', className, {
      'mb-4 sm:mb-8': showContent
    }),
    onClick: function onClick() {
      return setShowContent(!showContent);
    }
  }, title && React__default.createElement("div", {
    className: 'font-bold text-base sm:text-2xl text-accent-1'
  }, title), React__default.createElement(FeatherIcon, {
    icon: 'chevron-down',
    strokeWidth: '0.25rem',
    className: classnames('ml-3 sm:ml-4 my-auto w-3 h-3 sm:w-4 sm:h-4 my-auto stroke-current text-accent-1', {
      'rotate-180': showContent
    })
  })), showContent && children);
};

function CountBadge(props) {
  var title = props.title,
      textClassName = props.textClassName,
      bgClassName = props.bgClassName,
      count = props.count,
      sizeClassName = props.sizeClassName,
      className = props.className;
  return React__default.createElement("span", {
    title: title,
    className: classnames('trans rounded-full flex flex-col items-center justify-center font-bold tracking-tight leading-none', sizeClassName, bgClassName, textClassName, className)
  }, React__default.createElement("span", {
    className: 'relative'
  }, count));
}
CountBadge.defaultProps = {
  bgClassName: 'bg-blue',
  sizeClassName: 'w-5 h-5 text-xxxs',
  textClassName: 'text-white'
};

var Tabs = function Tabs(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return React__default.createElement("nav", {
    className: classnames('flex', className)
  }, children);
};
var Tab = function Tab(props) {
  var _classnames;

  var isSelected = props.isSelected,
      onClick = props.onClick,
      children = props.children,
      className = props.className,
      textClassName = props.textClassName,
      paddingClassName = props.paddingClassName,
      tabDeselectedClassName = props.tabDeselectedClassName,
      tabSelectedClassName = props.tabSelectedClassName;
  return React__default.createElement("a", {
    onClick: onClick,
    className: classnames(className, paddingClassName, textClassName, 'cursor-pointer capitalize leading-none trans tracking-wider outline-none focus:outline-none active:outline-none font-bold', (_classnames = {}, _classnames[tabDeselectedClassName] = !isSelected, _classnames[tabSelectedClassName] = isSelected, _classnames)),
    style: {
      height: 'max-content'
    }
  }, children);
};
Tab.defaultProps = {
  className: '',
  paddingClassName: 'px-2 py-1',
  textClassName: 'text-sm xs:text-lg lg:text-xl',
  tabDeselectedClassName: 'text-accent-1 hover:text-inverse border-default border-b-0 hover:border-b-2',
  tabSelectedClassName: 'text-inverse border-b-2 border-default'
};
var Content = function Content(_ref2) {
  var children = _ref2.children,
      className = _ref2.className;
  return React__default.createElement("div", {
    className: className
  }, children);
};
var ContentPane = function ContentPane(_ref3) {
  var _classnames2;

  var children = _ref3.children,
      className = _ref3.className,
      isSelected = _ref3.isSelected,
      alwaysPresent = _ref3.alwaysPresent;
  var hiddenClassName = 'hidden';

  if (alwaysPresent) {
    hiddenClassName = 'pointer-events-none opacity-0 w-0 flex-shrink';
  }

  return React__default.createElement("div", {
    className: classnames((_classnames2 = {}, _classnames2[hiddenClassName] = !isSelected, _classnames2[className] = isSelected, _classnames2))
  }, children);
};

var TicketRow = function TicketRow(props) {
  var left = props.left,
      right = props.right,
      cornerBgClassName = props.cornerBgClassName,
      className = props.className;
  return React__default.createElement("div", {
    className: classnames('flex w-full', className)
  }, React__default.createElement("div", {
    className: classnames('p-3 w-40 lg:w-48 rounded-l-lg bg-accent-grey-4 notched-box')
  }, React__default.createElement("div", {
    className: classnames("notched-corner notched-top-right", cornerBgClassName)
  }), React__default.createElement("div", {
    className: classnames("notched-corner notched-bottom-right", cornerBgClassName)
  }), left), React__default.createElement("div", {
    className: classnames('my-3 bg-accent-grey-4 border-body border-dotted border-r-4'),
    style: {
      width: 1
    }
  }), React__default.createElement("div", {
    className: classnames('rounded-r-lg bg-accent-grey-4 notched-box w-full')
  }, React__default.createElement("div", {
    className: classnames("notched-corner notched-top-left", cornerBgClassName)
  }), React__default.createElement("div", {
    className: classnames("notched-corner notched-bottom-left", cornerBgClassName)
  }), React__default.createElement("div", {
    className: 'px-4 xs:px-8 py-3'
  }, right)));
};
TicketRow.defaultProps = {
  cornerBgClassName: 'bg-body'
};

var TipBanner = function TipBanner(props) {
  return React__default.createElement("div", {
    className: classnames('rounded-xl', props.paddingClassName, props.className, props.sizeClassName, props.backgroundClassName, props.borderClassName)
  }, React__default.createElement("div", {
    className: 'flex flex-col sm:flex-row justify-between'
  }, React__default.createElement("div", {
    className: 'flex mb-4 sm:mb-0'
  }, React__default.createElement("span", {
    className: 'pool-gradient-1 rounded-full h-fit-content px-4 font-bold mr-4 my-auto text-white'
  }, (props.t == null ? void 0 : props.t('tip')) || 'Tip'), React__default.createElement("h5", null, props.title)), React__default.createElement("div", {
    className: 'flex mb-4 sm:mb-0'
  }, props.links)), React__default.createElement("div", {
    className: 'text-accent-1'
  }, props.children));
};
TipBanner.defaultProps = {
  paddingClassName: 'p-4 xs:py-6 xs:px-8 sm:py-6 sm:px-12',
  sizeClassName: 'w-full',
  backgroundClassName: 'bg-default',
  borderClassName: 'border border-default'
};

var overrideToolTipPosition = function overrideToolTipPosition(_ref, currentEvent, currentTarget, node) {
  var left = _ref.left,
      top = _ref.top;
  var d = document.documentElement;
  left = Math.min(d.clientWidth - node.clientWidth, left);
  top = Math.min(d.clientHeight - node.clientHeight, top);
  left = Math.max(0, left);
  top = Math.max(0, top);
  return {
    top: top,
    left: left
  };
};
var Tooltip = function Tooltip(props) {
  var children = props.children,
      tip = props.tip,
      className = props.className,
      iconClassName = props.iconClassName,
      iconSizeClassName = props.iconSizeClassName,
      id = props.id,
      place = props.place,
      effect = props.effect,
      toolTipClassName = props.toolTipClassName,
      isEnabled = props.isEnabled;
  var ref = React.useRef(null);

  if (!isEnabled) {
    return children;
  }

  if (!id) {
    console.warn('Component requires an id! <Tooltip /> with children: ', children);
  }

  return React__default.createElement(React__default.Fragment, null, React__default.createElement("span", {
    "data-tip": true,
    "data-for": id + "-tooltip",
    className: classnames('inline cursor-pointer', className)
  }, children || React__default.createElement(FeatherIcon, {
    icon: 'info',
    className: classnames(iconSizeClassName, iconClassName)
  })), React__default.createElement(ReactTooltip, {
    clickable: true,
    ref: ref,
    backgroundColor: '#111',
    id: id + "-tooltip",
    place: place,
    effect: effect,
    "data-multiline": true,
    className: classnames('p-1 xs:p-2 max-w-3/4 sm:max-w-sm text-center leading-relaxed font-normal', toolTipClassName),
    overridePosition: overrideToolTipPosition
  }, React__default.createElement(React__default.Fragment, null, React__default.createElement("button", {
    onClick: function onClick() {
      var current = ref.current;
      current.tooltipRef = null;
      ReactTooltip.hide();
    },
    className: 'ml-auto mb-2 block xs:hidden'
  }, React__default.createElement(FeatherIcon, {
    icon: 'x',
    className: 'w-4 h-4 text-inverse'
  })), tip)));
};
Tooltip.defaultProps = {
  effect: 'solid',
  iconSizeClassName: 'w-4 h-4',
  isEnabled: true,
  place: 'top'
};

var CopyIcon = function CopyIcon(props) {
  var t = props.t,
      text = props.text,
      className = props.className;

  var handleCopy = function handleCopy() {
    poolToast.success((t == null ? void 0 : t('copiedToClipboard')) || 'Copied to clipboard');
  };

  return React__default.createElement(CopyToClipboard, {
    text: text,
    onCopy: handleCopy
  }, React__default.createElement(FeatherIcon, {
    icon: 'copy',
    className: classnames('em-1 my-auto inline-block trans cursor-pointer hover:opacity-70', className)
  }));
};

var _excluded$1 = ["className"];
var LinkIcon = function LinkIcon(props) {
  var className = props.className,
      remainingProps = _objectWithoutPropertiesLoose(props, _excluded$1);

  return React__default.createElement(FeatherIcon, Object.assign({}, remainingProps, {
    icon: 'arrow-up-right',
    className: classnames('inline-block', className)
  }));
};

var CELO = "data:image/png;base64,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";

var CUSD = "data:image/png;base64,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";

var CEUR = "data:image/png;base64,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";

var ARTO = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAk1BMVEV/AAD////8/Pz+/f2FMDC6n5/59vaEJiaaZ2eIMjLi1tbm3d3TwcF/BAS0kpKuior39PTp4eHCqam/paWBFRX28vLz7u7x6+vk2trQvb3KtraDICCCHByACgri19ff0tLazMzYysrWxsbGsLC5nZ2nfX2idHSdamqSUlKBFxfs5eW2mZm3mJiqgoKYYWGQTk6FKiomarJ1AAAA5UlEQVQ4y6XR146DMBCF4RkIJIsXm95J35Tt7/90wWQSS1EGX+S/sY74ZCEAXTd/Wge3tv7T6jvYL3McE4GuigtXr3cw/csIEd3FdYWdygmYGgLUwX8EHgGzLSATLKCUDbRqwYOjOuuDB4HzNglmkQV84zT4LVjQpGmabCNkgIm9IZVSenWOlnc4lRYAEl/9DrC0gZ+k1UffM4DKVutwEny4YvKGPsAVB+gC3DyCA5jaGLEGU4JDntnhbtiNmX+fGpTHLBzn+bRzhp3Q46+N8OkvlrGoKhEXzjj3BNYOkyIwnzFlABfOQQ6PRhGvrAAAAABJRU5ErkJggg==";

var RAI = "data:image/png;base64,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";

var BNB = "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%202500.01%202500%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill%3A%23f3ba2f%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Ctitle%3Ebi%3C%2Ftitle%3E%3Cg%20id%3D%22Layer_2%22%20data-name%3D%22Layer%202%22%3E%3Cg%20id%3D%22Layer_1-2%22%20data-name%3D%22Layer%201%22%3E%3Cpath%20class%3D%22cls-1%22%20d%3D%22M764.48%2C1050.52%2C1250%2C565l485.75%2C485.73%2C282.5-282.5L1250%2C0%2C482%2C768l282.49%2C282.5M0%2C1250%2C282.51%2C967.45%2C565%2C1249.94%2C282.49%2C1532.45Zm764.48%2C199.51L1250%2C1935l485.74-485.72%2C282.65%2C282.35-.14.15L1250%2C2500%2C482%2C1732l-.4-.4%2C282.91-282.12M1935%2C1250.12l282.51-282.51L2500%2C1250.1%2C2217.5%2C1532.61Z%22%2F%3E%3Cpath%20class%3D%22cls-1%22%20d%3D%22M1536.52%2C1249.85h.12L1250%2C963.19%2C1038.13%2C1175h0l-24.34%2C24.35-50.2%2C50.21-.4.39.4.41L1250%2C1536.81l286.66-286.66.14-.16-.26-.14%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";

var CAKE = "data:image/png;base64,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";

var DAI = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGUAAABlCAMAAABjot39AAAC+lBMVEUAAAD/1Yf9uFj8tlX+u2T/2oz/35H+v2f+wWr+xnH/x3T/x3f/24z/5pb8tFP9vGD+zHf/z3v/zn39ulz9vF/9vGD9wmj+yHH+zHT/14D/wW7/zXv/24n/z37/3I79tlX9wGX+xW7/1YD8qkn9uVv9x2v+yHH/35L/3I38tlf9vWL+xXH+14T9s1X9w2j7slD8s1b9sFb9v2T9s0v9vWX////6tE76s074sk71sE7xrU7zr07uq07vrE7sqk37s0zrqk3oqE76rkXYkjLpqE36sUjqqU3lpUznp0zEjkTkpEzGj0Tio0vCjEOqfED8tE7HkET6rUL7r0n6qkGcaCXx2b3Ai0Lmp1DltnvEjUO9iELWwqv7skr7skj6rUTk0LjKkkXdn0qxdinJkUW4hUH7sEXIkESne0DgmzzakS24eiffoUvJkUS1g0G1eiy1eCmjbCbHrpL7qkS/ikGZZiXw7uvty5/Wm0jblDGscyn9+/nfzbffya67h0GleD+RYCLiyq7JsJLeplywfDbglzHKiC3YjiiVYyTbxq3Sv6ruz6jTt5TQsYvhtn/8sUyugUn7qD/7pTzcljbVjzDSjCy6fCvcsn3jokmbcj+gdT79/P38tVHjpU7anUnhoES5h0OxgUDknj6YZCPs6unp5uPz4cvu28TUw6/ErZDluYDiqmGqf0rRl0bcmkKpcSiuciSKXCP9+PX19fX05tXZybfUvaLPtZTpwpC/qZDLkkXpo0J1QgX7///OvKi/pYbUrX21m3zjsnLvq0nSkDjnnDHEhC7OiSr4+fzu7/D79e/e0cLt1bjozqzCsZ7mxZ3KrIftvoLDnGzcqWjdoVKfeEqseTaSYyuFWSXAfiR7UB6ZXxT68uz3697i3tzq4NXdwqC2oouph2G0jV+1gDq9fiqgaB3d1Mzp2cjZy7zGt6jZvZu3qJnFqYiikoDZrHCjiGnvs1/mqlq5jFO8ikqNakGTaTe9hDbmnDWaaS3DgSenZQ7JvbHQl0+2cBai9S4aAAAANXRSTlMABuj5lxgRnoRrYzkmHvXId0Mq2tHAp4l9WlhOSDAL77iQcPTgr5U8M+O1c2TWvfrdzsTirlI0ABwAAAr7SURBVGje5Zp3VFNXHMcjoogbt+Csq3YvQ7UxL3nmkYikmpcKlSZRRigbCpRRi1QLQmmLLEVFUVFAUcSFuLfWWVe11g5trd17z3P6u3nv5d7HSyAI/tXvOXpEJJ/z/f3ufe83lLVKnXv06TZksNfQ7p2Gye6OOvkMcvcY07/faLe+vUYMcB/YdWiH9gV08Oo9oG85S1O00crQNGM2WCiWLR/ef2TXHu3FGOcxnLXQVjNFyUlRJjNtYct7eXZuO2LoSDfWwPAAUtOnwy85Zbay5SO82xa7br0KaCsmSEhIFEOzHXt3aAODpU1OERgkh3z1vEPOUPCBbbQEoo0de98BZCRrMPk6lTRJwBndp7VGRicxTgBOUZS1oEurIANZgy+vJx3KMcls6dvd9edIPyPTFDHROYq0Y6C6ugjpPspIMCY6FgaJOVZ2oEsQL18uWgTiKUISUhOO2eDhAmRwkkXOQwTAJJHENCnHRD/UIuSeQlqOjYgIUhh2RHIo46MdWnBSxEEwY/JkhViTQTwJg8QYQ/NuxhkthBNAKBRKpVIF8gOpbIK/QDAeJeFwGI9mT5eBzwlyAgyVn0atVusIwZcajQaACMWDpBiTYaDze/K4ESceIEqNVutfVhYglr+/VqvV6RBKyYGeEjgEJsnTGeW+Ig7C5+RYdnr6FIeKikqPrNAGqREIc0QYhh3n5HgVyeXYyRFFftVMxzqT37ihNmRKVCQC8RwJxvCg46QkMYIVFK7fL0xoVu9XN9YWR1UgjkLhAEMVOkxN/0K5HENU2RsmtKjtjSELI4PUfmAHR03AmAsdxKx3EQGZpFSnA6Vlbc0PWQh+VEqRHacx6zGKQRT4RyjxCpV2ClBc0UupxekQNrAjxUheN2MJK+gM+wPFRX1Qu7AsSKMSooYx5p6dmlhhBStw5cGKLqAEKK7qbZQdOAQcBh8By0DnVoDipw0oeZP/iOUuYGZOKbYdAsINNiOxIgRMrY2xU9YeOnTgm/Pnz79h1+sNcz/a1uS0AUbHnTXSDS3KzEh8IZEVldo/plSgrPvj9uaM0NCEhOjo6MWcouNv/XT+9FskpqokkseQQWNIM52HM2TuFRptQIid8uLGV8NXBQfq9VOnTps2bcaMGdOmTZ0V+FtC6E+vkZwzpRUrJBiq8B7irYIvJGcFKCeWCJRFr4ZnAgUgMyLCkBBnqj4wvn7RaQLTWBrgr9PYMBPtGMNjmDLAKM69zj9mZQ5BQVYQIzZsDigsNgIw+sDA4PjEA4SdSyUrAKNScKnhMKaCPvb+p6foCaZEAUtrQpk1FSBz5uwGAScCgqZPDl4Vl7hxHb43R+sCMIZ/3yQNEigPNAkYspJ2/KDUSxjygiAzOEp4eFziO2vxtTkREuOvVSsVOGa+dD+BMgIFjLQSE5K26dODOPtxCDNrKsp9WESYLf96fWBwZnjc6kXPvHPS/lD75+jKmADATMZmGPZeDjJsOEO8VxRKXdnKtE2x0ZhyJS4uPDg5UA8gTrMgKck2yOqnn8/6fp+AuXFtU9rKijINGbOk+znKvSwluizZJTnHjy/+66JwX65eT0zcnJERCncGFB8Pv4WCMjI2JyY+k5Kbtfdb+zsn+VrO0aPF2XsIilBoPCAKmGpP6vbq6urPZ3/E/+i2mufy8vJeRnpF0Ms25YFqamr2f7nN/giorqqq2l71A8Lwx8zCJ2YsSVHs+fGlCW1V6jGF3QzTkbv+vQw4YJOVa2rbTsnPVk6axFMoegiCdO7JkAFbs6AdvET54WOW1JtLvokImF9ku1DUOGRGj862ToK6u5QxaL7hLW9CWd72vETp4GYK6e/fx3aQRZQ1l99vM6Uxm7v/HKVfN1RSiigq9ZpLN756fef8AzXC3b95c9euXevXr3+B03xe3Ffw9/DdQ58JFc25b3Z+taTOn6BY+qJD1oURUXRBxX9G1ydW7v2Y/8EP33tvy5as3NzcysqUlGdIpaRUVubmZmVteXfv10KRsOx6/bVSKGkwhXYbDBR3Ri6i+IdsCguMezrrkPCE+eXXpUuXLZs373nQ06Tg63nz5i1btnTpu+eEYH2Sod+dFqDlKBO5a+npmBIR7IiCMBKIlBK4Oy2mCUUaMbW29JqDiKGQpYCIeIG4gJERW3q9PjonMghTUMSk2S8LSn3lRkNDwwtf8D948sv9+19Des6R0Df27z/3oZD9moa8l8/WriGyT9uy39UkPsm17XBf0nWYwvRCJ9lH3o53H9/KSXYvI9Ct9CogKZp2esIo7U+YQtsTZmjBXX5ajh2GxrhuDEFprye/wv6yZD25Vs9CVjDtkv1sHDBTQTeuFLeI38hb2+GNjF9izHBuWO9tosjKcs+F6tmzZ8/N+1yoLnbs2DEXNFusuTbB976o+XubUJC98vbZs2fPpPodIaqLXjKb+pSbCApUSqU5xz8lK6VKvlJKiBeUgCulq1dxpXTm3z9zTpRGZR8hKiXLWBmn8ZB+3Lgq1QFQWs5ZfFDokp6/sjouPBPKPlT3Ien1UPNB0RcORZ+o6ruUk7YyJEArqpTprrjk9xV3L+IK9goqLfkSFmkaVJcIhGpLsoKtzklDhbKGhDAFwrzUx0I5qMZF/UsyMAARGxsWFhsbAYXyLK5OjrtNVOMLSmJsLQyXej5gI+yLj/HizsLPYWeB+pfYOUhCY5G56tbtj08SJT+U4tCO4TYJUfBM1oMma1jODEmBgOltGOCAuMYi8OfMDLJL2n60bgWCiNoX5mHcWHoViEOmEXV8G7mODwp+lJYIrrHU6zNDN3/yGTEruTxlhVaNIVzHZxwjw+orMqOElg93r2tR9jNt2QcOCHrK5N+i61+9eHrfBKxLCx1AqKTBBOV+TJF04mv/uA7XpZ7vxZES4m/9fLFh3QRShwEijC/wBMs6mpzGDnMTzXqUGnKqcPPA+vnzd4Je55V3Gg8VMCRIjUcxPISiPcVzK9qXCBmekLimUwsAokEQsgtHVjABm0EYPmStoVTV4dkVdoKtSDODJ1euUrY2RkWSox4egqw8IllJjqdFzaU2fYlLjOX5deR0DDtBB0y6JfFJMhEtmUKd/d0+FxKSf5kcXIrno8b7ZFK5i56Zqt9bpJyauaEOGM6GsNZRPRytcR8xkJhjF5oJ06kPZqYeDolKr0AMwYgYQhU9IHOkIWjhhqfWP1x41rEOH15wuW5KVHFFkMCQQECFTzhbHoom8EeOZRc7GMGnpxcXR1aU+Wt1gFApSAYJMYzq5HTQb/TFGDTCUsM6QSwtkg4Ifn5KQEiWCbysBeNkTvWoAa9fEEYJqxGNRo2lAaFFjJJHIIbUiNxc5N3cDnG8wRdj4AygNQ8IfawgBd7xYB/iZZKJvr/5LeLDNMaAHdBkELmt4gDYhhRiNg5saQ/ua5CTdlraveHlG7GBdW95J+qG3OBNoiDhw8V7RMzAEHaQK/vdBw0U5gjCn+1wKYpFsy7ueB8yMgIGkySfj+RgkVw+ROai3E20dCPufFmNZabdWrHj9xpuYeROQc5W/JTV5C5rlQawhtb+LwKz1a2brJUa0rOQbuHjsaajYFEestarw6CeRtrV/9xhMrD9h7aWIHA6JtFU8whEocwG9jFuOH2nHNZgpprxgR5alun9gdEm+QywgRyTKIax+vbr3UnWdnXwHtGRYmkaUBRPQ38wMVaaLe/bpbusvTSsm6dHv44mWHVbKdpoNidZ5FS5231dfHrI2ludvby73tPFfcAY9y6DPL19+sj+n/oPGs5EF9E8aL4AAAAASUVORK5CYII=";

var GUSD = "data:image/svg+xml,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2032%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%3E%3Ccircle%20cx%3D%2216%22%20cy%3D%2216%22%20r%3D%2216%22%20fill%3D%22%2300DCFA%22%2F%3E%3Cpath%20d%3D%22M19.378%205c-3.87%200-7.157%202.976-7.57%206.807C7.975%2012.221%205%2015.508%205%2019.377A7.627%207.627%200%200%200%2012.622%2027c3.87%200%207.17-2.976%207.57-6.807%203.832-.414%206.808-3.701%206.808-7.57A7.627%207.627%200%200%200%2019.378%205zm5.836%208.476a5.93%205.93%200%200%201-4.97%204.97v-4.97h4.97zM6.786%2018.524a5.93%205.93%200%200%201%204.97-4.983v4.97h-4.97v.013zm11.673%201.72a5.895%205.895%200%200%201-5.837%205.035%205.894%205.894%200%200%201-5.836-5.034h11.673zm.065-6.768v5.035h-5.048v-5.035h5.048zm6.69-1.72H13.541a5.895%205.895%200%200%201%205.837-5.035%205.894%205.894%200%200%201%205.836%205.034z%22%20fill%3D%22%23FFF%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E";

var INDEX = "data:image/png;base64,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";

var DGT = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAolBMVEX///+RL1aNJk+QLVT3//+AET2PKlOLI0yuboi4gpevdoyJHknJp7WmZH76///0///e0daPOFuEI0mCGkOwcovOtb+LIUu7i56VOV6GF0Py//7x//ru+vXDnazBmKiIG0br9PHd19nb0dXGpLK0fZOlW3maQ2aKIUvo7uzm6+nl6Ofj4+Pf29zVxczKrbm+kaO8jaC1fZSgUXCgUHCSMVh/CDfS3I+WAAABCUlEQVQoz62S13aFIBBFIzDYwYIa6+33pvf8/69FICLLZPmSnDfYMHOmXP2HojjNsjSOfkEBhIhiTFEIwQIluesYuXliswKwYwlDYf0DeUNHTW9g/pvjkX1cj7rUpeI4N15kPhQwQgjb9gipvJMrcCT0+HP14keEnxUFzaJQQ+JzTnantlGRQ11vjAx8Pd10AalUmljBlE6QeBvEjs2jDEVTBTNsoEB1V3UPG+k3+wFdIH6713AZNv48MI8fLiasbeiuYcc9O1NjaC5FFE+V2LFBncPIboIg2/tbzlpRKw9gt4++90M/+G81wrp9c+MlLcvSdb/ngnN7ZAtBsjbstTVZWbDV1fy7vgA+dREvxuG1lAAAAABJRU5ErkJggg==";

var POOL = "data:image/svg+xml,%3Csvg%20width%3D%22318%22%20height%3D%22318%22%20viewBox%3D%220%200%20318%20318%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20clip-path%3D%22url%28%23clip0%29%22%3E%3Ccircle%20cx%3D%22159%22%20cy%3D%22159%22%20r%3D%22159%22%20fill%3D%22url%28%23paint0_linear%29%22%2F%3E%3Cpath%20d%3D%22M166.159%2043.5034C202.243%2043.5034%20231.495%2073.2437%20231.495%20109.93V148.126C231.495%20184.812%20202.243%20214.553%20166.159%20214.553C160.491%20214.553%20154.991%20213.819%20149.747%20212.44L149.748%20216.949C149.748%20243.786%20128.246%20265.593%20101.556%20266.027L100.746%20266.033V119.894L100.821%20119.893L100.823%20109.93C100.823%2073.2437%20130.075%2043.5034%20166.159%2043.5034ZM166.159%2093.3236C157.138%2093.3236%20149.825%20100.759%20149.825%20109.93V148.126C149.825%20157.297%20157.138%20164.732%20166.159%20164.732C175.18%20164.732%20182.493%20157.297%20182.493%20148.126V109.93C182.493%20100.759%20175.18%2093.3236%20166.159%2093.3236Z%22%20fill%3D%22white%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22paint0_linear%22%20x1%3D%22159%22%20y1%3D%220%22%20x2%3D%22159%22%20y2%3D%22318%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%237E46F2%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2346279A%22%2F%3E%3C%2FlinearGradient%3E%3CclipPath%20id%3D%22clip0%22%3E%3Crect%20width%3D%22318%22%20height%3D%22318%22%20fill%3D%22white%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3C%2Fsvg%3E";

var BADGER = "data:image/png;base64,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";

var WETH = "data:image/png;base64,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";

var BUSD = "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%222000%22%20height%3D%222000%22%20viewBox%3D%220%200%202000%202000%22%3E%3Ccircle%20cx%3D%221000%22%20cy%3D%221000%22%20r%3D%221000%22%20style%3D%22fill%3A%23f0b90b%22%2F%3E%3Cpath%20d%3D%22M574.41%2C746l426-426%2C169.86%2C169.86-426%2C426Zm.31%2C509.06%2C680.79-680.79%2C169.86%2C169.86L744.58%2C1424.92Zm935.41-425.69L829.34%2C1510.16%2C999.19%2C1680%2C1680%2C999.22ZM320%2C1000.36%2C489.86%2C830.5l169.86%2C169.86L489.86%2C1170.22Z%22%20style%3D%22fill%3A%23fff%3Bfill-rule%3Aevenodd%22%2F%3E%3C%2Fsvg%3E";

var SUSD = "data:image/png;base64,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";

var USDC = "data:image/png;base64,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";

var UNI = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAC+lBMVEUAAAD4x9n71uv////+7PD96/T9zOP90OX88Pb87fX87vX10OX9yOH9yOH9xN79z9/+5/T9y+P98vj55e773er9wt392Or91uj88Pf93ez/9/391Oj94u/88vj84+/41eT+5/P+3/D8xd/75/H4xtr4ydf92+z99fn94O7+4O/98Pf/2+v97vb97vb95PD/4vP+zOb/yuX+9vr9zuf7yeH92ev95PD9wdz+zuf/6fb+6/f+8fj88Pf87vX82uv+8/r66fT4xNj45uz/yej97/X/6vj91+r+7Pb+8/r+7fb/0ur/3vD+0er81un+4fD84O793+z9yeL8x9/96vP8xtz83uz6zuL54+r92uj80ub//P7+2Ov8zOP8xeD9xN794PD90+r97vf7x9790uX/xeT8xN798fn80eX98/j97vX96fP95/L+9vr+5vH98Pf+7fT+9Pj+4/D+6/P+5fD+7/X94u/++Pv88vf+8ff93+3+8vj+6PL+6/X+AHn92ur////+AGz+9Pr+7/f94u7+7vf+9vz+8vr++f7+AGn++P3+9fz91Of+6fP+AHb+AGf+3Or+AGT++/7+7fX+tc7+AF79z+T+zN/+vdL+HH3+GH3+AHP+AXD+AG7+3ez+nb3+J4D//f/+DHv/9P//5Pf/0e3+ssz+qMX+ocD+IH7+JH3+BHr+7/n/3/T90eX/2vL+ytz+w9f+wdb+haz+Enz+IHn/+///8P7+8fn/1ez+1uj+1eT+z+D+rsr+jLP+ia3+gaj+YJX+LoH+J3n+FXj/9///7f7+0eP+xtr+rMf+psL+lLb+f6z+f6P+cZr+aJr+WJD+TIX+QoX+OID/6Pr+6vX+4O3/zur+zeT+udP+X4z+GnT+AFn+zuL9xd/+us/+kbH+bqH+TI7+M4X+MX3/1fD+yN3+lbr+mrn+dqH+ZJH+N3f/3fD+4O//z+j9v9f+ZJ3+PYv+Emz+AEr/7Pv+5/D+kqz+daf+V5X+VIj+HIL+Rn3+D3P+HWv+AFAXjzlfAAAAaHRSTlMAAwQBBfr++f7++gj6/vkK+PibHxr+/Pn399b8+vllI/z7+y4gGfv6+MR0c038+tfW0cqcUE39+OfY0cW/t5ySUiol/evp6ejn2dnSx760m3x6b2toUC4sLOzozL+0mpKSfGQw6MR+TWSZvw0AAA/zSURBVFjDlZkFeBNnGMevBVpa2lJgwBgMGIMBY+7u7u6uJ7lLLhe7NEnjqbu7C6VocXd3l6EbNnd/nv3fSzaYMLY33zXlgfx4/699312YM1i3qKhuDBPVe9glF/e95cb74+P45HsevLXvxZcM6x0V+dv/Y92ioxmme787br/q3GWpqdMzvI44PssbbFg2vSH55tvv6NedYaKj/wcyGh8455K+D0xPnR7sAYvneSMvDB/eI/my6/wZ0xvu73vtKIbpFf0fcVG9GOaui6+anhq4FLA4zmSXyHpKfs7PC8lDxgzvCHXcPG4YkFB/dusezZzz3nmpdecDZpVY1qDT0cI7C5O8Xv66IUOSGxpueuIcSDl79PBPnj6vbvr5cM3K6nREM9hZg4FoduDxxumz1DHJM5bdNBT/fbezyI1mLrzVUnd+fJzEGiwaj8UKA0Gz4gWTOLiZPKPjseeZ6Kh/5UUxQ19KHR0fF3EOy4AfbNg/XDbWjjBI+JXjfUOGz7h3KD7zLzymV9/8QHxcT1ZH3hHRY4ARSmNaJauN3ljJJln1sjpk29eP92bOSOzO9LsldfSlwEWMcKzmoYdwmmCbjZWwTCZJ4kT1ggsaxvZjzpAahO+81PN7WnUWuBdJLUnGBRZJxmW326w2k90EotdrMpqrB824/AUm+p/9A+9cjQeih4AaCytiVhuEWiW4JklWLweojQNx+eVv/xMxSuNJJPe0fLCnaPjVBpDNSzwIho9AcrI6aPmNzzNRf+f103jknSGSEoJFHCSxLGXYywJm42w2Gxcx5ROo7vcXInLf+2bSC54hX4cKJPewAAQnkmAJFMlGDhLUxJmA03Oc/Mmg5WN7oXr+NF2YvsSDZxZuRciCX6CdRU6IRmazWm0AeW2cF6EDrYAzEZKYZtegGbcxmD6nJ2Ro/mjKB175c+bBzXA6tCaRNAfBhId2UE1w0qS9HGEXeTX3osahgJzGe/6ldI2nw5VaOl9nkUCiyCGq+TpWskIya7NLXhPn5TgbMJBPtAhxwIR7nwPmVAPfigJkiUeW2rKBy7eGk+GbPG9ySr4HRJMmFQb/UC9Y8BE4o57T8+rAxsdOtXUv5mnLaOKFifDp2G6ljhrWIq4QfKsPFnp0BV7IpfxyEi0XwbSL13NgygMu2PoUQJph/qFDKMGEo+BZ0r/9aU4da7XmlzjXz0nN/fzgNxajidMX6PXwjjVxaglbQGrhnJEuzuga0PjwKKAow72YN1NH96Tii5iF1QW+/WVSPsuFVhwpck9KZad+sT1kM+gyPDqpQFCkujmTLUYANaaRXkbzgIsan9CmI6jDzquLZ9Fxp5As71+wtzRk1fl+OPLL8QJdaOGPPsnnUxXRm56RWehaucrCeykdpNeo53meUwdOuPxOwKgEL0ZGNE5kKiB2vtyOdb+2ZORz69Jqx+eydu+GzVNP7N59YsPU1kmCb94X32VwlAs9jDYw6OYHD9w6DsWIljnnqtT4SIap7bSSDpUowQVfrWHrVruPuKekZwV8m4qyqyqrqtzuk+tL/YV5qwMghuUCa3QYOTW2cewoJgqvS6aPjjNA72lTQbJwu3QZB75aK/k27XHXhDh9qORIV215WVlZ11J32gZ14Xe7wgkugI8O8lMvDh448RrgunVH07FhuTC0B6agR0qdNKVu5rGv1gdL86oW+Q2cPr05rWua0+kcP6188d5VhepHn7HAIID4wfOCkRddsVtvo/7r94Al3mAJJzk8E7ROs7RWWzJafl0vtubl7U9H53pq8pa01TthtV/WNLvSZ5vhInDIiSAAKqixH983Elm+AynxAEg4GDqOFpc/pzVg8hQWHd9W+NMXZpSdNPNYTtWStrby+tqcmn3NzR7kgivgASWaURCEiwY0Pou+uz01XjqtYIhox7YkWRZMyrekr8tx1W1fqdhNtgIpWLo7J6fq564lXXO3HfiymIVgI/FgWQR09dn6ehTT+yoU4e+88AgMj7/QwY2u2at+We/gbPl2amD0Rdb+hbuXVOQ4M6e49y5wcDyFj+MFeiGOKMWXezN3nZsRD72RtvNoETRI1oJQSfuekye/2jKXlfRCuHMdawuDQUfu3JX7d63+dmPeSo/AAwkmcPRDHDwrdhhzSd2lPQkXBtojE9/kEU64s39Yv9qlY0XOoyegPnh874ZjU+YIHRmeUNA3fy3PIRtICUHJzJ2dE69Fm5wWQqLhwnzPL8yZtl/ggxb7lP2lc1gi8hmrcypy3Es2LVrYOtkVSm/OlcASjCDSu5Alz45tHIfRH28NwwhHRoNUChzYuyDEssZA6edc9fcu1ggguyK7ffHS7Aq0y5eb15Z08DCqQRgpThEyY7++jbkFfRfxMMKTcBYyOA7ubQ0Z9abA/Lx1i4omW3hoNgZb8srbp02bVl6+NNtdeVTmRHKOqIJCWakeOOFR5sFll1KSqYftLB1jrNgsOZ28qKg5HftGRkvVlydreBp9UN3R6q5sK6tHv9S3lRUdN3MUQ5JLboop22NnXcHcE4wLAw3UdZETgj6/ZEvapHS9CQNg7krVI+Fda1j2s0Xuyq728vFOZ/3iogXQCRQBeQCz1JhPX2TO9WpAnccT5tmtyLEpvSbv8HZW2ykDAQqgA3OPQ0/MlFtOpKXtqS0DsTZtsiSQ8aIiCooiqMU7Y5meXBwbaREYeFY7ywVch/auCWJbwhZH0w6GpGDSSys608Up65bm/Nxent3mXuggmoglCCkEjClmuLg41kMtEkZKdFlnHkgbv8LDwaTwoMdyQDHvmXPUN2V2cMWazfCyPvtwLk+xE2Ai3nyZnYlMvAQPSawhAsRpLVSanTNVkvThjQjCtV/gIC+pa1eud682B1yth9OWOJ0lDjP5mAKqqAi5xTv7MPfMjLMCCBiZlc4toTltSytLddh9TVwYSYvaQZDU7wrXFbk3rXJkZE6t6nJ+xMlC2D90Hl8dk/ki82DGpUiDVoOA2iWUjLixakvF3ICekyKnF3IVkUR9BEsOf7TQvbgybVFJoKPGXdbpUFJE8BBBFLYrEWVzS10PO2bCqTaxBRfkHW5PK03XO8CKhBDuCeRgx7rd/pqc9vKyqq4Wr2PDjz4e6RVERVGAVVwJE19B6yVLlJJIiq1S+iT30qW17vW8zshJ4Y2yAGod0kw2yB/I2xWadCR7mrNsSU5rqGWtA9EjD8OyXQkfXo3h0IOLyGWtFMP0NXlbqrLb0hbKOs4bcZD1eDjFNallS06z/xv/fHe5E8SKufsSHbKQBZKMJWSJnUkTx2HP68EjhOBRjukQuK6oprk9uzZtY4lHTzyjg8stbV34/Y/On6buo+Ho2lQBYm3OQoGHUhGiZYiWBTmx/4fXMnf1mNkDqD9ybPUf/7U5uNvdVuvOLg0TzYVH569ZXVhaonZIvIMX2EJ32XjntD2LOzmSmkKyU8yyqCbE9BmGLWBZDxOqxk63DHSszDhQdHD+Eme9c7H7kGzX6wWcUPWBUEYwwyMZZUEPhGNtWpmzvr1yCod+I1NE2SwLmSMmPtKbNqlkvSGcEpsNfRwozHGmOcc7x493bur0+KQMv1I9O9fMST58WMu1yOVu/nna+Ha0siwoZlmRFcRQFjMTJrwRhW10WQ9B02uQcObFMT+3vGuxE8Syih9Uz0x519pFm7ds2jh1pZ/DdAYTGqXmtLb69ioARUTPbBZks1nOjUmYdQ2Djf7+jss46jmDFS6avFKwNa8WA68sO29Vfsq8jZXuyuzsiorKyhoH5IoUNDTbBndtV/ZHDllGAOGkiJU54tMbRjLaUeQynnrESnfuOPQalI2Vi5dWpLU3B+ZucFdMKy+r2HMShVRU4xU0g1f+5pzDlRureRkVrVCSkevO6yde3Z1OX882xAsSzvg0+iUbkIHSPPeezWtc6avyirJr6+srF7WsWrO5sq1in18h/6Cb21e+Ja1mm4L4gScjgkJuYuwOHJboOHdz6DIj7lhhuH+DalacuqA0N5AhTJ43f5O7PPv72fsKPys5UeGukRTyDyIdrkV5mzN5ygZgsoKrOGnWIzjO0YHz6WXJwzlyEQtHBLoB8aSzRp5LT5dcayryVrk+Mh4tyVyccxBJBg2TgHNtydnl0JxDveCNr07s0/SUdvcTzdx13owhRhZ97DWByIX7lwdQ+IZn/fOKpvr51MnzAzVFh1RexgaH5Z9XtX8bHDMjx+ShouxM2nHlSMAoK8ybDckix5rCN0kwkzbxeb2DjlXBee5juXM/Lwx0Hlm6wi/TKECWW6b4zYqIJRPQLLpGJDQ9yfTqFrmtuKlhiBnRs0omOBieWnQsDZ8wpF2HDh1qdfD++UVTJBmSATWbHbJC4UQU4adPLe6z48pzgIrc+AydOVzlOYncI8kFJDp8NNUbBV5S5s72GxUuM21qBv6ILQnjVBZhMvjwT5UzExPvfgagU7dmDZeZjRLRiGnSgxYe+kai4g4UA16U5hW18Pz2YpU3g4W4+VDO0K0K1YkJTa/i1uy0pwMP+K+TIyOfDGrRF/zvhvZPQQV6C7/4fMHRlYgbRQ7KQfOJGDMfjPj0nTuBOf32NjhcNXNeAP+4myH/9JpqwAgrCl5xUonZmKWICJwKyWZCC+aYDxJmvXU6j4rx8WVjVBE5CUsGlYBAakc1EU5m4dRhFjEhzNRsMOAg2iyaiz9I+vA1lOCfHxH0Gtsw5hNBsoWj6DAhiEARMTK0QBQEH7Go9ki26hM1XmJS07u9o6L+9hDjpuWDVFHSIogXSSXgNl4Mn62wqJFJrQDBZsBU8OTi/klNV4wE4O+PWW6cMegThYuYEcVNQrMICEPNUb2gSrDIT2Axr5WY/tc3XXHn33mobyKO2W6menGgZCjRuLKASwEYGaX9HKBwajFmzIrgS/zs+qaH/vFBEBFfuLxhjKqKoCHNYc0QqflHRDgYzgXUAgjegA/6J3145XPEO8PDtLHLL7go12zUilrQeFpOAISl0AaM7sUyo2R4tbh/woimV6jjzmC4Dbrt68aLBqii5iIMLL2ghU8RtqUQC3plyokiu2L6J+3c8VovJurfH0jeCyddqoDmI5yAIIJDUAEVCN1QS3PfFfNBUv8dN7yFz5zlkekLj03YesHAAdUiYLAUYJFM4ML+qTLganVm/6TYu+9+FeGLOvtD3WcebmwcNHCASzWjrpFnUSSgQuGDl4Lsmg2xfXY0XfkMPdT9T4+dn3h4K7wcPNilauddaj/KtkCjKrMzJqFPn6amh54chcfO//XB+MhxYz9e/vHg2NjBma7MXFWt3u5TXa7ZmZmJCUnXx8ya2PTIU3f+1wfjsGggR73/+H0Tlk+ojo2N7RMzOLE4EyNlRNKIhJ0TJ+y44eprRpGU//nlQvTIZ19/OXZCY+OEWbN2xhTH7Px04ocTP+5z5RvXjDz7lwtn/vrj2nFXP/rQfbHFMQk3XPHo1U9ee7avP34Dqj5N/usL1+cAAAAASUVORK5CYII=";

var DPI = "data:image/png;base64,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";

var USDT = "data:image/png;base64,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";

var SUSHI = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAACXlBMVEUAAAD9/P3///////////////////////////////////////////////////////////////////////////////////////////////////////////////8NDyP6UqDlW6jfXqrXYa3oWqbPZa/Ca7PKZ7G0cbjzVaOudLrwV6Wodry4cLbbYKvsWKa8brbSZK31VKLGabKPgsSVf8KjeL6dfMADCxyger4rruWHhccDBBiZfcBsktB0js1TndhGo9yBiMg3qeFdmNR6i8tjldJ9isr08vfqUqE+pt//VKX89fr77fYZGCzcV6b5Spz5WqmFfsLjVaTxTp75yeL65PGQeb/HYKzPXqru6fUoqOLWW6gerOW/ZK//V6jy+P00NUapbbfl8vrs3e5SldSadLs1ot7W1tlDnNm3aLLq0Ofao89mjM1xh8r0fbknKDr62Ot8gsbX6vfsw+D3u9voo8/oj8Ow2/Lc2e7f3+JckdHDxMmTisjnb7Lm5u6exujettqwarTYyOQnGTLM1u2icro8PU3F5faW1fJuwurZj8VUVWOyxufLxuTBuN3tsteHn9X2os32kMOUlJ13dYFMIUQ8Gzvu7vCAy+3OrtephMOKh5JERVVVu+ixtN28qdbCnc7Kj8a8vMLWbbL2aa6jpKt/gIqzQH2ertvNzdG/f76zs7rce7lkZXJbXGlNTl2It+KmodOwl81sbHmKNGdaJUxbrOBvndXqe7nKRok9tOdzrd7PfrypcbngT5nXSpF5LVyclc25isWcnKWXOW9mKVOqqrGGks6/QYClPHVxsIpzAAAAHXRSTlMA/gr0zO0ad0mEEDlqI92OwbitozHXUZjlK2BYQSTyX4QAAB+bSURBVHja7JjPT9pgGMdbhQEqisiPoT5/xXbBTMtkunj0QjKypElDmh7gQC81jZFkMWmb4OKRLKlnj7gDJHDayX9r7/O2L6+OLNsc7Yrj07cUvej32+fH+7zCggULFixYsGDBggULFsyIlXQpt7qaLBSSq6u5UnpF+H9YKiUTxUw+viwCYzm+HsturCVzL5aEZ056ZysPP+dlLJvYfSE8V9KJzDL8mnimuF16hjmxuxUHhigrlmHYtt3rkQ/DsHRZhkfks4nSs8qHnQz4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";

var COMP = "data:image/svg+xml,%3Csvg%20width%3D%2296%22%20height%3D%2296%22%20viewBox%3D%220%200%2096%2096%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20clip-path%3D%22url%28%23clip0%29%22%3E%3Cg%20filter%3D%22url%28%23filter0_i%29%22%3E%3Cpath%20d%3D%22M48.0743%2095.2518C74.1504%2095.2518%2095.2892%2074.113%2095.2892%2048.0369C95.2892%2021.9609%2074.1504%200.822021%2048.0743%200.822021C21.9982%200.822021%200.859375%2021.9609%200.859375%2048.0369C0.859375%2074.113%2021.9982%2095.2518%2048.0743%2095.2518Z%22%20fill%3D%22%2300D395%22%2F%3E%3C%2Fg%3E%3Cpath%20d%3D%22M48.0745%2091.7325C72.2069%2091.7325%2091.7701%2072.1693%2091.7701%2048.0369C91.7701%2023.9045%2072.2069%204.34131%2048.0745%204.34131C23.9421%204.34131%204.37891%2023.9045%204.37891%2048.0369C4.37891%2072.1693%2023.9421%2091.7325%2048.0745%2091.7325Z%22%20fill%3D%22url%28%23paint0_linear%29%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M28.1549%2063.8801C26.7427%2063.0164%2025.8789%2061.4781%2025.8789%2059.8262V50.6025C25.8789%2050.2495%2025.9735%2049.909%2026.15%2049.6064C26.6985%2048.6607%2027.9153%2048.3391%2028.8611%2048.894L49.6794%2061.0304C50.8962%2061.7429%2051.6465%2063.0416%2051.6465%2064.4539V74.0117C51.6465%2074.4467%2051.5267%2074.8818%2051.2997%2075.2537C50.6125%2076.376%2049.1498%2076.729%2048.0275%2076.0418L28.1549%2063.8801ZM59.187%2046.3658C60.4038%2047.0782%2061.1541%2048.377%2061.1541%2049.7892V69.1824C61.1541%2069.7561%2060.8451%2070.2857%2060.3471%2070.5631L55.7887%2073.1291C55.732%2073.1606%2055.6689%2073.1858%2055.6059%2073.2047V62.4364C55.6059%2061.043%2054.8745%2059.7506%2053.6766%2059.0318L35.3928%2048.0933V35.9379C35.3928%2035.5848%2035.4874%2035.2444%2035.6639%2034.9417C36.2124%2033.996%2037.4292%2033.6745%2038.375%2034.2293L59.187%2046.3658ZM68.2974%2032.0416C69.5205%2032.7477%2070.2708%2034.0591%2070.2708%2035.4713V63.7982C70.2708%2064.3782%2069.9492%2064.9141%2069.4385%2065.1915L65.1198%2067.5242V47.8032C65.1198%2046.4099%2064.3884%2045.1238%2063.1968%2044.405L44.5095%2033.1953V21.6641C44.5095%2021.3111%2044.6041%2020.9706%2044.7743%2020.668C45.3228%2019.7223%2046.5396%2019.4007%2047.4853%2019.9493L68.2974%2032.0416Z%22%20fill%3D%22%23F9FAFB%22%2F%3E%3Cpath%20d%3D%22M48.0371%2096C74.5263%2096%2096%2074.5263%2096%2048.0371C96%2021.5479%2074.5263%200.0742188%2048.0371%200.0742188C21.5479%200.0742188%200.0742188%2021.5479%200.0742188%2048.0371C0.0742188%2074.5263%2021.5479%2096%2048.0371%2096Z%22%20fill%3D%22%23070A0E%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M27.8013%2064.1309C26.3667%2063.2534%2025.4893%2061.6907%2025.4893%2060.0127V50.6429C25.4893%2050.2842%2025.5853%2049.9384%2025.7647%2049.631C26.3219%2048.6703%2027.558%2048.3437%2028.5187%2048.9073L49.6668%2061.236C50.9029%2061.9597%2051.665%2063.2791%2051.665%2064.7137V74.4229C51.665%2074.8649%2051.5434%2075.3068%2051.3128%2075.6846C50.6147%2076.8246%2049.1288%2077.1833%2047.9888%2076.4852L27.8013%2064.1309ZM59.325%2046.339C60.5611%2047.0628%2061.3233%2048.3821%2061.3233%2049.8167V69.5171C61.3233%2070.0999%2061.0094%2070.6379%2060.5035%2070.9197L55.8729%2073.5263C55.8153%2073.5583%2055.7512%2073.584%2055.6872%2073.6032V62.6642C55.6872%2061.2488%2054.9442%2059.9359%2053.7273%2059.2058L35.1539%2048.0939V35.7459C35.1539%2035.3873%2035.2499%2035.0414%2035.4293%2034.734C35.9865%2033.7733%2037.2226%2033.4467%2038.1833%2034.0103L59.325%2046.339ZM68.5797%2031.7879C69.8222%2032.5052%2070.5844%2033.8374%2070.5844%2035.272V64.0476C70.5844%2064.6368%2070.2577%2065.1812%2069.739%2065.463L65.3518%2067.8327V47.7993C65.3518%2046.3839%2064.6088%2045.0774%2063.3984%2044.3472L44.415%2032.96V21.2461C44.415%2020.8874%2044.5111%2020.5416%2044.684%2020.2341C45.2412%2019.2735%2046.4773%2018.9468%2047.438%2019.504L68.5797%2031.7879Z%22%20fill%3D%22%2300D395%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3Cfilter%20id%3D%22filter0_i%22%20x%3D%220.859375%22%20y%3D%220.592313%22%20width%3D%2294.4298%22%20height%3D%2294.6595%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22shape%22%2F%3E%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%3CfeOffset%20dy%3D%22-0.689125%22%2F%3E%3CfeGaussianBlur%20stdDeviation%3D%220.114854%22%2F%3E%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22arithmetic%22%20k2%3D%22-1%22%20k3%3D%221%22%2F%3E%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200.0699479%200%200%200%200%200.9875%200%200%200%200%200.717887%200%200%200%201%200%22%2F%3E%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22shape%22%20result%3D%22effect1_innerShadow%22%2F%3E%3C%2Ffilter%3E%3ClinearGradient%20id%3D%22paint0_linear%22%20x1%3D%2248.0745%22%20y1%3D%224.34131%22%20x2%3D%2248.0745%22%20y2%3D%2291.7325%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23141E27%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23141E27%22%2F%3E%3C%2FlinearGradient%3E%3CclipPath%20id%3D%22clip0%22%3E%3Crect%20width%3D%2296%22%20height%3D%2296%22%20fill%3D%22white%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3C%2Fsvg%3E";

var BOND = "data:image/png;base64,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";

var AAVE = "data:image/png;base64,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";

var DEFISOCKS = "data:image/png;base64,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";

var BOOKS = "data:image/png;base64,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";

var LOTTO = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAC/VBMVEUAAABNDMw9JtIzAI1PKOc7G8MjCIxLJ+EkCo8qDJsnC5QwEqdLJuE3GLpJJNxNJ+U6GMAoDZc0FbM5GL5MJ+I+HMo7GsMnC5QoDJg7GcQpDZ1GJNYxEqxIJNwjCIkwEapRKutMJ+MlCpI7GMBDIdQkCoxAHs4kCY1JJd5PKeYsDqEkCo45GL0wEalAHcwxErBMJuM4GL8mDJQoDJknDJZGI9grCaNGItgiCYROJ+YsD6JJJN5OKOUkCZBNJONPKOlAHs1DINI2FrdKJN81FbU7GsQ4F7tFItb///9DINNKJd9LJ+EmCpM/HMxCIM9KI9xJI9pEIdY3F7pGI9gpDJkoC5hOJ+UqDJz///4lCpAzFLA+HMpBHs79/fovEKf+/f7///wrDZ////o9G8c1FLUwEKo5F70yEqv9/Pw1Fbc7GsI6GMEoDZQkCo3+/vsyE648G8UzE7MtDqT///crDaE6Gb5PKOf8+/gAAIX49/hEINVQKO0AAJ82JZMhC375+PUnC5YAAG+NhqcDAH39+/////RSKfJILc718/cyIowBAHQAAL0yIZArFosjCYouIIJVK/cBAJgjC4NHLMk+Ib8zGakAAI0xJYXn5OtCI8lUSKodAKT29PJAHdGOg8rw7vLs6fLh3uSyqt08GchGLcQ9HsNAKbgAAKU0H6FNLNxGJ9LCvtFKM8cRAMaCdsQvGZVSSZMyJ4Ld2eTQy+LIxNsiAMcuAMFELL1ZTK4lE37t6+o2ANlGKs65tcgBAMJkVr2loLyRibY7JK4jAKl9dagsF5ATAIz6+vBJI+TQzdi7ttUAAMmyrsRDJ8MAALfj3uzW0uJRM98UANakm9IEANI5BdGvqM+9vcZLNbyCeLYEALEcAKhgVZ0WAJdKQYlMMdZoVc1WR76JgapPQKgUAKQ6J54aAILBvOJwYNQyAM+akM5YQMs4Dcg6FsWXkrEoAK5xZ6cxE6IlAJxpYpt4ac9zab1GMq9HNpsjCY1BEtZCD84jALQ/Lp4qGn5NPKGdojIQAAAASHRSTlMAAgQE/An8+/v6+v4T/Pm6gRD8+8/8+s6CPjD+6k89+u+dnCf73da8YDz77L22nZuPX15KQyAf9e/n266CcS305X5vbtPCrp3+w3b3AAANVUlEQVRo3uSSMWvCQBTHG2nIIt6STQKGLmbLIiKKDg4VHXIgHC7S1amLcA43uN3sRxC3zI5+gW6i+AHcHFxddOq7S6MWvZCk2foDj3cx9355/+Tlv6IFhNvs2+dyOS3ciF3GLtHxp8pLwuuZibRAkHfaDYTMksREqFFuShf4M1AIgeWaLT4DOJPImpVQw9GF508aeTxfRi3oTl8lVBKU4OI129LFOOkV8HPsViCgD0gXA4/bFJ9C2qA0CzFhIGqkh9iOmDrVu3DMGb83UHIHpTcR5bxeAU3ypN4QZ4ZB4kANgxNXh2ESOho9UPRiY/R4zYKDSaJqmhzOJcIgrK7HtsCHUiYMFAmBzGoORBYzKvthjO7DrhvWd6tBaBmeMY5DR6ybkkKPuhBFDIfJCt3UeNyGWWI5PO95h9vqKYcJLZEOKhxgCdYQuYPF3wC+/MO7IurgHmFhdmRimnR4SkCx2u5229XGx56SAnuPltRZ6MA4XG+Vf96eFofD4rQ9wzC/wcDV0oZMlGG5rIDV+KvjctoBpsvjysfPAJmAWNBM4bAIjnTs5+PJcDQaTsbzPVjUeNXK08TgYqWK+0qKuH9Zj0cfg05n8Dkary99XFTf/GVCw6eSb0LLLrRpKIrjD+KboCgtiI+O4ZPgg/gmfqAmQqqxPgTSkMutSFihFIKWFqEvCRHyJC1jxbWbtXXStRWc3aTWTofgXGkFu0otypwibHOCih8Pinhuk6jZuvqjH7c359x//vf03HbrrC2NZW15C/Mp+bHoJyKi+FhOzS+w7g05cPFwlw2DqaOzfezGuLPNIaSImIhgUcFDzV1utlf8QUPF7mPLAfeujXPCp5uvQ1hCoNFRQaHXzdPhjeP7ZrfCmuuMnJjtCwO0CRmRp/WaXV4KcRxoEOA9tLScNeIt7Ll9s3uIFbuR3XRvsveWItQ/RJbuZXsmuPu7tOHJvp45bLg8SommAgxGy+GeImCF1N5uhKX/w0JljpLM3YLBXGXBRfe2cmhtRfaedhnEadrj6kZ29e0ICmJSFSzII79W3XS3MA9Nx83haaiKrQ9dFru0KN1VhNbGXgxjPwX4ceTFJQ3CuhHVsuaI7bcbOXzKvA9tef5ZQuvixeNKtAYfUBJxIqA3V6YSXX1ozLP5ZZJPMtidtqr0hz0EJludXkmmi2WPy2PH5fCEY5+GOIGURODuX0p7PAmPHUgqF9PJ5HQ+y3Q+ntpLRKzd2plgQIHxaPlGCKPRAqjAJxs8s6A/lyVMATIKfi2mEzD3N8rILxZGEQ418pqHQB/abHUkqG1zOxggmk+qSJK40vtmnLGTYOKTry8LgkgBWMK382We4Rk78eb7Egf5ajIfJfIO9t8jv59mCFp9QpY4LogbVW3tArxWmUAK9nOk8EhAK7rG82tDqg0cRJQkT9Q1BnC4yX5ZTQIThpPb2I+xglM6BNkBl7Kk+v2ItKIqoVLtOri1o+kp2FDweQ2cEOj+v9+tfayDIbc1VU3JEQmjCBTFSrRuNz75FImI46xuRHP6OrfRYiEoCEpQTlWnzKnd4MHsRNbBA0x8tXWNUv1c6QcT9/I2ctWUaju7hMdfilHeDpNrP6Eklbo29SHOExzsPmO/QKo/0RHx8rWr38dLSMAT9TiJsvB645PTl1HQJkLd1steyPkbdT1XLQxzaGj8+9Wa12uIQFHMXxInLEPI8DO3Bj/Kcgjf0aPegNciEIjqE1ghRbfg/BJuVKIQYwEaeiGChMjLwbMzTMZITByD9Y0uYcy1vPyZmz9vlbAg4VQ9HQhYOpl0JUmJUA+7lZHWaoz/E9PRwAp37dXPm2d4SAYCvNkp8Ccl4QwYeAfOzQyOI8EvyQ0958uY05nAeXLM28FB6k4757NCfGnQkCUF3x+c2T4QGDAXdO43RbYlnAMd4NrA1KWHSFElv5rUWxlj1pfT55BCrQFhHCzUox/M1Fbl6zCWKCw8GrsBCuaskzGOr03/iPgu+GLn340gCUv+4ULdl67FMrFarp0MSus0oF3k0W/5HETEaulaZXFEVjiZG/pMbu2PCL/TdHKccfo6DMDjQvrKOHQBErnh5622Pjk5qbdXIljkqHVwEjV0Vy9CSKX+I1niFIQE6v5Y9AJZycDJHCFOQOgYv8NnAtenxh5hmcKqouKROyvTi4vJJ2pQURG1HlFQL6e+Li5OJ+eeqrKCsSgLH9sxsozJDmYbbBUR+c15+bw2DcUBXBRPtQfrRUToP6CIKB48ioeccwqRLM+Q9YeVV0IoaaClMDtopRMCbSlpYRYlLexgqYJFEO1+dCgDexqMth5mpyedm6BXv3lp1pexg/VTmkLey/eT7zf5vkevPLuQoCiOKmpEFSXV3jsyuRzcHxapTGgEjsnmcrq9ZmoSVmHhNIqJ2DSWLTntSkIAORtiY8/LW0hTsaqqgiZICGENixI6SSFJjBiRYIogCDBdVDX03ngdC0GYCRfuURI4O8GfKI5/6QLcIoA4EXJAYDgxEdI5CIkMcoY1VGvtF2MQzMWTCcu6p9lEyCq34Zn+BxHmQ9kKJSAWlYn7TL77WZrXBtnLZ4bTmB+p1yyN/xlk4jTjM6+kuDbMSeLsEpFb/jOf8EpiTp+cIRIPVrnPiP9VLcNivZIHbjNe/+6PRqmRqGXXa3YJ5n6krCiJcBTPD7uWswrHoh5k/2CY4WavFgPvll+O0rCXz08kt/y0AYiulut2vTiOQ/8g4wAi6SctJ4ZLIHT3lMvdkOwhapVXGE1UsYixxCEJQpzYjAgEEsISBhZFjdkyLCKYSmLXyMtFVshQQLGRCYrCW41daGdo+Qg0vbAoYCyKJxUIYxiMRKDhtUWO4dYbq7JCgCgASO4cSe6AhIfPBJ6XA+W3leXM9JYRqYpIQUqEJMYlW3uzVV7l7TiAHYRoLjnbLxwvyTxNXJbj95NfPw93F96/Xem365VcRtezx3PJRvRMrlJv91fevl9Y+NV68uhAjvJxnkK+fPZIcvay1wJ3c5Be6pWTyUcOn1ut4c/13QWK3fWfw1ar9dUefvwomUz2lgoHiuJxBNirZFFx6nWNDUySAOCo8L6HS/l8oZAGCoWNXq+XPIYdF05vFMikQjqfX3ro4xVPRQLsdQhOANmNaJzGnlBqjkYv4HK42AGUeYoCuJ0BxzIy7pfIhRR88BypllsvPkwRD8fj+9WOOTaMVCpVPWw29/bSwAtgwwZ+08DeXrN5WE01UoYxMt+V9nm4kAoTlK86DrdecjDsYTW1Eql96n/b7u50fqcIjca4Wq2u2VTXxo1GivC7s9Pd/tb/VBNejkthgJZMq0VWFsU37xAO28fSmrmJVET+i+jL9farj9vd7s67jml+AUyz826n293++KpdX9bJHyO0iDLmoOTEcCORd4uyXAULRWnQqUlZTYBuxNPe0zN6jqDrusi4YJgkqAJTOyYJyhchEVpyM+6boyhVTR0JiMOChKCtJyCGcxcqTgA0+GKMsIARwpJuVktzc44AQvjCZHH0cBssHkmGAYmz/pHvBJHAAPQIh4SJxGU+qFwjTUKncsMrGXQ2xVm2YA6jTGdASXzzbiKep0JbfHP3n3KbIvBPBpi3iSqHPipCULlIJeI25N/SzNg1cSgM4LZFMdmcFAeHHCLocGBFpOB/8MY8Qha5FORuSDgIgW4SzVIyJDSL3a7dCl163C0ZCj3oUnDv5tixyy1dCve97171PSo2wR9G35f33vfzfe8hivWRK3B19uf0+C3BN+4Sf5+sascXfPzj/uxKSDA64kdLtnz+2nY9BC3BcrZ4OGen6As8cPslIMYvZOzUnf9azJbhlYtzkfa4y4+WXK/9I7fNJXDpcRBMp8HN/d3tw+XF6cmmMp2cXlw+3N7d34TTafgUG57lcdpj/tEoA97eyOKw0Ukaz+dpGE4hQbz8O5s9Lx4fH69/A9fQWDzDx/syxu4gmc/jNHJxqsemu+KuywWrjRXDekMnSTKZgAkSPAUhs8HF+R+FwRN2p5NJkjiWtZrcdntiseSKtUaKtcbQbTOKkgmo0tc4jn8y5gA24MZrmkJnEkWOrVsCynf5ZMmS4tFIMdZ4HqqobTpRAusSSYDIcUyqG1gkYZoy1nitNhfsk2IJFn3d0tllU5tDqQ63dGGA4HCr7A1vsdTBonNYYpYNJWud2MYnStnIN8BRxGJts6iGSvX3oI6uAmTTKJU7PrQoLN8WeK8U82fF+9iBlo6h2rZPOT714UE5GNg29uMrBXhM/WwOtFSqnmoTwAYIgm0pEu+uIuJpuOdZLHuaZ6okN6pNh2x6BnBYF7Y/t8Jq1nP8+b93UOi3LF/N5aBU2xeWkXExHcMsmxkpE6PawGm5LHuFSk21SDmLoeRbzS7OQfItpl/rGKRcRpEjIMbQ7fvNYTHPMuSdgdU0fd9kHmcTpXKJUFLtFiRFfs3BodYhvhmVAEgbIZAeY+ho1hoFXqldNIXioVYtEZ+YLy/gYkQvJgFBpwUGHLQrB5iifzhstQaDEjEZg0GzpQ0bFd6/I3w5vBqVSr3XAHr9SpG/Admwu0iuO8SZN+IfQ5tYQeiz2YYAAAAASUVORK5CYII=";

var PPOOL = "data:image/png;base64,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";

var PCCCOMP = "data:image/png;base64,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";

var PCUSDC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAABL1BMVEUAAAD///////////////////////////////////////////////////////////////////////////9MJJ8ndcrp5PP7/f/SyOdiP6spdsv4+/70+P07gs9AhdH08vnO4PQreMulkc83f87w9vxXMqXY5vZLjNNqoNtwpNy8rdvF2vFXlNY0fc3p8frg6/i/1vDt8/vS4vSEsOHJ3fK50u6wzex+reAxfM2PdsMtecvc6feqyeqUu+V1p96PuORdmNh5W7efwuiav+dRkNWahMk0WLuKteNIitJ4WrduTbF5qt/m7/llndqxn9Xd1u3Hu+EocsmlxukvesxhmtlNjdSEaL1GMaYuZcLi7fhFiNEqbcY5TbVBO6tJKKIvessuesyPdcM9Q7CxoNWPd8NgB1RLAAAAE3RSTlMA3xAggEBg75C/n6DPMFBwr2+wHMFuMwAAIP1JREFUeNrs20tuwjAQBmCPYzu266SJ3AWskJDY9AYs2bKgrLj/UVqKWoqUlkcDsTP/d4V5ZpIIAAAAAACAkSoKbYxS3jfO0YcyfiuJKDjnvFfK1LqSAsZCFrVRvgkUr0LBeWV0JSBXsjLKB4r/VLpG1WgJWZGVsQ3FXpGzRiMNkifr1lO8m9AoZEGqpN7H/gGoabWApEhjQ3woZ+tCQAqksRQHETySYGBSW4qDChZLwVCq1pUxBa7FueCs0ZX+KfLYCx9HGp9G6Z8oG4Nh8ADSJNL4uyAHTvGKPnLg3nSKnb+DrwX0Tts8ov+JPJ4LeiVbFzMTDI5EfdFNRsX/Ax4N+yBViNkitAFOk7+TRwrcTmc3+bs4I+AGUuVe/JgECP8XwiS4SvE0qvBjGeA4+pECCD9SAOFHCiD8SIHLV7/IAlKgk7SRDaTA2J/7zykVPhs50bIK/x7hQHykM37hdzvCh0MHBYPVH6sAhn8nJbirk/q/4xJYBdD9MQd6wrr7Yw5o5t3/iDg2AU6Hv/Msu7sQyp/1Mojy570MovxZNwGUP+9NAOX/O2LwTynKn/VNoGD53g83Ab6v/a9XjncXxPbHexessP2xHgNo/1d4FmOD9s97DKSw/c/etq/z5W41nU5fDhbT9Wq1nG+2k1lMzbjGgC7jkGaTzXK9ePnLYrXbpJUG7+zb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";

var PCUNI = "data:image/png;base64,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";

var PCDAI = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAABL1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////9MJJ/1rDf//v31rTnp5PP2rz7SyOf61ptiP6v979n968/73rD50Iz+/Pj3uVX+9+x5Wrf86sz4wmv08vn2tU72skZXMqWPdsP2sEL86Mm8rdulkc/3uln60ZD98+L+9uj++/X3v2X//fuahMn97dT3t1Gxn9X5y4H72aL++fD4xnX5zYfzqzjd1u3Hu+H+8t6EaL3605RuTbH3vF774bb73Kr858T2tEpdMpTvpzv5yHqmks9UKpqlbGjYlUn85L373a6+f1nhnEPNi1Dpoj9tTLFpO41xQoiuc2N8SoGOWXaXYHGeZmy7rNv96stKge5HAAAAFXRSTlMA3xAgQO+/gJ9gkKDPMHB/UK9fj7C+Ix0NAAAblUlEQVR42uzb3W6CMBQH8J5SSmEFQVOvjJcmJprMe+9mjO//RGMzmyNhUxxKy/n/XuF8cgABAAAAAAAwUlGk0jRJjKm0plrsvsVEZLXWxiRJWqpcChgLGZVpYipLrhOy2iSpygWESuZ14C25f4p1lZRoCUGpQ59V5HpFOpsqpIH3ZFkYcg9jqwRZ4CupzrF/OKoKJcArMs2seyqdlZEAH9TBJzcIa5AEA5MqIzcom2EpGEpe6Nj5QBc4F1w1utJvIoO98Hlkavwo/Ya4mmIYPIFMPWn8bZADTbyijxx4NOVj529hSgG9U1kY0f9EBs8FvZKFdoGxUxyJ+qKqgIr/Bzwa9kFOrAsWoQ1wmvytDFLgfiq4yd9GTwXc1ftDL35MAoT/C2ESdBK9jCr8WAY4jn6kAMKPFED4kQIIP1Lg9tXPsYAUaCVnjg2kwNif+6+JJ/hspKFgFf4PhAPxhQr4hd/9CB8OnUUMVn+sAhj+rSaCu9Kr/ztugVUA3R9zoCesuz/mgGLe/S+IYxPgdPi7bsbuLoTyZ70Movx5L4Mof9ZNAOXPexNA+f+OGPxTivJnfROIWL73w02A72v/7uLx7oLY/njvgjm2P9ZjAO2/g0KMDdo/7zHgw/a/fju87rbH1XK5nJ9tlqfVarvbHxZr55txjQEVuyGtF/vtaTP/y2Z13PuV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";

var PT_XSUSHI_TICKET = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAC+lBMVEUAAAD///////////////////////////////////////////////////////////////////////////9MJJ8ODyP6UqDlW6fp5PPdX6rVYq3NZq/oWqb4U6H+/f7QZK7sWKXSyOewc7nzVaK0cbfjXKhiP6u6b7YTEyfGabKger7hXanBa7MMDiLDa7Ph4ePqWab8/P29bbXJaLGkeL0dHTD08/ind7zTZK3YYaytdLqqdbvLZ7CHh5H2VKIqreV5WrfvV6UsLT7ZYKu3cLbbYKv6+vv99/vwWKWlkc+cfL/fXqlXMqVKSlqPdsMYGCz49/kLDSGSgMK8rduXfsFtkc+ZfcC/bLTxVqQ7O0xaW2mBiMh0jcyHhcdnZ3Slpax7isuPgcTzVqOVlZ4KDCDv7/CKgsXx8fLExMlAQVH87vZlldKbhMlWm9czM0Ta2t5Mn9ohIjXd1+2xn9VdmNTHuuHT09jIyM00quI9p99uTbEnKDqUgMF3eIPOztLzos1Fo91DII5SU2L65vLv9vzp6euNgsW0tbv41emNjZf4xuHho8/x7fbr0+mrq7ItGWHa7fjG5PXo3O71tdfl8/vm5ujrxOFvb3szG23lhb6wsLeenqZ0dYAeFEQ+HD0JCh7wc7TiZ66amqPpVaInF1Wf1vHz4O/r6+1Atujk5ObKp9PAwMXgcbRqancVETLUkse6usCCg43s6fV4x+zZzufReLiTxunEx+bZvd7nkcWEab3Eebs7Hn9pK1bF1O2syelnsuK4ut+FpNiRks3xk8W/icP2hLy9dbnyUp/jTZgtFzPi4uRgodnksdbAk8mygsH3ZavHRIegPHTf4fKy2vJewOtPsuS4sdqnq9m6pdSol86eksunhsTRh7+DaL1iQKtII5e9QoOPsd57j83XX6vtX6iAf4pUI0kZEzp2n9eEltDsUJzaTZSxP3x1Llyzl8yEaL3RTJF8fYh8fIeRNmuIMWR7e4d6eoWsZ5KCM2WRfMDhXJ97e4aSWIH+s/X5AAAAE3RSTlMA3xAggEBg75C/n6DPMHCvULBPNg3qSAAAKHFJREFUeNrs3Dmy2kAQANAZ7ZKFoNwTkJLoCIqVUqUi4RqKUJFwNC7DFXwEY7u8lgDxDb1o+mU/7lYv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";

var PT_BADGER_TICKET = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAC91BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////9MJJ/ypSsQDxQSEBfv7urCwsTn5+kRDxX18+8DAwULCg/SyOfs6uf5+PQWExtiP6sCAgP39vLp5PPt7OgTERju7enx8O0YFxwGBgjp6OkaGR7z8u6/v8ENDBH08vkJCQzq6ej+9OWlkc9XMqX0sEWPdsPOztDMzM7o5PO8rdsFBQbs6+jy8e3zqjgVERrFxcb++vLxpzD86Mp5W7f40pW4uLpJSE1EQ0fY19l4eHuahMn1u2DY2Nt4WrduTbH63a/xqDQcGSD28e7n5+fh4d5gNJDd1u3Kysrj4+KfZWXn5uSEaL30tlPnnSnGhyXc29mdnJz4zIgmJSkXFRsZFBPV1NTp1rotLDDHx8nDw8X62KL08O3r6eXe3dz2wW3soSo4KBX49/P3x3seHSEIBwvHu+H97tfS0tHPzs68vL1OTVGpch7n5eLo49/Ozc3o3MuCgoTwrkewn9Xr3Me6ury0tLXrzaCMjI5cWl7wqz7nnTK1eyDp2cKrqq2TkpRYV1vvsVHdlTnzqzh5UxpBLxjs6+qxn9WHhorutl9SUVPvsE3vpC4gGBDPtY33xnrXrnBXVllBQEL7472YmJnryJVnZWfIhUjZlSrpnylqSBZPNxTw7uvHuuHo3tDn18K6uLXrwYJ1RILXsnupbl/o4drn39VWLJf50pXvtFizdVZkRBbz7eja2tuvr7Gnp6nIuqbNt5iPj5GAf4L2wm3TjUA+PT5aPxYnHBDEwL3r1LOjo6VzcnbtvnSKVHSUXWyUf2S+fU/oqUQ6OT0xMTbfmCiKVHPuumvlpD1hTTNyTxsvIRH979exoNX747zXwqTQr39/THttbG/aqFy8gCE2LSH979j76MnFvbSKVXRgYGSQfGHjq1PRjyaRYx+AVxrazrtrPImQeFlxYk+ddT/emzK+gSKEWhw9/QuaAAAAFXRSTlMA3xAgQO+/gJ9gkKDPMHB/UK9fj7C+Ix0NAAAjEUlEQVR42uzbTXKCMBQH8LwQQqABQSfuXXgDFzouunbvshvP4VU8bGmd1jJDq1iUhPf/XeF98gABAAAA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";

var PT_DAI_SPONSORSHIP = "data:image/png;base64,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";

var PT_USDC_SPONSORSHIP = "data:image/png;base64,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";

var UNI_V2_LP_POOL = "data:image/png;base64,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";

var WMATIC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAACr1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8nkPcpu/UpbO4puvUnkfcpuPUnkvcqbe74+/8nlffy+P8oo/YoqPbp+P79/v8nh/UoefEnmPcpbu8pcO98vvonifb1+v/x+v8pt/X8/v/I5v0ofPIpdfAorvVhzfgsb+4tlvcooPYoq/X1+f6Wy/snnPcwvfU0dO8wce/n8P674vy14fye4fuSx/uR3PqF2fksvPUpjfEpd/Ds+f7k9/6+5PyIw/tetflfzfhUyfcptPZsm/RgkvP6/P+w3fys5fuOxvuCwPoopfY8fPDt8/7L5/215/yt2vyj4vuZzvu70fp+1vl41fm4z/msxvlmuPkosPUpkfI5eO/1/P/D5/2w5vun4/vD2Pun2Puf0/uX3vpz0/lNx/cni/ZDgPH4/f/Y8v3U7P3C7PyL2/q/0/pu0fhmz/iCuvg3nPhay/dFxPY4wPZ3pPVml/NbjvJPhvFKg/Hj7v7d6v276vzB5fyp5Pu0zPlIrPgymfc1v/aNsfZ3sfZ1q/Z/q/Upl/NVjPIxc/Df9f3N7f3R5/3S4vzK2/tqvvqlwvhHpPg9wvYplPI0g/LZ5fx2w/lpvPlr0PhUsPievffO4fyf2vu+2PqF0vp0w/mJwfigvvebuvdZpfZEiPLwoW1LAAAASHRSTlMA/exgnNN5AcrDJLxN1iIf7pYPEgXPJp+OUkc8JxgD6A3x8Ofbuq90cGhXVSoK8y324ce/iFk6HJnj3cW3sK6kbjQH4saJ9S/swAl9AAALbElEQVR42uzYS27aYBQF4PPb2NhgXg4YQjECDCQpkIdICImiJsroTLuCbiBr6UIy6iLaWRfRpXQYdQI2fvw3ar4dnME5urr48H8YXXhP16W5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";

var PT_USDT_TICKET = "data:image/png;base64,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";

var PT_USDT_SPONSORSHIP = "data:image/png;base64,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";

var PT_CELO_USD_TICKET = "data:image/png;base64,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";

var PT_CELO_EUR_TICKET = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAACXlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////9MJJ9FzYWPdsOlks/M79xiP6s7xXk5w3ZDzIPp5PNXMaVEzITx+/bSyOe8rdtCy4I6xHd5W7f08fk5wnU+yHxAyX88xntCxHtBy4A/yH6EaL01wHH4/frd1u2bhMnv+/V51aH8/v3m+O5OyIM3wnTn+e+xn9W/7dRuTbFExXymks+t5sWO3K83wnP+//5l0JJXy4lRyYX7/vzs+vLb9efU8+Ji1ZhAxHk6xXjp+fHHu+HQ8d/I7ti46c2m5cKS3rNHxn7o+O/k9+y47NGm58Wj47+b4LmI4LGG2qp+16Ry2qNLOZxc1JRizIP2/Pfz/PeR4rdMJ59ML55x05tt0phizpFIz4dJzINLx4GGyn9ZyHvd9uj99eXL8Ny86tCx6sy16Muf4buF36+C2Kd01J5k1ppMS5hfzY9IkY5czY1N0ItJqolHuIc9w3f6/vv9+vPw9urX9OSlkc/l6Mm43a1p15xn1ptSN5m11Zhq0ZZJY5ZKeJJX0pBbYYtxz4pPuINQzIFrx3jp8+L86crs6cqPd8Pl4rvS4biJ2qx+3KvL2qd426bX2qal2qZv2aBt2KBPQphS0Y5Kio5HnI1ZbotGs4lbf4dUyoZIv4Z2RIJatH68rNv579nm7tXN68/56czX5sK95L1uTrHm3K25l6au2KFLVJmD1ZhWLJig05VJapRfSY2NzolrPIlyRYRZoYJSu4FZu31knH17x3d0wmySNvM9AAAAFHRSTlMA3xC/IO+gYEBwgJB/sDDPUI9fb7u/QykAAA6jSURBVHja7JxhjpswEIWxHQgkge22z8qKHyCBBD8jJT+j1R6hx+odepFer1VbCa2SijAzBpvud4N5zHszNiTRBx98MCubYpvtksQ8KRXjD7FSxuTJLvuUbqL1oovtPlcY48nss1RH60KnWa4wBZXv1qKC3u4VaDwl28AtodOheLIIn0LtBJ2ZGCKYABtBZwZ/+B81GKqX1SAQL6T7GG6IkzTyHZ0ZuET53Qb6EMM1KvE2DdIc8+CnBKnBfPgXBqnBvBivuqB4rPy1GkEneIiVSkBPfj7x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";

var SOHM = "data:image/png;base64,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";

var PTaUSDC = "data:image/png;base64,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";

var TCAP = "data:image/png;base64,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";

var _Object$freeze;
var TokenIcon = function TokenIcon(props) {
  var sizeClassName = props.sizeClassName,
      className = props.className,
      chainId = props.chainId,
      address = props.address,
      onClick = props.onClick;

  var _useCoingeckoTokenIma = hooks.useCoingeckoTokenImage(chainId, address),
      tokenImage = _useCoingeckoTokenIma.data,
      isFetched = _useCoingeckoTokenIma.isFetched;

  var imageOverride = getParameterCaseInsensitive(TOKEN_IMAGE_OVERRIDES == null ? void 0 : TOKEN_IMAGE_OVERRIDES[chainId], address.toLowerCase());

  if (imageOverride || isFetched && tokenImage) {
    var src = imageOverride || tokenImage;
    return React__default.createElement("img", {
      src: src,
      className: classnames('inline-block rounded-full', className, sizeClassName),
      onClick: onClick,
      alt: "token icon"
    });
  }

  return React__default.createElement("div", {
    className: classnames('inline-block rounded-full bg-overlay-white', className, sizeClassName),
    onClick: onClick
  });
};
TokenIcon.defaultProps = {
  sizeClassName: 'w-5 h-5'
}; // TODO: Import all images from the builder
/**
 * Sometimes the CoinGecko images aren't the prettiest
 */

var TOKEN_IMAGE_OVERRIDES = /*#__PURE__*/Object.freeze((_Object$freeze = {}, _Object$freeze[utilities.NETWORK.mainnet] = {
  '0x57bc752ec42238bb60a6e65b0de82ef44013225d': ARTO,
  '0x03ab458634910aad20ef5f1c8ee96f1d6ac54919': RAI,
  '0x6b175474e89094c44da98b954eedeac495271d0f': DAI,
  '0x056fd409e1d7a124bd7017459dfea2f387b6d5cd': GUSD,
  '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2': SUSHI,
  '0xc00e94cb662c3520282e6f5717214004a7f26888': COMP,
  '0x0954906da0bf32d5479e25f46056d22f08464cab': INDEX,
  '0x8b9c35c79af5319c70dd9a3e3850f368822ed64e': DGT,
  '0x0cec1a9154ff802e7934fc916ed7ca50bde6844e': POOL,
  '0x0391d2021f89dc339f60fff84546ea23e337750f': BOND,
  '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9': AAVE,
  '0x9d942bd31169ed25a1ca78c776dab92de104e50e': DEFISOCKS,
  '0x117c2aca45d87958ba054cb85af0fd57be00d624': BOOKS,
  '0xb0dfd28d3cf7a5897c694904ace292539242f858': LOTTO,
  '0x3472a5a71965499acd81997a54bba8d852c6e53d': BADGER,
  '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2': WETH,
  '0x4fabb145d64652a948d72533023f6e7a623c7c53': BUSD,
  '0x57ab1ec28d129707052df4df418d58a2d46d5f51': SUSD,
  '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48': USDC,
  '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984': UNI,
  '0x1494ca1f11d487c2bbe4543e90080aeba4ba3c2b': DPI,
  '0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0': WMATIC,
  '0xeb8928ee92efb06c44d072a24c2bcb993b61e543': UNI_V2_LP_POOL,
  '0xdac17f958d2ee523a2206206994597c13d831ec7': USDT,
  '0x334cbb5858417aee161b53ee0d5349ccf54514cf': PCDAI,
  '0xd81b1a8b1ad00baa2d6609e0bae28a38713872f7': PCUSDC,
  '0x27d22a7648e955e510a40bdb058333e9190d12d4': PPOOL,
  '0x27b85f596feb14e4b5faa9671720a556a7608c69': PCCCOMP,
  '0xa92a861fc11b99b24296af880011b47f9cafb5ab': PCUNI,
  '0xfa831a04cb52fc89dd519d08dc5e94ab2df52b7e': PT_BADGER_TICKET,
  '0x0a2e7f69fe9588fa7fba5f5864236883cd4aac6d': PT_DAI_SPONSORSHIP,
  '0x391a437196c81eea7bbbbd5ed4df6b49de4f5c96': PT_USDC_SPONSORSHIP,
  '0xfdc192c153044dedb67c5a17b8651951cf70ee4a': PT_XSUSHI_TICKET,
  '0x04f2694c8fcee23e8fd0dfea1d4f5bb8c352111f': SOHM,
  '0xdd4d117723c257cee402285d3acf218e9a8236e1': PTaUSDC,
  '0x16c52ceece2ed57dad87319d91b5e3637d50afa4': TCAP
}, _Object$freeze[utilities.NETWORK.rinkeby] = {
  '0x5592ec0cfb4dbc12d3ab100b257153436a1f0fea': DAI
}, _Object$freeze[utilities.NETWORK.polygon] = {
  '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270': WMATIC,
  '0x85e16156eb86a134ac6db5754be6c5e1c7f1aa59': PT_USDT_SPONSORSHIP,
  '0x9ecb26631098973834925eb453de1908ea4bdd4e': PT_USDT_TICKET,
  '0xc2132d05d31c914a87c6611c10748aeb04b58e8f': USDT,
  '0x25788a1a171ec66da6502f9975a15b609ff54cf6': POOL,
  '0x19c0e557ee5a9b456f613ba3d025a4dc45b52c35': PT_USDC_SPONSORSHIP,
  '0x6a304dfdb9f808741244b6bfee65ca7b3b3a6076': PTaUSDC
}, _Object$freeze[utilities.NETWORK.bsc] = {
  '0xe9e7cea3dedca5984780bafc599bd69add087d56': BUSD,
  '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c': BNB,
  '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82': CAKE
}, _Object$freeze[utilities.NETWORK.celo] = {
  '0x765de816845861e75a25fca122bb6898b8b1282a': CUSD,
  '0xd8763cba276a3738e6de85b4b3bf5fded6d6ca73': CEUR,
  '0x471ece3750da237f93b8e339c536989b8978a438': CELO,
  '0xddbdbe029f9800f7c49764f15a1a1e55755648e4': PT_CELO_EUR_TICKET,
  '0xa45ba19df569d536251ce65dd3120bf7873e14ec': PT_CELO_USD_TICKET
}, _Object$freeze));
/**
 * @param {Object} object
 * @param {string} key
 * @return {any} value
 *
 * Allows you to not worry about putting keys in the TOKEN_IMAGE_OVERRIDES object checksummed or lowercase
 */

function getParameterCaseInsensitive(object, key) {
  return object == null ? void 0 : object[Object.keys(object).find(function (k) {
    return k.toLowerCase() === key.toLowerCase();
  })];
}

var DEFAULT_INPUT_CLASS_NAME = 'w-full py-2 px-5 text-inverse trans outline-none focus:outline-none active:outline-none leading-none';
var DEFAULT_INPUT_LABEL_CLASS_NAME = 'mt-0 mb-1 text-xs';
var DEFAULT_INPUT_GROUP_CLASS_NAME = 'trans';
var HOTKEYS_KEY_MAP = {
  TOGGLE_THEME: 'ctrl+shift+t'
};
var POOL_ADDRESS = '0x0cec1a9154ff802e7934fc916ed7ca50bde6844e';
var GOVERNANCE_CONTRACT_ADDRESSES = {
  1: {
    GovernorAlpha: '0xB3a87172F555ae2a2AB79Be60B336D2F7D0187f0',
    GovernanceToken: '0x0cEC1A9154Ff802e7934Fc916Ed7Ca50bDE6844e',
    GovernanceReserve: '0xdb8E47BEFe4646fCc62BE61EEE5DF350404c124F'
  },
  4: {
    GovernorAlpha: '0x9B63243CD27102fbEc9FAf67CA1a858dcC16Ee01',
    GovernanceToken: '0xc4E90a8Dc6CaAb329f08ED3C8abc6b197Cf0F40A',
    GovernanceReserve: '0xA5224da01a5A792946E4270a02457EB75412c84c'
  }
};

var PoolIcon = function PoolIcon(props) {
  return React__default.createElement(TokenIcon, Object.assign({}, props, {
    chainId: utilities.NETWORK.mainnet,
    address: POOL_ADDRESS
  }));
};

var DefaultNetworkLogo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAQCAYAAAAbBi9cAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH5SURBVHgBlVNBchMxEJyZtVO+ZbkA4YL5gXlB/IM4V8pr1i+InA/EvCD6QbYCxZXkB+YHmxckF7ANl6U4QKUiTWYkex1XKi5nLiuNVj3dPSOARZj+j95oMB3DFmH6857JZuZhjsJBPm0jNo+YoNgGyH55dYFAB6Y/7a4B4R2N2cHIFns3CroJxOS/OvrlxA0J6agG0otMnNqvL8vAzNO3TUDk+ESZaFGP/mrJisBDjtA4C8xccsbkDzcB+WRniESnCz0FEAavCDnZZ/r7PTBD/2cpz3yIElaSJCcNscWLisFfLlkhQztiIqS2eFeBgy4wTJbMYMdVZjA/MYNZeZzNg1ykRmTiYYKEvZADvNYiJJcriJk2MJcrDq0KGbv2/HVHvdBCwiQwhwbcMMJuwBQVNaNwj7FCau4uQGMOOZWLXZUPCUyISc7/S2GXPmoCsMcIpGzc+7AEd4n+9iAY74UJu09RkcyQ2nDXbMvmKtZK3ip4g5HLODutEvytejAGallVHC7pvjb8ehgJQ48TrvP6n3o0kdnJ627I6Ot6AbIWmlOpAsKhu/JUQP0L0pLWhXw/SrXUnu8JG9zXNTwVXrqFHKQiojwrtvWZyX6a4+z3KTwjTDbNR4OZXZmtlD+/EU+4owO3FUh45CRs/o3XgDQ4aR7CM0I7+tDHexnEAHkQhKEOAAAAAElFTkSuQmCC";

var EthLogo = "data:image/png;base64,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";

var BscLogo = "data:image/png;base64,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";

var PoALogo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDA2IDc5LjE2NDc1MywgMjAyMS8wMi8xNS0xMTo1MjoxMyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIyLjMgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Njg5OEQ2Nzk4RjRFMTFFQkIxNjlGNkQ5MDYwMjQ4NTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Njg5OEQ2N0E4RjRFMTFFQkIxNjlGNkQ5MDYwMjQ4NTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2ODk4RDY3NzhGNEUxMUVCQjE2OUY2RDkwNjAyNDg1MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2ODk4RDY3ODhGNEUxMUVCQjE2OUY2RDkwNjAyNDg1MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pl2ZzAQAABMxSURBVHja7J0LkF1VlYZX3+6ku/NEEyIRCKSS8DIPHRB5BWWKBIKAFMMEEwaQEARKjYzMUFOAMEMxSjlagyIlqBCZaEBnFGGUV+Qh+ABkpgzJACFAXmBqMIl5dvft249ZK2e30zS3O/dxzr1nn/191F/dTXVun7v2Wv/de59z1mno7e0VAAiTHCEAwAAAIECaCIH3DFdNUh2qOkg1zml/93W8+9qiGu3GvFk1YsDrtKnyqi7VLlWHaqtqi/v6R/fV9KZqvWqjqpMh8JcG9gD8GCfVZNVM1QzVNPezFf376ziT61H9wZnBOtVa1SrVi+5nkgsDgApmZbNUx6o+6Ip+umqUZ+9jt2q1M4Pfq55XrXQzDMAAwGGFfYJqtuqjqmNUrRl9r+2qF1S/VD2j+o0zCsAAgsGm60erTlPNUR3n1vEhUlD9VrVC9ajqv9yyAjCATGGf6KerzlR9XPU+QlKU/1X9XPUz1SNuxgAYgJc0u0/5+aqzJdqBh9KxMxEPqn7kZgd5QoIB+DC9t2n9QtUnVGMJSSzsUD2gulf1GMsEDCBtHKz6lGqxROfkITns2oO7VEtVmwgHBlAvmtx6/tNuqt9ISGpKt1safNvtG3B6EQOoCbaWv1R1leoQwpEKNqhudTODXYQDA0gCu+Juiepy1X6EI5VsV92p+oZEVygCBlA1h6v+QaKNveGEwwvs/oTlqn9WvUY4MIBKC/961QLW995i+wL3qG6W6H4FwAD2ie3i36C6WLhbMkszAtsf+JJEdzICBvAu9nOf+J+R6NZZyB52i/PtbkawnXBgAOI+5e1U3j9JdO88ZB/rcXCjRKcQuzCAcPmY6jaJbreF8Pgf1WdVT4UagFBbgk1QfV/1JMUfNB9wOfADlxMYQABcpHpJdQH5D46FLicuZgmQXayF1h2queQ7DIH1JrCLvdYxA8iIyUl02e5qih9KYI7Llatc7jAD8JiJqu9R+FDFbMCWBZuZAfjHORI1pKT4oZrZwIsulzAAT7B+93Z+937hvD5Uz3iXS3fKu5+lwBIgZRyh+onqSPIWEuBl1bmqV5gBpA+7aed3FD8kyJEuxxZgAOnB7tT7mkS3f44iRyFhRrlc+5pk4C5R35cA71X9UHUqeQl14HGJuj5vwwBqzxTVQ6rDyEOoI6+qzlC9zhKgdhwv0RNlKH6oN4e5XDweA6gN57mp1/7kHqSE/V1OnocBJMvVbs3fSs5Bymh1uXk1BpAM1uDxqxLuLczgRz1Zjn7JlwP2YRPQbsiwnu9LyC/wCGtNbjcU9WIAlWPnWe0W3sXkE3iINSK1W4u7MYDyGSZRS+cF5BF4jD3Q1O4oLGAA5X3y29VW88kfyAD2iPOFaZwJ5FJa/PdQ/JAh5rucbsQA9jEjUX1L6NcH2eMCl9sNGMDg3KK6jFyBjHKZy3EMoAj2AM5ryBHIONe4XE/HlDslm4A2PVomATRhBJDo2oALJXoeQfAG8Jeqh4VHb0NY2ANL56meCNkApkrUYWU/8gECZIfqGNVrIe4BjHOf/BQ/hMpYVwPjQjOARrf+mUoOQOBMdbXQGJIB2KO4T2PsAfZymquJIPYA7CEL1rqbHX+A/8cK0VqO/zTLBmDtk553ax8AeCe2KXisRH0GM7cEGCnRE1YofoDijHWz4xFZNICvq45ijAGG5AMSNRPJ1BLA7ulfztgClIzdPnxvFgxgkmqlcL4foNz9gFmqDT4vAWyn/3sUP0BF+wFLk67RpA3g86pTGEuAijjF1ZCXS4DJqlUS7f4DQGXsUc1UveHbDOAOih+gaka6WmrwyQAuUs1l7ABiYY5E/QO8WAJMUL0kdbzDCSCDbJXoOpq30z4D+FeKHyB2rKZuTfsMYLbql8KNPgBJYR20nkyjAdhswm70OZoxAkiM1aoPqbrStgRYRPEDJM501ZVpmwGMUa1RHcD4ACSObQhaJ6HtaZkBXE/xA9SMca7mUjEDOFCirqYtjAtAzcirpqk21XsGcB3FD1BzmlU31nsGcKhb+/NQD4DaY2cCprsarMsM4HqKH6BuNKluqNcMwHYhX3YHkWksRHt25qW3R2K7xMleq2VEkwxvaeRYPTjWFNMtURuxNZU6SDVr/6YQImxJesPCFbJza4c0NsVz4qRtd0HOXzJTzlx0JMfqwbGmGHO6a1UX19IArM3XBaFE2D6pLEm3b+mQpmG5mJK/U9rbChyrJ8eacqx/4BdVG2tlAF9QDQspwvYJZUkaV6La6+RyDRyrR8ea8r2Av1MtKfcfVhJ16+93KfsvAKniEqmg92YlBrBYNYp4A6SKUa42EzUAm2p8jlgDpJLPlbusL9cAzpZoAxAA0sckV6OJGcAVxBgg1VyRlAFMUZ1KfAFSjdXotCQMwBp+0OoLIN00uFqN1QDsaqOLiS2AF1zoajY2A7C+5AcSVwAvONDVbGwGsJCYAnjFJ+MygBGqc4gngFdYzTbHYQBnqkYTTwCvsMeLnx6HAcwnlgBeMr9aA7Dp/zziCOAlZ6laqzGAec4EAMA/bOl+RjUGcBYxBPB+FlCRAeSY/gN4z7yh6nyoWwc/rJpA/KLWVdZrztpNxda6akenFPLdxJW4Js0EV8vPlWsAc4hdREtrk8xfMkPybV3SEFO7qUK+R2adNJG4EtdaMKcSA5hL3CKsxfRZi44iEMTVV6yWby5nD8DaCx1H3AAywXEySBu/wQzgBAms6y9AhrFaPrEcAziZmAFkipPLMYDZxAsgU8wu1QBsY/AY4gWQKY6WIpv+xQxglnD5L0DWGOFqe58G8BFiBZBJPlLqDAAAskdJM4AZxAkgk8zYlwHY9ZjTiRNAJpkuA1r7DzSAyUL7L4CsYrU9ZSgDYP0PENAyIFdkigAAgRrA4cQHINMcNpQBTCE+AJlm6lAGcBjxAcg00wYzALtf+L3EByDTWI2PLmYAk4gNQBAcXMwADiYu/tPYlEvkdXMx9eyDVPDnD/v+twfSSXEQrHvtnp156e2RAddRpYtcQ4Ps2qHHqf81xHic9lId7V3SvqcgXYWedI+VHl7LiKa9/QZhUCYWM4BxxKU4Vvw3LFwhO7d2JPYJG1el9vb0SvvuQqzH2Tp6uKxYvlaevv8N6Ul3/e9tM37+kply5qIjSdyh9wHeZQDjicvgMwAr/u1bOmLrX5+YBzTEvwyw17QZgBVX+s26U9rbCiTt0OyPAVSwtrbiT7sBJLa8yDV4sQ9g48N+xT7582w/xxIAAAPAAAACNwAuAgIIg/cUM4AxxAUgCMYWM4AW4gIQBC3FDKCZuAAEQXMxA2giLgBBMLyYAYwkLgBB0FrMAAAgMDAAAAwAAAJidzED2ENcAIKgu5gBdBEXgCDoKGYAeeICEAT5YgbQQVwAwl0C7CQuAEFQdBNwG3EBCII/9X3T//LfrcSldlibrc6Obsl3dOn3MXWw6ZW9fQFHjB4eb1NQj44VSmIrBlBn8u3dMuukiTLjhPdJoTOeTpsNuQbpbO+SR+9dK/m2rthaY/l0rFC5AWwhLrWjM98tM048QM6+9KhYX7e7q0ee+skb0r6rEFtR+XSsUJ4B5DCA+i0BCvnu2F/XOvdaF+NQjxVK4o/FDIAlAEAYbCtmAJuJC0AQbC5mAJuIC0AQbMQAAMJlUzED2CVcDAQQwvp/VzEDMF4lPgCZZm3/HwYawOvEByDTvDaUAawhPgCZ5tWhDGA18QHINKuGMoCVxAcgXANYJ/12CAEgU1htvzGUAfSyDADILFbbPUMZwLumCACQzen/YAbAPgBANllZigE8R5wAMslzpc4A2ogVQKZoK3UGYA8IeYF4AWSK/5YiD/9pGuSXn1GdTMz8xFptdRV6Yns9e62eHlr3eM7Txf5n0xC/fB0x8w9r3zVmXMve7xub4nn267DmRmkdMYzgBmQAv1EVbOyJm1+MHNMsNy2fI702AYirg7e+VsuIJoLrL1bLvy7HAOzJIc+qZhM7/2YAo8Y2Ewjoz7PS72lA/RlqjvgYcQPIBIPW8lAGsIK4AWSCFZUYwO9UbxM7AK9529Vy2QZg20gPEz8Ar3lYBtwAVKoBGP9J/AC8Zsga3pcBmHtwWTCAn9j9/w9VYwBtLAMAvP70b6/GAIwfE0cAL/nRvn6hFAN4ULWHWAJ4xQ7VI3EYgBX/A8QTwCusZvNxGIDxfeIJ4BX3lfJLpRqAXUr4FjEF8IK3pMRL+Us1gG7VMuIK4AXLXM3GZgDGXRK1DQeA9GI1enepv1yOAdhDBX9BfAFSzeMy4AnAcRmAcQfxBUg13yrnl8s1ALsmYCMxBkglG12NJmYA1lX0NuIMkEpukyKdf4eikkZv31XdqBoVSlR7e0Xadhdkz85OaRoWT6PNPTs6pZDvDjpbiWus7Ha1KUkbwHaJdhmXhBLZltYmmb9khuTbuqQhF0+nzUK+R2adNDFoAyCusbLU1WZZNPT2VnRmb5JEZwXoGgxQf2zaP0Uq2J+rdN5lf2g5cQdIBfdKhZvzlc4AjKmqlytcRgBAPFi7r6NUayr5x9XsvNgS4N+IP0Bdua/S4q92BmAc6v74cMYBoObY6Y7pqlcqfYFqz72slzKuOwaAWFlWTfHHMQMwDpLo2uMWxgOgZlizj8NVG6p5kTiuvnhT9U3GA6Cm3F5t8cc1AzDGuL2AAxgXgMTZKtFZuO3VvlAupgPaqfoi4wJQE26Ko/jjnAH0mYk9g+wvGB+AxFit+pCUedNP0jMAwy5IuEroGgSQJEviKv64DcB4RkrsRgoAZWO19WScLxjnEqCPCaqXVOMYL4DYsDW/XfK7Oc4XzSVwoPY88i8wXgCxcm3cxZ/UDKCPR1VzGTeAqvmV6qMS7bN5YwCTVatUIxk/gIqxp/vOkjI6/dZ7CdDHOtX1jB9AVVyXVPEnPQPoMxh7lsApjCNA2diO/6lJTP1rZQDGIaqVqrGMJ0DJ7HBT/w1J/pFcDd6IvYErGU+Asrgy6eKvlQEY1rNsKWMKUBJ3u5pJnFosAfqwswHPS3QxAwAUxy6iO1a1pxZ/LFfDN2Zv6Fy3tgGA4uv+c2tV/LU2AMN6Blwi3DAEMJBeVxtravlHc3V4o/ervsx4A7yDL7vaqCm13APoT6PqIeFSYQDjMdUZEnX5DcIADLtb8FmJWhsBhIo9X+N41ZZ6/PF6GoC44n9BuEgIwsQ2/T4sCV7qm8Y9gIHuZ7ueneQCBEany/219TyIXAoC8YRqkXBmAMKh1+X8E/U+kFxKAvIDiRoeAITAtS7n60699wAG8hXV35MfkGH+RXVNWg4mbQbQoPq2ajF5Ahnku6pPp2m5mzYDMOwaAXvs+ELyBTLEctVFUodz/b4ZQJ8J2N1Qf03eQAb4d9WCtBW/kUtpwCxQFwjPGAD/uc/lcncaDy6X4sAVVH+juoscAk+52+VwIa0HmEt5AM01L1PdRi6BZ1jOLk7rJ78vBmDYJoU9D+0Wcgo84RaXs6m/uC2tm4CDcbVE51EbyDFI6YeVneP/qi8H7JsBGOeplqlayDdIER2qC1X/4dNB+2gAht0++aBqPHkHKcBu5T1b9VvfDtxXAzCmqB5WTSP/oI7Y3XzzVK/7ePA5jwNvAT9O9Tg5CHXicZeDr/v6BnKeD8A21emqW8lFqDG3utzb5vOb8HkJMBC7d+BO1ShyExJkt+oKScntvBjAO7GHjvxYdQR5CgnwiuqvJHp4RybIZWyAbGCOUX2HXIWY+Y7LrZey9KayNgPozzlu0DhVCNVgp/jscvSfZvHNZdkAjImqe1RzyGOogF9IdA//5qy+wVzGB9AG7jTV36rayGcokTaXM3OzXPwhzAD6M1miswTMBmAoVqguV60L4c3mAhrYdc7RP6XaSp7DALa53JgbSvGHNgPozwTV11WfJO9Boq49n1e9HdobD9UA+viY6naJrh+A8LBTep9RPRVqAHKBJ4AN/CyXBFuoh2Cwsf6sG/unQg5E6DOA/uynut4lRjPhyCR51TdVN6u2Ew4MoBiTVP8oUXOHJsKRCexBnEtd4b9JODCAUjjCzQgWsFTyli6JukfdpFpPODCASjhcooc52hmD4YTDm0/8+9wn/lrCgQHEwfsl6vR6udsvgPRh63q72Osbqj8QDgwgCUarLlVdpTqEcKSCDRI16LCHyOwiHBhALbANwo9L9LRXu9+gkZDUFHvgxqMSPU365269DxhAXThYdYmbGUwiHImyUaJHbpk2EQ4MIE3Y2QLrE2cbhp9QjSEksbBT9YBEG3uPqHoICQaQdpqdGZyvOkvoVVgutpb/meqHrujzhAQD8JVWZwZnuK8HEZKivOmK/SH3tZ2QYABZZIYzAtNJEu71BXa+/leu2E2rSA0MIDRsaXCi6mTVbIkaT7Zm9L3aJ/oLqmdUT6t+LVGbbcAAwDFMNVN1rOqD7vvpHu4hWGGvVr2o+r3qefd9gSHGAKDMcZKopdlMt3yY5n4+VKIrFOt1r4LtxtsVd+sl6qKz1k3jX3Q/k1wYACTMcGcEpgNV4yRqhT7efd+nvsepv6ffvxvpvt/j1uPGn9xXe9z11n7a4mTfv+WKfn2/fwcYAAD4xP8JMACzpv0Q0jw6SgAAAABJRU5ErkJggg==";

var XDaiLogo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFGmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDYgNzkuMTY0NzUzLCAyMDIxLzAyLzE1LTExOjUyOjEzICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMyAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMDQtMDZUMDk6NDA6MTAtMDc6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTA0LTA2VDEwOjEzOjM1LTA3OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTA0LTA2VDEwOjEzOjM1LTA3OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY4ZmI4YTZmLTY5NzctNDA0YS05NGUxLTY0Y2ZjMjY1MDI2MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2OGZiOGE2Zi02OTc3LTQwNGEtOTRlMS02NGNmYzI2NTAyNjIiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2OGZiOGE2Zi02OTc3LTQwNGEtOTRlMS02NGNmYzI2NTAyNjIiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjY4ZmI4YTZmLTY5NzctNDA0YS05NGUxLTY0Y2ZjMjY1MDI2MiIgc3RFdnQ6d2hlbj0iMjAyMS0wNC0wNlQwOTo0MDoxMC0wNzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjMgKE1hY2ludG9zaCkiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+s/PopQAAAc9JREFUaN7dmr9xwjAUhz0CI3gUOrKF2SA01GGCmC4dpCFHGjJAcmaBnNkAbwAb6EujS4AIZMmy0fPvTp3l82e9d++fkiSQgBQYA3NgB1TAkXNVwFY/kwFpEoOAAfCkP9BXlQZL7wEw1H82tJadAGnz+aB9tQcEPBpsvk3tgSw0RM799BzKmXfcXyUwkA7RDCYyiF8YST4Rxmd0dI5ZCpjUiRMV8etwM84Ar8jR5tZp1NJL+c20+LIupdS/vXX2OZjYsNFpTItPHt7frMsEMqqxz0GF92lEBqLOYotOoyWCAMxOQSpXkNF6dXNdBbHsG61Xzsmll1lFGldSCQGwDsjY2T8iVZ60VLJ2n0wKSUnsDk8/dOgLiOoVyLEvIL1xdufa3JSiNFGAdxVeAdGUNDZRgHflXilKZCAKyLySxghBUu80PiKQ/Wk9MhNcWOWX7VGppW56WbdvBYIsrk2hJIGoq006YCMomi9sLdODhJQE22gOmAio0bM+jBVy1xlJGWVt7jl6iwmm8RyxFA1h8BklwidqjuT2XXZGsI3YGl7hWHZwOhs6vJPSBtAW0xSqI6Bcm5zyBKt0GTFIYhB/F89yoDD401F/9E73CcYhzecHU3s6x1ZEzHwAAAAASUVORK5CYII=";

var PolygonLogo = "data:image/png;base64,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";

var CeloColoredLogo = "data:image/png;base64,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";

var _Object$freeze$1;
var NetworkIcon = function NetworkIcon(props) {
  var sizeClassName = props.sizeClassName,
      className = props.className,
      chainId = props.chainId,
      onClick = props.onClick;
  var src = NETWORK_MAPPING[chainId] || DefaultNetworkLogo;
  return React__default.createElement("img", {
    src: src,
    className: classnames('rounded-full inline-block', className, sizeClassName),
    onClick: onClick
  });
};
NetworkIcon.defaultProps = {
  sizeClassName: 'w-5 h-5'
};
var NETWORK_MAPPING = /*#__PURE__*/Object.freeze((_Object$freeze$1 = {}, _Object$freeze$1[utilities.NETWORK.mainnet] = EthLogo, _Object$freeze$1[utilities.NETWORK.rinkeby] = EthLogo, _Object$freeze$1[utilities.NETWORK.goerli] = EthLogo, _Object$freeze$1[utilities.NETWORK.kovan] = EthLogo, _Object$freeze$1[utilities.NETWORK.bsc] = BscLogo, _Object$freeze$1[utilities.NETWORK.poa] = PoALogo, _Object$freeze$1[utilities.NETWORK.xdai] = XDaiLogo, _Object$freeze$1[utilities.NETWORK.polygon] = PolygonLogo, _Object$freeze$1[utilities.NETWORK.mumbai] = PolygonLogo, _Object$freeze$1[utilities.NETWORK.celo] = CeloColoredLogo, _Object$freeze$1));

var CheckboxInputGroup = function CheckboxInputGroup(props) {
  var _marginClasses;

  var id = props.id,
      hint = props.hint,
      label = props.label,
      handleClick = props.handleClick,
      checked = props.checked;
  var marginClasses = props.marginClasses;
  var defaultClasses = 'font-bold flex justify-start items-start xs:items-center trans trans-faster cursor-pointer font-bold outline-none focus:outline-none hover:outline-none active:outline-none leading-none px-0 py-1';
  var roundedClasses = 'rounded-sm';
  marginClasses = (_marginClasses = marginClasses) != null ? _marginClasses : 'mt-1 mb-1 sm:mb-3 lg:mb-4';
  var textClasses = 'text-xxs';
  return React__default.createElement("div", {
    className: classnames(defaultClasses, textClasses, marginClasses, roundedClasses, {
      'text-white inner-lg': checked,
      'text-white': !checked
    }),
    onClick: handleClick
  }, React__default.createElement("div", {
    id: id,
    onClick: handleClick,
    className: classnames('flex items-center justify-center my-auto mr-3 leading-none')
  }, React__default.createElement("div", {
    className: classnames('flex items-center rounded-sm w-4 h-4 border-2 trans', {
      'text-white border-white hover:border-white': checked,
      'text-darkened border-white hover:border-green': !checked
    })
  }, React__default.createElement("svg", {
    className: classnames('relative check', {
      checked: checked
    }),
    width: '135',
    height: '110',
    viewBox: '0 0 135 110'
  }, React__default.createElement("path", {
    d: 'M96.8002 0L30.7002 66.1L0.200195 37.4'
  })))), React__default.createElement("div", {
    className: 'text-left flex flex-col items-start justify-start leading-snug'
  }, label), hint && React__default.createElement(Tooltip, {
    tip: hint,
    id: id
  }));
};

var DropdownInputGroup = function DropdownInputGroup(props) {
  // Dropdown Logic
  var id = props.id,
      formatValue = props.formatValue,
      label = props.label,
      placeHolder = props.placeHolder,
      values = props.values,
      current = props.current,
      onValueSet = props.onValueSet,
      disabled = props.disabled;

  var _useState = React.useState(current ? current : ''),
      currentValue = _useState[0],
      setCurrentValue = _useState[1];

  var handleChangeValueClick = function handleChangeValueClick(newValue) {
    setCurrentValue(newValue);
    onValueSet(newValue);
  };

  var valuesArray = [];

  if (typeof values === 'object') {
    valuesArray = Object.keys(values).map(function (v) {
      return v;
    });
  }

  var menuItems = valuesArray.map(function (valueItem) {
    var value = valueItem;
    var selected = value === currentValue;
    return React__default.createElement(menuButton.MenuItem, {
      key: id + "-value-picker-item-" + value,
      onSelect: function onSelect() {
        handleChangeValueClick(value);
      },
      className: classnames({
        selected: selected
      })
    }, formatValue ? formatValue(value) : value);
  }); // Styling

  var textClassName = props.textClassName,
      roundedClassName = props.roundedClassName,
      marginClassName = props.marginClassName,
      borderClassName = props.borderClassName,
      backgroundClassName = props.backgroundClassName,
      labelClassName = props.labelClassName,
      unitsClassName = props.unitsClassName,
      containerClassName = props.containerClassName,
      isError = props.isError,
      isSuccess = props.isSuccess;
  textClassName = textClassName ? textClassName : classnames('text-xs trans', {
    'text-whitesmoke': disabled || !currentValue
  });
  containerClassName = containerClassName ? containerClassName : 'w-full';
  roundedClassName = roundedClassName ? roundedClassName : 'rounded-full';
  marginClassName = marginClassName ? marginClassName : 'mb-2 lg:mb-2';
  borderClassName = borderClassName ? borderClassName : classnames('border', {
    'border-red': isError,
    'border-green-2': isSuccess,
    'border-transparent': !isError && !isSuccess,
    'hover:border-accent-3 focus-within:border-accent-3 focus-within:shadow-green': !disabled
  });
  backgroundClassName = backgroundClassName ? backgroundClassName : classnames(backgroundClassName, {
    'bg-grey': disabled
  });
  labelClassName = labelClassName ? labelClassName : classnames(DEFAULT_INPUT_LABEL_CLASS_NAME, {
    'cursor-not-allowed font-whitesmoke': disabled,
    'text-accent-1': !disabled
  });
  unitsClassName = unitsClassName ? unitsClassName : classnames('font-bold text-xs sm:text-sm whitespace-no-wrap', {
    'cursor-not-allowed font-whitesmoke': disabled,
    'font-white': !disabled
  });
  var className = classnames(DEFAULT_INPUT_GROUP_CLASS_NAME, containerClassName, textClassName, roundedClassName, marginClassName, borderClassName, backgroundClassName);
  var selectedItem = placeHolder ? placeHolder : null;

  if (currentValue) {
    selectedItem = formatValue ? formatValue(currentValue) : currentValue;
  }

  return React__default.createElement(React__default.Fragment, null, React__default.createElement(menuButton.Menu, {
    id: id
  }, function (_ref) {
    var isExpanded = _ref.isExpanded;
    return React__default.createElement(React__default.Fragment, null, React__default.createElement(menuButton.MenuButton, {
      className: classnames(className, 'focus:outline-none')
    }, React__default.createElement("div", {
      className: 'flex flex-col text-left'
    }, React__default.createElement("label", {
      htmlFor: id,
      className: labelClassName
    }, label), React__default.createElement("div", {
      className: 'w-full flex justify-between'
    }, React__default.createElement("div", {
      className: 'flex'
    }, selectedItem), React__default.createElement(FeatherIcon, {
      icon: isExpanded ? 'chevron-up' : 'chevron-down',
      className: 'relative w-4 h-4 sm:w-8 sm:h-8 inline-block my-auto',
      strokeWidth: '0.15rem'
    })))), React__default.createElement(menuButton.MenuPopover, {
      position: popover.positionMatchWidth
    }, React__default.createElement(menuButton.MenuItems, null, menuItems)));
  }));
};

function DropdownList(props) {
  var id = props.id,
      className = props.className,
      current = props.current,
      formatValue = props.formatValue,
      hoverTextColor = props.hoverTextColor,
      label = props.label,
      textColor = props.textColor,
      values = props.values,
      onValueSet = props.onValueSet,
      placeholder = props.placeholder;

  var handleChangeValueClick = function handleChangeValueClick(newValue) {
    onValueSet(newValue);
  };

  var valuesArray = [];

  if (Array.isArray(values)) {
    valuesArray = values;
  } else if (typeof values === 'object') {
    valuesArray = Object.keys(values).map(function (v) {
      return v;
    });
  }

  var menuItems = valuesArray.map(function (value) {
    var selected = value === current;

    if (value.groupHeader) {
      return React__default.createElement("div", {
        key: id + "-value-picker-group-header-" + value.groupHeader,
        className: 'opacity-50 text-accent-1 text-xs px-3 sm:px-5 pt-10'
      }, value.groupHeader);
    }

    return React__default.createElement(menuButton.MenuItem, {
      key: id + "-value-picker-item-" + JSON.stringify(value),
      onSelect: function onSelect() {
        handleChangeValueClick(value);
      },
      className: classnames({
        selected: selected
      }),
      disabled: value.disabled
    }, formatValue ? formatValue(value) : value);
  });
  var inactiveTextColorClasses = textColor + " hover:" + hoverTextColor;
  var activeTextColorClasses = hoverTextColor + " hover:" + hoverTextColor;
  var buttonText = '';

  if (label) {
    buttonText = label;
  } else if (current) {
    buttonText = formatValue(current);
  } else if (placeholder) {
    buttonText = placeholder;
  }

  return React__default.createElement(React__default.Fragment, null, React__default.createElement(menuButton.Menu, null, function (_ref) {
    var _classnames;

    var isExpanded = _ref.isExpanded;
    return React__default.createElement(React__default.Fragment, null, React__default.createElement(menuButton.MenuButton, {
      className: classnames(className, 'inline-flex items-center justify-center trans font-bold', (_classnames = {}, _classnames[inactiveTextColorClasses] = !isExpanded, _classnames[activeTextColorClasses] = isExpanded, _classnames))
    }, buttonText, React__default.createElement(FeatherIcon, {
      icon: isExpanded ? 'chevron-up' : 'chevron-down',
      className: 'relative w-4 h-4 inline-block ml-2',
      strokeWidth: '0.15rem'
    })), React__default.createElement(menuButton.MenuList, {
      className: id + " slide-down overflow-y-auto max-h-1/2"
    }, menuItems));
  }));
}

var InputLabel = function InputLabel(props) {
  var primary = props.primary,
      secondary = props.secondary,
      description = props.description,
      children = props.children,
      className = props.className;
  return React__default.createElement("div", {
    className: className
  }, primary && React__default.createElement("div", {
    className: 'font-bold mb-2 sm:mb-6 text-lg sm:text-3xl text-accent-1'
  }, primary), secondary && React__default.createElement("div", {
    className: 'font-bold mb-2 sm:mb-4 text-base sm:text-xl text-accent-1'
  }, secondary), description && React__default.createElement("div", {
    className: 'mb-4 sm:mb-4 text-sm sm:text-base text-accent-1'
  }, description), children);
};

var _excluded$2 = ["alignLeft", "label", "small", "large", "marginClassName", "paddingClassName", "borderClassName", "bgClassName", "inlineButton", "roundedClassName", "textClassName", "isError", "isLight", "register", "required", "pattern", "validate", "unsignedNumber", "unsignedWholeNumber", "rightLabel", "bottomRightLabel"],
    _excluded2$1 = ["autoFocus", "value"];

var sanitizeProps = function sanitizeProps(props) {
  var sanitizedProps = _objectWithoutPropertiesLoose(props, _excluded$2);

  return sanitizedProps;
};

var collectClassNames = function collectClassNames(props) {
  return classnames(DEFAULT_INPUT_CLASS_NAME, props.marginClassName, props.paddingClassName, props.borderClassName, props.bgClassName, props.textClassName, props.roundedClassName, props.className, {
    'text-red': props.isError
  });
};

var SimpleInput = function SimpleInput(props) {
  var autoFocus = props.autoFocus,
      value = props.value,
      inputProps = _objectWithoutPropertiesLoose(props, _excluded2$1);

  return React__default.createElement("input", Object.assign({}, inputProps, {
    autoFocus: autoFocus && reactDeviceDetect.isBrowser,
    value: value,
    className: DEFAULT_INPUT_CLASS_NAME
  }));
};
var RoundInput = function RoundInput(props) {
  var autoFocus = props.autoFocus,
      pattern = props.pattern,
      required = props.required,
      register = props.register,
      validate = props.validate;
  var className = collectClassNames(props);
  return React__default.createElement("input", Object.assign({}, sanitizeProps(props), {
    autoFocus: autoFocus && reactDeviceDetect.isBrowser,
    ref: register({
      required: required,
      pattern: pattern,
      validate: validate
    }),
    className: classnames(className, 'focus:outline-none')
  }));
};
RoundInput.defaultProps = {
  marginClassName: '',
  paddingClassName: 'px-8 py-3',
  borderClassName: 'border border-accent-3',
  bgClassName: 'bg-input',
  textClassName: 'text-xs',
  roundedClassName: 'rounded-full'
};
var RectangularInput = function RectangularInput(props) {
  var autoFocus = props.autoFocus,
      pattern = props.pattern,
      required = props.required,
      register = props.register,
      validate = props.validate;
  var className = collectClassNames(props);
  return React__default.createElement("div", {
    className: 'relative'
  }, React__default.createElement("div", {
    className: 'absolute',
    style: {
      top: 10,
      bottom: 10,
      left: 10
    }
  }, "PRZUSDC"), React__default.createElement("input", Object.assign({}, sanitizeProps(props), {
    autoFocus: autoFocus && reactDeviceDetect.isBrowser,
    ref: register({
      required: required,
      pattern: pattern,
      validate: validate
    }),
    className: classnames(className, 'focus:outline-none')
  })));
};
RectangularInput.defaultProps = {
  marginClassName: '',
  paddingClassName: 'px-8 py-3',
  borderClassName: 'border-2 border-accent-3',
  bgClassName: 'bg-transparent',
  textClassName: 'text-xs text-right',
  roundedClassName: 'rounded-lg'
};

var _excluded$3 = ["Input", "id", "label", "rightLabel", "disabled", "readOnly", "isError", "isSuccess", "large", "unit"],
    _excluded2$2 = ["containerTextClassName", "containerRoundedClassName", "containerMarginClassName", "containerBorderClassName", "containerBgClassName", "containerClassName", "labelClassName", "rightLabelClassName", "unitsClassName"];
var TextInputGroupType = /*#__PURE__*/Object.freeze({
  text: 'text',
  number: 'number'
});
var TextInputGroup = function TextInputGroup(props) {
  var Input = props.Input,
      id = props.id,
      label = props.label,
      rightLabel = props.rightLabel,
      disabled = props.disabled,
      readOnly = props.readOnly,
      isError = props.isError,
      isSuccess = props.isSuccess,
      large = props.large,
      unit = props.unit,
      classAndInputProps = _objectWithoutPropertiesLoose(props, _excluded$3);

  var containerTextClassName = classAndInputProps.containerTextClassName,
      containerRoundedClassName = classAndInputProps.containerRoundedClassName,
      containerMarginClassName = classAndInputProps.containerMarginClassName,
      containerBorderClassName = classAndInputProps.containerBorderClassName,
      containerBgClassName = classAndInputProps.containerBgClassName,
      containerClassName = classAndInputProps.containerClassName,
      labelClassName = classAndInputProps.labelClassName,
      rightLabelClassName = classAndInputProps.rightLabelClassName,
      unitsClassName = classAndInputProps.unitsClassName,
      inputProps = _objectWithoutPropertiesLoose(classAndInputProps, _excluded2$2);

  containerTextClassName = containerTextClassName ? containerTextClassName : classnames({
    'font-bold text-3xl': large,
    'text-xs': !large,
    'text-red-500': isError,
    'text-whitesmoke': disabled
  });
  containerRoundedClassName = containerRoundedClassName ? containerRoundedClassName : 'rounded-full';
  containerMarginClassName = containerMarginClassName ? containerMarginClassName : 'mb-2 lg:mb-2';
  containerBorderClassName = containerBorderClassName ? containerBorderClassName : classnames('border', {
    'border-red': isError,
    'border-green-2': isSuccess,
    'border-transparent': !isError && !isSuccess,
    'hover:border-accent-3 focus-within:border-accent-3 focus-within:shadow-green': !disabled
  });
  containerBgClassName = containerBgClassName ? containerBgClassName : classnames(containerBgClassName, {
    'bg-grey': disabled,
    'bg-card': readOnly
  });
  labelClassName = labelClassName ? labelClassName : classnames(DEFAULT_INPUT_LABEL_CLASS_NAME, {
    'cursor-not-allowed font-whitesmoke': disabled,
    'text-accent-1': !disabled
  });
  rightLabelClassName = rightLabelClassName ? rightLabelClassName : classnames(DEFAULT_INPUT_LABEL_CLASS_NAME, 'text-right', {
    'cursor-not-allowed font-whitesmoke': disabled,
    'text-accent-1': !disabled
  });
  unitsClassName = unitsClassName ? unitsClassName : classnames('font-bold text-xs sm:text-sm whitespace-no-wrap', {
    'cursor-not-allowed font-whitesmoke': disabled,
    'font-white': !disabled
  });
  containerClassName = classnames(DEFAULT_INPUT_GROUP_CLASS_NAME, containerClassName, containerTextClassName, containerRoundedClassName, containerMarginClassName, containerBgClassName);
  var icon, iconColor;

  if (isSuccess) {
    icon = 'check-circle';
    iconColor = 'stroke-current text-green-2';
  } else if (isError) {
    icon = 'slash';
    iconColor = 'stroke-current text-red';
  }

  return React__default.createElement("div", {
    className: containerClassName
  }, React__default.createElement("div", {
    className: classnames('flex flex-row', {
      'justify-between': rightLabel && label,
      'justify-end': rightLabel && !label
    })
  }, label && React__default.createElement("label", {
    htmlFor: id,
    className: labelClassName
  }, label), rightLabel && React__default.createElement("span", {
    className: rightLabelClassName
  }, rightLabel)), React__default.createElement("div", {
    className: 'flex justify-between'
  }, React__default.createElement(Input, Object.assign({}, inputProps, {
    id: id,
    disabled: disabled,
    readOnly: readOnly
  })), (unit || icon) && React__default.createElement("div", {
    className: 'pl-1 sm:pl-2'
  }, unit && React__default.createElement("span", {
    className: unitsClassName
  }, unit), icon && React__default.createElement(FeatherIcon, {
    icon: icon,
    className: classnames('w-4 sm:w-8', iconColor)
  }))));
};
TextInputGroup.defaultProps = {
  Input: RoundInput,
  type: TextInputGroupType.text
};

var Switch = function Switch(props) {
  var enabled = props.enabled,
      setEnabled = props.setEnabled,
      toggleBgClassName = props.toggleBgClassName,
      borderClassName = props.borderClassName;
  return React__default.createElement("label", {
    className: classnames('flex p-1 w-12 rounded-full transition-all', borderClassName),
    style: {
      width: '2.7rem'
    }
  }, React__default.createElement("input", {
    type: 'checkbox',
    className: 'opacity-0 h-0 w-0',
    checked: enabled,
    onChange: function onChange() {
      return setEnabled(!enabled);
    }
  }), React__default.createElement("span", {
    className: classnames("w-4 h-4 rounded-full transition-all transform", toggleBgClassName, {
      'translate-x-4': enabled,
      'translate-x-0 opacity-50': !enabled
    })
  }));
};
Switch.defaultProps = {
  toggleBgClassName: 'bg-inverse-purple',
  borderClassName: 'border'
};

var notificationBannerVisibleAtom = /*#__PURE__*/jotai.atom(false);
/**
 * A list of potential notification banners to display at the very top of the page.
 * NOTE: The layout component is currently hardcoded to support the height of
 * the checkly banner on desktop, mobile is dynamic.
 * @param {*} props
 * @returns
 */

var NotificationBannerList = function NotificationBannerList(props) {
  return React__default.createElement("div", {
    className: "flex flex-col w-full t-0 z-50"
  }, props.children);
};

/**
 * Default layout includes a page header, side nav for desktop screens and bottom nav for mobile
 * @param {*} props
 * @returns
 */

var DefaultLayout = function DefaultLayout(props) {
  var content = props.content,
      header = props.header,
      sideNav = props.sideNav,
      bottomNav = props.bottomNav,
      footer = props.footer,
      banner = props.banner,
      router = props.router;
  return React__default.createElement(AnimatedPageGrid, {
    router: router,
    banner: React__default.createElement(NotificationBannerList, null, banner),
    header: header,
    content: content,
    sideNavigation: sideNav,
    bottomNavigation: bottomNav,
    footer: footer
  });
};
/**
 * Simple layout does not include a sidebar or mobile navigation
 * Any navigation is expected to be floating or in the header
 * @param {*} props
 * @returns
 */

var SimpleLayout = function SimpleLayout(props) {
  var content = props.content,
      header = props.header,
      footer = props.footer,
      banner = props.banner;
  return React__default.createElement(SimplePageGrid, {
    banner: React__default.createElement(NotificationBannerList, null, banner),
    header: header,
    content: content,
    footer: footer
  });
}; //

/**
 * Generic page layout component
 * Small screens displays navigation at the bottom of the page
 * Anything larger than sm has a sidebar
 */

var DefaultPageGrid = function DefaultPageGrid(_ref) {
  var banner = _ref.banner,
      header = _ref.header,
      sideNavigation = _ref.sideNavigation,
      bottomNavigation = _ref.bottomNavigation,
      content = _ref.content,
      footer = _ref.footer;
  var screenSize = hooks.useScreenSize();

  if (screenSize <= hooks.ScreenSize.sm) {
    return React__default.createElement("div", {
      className: 'grid-page-wrapper'
    }, React__default.createElement("div", {
      className: 'grid-header-wrapper bg-body z-10'
    }, React__default.createElement("div", {
      className: 'grid-banner'
    }, banner), React__default.createElement("div", {
      className: 'grid-header w-full bg-body z-10 mx-auto l-0 r-0'
    }, header)), React__default.createElement(ContentWithFooter, {
      content: content,
      footer: footer
    }), React__default.createElement("div", {
      className: 'bottom-navigation fixed b-0'
    }, bottomNavigation));
  }

  return React__default.createElement("div", {
    className: 'grid-page-wrapper'
  }, React__default.createElement("div", {
    className: 'grid-header-wrapper bg-body z-10 w-full'
  }, React__default.createElement("div", {
    className: 'grid-banner'
  }, banner), React__default.createElement("div", {
    className: 'grid-header w-full bg-body z-10 mx-auto l-0 r-0'
  }, header)), React__default.createElement(ContentWithSideNavigation, {
    content: content,
    footer: footer,
    sideNavigation: sideNavigation
  }));
};
/**
 * Generic page layout component
 * Small screens displays navigation at the bottom of the page
 * Anything larger than sm has a sidebar
 */


var SimplePageGrid = function SimplePageGrid(_ref2) {
  var banner = _ref2.banner,
      header = _ref2.header,
      content = _ref2.content,
      footer = _ref2.footer;
  return React__default.createElement("div", {
    className: 'grid-page-wrapper'
  }, React__default.createElement("div", {
    className: 'grid-header-wrapper bg-body z-10'
  }, React__default.createElement("div", {
    className: 'grid-banner'
  }, banner), React__default.createElement("div", {
    className: 'grid-header w-full bg-body z-10 mx-auto l-0 r-0'
  }, header)), React__default.createElement(ContentWithFooter, {
    content: content,
    footer: footer
  }));
}; //

/**
 * Simple wrapper for PageGrid with animations on the page content
 * // TODO: Add back the router funnelling for the key!
 */


var AnimatedPageGrid = function AnimatedPageGrid(_ref3) {
  var banner = _ref3.banner,
      header = _ref3.header,
      sideNavigation = _ref3.sideNavigation,
      bottomNavigation = _ref3.bottomNavigation,
      content = _ref3.content,
      footer = _ref3.footer,
      router = _ref3.router;
  return React__default.createElement(DefaultPageGrid, {
    banner: banner,
    header: header,
    content: React__default.createElement(AnimateContent, {
      router: router
    }, content),
    footer: footer,
    sideNavigation: sideNavigation,
    bottomNavigation: bottomNavigation
  });
};
/**
 * Page content with a footer pushed to the bottom of the screen
 */


var ContentWithFooter = function ContentWithFooter(_ref4) {
  var content = _ref4.content,
      footer = _ref4.footer;
  return React__default.createElement("div", {
    className: 'grid-content-with-footer sticky pb-24 sm:pb-0'
  }, React__default.createElement(Content$1, null, content), React__default.createElement("div", {
    className: 'grid-footer'
  }, footer));
};
/**
 * Page content with a footer pushed to the bottom of the screen
 * and a navigation bar to the left side
 */


var ContentWithSideNavigation = function ContentWithSideNavigation(_ref5) {
  var content = _ref5.content,
      footer = _ref5.footer,
      sideNavigation = _ref5.sideNavigation;

  var _useAtom = jotai.useAtom(notificationBannerVisibleAtom),
      notificationBannerVisible = _useAtom[0];

  var top = notificationBannerVisible ? 184 : 138;
  return React__default.createElement("div", {
    className: 'desktop-content-wrapper flex justify-between w-full mx-auto pt-8'
  }, React__default.createElement("div", {
    className: 'fixed',
    style: {
      top: top,
      height: "calc(100% - " + top + "px)"
    }
  }, sideNavigation), React__default.createElement("div", {
    className: 'push-sidebar-padding flex flex-col flex-1'
  }, React__default.createElement(Content$1, null, content), footer));
};
/**
 * Lowest level wrapper of page content
 * Base padding so content isn't touching the edge of the screen
 */


var Content$1 = function Content(_ref6) {
  var children = _ref6.children;
  return React__default.createElement("div", {
    className: 'grid-content p-4 sm:pt-0 sm:px-8 lg:pt-0 lg:px-10 text-inverse max-w-5xl lg:max-w-6xl w-full mx-auto lg:ml-auto'
  }, children);
};
/**
 * Simple wrapper for Content with animation
 */


var AnimateContent = function AnimateContent(props) {
  var shouldReduceMotion = hooks.useReducedMotion();
  var router = props.router;
  return React__default.createElement(framerMotion.AnimatePresence, {
    exitBeforeEnter: true
  }, React__default.createElement(framerMotion.motion.div, {
    id: 'content-animation-wrapper',
    key: router == null ? void 0 : router.route,
    transition: {
      duration: shouldReduceMotion ? 0 : 0.3,
      ease: 'easeIn'
    },
    initial: {
      opacity: 0
    },
    exit: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    className: 'mx-auto w-full'
  }, props.children));
};

var NotificationBannerContainer = function NotificationBannerContainer(props) {
  var canClose = props.canClose;

  var _useState = React.useState(false),
      userHasClosedBanner = _useState[0],
      setUserHasClosedBanner = _useState[1];

  if (userHasClosedBanner) return null;
  return React__default.createElement("div", {
    className: classnames("z-50 flex relative", props.className, {
      "text-center": !props.noCenter
    })
  }, React__default.createElement("div", {
    className: "max-w-screen-lg sm:px-6 py-2 sm:py-3 mx-auto flex-grow px-8"
  }, props.children), canClose && React__default.createElement(CloseBannerButton, {
    closeBanner: function closeBanner() {
      return setUserHasClosedBanner(true);
    }
  }));
};

var CloseBannerButton = function CloseBannerButton(props) {
  return React__default.createElement("button", {
    className: "absolute r-1 t-1 opacity-70 hover:opacity-100 cursor-pointer trans",
    onClick: function onClick() {
      return props.closeBanner();
    }
  }, React__default.createElement(FeatherIcon, {
    icon: "x",
    className: "h-4 w-4 sm:h-6 sm:w-6"
  }));
};

var Tagline = function Tagline(props) {
  return React__default.createElement("div", {
    className: 'text-accent-1 text-xs text-center mt-32 mb-8 mx-6 opacity-40'
  }, props.children);
};

var ButtonLink = /*#__PURE__*/React__default.forwardRef(function (props, ref) {
  var rel = props.rel,
      href = props.href,
      target = props.target,
      children = props.children;
  var classes = getLegacyButtonClassNames(props);
  console.log({
    rel: rel,
    href: href,
    target: target,
    children: children,
    ref: ref
  });
  return React__default.createElement("a", {
    ref: ref,
    children: children,
    rel: rel,
    href: href,
    className: classes,
    target: target
  });
});

var LinkTheme = /*#__PURE__*/Object.freeze({
  "default": 'text-inverse hover:text-highlight-1',
  accent: 'text-highlight-1 hover:text-inverse',
  light: 'text-accent-1 hover:text-highlight-1'
});
var ExternalLink = function ExternalLink(props) {
  return React__default.createElement("a", {
    className: classnames('trans', props.className, props.displayClassName, props.colorClassName || props.theme, {
      'underline': props.underline,
      'no-underline': !props.underline
    }),
    rel: 'noopener noreferrer',
    target: props.openInSameTab ? undefined : '_blank',
    href: props.href,
    title: props.title
  }, props.children, !props.openInSameTab && !props.noIcon && React__default.createElement(LinkIcon, {
    className: props.iconClassName
  }));
};
ExternalLink.defaultProps = {
  underline: false,
  noIcon: false,
  iconClassName: 'w-4 h-4 ml-1 mb-1',
  openInSameTab: false,
  theme: LinkTheme["default"],
  displayClassName: 'inline-block h-fit-content'
};

var BlockExplorerLink = function BlockExplorerLink(props) {
  var address = props.address,
      txHash = props.txHash,
      children = props.children,
      className = props.className,
      shorten = props.shorten,
      noIcon = props.noIcon,
      noText = props.noText,
      underline = props.underline,
      iconClassName = props.iconClassName,
      copyable = props.copyable,
      chainId = props.chainId,
      theme = props.theme;
  var url;

  if (txHash) {
    url = formatBlockExplorerTxUrl(txHash, chainId);
  } else if (address) {
    url = formatBlockExplorerAddressUrl(address, chainId);
  }

  var display = txHash || address;
  var defaultText = React__default.createElement("div", {
    className: 'flex'
  }, React__default.createElement("span", {
    className: classnames('inline-block', {
      'sm:hidden': !shorten
    })
  }, utilities.shorten({
    hash: display
  })), React__default.createElement("span", {
    className: classnames('hidden', {
      'sm:inline-block': !shorten
    })
  }, !noText && display));
  return React__default.createElement(React__default.Fragment, null, React__default.createElement(ExternalLink, {
    underline: underline,
    theme: theme,
    className: classnames("inline-flex", className),
    href: url,
    noIcon: noIcon,
    iconClassName: iconClassName,
    title: 'View on Block Explorer'
  }, !noText && (children || defaultText)), copyable && React__default.createElement(CopyIcon, {
    className: 'ml-2 my-auto',
    text: display
  }));
};
BlockExplorerLink.defaultProps = {
  noIcon: false,
  noText: false,
  noUnderline: false,
  theme: LinkTheme["default"],
  iconClassName: 'h-4 w-4 ml-1 my-auto'
};
var formatBlockExplorerTxUrl = function formatBlockExplorerTxUrl(tx, networkId) {
  try {
    var blockExplorerUrl = evmChainsExtended.getChain(Number(networkId)).blockExplorerUrls[0];
    return blockExplorerUrl + "/tx/" + tx;
  } catch (e) {
    throw new Error('Chain ID not supported');
  }
};
var formatBlockExplorerAddressUrl = function formatBlockExplorerAddressUrl(address, networkId) {
  try {
    var blockExplorerUrl = evmChainsExtended.getChain(Number(networkId)).blockExplorerUrls[0];
    return blockExplorerUrl + "/address/" + address;
  } catch (e) {
    throw new Error('Chain ID not supported');
  }
};

var InternalLink = function InternalLink(props) {
  return React__default.createElement(props.Link, {
    href: props.href,
    as: props.as,
    shallow: props.shallow
  }, React__default.createElement("a", {
    className: classnames('trans', props.className, props.displayClassName, props.colorClassName || props.theme, {
      'underline': props.underline,
      'no-underline': !props.underline
    }),
    title: props.title
  }, props.children));
};
InternalLink.defaultProps = {
  underline: false,
  noIcon: false,
  iconClassName: 'w-4 h-4 ml-1',
  openInSameTab: false,
  theme: LinkTheme["default"],
  displayClassName: 'inline-block h-fit-content'
};

var THEME = 'theme';

(function (ColorTheme) {
  ColorTheme["light"] = "light";
  ColorTheme["dark"] = "dark";
})(exports.ColorTheme || (exports.ColorTheme = {}));

var ThemeContext = /*#__PURE__*/React__default.createContext({
  theme: /*#__PURE__*/Cookies.get(THEME) || exports.ColorTheme.dark,
  toggleTheme: function toggleTheme() {}
});
function ThemeContextProvider(props) {
  var _useState = React.useState(exports.ColorTheme.dark),
      theme = _useState[0],
      setTheme = _useState[1];

  var cookieOptions = hooks.useCookieOptions();
  React.useEffect(function () {
    var stored = Cookies.get(THEME);
    var body = document.body;
    body.classList.add('theme-dark');

    if (typeof window !== 'undefined' && window.matchMedia) {
      var setThemeAutomatically = function setThemeAutomatically(newValue) {
        if (newValue === exports.ColorTheme.dark) {
          body.classList.add('theme-dark');
          body.classList.remove('theme-light');
          setTheme(exports.ColorTheme.dark);
        } else if (newValue === exports.ColorTheme.light) {
          body.classList.add('theme-light');
          body.classList.remove('theme-dark');
          setTheme(exports.ColorTheme.light);
        }
      }; // onLoad


      setThemeAutomatically(stored);
    }
  }, []);

  var toggleTheme = function toggleTheme() {
    var body = document.body;

    if (body.classList.contains('theme-dark')) {
      body.classList.remove('theme-dark');
      body.classList.add('theme-light');
      Cookies.set(THEME, exports.ColorTheme.light, cookieOptions);
      setTheme(exports.ColorTheme.light);
    } else {
      body.classList.remove('theme-light');
      body.classList.add('theme-dark');
      Cookies.set(THEME, exports.ColorTheme.dark, cookieOptions);
      setTheme(exports.ColorTheme.dark);
    }
  };

  var handlers = {
    TOGGLE_THEME: toggleTheme
  };
  return React__default.createElement(ThemeContext.Provider, {
    value: {
      theme: theme,
      toggleTheme: toggleTheme
    }
  }, React__default.createElement(reactHotkeys.GlobalHotKeys, {
    keyMap: HOTKEYS_KEY_MAP,
    handlers: handlers
  }), props.children);
}

var LoadingDots = function LoadingDots(props) {
  return React__default.createElement("span", {
    className: classnames('lds-ellipsis', props.className)
  }, React__default.createElement("span", null), React__default.createElement("span", null), React__default.createElement("span", null), React__default.createElement("span", null));
};

var MobileLogoDark = "data:image/svg+xml,%3Csvg%20width%3D%22131%22%20height%3D%22224%22%20viewBox%3D%220%200%20131%20224%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M65.4128%200.503418C101.497%200.503418%20130.749%2030.2437%20130.749%2066.9303V105.126C130.749%20141.812%20101.497%20171.553%2065.4128%20171.553C59.7447%20171.553%2054.2453%20170.819%2049.0013%20169.44L49.0019%20173.949C49.0019%20200.786%2027.4996%20222.593%200.810361%20223.027L0%20223.033V76.8943L0.0748859%2076.8926L0.0768772%2066.9303C0.0768772%2030.2437%2029.3288%200.503418%2065.4128%200.503418ZM65.4128%2050.3236C56.3918%2050.3236%2049.0788%2057.7586%2049.0788%2066.9303V105.126C49.0788%20114.297%2056.3918%20121.732%2065.4128%20121.732C74.4338%20121.732%2081.7468%20114.297%2081.7468%20105.126V66.9303C81.7468%2057.7586%2074.4338%2050.3236%2065.4128%2050.3236Z%22%20fill%3D%22white%22%2F%3E%3C%2Fsvg%3E";

var MobileLogo = "data:image/svg+xml,%3Csvg%20width%3D%22131%22%20height%3D%22224%22%20viewBox%3D%220%200%20131%20224%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M65.4128%200.503418C101.497%200.503418%20130.749%2030.2437%20130.749%2066.9303V105.126C130.749%20141.812%20101.497%20171.553%2065.4128%20171.553C59.7447%20171.553%2054.2453%20170.819%2049.0013%20169.44L49.0019%20173.949C49.0019%20200.786%2027.4996%20222.593%200.810361%20223.027L0%20223.033V76.8943L0.0748859%2076.8926L0.0768772%2066.9303C0.0768772%2030.2437%2029.3288%200.503418%2065.4128%200.503418ZM65.4128%2050.3236C56.3918%2050.3236%2049.0788%2057.7586%2049.0788%2066.9303V105.126C49.0788%20114.297%2056.3918%20121.732%2065.4128%20121.732C74.4338%20121.732%2081.7468%20114.297%2081.7468%20105.126V66.9303C81.7468%2057.7586%2074.4338%2050.3236%2065.4128%2050.3236Z%22%20fill%3D%22%2346279A%22%2F%3E%3C%2Fsvg%3E";

function LoadingLogo(props) {
  var _useContext = React.useContext(ThemeContext),
      theme = _useContext.theme;

  return React__default.createElement("div", {
    className: classnames('flex flex-col', props.className),
    style: {
      width: 'min-content'
    }
  }, React__default.createElement("img", {
    src: theme === 'dark' ? MobileLogoDark : MobileLogo,
    className: 'w-8 mx-auto',
    style: {
      borderWidth: 0
    }
  }), React__default.createElement(LoadingDots, null));
}

var LoadingScreen = function LoadingScreen(props) {
  var isInitialized = props.isInitialized;

  if (!isInitialized) {
    return React__default.createElement("div", {
      className: 'w-screen h-screen flex flex-col justify-center'
    }, React__default.createElement(LoadingLogo, {
      className: 'mx-auto'
    }));
  }

  return props.children;
};

function ThemedClipSpinner(props) {
  var sizeClassName = props.sizeClassName,
      size = props.size,
      className = props.className;
  return React__default.createElement("div", {
    className: classnames('lds-dual-ring', className, size ? '' : sizeClassName),
    style: size ? {
      width: size,
      height: size
    } : undefined
  });
}
ThemedClipSpinner.defaultProps = {
  sizeClassName: 'w-5 h-5'
};

var Modal = function Modal(props) {
  var isOpen = props.isOpen,
      closeModal = props.closeModal,
      children = props.children,
      label = props.label,
      className = props.className,
      widthClassName = props.widthClassName,
      heightClassName = props.heightClassName,
      maxWidthClassName = props.maxWidthClassName,
      maxHeightClassName = props.maxHeightClassName,
      paddingClassName = props.paddingClassName,
      bgClassName = props.bgClassName,
      roundedClassName = props.roundedClassName,
      shadowClassName = props.shadowClassName,
      overflowClassName = props.overflowClassName,
      style = props.style;
  var shouldReduceMotion = hooks.useReducedMotion();

  if (!label) {
    console.warn('Modal required a label! <Modal /> with children:', children);
  }

  return React__default.createElement(Dialog, {
    "aria-label": label,
    isOpen: isOpen,
    onDismiss: closeModal
  }, React__default.createElement(framerMotion.motion.div, {
    id: 'modal-animation-wrapper',
    key: label,
    transition: {
      duration: shouldReduceMotion ? 0 : 0.1,
      ease: 'easeIn'
    },
    initial: {
      opacity: 0
    },
    exit: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    className: classnames('mx-auto relative', widthClassName, heightClassName, maxWidthClassName, maxHeightClassName, paddingClassName, bgClassName, roundedClassName, shadowClassName, overflowClassName, className),
    style: style
  }, React__default.createElement(CloseModalButton, {
    closeModal: closeModal
  }), children));
};
Modal.defaultProps = {
  noPad: false,
  noSize: false,
  bgClassName: 'bg-new-modal',
  roundedClassName: 'rounded-none sm:rounded-xl',
  maxWidthClassName: 'sm:max-w-lg',
  widthClassName: 'w-screen sm:w-full',
  heightClassName: 'h-screen sm:h-auto',
  maxHeightClassName: 'max-h-screen',
  paddingClassName: 'px-2 xs:px-8 py-10',
  shadowClassName: 'shadow-3xl',
  overflowClassName: 'overflow-y-auto'
};

var CloseModalButton = function CloseModalButton(props) {
  var closeModal = props.closeModal;
  return React__default.createElement("button", {
    className: 'my-auto ml-auto close-button trans text-inverse opacity-80 hover:opacity-100 absolute right-7 top-6',
    onClick: closeModal
  }, React__default.createElement(FeatherIcon, {
    icon: 'x',
    className: 'w-6 h-6'
  }));
};

/**
 * TODO: Add proposal count
 * @param {*} props
 * @returns
 */

var BottomNavContainer = function BottomNavContainer(props) {
  return React__default.createElement("nav", {
    className: 'w-screen flex justify-center items-center b-0 l-0 r-0 bg-card-selected sm:hidden z-20 pb-6',
    style: {
      height: 96
    }
  }, props.children);
};

var mobileNavClasses = 'relative font-bold w-32 h-full flex flex-col justify-center items-center px-2 text-xs pb-1 pt-2 px-3 trans outline-none focus:outline-none active:outline-none tracking-normal';
var BottomNavLink = function BottomNavLink(props) {
  var Link = props.Link,
      useRouter = props.useRouter;
  var router = useRouter();
  var isCurrentPage = props.isCurrentPage ? true : props.match ? router.pathname.match(props.match) : false;
  return React__default.createElement(Link, {
    href: props.href,
    as: props.as,
    shallow: true
  }, React__default.createElement("a", {
    className: classnames(mobileNavClasses, {
      'text-accent-4 hover:text-highlight-9': !isCurrentPage,
      'text-highlight-9 hover:text-highlight-9': isCurrentPage
    })
  }, props.children, React__default.createElement("span", {
    className: 'capitalize'
  }, props.label)));
}; // Icons

var BottomVoteIcon = function BottomVoteIcon() {
  return React__default.createElement("div", {
    className: 'flex items-center justify-center h-6'
  }, React__default.createElement("svg", {
    className: 'fill-current stroke-current',
    width: '20',
    height: '25',
    viewBox: '0 0 20 25',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React__default.createElement("path", {
    d: 'M16.994 10.3965C16.9924 10.3869 16.9903 10.3776 16.988 10.3682C16.9854 10.3575 16.9847 10.3466 16.9811 10.3361L15.101 4.78371C15.0514 4.63717 14.9176 4.53904 14.7675 4.53904H11.3679L8.04561 1.1069C7.90755 0.964407 7.68401 0.964288 7.54595 1.10702L4.89902 3.84348C4.83275 3.91199 4.79547 4.00488 4.79547 4.10182C4.79547 4.19876 4.83275 4.29165 4.89902 4.36016L5.07221 4.53904H3.23034C3.08009 4.53904 2.94629 4.63729 2.8967 4.78394L1.01979 10.3363C1.01752 10.343 1.0173 10.3501 1.01543 10.3569C1.011 10.3727 1.00746 10.3887 1.00512 10.4054C1.00364 10.4161 1.00256 10.4267 1.002 10.4375C1.00163 10.4445 1 10.451 1 10.458V19.6346C1 19.8365 1.15819 20 1.35343 20H16.6466C16.8418 20 17 19.8365 17 19.6346V10.458C17 10.4539 16.999 10.4502 16.9988 10.4461C16.9984 10.4295 16.9967 10.4131 16.994 10.3965ZM7.79595 1.88191L11.4957 5.70383L9.93702 7.31523H8.76018L5.64879 4.10182L7.79595 1.88191ZM3.48126 5.26981H5.77914L7.75993 7.31523H6.71461C6.51937 7.31523 6.36118 7.47878 6.36118 7.68062C6.36118 7.88246 6.51937 8.04601 6.71461 8.04601H8.61395H10.0834H11.2864C11.4817 8.04601 11.6399 7.88246 11.6399 7.68062C11.6399 7.47878 11.4817 7.31523 11.2864 7.31523H10.9366L12.2454 5.96217C12.3834 5.81956 12.3834 5.58822 12.2454 5.44549L12.0756 5.26981H14.5168L16.1494 10.0914H1.85136L3.48126 5.26981ZM16.2931 19.2692H1.70686V10.8234H16.2931V19.2692V19.2692Z'
  })));
};
var BottomAccountIcon = function BottomAccountIcon() {
  return React__default.createElement("div", {
    className: 'flex items-center justify-center h-6'
  }, React__default.createElement("svg", {
    className: 'fill-current ',
    width: '20',
    height: '25',
    viewBox: '0 0 20 20',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React__default.createElement("path", {
    d: 'M4 13.9844C5.46875 16.1406 7.46875 17.2188 10 17.2188C12.5312 17.2188 14.5312 16.1406 16 13.9844C15.9688 13.1094 15.2656 12.375 13.8906 11.7812C12.5156 11.1875 11.2188 10.8906 10 10.8906C8.78125 10.8906 7.48438 11.1875 6.10938 11.7812C4.73438 12.3438 4.03125 13.0781 4 13.9844ZM12.1094 3.90625C11.5156 3.3125 10.8125 3.01562 10 3.01562C9.1875 3.01562 8.48438 3.3125 7.89062 3.90625C7.29688 4.5 7 5.20312 7 6.01562C7 6.82812 7.29688 7.53125 7.89062 8.125C8.48438 8.71875 9.1875 9.01562 10 9.01562C10.8125 9.01562 11.5156 8.71875 12.1094 8.125C12.7031 7.53125 13 6.82812 13 6.01562C13 5.20312 12.7031 4.5 12.1094 3.90625ZM2.92188 2.96875C4.89062 1 7.25 0.015625 10 0.015625C12.75 0.015625 15.0938 1 17.0312 2.96875C19 4.90625 19.9844 7.25 19.9844 10C19.9844 12.75 19 15.1094 17.0312 17.0781C15.0938 19.0156 12.75 19.9844 10 19.9844C7.25 19.9844 4.89062 19.0156 2.92188 17.0781C0.984375 15.1094 0.015625 12.75 0.015625 10C0.015625 7.25 0.984375 4.90625 2.92188 2.96875Z'
  })));
};
var BottomPodsIcon = function BottomPodsIcon() {
  return React__default.createElement("div", {
    className: 'stroke-current fill-current relative h-6'
  }, React__default.createElement("svg", {
    width: '15',
    height: '21',
    viewBox: '0 0 15 21',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React__default.createElement("path", {
    d: 'M12.7381 3.8196H11.1519V3.18342H11.4692C11.6446 3.18342 11.7864 3.04123 11.7864 2.86532V0.956765C11.7864 0.78086 11.6446 0.638672 11.4692 0.638672H3.85522C3.67979 0.638672 3.53798 0.78086 3.53798 0.956765V2.86532C3.53798 3.04123 3.67979 3.18342 3.85522 3.18342H4.17247V3.8196H2.58624C1.71159 3.8196 1 4.53309 1 5.41007V18.77C1 19.647 1.71159 20.3605 2.58624 20.3605H12.7381C13.6128 20.3605 14.3244 19.647 14.3244 18.77V5.41007C14.3244 4.53309 13.6128 3.8196 12.7381 3.8196ZM4.17247 1.27486H11.1519V2.54723H4.17247V1.27486ZM4.80697 3.18342H10.5174V3.8196H4.80697V3.18342ZM2.58624 4.45579H12.7381C13.2629 4.45579 13.6899 4.88394 13.6899 5.41007V12.2618C13.3527 11.9583 12.9088 11.7719 12.4209 11.7719C11.7591 11.7719 11.176 12.1126 10.8347 12.6276C10.4933 12.1123 9.9102 11.7719 9.24843 11.7719C8.58665 11.7719 8.00355 12.1126 7.66219 12.6276C7.32083 12.1123 6.73773 11.7719 6.07596 11.7719C5.41418 11.7719 4.83108 12.1126 4.48972 12.6276C4.14836 12.1123 3.56526 11.7719 2.90348 11.7719C2.41556 11.7719 1.97173 11.9583 1.63449 12.2618V5.41007C1.63449 4.88394 2.06151 4.45579 2.58624 4.45579ZM13.6899 13.6805C13.6899 14.3822 13.1207 14.9529 12.4209 14.9529C11.7211 14.9529 11.1519 14.3822 11.1519 13.6805C11.1519 12.9788 11.7211 12.4081 12.4209 12.4081C13.1207 12.4081 13.6899 12.9788 13.6899 13.6805ZM10.5174 13.6805C10.5174 14.3822 9.94827 14.9529 9.24843 14.9529C8.54858 14.9529 7.97944 14.3822 7.97944 13.6805C7.97944 12.9788 8.54858 12.4081 9.24843 12.4081C9.94827 12.4081 10.5174 12.9788 10.5174 13.6805ZM7.34494 13.6805C7.34494 14.3822 6.7758 14.9529 6.07596 14.9529C5.37611 14.9529 4.80697 14.3822 4.80697 13.6805C4.80697 12.9788 5.37611 12.4081 6.07596 12.4081C6.7758 12.4081 7.34494 12.9788 7.34494 13.6805ZM4.17247 13.6805C4.17247 14.3822 3.60333 14.9529 2.90348 14.9529C2.20364 14.9529 1.63449 14.3822 1.63449 13.6805C1.63449 12.9788 2.20364 12.4081 2.90348 12.4081C3.60333 12.4081 4.17247 12.9788 4.17247 13.6805ZM12.7381 19.7243H2.58624C2.06151 19.7243 1.63449 19.2961 1.63449 18.77V15.0992C1.97173 15.4026 2.41556 15.5891 2.90348 15.5891C3.56526 15.5891 4.14836 15.2484 4.48972 14.7334C4.83108 15.2487 5.41418 15.5891 6.07596 15.5891C6.73773 15.5891 7.32083 15.2484 7.66219 14.7334C8.00355 15.2487 8.58665 15.5891 9.24843 15.5891C9.9102 15.5891 10.4933 15.2484 10.8347 14.7334C11.176 15.2487 11.7591 15.5891 12.4209 15.5891C12.9088 15.5891 13.3527 15.4026 13.6899 15.0992V18.77C13.6899 19.2961 13.2629 19.7243 12.7381 19.7243Z'
  })));
};
var BottomRewardsIcon = function BottomRewardsIcon() {
  return React__default.createElement("svg", {
    className: 'stroke-current fill-current relative h-6',
    width: '22',
    height: '17',
    viewBox: '0 0 22 17',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React__default.createElement("path", {
    d: 'M11.2857 15.6798L21 4.44828L18.441 1.34483L18.4658 1.3202L18.3168 1.17241L18.1677 1H3.8323L1 4.44828L10.7143 15.6798L10.9876 16L11.2857 15.6798ZM7.75776 4.25123L11.0124 1.78818L14.2671 4.25123H7.75776ZM11.3354 1.44335H17.6957L14.913 4.17734L11.3354 1.44335ZM7.13665 4.15271L4.5528 1.44335H10.7143L7.13665 4.15271ZM6.59006 4.25123H1.77019L3.98137 1.54187L6.59006 4.25123ZM14.6149 4.69458L11.0124 15.0887L7.40994 4.69458H14.6149ZM15.087 4.69458H20.205L11.6832 14.5222L15.087 4.69458ZM20.2547 4.25123H15.4845L18.118 1.66502L20.2547 4.25123ZM1.81988 4.69458H6.93789L10.3416 14.5222L1.81988 4.69458Z',
    strokeWidth: '0.6'
  }));
};
var BottomPoolsIcon = function BottomPoolsIcon() {
  return React__default.createElement("div", {
    className: 'flex items-center justify-center h-6'
  }, React__default.createElement("svg", {
    className: 'fill-current ',
    width: '24',
    height: '25',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React__default.createElement("path", {
    d: 'M2.59199 7C2.48021 7 2.36627 6.99068 2.25039 6.9719C1.82048 6.90055 1.50518 6.68775 1.22814 6.46833C0.968405 6.26262 0.923818 5.88431 1.1286 5.62337C1.33336 5.36244 1.70993 5.31765 1.96966 5.52338C2.14951 5.66579 2.29147 5.75913 2.44326 5.78434C2.70793 5.82724 2.91268 5.76202 3.10498 5.57271C3.25497 5.4257 3.40547 5.27006 3.55103 5.11955C3.63993 5.02759 3.7288 4.93569 3.81839 4.84472C4.33765 4.31681 5.0133 4.02359 5.72069 4.01935C6.42952 4.01478 7.10748 4.30032 7.63335 4.82243C7.75915 4.94697 7.8824 5.07464 8.0016 5.1981C8.11677 5.31737 8.22552 5.43003 8.33748 5.54131C8.66411 5.86632 9.10293 5.86623 9.4298 5.54134C9.55173 5.42005 9.6754 5.29217 9.79497 5.16847C9.9195 5.03965 10.0483 4.90645 10.1798 4.77571C11.2167 3.74527 12.8446 3.74217 13.8859 4.76861C14.0665 4.94589 14.2434 5.12945 14.4146 5.30697C14.476 5.37068 14.5375 5.43443 14.5992 5.49799C14.7818 5.68489 14.9858 5.78452 15.1879 5.78482C15.1882 5.78482 15.1885 5.78482 15.1887 5.78482C15.3928 5.78482 15.5998 5.68387 15.7876 5.49282C15.8886 5.38978 15.9891 5.28564 16.0895 5.18155C16.2152 5.05127 16.3451 4.91659 16.476 4.78444C17.5135 3.74214 19.1415 3.73823 20.1833 4.77451C20.3143 4.90474 20.4425 5.0374 20.5666 5.16573C20.6866 5.28988 20.8107 5.41827 20.9333 5.54019C21.2484 5.85413 21.6693 5.86481 22.0059 5.56784C22.2544 5.34854 22.6329 5.37321 22.8511 5.62289C23.0693 5.87257 23.0448 6.25273 22.7963 6.47197C21.9884 7.18468 20.8505 7.15225 20.0903 6.39495C19.9597 6.26509 19.8314 6.13237 19.7074 6.0041C19.5874 5.87992 19.4632 5.75152 19.3407 5.62963C18.7643 5.05632 17.8973 5.05828 17.3241 5.63423C17.1998 5.75971 17.0726 5.89156 16.9496 6.01902C16.8468 6.12554 16.744 6.23209 16.6403 6.33783C16.2281 6.75733 15.7128 6.98809 15.1887 6.98812C15.1879 6.98812 15.1871 6.98812 15.1863 6.98812C14.6636 6.9874 14.1511 6.75709 13.7431 6.33957C13.6791 6.27366 13.6166 6.20886 13.5542 6.14413C13.3811 5.96454 13.2175 5.79493 13.0479 5.62837C12.4686 5.05731 11.5981 5.05885 11.0222 5.6311C10.8992 5.75336 10.7746 5.88226 10.6542 6.00686C10.5306 6.13468 10.4028 6.26686 10.2724 6.39661C9.48011 7.18398 8.28616 7.18383 7.49495 6.39652C7.37446 6.27682 7.25621 6.15433 7.14186 6.03589C7.02199 5.91174 6.90877 5.79448 6.79202 5.67887C6.49528 5.38425 6.12077 5.22262 5.73614 5.22262C5.73339 5.22262 5.73066 5.22262 5.72791 5.22265C5.34047 5.22499 4.96482 5.39123 4.67021 5.69076C4.58295 5.77938 4.49662 5.86866 4.41023 5.95801C4.2592 6.11423 4.10298 6.27577 3.94239 6.43316C3.56232 6.80714 3.10037 6.99997 2.59199 7Z'
  }), React__default.createElement("path", {
    d: 'M2.59199 11C2.48021 11 2.36627 10.9907 2.25039 10.9719C1.82048 10.9005 1.50518 10.6877 1.22814 10.4683C0.968405 10.2626 0.923818 9.88431 1.1286 9.62337C1.33336 9.36244 1.70993 9.31765 1.96966 9.52338C2.14951 9.66579 2.29147 9.75913 2.44326 9.78434C2.70793 9.82724 2.91268 9.76202 3.10498 9.57271C3.25497 9.4257 3.40547 9.27006 3.55103 9.11955C3.63993 9.02759 3.7288 8.93569 3.81839 8.84472C4.33765 8.31681 5.0133 8.02359 5.72069 8.01935C6.42952 8.01478 7.10748 8.30032 7.63335 8.82243C7.75915 8.94697 7.8824 9.07464 8.0016 9.1981C8.11677 9.31737 8.22552 9.43003 8.33748 9.54131C8.66411 9.86632 9.10293 9.86623 9.4298 9.54134C9.55173 9.42005 9.6754 9.29217 9.79497 9.16847C9.9195 9.03965 10.0483 8.90645 10.1798 8.77571C11.2167 7.74527 12.8446 7.74217 13.8859 8.76861C14.0665 8.94589 14.2434 9.12945 14.4146 9.30697C14.476 9.37068 14.5375 9.43443 14.5992 9.49799C14.7818 9.68489 14.9858 9.78452 15.1879 9.78482C15.1882 9.78482 15.1885 9.78482 15.1887 9.78482C15.3928 9.78482 15.5998 9.68387 15.7876 9.49282C15.8886 9.38978 15.9891 9.28564 16.0895 9.18155C16.2152 9.05127 16.3451 8.91659 16.476 8.78444C17.5135 7.74214 19.1415 7.73823 20.1833 8.77451C20.3143 8.90474 20.4425 9.0374 20.5666 9.16573C20.6866 9.28988 20.8107 9.41827 20.9333 9.54019C21.2484 9.85413 21.6693 9.86481 22.0059 9.56784C22.2544 9.34854 22.6329 9.37321 22.8511 9.62289C23.0693 9.87257 23.0448 10.2527 22.7963 10.472C21.9884 11.1847 20.8505 11.1522 20.0903 10.395C19.9597 10.2651 19.8314 10.1324 19.7074 10.0041C19.5874 9.87992 19.4632 9.75152 19.3407 9.62963C18.7643 9.05632 17.8973 9.05828 17.3241 9.63423C17.1998 9.75971 17.0726 9.89156 16.9496 10.019C16.8468 10.1255 16.744 10.2321 16.6403 10.3378C16.2281 10.7573 15.7128 10.9881 15.1887 10.9881C15.1879 10.9881 15.1871 10.9881 15.1863 10.9881C14.6636 10.9874 14.1511 10.7571 13.7431 10.3396C13.6791 10.2737 13.6166 10.2089 13.5542 10.1441C13.3811 9.96454 13.2175 9.79493 13.0479 9.62837C12.4686 9.05731 11.5981 9.05885 11.0222 9.6311C10.8992 9.75336 10.7746 9.88226 10.6542 10.0069C10.5306 10.1347 10.4028 10.2669 10.2724 10.3966C9.48011 11.184 8.28616 11.1838 7.49495 10.3965C7.37446 10.2768 7.25621 10.1543 7.14186 10.0359C7.02199 9.91174 6.90877 9.79448 6.79202 9.67887C6.49528 9.38425 6.12077 9.22262 5.73614 9.22262C5.73339 9.22262 5.73066 9.22262 5.72791 9.22265C5.34047 9.22499 4.96482 9.39123 4.67021 9.69076C4.58295 9.77938 4.49662 9.86866 4.41023 9.95801C4.2592 10.1142 4.10298 10.2758 3.94239 10.4332C3.56232 10.8071 3.10037 11 2.59199 11Z'
  }), React__default.createElement("path", {
    d: 'M2.59199 15C2.48021 15 2.36627 14.9907 2.25039 14.9719C1.82048 14.9005 1.50518 14.6877 1.22814 14.4683C0.968405 14.2626 0.923818 13.8843 1.1286 13.6234C1.33336 13.3624 1.70993 13.3176 1.96966 13.5234C2.14951 13.6658 2.29147 13.7591 2.44326 13.7843C2.70793 13.8272 2.91268 13.762 3.10498 13.5727C3.25497 13.4257 3.40547 13.2701 3.55103 13.1196C3.63993 13.0276 3.7288 12.9357 3.81839 12.8447C4.33765 12.3168 5.0133 12.0236 5.72069 12.0194C6.42952 12.0148 7.10748 12.3003 7.63335 12.8224C7.75915 12.947 7.8824 13.0746 8.0016 13.1981C8.11677 13.3174 8.22552 13.43 8.33748 13.5413C8.66411 13.8663 9.10293 13.8662 9.4298 13.5413C9.55173 13.42 9.6754 13.2922 9.79497 13.1685C9.9195 13.0397 10.0483 12.9064 10.1798 12.7757C11.2167 11.7453 12.8446 11.7422 13.8859 12.7686C14.0665 12.9459 14.2434 13.1295 14.4146 13.307C14.476 13.3707 14.5375 13.4344 14.5992 13.498C14.7818 13.6849 14.9858 13.7845 15.1879 13.7848C15.1882 13.7848 15.1885 13.7848 15.1887 13.7848C15.3928 13.7848 15.5998 13.6839 15.7876 13.4928C15.8886 13.3898 15.9891 13.2856 16.0895 13.1816C16.2152 13.0513 16.3451 12.9166 16.476 12.7844C17.5135 11.7421 19.1415 11.7382 20.1833 12.7745C20.3143 12.9047 20.4425 13.0374 20.5666 13.1657C20.6866 13.2899 20.8107 13.4183 20.9333 13.5402C21.2484 13.8541 21.6693 13.8648 22.0059 13.5678C22.2544 13.3485 22.6329 13.3732 22.8511 13.6229C23.0693 13.8726 23.0448 14.2527 22.7963 14.472C21.9884 15.1847 20.8505 15.1522 20.0903 14.395C19.9597 14.2651 19.8314 14.1324 19.7074 14.0041C19.5874 13.8799 19.4632 13.7515 19.3407 13.6296C18.7643 13.0563 17.8973 13.0583 17.3241 13.6342C17.1998 13.7597 17.0726 13.8916 16.9496 14.019C16.8468 14.1255 16.744 14.2321 16.6403 14.3378C16.2281 14.7573 15.7128 14.9881 15.1887 14.9881C15.1879 14.9881 15.1871 14.9881 15.1863 14.9881C14.6636 14.9874 14.1511 14.7571 13.7431 14.3396C13.6791 14.2737 13.6166 14.2089 13.5542 14.1441C13.3811 13.9645 13.2175 13.7949 13.0479 13.6284C12.4686 13.0573 11.5981 13.0588 11.0222 13.6311C10.8992 13.7534 10.7746 13.8823 10.6542 14.0069C10.5306 14.1347 10.4028 14.2669 10.2724 14.3966C9.48011 15.184 8.28616 15.1838 7.49495 14.3965C7.37446 14.2768 7.25621 14.1543 7.14186 14.0359C7.02199 13.9117 6.90877 13.7945 6.79202 13.6789C6.49528 13.3842 6.12077 13.2226 5.73614 13.2226C5.73339 13.2226 5.73066 13.2226 5.72791 13.2226C5.34047 13.225 4.96482 13.3912 4.67021 13.6908C4.58295 13.7794 4.49662 13.8687 4.41023 13.958C4.2592 14.1142 4.10298 14.2758 3.94239 14.4332C3.56232 14.8071 3.10037 15 2.59199 15Z'
  }), React__default.createElement("path", {
    d: 'M2.59199 19C2.48021 19 2.36627 18.9907 2.25039 18.9719C1.82048 18.9005 1.50518 18.6877 1.22814 18.4683C0.968405 18.2626 0.923818 17.8843 1.1286 17.6234C1.33336 17.3624 1.70993 17.3176 1.96966 17.5234C2.14951 17.6658 2.29147 17.7591 2.44326 17.7843C2.70793 17.8272 2.91268 17.762 3.10498 17.5727C3.25497 17.4257 3.40547 17.2701 3.55103 17.1196C3.63993 17.0276 3.7288 16.9357 3.81839 16.8447C4.33765 16.3168 5.0133 16.0236 5.72069 16.0194C6.42952 16.0148 7.10748 16.3003 7.63335 16.8224C7.75915 16.947 7.8824 17.0746 8.0016 17.1981C8.11677 17.3174 8.22552 17.43 8.33748 17.5413C8.66411 17.8663 9.10293 17.8662 9.4298 17.5413C9.55173 17.42 9.6754 17.2922 9.79497 17.1685C9.9195 17.0397 10.0483 16.9064 10.1798 16.7757C11.2167 15.7453 12.8446 15.7422 13.8859 16.7686C14.0665 16.9459 14.2434 17.1295 14.4146 17.307C14.476 17.3707 14.5375 17.4344 14.5992 17.498C14.7818 17.6849 14.9858 17.7845 15.1879 17.7848C15.1882 17.7848 15.1885 17.7848 15.1887 17.7848C15.3928 17.7848 15.5998 17.6839 15.7876 17.4928C15.8886 17.3898 15.9891 17.2856 16.0895 17.1816C16.2152 17.0513 16.3451 16.9166 16.476 16.7844C17.5135 15.7421 19.1415 15.7382 20.1833 16.7745C20.3143 16.9047 20.4425 17.0374 20.5666 17.1657C20.6866 17.2899 20.8107 17.4183 20.9333 17.5402C21.2484 17.8541 21.6693 17.8648 22.0059 17.5678C22.2544 17.3485 22.6329 17.3732 22.8511 17.6229C23.0693 17.8726 23.0448 18.2527 22.7963 18.472C21.9884 19.1847 20.8505 19.1522 20.0903 18.395C19.9597 18.2651 19.8314 18.1324 19.7074 18.0041C19.5874 17.8799 19.4632 17.7515 19.3407 17.6296C18.7643 17.0563 17.8973 17.0583 17.3241 17.6342C17.1998 17.7597 17.0726 17.8916 16.9496 18.019C16.8468 18.1255 16.744 18.2321 16.6403 18.3378C16.2281 18.7573 15.7128 18.9881 15.1887 18.9881C15.1879 18.9881 15.1871 18.9881 15.1863 18.9881C14.6636 18.9874 14.1511 18.7571 13.7431 18.3396C13.6791 18.2737 13.6166 18.2089 13.5542 18.1441C13.3811 17.9645 13.2175 17.7949 13.0479 17.6284C12.4686 17.0573 11.5981 17.0588 11.0222 17.6311C10.8992 17.7534 10.7746 17.8823 10.6542 18.0069C10.5306 18.1347 10.4028 18.2669 10.2724 18.3966C9.48011 19.184 8.28616 19.1838 7.49495 18.3965C7.37446 18.2768 7.25621 18.1543 7.14186 18.0359C7.02199 17.9117 6.90877 17.7945 6.79202 17.6789C6.49528 17.3842 6.12077 17.2226 5.73614 17.2226C5.73339 17.2226 5.73066 17.2226 5.72791 17.2226C5.34047 17.225 4.96482 17.3912 4.67021 17.6908C4.58295 17.7794 4.49662 17.8687 4.41023 17.958C4.2592 18.1142 4.10298 18.2758 3.94239 18.4332C3.56232 18.8071 3.10037 19 2.59199 19Z'
  })));
};

/**
 * TODO: Add the proposal count
 * @param {*} props
 * @returns
 */

var SideNavContainer = function SideNavContainer(props) {
  var className = props.className,
      style = props.style;
  return React__default.createElement("nav", {
    className: classnames(className, 'flex-col items-start hidden sm:block pt-8 sm:pt-0 pl-2 sm:pr-12 lg:pr-16 text-center'),
    style: style
  }, props.children);
};

var navParentClasses = 'relative leading-none rounded-full hover:bg-accent-grey-1 w-full flex justify-start items-center text-lg lg:text-xl py-3 px-6 lg:px-8 trans tracking-wider outline-none focus:outline-none active:outline-none mb-3 font-bold ml-3 lg:ml-0 h-10';
var SideNavLink = function SideNavLink(props) {
  var Link = props.Link,
      useRouter = props.useRouter;
  var router = useRouter();
  var isCurrentPage = props.isCurrentPage ? true : props.match ? router.pathname.match(props.match) : false;
  return React__default.createElement("div", null, React__default.createElement(Link, {
    href: props.href,
    as: props.as,
    shallow: true
  }, React__default.createElement("a", {
    className: classnames(navParentClasses, {
      'text-accent-4 hover:text-highlight-2': !isCurrentPage,
      'text-highlight-2 hover:text-highlight-2 bg-accent-grey-1': isCurrentPage
    })
  }, props.children, React__default.createElement("span", {
    className: 'pl-3 capitalize'
  }, props.label))));
}; // Icons

var SideVoteIcon = function SideVoteIcon() {
  return React__default.createElement("div", {
    className: 'flex items-center justify-center w-5'
  }, React__default.createElement("svg", {
    style: {
      left: 2,
      top: 1,
      transform: 'scale(1.1)'
    },
    className: 'fill-current stroke-current mr-auto relative',
    width: '20',
    height: '25',
    viewBox: '0 0 20 25',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React__default.createElement("path", {
    d: 'M16.994 10.3965C16.9924 10.3869 16.9903 10.3776 16.988 10.3682C16.9854 10.3575 16.9847 10.3466 16.9811 10.3361L15.101 4.78371C15.0514 4.63717 14.9176 4.53904 14.7675 4.53904H11.3679L8.04561 1.1069C7.90755 0.964407 7.68401 0.964288 7.54595 1.10702L4.89902 3.84348C4.83275 3.91199 4.79547 4.00488 4.79547 4.10182C4.79547 4.19876 4.83275 4.29165 4.89902 4.36016L5.07221 4.53904H3.23034C3.08009 4.53904 2.94629 4.63729 2.8967 4.78394L1.01979 10.3363C1.01752 10.343 1.0173 10.3501 1.01543 10.3569C1.011 10.3727 1.00746 10.3887 1.00512 10.4054C1.00364 10.4161 1.00256 10.4267 1.002 10.4375C1.00163 10.4445 1 10.451 1 10.458V19.6346C1 19.8365 1.15819 20 1.35343 20H16.6466C16.8418 20 17 19.8365 17 19.6346V10.458C17 10.4539 16.999 10.4502 16.9988 10.4461C16.9984 10.4295 16.9967 10.4131 16.994 10.3965ZM7.79595 1.88191L11.4957 5.70383L9.93702 7.31523H8.76018L5.64879 4.10182L7.79595 1.88191ZM3.48126 5.26981H5.77914L7.75993 7.31523H6.71461C6.51937 7.31523 6.36118 7.47878 6.36118 7.68062C6.36118 7.88246 6.51937 8.04601 6.71461 8.04601H8.61395H10.0834H11.2864C11.4817 8.04601 11.6399 7.88246 11.6399 7.68062C11.6399 7.47878 11.4817 7.31523 11.2864 7.31523H10.9366L12.2454 5.96217C12.3834 5.81956 12.3834 5.58822 12.2454 5.44549L12.0756 5.26981H14.5168L16.1494 10.0914H1.85136L3.48126 5.26981ZM16.2931 19.2692H1.70686V10.8234H16.2931V19.2692V19.2692Z',
    strokeWidth: '0.5'
  })));
};
var SideAccountIcon = function SideAccountIcon() {
  return React__default.createElement("div", {
    className: 'flex items-center justify-center w-5'
  }, React__default.createElement("svg", {
    style: {
      top: 1
    },
    className: 'fill-current mr-auto relative',
    width: '20',
    height: '20',
    viewBox: '0 0 20 20',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React__default.createElement("path", {
    d: 'M4 13.9844C5.46875 16.1406 7.46875 17.2188 10 17.2188C12.5312 17.2188 14.5312 16.1406 16 13.9844C15.9688 13.1094 15.2656 12.375 13.8906 11.7812C12.5156 11.1875 11.2188 10.8906 10 10.8906C8.78125 10.8906 7.48438 11.1875 6.10938 11.7812C4.73438 12.3438 4.03125 13.0781 4 13.9844ZM12.1094 3.90625C11.5156 3.3125 10.8125 3.01562 10 3.01562C9.1875 3.01562 8.48438 3.3125 7.89062 3.90625C7.29688 4.5 7 5.20312 7 6.01562C7 6.82812 7.29688 7.53125 7.89062 8.125C8.48438 8.71875 9.1875 9.01562 10 9.01562C10.8125 9.01562 11.5156 8.71875 12.1094 8.125C12.7031 7.53125 13 6.82812 13 6.01562C13 5.20312 12.7031 4.5 12.1094 3.90625ZM2.92188 2.96875C4.89062 1 7.25 0.015625 10 0.015625C12.75 0.015625 15.0938 1 17.0312 2.96875C19 4.90625 19.9844 7.25 19.9844 10C19.9844 12.75 19 15.1094 17.0312 17.0781C15.0938 19.0156 12.75 19.9844 10 19.9844C7.25 19.9844 4.89062 19.0156 2.92188 17.0781C0.984375 15.1094 0.015625 12.75 0.015625 10C0.015625 7.25 0.984375 4.90625 2.92188 2.96875Z'
  })));
};
var SideRewardsIcon = function SideRewardsIcon() {
  return React__default.createElement("div", {
    className: 'flex items-center justify-center w-5'
  }, React__default.createElement("svg", {
    className: 'stroke-current fill-current mr-auto relative',
    width: '22',
    height: '17',
    viewBox: '0 0 22 17',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React__default.createElement("path", {
    d: 'M11.2857 15.6798L21 4.44828L18.441 1.34483L18.4658 1.3202L18.3168 1.17241L18.1677 1H3.8323L1 4.44828L10.7143 15.6798L10.9876 16L11.2857 15.6798ZM7.75776 4.25123L11.0124 1.78818L14.2671 4.25123H7.75776ZM11.3354 1.44335H17.6957L14.913 4.17734L11.3354 1.44335ZM7.13665 4.15271L4.5528 1.44335H10.7143L7.13665 4.15271ZM6.59006 4.25123H1.77019L3.98137 1.54187L6.59006 4.25123ZM14.6149 4.69458L11.0124 15.0887L7.40994 4.69458H14.6149ZM15.087 4.69458H20.205L11.6832 14.5222L15.087 4.69458ZM20.2547 4.25123H15.4845L18.118 1.66502L20.2547 4.25123ZM1.81988 4.69458H6.93789L10.3416 14.5222L1.81988 4.69458Z',
    strokeWidth: '0.6'
  })));
};
var SidePodsIcon = function SidePodsIcon() {
  return React__default.createElement("div", {
    className: 'flex items-center justify-center w-5'
  }, React__default.createElement("svg", {
    className: 'stroke-current fill-current',
    width: '15',
    height: '21',
    viewBox: '0 0 15 21',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React__default.createElement("path", {
    d: 'M12.7381 3.8196H11.1519V3.18342H11.4692C11.6446 3.18342 11.7864 3.04123 11.7864 2.86532V0.956765C11.7864 0.78086 11.6446 0.638672 11.4692 0.638672H3.85522C3.67979 0.638672 3.53798 0.78086 3.53798 0.956765V2.86532C3.53798 3.04123 3.67979 3.18342 3.85522 3.18342H4.17247V3.8196H2.58624C1.71159 3.8196 1 4.53309 1 5.41007V18.77C1 19.647 1.71159 20.3605 2.58624 20.3605H12.7381C13.6128 20.3605 14.3244 19.647 14.3244 18.77V5.41007C14.3244 4.53309 13.6128 3.8196 12.7381 3.8196ZM4.17247 1.27486H11.1519V2.54723H4.17247V1.27486ZM4.80697 3.18342H10.5174V3.8196H4.80697V3.18342ZM2.58624 4.45579H12.7381C13.2629 4.45579 13.6899 4.88394 13.6899 5.41007V12.2618C13.3527 11.9583 12.9088 11.7719 12.4209 11.7719C11.7591 11.7719 11.176 12.1126 10.8347 12.6276C10.4933 12.1123 9.9102 11.7719 9.24843 11.7719C8.58665 11.7719 8.00355 12.1126 7.66219 12.6276C7.32083 12.1123 6.73773 11.7719 6.07596 11.7719C5.41418 11.7719 4.83108 12.1126 4.48972 12.6276C4.14836 12.1123 3.56526 11.7719 2.90348 11.7719C2.41556 11.7719 1.97173 11.9583 1.63449 12.2618V5.41007C1.63449 4.88394 2.06151 4.45579 2.58624 4.45579ZM13.6899 13.6805C13.6899 14.3822 13.1207 14.9529 12.4209 14.9529C11.7211 14.9529 11.1519 14.3822 11.1519 13.6805C11.1519 12.9788 11.7211 12.4081 12.4209 12.4081C13.1207 12.4081 13.6899 12.9788 13.6899 13.6805ZM10.5174 13.6805C10.5174 14.3822 9.94827 14.9529 9.24843 14.9529C8.54858 14.9529 7.97944 14.3822 7.97944 13.6805C7.97944 12.9788 8.54858 12.4081 9.24843 12.4081C9.94827 12.4081 10.5174 12.9788 10.5174 13.6805ZM7.34494 13.6805C7.34494 14.3822 6.7758 14.9529 6.07596 14.9529C5.37611 14.9529 4.80697 14.3822 4.80697 13.6805C4.80697 12.9788 5.37611 12.4081 6.07596 12.4081C6.7758 12.4081 7.34494 12.9788 7.34494 13.6805ZM4.17247 13.6805C4.17247 14.3822 3.60333 14.9529 2.90348 14.9529C2.20364 14.9529 1.63449 14.3822 1.63449 13.6805C1.63449 12.9788 2.20364 12.4081 2.90348 12.4081C3.60333 12.4081 4.17247 12.9788 4.17247 13.6805ZM12.7381 19.7243H2.58624C2.06151 19.7243 1.63449 19.2961 1.63449 18.77V15.0992C1.97173 15.4026 2.41556 15.5891 2.90348 15.5891C3.56526 15.5891 4.14836 15.2484 4.48972 14.7334C4.83108 15.2487 5.41418 15.5891 6.07596 15.5891C6.73773 15.5891 7.32083 15.2484 7.66219 14.7334C8.00355 15.2487 8.58665 15.5891 9.24843 15.5891C9.9102 15.5891 10.4933 15.2484 10.8347 14.7334C11.176 15.2487 11.7591 15.5891 12.4209 15.5891C12.9088 15.5891 13.3527 15.4026 13.6899 15.0992V18.77C13.6899 19.2961 13.2629 19.7243 12.7381 19.7243Z'
  })));
};
var SidePoolsIcon = function SidePoolsIcon() {
  return React__default.createElement("div", {
    className: 'flex items-center justify-center w-5'
  }, React__default.createElement("svg", {
    style: {
      top: -2
    },
    className: 'fill-current mr-auto relative',
    width: '19',
    height: '19',
    viewBox: '0 0 19 19',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React__default.createElement("path", {
    d: 'M2.59199 7C2.48021 7 2.36627 6.99068 2.25039 6.9719C1.82048 6.90055 1.50518 6.68775 1.22814 6.46833C0.968405 6.26262 0.923818 5.88431 1.1286 5.62337C1.33336 5.36244 1.70993 5.31765 1.96966 5.52338C2.14951 5.66579 2.29147 5.75913 2.44326 5.78434C2.70793 5.82724 2.91268 5.76202 3.10498 5.57271C3.25497 5.4257 3.40547 5.27006 3.55103 5.11955C3.63993 5.02759 3.7288 4.93569 3.81839 4.84472C4.33765 4.31681 5.0133 4.02359 5.72069 4.01935C6.42952 4.01478 7.10748 4.30032 7.63335 4.82243C7.75915 4.94697 7.8824 5.07464 8.0016 5.1981C8.11677 5.31737 8.22552 5.43003 8.33748 5.54131C8.66411 5.86632 9.10293 5.86623 9.4298 5.54134C9.55173 5.42005 9.6754 5.29217 9.79497 5.16847C9.9195 5.03965 10.0483 4.90645 10.1798 4.77571C11.2167 3.74527 12.8446 3.74217 13.8859 4.76861C14.0665 4.94589 14.2434 5.12945 14.4146 5.30697C14.476 5.37068 14.5375 5.43443 14.5992 5.49799C14.7818 5.68489 14.9858 5.78452 15.1879 5.78482C15.1882 5.78482 15.1885 5.78482 15.1887 5.78482C15.3928 5.78482 15.5998 5.68387 15.7876 5.49282C15.8886 5.38978 15.9891 5.28564 16.0895 5.18155C16.2152 5.05127 16.3451 4.91659 16.476 4.78444C17.5135 3.74214 19.1415 3.73823 20.1833 4.77451C20.3143 4.90474 20.4425 5.0374 20.5666 5.16573C20.6866 5.28988 20.8107 5.41827 20.9333 5.54019C21.2484 5.85413 21.6693 5.86481 22.0059 5.56784C22.2544 5.34854 22.6329 5.37321 22.8511 5.62289C23.0693 5.87257 23.0448 6.25273 22.7963 6.47197C21.9884 7.18468 20.8505 7.15225 20.0903 6.39495C19.9597 6.26509 19.8314 6.13237 19.7074 6.0041C19.5874 5.87992 19.4632 5.75152 19.3407 5.62963C18.7643 5.05632 17.8973 5.05828 17.3241 5.63423C17.1998 5.75971 17.0726 5.89156 16.9496 6.01902C16.8468 6.12554 16.744 6.23209 16.6403 6.33783C16.2281 6.75733 15.7128 6.98809 15.1887 6.98812C15.1879 6.98812 15.1871 6.98812 15.1863 6.98812C14.6636 6.9874 14.1511 6.75709 13.7431 6.33957C13.6791 6.27366 13.6166 6.20886 13.5542 6.14413C13.3811 5.96454 13.2175 5.79493 13.0479 5.62837C12.4686 5.05731 11.5981 5.05885 11.0222 5.6311C10.8992 5.75336 10.7746 5.88226 10.6542 6.00686C10.5306 6.13468 10.4028 6.26686 10.2724 6.39661C9.48011 7.18398 8.28616 7.18383 7.49495 6.39652C7.37446 6.27682 7.25621 6.15433 7.14186 6.03589C7.02199 5.91174 6.90877 5.79448 6.79202 5.67887C6.49528 5.38425 6.12077 5.22262 5.73614 5.22262C5.73339 5.22262 5.73066 5.22262 5.72791 5.22265C5.34047 5.22499 4.96482 5.39123 4.67021 5.69076C4.58295 5.77938 4.49662 5.86866 4.41023 5.95801C4.2592 6.11423 4.10298 6.27577 3.94239 6.43316C3.56232 6.80714 3.10037 6.99997 2.59199 7Z'
  }), React__default.createElement("path", {
    d: 'M2.59199 11C2.48021 11 2.36627 10.9907 2.25039 10.9719C1.82048 10.9005 1.50518 10.6877 1.22814 10.4683C0.968405 10.2626 0.923818 9.88431 1.1286 9.62337C1.33336 9.36244 1.70993 9.31765 1.96966 9.52338C2.14951 9.66579 2.29147 9.75913 2.44326 9.78434C2.70793 9.82724 2.91268 9.76202 3.10498 9.57271C3.25497 9.4257 3.40547 9.27006 3.55103 9.11955C3.63993 9.02759 3.7288 8.93569 3.81839 8.84472C4.33765 8.31681 5.0133 8.02359 5.72069 8.01935C6.42952 8.01478 7.10748 8.30032 7.63335 8.82243C7.75915 8.94697 7.8824 9.07464 8.0016 9.1981C8.11677 9.31737 8.22552 9.43003 8.33748 9.54131C8.66411 9.86632 9.10293 9.86623 9.4298 9.54134C9.55173 9.42005 9.6754 9.29217 9.79497 9.16847C9.9195 9.03965 10.0483 8.90645 10.1798 8.77571C11.2167 7.74527 12.8446 7.74217 13.8859 8.76861C14.0665 8.94589 14.2434 9.12945 14.4146 9.30697C14.476 9.37068 14.5375 9.43443 14.5992 9.49799C14.7818 9.68489 14.9858 9.78452 15.1879 9.78482C15.1882 9.78482 15.1885 9.78482 15.1887 9.78482C15.3928 9.78482 15.5998 9.68387 15.7876 9.49282C15.8886 9.38978 15.9891 9.28564 16.0895 9.18155C16.2152 9.05127 16.3451 8.91659 16.476 8.78444C17.5135 7.74214 19.1415 7.73823 20.1833 8.77451C20.3143 8.90474 20.4425 9.0374 20.5666 9.16573C20.6866 9.28988 20.8107 9.41827 20.9333 9.54019C21.2484 9.85413 21.6693 9.86481 22.0059 9.56784C22.2544 9.34854 22.6329 9.37321 22.8511 9.62289C23.0693 9.87257 23.0448 10.2527 22.7963 10.472C21.9884 11.1847 20.8505 11.1522 20.0903 10.395C19.9597 10.2651 19.8314 10.1324 19.7074 10.0041C19.5874 9.87992 19.4632 9.75152 19.3407 9.62963C18.7643 9.05632 17.8973 9.05828 17.3241 9.63423C17.1998 9.75971 17.0726 9.89156 16.9496 10.019C16.8468 10.1255 16.744 10.2321 16.6403 10.3378C16.2281 10.7573 15.7128 10.9881 15.1887 10.9881C15.1879 10.9881 15.1871 10.9881 15.1863 10.9881C14.6636 10.9874 14.1511 10.7571 13.7431 10.3396C13.6791 10.2737 13.6166 10.2089 13.5542 10.1441C13.3811 9.96454 13.2175 9.79493 13.0479 9.62837C12.4686 9.05731 11.5981 9.05885 11.0222 9.6311C10.8992 9.75336 10.7746 9.88226 10.6542 10.0069C10.5306 10.1347 10.4028 10.2669 10.2724 10.3966C9.48011 11.184 8.28616 11.1838 7.49495 10.3965C7.37446 10.2768 7.25621 10.1543 7.14186 10.0359C7.02199 9.91174 6.90877 9.79448 6.79202 9.67887C6.49528 9.38425 6.12077 9.22262 5.73614 9.22262C5.73339 9.22262 5.73066 9.22262 5.72791 9.22265C5.34047 9.22499 4.96482 9.39123 4.67021 9.69076C4.58295 9.77938 4.49662 9.86866 4.41023 9.95801C4.2592 10.1142 4.10298 10.2758 3.94239 10.4332C3.56232 10.8071 3.10037 11 2.59199 11Z'
  }), React__default.createElement("path", {
    d: 'M2.59199 15C2.48021 15 2.36627 14.9907 2.25039 14.9719C1.82048 14.9005 1.50518 14.6877 1.22814 14.4683C0.968405 14.2626 0.923818 13.8843 1.1286 13.6234C1.33336 13.3624 1.70993 13.3176 1.96966 13.5234C2.14951 13.6658 2.29147 13.7591 2.44326 13.7843C2.70793 13.8272 2.91268 13.762 3.10498 13.5727C3.25497 13.4257 3.40547 13.2701 3.55103 13.1196C3.63993 13.0276 3.7288 12.9357 3.81839 12.8447C4.33765 12.3168 5.0133 12.0236 5.72069 12.0194C6.42952 12.0148 7.10748 12.3003 7.63335 12.8224C7.75915 12.947 7.8824 13.0746 8.0016 13.1981C8.11677 13.3174 8.22552 13.43 8.33748 13.5413C8.66411 13.8663 9.10293 13.8662 9.4298 13.5413C9.55173 13.42 9.6754 13.2922 9.79497 13.1685C9.9195 13.0397 10.0483 12.9064 10.1798 12.7757C11.2167 11.7453 12.8446 11.7422 13.8859 12.7686C14.0665 12.9459 14.2434 13.1295 14.4146 13.307C14.476 13.3707 14.5375 13.4344 14.5992 13.498C14.7818 13.6849 14.9858 13.7845 15.1879 13.7848C15.1882 13.7848 15.1885 13.7848 15.1887 13.7848C15.3928 13.7848 15.5998 13.6839 15.7876 13.4928C15.8886 13.3898 15.9891 13.2856 16.0895 13.1816C16.2152 13.0513 16.3451 12.9166 16.476 12.7844C17.5135 11.7421 19.1415 11.7382 20.1833 12.7745C20.3143 12.9047 20.4425 13.0374 20.5666 13.1657C20.6866 13.2899 20.8107 13.4183 20.9333 13.5402C21.2484 13.8541 21.6693 13.8648 22.0059 13.5678C22.2544 13.3485 22.6329 13.3732 22.8511 13.6229C23.0693 13.8726 23.0448 14.2527 22.7963 14.472C21.9884 15.1847 20.8505 15.1522 20.0903 14.395C19.9597 14.2651 19.8314 14.1324 19.7074 14.0041C19.5874 13.8799 19.4632 13.7515 19.3407 13.6296C18.7643 13.0563 17.8973 13.0583 17.3241 13.6342C17.1998 13.7597 17.0726 13.8916 16.9496 14.019C16.8468 14.1255 16.744 14.2321 16.6403 14.3378C16.2281 14.7573 15.7128 14.9881 15.1887 14.9881C15.1879 14.9881 15.1871 14.9881 15.1863 14.9881C14.6636 14.9874 14.1511 14.7571 13.7431 14.3396C13.6791 14.2737 13.6166 14.2089 13.5542 14.1441C13.3811 13.9645 13.2175 13.7949 13.0479 13.6284C12.4686 13.0573 11.5981 13.0588 11.0222 13.6311C10.8992 13.7534 10.7746 13.8823 10.6542 14.0069C10.5306 14.1347 10.4028 14.2669 10.2724 14.3966C9.48011 15.184 8.28616 15.1838 7.49495 14.3965C7.37446 14.2768 7.25621 14.1543 7.14186 14.0359C7.02199 13.9117 6.90877 13.7945 6.79202 13.6789C6.49528 13.3842 6.12077 13.2226 5.73614 13.2226C5.73339 13.2226 5.73066 13.2226 5.72791 13.2226C5.34047 13.225 4.96482 13.3912 4.67021 13.6908C4.58295 13.7794 4.49662 13.8687 4.41023 13.958C4.2592 14.1142 4.10298 14.2758 3.94239 14.4332C3.56232 14.8071 3.10037 15 2.59199 15Z'
  }), React__default.createElement("path", {
    d: 'M2.59199 19C2.48021 19 2.36627 18.9907 2.25039 18.9719C1.82048 18.9005 1.50518 18.6877 1.22814 18.4683C0.968405 18.2626 0.923818 17.8843 1.1286 17.6234C1.33336 17.3624 1.70993 17.3176 1.96966 17.5234C2.14951 17.6658 2.29147 17.7591 2.44326 17.7843C2.70793 17.8272 2.91268 17.762 3.10498 17.5727C3.25497 17.4257 3.40547 17.2701 3.55103 17.1196C3.63993 17.0276 3.7288 16.9357 3.81839 16.8447C4.33765 16.3168 5.0133 16.0236 5.72069 16.0194C6.42952 16.0148 7.10748 16.3003 7.63335 16.8224C7.75915 16.947 7.8824 17.0746 8.0016 17.1981C8.11677 17.3174 8.22552 17.43 8.33748 17.5413C8.66411 17.8663 9.10293 17.8662 9.4298 17.5413C9.55173 17.42 9.6754 17.2922 9.79497 17.1685C9.9195 17.0397 10.0483 16.9064 10.1798 16.7757C11.2167 15.7453 12.8446 15.7422 13.8859 16.7686C14.0665 16.9459 14.2434 17.1295 14.4146 17.307C14.476 17.3707 14.5375 17.4344 14.5992 17.498C14.7818 17.6849 14.9858 17.7845 15.1879 17.7848C15.1882 17.7848 15.1885 17.7848 15.1887 17.7848C15.3928 17.7848 15.5998 17.6839 15.7876 17.4928C15.8886 17.3898 15.9891 17.2856 16.0895 17.1816C16.2152 17.0513 16.3451 16.9166 16.476 16.7844C17.5135 15.7421 19.1415 15.7382 20.1833 16.7745C20.3143 16.9047 20.4425 17.0374 20.5666 17.1657C20.6866 17.2899 20.8107 17.4183 20.9333 17.5402C21.2484 17.8541 21.6693 17.8648 22.0059 17.5678C22.2544 17.3485 22.6329 17.3732 22.8511 17.6229C23.0693 17.8726 23.0448 18.2527 22.7963 18.472C21.9884 19.1847 20.8505 19.1522 20.0903 18.395C19.9597 18.2651 19.8314 18.1324 19.7074 18.0041C19.5874 17.8799 19.4632 17.7515 19.3407 17.6296C18.7643 17.0563 17.8973 17.0583 17.3241 17.6342C17.1998 17.7597 17.0726 17.8916 16.9496 18.019C16.8468 18.1255 16.744 18.2321 16.6403 18.3378C16.2281 18.7573 15.7128 18.9881 15.1887 18.9881C15.1879 18.9881 15.1871 18.9881 15.1863 18.9881C14.6636 18.9874 14.1511 18.7571 13.7431 18.3396C13.6791 18.2737 13.6166 18.2089 13.5542 18.1441C13.3811 17.9645 13.2175 17.7949 13.0479 17.6284C12.4686 17.0573 11.5981 17.0588 11.0222 17.6311C10.8992 17.7534 10.7746 17.8823 10.6542 18.0069C10.5306 18.1347 10.4028 18.2669 10.2724 18.3966C9.48011 19.184 8.28616 19.1838 7.49495 18.3965C7.37446 18.2768 7.25621 18.1543 7.14186 18.0359C7.02199 17.9117 6.90877 17.7945 6.79202 17.6789C6.49528 17.3842 6.12077 17.2226 5.73614 17.2226C5.73339 17.2226 5.73066 17.2226 5.72791 17.2226C5.34047 17.225 4.96482 17.3912 4.67021 17.6908C4.58295 17.7794 4.49662 17.8687 4.41023 17.958C4.2592 18.1142 4.10298 18.2758 3.94239 18.4332C3.56232 18.8071 3.10037 19 2.59199 19Z'
  })));
};

var Accordion = function Accordion(props) {
  var i = props.i,
      expanded = props.expanded,
      setExpanded = props.setExpanded,
      openUpwards = props.openUpwards;
  var isOpen = i === expanded;
  var header = React__default.createElement(framerMotion.motion.div, {
    initial: false,
    animate: {},
    onClick: function onClick() {
      return setExpanded(isOpen ? false : i);
    },
    className: 'accordion-header'
  }, props.header);
  return React__default.createElement(React__default.Fragment, null, !openUpwards && header, React__default.createElement(framerMotion.AnimatePresence, {
    initial: false
  }, isOpen && React__default.createElement(framerMotion.motion.div, {
    key: 'content',
    initial: 'collapsed',
    animate: 'open',
    exit: 'collapsed',
    variants: {
      open: {
        opacity: 1,
        height: 'auto'
      },
      collapsed: {
        opacity: 0,
        height: 0
      }
    },
    transition: {
      duration: 0.8,
      ease: [0.04, 0.62, 0.23, 0.98]
    },
    className: 'accordion-motion-content'
  }, React__default.createElement(ContentWrapper, null, props.content))), openUpwards && header);
};
Accordion.defaultProps = {
  openUpwards: false
};

var Content$2 = function Content(props) {
  return React__default.createElement("div", {
    className: 'accordion-content'
  }, props.children);
};

var ContentWrapper = function ContentWrapper(props) {
  return React__default.createElement(framerMotion.motion.div, {
    variants: {
      collapsed: {
        scale: 1
      },
      open: {
        scale: 1
      }
    },
    transition: {
      duration: 0.8
    },
    className: 'accordion-content-placeholder'
  }, React__default.createElement(Content$2, Object.assign({}, props)));
};

var KnowledgeBaseIcon = "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23BBB2CE%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20class%3D%22feather%20feather-info%22%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%2210%22%3E%3C%2Fcircle%3E%3Cline%20x1%3D%2212%22%20y1%3D%2216%22%20x2%3D%2212%22%20y2%3D%2212%22%3E%3C%2Fline%3E%3Cline%20x1%3D%2212%22%20y1%3D%228%22%20x2%3D%2212.01%22%20y2%3D%228%22%3E%3C%2Fline%3E%3C%2Fsvg%3E";

var DocsIcon = "data:image/svg+xml,%3Csvg%20width%3D%2210%22%20height%3D%2213%22%20viewBox%3D%220%200%2010%2013%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M9.69032%203.1871L6.81935%200.309677C6.6126%200.111852%206.33776%200.000993126%206.05161%200H1.12903C0.83342%200.00160338%200.550086%200.11843%200.339254%200.325647C0.128422%200.532865%200.00671422%200.814137%200%201.10968V11.4323C0.00169361%2011.7312%200.121189%2012.0174%200.332557%2012.2287C0.543926%2012.4401%200.830117%2012.5596%201.12903%2012.5613H8.87097C9.16988%2012.5596%209.45607%2012.4401%209.66744%2012.2287C9.87881%2012.0174%209.99831%2011.7312%2010%2011.4323V3.95484C9.99901%203.66869%209.88815%203.39385%209.69032%203.1871ZM8.34839%203.1871H7.19355C7.08233%203.1871%206.97566%203.14291%206.89702%203.06427C6.81838%202.98563%206.77419%202.87896%206.77419%202.76774V1.63226L8.34839%203.1871ZM8.87097%2011.5742H1.12903C1.08941%2011.5745%201.05106%2011.5602%201.02131%2011.534C0.991566%2011.5078%200.972496%2011.4716%200.967742%2011.4323V1.10968C0.967742%201.0669%200.984735%201.02588%201.01498%200.995628C1.04523%200.96538%201.08626%200.948387%201.12903%200.948387H5.80645V2.7871C5.80645%202.96925%205.84233%203.14963%205.91204%203.31792C5.98175%203.48621%206.08392%203.63912%206.21272%203.76792C6.47285%204.02805%206.82567%204.17419%207.19355%204.17419H9.03226V11.4323C9.03226%2011.475%209.01526%2011.5161%208.98502%2011.5463C8.95477%2011.5766%208.91374%2011.5935%208.87097%2011.5935V11.5742ZM7.41935%206.27097C7.41768%206.39878%207.36617%206.52088%207.27578%206.61127C7.1854%206.70165%207.06329%206.75317%206.93548%206.75484H3.06452C2.93619%206.75484%202.81311%206.70386%202.72237%206.61312C2.63162%206.52237%202.58065%206.3993%202.58065%206.27097C2.58065%206.14264%202.63162%206.01956%202.72237%205.92882C2.81311%205.83808%202.93619%205.7871%203.06452%205.7871H6.93548C7.06329%205.78877%207.1854%205.84028%207.27578%205.93067C7.36617%206.02105%207.41768%206.14316%207.41935%206.27097ZM7.41935%208.85161C7.41768%208.97942%207.36617%209.10153%207.27578%209.19191C7.1854%209.2823%207.06329%209.33381%206.93548%209.33548H3.06452C2.93619%209.33548%202.81311%209.2845%202.72237%209.19376C2.63162%209.10302%202.58065%208.97994%202.58065%208.85161C2.58065%208.72328%202.63162%208.60021%202.72237%208.50946C2.81311%208.41872%202.93619%208.36774%203.06452%208.36774H6.93548C7.06329%208.36941%207.1854%208.42093%207.27578%208.51131C7.36617%208.6017%207.41768%208.7238%207.41935%208.85161Z%22%20fill%3D%22%23BBB2CE%22%2F%3E%3C%2Fsvg%3E";

var GovForumIcon = "data:image/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%2213%22%20viewBox%3D%220%200%2012%2013%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M10.7143%203.07145H9.85714V2.2143C9.85714%201.87331%209.72168%201.54628%209.48057%201.30517C9.23945%201.06405%208.91242%200.928589%208.57143%200.928589H1.28571C0.944722%200.928589%200.617695%201.06405%200.376577%201.30517C0.135459%201.54628%200%201.87331%200%202.2143V9.50002C0.000422349%209.58463%200.0258805%209.66722%200.0731662%209.73739C0.120452%209.80755%200.187449%209.86215%200.265714%209.8943C0.316577%209.91829%200.372353%209.93004%200.428571%209.92859C0.484974%209.92892%200.540887%209.9181%200.593103%209.89678C0.645319%209.87545%200.692811%209.84402%200.732857%209.8043L2.14286%208.39002V9.07145C2.14286%209.41244%202.27832%209.73947%202.51943%209.98058C2.76055%2010.2217%203.08758%2010.3572%203.42857%2010.3572H9.68143L11.2671%2011.9472C11.3072%2011.9869%2011.3547%2012.0183%2011.4069%2012.0396C11.4591%2012.061%2011.515%2012.0718%2011.5714%2012.0714C11.6276%2012.0729%2011.6834%2012.0612%2011.7343%2012.0372C11.8126%2012.005%2011.8795%2011.9504%2011.9268%2011.8802C11.9741%2011.8101%2011.9996%2011.7275%2012%2011.6429V4.35716C12%204.01617%2011.8645%203.68914%2011.6234%203.44802C11.3823%203.2069%2011.0553%203.07145%2010.7143%203.07145ZM0.857143%208.46716V2.2143C0.857143%202.10064%200.902296%201.99163%200.982669%201.91126C1.06304%201.83088%201.17205%201.78573%201.28571%201.78573H8.57143C8.68509%201.78573%208.7941%201.83088%208.87447%201.91126C8.95485%201.99163%209%202.10064%209%202.2143V6.92859C9%207.04225%208.95485%207.15126%208.87447%207.23164C8.7941%207.31201%208.68509%207.35716%208.57143%207.35716H2.14286C2.08645%207.35683%202.03054%207.36764%201.97833%207.38897C1.92611%207.4103%201.87862%207.44173%201.83857%207.48145L0.857143%208.46716ZM11.1429%2010.61L10.1614%209.6243C10.1214%209.58458%2010.0739%209.55316%2010.0217%209.53183C9.96946%209.5105%209.91355%209.49969%209.85714%209.50002H3.42857C3.31491%209.50002%203.2059%209.45486%203.12553%209.37449C3.04515%209.29412%203%209.18511%203%209.07145V8.2143H8.57143C8.91242%208.2143%209.23945%208.07884%209.48057%207.83773C9.72168%207.59661%209.85714%207.26958%209.85714%206.92859V3.92859H10.7143C10.828%203.92859%2010.937%203.97374%2011.0173%204.05411C11.0977%204.13449%2011.1429%204.2435%2011.1429%204.35716V10.61Z%22%20fill%3D%22%23BBB2CE%22%2F%3E%3C%2Fsvg%3E";

var TreasuryIcon = "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23BBB2CE%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20class%3D%22feather%20feather-dollar-sign%22%3E%3Cline%20x1%3D%2212%22%20y1%3D%221%22%20x2%3D%2212%22%20y2%3D%2223%22%3E%3C%2Fline%3E%3Cpath%20d%3D%22M17%205H9.5a3.5%203.5%200%200%200%200%207h5a3.5%203.5%200%200%201%200%207H6%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E";

var MediumLogo = "data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2216%22%20viewBox%3D%220%200%2020%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.37167%203.26416C2.39667%203.01643%202.3025%202.77206%202.11917%202.60578L0.2525%200.338425V0H6.05083L10.5325%209.905L14.4725%200H20V0.338425L18.4033%201.88107C18.2658%201.98688%2018.1975%202.16071%2018.2258%202.33286V13.668C18.1975%2013.8393%2018.2658%2014.0131%2018.4033%2014.1189L19.9625%2015.6616V16H12.1192V15.6616L13.735%2014.0811C13.8933%2013.9216%2013.8933%2013.8746%2013.8933%2013.6302V4.46838L9.4025%2015.9631H8.79583L3.56667%204.46838V12.1724C3.52333%2012.4957%203.63%2012.8223%203.85583%2013.0558L5.95667%2015.6238V15.9631H0V15.6238L2.10083%2013.0558C2.32583%2012.8215%202.42583%2012.4932%202.37167%2012.1724V3.26416Z%22%20fill%3D%22%23BBB2CE%22%2F%3E%3C%2Fsvg%3E";

var DiscordLogo = "data:image/svg+xml,%3Csvg%20width%3D%2219%22%20height%3D%2221%22%20viewBox%3D%220%200%2019%2021%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M11.1565%208.76562C10.556%208.76562%2010.0819%209.28185%2010.0819%209.9245C10.0819%2010.5671%2010.5665%2011.0834%2011.1565%2011.0834C11.757%2011.0834%2012.2311%2010.5671%2012.2311%209.9245C12.2311%209.28185%2011.7465%208.76562%2011.1565%208.76562ZM7.31116%208.76562C6.71066%208.76562%206.23657%209.28185%206.23657%209.9245C6.23657%2010.5671%206.72119%2011.0834%207.31116%2011.0834C7.91167%2011.0834%208.38575%2010.5671%208.38575%209.9245C8.39628%209.28185%207.91167%208.76562%207.31116%208.76562Z%22%20fill%3D%22%23BBB2CE%22%2F%3E%3Cpath%20d%3D%22M16.2769%200H2.15971C0.969237%200%200%200.969237%200%202.15971V16.2769C0%2017.4673%200.969237%2018.4366%202.15971%2018.4366H14.1066L13.5482%2016.5086L14.8967%2017.7518L16.1715%2018.9212L18.4471%2020.8913V2.15971C18.4366%200.969237%2017.4673%200%2016.2769%200ZM12.2103%2013.6431C12.2103%2013.6431%2011.831%2013.19%2011.515%2012.8002C12.8951%2012.4104%2013.4218%2011.5571%2013.4218%2011.5571C12.9899%2011.8415%2012.579%2012.0417%2012.2103%2012.1787C11.6835%2012.3999%2011.1778%2012.5369%2010.6827%2012.6317C9.6713%2012.8213%208.7442%2012.7686%207.95406%2012.6211C7.35356%2012.5053%206.83733%2012.3472%206.40539%2012.1681C6.16308%2012.0733%205.8997%2011.9574%205.63632%2011.8099C5.60472%2011.7889%205.57311%2011.7783%205.54151%2011.7573C5.52044%2011.7467%205.5099%2011.7362%205.49937%2011.7362C5.30973%2011.6308%205.20438%2011.5571%205.20438%2011.5571C5.20438%2011.5571%205.71007%2012.3894%207.04804%2012.7897C6.73198%2013.1901%206.34218%2013.6536%206.34218%2013.6536C4.0139%2013.5799%203.12895%2012.0628%203.12895%2012.0628C3.12895%208.70206%204.64602%205.97345%204.64602%205.97345C6.16308%204.84618%207.59587%204.87779%207.59587%204.87779L7.70122%205.00421C5.80489%205.54151%204.941%206.37379%204.941%206.37379C4.941%206.37379%205.17277%206.24736%205.56258%206.0788C6.68984%205.58365%207.58533%205.45723%207.95406%205.41508C8.01727%205.40455%208.06995%205.39401%208.13316%205.39401C8.77581%205.30973%209.50274%205.28866%2010.2613%205.37294C11.2621%205.48883%2012.3367%205.78382%2013.4324%206.37379C13.4324%206.37379%2012.6001%205.58365%2010.8091%205.04635L10.9566%204.87779C10.9566%204.87779%2012.3999%204.84618%2013.9064%205.97345C13.9064%205.97345%2015.4235%208.70206%2015.4235%2012.0628C15.4235%2012.0522%2014.5386%2013.5693%2012.2103%2013.6431Z%22%20fill%3D%22%23BBB2CE%22%2F%3E%3C%2Fsvg%3E";

var TwitterLogo = "data:image/svg+xml,%3Csvg%20width%3D%2221%22%20height%3D%2216%22%20viewBox%3D%220%200%2021%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M6.60408%2016C14.5286%2016%2018.863%209.84379%2018.863%204.50515C18.863%204.3303%2018.863%204.15623%2018.8504%203.98295C19.6937%203.41105%2020.4215%202.70293%2021%201.89176C20.2137%202.21847%2019.3795%202.43273%2018.5254%202.52739C19.4248%202.02249%2020.0979%201.22838%2020.4196%200.292845C19.5738%200.763426%2018.6485%201.09507%2017.6837%201.27346C17.0341%200.62577%2016.1749%200.196886%2015.2392%200.0531763C14.3034%20-0.090533%2013.3432%200.0589443%2012.5072%200.478477C11.6712%200.89801%2011.0059%201.56421%2010.6144%202.37398C10.2229%203.18376%2010.1268%204.09196%2010.3412%204.95805C8.62827%204.87753%206.95251%204.46013%205.42274%203.73294C3.89297%203.00576%202.54338%201.98505%201.4616%200.737075C0.910637%201.62645%200.741888%202.67929%200.989712%203.68123C1.23754%204.68317%201.8833%205.55888%202.79552%206.13006C2.10986%206.111%201.43915%205.93757%200.84%205.62439C0.84%205.64093%200.84%205.65826%200.84%205.67559C0.840272%206.60833%201.18462%207.51227%201.81464%208.23409C2.44465%208.9559%203.32155%209.45116%204.2966%209.63585C3.66229%209.79806%202.99677%209.82177%202.35116%209.70517C2.62648%2010.5079%203.16249%2011.2099%203.88422%2011.7129C4.60595%2012.216%205.47732%2012.4949%206.37644%2012.5107C4.85078%2013.6351%202.96609%2014.2454%201.02564%2014.2436C0.682839%2014.2429%200.340371%2014.2235%200%2014.1853C1.97033%2015.3709%204.26293%2015.9998%206.60408%2015.9968%22%20fill%3D%22%23BBB2CE%22%2F%3E%3C%2Fsvg%3E";

var TelegramLogo = "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20240%20240%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22a%22%20x1%3D%2246%22%20x2%3D%2229%22%20y1%3D%2211%22%20y2%3D%2252%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23BBB2CE%22%20offset%3D%220%22%2F%3E%3Cstop%20stop-color%3D%22%23BBB2CE%22%20offset%3D%221%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cg%20transform%3D%22scale%283.47%29%22%3E%3Ccircle%20cy%3D%2234.6%22%20cx%3D%2234.6%22%20r%3D%2234.6%22%20fill%3D%22url%28%23a%29%22%2F%3E%3Cpath%20d%3D%22M47.8%2020.5s3.6-1.4%203.3%202c-.1%201.4-1%206.3-1.7%2011.6L47%2049.8s-.2%202.3-2%202.7c-1.8.4-4.5-1.4-5-1.8-.4-.3-7.5-4.8-10-7-.7-.6-1.5-1.8.1-3.2l10.5-10c1.2-1.2%202.4-4-2.6-.6l-14%209.5s-1.6%201-4.6.1l-6.5-2s-2.4-1.5%201.7-3c10-4.7%2022.3-9.5%2033.2-14z%22%20fill%3D%22%23fff%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E";

var sharedClasses = 'relative leading-none w-full flex justify-start items-center text-accent-4 hover:text-highlight-2 py-2 px-6 trans outline-none focus:outline-none active:outline-none mb-1 ml-3 lg:ml-0 h-10';
var headerClasses = 'text-lg font-bold';
var childClasses = 'text-xs';
var socialsLinkData = [{
  langKey: 'ecosystem',
  headerLabel: 'ecosystem',
  childLinks: [{
    href: 'https://www.notion.so/PoolTogether-Knowledge-Base-fa721ccefa3242eaabd125a8415acd27',
    langKey: 'knowledgeBase',
    label: 'Knowledge Base',
    icon: /*#__PURE__*/React__default.createElement("img", {
      src: KnowledgeBaseIcon,
      className: 'w-4 opacity-50 mx-auto'
    })
  }, {
    href: 'https://docs.pooltogether.com/',
    langKey: 'documentation',
    label: 'Documentation',
    icon: /*#__PURE__*/React__default.createElement("img", {
      src: DocsIcon,
      className: 'w-3 opacity-50 mx-auto'
    })
  }, {
    href: 'https://gov.pooltogether.com/',
    langKey: 'governanceForum',
    label: 'Governance forum',
    icon: /*#__PURE__*/React__default.createElement("img", {
      src: GovForumIcon,
      className: 'w-4 opacity-50 mx-auto'
    })
  }, {
    href: 'https://info.pooltogether.com/',
    langKey: 'treasury',
    label: 'Treasury',
    icon: /*#__PURE__*/React__default.createElement("img", {
      src: TreasuryIcon,
      className: 'w-4 opacity-50 mx-auto'
    })
  }]
}, {
  langKey: 'socials',
  headerLabel: 'socials',
  childLinks: [{
    href: 'https://twitter.com/PoolTogether_',
    label: 'Twitter',
    icon: /*#__PURE__*/React__default.createElement("img", {
      src: TwitterLogo,
      className: 'w-4 opacity-50 mx-auto'
    })
  }, {
    href: 'https://t.me/PoolTogetherTelegram',
    label: 'Telegram',
    icon: /*#__PURE__*/React__default.createElement("img", {
      src: TelegramLogo,
      className: 'w-4 opacity-50 mx-auto hover:opacity-100 trans'
    })
  }, {
    href: 'https://pooltogether.com/discord/',
    label: 'Discord',
    icon: /*#__PURE__*/React__default.createElement("img", {
      src: DiscordLogo,
      className: 'w-4 opacity-50 mx-auto hover:opacity-100 trans'
    })
  }, {
    href: 'https://medium.com/pooltogether',
    label: 'Medium',
    icon: /*#__PURE__*/React__default.createElement("img", {
      src: MediumLogo,
      className: 'w-4 opacity-50 mx-auto hover:opacity-100 trans'
    })
  }]
}];
var SocialLinks = function SocialLinks(props) {
  var t = props.t;

  if (!t) {
    console.error('<SocialLinks /> requires the prop t (i18n trans method)');
  }

  var _useState = React.useState(),
      expanded = _useState[0],
      setExpanded = _useState[1];

  return React__default.createElement(React__default.Fragment, null, socialsLinkData.map(function (linkData, index) {
    return React__default.createElement(SocialLinkSet, {
      t: t,
      key: "social-link-set-" + index,
      index: index,
      linkData: linkData,
      expanded: expanded,
      setExpanded: setExpanded
    });
  }));
};

var SocialLinkSet = function SocialLinkSet(props) {
  var linkData = props.linkData;
  var content = linkData.childLinks.map(function (childLink, index) {
    return React__default.createElement(SocialLinkChild, Object.assign({}, props, {
      key: "social-link-child-" + index,
      childLink: childLink
    }));
  });
  return React__default.createElement(SocialLinkHeader, Object.assign({}, props), content);
};

var SocialLinkHeader = function SocialLinkHeader(props) {
  var t = props.t;
  return React__default.createElement(Accordion, {
    openUpwards: true,
    key: "social-link-" + props.index,
    i: props.index,
    expanded: props.expanded,
    setExpanded: props.setExpanded,
    content: props.children,
    header: React__default.createElement("a", {
      className: classnames(sharedClasses, headerClasses)
    }, React__default.createElement(FeatherIcon, {
      icon: 'chevron-up',
      strokeWidth: '0.25rem',
      className: classnames('w-4 h-4 stroke-current trans', {
        'rotate-180': props.expanded === props.index
      })
    }), React__default.createElement("span", {
      className: 'pl-3 capitalize'
    }, t(props.linkData.langKey, props.linkData.headerLabel)))
  });
};

var SocialLinkChild = function SocialLinkChild(props) {
  var t = props.t,
      childLink = props.childLink;
  var langKey = childLink.langKey,
      label = childLink.label,
      icon = childLink.icon,
      href = childLink.href,
      target = childLink.target;
  return React__default.createElement("div", null, React__default.createElement("a", {
    href: href,
    target: target,
    className: classnames(sharedClasses, childClasses)
  }, React__default.createElement("span", {
    className: 'w-4'
  }, icon), React__default.createElement("span", {
    className: 'pl-3 capitalize'
  }, langKey ? t(langKey, label) : label)));
};

SocialLinkChild.defaultProps = {
  target: '_blank'
};

var Squiggle = "data:image/svg+xml,%3Csvg%20width%3D%2271%22%20height%3D%225%22%20viewBox%3D%220%200%2071%205%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M68.1762%202.49866C67.6215%201.82577%2067.2685%201.44126%2066.5626%201.44126C65.8566%201.44126%2065.5036%201.82577%2064.9489%202.49866C64.3438%203.21961%2063.6379%204.13281%2062.1251%204.13281C60.6627%204.13281%2059.9063%203.21961%2059.3012%202.49866C58.7465%201.82577%2058.3935%201.44126%2057.6876%201.44126C56.9816%201.44126%2056.6286%201.82577%2056.0739%202.49866C55.4688%203.21961%2054.7628%204.13281%2053.25%204.13281C51.7877%204.13281%2051.0313%203.21961%2050.4262%202.49866C49.8715%201.82577%2049.5185%201.44126%2048.8125%201.44126C48.1066%201.44126%2047.7536%201.82577%2047.1989%202.49866C46.5938%203.21961%2045.8878%204.13281%2044.375%204.13281C42.8622%204.13281%2042.1563%203.21961%2041.5512%202.49866C40.9965%201.82577%2040.6435%201.44126%2039.9375%201.44126C39.2315%201.44126%2038.8786%201.82577%2038.3239%202.49866C37.7188%203.21961%2037.0128%204.13281%2035.5%204.13281V2.69091C36.206%202.69091%2036.559%202.3064%2037.1136%201.63351C37.7188%200.912563%2038.4247%20-0.000640994%2039.9375%20-0.000640994C41.4503%20-0.000640994%2042.1563%200.912563%2042.7614%201.63351C43.3161%202.3064%2043.6691%202.69091%2044.375%202.69091C45.081%202.69091%2045.434%202.3064%2045.9887%201.63351C46.5938%200.912563%2047.2997%20-0.000640994%2048.8125%20-0.000640994C50.2749%20-0.000640994%2051.0313%200.912563%2051.6364%201.63351C52.1911%202.3064%2052.5441%202.69091%2053.25%202.69091C53.956%202.69091%2054.309%202.3064%2054.8637%201.63351C55.4688%200.912563%2056.1748%20-0.000640994%2057.6876%20-0.000640994C59.1499%20-0.000640994%2059.9063%200.912563%2060.5114%201.63351C61.0661%202.3064%2061.4191%202.69091%2062.1251%202.69091C62.831%202.69091%2063.184%202.3064%2063.7387%201.63351C64.3438%200.912563%2065.0498%20-0.000640994%2066.5626%20-0.000640994C68.0754%20-0.000640994%2068.7813%200.912563%2069.3865%201.63351C69.9411%202.3064%2070.2941%202.69091%2071.0001%202.69091V4.13281C69.5377%204.13281%2068.7813%203.21961%2068.1762%202.49866Z%22%20fill%3D%22%23BBB2CE%22%2F%3E%3Cpath%20d%3D%22M32.6762%202.49866C32.1215%201.82577%2031.7685%201.44126%2031.0626%201.44126C30.3566%201.44126%2030.0036%201.82577%2029.4489%202.49866C28.8438%203.21961%2028.1379%204.13281%2026.6251%204.13281C25.1627%204.13281%2024.4063%203.21961%2023.8012%202.49866C23.2465%201.82577%2022.8935%201.44126%2022.1876%201.44126C21.4816%201.44126%2021.1286%201.82577%2020.5739%202.49866C19.9688%203.21961%2019.2628%204.13281%2017.75%204.13281C16.2877%204.13281%2015.5313%203.21961%2014.9262%202.49866C14.3715%201.82577%2014.0185%201.44126%2013.3125%201.44126C12.6066%201.44126%2012.2536%201.82577%2011.6989%202.49866C11.0938%203.21961%2010.3878%204.13281%208.87502%204.13281C7.36223%204.13281%206.65627%203.21961%206.05115%202.49866C5.49646%201.82577%205.14348%201.44126%204.43751%201.44126C3.73154%201.44126%203.37856%201.82577%202.82387%202.49866C2.21876%203.21961%201.51279%204.13281%200%204.13281V2.69091C0.705968%202.69091%201.05895%202.3064%201.61364%201.63352C2.21876%200.912565%202.92472%20-0.000640777%204.43751%20-0.000640777C5.9503%20-0.000640777%206.65627%200.912565%207.26138%201.63352C7.81607%202.3064%208.16905%202.69091%208.87502%202.69091C9.58099%202.69091%209.93397%202.3064%2010.4887%201.63352C11.0938%200.912565%2011.7997%20-0.000640777%2013.3125%20-0.000640777C14.7749%20-0.000640777%2015.5313%200.912565%2016.1364%201.63352C16.6911%202.3064%2017.0441%202.69091%2017.75%202.69091C18.456%202.69091%2018.809%202.3064%2019.3637%201.63352C19.9688%200.912565%2020.6748%20-0.000640777%2022.1876%20-0.000640777C23.6499%20-0.000640777%2024.4063%200.912565%2025.0114%201.63352C25.5661%202.3064%2025.9191%202.69091%2026.6251%202.69091C27.331%202.69091%2027.684%202.3064%2028.2387%201.63352C28.8438%200.912565%2029.5498%20-0.000640777%2031.0626%20-0.000640777C32.5754%20-0.000640777%2033.2813%200.912565%2033.8865%201.63352C34.4411%202.3064%2034.7941%202.69091%2035.5001%202.69091V4.13281C34.0377%204.13281%2033.2813%203.21961%2032.6762%202.49866Z%22%20fill%3D%22%23BBB2CE%22%2F%3E%3C%2Fsvg%3E";

var P_POOL_ADDRESS = '0x396b4489da692788e327e2e4b2b0459a5ef26791';
var NavPoolBalance = function NavPoolBalance(props) {
  var className = props.className,
      usersAddress = props.usersAddress,
      t = props.t;

  var _useState = React.useState(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var openModal = function openModal() {
    return setIsOpen(true);
  };

  var closeModal = function closeModal() {
    return setIsOpen(false);
  };

  var _usePoolTokenData = hooks.usePoolTokenData(usersAddress, usersAddress),
      tokenData = _usePoolTokenData.data,
      isFetched = _usePoolTokenData.isFetched;

  if (!isFetched || !tokenData) {
    return null;
  }

  return React__default.createElement(React__default.Fragment, null, React__default.createElement("div", {
    className: classnames('flex relative text-highlight-4 hover:text-white font-bold cursor-pointer pool-gradient-1 rounded-full px-3 xs:px-4 p-2 leading-none trans', className),
    onClick: openModal
  }, "POOL"), React__default.createElement(PoolBalanceModal, {
    t: t,
    isOpen: isOpen,
    closeModal: closeModal,
    tokenData: tokenData,
    usersAddress: usersAddress
  }));
};

var PoolBalanceModal = function PoolBalanceModal(props) {
  var _GOVERNANCE_CONTRACT_, _tokenInfo$market_dat, _claimableFromTokenFa, _claimableFromTokenFa2;

  var t = props.t;
  var isOpen = props.isOpen,
      closeModal = props.closeModal,
      tokenData = props.tokenData,
      usersAddress = props.usersAddress;
  var usersBalanceBN = tokenData.usersBalanceBN,
      usersBalance = tokenData.usersBalance,
      totalSupply = tokenData.totalSupply;
  var chainId = hooks.useGovernanceChainId(); // TOKEN DATA

  var totalSupplyFormatted = utilities.numberWithCommas(totalSupply);
  var tokenAddress = (_GOVERNANCE_CONTRACT_ = GOVERNANCE_CONTRACT_ADDRESSES[chainId]) == null ? void 0 : _GOVERNANCE_CONTRACT_.GovernanceToken;

  var _useCoingeckoTokenDat = hooks.useCoingeckoTokenData(chainId, tokenAddress),
      tokenInfo = _useCoingeckoTokenDat.data;

  var inCirculationFormatted = utilities.numberWithCommas(tokenInfo == null ? void 0 : (_tokenInfo$market_dat = tokenInfo.market_data) == null ? void 0 : _tokenInfo$market_dat.circulating_supply); // USERS DATA

  var zeroBn = ethers.ethers.BigNumber.from(0); // Claimable

  var poolTokenAddress = GOVERNANCE_CONTRACT_ADDRESSES[chainId].GovernanceToken.toLowerCase();

  var _useRetroactivePoolCl = hooks.useRetroactivePoolClaimData(usersAddress),
      retroPoolClaimData = _useRetroactivePoolCl.data;

  var _useClaimableTokenFro = hooks.useClaimableTokenFromTokenFaucets(utilities.NETWORK.mainnet, usersAddress),
      claimableFromTokenFaucets = _useClaimableTokenFro.data;

  var totalClaimablePool = (claimableFromTokenFaucets == null ? void 0 : (_claimableFromTokenFa = claimableFromTokenFaucets.totals) == null ? void 0 : (_claimableFromTokenFa2 = _claimableFromTokenFa[poolTokenAddress]) == null ? void 0 : _claimableFromTokenFa2.totalClaimableAmountUnformatted) || zeroBn;

  if (retroPoolClaimData != null && retroPoolClaimData.amount && !retroPoolClaimData.isClaimed) {
    totalClaimablePool = totalClaimablePool.add(retroPoolClaimData.amount);
  }

  var totalClaimablePoolFormatted = utilities.numberWithCommas(ethers.ethers.utils.formatEther(totalClaimablePool)) || '0.00'; // POOL Balance

  var balanceFormatted = usersBalance ? utilities.numberWithCommas(usersBalance) : '0.00'; // pPOOL Balance

  var _useUserTicketsFormat = hooks.useUserTicketsFormattedByPool(usersAddress),
      playerDepositData = _useUserTicketsFormat.data;

  var pPoolPlayerDepositData = playerDepositData == null ? void 0 : playerDepositData.find(function (depositData) {
    return depositData.poolAddress === P_POOL_ADDRESS;
  });
  var pPoolBalance = (pPoolPlayerDepositData == null ? void 0 : pPoolPlayerDepositData.total.amountUnformatted) || zeroBn;
  var pPoolBalanceFormatted = utilities.numberWithCommas(pPoolBalance); // DELEGATED Balance

  var blockNumber = 'latest';

  var _useTokenHolder = hooks.useTokenHolder(usersAddress, blockNumber),
      tokenHolder = _useTokenHolder.data;

  var delegatedBalance = tokenHolder != null && tokenHolder.delegatedVotes ? ethers.ethers.utils.parseEther(tokenHolder == null ? void 0 : tokenHolder.delegatedVotes) : zeroBn;
  var delegatedBalanceFormatted = utilities.numberWithCommas(delegatedBalance || zeroBn);
  var totalPool = delegatedBalance.add(pPoolBalance).add(usersBalanceBN).add(totalClaimablePool);
  return React__default.createElement(Modal, {
    label: 'POOL Token Details Modal',
    isOpen: isOpen,
    closeModal: closeModal,
    className: 'flex flex-col'
  }, React__default.createElement("div", {
    className: 'py-4 flex flex-col'
  }, React__default.createElement("div", {
    className: 'flex mx-auto'
  }, React__default.createElement(PoolIcon, {
    className: 'shadow-xl w-28 h-28 spinningCoin'
  }), React__default.createElement("div", {
    className: 'flex flex-col ml-8 justify-center mr-8 leading-none'
  }, React__default.createElement("h2", null, utilities.numberWithCommas(totalPool)), React__default.createElement("span", {
    className: 'font-bold text-accent-1 mt-1 uppercase'
  }, t('totalPool', 'Total POOL')))), React__default.createElement("div", {
    className: 'bg-body p-4 rounded-xl mt-8'
  }, React__default.createElement("div", {
    className: 'flex justify-between'
  }, React__default.createElement("span", {
    className: 'text-accent-1'
  }, t('balanceHeld', 'Balance held'), ":"), React__default.createElement("span", {
    className: 'font-bold'
  }, balanceFormatted)), React__default.createElement("div", {
    className: 'flex justify-between'
  }, React__default.createElement("span", {
    className: 'text-accent-1'
  }, t('delegatedToYou', 'Delegated to you'), ":"), React__default.createElement("span", {
    className: 'font-bold'
  }, delegatedBalanceFormatted)), React__default.createElement("div", {
    className: 'flex justify-between'
  }, React__default.createElement("span", {
    className: 'text-accent-1'
  }, t('pPOOL', 'pPOOL balance'), ":"), React__default.createElement("span", {
    className: 'font-bold'
  }, pPoolBalanceFormatted)), React__default.createElement("div", {
    className: 'flex justify-between'
  }, React__default.createElement("span", {
    className: 'text-accent-1'
  }, t('unclaimed'), ":"), React__default.createElement("span", {
    className: 'font-bold'
  }, totalClaimablePoolFormatted)), React__default.createElement("img", {
    src: Squiggle,
    className: 'mx-auto mt-4 mb-3'
  }), React__default.createElement("div", {
    className: 'flex justify-between'
  }, React__default.createElement("span", {
    className: 'text-accent-1'
  }, t('inCirculation'), ":"), React__default.createElement("span", {
    className: 'font-bold'
  }, inCirculationFormatted)), React__default.createElement("div", {
    className: 'flex justify-between'
  }, React__default.createElement("span", {
    className: 'text-accent-1'
  }, t('totalSupply'), ":"), React__default.createElement("span", {
    className: 'font-bold'
  }, totalSupplyFormatted))), React__default.createElement(ButtonLink, {
    textSize: 'xxxs',
    href: 'https://app.pooltogether.com/account#governance-claims',
    width: 'w-full',
    className: 'mt-4'
  }, t('claimPool')), React__default.createElement(ButtonLink, {
    textSize: 'xxxs',
    href: 'https://sybil.org/#/delegates/pool',
    width: 'w-full',
    className: 'mt-4'
  }, t('activateVotingPower'))));
};

/**
 * TODO: Make settings extendible for all apps
 * @param {*} props
 * @returns
 */

function SettingsContainer(props) {
  var t = props.t,
      className = props.className,
      sizeClassName = props.sizeClassName;

  var _useState = React.useState(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var shouldReduceMotion = hooks.useReducedMotion();

  var toggleOpen = function toggleOpen(e) {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return React__default.createElement(React__default.Fragment, null, React__default.createElement("button", {
    onClick: toggleOpen,
    className: classnames('hover:text-inverse', sizeClassName, className, {
      'text-highlight-2': !isOpen,
      'text-highlight-1': isOpen
    })
  }, React__default.createElement(FeatherIcon, {
    icon: 'settings',
    className: 'w-6 w-6',
    strokeWidth: '0.09rem'
  })), React__default.createElement(framerMotion.motion.div, {
    key: 'settings-overlay',
    onClick: toggleOpen,
    className: classnames('fixed t-0 l-0 r-0 b-0 w-full h-full z-40 bg-overlay bg-blur', {
      'pointer-events-none': !isOpen
    }),
    animate: isOpen ? 'enter' : 'exit',
    initial: 'initial',
    transition: {
      duration: shouldReduceMotion ? 0 : 0.1
    },
    variants: {
      exit: {
        opacity: 0
      },
      enter: {
        opacity: 1
      },
      initial: {
        opacity: 0
      }
    }
  }), React__default.createElement(framerMotion.motion.div, {
    className: 'bg-highlight-3 border-l h-full fixed t-0 b-0 z-40 px-8 pr-16 py-8 shadow-md',
    style: {
      borderColor: 'black',
      height: '100vh',
      right: -30,
      width: '320px'
    },
    animate: isOpen ? 'enter' : 'exit',
    initial: 'initial',
    variants: {
      exit: {
        x: '320px',
        opacity: 0,
        transition: {
          duration: shouldReduceMotion ? 0 : 0.2,
          staggerChildren: shouldReduceMotion ? 0 : 0.1
        }
      },
      enter: {
        x: 0,
        opacity: 1,
        transition: {
          duration: shouldReduceMotion ? 0 : 0.1,
          staggerChildren: shouldReduceMotion ? 0 : 0.1
        }
      },
      initial: {
        x: 0,
        opacity: 0,
        transition: {
          duration: shouldReduceMotion ? 0 : 0.1
        }
      }
    }
  }, React__default.createElement("button", {
    onClick: toggleOpen,
    className: classnames('absolute close-button hover:opacity-70 trans text-white hover:text-white', 'outline-none focus:outline-none active:outline-none top-6 right-12')
  }, React__default.createElement(VisuallyHidden, null, "Close"), React__default.createElement("span", {
    "aria-hidden": true
  }, React__default.createElement(FeatherIcon, {
    icon: 'x',
    className: 'w-6 h-6 stroke-current'
  }))), React__default.createElement("h6", {
    className: 'text-white mt-4 mb-10 uppercase font-semibold'
  }, t('settings', 'Settings')), props.children));
}
SettingsContainer.defaultProps = {
  sizeClassName: 'w-5 h-5 sm:w-6 sm:h-6',
  className: ''
};

var SettingsItem = function SettingsItem(props) {
  return React__default.createElement("div", {
    className: 'mt-10'
  }, React__default.createElement("span", {
    className: classnames('flex text-accent-1 font-bold text-xxs', {
      'mb-2': !Boolean(props.description)
    })
  }, React__default.createElement("span", {
    className: 'uppercase'
  }, props.label), props.tip && React__default.createElement(Tooltip, {
    className: 'ml-1 my-auto',
    tip: props.tip,
    id: props.label
  })), props.description && React__default.createElement("p", {
    className: 'text-inverse font-bold text-xxs mb-2'
  }, props.description), props.children);
};

var ThemeSettingsItem = function ThemeSettingsItem(props) {
  var t = props.t;
  return React__default.createElement(SettingsItem, {
    label: t('theme', 'Theme')
  }, React__default.createElement(ThemeSwitcher, null));
};

var ThemeSwitcher = function ThemeSwitcher() {
  var _useContext = React.useContext(ThemeContext),
      toggleTheme = _useContext.toggleTheme;

  return React__default.createElement("div", {
    onClick: toggleTheme,
    className: 'theme-toggler m-0 relative select-none'
  }, React__default.createElement("div", {
    className: 'toggle'
  }), React__default.createElement("div", {
    className: 'theme-toggler--names relative z-10 flex items-center justify-between'
  }, React__default.createElement("span", {
    className: 'theme-toggler--light font-bold text-xxs ml-2 sm:ml-3'
  }, React__default.createElement(FeatherIcon, {
    icon: 'sun',
    className: 'relative w-4 h-4 sm:w-4 sm:h-4',
    strokeWidth: '3'
  })), React__default.createElement("span", {
    className: 'theme-toggler--dark font-bold text-xxs mr-2 sm:mr-3'
  }, React__default.createElement(FeatherIcon, {
    icon: 'moon',
    className: 'relative w-4 h-4 sm:w-4 sm:h-4',
    strokeWidth: '3'
  }))));
};

var TestnetSettingsItem = function TestnetSettingsItem(props) {
  var t = props.t;
  return React__default.createElement(SettingsItem, {
    label: t('developmentMode', 'Development mode')
  }, React__default.createElement(Toggle, {
    label: t('useTestnets', 'Use testnets')
  }));
};

var Toggle = function Toggle(props) {
  var _useIsTestnets = hooks.useIsTestnets(),
      isTestnets = _useIsTestnets.isTestnets,
      enableTestnets = _useIsTestnets.enableTestnets,
      disableTestnets = _useIsTestnets.disableTestnets;

  return React__default.createElement(CheckboxInputGroup, {
    large: true,
    id: 'testnets-view-toggle',
    name: 'testnets-view-toggle',
    label: props.label,
    checked: isTestnets,
    handleClick: function handleClick() {
      if (isTestnets) {
        disableTestnets();
      } else {
        enableTestnets();
      }
    }
  });
};

var DesktopLogo = "data:image/svg+xml,%3Csvg%20width%3D%22103%22%20height%3D%2241%22%20viewBox%3D%220%200%20103%2041%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M4.36976%209.00115C4.30537%208.40838%204.61829%208.3433%204.7828%208.38486C4.7828%208.38486%207.5041%209.54081%2012.9385%209.63567C18.3729%209.73053%2021.3636%208.42537%2021.3636%208.42537C21.5283%208.38462%2021.8409%208.45123%2021.7736%209.04367C21.7063%209.63611%2021.6034%2011.3478%2021.5603%2012.1296L24.6879%2012.1373C25.072%2012.1245%2025.7821%2012.3457%2025.5492%2013.3328C25.5018%2013.5336%2025.4323%2013.8772%2025.3431%2014.3182C24.8839%2016.5872%2023.9025%2021.4369%2022.7279%2022.7089C21.9024%2023.6945%2020.7901%2024.1856%2019.9254%2024.3893C19.2051%2024.6035%2018.4539%2024.5658%2018.1941%2024.5527L18.1941%2024.5527C18.1569%2024.5509%2018.1297%2024.5495%2018.1142%2024.5495C17.536%2025.4123%2016.0581%2027.277%2014.7728%2027.8336C14.3538%2027.9848%2014.3571%2028.137%2014.3598%2028.2567C14.36%2028.2664%2014.3602%2028.276%2014.3602%2028.2852C14.426%2029.3965%2014.7053%2031.8829%2015.2953%2032.9378C15.3736%2033.0953%2015.3956%2033.2151%2015.4107%2033.2973C15.4272%2033.3871%2015.4354%2033.432%2015.4999%2033.4322L16.2818%2033.4341C16.3641%2033.4343%2016.5616%2033.4348%2016.6929%2033.5997C16.7631%2033.6879%2016.8862%2033.6859%2017.0201%2033.6837C17.1993%2033.6807%2017.398%2033.6775%2017.5153%2033.8898C17.6408%2034.1171%2017.6147%2034.3598%2017.6013%2034.4848C17.5983%2034.5121%2017.596%2034.5337%2017.596%2034.5484L18.8305%2034.5515C18.9814%2034.5518%2019.283%2034.6266%2019.2823%2034.9229L19.2763%2037.3921C19.2762%2037.4371%2019.273%2037.4739%2019.2703%2037.504C19.2585%2037.639%2019.2585%2037.639%2019.6049%2037.6398L20.6749%2037.6424C20.7436%2037.6426%2020.8806%2037.6512%2020.8797%2038.0133L20.877%2039.1245C20.8768%2039.2068%2020.8764%2039.3714%2020.5061%2039.3705L5.48909%2039.3338C5.11871%2039.3329%205.11911%2039.1683%205.11931%2039.086L5.12203%2037.9748C5.12291%2037.6127%205.26001%2037.6048%205.3287%2037.605L6.39867%2037.6076C6.74509%2037.6084%206.74509%2037.6084%206.73392%2037.4733L6.73392%2037.4733L6.73392%2037.4733C6.73143%2037.4432%206.72839%2037.4064%206.7285%2037.3615L6.73454%2034.8923C6.73526%2034.596%207.03723%2034.5226%207.18812%2034.523L8.42271%2034.526C8.42274%2034.5113%208.42052%2034.4896%208.41773%2034.4624C8.40489%2034.3373%208.37998%2034.0944%208.50662%2033.8678C8.62492%2033.6561%208.82359%2033.6603%209.00283%2033.6641C9.13673%2033.6669%209.25978%2033.6695%209.33039%2033.5817C9.46248%2033.4174%209.66001%2033.4179%209.74232%2033.4181L10.5242%2033.42C10.5887%2033.4202%2010.5972%2033.3753%2010.6141%2033.2856C10.6296%2033.2035%2010.6522%2033.0838%2010.7312%2032.9267C11.3264%2031.8746%2011.6178%2029.3897%2011.6891%2028.2787C11.6891%2028.2695%2011.6893%2028.26%2011.6896%2028.2503L11.6896%2028.2502C11.6928%2028.1305%2011.6969%2027.9783%2011.2787%2027.825C9.99605%2027.2622%208.52734%2025.3903%207.95331%2024.5247C7.9379%2024.5246%207.91096%2024.5258%207.874%2024.5275L7.87381%2024.5275L7.87342%2024.5275L7.87338%2024.5275C7.61358%2024.5393%206.86224%2024.5733%206.14298%2024.3556C5.27928%2024.1477%204.16935%2023.6512%203.34871%2022.6615C2.18033%2021.3838%201.22263%2016.5294%200.774562%2014.2582C0.687468%2013.8167%200.619626%2013.4728%200.573236%2013.2718C0.345193%2012.2836%201.0563%2012.0658%201.44036%2012.0805L4.56799%2012.0881C4.52874%2011.3061%204.43416%209.59391%204.36976%209.00115ZM2.28291%2013.4563C1.80178%2013.4479%201.91603%2014.0104%202.00296%2014.4384C2.01424%2014.494%202.02506%2014.5473%202.03406%2014.5967C2.11241%2015.0274%202.47635%2016.8024%203.43386%2019.658C4.39138%2022.5137%206.24224%2022.7215%207.04799%2022.4685C6.49643%2021.276%205.33248%2017.4589%205.09794%2016.1384C4.86341%2014.8178%204.57168%2013.4963%204.22837%2013.4903L2.28291%2013.4563ZM24.0922%2014.6083C24.1866%2014.1819%2024.3106%2013.6215%2023.8294%2013.6215L21.8837%2013.6215C21.5403%2013.6215%2021.2256%2014.9378%2020.968%2016.254C20.7105%2017.5703%2019.4801%2021.3664%2018.9078%2022.5491C19.709%2022.8162%2021.5632%2022.6407%2022.5704%2019.8022C23.5776%2016.9636%2023.9725%2015.1953%2024.0583%2014.7661C24.0682%2014.7168%2024.0799%2014.6637%2024.0922%2014.6084L24.0922%2014.6083ZM15.8371%2019.0339L13.0318%2020.7994L10.2387%2019.0146L13.0235%2023.0751L13.0235%2023.0762L13.0239%2023.0757L13.0243%2023.0763L13.0243%2023.0751L15.8371%2019.0339ZM13.0593%2013.0568L13.0593%2013.0542L13.0585%2013.0555L13.0578%2013.0542L13.0578%2013.0567L10.2246%2017.8981L13.035%2019.6606L13.035%2019.6615L13.0358%2019.661L13.0365%2019.6615L13.0365%2019.6606L15.859%2017.9176L13.0593%2013.0568Z%22%20fill%3D%22%23FFB636%22%2F%3E%3Cpath%20d%3D%22M21.6577%208.5115C21.6508%209.30163%2017.8277%209.90884%2013.1185%209.86775C8.40934%209.82665%204.48295%209.15081%204.48984%208.36068C4.49674%207.57055%208.43431%206.96534%2013.1435%207.00643C17.8527%207.04753%2021.6646%207.72137%2021.6577%208.5115Z%22%20fill%3D%22%23FFD469%22%2F%3E%3Cpath%20d%3D%22M19.1859%2011.3281C19.6066%2011.3281%2019.6818%2011.3281%2020.4447%2011.0611C20.3502%2011.5687%2019.8526%2015.4163%2019.6818%2016.0202C19.2253%2017.6337%2018.7098%2020.1273%2018.0414%2020.6092C17.9145%2020.7007%2017.3548%2020.6092%2017.1465%2020.475C16.9382%2020.3408%2017.66%2018.9575%2018.5374%2016.0202C19.0333%2012.854%2018.8807%2011.4807%2019.1859%2011.3281Z%22%20fill%3D%22%23FFCC4E%22%2F%3E%3Cpath%20d%3D%22M41.953%207.27529C47.1511%207.27529%2051.365%2011.5596%2051.365%2016.8445V22.3468C51.365%2027.6317%2047.1511%2031.9159%2041.953%2031.9159C41.1365%2031.9159%2040.3443%2031.8102%2039.5888%2031.6115L39.5889%2032.2611C39.5889%2036.1272%2036.4914%2039.2687%2032.6466%2039.3311L32.5299%2039.3321V18.2799L32.5407%2018.2796L32.541%2016.8445C32.541%2011.5596%2036.7549%207.27529%2041.953%207.27529ZM84.1023%207.27529C89.3035%207.27529%2093.5198%2011.584%2093.5198%2016.8992V22.4329C93.5198%2027.748%2089.3035%2032.0568%2084.1023%2032.0568C78.9011%2032.0568%2074.6847%2027.748%2074.6847%2022.4329V16.8992C74.6847%2011.584%2078.9011%207.27529%2084.1023%207.27529ZM63.0249%206.82059C68.2261%206.82059%2072.4424%2011.1293%2072.4424%2016.4445V21.9782C72.4424%2027.2933%2068.2261%2031.6021%2063.0249%2031.6021C57.8237%2031.6021%2053.6073%2027.2933%2053.6073%2021.9782V16.4445C53.6073%2011.1293%2057.8237%206.82059%2063.0249%206.82059ZM102.937%200V24.4146C102.937%2028.3444%2099.7888%2031.5376%2095.8808%2031.6011L95.7621%2031.6021V7.18743C95.7621%203.21792%2098.9746%200%20102.937%200ZM84.1023%2014.4932C82.802%2014.4932%2081.7479%2015.5704%2081.7479%2016.8992V22.4329C81.7479%2023.7617%2082.802%2024.8389%2084.1023%2024.8389C85.4026%2024.8389%2086.4567%2023.7617%2086.4567%2022.4329V16.8992C86.4567%2015.5704%2085.4026%2014.4932%2084.1023%2014.4932ZM41.953%2014.4522C40.6535%2014.4522%2039.6%2015.5232%2039.6%2016.8445V22.3468C39.6%2023.668%2040.6535%2024.739%2041.953%2024.739C43.2525%2024.739%2044.306%2023.668%2044.306%2022.3468V16.8445C44.306%2015.5232%2043.2525%2014.4522%2041.953%2014.4522ZM63.0249%2014.0385C61.7246%2014.0385%2060.6705%2015.1157%2060.6705%2016.4445V21.9782C60.6705%2023.307%2061.7246%2024.3842%2063.0249%2024.3842C64.3252%2024.3842%2065.3793%2023.307%2065.3793%2021.9782V16.4445C65.3793%2015.1157%2064.3252%2014.0385%2063.0249%2014.0385Z%22%20fill%3D%22%234C249F%22%2F%3E%3Cpath%20d%3D%22M76.5819%2038.179H76.3861C76.1914%2038.179%2076.0204%2037.9968%2076.0204%2037.713V36.3722H76.4379C76.6323%2036.3722%2076.7805%2036.2436%2076.7805%2036.0606C76.7805%2035.9681%2076.7461%2035.8859%2076.683%2035.827C76.6202%2035.7685%2076.5341%2035.7376%2076.4379%2035.7376H76.0204V34.9857C76.0204%2034.7804%2075.8673%2034.6284%2075.6605%2034.6284C75.4538%2034.6284%2075.3007%2034.7804%2075.3007%2034.9857V35.7376H75.1078C75.0116%2035.7376%2074.9254%2035.7685%2074.8627%2035.827C74.7996%2035.8859%2074.7651%2035.9681%2074.7651%2036.0606C74.7651%2036.2436%2074.9134%2036.3722%2075.1078%2036.3722H75.3007V37.713C75.3007%2038.3806%2075.7643%2038.8937%2076.3861%2038.8937H76.4897C76.7135%2038.8937%2076.9015%2038.7524%2076.9015%2038.5364C76.9015%2038.3405%2076.7687%2038.179%2076.5819%2038.179Z%22%20fill%3D%22%234C249F%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M80.9228%2037.2613L80.9228%2037.2609C80.9169%2036.2907%2080.2293%2035.6004%2079.2673%2035.6004C78.7834%2035.6004%2078.3671%2035.7712%2078.0718%2036.0667C77.7765%2036.3622%2077.6061%2036.7783%2077.6061%2037.2613C77.6061%2037.7416%2077.7766%2038.1562%2078.0719%2038.451C78.3672%2038.7457%2078.7834%2038.9166%2079.2673%2038.9166C79.7485%2038.9166%2080.1633%2038.7456%2080.4579%2038.4509C80.7524%2038.1562%2080.9228%2037.7416%2080.9228%2037.2613ZM79.2673%2036.2579C79.548%2036.2579%2079.7834%2036.362%2079.9491%2036.537C80.115%2036.7123%2080.2146%2036.9628%2080.2146%2037.2613C80.2146%2037.5598%2080.115%2037.8088%2079.9493%2037.9826C79.7837%2038.1562%2079.5483%2038.259%2079.2673%2038.259C78.9864%2038.259%2078.7493%2038.1561%2078.5824%2037.9824C78.4152%2037.8085%2078.3143%2037.5595%2078.3143%2037.2613C78.3143%2036.6682%2078.7119%2036.2579%2079.2673%2036.2579Z%22%20fill%3D%22%234C249F%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M83.4295%2040.1916C82.863%2040.1916%2082.3462%2039.9663%2082.0029%2039.536C81.9391%2039.4583%2081.9151%2039.3677%2081.9305%2039.2808C81.9458%2039.1946%2081.9986%2039.1186%2082.076%2039.0662L82.0766%2039.0658C82.2491%2038.9517%2082.4577%2039.0031%2082.5708%2039.1502C82.7628%2039.3934%2083.0572%2039.5341%2083.441%2039.5341C83.6992%2039.5341%2083.9346%2039.4395%2084.1056%2039.2605C84.2766%2039.0815%2084.3882%2038.8128%2084.3882%2038.4563V38.411C84.1337%2038.7295%2083.7635%2038.9166%2083.3258%2038.9166C82.8746%2038.9166%2082.4867%2038.7444%2082.212%2038.449C81.9376%2038.1541%2081.7797%2037.7401%2081.7797%2037.2613C81.7797%2036.7783%2081.9501%2036.3622%2082.2454%2036.0667C82.5408%2035.7712%2082.957%2035.6004%2083.441%2035.6004C84.403%2035.6004%2085.0905%2036.2907%2085.0965%2037.2609L85.0965%2037.2613L85.0965%2038.4963C85.0965%2039.4358%2084.4169%2040.1916%2083.4295%2040.1916ZM83.441%2038.259C83.16%2038.259%2082.923%2038.1561%2082.756%2037.9824C82.5888%2037.8085%2082.488%2037.5595%2082.488%2037.2613C82.488%2036.6682%2082.8855%2036.2579%2083.441%2036.2579C83.7216%2036.2579%2083.9571%2036.362%2084.1227%2036.537C84.2886%2036.7123%2084.3882%2036.9628%2084.3882%2037.2613C84.3882%2037.5598%2084.2887%2037.8088%2084.1229%2037.9826C83.9574%2038.1562%2083.7219%2038.259%2083.441%2038.259Z%22%20fill%3D%22%234C249F%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M88.7429%2038.0752C88.6163%2037.9717%2088.4297%2037.9759%2088.2913%2038.0788C88.1474%2038.1846%2087.886%2038.2819%2087.6664%2038.2819C87.1443%2038.2819%2086.7588%2037.9778%2086.6489%2037.5329H88.749C88.8429%2037.5329%2088.9276%2037.5016%2088.9894%2037.4431C89.0514%2037.3844%2089.0858%2037.3023%2089.0858%2037.2099C89.0858%2036.7445%2088.9478%2036.3416%2088.6873%2036.0543C88.426%2035.766%2088.0473%2035.6004%2087.58%2035.6004C87.1071%2035.6004%2086.6993%2035.7716%2086.4099%2036.0673C86.1206%2036.3628%2085.9533%2036.7787%2085.9533%2037.2613C85.9533%2037.7424%2086.1301%2038.1573%2086.4351%2038.4518C86.7399%2038.7462%2087.1688%2038.9166%2087.6664%2038.9166C88.0325%2038.9166%2088.4802%2038.7691%2088.7532%2038.5525C88.8321%2038.4917%2088.875%2038.4081%2088.872%2038.3174C88.8691%2038.2281%2088.822%2038.1434%2088.7444%2038.0765L88.7429%2038.0752ZM87.58%2036.235C87.8218%2036.235%2088.012%2036.3159%2088.1501%2036.4504C88.2726%2036.5698%2088.3578%2036.735%2088.3987%2036.9326H86.6551C86.7043%2036.7348%2086.8013%2036.5703%2086.9392%2036.4512C87.0958%2036.3159%2087.3101%2036.235%2087.58%2036.235Z%22%20fill%3D%22%234C249F%22%2F%3E%3Cpath%20d%3D%22M91.3926%2038.179H91.1968C91.0021%2038.179%2090.8311%2037.9968%2090.8311%2037.713V36.3722H91.2486C91.443%2036.3722%2091.5912%2036.2436%2091.5912%2036.0606C91.5912%2035.9681%2091.5568%2035.8859%2091.4937%2035.827C91.4309%2035.7685%2091.3447%2035.7376%2091.2486%2035.7376H90.8311V34.9857C90.8311%2034.7804%2090.678%2034.6284%2090.4712%2034.6284C90.2645%2034.6284%2090.1113%2034.7804%2090.1113%2034.9857V35.7376H89.9184C89.8223%2035.7376%2089.7361%2035.7685%2089.6734%2035.827C89.6103%2035.8859%2089.5758%2035.9681%2089.5758%2036.0606C89.5758%2036.2436%2089.7241%2036.3722%2089.9184%2036.3722H90.1113V37.713C90.1113%2038.3806%2090.5749%2038.8937%2091.1968%2038.8937H91.3004C91.5241%2038.8937%2091.7121%2038.7524%2091.7121%2038.5364C91.7121%2038.3405%2091.5794%2038.179%2091.3926%2038.179Z%22%20fill%3D%22%234C249F%22%2F%3E%3Cpath%20d%3D%22M94.2162%2035.5946C93.8685%2035.5946%2093.5534%2035.7026%2093.3093%2035.891V34.6484C93.3093%2034.5455%2093.2727%2034.4538%2093.2062%2034.3877C93.1396%2034.3216%2093.0473%2034.2853%2092.9436%2034.2853C92.84%2034.2853%2092.7477%2034.3216%2092.6811%2034.3877C92.6146%2034.4538%2092.578%2034.5455%2092.578%2034.6484V38.5364C92.578%2038.6392%2092.6146%2038.7309%2092.6811%2038.797C92.7477%2038.8631%2092.84%2038.8994%2092.9436%2038.8994C93.0473%2038.8994%2093.1396%2038.8631%2093.2062%2038.797C93.2727%2038.7309%2093.3093%2038.6392%2093.3093%2038.5364V36.924C93.3093%2036.5564%2093.64%2036.2636%2094.1011%2036.2636C94.3501%2036.2636%2094.5593%2036.3328%2094.7059%2036.4706C94.8516%2036.6077%2094.9447%2036.8214%2094.9447%2037.1298V38.5364C94.9447%2038.7416%2095.1036%2038.8994%2095.3103%2038.8994C95.517%2038.8994%2095.6759%2038.7416%2095.6759%2038.5364V37.1298C95.6759%2036.64%2095.5211%2036.2546%2095.2569%2035.9916C94.9929%2035.7287%2094.6266%2035.5946%2094.2162%2035.5946Z%22%20fill%3D%22%234C249F%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M99.431%2037.5329H97.3309C97.4408%2037.9778%2097.8263%2038.2819%2098.3485%2038.2819C98.5681%2038.2819%2098.8295%2038.1846%2098.9735%2038.0788C99.1118%2037.9759%2099.2984%2037.9717%2099.425%2038.0752L99.4264%2038.0765C99.504%2038.1435%2099.5511%2038.2281%2099.5541%2038.3174C99.5571%2038.4081%2099.5142%2038.4917%2099.4352%2038.5525C99.1623%2038.7691%2098.7145%2038.9166%2098.3485%2038.9166C97.8508%2038.9166%2097.4219%2038.7462%2097.1171%2038.4518C96.8122%2038.1573%2096.6354%2037.7424%2096.6354%2037.2613C96.6354%2036.7787%2096.8026%2036.3628%2097.0919%2036.0673C97.3814%2035.7716%2097.7891%2035.6004%2098.2621%2035.6004C98.7293%2035.6004%2099.1081%2035.766%2099.3694%2036.0543C99.6298%2036.3416%2099.7679%2036.7445%2099.7679%2037.2099C99.7679%2037.3023%2099.7335%2037.3844%2099.6714%2037.4431C99.6097%2037.5016%2099.5249%2037.5329%2099.431%2037.5329ZM98.2621%2036.235C98.5038%2036.235%2098.694%2036.3159%2098.8321%2036.4504C98.9547%2036.5698%2099.0398%2036.735%2099.0808%2036.9326H97.3372C97.3863%2036.7348%2097.4833%2036.5703%2097.6212%2036.4512C97.7778%2036.3159%2097.9922%2036.235%2098.2621%2036.235Z%22%20fill%3D%22%234C249F%22%2F%3E%3Cpath%20d%3D%22M102.276%2035.5889C101.933%2035.5889%20101.615%2035.7134%20101.377%2035.9199C101.368%2035.8394%20101.34%2035.7692%20101.287%2035.7163C101.221%2035.6506%20101.127%2035.6232%20101.021%2035.6232C100.915%2035.6232%20100.823%2035.6529%20100.757%2035.7185C100.691%2035.7841%20100.661%2035.8759%20100.661%2035.9806V38.5364C100.661%2038.6433%20100.691%2038.7357%20100.757%2038.801C100.824%2038.8661%20100.917%2038.8937%20101.021%2038.8937C101.129%2038.8937%20101.222%2038.8643%20101.287%2038.7981C101.353%2038.732%20101.381%2038.6399%20101.381%2038.5364V36.8668C101.381%2036.6336%20101.502%2036.4566%20101.713%2036.351C101.926%2036.2438%20102.232%2036.2101%20102.589%2036.2792C102.674%2036.2984%20102.761%2036.2971%20102.836%2036.2605C102.913%2036.2225%20102.967%2036.1519%20102.991%2036.0551C103.008%2035.988%20103.001%2035.9214%20102.972%2035.8607C102.942%2035.8009%20102.893%2035.7509%20102.829%2035.7113C102.703%2035.6328%20102.514%2035.5889%20102.276%2035.5889Z%22%20fill%3D%22%234C249F%22%2F%3E%3C%2Fsvg%3E";

var DesktopLogoDark = "data:image/svg+xml,%3Csvg%20width%3D%22716%22%20height%3D%22284%22%20viewBox%3D%220%200%20716%20284%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M30.3339%2062.4837C29.8869%2058.3689%2032.0591%2057.9172%2033.2011%2058.2056C33.2011%2058.2056%2052.0917%2066.23%2089.8159%2066.8885C127.54%2067.5469%20148.301%2058.4869%20148.301%2058.4869C149.444%2058.204%20151.614%2058.6664%20151.147%2062.7789C150.68%2066.8915%20149.965%2078.7739%20149.666%2084.201L171.377%2084.254C174.044%2084.1653%20178.973%2085.7009%20177.356%2092.5532C177.027%2093.9471%20176.545%2096.3319%20175.925%2099.3935C172.738%20115.144%20165.925%20148.809%20157.771%20157.639C152.041%20164.481%20144.32%20167.891%20138.317%20169.304C133.317%20170.791%20128.102%20170.53%20126.299%20170.439L126.299%20170.439C126.04%20170.426%20125.852%20170.417%20125.745%20170.416C121.731%20176.406%20111.472%20189.35%20102.549%20193.214C99.6405%20194.263%2099.6637%20195.32%2099.682%20196.151C99.6835%20196.219%2099.685%20196.285%2099.6848%20196.349C100.142%20204.063%20102.081%20221.323%20106.176%20228.646C106.72%20229.739%20106.872%20230.571%20106.977%20231.141C107.092%20231.765%20107.149%20232.077%20107.596%20232.078L113.024%20232.091C113.596%20232.092%20114.967%20232.096%20115.878%20233.241C116.365%20233.853%20117.22%20233.839%20118.149%20233.824C119.393%20233.803%20120.773%20233.781%20121.587%20235.254C122.458%20236.832%20122.277%20238.517%20122.184%20239.385C122.163%20239.574%20122.147%20239.724%20122.147%20239.827L130.717%20239.848C131.765%20239.85%20133.858%20240.369%20133.853%20242.426L133.811%20259.567C133.811%20259.879%20133.788%20260.134%20133.77%20260.343C133.688%20261.28%20133.688%20261.28%20136.093%20261.286L143.52%20261.304C143.997%20261.306%20144.948%20261.365%20144.942%20263.879L144.923%20271.592C144.922%20272.164%20144.919%20273.306%20142.348%20273.3L38.104%20273.045C35.5329%20273.039%2035.5357%20271.896%2035.5371%20271.325L35.556%20263.612C35.5621%20261.098%2036.5138%20261.043%2036.9906%20261.044L44.4181%20261.062C46.8229%20261.068%2046.8229%20261.068%2046.7453%20260.13L46.7453%20260.13L46.7453%20260.13C46.728%20259.921%2046.7069%20259.666%2046.7077%20259.354L46.7496%20242.213C46.7546%20240.157%2048.8508%20239.648%2049.8983%20239.65L58.4685%20239.671C58.4687%20239.569%2058.4533%20239.419%2058.4339%20239.229C58.3448%20238.361%2058.1718%20236.675%2059.051%20235.102C59.8722%20233.632%2061.2513%20233.661%2062.4955%20233.688C63.425%20233.707%2064.2792%20233.725%2064.7693%20233.116C65.6863%20231.975%2067.0575%20231.979%2067.6289%20231.98L73.0567%20231.993C73.5042%20231.995%2073.563%20231.683%2073.6805%20231.06C73.7881%20230.49%2073.9448%20229.659%2074.4934%20228.569C78.6249%20221.266%2080.6478%20204.016%2081.1427%20196.304C81.1429%20196.24%2081.1447%20196.174%2081.1465%20196.107L81.1465%20196.106C81.1688%20195.275%2081.1973%20194.218%2078.2937%20193.154C69.3902%20189.247%2059.1948%20176.253%2055.21%20170.244C55.1031%20170.244%2054.9161%20170.252%2054.6595%20170.264L54.6581%20170.264L54.6554%20170.264L54.6552%20170.264C52.8517%20170.346%2047.6361%20170.582%2042.6432%20169.071C36.6475%20167.628%2028.9427%20164.181%2023.246%20157.311C15.1355%20148.441%208.48736%20114.743%205.37695%2098.9767C4.77236%2095.9121%204.30143%2093.5251%203.9794%2092.1295C2.39638%2085.2695%207.33272%2083.7579%209.99878%2083.8597L31.7099%2083.9127C31.4375%2078.4842%2030.7809%2066.5986%2030.3339%2062.4837ZM15.8476%2093.4105C12.5076%2093.3522%2013.3007%2097.257%2013.9042%20100.228C13.9825%20100.614%2014.0576%20100.983%2014.1201%20101.327C14.6639%20104.316%2017.1903%20116.638%2023.8372%20136.461C30.484%20156.285%2043.3322%20157.727%2048.9255%20155.971C45.0967%20147.693%2037.0168%20121.196%2035.3888%20112.029C33.7607%20102.862%2031.7356%2093.6877%2029.3524%2093.6462L15.8476%2093.4105ZM167.242%20101.408C167.897%2098.4475%20168.758%2094.5571%20165.418%2094.5571L151.911%2094.5571C149.528%2094.5571%20147.343%20103.694%20145.555%20112.831C143.767%20121.968%20135.226%20148.32%20131.253%20156.531C136.815%20158.384%20149.686%20157.166%20156.678%20137.462C163.67%20117.757%20166.411%20105.482%20167.007%20102.502C167.076%20102.16%20167.157%20101.792%20167.242%20101.408L167.242%20101.408ZM109.937%20132.129L90.4634%20144.384L71.0746%20131.994L90.4062%20160.182L90.4062%20160.19L90.4089%20160.186L90.4117%20160.19L90.4117%20160.182L109.937%20132.129ZM90.6544%2090.6369L90.6544%2090.6188L90.6491%2090.6278L90.644%2090.6189L90.6439%2090.6367L70.9767%20124.244L90.4858%20136.479L90.4857%20136.485L90.4911%20136.482L90.4962%20136.485L90.4962%20136.479L110.089%20124.38L90.6544%2090.6369Z%22%20fill%3D%22%23FFB636%22%2F%3E%3Cpath%20d%3D%22M150.342%2059.0848C150.294%2064.5697%20123.755%2068.7848%2091.0653%2068.4995C58.3754%2068.2142%2031.1194%2063.5227%2031.1673%2058.0378C31.2152%2052.553%2058.5488%2048.3517%2091.2387%2048.637C123.929%2048.9223%20150.39%2053.5999%20150.342%2059.0848Z%22%20fill%3D%22%23FFD469%22%2F%3E%3Cpath%20d%3D%22M133.184%2078.6368C136.105%2078.6368%20136.626%2078.6368%20141.923%2076.7831C141.266%2080.3072%20137.812%20107.016%20136.626%20111.208C133.458%20122.409%20129.879%20139.718%20125.24%20143.064C124.358%20143.699%20120.473%20143.064%20119.027%20142.132C117.581%20141.2%20122.592%20131.598%20128.682%20111.208C132.125%2089.229%20131.066%2079.696%20133.184%2078.6368Z%22%20fill%3D%22%23FFCC4E%22%2F%3E%3Cpath%20d%3D%22M291.226%2050.5033C327.31%2050.5033%20356.562%2080.2436%20356.562%20116.93V155.126C356.562%20191.812%20327.31%20221.552%20291.226%20221.552C285.558%20221.552%20280.059%20220.819%20274.815%20219.439L274.815%20223.948C274.815%20250.786%20253.313%20272.593%20226.624%20273.027L225.813%20273.033V126.894L225.888%20126.892L225.89%20116.93C225.89%2080.2436%20255.142%2050.5033%20291.226%2050.5033ZM583.816%2050.5033C619.921%2050.5033%20649.19%2080.4136%20649.19%20117.31V155.724C649.19%20192.62%20619.921%20222.53%20583.816%20222.53C547.711%20222.53%20518.442%20192.62%20518.442%20155.724V117.31C518.442%2080.4136%20547.711%2050.5033%20583.816%2050.5033ZM437.502%2047.3468C473.607%2047.3468%20502.876%2077.2571%20502.876%20114.153V152.567C502.876%20189.463%20473.607%20219.374%20437.502%20219.374C401.397%20219.374%20372.128%20189.463%20372.128%20152.567V114.153C372.128%2077.2571%20401.397%2047.3468%20437.502%2047.3468ZM714.565%200V169.48C714.565%20196.76%20692.708%20218.926%20665.579%20219.367L664.756%20219.374V49.8933C664.756%2022.338%20687.056%200%20714.565%200ZM583.816%20100.608C574.79%20100.608%20567.472%20108.086%20567.472%20117.31V155.724C567.472%20164.948%20574.79%20172.425%20583.816%20172.425C592.842%20172.425%20600.16%20164.948%20600.16%20155.724V117.31C600.16%20108.086%20592.842%20100.608%20583.816%20100.608ZM291.226%20100.323C282.205%20100.323%20274.892%20107.758%20274.892%20116.93V155.126C274.892%20164.297%20282.205%20171.732%20291.226%20171.732C300.247%20171.732%20307.56%20164.297%20307.56%20155.126V116.93C307.56%20107.758%20300.247%20100.323%20291.226%20100.323ZM437.502%2097.4517C428.476%2097.4517%20421.158%20104.929%20421.158%20114.153V152.567C421.158%20161.791%20428.476%20169.269%20437.502%20169.269C446.528%20169.269%20453.845%20161.791%20453.845%20152.567V114.153C453.845%20104.929%20446.528%2097.4517%20437.502%2097.4517Z%22%20fill%3D%22white%22%2F%3E%3Cpath%20d%3D%22M531.611%20265.029H530.252C528.901%20265.029%20527.714%20263.764%20527.714%20261.794V252.487H530.612C531.961%20252.487%20532.99%20251.594%20532.99%20250.324C532.99%20249.682%20532.751%20249.111%20532.313%20248.702C531.878%20248.296%20531.279%20248.081%20530.612%20248.081H527.714V242.862C527.714%20241.437%20526.651%20240.381%20525.216%20240.381C523.781%20240.381%20522.717%20241.437%20522.717%20242.862V248.081H521.378C520.711%20248.081%20520.113%20248.296%20519.677%20248.702C519.239%20249.111%20519%20249.682%20519%20250.324C519%20251.594%20520.029%20252.487%20521.378%20252.487H522.717V261.794C522.717%20266.429%20525.936%20269.99%20530.252%20269.99H530.972C532.525%20269.99%20533.83%20269.01%20533.83%20267.51C533.83%20266.15%20532.908%20265.029%20531.611%20265.029Z%22%20fill%3D%22white%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M561.745%20258.659L561.745%20258.656C561.704%20251.921%20556.931%20247.129%20550.253%20247.129C546.894%20247.129%20544.004%20248.315%20541.954%20250.366C539.904%20252.417%20538.721%20255.306%20538.721%20258.659C538.721%20261.993%20539.905%20264.871%20541.954%20266.917C544.005%20268.963%20546.894%20270.149%20550.253%20270.149C553.593%20270.149%20556.473%20268.962%20558.517%20266.917C560.562%20264.871%20561.745%20261.993%20561.745%20258.659ZM550.253%20251.693C552.201%20251.693%20553.836%20252.416%20554.986%20253.63C556.137%20254.847%20556.829%20256.587%20556.829%20258.659C556.829%20260.731%20556.138%20262.459%20554.987%20263.666C553.838%20264.871%20552.203%20265.585%20550.253%20265.585C548.303%20265.585%20546.657%20264.87%20545.498%20263.664C544.337%20262.457%20543.638%20260.729%20543.638%20258.659C543.638%20254.541%20546.397%20251.693%20550.253%20251.693Z%22%20fill%3D%22white%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M579.146%20279C575.213%20279%20571.626%20277.436%20569.243%20274.449C568.8%20273.91%20568.633%20273.281%20568.74%20272.678C568.846%20272.079%20569.213%20271.552%20569.75%20271.188L569.755%20271.185C570.952%20270.393%20572.4%20270.75%20573.185%20271.771C574.517%20273.459%20576.561%20274.436%20579.225%20274.436C581.018%20274.436%20582.652%20273.779%20583.84%20272.536C585.026%20271.294%20585.801%20269.429%20585.801%20266.954V266.639C584.034%20268.85%20581.465%20270.149%20578.426%20270.149C575.294%20270.149%20572.601%20268.954%20570.694%20266.904C568.79%20264.856%20567.693%20261.982%20567.693%20258.659C567.693%20255.306%20568.876%20252.417%20570.926%20250.366C572.977%20248.315%20575.866%20247.129%20579.225%20247.129C585.903%20247.129%20590.676%20251.921%20590.718%20258.656L590.718%20258.659L590.718%20267.232C590.718%20273.753%20586%20279%20579.146%20279ZM579.225%20265.585C577.275%20265.585%20575.63%20264.87%20574.47%20263.664C573.31%20262.457%20572.61%20260.729%20572.61%20258.659C572.61%20254.541%20575.369%20251.693%20579.225%20251.693C581.173%20251.693%20582.808%20252.416%20583.958%20253.63C585.11%20254.847%20585.801%20256.587%20585.801%20258.659C585.801%20260.731%20585.11%20262.459%20583.959%20263.666C582.81%20264.871%20581.175%20265.585%20579.225%20265.585Z%22%20fill%3D%22white%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M616.03%20264.309C615.151%20263.59%20613.856%20263.619%20612.895%20264.334C611.896%20265.068%20610.081%20265.743%20608.557%20265.743C604.933%20265.743%20602.257%20263.632%20601.494%20260.544H616.072C616.724%20260.544%20617.313%20260.327%20617.741%20259.921C618.172%20259.513%20618.411%20258.943%20618.411%20258.302C618.411%20255.071%20617.452%20252.275%20615.644%20250.28C613.83%20248.279%20611.201%20247.129%20607.958%20247.129C604.675%20247.129%20601.844%20248.317%20599.835%20250.37C597.827%20252.421%20596.666%20255.308%20596.666%20258.659C596.666%20261.998%20597.893%20264.878%20600.01%20266.923C602.126%20268.966%20605.103%20270.149%20608.557%20270.149C611.098%20270.149%20614.207%20269.125%20616.102%20267.622C616.649%20267.2%20616.947%20266.619%20616.926%20265.99C616.906%20265.37%20616.579%20264.782%20616.041%20264.317L616.03%20264.309ZM607.958%20251.534C609.636%20251.534%20610.956%20252.096%20611.915%20253.03C612.765%20253.858%20613.357%20255.005%20613.641%20256.377H601.537C601.879%20255.004%20602.552%20253.862%20603.509%20253.035C604.596%20252.096%20606.084%20251.534%20607.958%20251.534Z%22%20fill%3D%22white%22%2F%3E%3Cpath%20d%3D%22M634.423%20265.029H633.064C631.713%20265.029%20630.526%20263.764%20630.526%20261.794V252.487H633.424C634.773%20252.487%20635.802%20251.594%20635.802%20250.324C635.802%20249.682%20635.563%20249.111%20635.125%20248.702C634.69%20248.296%20634.091%20248.081%20633.424%20248.081H630.526V242.862C630.526%20241.437%20629.463%20240.381%20628.028%20240.381C626.593%20240.381%20625.53%20241.437%20625.53%20242.862V248.081H624.19C623.523%20248.081%20622.925%20248.296%20622.489%20248.702C622.051%20249.111%20621.812%20249.682%20621.812%20250.324C621.812%20251.594%20622.841%20252.487%20624.19%20252.487H625.53V261.794C625.53%20266.429%20628.748%20269.99%20633.064%20269.99H633.784C635.337%20269.99%20636.642%20269.01%20636.642%20267.51C636.642%20266.15%20635.72%20265.029%20634.423%20265.029Z%22%20fill%3D%22white%22%2F%3E%3Cpath%20d%3D%22M654.025%20247.089C651.611%20247.089%20649.423%20247.838%20647.729%20249.146V240.52C647.729%20239.806%20647.475%20239.17%20647.013%20238.711C646.551%20238.252%20645.91%20238%20645.191%20238C644.471%20238%20643.831%20238.252%20643.368%20238.711C642.906%20239.17%20642.652%20239.806%20642.652%20240.52V267.51C642.652%20268.224%20642.906%20268.86%20643.368%20269.319C643.831%20269.778%20644.471%20270.03%20645.191%20270.03C645.91%20270.03%20646.551%20269.778%20647.013%20269.319C647.475%20268.86%20647.729%20268.224%20647.729%20267.51V256.317C647.729%20253.766%20650.025%20251.733%20653.225%20251.733C654.954%20251.733%20656.406%20252.213%20657.423%20253.17C658.435%20254.121%20659.081%20255.605%20659.081%20257.746V267.51C659.081%20268.935%20660.184%20270.03%20661.619%20270.03C663.055%20270.03%20664.158%20268.935%20664.158%20267.51V257.746C664.158%20254.346%20663.082%20251.671%20661.249%20249.845C659.416%20248.02%20656.873%20247.089%20654.025%20247.089Z%22%20fill%3D%22white%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M690.224%20260.544H675.646C676.409%20263.632%20679.085%20265.743%20682.71%20265.743C684.234%20265.743%20686.049%20265.068%20687.048%20264.333C688.008%20263.619%20689.304%20263.59%20690.182%20264.309L690.192%20264.317C690.731%20264.782%20691.058%20265.37%20691.079%20265.99C691.099%20266.619%20690.802%20267.2%20690.254%20267.622C688.359%20269.125%20685.25%20270.149%20682.71%20270.149C679.255%20270.149%20676.278%20268.966%20674.162%20266.923C672.045%20264.878%20670.818%20261.998%20670.818%20258.659C670.818%20255.308%20671.979%20252.421%20673.987%20250.37C675.996%20248.317%20678.827%20247.129%20682.11%20247.129C685.354%20247.129%20687.983%20248.279%20689.796%20250.28C691.605%20252.275%20692.563%20255.071%20692.563%20258.302C692.563%20258.943%20692.324%20259.513%20691.893%20259.921C691.465%20260.327%20690.876%20260.544%20690.224%20260.544ZM682.11%20251.534C683.788%20251.534%20685.108%20252.096%20686.067%20253.03C686.918%20253.858%20687.509%20255.005%20687.793%20256.377H675.689C676.031%20255.004%20676.704%20253.862%20677.661%20253.035C678.748%20252.096%20680.236%20251.534%20682.11%20251.534Z%22%20fill%3D%22white%22%2F%3E%3Cpath%20d%3D%22M709.975%20247.049C707.592%20247.049%20705.385%20247.913%20703.736%20249.347C703.673%20248.788%20703.477%20248.301%20703.108%20247.934C702.648%20247.478%20702.001%20247.288%20701.261%20247.288C700.529%20247.288%20699.887%20247.493%20699.428%20247.949C698.97%20248.404%20698.762%20249.042%20698.762%20249.768V267.51C698.762%20268.252%20698.968%20268.893%20699.431%20269.347C699.893%20269.798%20700.536%20269.99%20701.261%20269.99C702.008%20269.99%20702.654%20269.786%20703.11%20269.326C703.566%20268.868%20703.759%20268.229%20703.759%20267.51V255.92C703.759%20254.301%20704.604%20253.073%20706.063%20252.339C707.543%20251.595%20709.668%20251.361%20712.149%20251.841C712.736%20251.974%20713.339%20251.966%20713.858%20251.711C714.396%20251.448%20714.767%20250.957%20714.936%20250.285C715.053%20249.82%20715.009%20249.358%20714.803%20248.936C714.6%20248.521%20714.254%20248.174%20713.813%20247.899C712.938%20247.354%20711.623%20247.049%20709.975%20247.049Z%22%20fill%3D%22white%22%2F%3E%3C%2Fsvg%3E";

var HeaderLogo = function HeaderLogo() {
  var screenSize = hooks.useScreenSize();

  var _useContext = React.useContext(ThemeContext),
      theme = _useContext.theme;

  if (screenSize <= hooks.ScreenSize.sm) {
    return React__default.createElement("img", {
      src: theme === 'dark' ? MobileLogoDark : MobileLogo,
      style: {
        height: '36px',
        width: '21px'
      }
    });
  }

  return React__default.createElement("img", {
    src: theme === 'dark' ? DesktopLogoDark : DesktopLogo,
    style: {
      height: '60px',
      width: '151px'
    }
  });
};

function LanguagePickerDropdown(props) {
  var langs = {
    en: {
      name: 'English',
      nativeName: 'English'
    },
    es: {
      name: 'Spanish',
      nativeName: 'Español'
    },
    de: {
      name: 'German',
      nativeName: 'Deutsch'
    },
    fr: {
      name: 'French',
      nativeName: 'Français'
    },
    it: {
      name: 'Italian',
      nativeName: 'Italiana'
    },
    ko: {
      name: 'Korean',
      nativeName: '한국어 (韓國語)'
    },
    pt: {
      name: 'Portuguese',
      nativeName: 'Português'
    },
    tr: {
      name: 'Turkish',
      nativeName: 'Türkçe'
    },
    zh: {
      name: 'Zhōngwén',
      nativeName: '中文'
    }
  };
  var currentLang = props.currentLang,
      changeLang = props.changeLang,
      className = props.className;

  var formatValue = function formatValue(key) {
    var lang = langs[key];
    return React__default.createElement(React__default.Fragment, null, key.toUpperCase(), " - ", React__default.createElement("span", {
      className: 'capitalize'
    }, lang.nativeName.split(',')[0]), " (", lang.name.split(';')[0], ")");
  };

  return React__default.createElement(DropdownList, {
    id: 'language-picker-dropdown',
    className: classnames('text-xxs sm:text-sm', className),
    label: currentLang == null ? void 0 : currentLang.toUpperCase(),
    formatValue: formatValue,
    onValueSet: changeLang,
    current: currentLang,
    values: langs
  });
}

var NetworkModal = function NetworkModal(props) {
  var t = props.t,
      isOpen = props.isOpen,
      closeModal = props.closeModal,
      supportedNetworks = props.supportedNetworks,
      chainId = props.chainId,
      wallet = props.wallet,
      network = props.network;
  var isWalletMetamask = hooks.useIsWalletMetamask(wallet);
  var currentNetworkName = utilities.getNetworkNiceNameByChainId(chainId);
  var isWalletOnSupportedNetwork = hooks.useIsWalletOnSupportedNetwork(chainId, supportedNetworks);

  if (isWalletMetamask) {
    return React__default.createElement(Modal, {
      isOpen: isOpen,
      closeModal: closeModal,
      label: 'network modal'
    }, React__default.createElement(Container, null, React__default.createElement(Header, null, (t == null ? void 0 : t('chooseANetwork')) || 'Choose a Network'), React__default.createElement(Description, null, (t == null ? void 0 : t('selectASupportedNetworkMetamask')) || 'Select a supported network to be prompted to switch in your MetaMask wallet.'), supportedNetworks.map(function (chainId) {
      return React__default.createElement(NetworkButton, {
        network: network,
        t: t,
        key: chainId,
        chainId: chainId,
        closeModal: closeModal
      });
    }), React__default.createElement(CurrentlyConnectedTo, {
      t: t,
      currentNetworkName: currentNetworkName,
      isWalletOnSupportedNetwork: isWalletOnSupportedNetwork
    })));
  }

  return React__default.createElement(Modal, {
    isOpen: isOpen,
    closeModal: closeModal,
    label: 'network modal'
  }, React__default.createElement(Container, null, React__default.createElement(Header, null, (t == null ? void 0 : t('supportedNetworks')) || 'Suported Networks'), React__default.createElement(Description, null, (t == null ? void 0 : t('pleaseSwitchToASupportedNetwork')) || 'Please switch to a supported network in your wallet.'), supportedNetworks.map(function (chainId) {
    return React__default.createElement(NetworkItem, {
      network: network,
      t: t,
      key: chainId,
      chainId: chainId
    });
  }), React__default.createElement(CurrentlyConnectedTo, {
    t: t,
    currentNetworkName: currentNetworkName,
    isWalletOnSupportedNetwork: isWalletOnSupportedNetwork
  })));
};

var Container = function Container(props) {
  return React__default.createElement("div", {
    className: 'flex flex-col h-full p-4'
  }, props.children);
};

var Header = function Header(props) {
  return React__default.createElement("h5", {
    className: 'font-semibold uppercase text-inverse mb-2'
  }, props.children);
};

var Description = function Description(props) {
  return React__default.createElement("p", {
    className: 'mb-4 text-sm text-accent-1'
  }, props.children);
};

var CurrentlyConnectedTo = function CurrentlyConnectedTo(props) {
  return React__default.createElement("p", {
    className: 'text-xxxs mt-auto'
  }, (props.t == null ? void 0 : props.t('currentlyConnectedTo')) || 'Currently connected to:', ' ', React__default.createElement("b", {
    className: classnames({
      'ml-1 text-red': !props.isWalletOnSupportedNetwork
    })
  }, props.currentNetworkName));
};

var NetworkItem = function NetworkItem(props) {
  var network = props.network,
      chainId = props.chainId;
  var isCurrentNetwork = hooks.useIsWalletOnNetwork(network, chainId);
  var networkName = utilities.getNetworkNiceNameByChainId(chainId);
  return React__default.createElement("div", {
    className: classnames('flex justify-center mb-4 last:mb-0 w-full text-center py-2 rounded', {
      'pool-gradient-1': isCurrentNetwork,
      'bg-body': !isCurrentNetwork
    })
  }, React__default.createElement(NetworkIcon, {
    chainId: chainId,
    className: 'mr-2'
  }), React__default.createElement("span", null, networkName));
};

var NetworkButton = function NetworkButton(props) {
  var network = props.network,
      chainId = props.chainId,
      closeModal = props.closeModal;
  var isCurrentNetwork = hooks.useIsWalletOnNetwork(network, chainId);
  var networkName = utilities.getNetworkNiceNameByChainId(chainId);
  var addNetwork = hooks.useAddNetworkToMetamask(chainId, {
    onSuccess: closeModal
  });
  return React__default.createElement("div", {
    className: 'flex mb-4 last:mb-0'
  }, React__default.createElement("button", {
    className: classnames('w-full flex items-center justify-center py-2 rounded transition hover:text-white', {
      'pool-gradient-1 text-white': isCurrentNetwork,
      'bg-body border border-body hover:bg-pt-purple-bright hover:border-accent-3': !isCurrentNetwork
    }),
    type: 'button',
    onClick: addNetwork
  }, React__default.createElement(NetworkIcon, {
    chainId: chainId,
    className: 'mr-2'
  }), React__default.createElement("span", null, networkName)));
};

var networkTextColorClassname = function networkTextColorClassname(chainId) {
  if (chainId === 1) {
    return 'blue';
  } else if (chainId === 3) {
    return 'red';
  } else if (chainId === 4) {
    return 'orange';
  } else if (chainId === 5) {
    return 'blue';
  } else if (chainId === 42) {
    return 'default-soft';
  } else if (chainId === 56) {
    return 'yellow';
  } else if (chainId === 137) {
    return 'default-soft';
  } else if (chainId === 1234) {
    return 'teal';
  } else if (chainId === 42220) {
    return 'green';
  } else if (chainId === 80001) {
    return 'teal';
  } else {
    return 'darkened';
  }
};

var NetworkTrigger = function NetworkTrigger(props) {
  var openModal = props.openModal,
      className = props.className,
      chainId = props.chainId;
  var screenSize = hooks.useScreenSize();
  var networkName = utilities.getNetworkNiceNameByChainId(chainId);

  if (screenSize <= hooks.ScreenSize.sm) {
    return React__default.createElement(NetworkIcon, {
      onClick: openModal,
      className: className,
      chainId: chainId
    });
  }

  return React__default.createElement("button", {
    onClick: openModal,
    className: classnames('transition tracking-wide flex items-center capitalize font-bold', 'hover:text-inverse text-xxs sm:text-xs sm:px-2 py-1', "text-" + networkTextColorClassname(chainId), className)
  }, React__default.createElement(NetworkIcon, {
    className: 'mr-2',
    chainId: chainId
  }), React__default.createElement("span", {
    className: 'capitalize hidden sm:block'
  }, networkName));
};

var NetworkSelector = function NetworkSelector(props) {
  var t = props.t,
      chainId = props.chainId,
      supportedNetworks = props.supportedNetworks,
      className = props.className,
      isWalletConnected = props.isWalletConnected,
      wallet = props.wallet,
      network = props.network;

  var _useState = React.useState(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  return React__default.createElement(React__default.Fragment, null, isWalletConnected && React__default.createElement(NetworkTrigger, {
    t: t,
    chainId: chainId,
    openModal: function openModal() {
      return setIsOpen(true);
    },
    className: className
  }), React__default.createElement(NetworkModal, {
    t: t,
    network: network,
    wallet: wallet,
    chainId: chainId,
    isOpen: isOpen,
    closeModal: function closeModal() {
      return setIsOpen(false);
    },
    supportedNetworks: supportedNetworks
  }));
};

/**
 * TODO: Migrate remaining components
 * @returns
 */

var PageHeaderContainer = function PageHeaderContainer(props) {
  var className = props.className,
      Link = props.Link,
      as = props.as,
      href = props.href;
  return React__default.createElement("div", {
    className: classnames('flex justify-between items-center mx-auto max-w-screen-lg px-4 sm:px-8 py-4 sm:pb-6 sm:pt-5', className)
  }, React__default.createElement(Link, {
    as: as,
    href: href
  }, React__default.createElement("a", {
    className: 'min-w-max'
  }, React__default.createElement(HeaderLogo, null))), React__default.createElement("div", {
    className: 'flex flex-row justify-end items-center'
  }, props.children));
};

var BLOCKIE_DIAMETER = 22;
function ProfileAvatar(props) {
  var className = props.className,
      usersAddress = props.usersAddress;

  if (!usersAddress) {
    return null;
  }

  var image = React__default.createElement("div", {
    className: classnames('profile-img my-auto relative inline-flex justify-center flex-col rounded-full shadow-sm', className),
    style: {
      padding: 1,
      height: BLOCKIE_DIAMETER,
      width: BLOCKIE_DIAMETER
    }
  }, React__default.createElement(BlockieIdenticon, {
    address: usersAddress,
    alt: "Ethereum address: " + usersAddress,
    className: 'rounded-full'
  }));
  return image;
}

var BlockieIdenticon = function BlockieIdenticon(_ref) {
  var address = _ref.address,
      diameter = _ref.diameter,
      alt = _ref.alt,
      className = _ref.className;

  var _useState = React.useState(null),
      dataUrl = _useState[0],
      setDataUrl = _useState[1];

  var canvasRef = React.useRef(null);
  React.useEffect(function () {
    var canvas = canvasRef.current;
    blockies.renderIcon({
      seed: address.toLowerCase()
    }, canvas);
    var updatedDataUrl = canvas.toDataURL();

    if (updatedDataUrl !== dataUrl) {
      setDataUrl(updatedDataUrl);
    }
  }, [dataUrl, address]);
  return React__default.createElement(React__default.Fragment, null, React__default.createElement("canvas", {
    ref: canvasRef,
    style: {
      display: 'none'
    }
  }), React__default.createElement("img", {
    className: className,
    src: dataUrl,
    height: diameter,
    width: diameter,
    alt: alt || ''
  }));
};

BlockieIdenticon.defaultProps = {
  address: undefined,
  diameter: BLOCKIE_DIAMETER,
  alt: '',
  className: ''
};

function ProfileName(props) {
  var className = props.className,
      ensName = props.ensName,
      usersAddress = props.usersAddress;
  var name = (ensName == null ? void 0 : ensName.length) > 0 ? ensName : utilities.shorten({
    hash: usersAddress,
    "short": true
  });
  return React__default.createElement("div", {
    className: className
  }, name);
}
ProfileName.defaultProps = {
  ensName: '',
  usersAddress: '',
  className: ''
};

function AccountButton(props) {
  var openModal = props.openModal,
      className = props.className,
      t = props.t,
      usersAddress = props.usersAddress;

  var _useAtom = jotai.useAtom(hooks.transactionsAtom),
      transactions = _useAtom[0];

  var pendingTransactionsCount = transactions.filter(function (t) {
    return !t.completed;
  }).length;
  var ensName = hooks.useEnsName(usersAddress);
  return React__default.createElement("button", {
    onClick: openModal,
    className: classnames('transition text-highlight-2 px-2 xs:px-4 hover:text-inverse', 'text-xs font-bold tracking-wider outline-none focus:outline-none active:outline-none', 'flex justify-center z-20 h-8', className)
  }, pendingTransactionsCount ? React__default.createElement(React__default.Fragment, null, React__default.createElement("div", {
    className: 'inline-flex flex-col justify-center mr-2 my-auto'
  }, React__default.createElement(ThemedClipSpinner, {
    size: '16px'
  })), React__default.createElement("span", {
    className: 'my-auto'
  }, (t == null ? void 0 : t('pendingTransactionsCount', {
    count: pendingTransactionsCount
  })) || pendingTransactionsCount + " pending")) : React__default.createElement(React__default.Fragment, null, React__default.createElement(ProfileAvatar, {
    usersAddress: usersAddress,
    className: 'mr-2'
  }), React__default.createElement("span", {
    className: 'my-auto'
  }, React__default.createElement(ProfileName, {
    ensName: ensName,
    usersAddress: usersAddress
  }))));
}

function WalletInfo(props) {
  var t = props.t,
      usersAddress = props.usersAddress,
      chainId = props.chainId,
      disconnectWallet = props.disconnectWallet,
      walletName = props.walletName;
  var closeModal = props.closeModal;
  var networkName = null;

  if (chainId) {
    networkName = React__default.createElement("span", {
      className: 'inline-block'
    }, utilities.getNetworkNameAliasByChainId(chainId));
  }

  if (usersAddress && walletName) {
    return React__default.createElement("div", {
      className: 'flex flex-col w-full justify-between'
    }, React__default.createElement("div", {
      className: 'flex flex-col w-full text-xxs sm:text-lg lg:text-xl leading-snug trans'
    }, React__default.createElement("div", {
      className: 'text-xxs xs:text-xs uppercase font-bold text-accent-3'
    }, (t == null ? void 0 : t('accountAddress')) || 'Account address'), React__default.createElement("div", {
      className: 'flex justify-between items-center sm:text-xs lg:text-sm text-default mt-1 mb-2 sm:mb-4'
    }, React__default.createElement(BlockExplorerLink, {
      address: usersAddress,
      chainId: chainId,
      shorten: true
    })), React__default.createElement("div", {
      className: 'my-2'
    }, React__default.createElement("div", {
      className: 'text-xxs xs:text-xs uppercase font-bold text-accent-3'
    }, (t == null ? void 0 : t('connectedTo')) || 'Connected to'), React__default.createElement("div", {
      className: 'flex justify-between items-center sm:text-xs lg:text-sm text-default mt-1 mb-2 sm:mb-4'
    }, React__default.createElement("div", null, walletName, ' ', chainId && chainId !== 1 && React__default.createElement(React__default.Fragment, null, "- ", React__default.createElement("span", {
      className: 'capitalize'
    }, networkName))), React__default.createElement("button", {
      onClick: function onClick(e) {
        e.preventDefault();
        closeModal();
        disconnectWallet();
      },
      className: 'inline-block text-xxs bg-body rounded-full border-2 border-accent-4 px-2 trans trans-fastest font-bold'
    }, (t == null ? void 0 : t('disconnectWallet')) || 'Disconnect wallet')))));
  }

  return null;
}

function TransactionsListItem(props) {
  var tx = props.tx,
      t = props.t;
  var errorIcon = React__default.createElement(FeatherIcon, {
    icon: 'help-circle',
    className: 'list-item--icon relative w-5 h-5 text-red'
  });
  return React__default.createElement("li", {
    key: tx.hash || Date.now(),
    className: 'list-item rounded-lg relative p-2 -mx-2'
  }, React__default.createElement("div", {
    className: 'flex justify-between w-full'
  }, React__default.createElement("div", {
    className: 'pr-2'
  }, tx.hash ? React__default.createElement(BlockExplorerLink, {
    chainId: tx.ethersTx.chainId,
    txHash: tx.hash
  }, tx.name) : tx.name), React__default.createElement("div", {
    className: 'w-5'
  }, !tx.completed && React__default.createElement("div", {
    className: '-l-1 -t-2',
    style: {
      transform: 'scale(0.9)'
    }
  }, React__default.createElement(ThemedClipSpinner, null)), tx.completed && !tx.error && React__default.createElement(BlockExplorerLink, {
    noIcon: true,
    chainId: tx.ethersTx.chainId,
    txHash: tx.hash
  }, React__default.createElement(FeatherIcon, {
    icon: 'check-circle',
    className: 'list-item--icon relative w-5 h-5 text-green'
  })), tx.reason && React__default.createElement(Tooltip, {
    id: 'tx-error',
    tip: tx.reason
  }, errorIcon), tx.error && !tx.reason && React__default.createElement(BlockExplorerLink, {
    noIcon: true,
    chainId: tx.ethersTx.chainId,
    txHash: tx.hash
  }, errorIcon))), tx.inWallet && React__default.createElement("span", {
    className: 'text-orange'
  }, tx.inWallet && React__default.createElement(React__default.Fragment, null, (t == null ? void 0 : t('pleaseConfirmInYourWallet')) || 'Please confirm in your wallet')));
}

function TransactionsList(props) {
  var t = props.t,
      usersAddress = props.usersAddress,
      chainId = props.chainId;

  var _useAtom = jotai.useAtom(hooks.transactionsAtom),
      transactions = _useAtom[0],
      setTransactions = _useAtom[1];

  var notCancelledTransactions = transactions.filter(function (t) {
    return !t.cancelled;
  }).reverse();
  var pendingTransactionsCount = transactions.filter(function (t) {
    return !t.completed && !t.cancelled;
  }).length;
  var pastTransactionsCount = transactions.filter(function (t) {
    return t.completed && !t.cancelled;
  }).length;

  var handleClearPrevious = function handleClearPrevious(e) {
    e.preventDefault();

    if (usersAddress && chainId) {
      hooks.clearPreviousTransactions(transactions, setTransactions, usersAddress, chainId);
    }
  };

  if (!usersAddress) {
    return null;
  }

  return React__default.createElement(React__default.Fragment, null, React__default.createElement("div", {
    className: ''
  }, React__default.createElement("div", {
    className: 'flex justify-between items-center text-xxs xs:text-xs uppercase font-bold text-accent-3 pb-4'
  }, React__default.createElement("div", null, (t == null ? void 0 : t('recentTransactions')) || 'Recent transactions', pendingTransactionsCount > 0 && React__default.createElement("span", {
    className: 'text-accent-1 text-xxxs uppercase opacity-50 ml-2'
  }, (t == null ? void 0 : t('pendingTransactionsCount', {
    count: pendingTransactionsCount
  })) || pendingTransactionsCount + " pending")), pastTransactionsCount > 0 && React__default.createElement(React__default.Fragment, null, React__default.createElement("button", {
    onClick: handleClearPrevious,
    className: 'inline-block text-xxs bg-body rounded-full border-2 border-accent-4 px-2 trans trans-fastest font-bold'
  }, (t == null ? void 0 : t('clearHistory')) || 'Clear history')))), React__default.createElement("div", {
    className: 'flex-grow relative flex flex-col w-full pb-2 text-xs sm:text-sm'
  }, notCancelledTransactions.length === 0 ? React__default.createElement(React__default.Fragment, null, React__default.createElement("div", {
    className: 'text-default-soft uppercase text-xs'
  }, (t == null ? void 0 : t('currentlyNoActiveTransactions')) || 'No active transactions')) : React__default.createElement(React__default.Fragment, null, React__default.createElement("ul", {
    className: 'transactions-ui-list overflow-x-hidden overflow-y-auto'
  }, notCancelledTransactions.map(function (tx) {
    return React__default.createElement(TransactionsListItem, {
      key: tx.id,
      tx: tx
    });
  })))));
}

var TransactionsModal = function TransactionsModal(props) {
  var t = props.t,
      disconnectWallet = props.disconnectWallet,
      walletName = props.walletName,
      chainId = props.chainId,
      usersAddress = props.usersAddress,
      isOpen = props.isOpen,
      closeModal = props.closeModal;
  return React__default.createElement(Modal, {
    isOpen: isOpen,
    closeModal: closeModal,
    label: 'transactions modal',
    paddingClassName: 'p-0',
    maxWidthClassName: 'max-w-4xl'
  }, React__default.createElement("div", {
    className: 'p-8'
  }, React__default.createElement(WalletInfo, {
    usersAddress: usersAddress,
    chainId: chainId,
    disconnectWallet: disconnectWallet,
    walletName: walletName,
    closeModal: closeModal
  })), React__default.createElement("div", {
    className: 'p-8 bg-primary rounded-none sm:rounded-b-xl'
  }, React__default.createElement(TransactionsList, {
    t: t,
    closeTransactions: closeModal,
    chainId: chainId,
    usersAddress: usersAddress
  })));
};

var ConnectWalletButton = function ConnectWalletButton(props) {
  var connectWallet = props.connectWallet,
      t = props.t,
      className = props.className;
  return React__default.createElement(Button, {
    onClick: function onClick() {
      return connectWallet();
    },
    textSize: 'xxxs',
    className: className
  }, (t == null ? void 0 : t('connectWallet')) || 'Connect wallet');
};

function Account(props) {
  var t = props.t,
      className = props.className,
      isWalletConnected = props.isWalletConnected,
      disconnectWallet = props.disconnectWallet,
      provider = props.provider,
      chainId = props.chainId,
      usersAddress = props.usersAddress,
      connectWallet = props.connectWallet,
      walletName = props.walletName;

  var _useState = React.useState(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  return React__default.createElement(React__default.Fragment, null, isWalletConnected && React__default.createElement(AccountButton, {
    t: t,
    usersAddress: usersAddress,
    openModal: function openModal() {
      return setIsOpen(true);
    },
    className: className,
    provider: provider
  }), !isWalletConnected && React__default.createElement(ConnectWalletButton, {
    connectWallet: connectWallet,
    t: t,
    className: className
  }), React__default.createElement(TransactionsModal, {
    t: t,
    chainId: chainId,
    usersAddress: usersAddress,
    isOpen: isOpen,
    closeModal: function closeModal() {
      return setIsOpen(false);
    },
    disconnectWallet: disconnectWallet,
    walletName: walletName
  }));
}

var AWARD_DAY = 'Friday';
var WeeklyPrizeAmountCard = function WeeklyPrizeAmountCard(props) {
  var t = props.t,
      sm = props.sm,
      prizePretty = props.prizePretty,
      isFetched = props.isFetched;
  var amount = prizePretty ? formatNumbers(prizePretty) : weeklyPrizeAmountV3();
  return React__default.createElement("div", {
    className: classnames('relative overflow-visible flex flex-col justify-between text-center', {
      'bg-prize-amount--small': sm,
      'bg-prize-amount': !sm
    })
  }, React__default.createElement("div", {
    className: 'lightning-bolts'
  }), React__default.createElement("div", {
    className: 'border-gradient mx-auto py-4 xs:py-8'
  }, React__default.createElement("div", {
    className: 'w-2/3 xs:w-1/2 mx-auto leading-none'
  }, React__default.createElement("h1", {
    className: 'text-4xl xs:text-10xl xs:-mt-0 font-semibold text-white'
  }, isFetched ? amount : '--'), React__default.createElement("div", {
    className: 'uppercase font-semibold text-default-soft text-xxs xs:text-lg mt-2'
  }, (t == null ? void 0 : t('inWeeklyPrizes', 'In weekly prizes')) || 'In weekly prizes')), React__default.createElement("div", {
    className: 'uppercase font-semibold text-highlight-6 text-xxs xs:text-lg w-2/3 xs:w-1/2 mx-auto'
  }, (t == null ? void 0 : t('awardedEveryXDay', {
    day: AWARD_DAY
  })) || "Awarded every " + AWARD_DAY + "!")));
};

var formatNumbers = function formatNumbers(num) {
  if (num > 1000000) {
    return "$" + utilities.numberWithCommas(num / 1000000, {
      precision: 2
    }) + " " + 'million';
  } else if (num > 10000) {
    return "$" + utilities.numberWithCommas(num, {
      precision: 0
    });
  } else {
    return "$" + utilities.numberWithCommas(num, {
      precision: 0
    });
  }
};

var weeklyPrizeAmountV3 = function weeklyPrizeAmountV3() {
  var totalPrizes = hooks.usePooltogetherTotalPrizesV3(); // Check if data has loaded

  if (totalPrizes === null) {
    return React__default.createElement(ThemedClipSpinner, null);
  }

  return formatNumbers(totalPrizes);
};

var EIGHT_HOURS_IN_SECONDS = 28800;
var PrizeCountdown = function PrizeCountdown(props) {
  var t = props.t;
  var center = props.center,
      textAlign = props.textAlign,
      textSize = props.textSize,
      prizePeriodSeconds = props.prizePeriodSeconds,
      prizePeriodStartedAt = props.prizePeriodStartedAt,
      isRngRequested = props.isRngRequested,
      canStartAward = props.canStartAward,
      canCompleteAward = props.canCompleteAward,
      className = props.className;
  var flashy = props.flashy === false ? false : true;

  var _usePrizePeriodTimeLe = hooks.usePrizePeriodTimeLeft(prizePeriodSeconds, prizePeriodStartedAt),
      days = _usePrizePeriodTimeLe.days,
      hours = _usePrizePeriodTimeLe.hours,
      minutes = _usePrizePeriodTimeLe.minutes,
      seconds = _usePrizePeriodTimeLe.seconds,
      secondsLeft = _usePrizePeriodTimeLe.secondsLeft;

  if (isRngRequested || canStartAward || canCompleteAward) {
    var message = (t == null ? void 0 : t('prizeIsBeingAwarded')) || 'Prize is being awarded';

    if (canStartAward) {
      message = (t == null ? void 0 : t('prizeCanBeAwarded')) || 'Prize can be awarded';
    }

    return React__default.createElement("p", {
      className: classnames(textSize, className, 'font-bold', {
        'text-flashy': flashy,
        'text-xs xs:text-sm sm:text-xl': !textSize,
        'text-right': !textAlign
      })
    }, message);
  }

  var daysArray = ('' + days).split('');
  var hoursArray = ('' + hours).split('');
  var minutesArray = ('' + minutes).split('');
  var secondsArray = ('' + seconds).split('');
  var textColor = secondsLeft >= currentPoolData.SECONDS_PER_DAY ? 'green' : secondsLeft >= EIGHT_HOURS_IN_SECONDS ? 'orange' : 'red';

  var LeftSideJsx = function LeftSideJsx(_ref) {
    var digit = _ref.digit;
    return React__default.createElement("span", {
      className: "bg-tertiary text-" + textColor + " font-bold rounded-sm",
      style: {
        padding: '2px 8px',
        margin: '0 1px'
      }
    }, digit);
  };

  var RightSideJsx = function RightSideJsx(_ref2) {
    var digit = _ref2.digit;
    return React__default.createElement("span", {
      className: "bg-tertiary text-" + textColor + " font-bold rounded-sm",
      style: {
        padding: '2px 8px',
        margin: '0 1px'
      }
    }, digit);
  };

  var unitClasses = 'opacity-60 text-inverse text-xxxs';
  var unitStyles = {
    paddingTop: 3
  };
  return React__default.createElement(React__default.Fragment, null, React__default.createElement("div", {
    className: classnames(textSize, className, 'flex text-center', {
      'justify-center': center,
      'text-sm xs:text-xs sm:text-base': !textSize
    })
  }, React__default.createElement("div", {
    className: 'flex flex-col mr-4',
    style: {
      paddingLeft: 2,
      paddingRight: 2
    }
  }, React__default.createElement("div", {
    className: 'flex'
  }, React__default.createElement(LeftSideJsx, {
    digit: daysArray.length < 2 ? 0 : daysArray[0]
  }), React__default.createElement(RightSideJsx, {
    digit: daysArray.length > 1 ? daysArray[1] : daysArray[0]
  })), React__default.createElement("div", {
    className: unitClasses,
    style: unitStyles
  }, (t == null ? void 0 : t('countdownDayShort')) || 'DAY')), React__default.createElement("div", {
    className: 'flex flex-col',
    style: {
      paddingLeft: 2,
      paddingRight: 2
    }
  }, React__default.createElement("div", {
    className: 'flex'
  }, React__default.createElement(LeftSideJsx, {
    digit: hoursArray.length < 2 ? 0 : hoursArray[0]
  }), React__default.createElement(RightSideJsx, {
    digit: hoursArray.length > 1 ? hoursArray[1] : hoursArray[0]
  })), React__default.createElement("div", {
    className: unitClasses,
    style: unitStyles
  }, (t == null ? void 0 : t('countdownHourShort')) || 'HR')), React__default.createElement("div", {
    className: "px-0 sm:px-1 font-bold text-" + textColor
  }, ":"), React__default.createElement("div", {
    className: 'flex flex-col',
    style: {
      paddingLeft: 1,
      paddingRight: 2
    }
  }, React__default.createElement("div", {
    className: 'flex'
  }, React__default.createElement(LeftSideJsx, {
    digit: minutesArray.length < 2 ? 0 : minutesArray[0]
  }), React__default.createElement(RightSideJsx, {
    digit: minutesArray.length > 1 ? minutesArray[1] : minutesArray[0]
  })), React__default.createElement("div", {
    className: unitClasses,
    style: unitStyles
  }, (t == null ? void 0 : t('countdownMinuteShort')) || 'MIN')), React__default.createElement("div", {
    className: "px-0 sm:px-1 font-bold text-" + textColor
  }, ":"), React__default.createElement("div", {
    className: 'flex flex-col',
    style: {
      paddingLeft: 1,
      paddingRight: 2
    }
  }, React__default.createElement("div", {
    className: 'flex'
  }, React__default.createElement(LeftSideJsx, {
    digit: secondsArray.length < 2 ? 0 : secondsArray[0]
  }), React__default.createElement(RightSideJsx, {
    digit: secondsArray.length > 1 ? secondsArray[1] : secondsArray[0]
  })), React__default.createElement("div", {
    className: unitClasses,
    style: unitStyles
  }, (t == null ? void 0 : t('countdownSecondShort')) || 'SEC'))));
};

var SimpleCountDown = function SimpleCountDown(props) {
  var initialSecondsLeft = props.seconds,
      t = props.t;

  var _useTimeCountdown = hooks.useTimeCountdown(initialSecondsLeft),
      weeks = _useTimeCountdown.weeks,
      days = _useTimeCountdown.days,
      hours = _useTimeCountdown.hours,
      minutes = _useTimeCountdown.minutes,
      seconds = _useTimeCountdown.seconds;

  var weekString = getTimeString(t, 'week', weeks);
  var dayString = getTimeString(t, 'day', days);
  var hoursString = getTimeString(t, 'hour', hours);
  var minutesString = getTimeString(t, 'minute', minutes);
  var secondsString = getTimeString(t, 'second', seconds);

  if (weeks > 0) {
    if (days > 0) {
      return React__default.createElement(React__default.Fragment, null, weekString + " " + dayString);
    } else if (hours > 0) {
      return React__default.createElement(React__default.Fragment, null, weekString + " " + hoursString);
    } else {
      return React__default.createElement(React__default.Fragment, null, "" + weekString);
    }
  }

  if (days > 0) {
    if (hours > 0) {
      return React__default.createElement(React__default.Fragment, null, dayString + " " + hoursString);
    } else {
      return React__default.createElement(React__default.Fragment, null, dayString + " " + minutesString);
    }
  }

  if (hours > 0) {
    return React__default.createElement(React__default.Fragment, null, hoursString + " " + minutesString);
  }

  if (minutes > 0) {
    return React__default.createElement(React__default.Fragment, null, "" + minutesString);
  } else {
    return React__default.createElement(React__default.Fragment, null, secondsString);
  }
};

var getTimeString = function getTimeString(t, unit, amount) {
  return amount + " " + (t ? t(unit, {
    count: amount
  }) : amount > 0 ? "" + unit + (amount === 1 ? '' : 's') : '');
};

var SECONDS_PER_DAY = 86400;
var EIGHT_HOURS_IN_SECONDS$1 = 28800;
var Time = function Time(props) {
  var seconds = props.seconds,
      hideColors = props.hideColors,
      className = props.className;

  var _useMemo = React.useMemo(function () {
    return utilities.getTimeBreakdown(seconds);
  }, [seconds]),
      days = _useMemo.days,
      hours = _useMemo.hours,
      minutes = _useMemo.minutes,
      secs = _useMemo.seconds;

  var textClassName = seconds >= SECONDS_PER_DAY ? 'text-green' : seconds >= EIGHT_HOURS_IN_SECONDS$1 ? 'text-orange' : 'text-red';
  return React__default.createElement("div", {
    className: classnames(className, 'flex text-sm xs:text-xs sm:text-base')
  }, React__default.createElement(TimeUnit, {
    unit: 'day',
    amount: days,
    textClassName: textClassName,
    hideColors: hideColors,
    className: 'mr-2'
  }), React__default.createElement(TimeUnit, {
    unit: 'hr',
    amount: hours,
    textClassName: textClassName,
    hideColors: hideColors
  }), React__default.createElement(Colon, {
    className: textClassName
  }), React__default.createElement(TimeUnit, {
    unit: 'min',
    amount: minutes,
    textClassName: textClassName,
    hideColors: hideColors
  }), React__default.createElement(Colon, {
    className: textClassName
  }), React__default.createElement(TimeUnit, {
    unit: 'sec',
    amount: secs,
    textClassName: textClassName,
    hideColors: hideColors
  }));
};

var Colon = function Colon(props) {
  return React__default.createElement("span", {
    className: classnames(props.className, 'font-bold sm:px-1')
  }, ":");
};

var TimeUnit = function TimeUnit(props) {
  var amount = props.amount,
      unit = props.unit,
      exactDigits = props.exactDigits,
      hideColors = props.hideColors,
      textClassName = props.textClassName,
      className = props.className;
  var amounts = String(amount).split('');

  if (!exactDigits && amounts.length === 1) {
    amounts.unshift('0');
  }

  return React__default.createElement("div", {
    className: classnames(className, 'flex flex-col space-y-1')
  }, React__default.createElement("div", {
    className: 'flex space-x-px'
  }, amounts.map(function (amount, index) {
    var _classNames;

    return React__default.createElement(TimeDigit, {
      key: unit + "-" + index,
      amount: amount,
      className: classnames((_classNames = {}, _classNames[textClassName] = !hideColors, _classNames))
    });
  })), React__default.createElement("span", {
    className: 'uppercase opacity-60 text-inverse text-xxxs text-center'
  }, unit));
};

TimeUnit.defaultProps = {
  exactDigits: false
};

var TimeDigit = function TimeDigit(props) {
  return React__default.createElement("div", {
    className: classnames("bg-tertiary font-bold rounded-sm px-2 py-0.5", props.className)
  }, props.amount);
};

function TransactionStatusChecker(props) {
  var transactionsKey = props.transactionsKey,
      chainId = props.network,
      usersAddress = props.address,
      provider = props.provider;

  var _useAtom = jotai.useAtom(hooks.transactionsAtom),
      transactions = _useAtom[0],
      setTransactions = _useAtom[1];

  React.useEffect(function () {
    if (chainId && usersAddress && provider) {
      hooks.readTransactions(transactions, setTransactions, chainId, usersAddress, provider, transactionsKey);
    }
  }, [chainId, usersAddress, provider]);
  return null;
}

/**
 * Placeholder box for errors with a minium height so components don't jump
 * @param {*} props
 * @returns
 */

function ErrorsBox(props) {
  var errors = props.errors,
      className = props.className,
      colorClassName = props.colorClassName,
      fontClassName = props.fontClassName;
  var errorMessages = errors ? Object.values(errors).map(function (error) {
    return error.message;
  }) : [];
  if (errorMessages.length === 0) return null;
  return React__default.createElement("div", {
    className: classnames(className, fontClassName, colorClassName)
  }, errorMessages.map(function (errorMsg) {
    return errorMsg;
  }));
}
ErrorsBox.defaultProps = {
  className: 'mb-2',
  colorClassName: 'text-red',
  fontClassName: 'font-semibold font-inter text-center'
};

var SECONDS_PER_DAY$1 = 86400;
var SECONDS_PER_WEEK = 604800;
var PrizeFrequencyChip = function PrizeFrequencyChip(props) {
  var prizePeriodSeconds = props.prizePeriodSeconds,
      t = props.t,
      className = props.className;
  var isDaily = prizePeriodSeconds.toNumber() === SECONDS_PER_DAY$1;
  var isWeekly = prizePeriodSeconds.toNumber() === SECONDS_PER_WEEK;
  var dayPeriod = prizePeriodSeconds.toNumber() / SECONDS_PER_DAY$1;
  return React__default.createElement(Chip, {
    bgClasses: classnames({
      'bg-accent-grey-2': isDaily,
      'bg-accent-grey-1': isWeekly,
      'bg-accent-grey-5': !isWeekly && !isDaily
    }),
    textClasses: classnames({
      'text-highlight-6': isDaily,
      'text-green': isWeekly,
      'text-inverse': !isWeekly && !isDaily
    }),
    text: getPrizeFrequencyText(t, isDaily, isWeekly, dayPeriod),
    className: className
  });
};

var getPrizeFrequencyText = function getPrizeFrequencyText(t, isDaily, isWeekly, dayPeriod) {
  if (isDaily) {
    return (t == null ? void 0 : t('dailyPrize')) || 'Daily Prize';
  } else if (isWeekly) {
    return (t == null ? void 0 : t('prizeValue')) || 'Weekly Prize';
  } else {
    return (t == null ? void 0 : t('everyNDays', 'Every {{n}} days', {
      n: dayPeriod
    })) || 'Every {{n}} days';
  }
};

var PageTitleAndBreadcrumbs = function PageTitleAndBreadcrumbs(props) {
  var _pool$prize;

  var Link = props.Link,
      t = props.t,
      breadcrumbs = props.breadcrumbs,
      title = props.title,
      pool = props.pool,
      className = props.className,
      sizeClassName = props.sizeClassName,
      description = props.description,
      showPrizeFrequencyChip = props.showPrizeFrequencyChip;
  var crumbJsx = React__default.createElement("div", {
    className: classnames('flex flex-col items-start justify-between leading-none', sizeClassName, className)
  }, React__default.createElement("div", {
    className: 'inline-flex items-center text-left text-xl sm:text-3xl font-bold text-accent-2 relative'
  }, title, showPrizeFrequencyChip && React__default.createElement(PrizeFrequencyChip, {
    t: t,
    prizePeriodSeconds: pool == null ? void 0 : (_pool$prize = pool.prize) == null ? void 0 : _pool$prize.prizePeriodSeconds,
    className: 'ml-4'
  })), React__default.createElement("div", {
    className: 'inline-block text-left text-accent-2 font-inter relative uppercase mt-3 font-normal opacity-80 hover:opacity-100 trans'
  }, breadcrumbs == null ? void 0 : breadcrumbs.map(function (crumb, index) {
    return React__default.createElement("span", {
      className: 'text-xxxs sm:text-xxs',
      key: "crumb-" + index
    }, crumb.href && crumb.as ? React__default.createElement(Link, {
      href: crumb.href,
      as: crumb.as,
      shallow: true
    }, React__default.createElement("a", {
      className: 'text-xxxs sm:text-xxs border-b border-secondary hover:text-accent-3'
    }, crumb.name)) : crumb.name, index + 1 !== breadcrumbs.length && React__default.createElement(React__default.Fragment, null, ' ', React__default.createElement("span", {
      className: 'text-accent-4 opacity-70 mx-1 font-bold'
    }, ">"), ' '));
  })), description && React__default.createElement("p", {
    className: 'text-accent-1 text-sm'
  }, description));
  return React__default.createElement(React__default.Fragment, null, pool ? React__default.createElement("div", {
    className: 'flex justify-start items-center'
  }, React__default.createElement(TokenIcon, {
    sizeClassName: 'w-12 h-12 sm:w-16 sm:h-16 lg:w-18 lg:h-18 mr-2',
    address: pool.tokens.underlyingToken.address,
    chainId: pool.chainId
  }), React__default.createElement("div", {
    className: 'ml-1 sm:ml-6'
  }, crumbJsx)) : crumbJsx);
};
PageTitleAndBreadcrumbs.defaultProps = {
  sizeClassName: 'w-full'
};

var PoolCurrencyIcon = function PoolCurrencyIcon(props) {
  var _classnames;

  var className = props.className,
      noMediaQueries = props.noMediaQueries,
      sm = props.sm,
      lg = props.lg,
      xl = props.xl,
      xs = props.xs;
  var noMargin = props.noMargin || false;
  var sizeClasses = 'w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10';

  if (noMediaQueries === undefined) {
    if (xs) {
      sizeClasses = 'w-3 h-3 sm:w-5 sm:h-5 lg:w-6 lg:h-6';
    } else if (sm) {
      sizeClasses = 'w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8';
    } else if (lg) {
      sizeClasses = 'w-8 h-8 sm:w-14 sm:h-14';
    } else if (xl) {
      sizeClasses = 'w-12 h-12 sm:w-16 sm:h-16 lg:w-18 lg:h-18';
    }
  } else {
    sizeClasses = 'w-8 h-8';
  }

  var classes = classnames(sizeClasses, (_classnames = {}, _classnames[className] = className, _classnames['inline-block'] = !className, _classnames['mr-1'] = !noMargin, _classnames));
  return React__default.createElement(React__default.Fragment, null,  React__default.createElement(React__default.Fragment, null, React__default.createElement("div", {
    className: classes + " scale-80 text-center"
  }, React__default.createElement(ThemedClipSpinner, {
    size: '16px'
  }))) );
};

var deepEqual = /*#__PURE__*/require('deep-equal');

var debug = /*#__PURE__*/require('debug')('pool-app:TxRefetchListener');

function TxRefetchListener() {
  var _useAtom = jotai.useAtom(hooks.transactionsAtom),
      transactions = _useAtom[0];

  var _useState = React.useState([]),
      storedPendingTransactions = _useState[0],
      setStoredPendingTransactions = _useState[1];

  var pendingTransactions = transactions.filter(function (t) {
    return !t.completed && !t.cancelled;
  });
  React.useEffect(function () {
    // Only run this if something actually changed:
    if (!deepEqual(storedPendingTransactions, pendingTransactions)) {
      setStoredPendingTransactions(pendingTransactions);
      checkStoredPending(transactions, storedPendingTransactions);
    }
  }, [transactions]);
  return null;
}

var runRefetch = function runRefetch(tx) {
  // we don't know when the Graph will have processed the new block data or when it has
  // so simply query a few times for the updated data
  if (tx != null && tx.refetch) {
    tx.refetch(tx);
    setTimeout(function () {
      tx.refetch(tx);
      debug('refetch!');
    }, 2000);
    setTimeout(function () {
      tx.refetch(tx);
      debug('refetch!');
    }, 8000);
  }
};

var checkStoredPending = function checkStoredPending(transactions, storedPendingTransactions) {
  storedPendingTransactions.forEach(function (tx) {
    var storedTxId = tx.id;
    var currentTxState = transactions.find(function (_tx) {
      return _tx.id === storedTxId;
    });
    var completed = currentTxState == null ? void 0 : currentTxState.completed;
    var sent = currentTxState == null ? void 0 : currentTxState.sent;
    var error = currentTxState == null ? void 0 : currentTxState.error;
    var cancelled = currentTxState == null ? void 0 : currentTxState.cancelled;

    if (!cancelled && !completed && sent) {
      tx == null ? void 0 : tx.onSent == null ? void 0 : tx.onSent(tx);
    } else if (completed && !error && !cancelled) {
      tx == null ? void 0 : tx.onSuccess == null ? void 0 : tx.onSuccess(tx);
      runRefetch(tx);
    } else if (currentTxState && completed && error && !cancelled) {
      tx == null ? void 0 : tx.onError == null ? void 0 : tx.onError(tx);
    } else if (currentTxState != null && currentTxState.cancelled) {
      tx == null ? void 0 : tx.onCancelled == null ? void 0 : tx.onCancelled(tx);
    }
  });
};

var TxStatus = function TxStatus(props) {
  var chainId = props.chainId,
      t = props.t,
      tx = props.tx,
      title = props.title,
      subtitle = props.subtitle;
  var hideOnInWallet = props.hideOnInWallet,
      hideOnSent = props.hideOnSent,
      hideOnSuccess = props.hideOnSuccess,
      hideOnError = props.hideOnError;
  var inWalletMessage = props.inWalletMessage,
      sentMessage = props.sentMessage,
      successMessage = props.successMessage,
      errorMessage = props.errorMessage;

  var _useState = React.useState(false),
      showExtraMessage = _useState[0],
      setShowExtraMessage = _useState[1];

  var txCancelled = tx == null ? void 0 : tx.cancelled;
  var txInWallet = (tx == null ? void 0 : tx.inWallet) && !(tx != null && tx.sent);
  var txSent = (tx == null ? void 0 : tx.sent) && !(tx != null && tx.completed);
  var txCompleted = tx == null ? void 0 : tx.completed;
  var txError = Boolean(tx == null ? void 0 : tx.error);
  var transactionStatusText = t ? t('transactionStatus') : 'Transaction status';
  var pleaseConfirmInWalletText = t ? t('pleaseConfirmInYourWallet') : 'Please confirm in your wallet';
  var transactionSentConfirmingText = t ? t('transactionSentConfirming') : 'Transaction confirming ...';
  var transactionSuccessfulText = t ? t('transactionSuccessful') : 'Transaction successful!';
  var transactionFailedText = t ? t('transactionFailed') : 'Transaction failed';
  var transactionHashText = t ? t('transactionHash') : 'Transaction hash:';
  var transactionsMayTakeAFewMinutesText = t ? t('transactionsMayTakeAFewMinutes') : 'Transactions may take a few minutes.';
  React.useEffect(function () {
    var key;

    if (txSent) {
      key = setTimeout(function () {
        return setShowExtraMessage(true);
      }, 15000);
    }

    return function () {
      key && clearTimeout(key);
    };
  }, [txSent]);
  if (!tx) return null;
  if (txCancelled) return null;
  if (hideOnInWallet && txInWallet) return null;
  if (hideOnSent && txSent) return null;
  if (hideOnSuccess && txCompleted) return null;
  if (hideOnError && txError) return null;
  return React__default.createElement(React__default.Fragment, null, title && React__default.createElement("h3", {
    className: 'text-inverse mb-4'
  }, title), subtitle && React__default.createElement("h6", {
    className: 'text-accent-1 mb-4'
  }, subtitle), React__default.createElement(Banner, {
    className: 'flex flex-col'
  }, txSent && !txCompleted && !txError && React__default.createElement(Loader, {
    type: 'Oval',
    height: 50,
    width: 50,
    color: '#bbb2ce'
  }), txCompleted && !txError && React__default.createElement(FeatherIcon, {
    icon: 'check-circle',
    className: 'mx-auto stroke-1 w-16 h-16 stroke-current text-green mb-4'
  }), txCompleted && txError && React__default.createElement(FeatherIcon, {
    icon: 'x-circle',
    className: 'mx-auto stroke-1 w-16 h-16 stroke-current text-red mb-4'
  }), React__default.createElement("div", {
    className: 'text-accent-1 opacity-80 text-sm sm:text-base'
  }, transactionStatusText), txInWallet && !txError && React__default.createElement("div", {
    className: 'text-sm sm:text-base text-inverse'
  }, inWalletMessage ? inWalletMessage : pleaseConfirmInWalletText), txSent && React__default.createElement("div", {
    className: 'text-sm sm:text-base text-inverse'
  }, sentMessage ? sentMessage : transactionSentConfirmingText), txCompleted && !txError && React__default.createElement("div", {
    className: 'text-green text-sm sm:text-base'
  }, successMessage ? successMessage : transactionSuccessfulText), txError && React__default.createElement("div", {
    className: 'text-red text-sm sm:text-base'
  }, errorMessage ? errorMessage : transactionFailedText), tx.hash && React__default.createElement("div", {
    className: 'text-xxs sm:text-sm text-accent-1 opacity-80 mt-2'
  }, transactionHashText, React__default.createElement(BlockExplorerLink, {
    chainId: chainId,
    txHash: tx.hash,
    className: 'underline text-accent-1 opacity-80',
    shorten: true
  })), showExtraMessage && React__default.createElement("div", {
    className: 'text-xxs sm:text-sm text-accent-4 mt-2'
  }, transactionsMayTakeAFewMinutesText)));
};
TxStatus.defaultProps = {
  hideOnError: false,
  hideOnSuccess: false,
  hideOnInWallet: false,
  hideOnSent: false,
  hideExtraMessage: false
};

Object.defineProperty(exports, 'ToastContainer', {
  enumerable: true,
  get: function () {
    return reactToastify.ToastContainer;
  }
});
exports.Accordion = Accordion;
exports.Account = Account;
exports.AddTokenToMetamaskButton = AddTokenToMetamaskButton;
exports.Amount = Amount;
exports.Banner = Banner;
exports.BannerTheme = BannerTheme;
exports.BasicTable = BasicTable;
exports.BlockExplorerLink = BlockExplorerLink;
exports.BottomAccountIcon = BottomAccountIcon;
exports.BottomNavContainer = BottomNavContainer;
exports.BottomNavLink = BottomNavLink;
exports.BottomPodsIcon = BottomPodsIcon;
exports.BottomPoolsIcon = BottomPoolsIcon;
exports.BottomRewardsIcon = BottomRewardsIcon;
exports.BottomVoteIcon = BottomVoteIcon;
exports.Button = Button;
exports.ButtonLink = ButtonLink;
exports.Card = Card;
exports.CardTheme = CardTheme;
exports.CheckboxInputGroup = CheckboxInputGroup;
exports.Chip = Chip;
exports.Collapse = Collapse;
exports.Content = Content;
exports.ContentPane = ContentPane;
exports.ContentWrapper = ContentWrapper;
exports.CopyIcon = CopyIcon;
exports.CountBadge = CountBadge;
exports.DefaultLayout = DefaultLayout;
exports.DropdownInputGroup = DropdownInputGroup;
exports.DropdownList = DropdownList;
exports.ErrorsBox = ErrorsBox;
exports.ExternalLink = ExternalLink;
exports.HeaderLogo = HeaderLogo;
exports.InputLabel = InputLabel;
exports.InternalLink = InternalLink;
exports.LanguagePickerDropdown = LanguagePickerDropdown;
exports.LinkIcon = LinkIcon;
exports.LinkTheme = LinkTheme;
exports.LoadingDots = LoadingDots;
exports.LoadingLogo = LoadingLogo;
exports.LoadingScreen = LoadingScreen;
exports.Modal = Modal;
exports.NavPoolBalance = NavPoolBalance;
exports.NetworkIcon = NetworkIcon;
exports.NetworkSelector = NetworkSelector;
exports.NotificationBannerContainer = NotificationBannerContainer;
exports.NotificationBannerList = NotificationBannerList;
exports.PageHeaderContainer = PageHeaderContainer;
exports.PageTitleAndBreadcrumbs = PageTitleAndBreadcrumbs;
exports.PoolCurrencyIcon = PoolCurrencyIcon;
exports.PoolIcon = PoolIcon;
exports.PrizeCountdown = PrizeCountdown;
exports.PrizeFrequencyChip = PrizeFrequencyChip;
exports.RectangularInput = RectangularInput;
exports.RoundInput = RoundInput;
exports.SettingsContainer = SettingsContainer;
exports.SettingsItem = SettingsItem;
exports.SideAccountIcon = SideAccountIcon;
exports.SideNavContainer = SideNavContainer;
exports.SideNavLink = SideNavLink;
exports.SidePodsIcon = SidePodsIcon;
exports.SidePoolsIcon = SidePoolsIcon;
exports.SideRewardsIcon = SideRewardsIcon;
exports.SideVoteIcon = SideVoteIcon;
exports.SimpleCountDown = SimpleCountDown;
exports.SimpleInput = SimpleInput;
exports.SimpleLayout = SimpleLayout;
exports.SocialLinks = SocialLinks;
exports.SquareButton = SquareButton;
exports.SquareLink = SquareLink;
exports.Switch = Switch;
exports.Tab = Tab;
exports.Tabs = Tabs;
exports.Tagline = Tagline;
exports.TestnetSettingsItem = TestnetSettingsItem;
exports.TextInputGroup = TextInputGroup;
exports.ThemeContext = ThemeContext;
exports.ThemeContextProvider = ThemeContextProvider;
exports.ThemeSettingsItem = ThemeSettingsItem;
exports.ThemedClipSpinner = ThemedClipSpinner;
exports.TicketRow = TicketRow;
exports.Time = Time;
exports.TipBanner = TipBanner;
exports.TokenIcon = TokenIcon;
exports.Tooltip = Tooltip;
exports.TransactionStatusChecker = TransactionStatusChecker;
exports.TxRefetchListener = TxRefetchListener;
exports.TxStatus = TxStatus;
exports.WeeklyPrizeAmountCard = WeeklyPrizeAmountCard;
exports.addTokenToMetamask = addTokenToMetamask;
exports.formatBlockExplorerAddressUrl = formatBlockExplorerAddressUrl;
exports.formatBlockExplorerTxUrl = formatBlockExplorerTxUrl;
exports.getLegacyButtonClassNames = getLegacyButtonClassNames;
exports.notificationBannerVisibleAtom = notificationBannerVisibleAtom;
exports.overrideToolTipPosition = overrideToolTipPosition;
exports.poolToast = poolToast;
//# sourceMappingURL=react-components.cjs.development.js.map
