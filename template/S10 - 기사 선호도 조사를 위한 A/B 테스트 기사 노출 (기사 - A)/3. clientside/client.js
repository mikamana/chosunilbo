(function () {

  function apply(context, template) {

    if (!context.contentZone) return;

    const htmlArr = template(context).split("</br>");
    const device = window.innerWidth >= 1024 ? "PC" : window.innerWidth >= 740 ? "tablet" : "mobile";
    const deviceIndex = { "PC": 0, "tablet": 1, "mobile": 2 }[device];

    setTimeout(() => {
      SalesforceInteractions.cashDom("section[data-pb-fingerprint='c0fiilbraX4A2jO']").html(htmlArr[deviceIndex]);
    }, 1000);

  }

  function reset(context, template) {

    /** Remove the template from the DOM to reset the template. */
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

