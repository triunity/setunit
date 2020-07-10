const initSetUnit: (win: Window, doc: Document) => void = function(win, doc) {
  const winTmp = win;
  const docTmp = doc;
  const docEl = doc.documentElement;
  const { CSS } = win;
  let unitUsable = false;

  const setHtmlFontSize = function(val: string) {
    docEl.style.fontSize = val;
  }

  if (CSS && CSS.supports && CSS.supports("font-size", "10vw")) {
    setHtmlFontSize("10vw");
    unitUsable = true;
  } else {
    setHtmlFontSize(`${docEl.clientWidth / 10}px`);
    unitUsable = false;
  }

  if (!unitUsable) {
    winTmp.addEventListener("resize", () => {
      setHtmlFontSize(`${docEl.clientWidth / 10}px`);
    });
    winTmp.addEventListener("pageshow", (evt: PageTransitionEvent) => {
      if (evt.persisted) {
        setHtmlFontSize(`${docEl.clientWidth / 10}px`);
      }
    });
  }

  const setBodyFontSize = function() {
    if (docTmp.body) {
      docTmp.body.style.fontSize = "12px";
    } else {
      docTmp.addEventListener("DOMContentLoaded", setBodyFontSize);
    }
  }
  setBodyFontSize();
};

initSetUnit(window, document);
