"use strict";
var initSetUnit = function (win, doc) {
    var winTmp = win;
    var docTmp = doc;
    var docEl = doc.documentElement;
    var CSS = win.CSS;
    var unitUsable = false;
    var setHtmlFontSize = function (val) {
        docEl.style.fontSize = val;
    };
    if (CSS && CSS.supports && CSS.supports("font-size", "10vw")) {
        setHtmlFontSize("10vw");
        unitUsable = true;
    }
    else {
        setHtmlFontSize(docEl.clientWidth / 10 + "px");
        unitUsable = false;
    }
    if (!unitUsable) {
        winTmp.addEventListener("resize", function () {
            setHtmlFontSize(docEl.clientWidth / 10 + "px");
        });
        winTmp.addEventListener("pageshow", function (evt) {
            if (evt.persisted) {
                setHtmlFontSize(docEl.clientWidth / 10 + "px");
            }
        });
    }
    var setBodyFontSize = function () {
        if (docTmp.body) {
            docTmp.body.style.fontSize = "12px";
        }
        else {
            docTmp.addEventListener("DOMContentLoaded", setBodyFontSize);
        }
    };
    setBodyFontSize();
};
initSetUnit(window, document);
//# sourceMappingURL=setunit.js.map