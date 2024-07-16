(function () {
  console.log("템플릿");
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
  // function setDismissal(context) {
  //     SalesforceInteractions.cashDom(`#evg-eventBanner.${context.infobarClass} .evg-btn-dismissal`).on("click", () => {
  //         SalesforceInteractions.cashDom(`#evg-eventBanner.${context.infobarClass}`).remove();
  //         SalesforceInteractions.cashDom("body").css({ "margin-top": "0", "margin-bottom": "0" });
  //     });
  // }

  function handleTemplateContent({ context, template }) {
    const html = template(context);
    SalesforceInteractions.cashDom("body .special-wide > .layout--container > .heading-title:nth-child(3)").after(html);
    // setDismissal();
  }

  function handleTriggerEvent({ context, template }) {
    if (!context.contentZone) return;

    const { userGroup, triggerOptions, triggerOptionsNumber } = context || {};
    console.log(context)
    console.log(userGroup)
    console.log(template)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userGroup !== "Control") {
          handleTemplateContent({ context, template });
        }
        resolve(true);
      }, 1000);
    });
    // switch (triggerOptions.name) {
    //     case "timeOnPage":

    // }
  }


  function apply(context, template) {
    if (!context.contentZone) return;
    if (SalesforceInteractions.cashDom(`#evg-eventBanner`).length > 0) return;
    return handleTriggerEvent({ context, template });
  }
  setTimeout(() => {
    ["prd1", "prd2", "prd3", "prd4"].forEach((prdClass) => {
      let prdDiscount = SalesforceInteractions.cashDom("." + prdClass + " .discount");
      let prdRetailPrice = parseInt(SalesforceInteractions.cashDom("." + prdClass + " .retail_price").text());
      let prdPrice = parseInt(SalesforceInteractions.cashDom("." + prdClass + " .price").text());
      let prdDiscountRate = ((prdRetailPrice - prdPrice) / prdRetailPrice) * 100;
      prdDiscount.text(Math.floor(prdDiscountRate) + "%");
    });

    // 가격의 3번째 자리마다 콤마 삽입
    const insertCommas = (number) => {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    // 각 상품에 대해 가격을 처리하고 값을 변경
    [".prd1", ".prd2", ".prd3", ".prd4"].forEach((productClass) => {
      let productElement = SalesforceInteractions.cashDom(productClass);

      // .retail_price와 .price 모두 처리
      let priceElements = [productElement.find(".retail_price"), productElement.find(".price")];

      priceElements.forEach((priceElement) => {
        let priceString = priceElement.text();
        let formattedPrice = insertCommas(parseInt(priceString)) + "원";
        priceElement.text(formattedPrice);
      });
    });
  }, 1100)
  function reset(context, template) {
    SalesforceInteractions.cashDom(`#evg-eventBanner.${context.infobarClass}`).remove();
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
