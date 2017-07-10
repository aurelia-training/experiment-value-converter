define('app',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
            this.number = 42.33212;
            this.currencyFormat = "USD";
        }
        App.prototype.setRandomNumber = function () {
            this.number = Math.random() * 100;
        };
        return App;
    }());
    exports.App = App;
});

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Promise.config({
        warnings: {
            wForgottenReturn: false
        }
    });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

define('aurelia-value-converters/ToStringValueConverter',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ToStringValueConverter = (function () {
        function ToStringValueConverter() {
        }
        ToStringValueConverter.prototype.toView = function (value) {
            return value.toString();
        };
        return ToStringValueConverter;
    }());
    exports.ToStringValueConverter = ToStringValueConverter;
});

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

define('au-value-converters/ToStringValueConverter',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ToStringValueConverter = (function () {
        function ToStringValueConverter() {
        }
        ToStringValueConverter.prototype.toView = function (value) {
            return value.toString();
        };
        return ToStringValueConverter;
    }());
    exports.ToStringValueConverter = ToStringValueConverter;
});

define('au-value-converters/ToCurrencyValueConverter',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ToCurrencyValueConverter = (function () {
        function ToCurrencyValueConverter() {
        }
        ToCurrencyValueConverter.prototype.toView = function (input, currency) {
            return new Intl.NumberFormat("en-US", { style: "currency", currency: currency }).format(input);
        };
        return ToCurrencyValueConverter;
    }());
    exports.ToCurrencyValueConverter = ToCurrencyValueConverter;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n\n  <!-- simple number-to-string value converter -->\n  <require from=\"./au-value-converters/ToStringValueConverter\"></require>\n  <p>${number | toString}</p>\n\n  <!-- currency converter -->\n  <require from=\"./au-value-converters/ToCurrencyValueConverter\"></require>\n  <p>${number | toCurrency:currencyFormat}</p>\n  <select value.bind=\"currencyFormat\">\n    <option value=\"AED\">AED</option>\n    <option value=\"ANG\">ANG</option>\n    <option value=\"AUD\">AUD</option>\n    <option value=\"CHE\">CHE</option>\n    <option value=\"CHF\">CHF</option>\n    <option value=\"CHW\">CHW</option>\n    <option value=\"EUR\">EUR</option>\n    <option value=\"GBP\">GBP</option>\n    <option value=\"HKD\">HKD</option>\n    <option value=\"HNL\">HNL</option>\n    <option value=\"HUF\">HUF</option>\n    <option value=\"IDR\">IDR</option>\n    <option value=\"ILS\">ILS</option>\n    <option value=\"INR\">INR</option>\n    <option value=\"IQD\">IQD</option>\n    <option value=\"IRR\">IRR</option>\n    <option value=\"ISK\">ISK</option>\n    <option value=\"JMD\">JMD</option>\n    <option value=\"JOD\">JOD</option>\n    <option value=\"JPY\">JPY</option>\n    <option value=\"KES\">KES</option>\n    <option value=\"KGS\">KGS</option>\n    <option value=\"KPW\">KPW</option>\n    <option value=\"KRW\">KRW</option>\n    <option value=\"KWD\">KWD</option>\n    <option value=\"KZT\">KZT</option>\n    <option value=\"LAK\">LAK</option>\n    <option value=\"LBP\">LBP</option>\n    <option value=\"LKR\">LKR</option>\n    <option value=\"LRD\">LRD</option>\n    <option value=\"LSL\">LSL</option>\n    <option value=\"LYD\">LYD</option>\n    <option value=\"MAD\">MAD</option>\n    <option value=\"MDL\">MDL</option>\n    <option value=\"MGA\">MGA</option>\n    <option value=\"MKD\">MKD</option>\n    <option value=\"MMK\">MMK</option>\n    <option value=\"MNT\">MNT</option>\n    <option value=\"MOP\">MOP</option>\n    <option value=\"MRO\">MRO</option>\n    <option value=\"MUR\">MUR</option>\n    <option value=\"MVR\">MVR</option>\n    <option value=\"MWK\">MWK</option>\n    <option value=\"MXN\">MXN</option>\n    <option value=\"MXV\">MXV</option>\n    <option value=\"MYR\">MYR</option>\n    <option value=\"MZN\">MZN</option>\n    <option value=\"NAD\">NAD</option>\n    <option value=\"NGN\">NGN</option>\n    <option value=\"NIO\">NIO</option>\n    <option value=\"NOK\">NOK</option>\n    <option value=\"NPR\">NPR</option>\n    <option value=\"NZD\">NZD</option>\n    <option value=\"OMR\">OMR</option>\n    <option value=\"PAB\">PAB</option>\n    <option value=\"PEN\">PEN</option>\n    <option value=\"PGK\">PGK</option>\n    <option value=\"PHP\">PHP</option>\n    <option value=\"PKR\">PKR</option>\n    <option value=\"PLN\">PLN</option>\n    <option value=\"PYG\">PYG</option>\n    <option value=\"QAR\">QAR</option>\n    <option value=\"RON\">RON</option>\n    <option value=\"RSD\">RSD</option>\n    <option value=\"RUB\">RUB</option>\n    <option value=\"RWF\">RWF</option>\n    <option value=\"SAR\">SAR</option>\n    <option value=\"SBD\">SBD</option>\n    <option value=\"SCR\">SCR</option>\n    <option value=\"SDG\">SDG</option>\n    <option value=\"SEK\">SEK</option>\n    <option value=\"SGD\">SGD</option>\n    <option value=\"SHP\">SHP</option>\n    <option value=\"SLL\">SLL</option>\n    <option value=\"SOS\">SOS</option>\n    <option value=\"SRD\">SRD</option>\n    <option value=\"SSP\">SSP</option>\n    <option value=\"STD\">STD</option>\n    <option value=\"SYP\">SYP</option>\n    <option value=\"SZL\">SZL</option>\n    <option value=\"THB\">THB</option>\n    <option value=\"TJS\">TJS</option>\n    <option value=\"TMT\">TMT</option>\n    <option value=\"TND\">TND</option>\n    <option value=\"TOP\">TOP</option>\n    <option value=\"TRY\">TRY</option>\n    <option value=\"TTD\">TTD</option>\n    <option value=\"TWD\">TWD</option>\n    <option value=\"TZS\">TZS</option>\n    <option value=\"UAH\">UAH</option>\n    <option value=\"UGX\">UGX</option>\n    <option value=\"USD\" selected>USD</option>\n    <option value=\"USN\">USN</option>\n    <option value=\"UYI\">UYI</option>\n    <option value=\"UYU\">UYU</option>\n    <option value=\"UZS\">UZS</option>\n    <option value=\"VEF\">VEF</option>\n    <option value=\"VND\">VND</option>\n    <option value=\"VUV\">VUV</option>\n    <option value=\"WST\">WST</option>\n    <option value=\"XAG\">XAG</option>\n    <option value=\"XAU\">XAU</option>\n    <option value=\"XBA\">XBA</option>\n    <option value=\"XBB\">XBB</option>\n    <option value=\"XBC\">XBC</option>\n    <option value=\"XBD\">XBD</option>\n    <option value=\"XCD\">XCD</option>\n    <option value=\"XDR\">XDR</option>\n    <option value=\"XOF\">XOF</option>\n    <option value=\"XPD\">XPD</option>\n    <option value=\"XPF\">XPF</option>\n    <option value=\"XPT\">XPT</option>\n    <option value=\"XSU\">XSU</option>\n    <option value=\"XTS\">XTS</option>\n    <option value=\"XUA\">XUA</option>\n    <option value=\"XXX\">XXX</option>\n    <option value=\"YER\">YER</option>\n    <option value=\"ZAR\">ZAR</option>\n    <option value=\"ZMW\">ZMW</option>\n    <option value=\"ZWL\">ZWL</option>\n  </select>\n\n  <!-- set random number -->\n  <button click.trigger=\"setRandomNumber()\">Set random number</button>\n\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map