(function () {

  async function apply(context, template) {
    if (!context.contentZone) return;

    const response = await fetch("https://cloudchartbeat-shnu6s7fea-du.a.run.app/v1/real-time/");
    const data = response.json();

    console.log(data);

    const htmlArr = template(context).split("</br>");
    const device = window.innerWidth >= 1024 ? "PC" : window.innerWidth >= 740 ? "tablet" : "mobile";
    const deviceIndex = { "PC": 0, "tablet": 1, "mobile": 2 }[device];

    setTimeout(() => {
      SalesforceInteractions.cashDom("div[data-pb-fingerprint='f0frDo5eqwth2sz']").html(htmlArr[deviceIndex]);
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
