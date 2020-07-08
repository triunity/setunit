(function setUnit(win: Window, doc: Document): void {
    const docTmp: Document = doc;
    const docEl: HTMLElement = doc.documentElement;
    const { CSS } = win;
    let unableViewUnit: boolean;
  
    function setHtmlFontSize(): void {
      docEl.style.fontSize = `${docEl.clientWidth / 10}px`;
    }
  
    if (CSS && CSS.supports && CSS.supports("font-size", "10vw")) {
      docEl.style.fontSize = "10vw";
      unableViewUnit = false;
    } else {
      setHtmlFontSize();
      unableViewUnit = true;
    }
  
    if (unableViewUnit) {
      win.addEventListener("resize", setHtmlFontSize);
      win.addEventListener("pageshow", (e: PageTransitionEvent) => {
        if (e.persisted) {
          setHtmlFontSize();
        }
      });
    }
  
    (function setBodyFontSize(): void {
      if (docTmp.body) {
        docTmp.body.style.fontSize = "12px";
      } else {
        docTmp.addEventListener("DOMContentLoaded", setBodyFontSize);
      }
    })();
  })(window, document);
  