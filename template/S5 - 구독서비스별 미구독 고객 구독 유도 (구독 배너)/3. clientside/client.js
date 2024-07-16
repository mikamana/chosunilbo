(function () {

  function apply(context, template) {
    if (!context.contentZone) return;
    if (SalesforceInteractions.cashDom(`#evg-new-template2`).length > 0) return;
    const html = template(context);
    SalesforceInteractions.cashDom("header").append(html);
    document.addEventListener("scroll", (e) => {
      const scrollY = window.scrollY;
      if (scrollY >= 200) {
        document.querySelector(".top_banner").style.display = "flex";
      } else {
        document.querySelector(".top_banner").style.display = "none";
      }
    })

  }

  function reset(context, template) {

    Evergage.cashDom("#evg-new-template").remove();
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

