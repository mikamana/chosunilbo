(function () {

  function apply(context, template) {
    setTimeout(() => {
      // 뉴스기사 ID 확인
      const pathList = window.location.pathname.split("/");
      const articleId = pathList[pathList.length - 1] || pathList[pathList.length - 2]; // URL이 슬래시로 끝날 경우를 대비
      // let paywallBg = document.querySelector('.paywall--bg'); // 로그인월 백그라운드

      fetch("https://cloudchartbeat-shnu6s7fea-du.a.run.app/v1/real-time/")
        .then((res) => res.json())
        .then((data) => {
          // api 내의 ARTICLEID가 현재 기사id인 항목 찾기
          const article = data.find((item) => item.ARTICLEID === articleId);
          console.log(article); // 결과 출력
          console.log(article.CONCURRENT); // 동시접속자 수
          console.log(article.PAGEVIEW_A); // 당일(0시 ~ 현재) 누적접속자 수
          if (article && article.CONCURRENT > 300 && article.PAGEVIEW_A > 50000) {
            //로그인월 노출
            document.querySelector(".login-popup-layer").style.display = "flex";
            document.body.classList.add("stop-scrolling");
            // SalesforceInteractions.cashDom(".layout-main > section").html(template());
            // document.querySelector(".paywall--bg").style.display = "block";

            // console.log("x");
            const contentZoneSelector = Evergage.getContentZoneSelector(context.contentZone);
            return Evergage.DisplayUtils
              .pageElementLoaded(contentZoneSelector)
              .then((element) => {
                const html = template(context);
                Evergage.cashDom("footer").append(html);
              });
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
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

