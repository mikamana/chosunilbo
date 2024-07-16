(function () {

  function setInfobarPosition(context) {
    if (context.infobarClass === "evg-infobar-top") {
      SalesforceInteractions.cashDom("body").css({ "margin-bottom": "0", "margin-top": "2.5rem" });
    } else {
      SalesforceInteractions.cashDom("body").css({ "margin-bottom": "2.5rem", "margin-top": "0" });
    }
  }

  function setDismissal(context) {
    SalesforceInteractions.cashDom(`#evg-edu-sample.${context.infobarClass} .evg-btn-dismissal`).on("click", () => {
      SalesforceInteractions.cashDom(`#evg-edu-sample.${context.infobarClass}`).remove();
      SalesforceInteractions.cashDom("body").css({ "margin-top": "0", "margin-bottom": "0" });
    });
  }

  async function apply(context, template) {

    if (!context.contentZone) return;

    const hashTagFullName = context.attribute.attributes.tagItem.value;
    const hashTag = hashTagFullName.replace("#", "");
    const responseKeyword = await fetch(`https://cloudchartbeat-shnu6s7fea-du.a.run.app/v1/real-time/?keyword=${hashTag}`);
    const keywordData = await responseKeyword.json();
    console.log(keywordData);
    console.log(hashTag);




    const htmlArr = template(context).split("</br>");
    const device = window.innerWidth >= 1024 ? "PC" : window.innerWidth >= 740 ? "tablet" : "mobile";
    const deviceIndex = { "PC": 0, "tablet": 1, "mobile": 2 }[device];
    setTimeout(() => {
      SalesforceInteractions.cashDom("div[data-pb-fingerprint='f0fso3pnKVbt5C']").html(htmlArr[deviceIndex]);
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
