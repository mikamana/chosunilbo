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
    SalesforceInteractions.cashDom(`#popup_wrap.${context.infobarClass}.today_close_btn`).on("click", () => {
      SalesforceInteractions.cashDom(`#popup_wrap.${context.infobarClass}`).remove();
      SalesforceInteractions.cashDom("body").css({ "margin-top": "0", "margin-bottom": "0" });
    });
  }

  function handleTemplateContent({ context, template }) {
    const html = template(context);
    SalesforceInteractions.cashDom("#fusion-app").append(html);
    // setDismissal();
  }

  function handleTriggerEvent({ context, template }) {
    if (!context.contentZone) return;

    const { userGroup, triggerOptions, triggerOptionsNumber } = context || {};
    console.log(context);
    console.log(userGroup);
    console.log(template);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userGroup !== "Control") {
          handleTemplateContent({ context, template });
          const popupWrap = document.querySelector("#popup_wrap");
          const closeElements = document.querySelectorAll(".today_close_btn, .close_btn, .bg_layer");
          closeElements.forEach((element) => {
            element.addEventListener("click", () => {
              if (popupWrap) popupWrap.remove();
              // body.classList.remove("scrollLock");
              console.log("팝업 닫기");
            });
          });
        }
        resolve(true);
      }, 1000);
    });
  }
  function apply(context, template) {
    setInfobarPosition(context);
    setDismissal(context);
    if (!context.contentZone) return;
    context.infobarClass = context.contentZone == "global_infobar_top_of_page" ? "evg-infobar-top" : "evg-infobar-bottom";
    if (SalesforceInteractions.cashDom(`#popup_wrap.${context.infobarClass}`).length > 0) return;
    return handleTriggerEvent({ context, template });
  }

  function reset(context, template) {
    SalesforceInteractions.cashDom(`#popup_wrap.${context.infobarClass}`).remove();
    SalesforceInteractions.cashDom("body").css({ "margin-top": "0", "margin-bottom": "0" });
  }

  function control(context) {
    return new Promise((resolve) => {
      if (context.contentZone) resolve();
    });
  }

  registerTemplate({
    apply: apply,
    reset: reset,
    control: control,
  });
})();
