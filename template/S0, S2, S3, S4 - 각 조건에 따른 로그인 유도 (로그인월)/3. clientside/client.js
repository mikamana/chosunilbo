(function () {

  function apply(context, template) {
    if (SalesforceInteractions.cashDom('#paywallCont').length > 0) return;
    setTimeout(() => {
      document.querySelector(".login-popup-layer").style.display = "flex";
      document.body.classList.add("stop-scrolling");
      SalesforceInteractions.cashDom(".layout-main > section").html(template());
    }, 10)

  }

  function reset(context, template) {

    Evergage.cashDom("#evg-new-template").remove();
  }

  function control(context) {

    const contentZoneSelector = Evergage.getContentZoneSelector(context.contentZone);
    return Evergage.DisplayUtils
      .pageElementLoaded(contentZoneSelector)
      .then((element) => {
        Evergage.cashDom(element).attr({
          "data-evg-campaign-id": context.campaign,
          "data-evg-experience-id": context.experience,
          "data-evg-user-group": context.userGroup
        });
      });
  }

  registerTemplate({
    apply: apply,
    reset: reset,
    control: control
  });

})();

