(function () {

  /**
   * @function setInfobarPosition
   * @param {Object} context
   * @description Set the position of the infobar via class assignments, based on content zone selected.
   */
  function setInfobarPosition(context) {
    if (context.infobarClass === "evg-infobar-top") {
      SalesforceInteractions.cashDom("body").css({ "margin-bottom": "0", "margin-top": "2.5rem" });
    } else {
      SalesforceInteractions.cashDom("body").css({ "margin-bottom": "2.5rem", "margin-top": "0" });
    }
  }

  /**
   * @function setDismissal
   * @param {Object} context
   * @description Add click listener to the "X" button that removes the template from the DOM.
   */
  function setDismissal(context) {
    SalesforceInteractions.cashDom(`#evg-edu-sample.${context.infobarClass} .evg-btn-dismissal`).on("click", () => {
      SalesforceInteractions.cashDom(`#evg-edu-sample.${context.infobarClass}`).remove();
      SalesforceInteractions.cashDom("body").css({ "margin-top": "0", "margin-bottom": "0" });
    });
  }

  function apply(context, template) {
    if (!context.contentZone) return;

    const htmlArr = template(context).split("</br>");
    const device = window.innerWidth >= 1024 ? "PC" : window.innerWidth >= 740 ? "tablet" : "mobile";
    const deviceIndex = { "PC": 0, "tablet": 1, "mobile": 2 }[device];

    setTimeout(() => {
      SalesforceInteractions.cashDom("section[data-pb-fingerprint='c0f1RQsU1PTFgf'] > div:nth-child(3) > div[data-pb-type='story-card/default']:first-child").html(htmlArr[deviceIndex]);
    }, 1000);

  }

  function reset(context, template) {
    SalesforceInteractions.cashDom(`#evg-edu-sample.${context.infobarClass}`).remove();
    SalesforceInteractions.cashDom("body").css({ "margin-top": "0", "margin-bottom": "0" });
  }

  function control(context) {
    return new Promise(resolve => { if (context.contentZone) resolve(); });
  }

  registerTemplate({
    apply: apply,
    reset: reset,
    control: control
  });

})();
