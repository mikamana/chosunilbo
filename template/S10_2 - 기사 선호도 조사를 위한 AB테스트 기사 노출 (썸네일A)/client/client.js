(function () {

  function handleTemplateContent({ context, template }) {

    const htmlArr = template(context).split("</br>");
    const device = window.innerWidth >= 1024 ? "PC" : window.innerWidth >= 740 ? "tablet" : "mobile";
    const deviceIndex = { "PC": 0, "tablet": 1, "mobile": 2 }[device];

    SalesforceInteractions.cashDom("section[data-pb-fingerprint='c0f1RQsU1PTFgf'] > div:nth-child(3) > div[data-pb-type='story-card/default']:first-child").html(htmlArr[deviceIndex]);

  }

  function handleTriggerEvent({ context, template }) {
    if (!context.contentZone) return;

    // const { userGroup, triggerOptions, triggerOptionsNumber } = context || {};

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // if (userGroup !== "Control") {
        handleTemplateContent({ context, template });
        // }
        resolve(true);
      }, 1500);
    });
  }


  function apply(context, template) {
    if (!context.contentZone) return;
    if (SalesforceInteractions.cashDom(`#evg-edu-sample`).length > 0) return;
    return handleTriggerEvent({ context, template });



  }

  function reset(context, template) {
    SalesforceInteractions.cashDom(`#evg-edu-sample`).remove();
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
    control: control
  });

})();
