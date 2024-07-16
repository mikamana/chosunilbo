console.log("코드 적용 확인 시간 240711_11:56");
if (typeof (SalesforceInteractions.mcis.FlickerDefender || {}).setPageMatchTimeout === "function") {
    SalesforceInteractions.mcis.FlickerDefender.setPageMatchTimeout(500);
}

if (typeof (SalesforceInteractions.mcis.FlickerDefender || {}).setRedisplayTimeout === "function") {
    SalesforceInteractions.mcis.FlickerDefender.setRedisplayTimeout(1000);
}

// 로그인 상태 판단
// const checkCookieExists = name => document.cookie.split(';').some(cookie => cookie.trim().startsWith(`${name}=`));
// checkCookieExists('ArcId.USER_INFO.session') ? sessionStorage.setItem("logBoolean_c", true) : sessionStorage.setItem("logBoolean_c", false);
// const logFunc = () =>{
//     const checkCookieExists = name => document.cookie.split(';').some(cookie => cookie.trim().startsWith(`${name}=`));

//     const cookie1Exists = checkCookieExists('ArcId.USER_INFO.session');
//     const cookie2Exists = checkCookieExists('ArcId.USER_IId.USER_INFO');

//     if (cookie1Exists || cookie2Exists) {
//         sessionStorage.setItem("logBoolean_c", "true");
//     } else {
//         sessionStorage.setItem("logBoolean_c", "false");
//     }
// }

// const logSettime = setTimeout(()=> {
const checkCookieExists = (name) => document.cookie.split(";").some((cookie) => cookie.trim().startsWith(`${name}=`));

const cookie1Exists = checkCookieExists("ArcId.USER_INFO.session"); // 일반로그인
const cookie2Exists = checkCookieExists("ArcId.USER_INFO"); // 자동로그인

if (cookie1Exists || cookie2Exists) {
    sessionStorage.setItem("logBoolean_c", "Y");
} else {
    sessionStorage.setItem("logBoolean_c", "N");
}
console.log(`로그인 상태 - ${sessionStorage.getItem("logBoolean_c")}`);

if (cookie1Exists) {
    sessionStorage.setItem("normal_login", "Y")
} else if (!cookie1Exists) {
    sessionStorage.setItem("normal_login", "N")
}
if (cookie2Exists) {
    sessionStorage.setItem("auto_login", "Y")
} else if (!cookie2Exists) {
    sessionStorage.setItem("auto_login", "N")
}
// if(window.location.href.includes("https://www.chosun.com/culture-life")){
//     SalesforceInteractions.sendEvent({
//         interaction: {
//             name: "문화라이프 기사 열람"
//         }
//     })
// }
// SalesforceInteractions.sendEvent({
//     user: { attributes: { logBoolean_c: sessionStorage.getItem("logBoolean_c") } },
// });
// },500)

// const bookmark_economy = () => {
//     SalesforceInteractions.sendEvent({
//         interaction: {
//             name: "bookmark",
//         },
//         user: {
//             attributes: {
//                 bookmark_economy: new Date,
//             },
//         },
//     });
// }
// const bookmark_opinion = () => {
//     SalesforceInteractions.sendEvent({
//         interaction: {
//             name: "bookmark",
//         },
//         user: {
//             attributes: {
//                 bookmark_opinion: new Date,
//             },
//         },
//     });
// }
// const bookmark_politics = () => {
//     SalesforceInteractions.sendEvent({
//         interaction: {
//             name: "bookmark",
//         },
//         user: {
//             attributes: {
//                 bookmark_politics: new Date,
//             },
//         },
//     });
// }
// const bookmark_national = () => {
//     SalesforceInteractions.sendEvent({
//         interaction: {
//             name: "bookmark",
//         },
//         user: {
//             attributes: {
//                 bookmark_national: new Date,
//             },
//         },
//     });
// }
// const bookmark_sports = () => {
//     SalesforceInteractions.sendEvent({
//         interaction: {
//             name: "bookmark",
//         },
//         user: {
//             attributes: {
//                 bookmark_sports: new Date,
//             },
//         },
//     });
// }

// const bookmark_attr = () =>{
//     switch(category1){
//         case 'national': bookmark_national();
//         break;
//         case 'opinion' : bookmark_opinion();
//         break;
//         case 'politics' : bookmark_politics();
//         break;
//         case 'sports' : bookmark_sports();
//         break;
//         case 'economy' : bookmark_economy();
//         break;
//     }
// }

const domain = window.location.hostname;
const url = window.location.href;
const allowedDomains = ["www.chosun.com", "chosunhnb.com", "www.chosunhnb.com", "m.chosunhnb.com"];
const hnbDomains = ["chosunhnb.com", "www.chosunhnb.com", "m.chosunhnb.com"];
const referrer = document.referrer;


// 외부 유입 확인
// const referCheck = () => {
//     const referrerURL = document.referrer;
//     //chosun.com 외 다른 곳에서 유입되었을 경우
//     if (!referrerURL.includes("chosun.com/") && domain.includes("www.chosun.com")) {
//         console.log(url)
//         //조선닷컴 메인으로의 유입은 제외
//         if (url !== "https://www.chosun.com/") {
//             console.log("외부채널에서 기사 유입")
//             //Salesforce로 Action 보내기
//             SalesforceInteractions.sendEvent({
//                 interaction: {
//                     //이름 확인 필요
//                     name: "외부채널유입"
//                 }
//             })
//         } else {
//             console.log("메인페이지")
//         }
//     }
// }



const dotcomEmail = () => {
    const keyBytes = CryptoJS.enc.Utf8.parse("dkaghghkwhtjsdlf");
    const ivBytes = CryptoJS.enc.Utf8.parse("asdkljgjdjfdjdjr");

    const encryptedCookieValue = getCookie("biz_un");
    if (!encryptedCookieValue) {
        console.error("쿠키를 찾을 수 없습니다.");
        return;
    }

    const decrypted = CryptoJS.AES.decrypt(encryptedCookieValue, keyBytes, {
        iv: ivBytes,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
    });

    console.log(decrypted.toString(CryptoJS.enc.Utf8));
    return decrypted.toString(CryptoJS.enc.Utf8);
};

const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
};

// 닷컴 - 암호화된 email 복호화

// console.log("outlink - top");
// if(dotcomEmail() === "merlin@milvus.co.kr"){
//     const externalInflow = document.referrer;
//     console.log(`1.${externalInflow}`);
//     if (externalInflow.includes("https://www.chosun.com/") === false) {
//         sessionStorage.setItem("externalInflow", true);
//         console.log("outlink - y");
//         SalesforceInteractions.sendEvent({
//             interaction: {
//                 name: "externalInflow"
//             }
//         });
//     } else if (externalInflow.includes("https://www.chosun.com/") === true) {
//         sessionStorage.setItem("externalInflow", false);
//         console.log("outlink - n");
//     }
// }
// console.log("outlink - bot");
// if(document.referrer.includes("https://www.chosun.com/") === false){
//     if (document.referrer.includes("https://www.chosun.com/") === false) {
//         console.log("아웃링크 유입")
//         SalesforceInteractions.sendEvent({
//             interaction: {
//                 name: "externalInflow"
//             }
//         })
//     }
// }

const urlParts = url.split("/");
const newsNumber = urlParts[urlParts.length - 2];
const newsUrl = window.location.pathname.split("/");
const pageCategory = window.location.pathname.split("/")[1];
const newsCategory = newsUrl.slice(1, 3);
let category1;
//카테고리 없는 기사 수집 방지
if (newsCategory[0].length !== 26) {
    category1 = newsCategory[0];
}
// const category1 = newsCategory[0]
const category2 = newsCategory[1];
const category2Page = SalesforceInteractions.cashDom("section.flex--justify-center > #main > .width--100:nth-child(1) a.text--black");
const uppercaseCategory = pageCategory.replace(/^[a-z]|-/g, (text) => (text === "-" ? "" : text.toUpperCase()));

// filter(Boolean) - undefined, null, false, ''(empty string) = Falsy value 삭제

const loginStatus_c = SalesforceInteractions.cashDom(".nav__auth-menu");
const recentSearch_c = SalesforceInteractions.cashDom(".search-bar--input").val();
// 연재물
// const series = SalesforceInteractions.cashDom(".article-header__headline span").text();
const series = SalesforceInteractions.cashDom("meta[name='keywords']");
// const series = SalesforceInteractions.cashDom("meta[name='news_keywords']").attr("content");
console.log(series);

// 북마크 할 때 attributes 값 부여
const category_attr = () => {
    if (category1 === "opinion") {
        return `bookmark_opinion`;
    } else if (category1 === "economy") {
        return `bookmark_economy`;
    } else if (category1 === "politics") {
        return `bookmark_politics`;
    } else if (category1 === "national") {
        return `bookmark_national`;
    } else if (category1 === "international") {
        return `bookmark_international`;
    } else if (category1 === "sports") {
        return `bookmark_sports`;
    } else if (category1 === "culture-life") {
        return `bookmark_culture_life`;
    } else if (category1 === "entertainments") {
        return `bookmark_entertainments`;
    } else if (category1 === "medical") {
        return `bookmark_medical`;
    } else if (category1 === "video_photo") {
        return `bookmark_video_photo`;
    }
    return `bookmark_${category1}`;
};
console.log(category1);
// 발행 한시간 뒤 기사 - chosun
const inputDate = new Date(
    SalesforceInteractions.cashDom(".inputDate")
        .text()
        .replace(/[-^가-힣\/ ]/g, "")
);
// console.log(inputDate)
const currentTime = new Date();
// console.log(currentTime)
if (currentTime - inputDate >= 3600000) {
    sessionStorage.setItem("oldNews", true);
} else {
    sessionStorage.setItem("oldNews", false);
}

if (category1) {
    sessionStorage.setItem("recentCategory_1", category1);
}
if (category2) {
    sessionStorage.setItem("recentCategory_2", category2);
}

// 쿠키 dz_no의 value
// if(domain === "www.chosun.com") {
//     const getDz = setTimeout(() => {
//        const logEl = SalesforceInteractions.cashDom(".nav__bar-right .nav__bar-icon .flex > a")
//     }, 500)
// }
const dznoValue = document.cookie.includes('dz_no=') ? document.cookie.match(/(?:^|;) *dz_no=([^;]*)/)[1] : undefined;

//chosunhnb
const loginStatus_cH = SalesforceInteractions.cashDom(".xans-layout-statelogon");




// 로그인 상태 - chosunHnB
if (loginStatus_cH.length === 1) {
    sessionStorage.setItem("log_cH", true);
} else {
    sessionStorage.setItem("log_cH", false);
}

// mall email
const mallCookie = (cookieName) => {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        // 쿠키 이름과 값 분리
        const [name, value] = cookie.split("=");
        if (name === cookieName) {
            // URL 디코딩
            return decodeURIComponent(value);
        }
    }
    return null;
};


// mall email 쿠키값 가져오기
const mallEmail = mallCookie("biz_un");

if (mallEmail !== null) {
    console.log(mallEmail);
} else {
    console.log("쿠키를 찾을 수 없습니다.");
}

const recentSearch_cH = SalesforceInteractions.cashDom("#keyword").val();




if (allowedDomains.includes(domain)) {
    SalesforceInteractions.init({
        cookieDomain: domain,
    }).then(() => {
        // console.log("api 호출전")
        // // // newsDetail에서 동접자, PV 확인하기
        // // if (document.querySelector("section.article-body")) {
        //     console.log("console_1")
        //     // 뉴스기사 ID 확인
        //     const pathList = window.location.pathname.split('/');
        //     const articleId = pathList[pathList.length - 1] || pathList[pathList.length - 2]; // URL이 슬래시로 끝날 경우를 대비
        //     // let paywallBg = document.querySelector('.paywall--bg'); // 로그인월 백그라운드
        //     console.log("console_2")
        //     fetch('https://cloudchartbeat-shnu6s7fea-du.a.run.app/v1/real-time/')
        //         .then((res) => console.log(res.json()))
        //         // .then((data) => {
        //         //     console.log("console_3")
        //         //     // api 내의 ARTICLEID가 현재 기사id인 항목 찾기
        //         //     console.log(data.slice(0, 30))
        //         //     const article = data.slice(0, 30).find(item => item.ARTICLEID === articleId);
        //         //     // console.log(article); // 결과 출력
        //         //     // console.log(article.CONCURRENT) // 동시접속자 수
        //         //     // console.log(article.PAGEVIEW_A) // 당일(0시 ~ 현재) 누적접속자 수
        //         //     console.log(data)
        //         //     console.log("console_4")
        //         //     sessionStorage.setItem("0712_test", "Y")
        //         //     // if (article && article.CONCURRENT > 300 && article.PAGEVIEW_A > 50000) {
        //         //     //     sessionStorage.setItem("popular_article", "Y")
        //         //     //     console.log("popular_article")
        //         //     // } else {
        //         //     //     sessionStorage.setItem("popular_article", "N")
        //         //     //     console.log("popular_article_X")
        //         //     // }
        //         //     console.log("console_5")
        //         // })
        //         // .catch((error) => {
        //         //     console.error('Error fetching data:', error);
        //         // });
        // // }
        // console.log("api 호출후")
        // SalesforceInteractions.DisplayUtil.pageElementLoaded(".footer", html).then((ele)=>{
        setTimeout(() => {
            if (SalesforceInteractions.cashDom("div.article-tags").length > 0) {
                // const tagArray = [];
                const tagArray = Array.from(document.querySelectorAll("div.article-tags > a > span"));
                const arrResult = [];

                SalesforceInteractions.cashDom("div.article-tags > a > span").each((index, data, arr) => {
                    arrResult.push(tagArray[index].innerText);
                });
                console.log(arrResult);

                const tagItem = arrResult.join(',');
                sessionStorage.setItem("tagItem", tagItem);


            } else {
                sessionStorage.setItem("tagf", null);
            }
        }, 2000);

        // });

        //외부 유입 채널 확인
        // referCheck();
        // const category1Ko = SalesforceInteractions.cashDom(".breadcrumb a.text--black:nth-child(1)");
        const category2Ko = SalesforceInteractions.cashDom(".breadcrumb a.text--black:nth-child(2)");
        // const tag = SalesforceInteractions.cashDom("meta[name='keywords']").attr("content").split(/,\s*뉴스레터/).filter(Boolean);
        if (SalesforceInteractions.cashDom("meta[name='news_keywords']").length > 0) {
            // const seriesTag = SalesforceInteractions.cashDom("meta[name='news_keywords']").attr("content").split(", ")
            const seriesTag = SalesforceInteractions.cashDom("meta[name='news_keywords']").attr("content");
            console.log(seriesTag);
            sessionStorage.setItem("seriesTag", seriesTag);
        } else {
            sessionStorage.setItem("seriesTag", null);
        }




        const cateOfCatePage = () => {
            // if (window.location.host === 'm.chosunhnb.com') {
            //     SalesforceInteractions.DisplayUtils.pageElementLoaded("#contents #titleArea", "html").then(() => {
            //         const cateKeyword = SalesforceInteractions.cashDom("meta[name='keywords']").attr("content");
            //         // 공백제거
            //         const keywordArray = cateKeyword.split(',').map(keyword => keyword.trim());
            //         const lastKeyword = keywordArray[keywordArray.length - 1];
            //         return `홈|${lastKeyword}`
            //     })
            // } else {
            SalesforceInteractions.DisplayUtils.pageElementLoaded("#contents .xans-element-.path > .mall_width > ol li:not(.displaynone)", "html").then(() => {
                return SalesforceInteractions.resolvers.buildCategoryId(
                    "#contents .xans-element-.path > .mall_width > ol li:not(.displaynone)",
                    null,
                    null,
                    (categoryId) => categoryId
                );
            });
            // }
        };
        console.log(`카테페이지 ${cateOfCatePage()}`);



        //접속 국가
        const getLocale = () => {
            const localeOrigin = navigator.language;
            const localeConvert = localeOrigin.replace("-", "_");
            if (localeConvert.length === 5) {
                return localeConvert;
            }
        };
        const chosunSitemapConfig = {
            global: {
                locale: getLocale(),
                onActionEvent: (actionEvent) => {
                    actionEvent.user = actionEvent.user || {};
                    actionEvent.user.identities = actionEvent.user.identities || {};
                    actionEvent.user.attributes = actionEvent.user.attributes || {};
                    if (window.location.hostname === "www.chosun.com") {
                        if (dotcomEmail()) {
                            actionEvent.user.identities.emailAddress = dotcomEmail();
                        }
                        if (referrer.includes("https://www.chosun.com/") === false) {
                            console.log("외부 referrer = " + referrer);
                            actionEvent.user.attributes.referrerURL = referrer
                        } else {
                            console.log("내부 referrer = " + referrer);
                            actionEvent.user.attributes.referrerURL = ""
                        }
                        // dz_no - chosun
                        if (dznoValue) {
                            actionEvent.user.attributes.dznoValue = dznoValue;
                        }
                        // if (!dznoValue) {
                        //     actionEvent.user.attributes.dznoValue = "none";
                        // }
                        // 닉네임 - chosun
                        // if (nickname) {
                        //     actionEvent.user.attributes.nickname = nickname;
                        // }
                        // if (sessionStorage.getItem("nickname") !== null) {
                        //     actionEvent.user.attributes.nickname = sessionStorage.getItem("nickname");
                        // }
                        // 최근 조회한 카테고리 - chosun
                        if (sessionStorage.getItem("recentCategory_1") !== null) {
                            actionEvent.user.attributes.recentCategory_1 = sessionStorage.getItem("recentCategory_1");
                        }
                        if (sessionStorage.getItem("recentCategory_2") !== null) {
                            actionEvent.user.attributes.recentCategory_2 = sessionStorage.getItem("recentCategory_2");
                        }

                        // 최근 검색어 - chosun
                        if (recentSearch_c) {
                            actionEvent.user.attributes.recentSearch_c = recentSearch_c;
                        }
                        // 로그인 상태 - chosun
                        if (sessionStorage.getItem("logBoolean_c") !== null) {
                            actionEvent.user.attributes.login_c = sessionStorage.getItem("logBoolean_c");
                        }
                        // 일반로그인
                        if (sessionStorage.getItem("normal_login") !== null) {
                            actionEvent.user.attributes.normal_login = sessionStorage.getItem("normal_login");
                        }
                        // 자동로그인
                        if (sessionStorage.getItem("auto_login") !== null) {
                            actionEvent.user.attributes.auto_login = sessionStorage.getItem("auto_login");
                        }
                        // 1500자 이상 여부 - chosun
                        if (sessionStorage.getItem("moreThan1500") !== null) {
                            actionEvent.user.attributes.moreThan1500 = sessionStorage.getItem("moreThan1500");
                        }
                        // 최근 북마크한 기사 - chosun
                        if (sessionStorage.getItem("recentBookmark") !== null) {
                            actionEvent.user.attributes.recentBookmark = sessionStorage.getItem("recentBookmark");
                        }
                        // 최근 댓글 단 기사 - chosun
                        if (sessionStorage.getItem("recentCommentsNews") !== null) {
                            actionEvent.user.attributes.recentCommentsNews = sessionStorage.getItem("recentCommentsNews");
                        }
                        // 발행 1시간이 지난 기사 - chosun
                        if (sessionStorage.getItem("oldNews") !== null) {
                            actionEvent.user.attributes.oldNews = sessionStorage.getItem("oldNews");
                        }
                        // 인기 기사 (동접자 400이상, 당일 PV 5만 이상)
                        if (sessionStorage.getItem("popular_article") !== null) {
                            actionEvent.user.attributes.popular_article = sessionStorage.getItem("popular_article")
                        }
                        // 아웃링크로 들어온 고객 - chosun
                        // if (sessionStorage.getItem("externalInflow") !== null) {
                        //     actionEvent.user.attributes.externalInflow = sessionStorage.getItem("externalInflow")
                        // }
                        if (sessionStorage.getItem("seriesTag") !== null) {
                            actionEvent.user.attributes.seriesTag = sessionStorage.getItem("seriesTag");
                        }
                        if (sessionStorage.getItem("tagItem") !== null) {
                            actionEvent.user.attributes.tagItem = sessionStorage.getItem("tagItem");
                        }
                        if (series.length > 0) {
                            actionEvent.user.attributes.series = "연재물";
                        } else {
                            actionEvent.user.attributes.series = "일반";
                        }
                    }
                    return actionEvent;
                },
                listeners: [
                    // 최근 검색어 - chosun
                    SalesforceInteractions.listener("click", ".search-bar--submit", (ele) => {
                        const keywords = SalesforceInteractions.cashDom(ele.target).closest("form").find("input[type='search']").val();
                        if (keywords.length > 0) {
                            sessionStorage.setItem("recentSearch_c", keywords);
                            SalesforceInteractions.sendEvent({
                                interaction: {
                                    name: `recentSearch_c - ${keywords}`,
                                },
                                user: {
                                    attributes: {
                                        recentSearch_c: sessionStorage.getItem("recentSearch_c"),
                                    },
                                },
                            });
                        }
                    }),
                ],
            },
            pageTypes: [
                {
                    name: "chosun_mainPage",
                    isMatch: () => {
                        if (window.location.href === "https://www.chosun.com/") {
                            return true;
                        }
                    },
                    interaction: {
                        name: "chosun_mainPage",
                    },
                    contentZones: [
                        // { name: "mainpage_wrap", selector: ".hp-main" },
                        // { name: "ABtest_1", selector: ".layout-main > .grid__container section article > div.flex-chain-wrapper:nth-child(1)" },
                        // { name: "recommendation_article1_main", selector: ".layout__bottom > .grid__container-centered" },
                        // {
                        //   name: "recommendation_article2_main",
                        //   selector: ".layout-main > .grid__container > section > article > div:nth-child(2) > section > div:nth-child(3) > .story-card-container",
                        // },
                        // { name: "recommendation_article3_main", selector: ".layout-main > .grid__container > section > article > div:nth-child(2) > section > div:nth-child(1) > div:nth-child(2) > .story-card-wrapper > .story-card" },
                        // { name: "recommendation_article4_main", selector: ".layout-main > .grid__container > section > article > div:nth-child(2) > section > div:nth-child(1) > div:nth-child(3) > .story-card-wrapper > .story-card" },
                        // { name: "recommendation_article5_main", selector: ".layout-main > .grid__container > section > article > div:nth-child(2) > section > div:nth-child(3) > div:nth-child(5)" },
                        // { name: "3차 교육 테스트 0625", selector: ".layout-main > .grid__container > section > article > div:nth-child(2) > section > div:nth-child(1) > div:nth-child(6)"},
                        { name: "[S10] ABtest_1", selector: "section[data-pb-fingerprint='c0fiilbraX4A2jO']" },
                        { name: "[S10] ABtest_2", selector: "section[data-pb-fingerprint='c0f1RQsU1PTFgf'] > div:nth-child(3) > div[data-pb-type='story-card/default']:first-child" },
                        { name: "[S10] ABtest_3", selector: "section[data-pb-fingerprint='c0f1RQsU1PTFgf'] > div:nth-child(1) > div:nth-child(3)" },
                        // { name : "[S7] Recommendation article", selector: "div[data-pb-fingerprint='f0fso3pnKVbt5C']" },
                        { name: "[S7] Recommendation_article", selector: "section[data-pb-fingerprint='c0f1RQsU1PTFgf'] > div:nth-child(3) > div[data-pb-type='story-card/default']:nth-last-child(1)" },
                        { name: "[S9] Tag based article", selector: "div[data-pb-fingerprint='f0fz5x6fpncKo1']" },
                        { name: "[S5] subs_banner", selector: "header" },
                    ],
                },
                {
                    name: "chosun_newsDetail",
                    isMatch: () =>
                        new Promise((resolve, reject) => {
                            let isMatchPDP = setTimeout(() => {
                                resolve(false);
                            }, 500);
                            return SalesforceInteractions.DisplayUtils.pageElementLoaded("section.article-body", "html").then(() => {
                                clearTimeout(isMatchPDP);
                                resolve(true);
                            });
                        }),
                    // new Promise((resolve, reject) => {
                    //     setTimeout(()=>{
                    //         return SalesforceInteractions.DisplayUtils.pageElementLoaded("section.article-body", "html").then(() => {
                    //             resolve(true);
                    //         });
                    //     }, 1000)
                    // }),
                    // {
                    //     setTimeout(() => {
                    //         if (SalesforceInteractions.cashDom("section.article-body").length > 0) {
                    //             return true
                    //         }
                    //     }, 1500)
                    // },
                    //   onActionEvent: (actionEvent) => {
                    //     actionEvent.user.attributes.hashTag = "test";
                    //     return actionEvent;
                    //   },
                    interaction: {
                        name: SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject,
                        catalogObject: {
                            // type: uppercaseCategory,
                            type: "Article",
                            id: () => SalesforceInteractions.mcis.getLastPathComponentWithoutExtension(window.location.pathname),
                            attributes: {
                                name: SalesforceInteractions.resolvers.fromSelector(".article-header__headline span"),
                                url: SalesforceInteractions.resolvers.fromHref(),
                                // imageUrl: SalesforceInteractions.resolvers.fromSelectorAttribute(".article-body .visual__image img", "src", (url) => url),
                                imageUrl: SalesforceInteractions.DisplayUtils.pageElementLoaded(".article-body .visual__image img", "html").then((ele) => {
                                    return SalesforceInteractions.cashDom(ele).attr("src");
                                }),
                                // reporter: SalesforceInteractions.DisplayUtils.pageElementLoaded(".author-name-box span", "html").then((ele) => {
                                //     return SalesforceInteractions.resolvers.fromSelector(".author-name-box span");
                                // }),
                                reporter: SalesforceInteractions.DisplayUtils.pageElementLoaded("section.article-body", "html").then((ele) => {
                                    if (SalesforceInteractions.cashDom(".author-name-box span").length > 0) {
                                        return SalesforceInteractions.resolvers.fromSelector(".author-name-box span");
                                    } else return "";
                                }),
                                inputDate: SalesforceInteractions.resolvers.fromSelector(".inputDate"),
                                upDate: SalesforceInteractions.resolvers.fromSelector(".upDate"),
                                tag: SalesforceInteractions.resolvers.fromSelector(".article-tags > a span"),
                                // tag: SalesforceInteractions.resolvers.fromSelector(".article-tags > a"),
                                // tag: SalesforceInteractions.DisplayUtils.pageElementLoaded(".article-tags", "html").then((ele) => {
                                //     SalesforceInteractions.sendEvent({
                                //         user :{
                                //             attributes :{
                                //                 tag: "dd",
                                //             }
                                //         }
                                //     })
                                //     return SalesforceInteractions.resolvers.fromSelector(".article-tags > a span")
                                // }),
                                sku: {
                                    id: () => SalesforceInteractions.mcis.getLastPathComponentWithoutExtension(window.location.pathname),
                                },
                            },
                            relatedCatalogObjects: {
                                Category: SalesforceInteractions.DisplayUtils.pageElementLoaded("section.article-body", "html").then((ele) => {
                                    // return SalesforceInteractions.resolvers.buildCategoryId(".breadcrumb > a.text--black", null, null, (categoryId) => [
                                    //     `${category1}${category2Ko.length > 0 ? '|' + category2 : ''}`,
                                    // ]);
                                    const categoryArr = [];
                                    categoryArr.push(category1);
                                    if (category2.length > 0 && category2) {
                                        categoryArr.push(category2);
                                    }
                                    console.log(categoryArr.join("|"));
                                    return [categoryArr.join("|")];
                                }),
                                // Brand: SalesforceInteractions.DisplayUtils.pageElementLoaded(".breadcrumb > a.text--black", "html").then((ele) => {
                                //     // const seriesArr = [];
                                //     // seriesArr.push(seriesTag)
                                //     if (SalesforceInteractions.cashDom("meta[name='news_keywords']").length > 0) {
                                //         const seriesTag = SalesforceInteractions.cashDom("meta[name='news_keywords']").attr("content")
                                //         const onlySeries = seriesTag.split(",")[0]
                                //         return [onlySeries];
                                //     }
                                // }),
                                // Series: SalesforceInteractions.DisplayUtils.pageElementLoaded(".breadcrumb > a.text--black", "html").then((ele) => {
                                //     // const seriesArr = [];
                                //     // seriesArr.push(seriesTag)
                                //     if (SalesforceInteractions.cashDom("meta[name='news_keywords']").length > 0) {
                                //         const seriesTag = SalesforceInteractions.cashDom("meta[name='news_keywords']").attr("content")
                                //         return [`${seriesTag}Series`];
                                //     }
                                // }),
                            },
                        },
                    },
                    // onActionEvent: (actionEvent) => {
                    //   actionEvent.user = actionEvent.user || {};
                    //   actionEvent.user.identities = actionEvent.user.identities || {};
                    //   actionEvent.user.attributes = actionEvent.user.attributes || {};
                    //   if (window.location.hostname === "www.chosun.com") {
                    //     // 인기 기사 (동접자 400이상, 당일 PV 5만 이상)
                    //     // if (sessionStorage.getItem("popular_article") !== null) {
                    //     //   actionEvent.user.attributes.popular_article = sessionStorage.getItem("popular_article")
                    //     // }
                    //     if(sessionStorage.setItem("0712_test", "Y") !== null){
                    //        actionEvent.user.attributes.popular_article = sessionStorage.getItem("0712_test")
                    //     }
                    //   }
                    //   return actionEvent;
                    // },
                    listeners: [
                        SalesforceInteractions.DisplayUtils.pageElementLoaded(".article-header__headline").then((e) => {
                            // const referrer = document.referrer;
                            // console.log("loaded = " + e);
                            // console.log("referrer = " + referrer);
                            //     if (referrer.includes("https://www.chosun.com/") === false) {
                            //     console.log("아웃링크 유입");
                            //     SalesforceInteractions.sendEvent({
                            //         interaction:{
                            //             name:"Referrer Check"
                            //         },
                            //         user:{
                            //             attributes:{
                            //                 referrerURL: referrer
                            //             }
                            //         }
                            //     })
                            // } else if (referrer.includes("https://www.chosun.com/") === true) {
                            //     console.log("내부 유입");
                            //     SalesforceInteractions.sendEvent({
                            //         interaction: {
                            //             name: "externalInflow No"
                            //         }
                            //     })
                            // }
                            // SalesforceInteractions.listener("onload", ".tag-item", () =>{
                            // 아웃링크 유입
                            // if (referrer.includes("https://www.chosun.com/") === false) {
                            //     console.log("아웃링크 유입");
                            //     SalesforceInteractions.sendEvent({
                            //         interaction:{
                            //             name:"Referrer Check"
                            //         },
                            //         user:{
                            //             attributes:{
                            //                 referrerURL: referrer
                            //             }
                            //         }
                            //     })
                            // } else if (referrer.includes("https://www.chosun.com/") === true) {
                            //     console.log("내부 유입");
                            //     SalesforceInteractions.sendEvent({
                            //         interaction: {
                            //             name: "externalInflow No"
                            //         }
                            //     })
                            // }
                            // }),
                        }),
                        // SalesforceInteractions.listener("onload", ".tag-item", () =>{

                        //     const hashTag = SalesforceInteractions.cashDom(".tag-item").text();
                        //     SalesforceInteractions.sendEvent({
                        //         interaction:{
                        //             name:"hashTag"
                        //         },
                        //         user:{
                        //             attributes:{
                        //                 tagItem: hashTag
                        //             }
                        //         }
                        //     })
                        // }),
                        // 최근 북마크한 기사 - chosun PC
                        SalesforceInteractions.listener("click", "#bookmark-v", () => {
                            console.log("북마크클릭");
                            // const headline = SalesforceInteractions.cashDom(".article-header__headline span").text();
                            sessionStorage.setItem("recentBookmark", category1);
                            SalesforceInteractions.sendEvent({
                                interaction: {
                                    name: "bookmark",
                                },
                                user: {
                                    attributes: {
                                        [category_attr()]: new Date(),
                                    },
                                },
                            });
                        }),
                        // 최근 북마크한 기사 - chosun mobile
                        SalesforceInteractions.listener("click", "#bookmark", () => {
                            console.log("북마크클릭");
                            // const headline = SalesforceInteractions.cashDom(".article-header__headline span").text();
                            sessionStorage.setItem("recentBookmark", category1);
                            SalesforceInteractions.sendEvent({
                                interaction: {
                                    name: "bookmark",
                                },
                                user: {
                                    attributes: {
                                        [category_attr()]: new Date(),
                                    },
                                },
                            });
                        }),
                        // 최근 댓글 단 기사 - chosun
                        SalesforceInteractions.listener("click", ".comment-feed--writeForm button.font--tertiary", () => {
                            console.log("최근 댓글 단 기사");
                            const headline = SalesforceInteractions.cashDom(".article-header__headline span").text();
                            if (SalesforceInteractions.cashDom(".comment-feed--writeForm .box--border-none").val().length > 0) {
                                sessionStorage.setItem("recentCommentsNews", headline);
                                SalesforceInteractions.sendEvent({
                                    interaction: {
                                        name: "recentCommentsNews",
                                    },
                                    user: {
                                        attributes: {
                                            recentCommentsNews: sessionStorage.getItem("recentCommentsNews"),
                                        },
                                    },
                                });
                            }
                        }),
                    ],
                    contentZones: [
                        { name: "related_article", selector: ".article-related-content" },
                        { name: "newsDetail LoginPopup", selector: "section.article-body" },

                    ],
                },
                {
                    name: "chosun_categoryPage",
                    isMatch: () =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                Promise.race([
                                    // category1만 있는 페이지
                                    SalesforceInteractions.DisplayUtils.pageElementLoaded(".secion-special .layout-main.layout__section.layout--container", "html"),
                                    // category1 + category2 페이지
                                    SalesforceInteractions.DisplayUtils.pageElementLoaded(
                                        "section.flex--justify-center > #main > .width--100:nth-child(1) a.text--black",
                                        "html"
                                    ),
                                ]).then(() => {
                                    resolve(true);
                                });
                            }, 1000);
                        }),
                    interaction: {
                        name: SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject,
                        catalogObject: {
                            type: "Category",
                            id: SalesforceInteractions.DisplayUtils.pageElementLoaded(".nav__bar", "html").then(() => {
                                // return `${category1}${category2Page.length > 0 && category2 ? '|' + category2 : ''}`;
                                const categoryArr = [];
                                categoryArr.push(category1);
                                if (category2Page.length > 0 && category2) {
                                    categoryArr.push(category2);
                                }
                                return categoryArr.join("|");
                            }),
                        },
                    },
                    contentZones: [{ name: "sport contentzone", selector: "#fusion-app" }],
                },
                {
                    name: "chosun_searchPage",
                    isMatch: () =>
                        new Promise((resolve, reject) => {
                            let isMatchPDP = setTimeout(() => {
                                resolve(false);
                            }, 50);
                            return SalesforceInteractions.DisplayUtils.pageElementLoaded(".search-option", "html").then(() => {
                                clearTimeout(isMatchPDP);
                                resolve(true);
                            });
                        }),
                    interaction: {
                        name: "chosun_searchPage",
                    },
                    // listeners: [
                    //     // 최근 검색어 - chosun
                    //     SalesforceInteractions.listener("click", ".search-bar--submit", (ele) => {
                    //         const keywords = SalesforceInteractions.cashDom(ele.target).closest("form").find("input[type='search']").val();
                    //         if (keywords.length > 0) {
                    //             sessionStorage.setItem("recentSearch_c", keywords);
                    //             SalesforceInteractions.sendEvent({
                    //                 interaction: {
                    //                     name: `recentSearch_c - ${keywords}`,
                    //                 },
                    //                 user: {
                    //                     attributes: {
                    //                         recentSearch_c: sessionStorage.getItem("recentSearch_c"),
                    //                     },
                    //                 },
                    //             });
                    //         }
                    //     }),
                    // ],
                },
                {
                    name: "chosun_loginPage",
                    isMatch: () =>
                        new Promise((resolve, reject) => {
                            let isMatchPDP = setTimeout(() => {
                                resolve(false);
                            }, 50);
                            return SalesforceInteractions.DisplayUtils.pageElementLoaded(".identity-wrapper #subsSignIn", "html").then(() => {
                                clearTimeout(isMatchPDP);
                                resolve(true);
                            });
                        }),
                    interaction: {
                        name: "chosun_loginPage",
                    },
                },
                {
                    name: "chosun_signup",
                    isMatch: () => {
                        if (window.location.href === "https://www.chosun.com/subscribe/signup/") {
                            return true;
                        }
                    },
                    interaction: {
                        name: "chosun_signup",
                    },
                },
                {
                    name: "chosun_newsletter",
                    isMatch: () => {
                        if (window.location.href === "https://www.chosun.com/newsletter/") {
                            return true;
                        }
                    },
                    interaction: {
                        name: "chosun_newsletter",
                    },
                },
                {
                    name: "chosun_profilePage",
                    isMatch: () => {
                        if (window.location.href === "https://www.chosun.com/mypage/profile/") {
                            return true;
                        }
                    },
                    interaction: {
                        name: "chosun_profilePage",
                    },
                    listeners: [
                        SalesforceInteractions.listener("click", "#buttonLogout", () => {
                            SalesforceInteractions.sendEvent({
                                interaction: {
                                    name: "logout",
                                },
                            });
                        }),
                    ],
                },
                {
                    name: "chosun_commentsPage",
                    isMatch: () => {
                        if (window.location.href === "https://www.chosun.com/mypage/comments/") {
                            return true;
                        }
                    },
                    interaction: {
                        name: "chosun_commentsPage",
                        catalogObject: {
                            attributes: {
                                userClass: SalesforceInteractions.DisplayUtils.pageElementLoaded(".level-box__member-info", "html").then((ele) => {
                                    return SalesforceInteractions.cashDom(".level-box__member-info > p > strong:nth-child(2)").text();
                                }),
                                numberOfComments: SalesforceInteractions.DisplayUtils.pageElementLoaded(".comment-feed--menuBar__count span", "html").then((ele) => {
                                    return SalesforceInteractions.cashDom(ele).text();
                                }),
                            },
                        },
                    },
                },
                {
                    name: "chosun_bookmarkPage",
                    isMatch: () => {
                        if (window.location.href === "https://www.chosun.com/mypage/bookmark/") {
                            return true;
                        }
                    },
                    interaction: {
                        name: "chosun_bookmarkPage",
                        catalogObject: {
                            attributes: {
                                bookmarkNum: SalesforceInteractions.DisplayUtils.pageElementLoaded(".bookmark-feed--container", "html").then((ele) => {
                                    return SalesforceInteractions.cashDom(ele).find(".counter_box").text();
                                }),
                            },
                        },
                    },
                },
                // {
                //     name: "chosun_weeklybiz",
                //     isMatch: () => {
                //         if (window.location.href === "https://www.chosun.com/weeklybiz/") {
                //             return true;
                //         }
                //     },
                //     interaction: {
                //         name: "chosun_weeklybiz",
                //     },
                // },
                {
                    name: "chosun_MCPtestPage",
                    isMatch: () => {
                        if (window.location.href === "https://www.chosun.com/test/mcp/") {
                            return true;
                        }
                    },
                    interaction: {
                        name: "chosun_MCPtestPage",
                    },
                    contentZones: [{ name: "mcptest contentZone", selector: "#fusion-app" }],
                },
                {
                    name: "chosun_shoppingPage",
                    isMatch: () => {
                        if (window.location.href.includes("https://www.chosun.com/shopping/")) {
                            return true;
                        }
                    },
                    interaction: {
                        name: "chosun_shoppingPage",
                    },
                    contentZones: [
                        { name: "Recommended_products", selector: ".special-wide > .layout--container > .heading-title:nth-child(3)" },
                        { name: "쇼핑의맛 contentZone", selector: "#fusion-app" },
                    ],
                },
            ],
            pageTypeDefault: {
                name: "default",
                interaction: {
                    name: "default",
                },
            },
        };
        const chosunhnbSitemapConfig = {
            global: {
                locale: getLocale(),
                onActionEvent: (actionEvent) => {
                    actionEvent.user = actionEvent.user || {};
                    actionEvent.user.identities = actionEvent.user.identities || {};
                    actionEvent.user.attributes = actionEvent.user.attributes || {};
                    if (hnbDomains.includes(domain)) {
                        if (mallEmail !== null) {
                            actionEvent.user.identities.emailAddress = mallEmail;
                        }
                        // 최근 검색어 - chosunHnB
                        if (recentSearch_cH) {
                            actionEvent.user.attributes.recentSearch_cH = recentSearch_cH;
                            console.log("최근검색어 attributes");
                        }
                        // 로그인 상태 - chosunHnB
                        if (sessionStorage.getItem("log_cH") !== null) {
                            actionEvent.user.attributes.logBoolean_cH = sessionStorage.getItem("log_cH");
                        }
                        // if (sessionStorage.getItem("memberId_cH") !== null) {
                        //     actionEvent.user.attributes.memberId_cH = sessionStorage.getItem("memberId_cH");
                        // }
                        // if (sessionStorage.getItem("clientId_cH") === "chosunarc") {
                        //     actionEvent.user.attributes.clientId_cH = "Y"
                        // } else if (clientId_cH === null) {
                        //     actionEvent.user.attributes.clientId_cH = "N"
                        // }
                        // 관심상품 - chosunHnB
                        if (sessionStorage.getItem("recentWishItemName") !== null) {
                            actionEvent.user.attributes.recentWishItemName = sessionStorage.getItem("recentWishItemName");
                            actionEvent.user.attributes.recentWishItemNo = sessionStorage.getItem("recentWishItemNo");
                        }
                        // 최근 장바구니 - chosunHnB
                        if (sessionStorage.getItem("recentCartItemNo") !== null) {
                            actionEvent.user.attributes.recentCartItemNo = sessionStorage.getItem("recentCartItemNo");
                        }
                        if (sessionStorage.getItem("recentCartItemName") !== null) {
                            actionEvent.user.attributes.recentCartItemName = sessionStorage.getItem("recentCartItemName");
                        }
                    }
                    return actionEvent;
                },
                listeners: [
                    // 최근  검색어 - chosunHnB
                    SalesforceInteractions.listener("submit", "#searchBarForm", () => {
                        console.log("submit");
                        const keywords = SalesforceInteractions.cashDom("#keyword").val();
                        if (keywords.length > 0) {
                            sessionStorage.setItem("recentSearch_cH", keywords);
                            SalesforceInteractions.sendEvent({
                                interaction: {
                                    name: `recentSearch_cH - ${keywords}`,
                                },
                                user: {
                                    attributes: {
                                        recentSearch_cH: sessionStorage.getItem("recentSearch_cH"),
                                    },
                                },
                            });
                        }
                    }),
                    //장바구니 - chosunHnB
                    SalesforceInteractions.listener("click", ".prdImg_thumb .button_ico img", (ele) => {
                        if (SalesforceInteractions.cashDom(ele.target).closest(".button.center").find(".option.displaynone").length > 0) {
                            const btnCart = SalesforceInteractions.cashDom(ele.target);
                            const prdOption = btnCart.closest(".prdImg_thumb").find("li.option.displaynone");
                            if (prdOption.length === 1) {
                                const prdNo = btnCart
                                    .closest(".prdImg_thumb")
                                    .find("a.prd_thumb_img")
                                    .attr("name")
                                    .replace(/[^0-9]/g, "");
                                const prdName = btnCart.closest(".item_inner").find(".prd_name a span").text();
                                const onePrice = () => {
                                    let price;
                                    if (btnCart.closest(".item_inner").find(".prd_price.best_prd_price:nth-child(3)").length === 1) {
                                        price = parseInt(
                                            btnCart
                                                .closest(".item_inner")
                                                .find(".prd_price.best_prd_price:nth-child(3) > span:nth-child(2)")
                                                .text()
                                                .replace(/[^0-9]/g, "")
                                        );
                                    } else if (btnCart.closest(".item_inner").find("ul.xans-product > li.prd_price:first-child").length === 1) {
                                        price = parseInt(
                                            btnCart
                                                .closest(".item_inner")
                                                .find("ul.xans-product > li.prd_price:first-child > span:nth-child(2)")
                                                .text()
                                                .replace(/[^0-9]/g, "")
                                        );
                                    }
                                    return price;
                                };

                                console.log(onePrice());
                                sessionStorage.setItem("recentCartItemName", prdName);
                                sessionStorage.setItem("recentCartItemNo", prdNo);
                                let lineItem = {
                                    catalogObjectId: prdNo,
                                    catalogObjectType: "Product",
                                    quantity: 1,
                                    price: onePrice(),
                                };
                                console.log(lineItem);
                                SalesforceInteractions.sendEvent({
                                    interaction: {
                                        name: SalesforceInteractions.CartInteractionName.AddToCart,
                                        lineItem: lineItem,
                                    },
                                    user: {
                                        attributes: {
                                            recentCartItemName: sessionStorage.getItem("recentCartItemName"),
                                            recentCartItemNo: sessionStorage.getItem("recentCartItemNo"),
                                        },
                                    },
                                });
                            }
                        } else if (SalesforceInteractions.cashDom(ele.target).closest(".button.center").find(".option.displaynone").length === 0) {
                            console.log("버튼3개");
                            let iframeInCart;
                            let iframePrdtotalPrice;
                            const onePrice = parseInt(
                                SalesforceInteractions.cashDom(ele.target).closest(".item_inner").find(".prd_price > span:nth-child(2)").text().replace(/[^\d]/g, "")
                            );
                            // console.log(prdPrice)
                            // const btnCart = document.querySelectorAll(".ec-admin-icon.cart");
                            // btnCart.forEach((item) => {
                            // item.addEventListener("click", () => {
                            setTimeout(() => {
                                const iframeTag = document.querySelector("#capp-shop-new-product-optionselect-layer > iframe");
                                console.log(iframeTag.contentWindow.document.body.querySelector(".ec-base-button .btnNormalFix.sizeS"));
                                iframeInCart = iframeTag.contentWindow.document.body.querySelector(".ec-base-button .btnNormalFix.sizeS");
                                // console.log(iframeTag.contentWindow.document.body.querySelector(".content > .inner > .name"));
                                // iframeInCart = iframeTag.contentWindow.document.body.querySelector(".content > .inner > .name");
                                console.log(iframeInCart, "iframeCart");
                                console.log("작동1");
                                iframeInCart.addEventListener("click", () => {
                                    iframePrdtotalPrice = iframeTag.contentWindow.document.body.querySelector("#totalPrice .total strong em").textContent;
                                    console.log("작동2");
                                    if (iframePrdtotalPrice !== "0" && iframePrdtotalPrice !== "0원") {
                                        console.log("작동3");
                                        const prdNo = iframeTag.contentWindow.document.body.querySelector("select").getAttribute("option_product_no");
                                        const prdName = iframeTag.contentWindow.document.body.querySelector("h2.name").textContent;
                                        const quantityCount = Number(
                                            iframeTag.contentWindow.document.body
                                                .querySelector("#totalPrice .total")
                                                .textContent.match(/\(\d+개\)/)[0]
                                                .match(/\d+/)[0]
                                        );
                                        sessionStorage.setItem("recentCartItemName", prdName);
                                        sessionStorage.setItem("recentCartItemNo", prdNo);
                                        let lineItem = {
                                            catalogObjectId: prdNo,
                                            catalogObjectType: "Product",
                                            quantity: quantityCount,
                                            price: onePrice,
                                        };
                                        sessionStorage.setItem("lineItem", lineItem);
                                        console.log(lineItem);
                                        console.log("작동4");

                                        SalesforceInteractions.sendEvent({
                                            interaction: {
                                                name: SalesforceInteractions.CartInteractionName.AddToCart,
                                                lineItem: lineItem,
                                            },
                                            // user: {
                                            //     attributes: {
                                            //         recentCartItemName: sessionStorage.getItem("recentCartItemName"),
                                            //         recentCartItemNo: sessionStorage.getItem("recentCartItemNo"),
                                            //     },
                                            // },
                                        });
                                    }
                                });
                            }, 1500);
                            // });
                            // });
                        }
                    }),
                    // 장바구니(팝업) - chosunHnB
                    // SalesforceInteractions.listener("click", ".prdImg_thumb .basket .button_ico img", () => {
                    //     console.log("옵션있음클릭");
                    //     const iframeBox = document.querySelector("iframe#capp-shop-new-product-optionselect-iframe");
                    //     // console.log(iframeBox)
                    //     iframeBox.addEventListener("load", () => {
                    //         console.log("load");
                    //         const iframeBtn = iframeBox.contentWindow.document.querySelector(".xans-product-action.ec-base-button > .btnNormalFix");
                    //         console.log(iframeBtn);
                    //         iframeBtn.addEventListener("click", (ele) => {
                    //             // console.log(ele)
                    //             // console.log("iframeBtn click")
                    //             const btnCart = SalesforceInteractions.cashDom(ele.target);
                    //             console.log(btnCart);

                    //             const prdNo = SalesforceInteractions.cashDom(btnCart).closest("body#popup").find(".option_product").attr("target-key");
                    //             console.log(prdNo);
                    //             const prdName = SalesforceInteractions.cashDom(btnCart).closest("body#popup").find("h2.name").text();

                    //             SalesforceInteractions.sendEvent({
                    //                 interaction: {
                    //                     name: SalesforceInteractions.CartInteractionName.AddToCart,
                    //                 },
                    //             });
                    //         });
                    //     });
                    // }),
                    // const onePrice = parseInt(btnCart.closest("meta[property='product:sale_price:amount']").attr("content"));
                    // const prdQuantity = SalesforceInteractions.cashDom(".total").contents().filter(function(){return this.nodeType === 3}).text().replace(/[^\d]/g, '');
                    // console.log("2")
                    // console.log(prdNo,prdName,onePrice(),prdQuantity)
                    // sessionStorage.setItem("recentCartItemName", prdName);
                    // sessionStorage.setItem("recentCartItemNo", prdNo);
                    // console.log("lineitem전")
                    // let lineItem = {
                    //     catalogObjectId: prdNo,
                    //     catalogObjectType: "Product",
                    //     quantity: prdQuantity,
                    //     price: onePrice,
                    // }
                    // console.log(lineItem)

                    // console.log("sendevent 전")
                    // SalesforceInteractions.sendEvent({
                    //     interaction: {
                    //         name: SalesforceInteractions.CartInteractionName.AddToCart,
                    //         lineItem: lineItem,
                    //     },
                    //     user: {
                    //         attributes: {
                    //             recentCartItemName: sessionStorage.getItem("recentCartItemName"),
                    //             recentCartItemNo: sessionStorage.getItem("recentCartItemNo"),
                    //         }
                    //     }
                    // })
                    // }),
                ],
            },
            pageTypes: [
                {
                    name: "chosunHnB_mainPage",
                    isMatch: () => {
                        if (
                            window.location.href === "https://chosunhnb.com/" ||
                            window.location.href === "https://www.chosunhnb.com/" ||
                            window.location.href === "https://m.chosunhnb.com/"
                        ) {
                            return true;
                        }
                    },
                    interaction: {
                        name: "chosunHnB_mainPage",
                    },
                },
                {
                    name: "chosunHnB_prdDetail",
                    isMatch: () =>
                        new Promise((resolve, reject) => {
                            let isMatchPDP = setTimeout(() => {
                                resolve(false);
                            }, 500);
                            return SalesforceInteractions.DisplayUtils.pageElementLoaded("#prdDetail", "html").then(() => {
                                clearTimeout(isMatchPDP);
                                resolve(true);
                            });
                        }),
                    interaction: {
                        name: SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject,
                        catalogObject: {
                            type: "Product",
                            id: () => SalesforceInteractions.cashDom("meta[property='product:productId']").attr("content"),
                            attributes: {
                                name: SalesforceInteractions.resolvers.fromSelector("div.name"),
                                url: SalesforceInteractions.resolvers.fromHref(),
                                imageUrl: SalesforceInteractions.resolvers.fromSelectorAttribute(".prdImgView img", "src", (url) => {
                                    return url;
                                }),
                                price: SalesforceInteractions.resolvers.fromSelector("#span_product_price_text", (price) => parseInt(price.replace(/[^0-9]/g, ""))),
                                sku: {
                                    id: () => SalesforceInteractions.cashDom("meta[property='product:productId']").attr("content"),
                                },
                            },
                            relatedCatalogObjects: {
                                Category: SalesforceInteractions.DisplayUtils.pageElementLoaded("#contents .mall_width:nth-child(2)", "html").then(() => {
                                    if (window.location.host === "m.chosunhnb.com") {
                                        // 일반적인 카테고리를 가진 상품일 때
                                        const cateList = ["디지털/가전", "전체상품", "식품", "스포츠/레저", "농협식품", "생활용품", "화장품/미용", "패션잡화", "NEW"];
                                        const cateKeyword = SalesforceInteractions.cashDom("meta[name='keywords']").attr("content");
                                        // 공백제거
                                        const keywordArray = cateKeyword.split(",").map((keyword) => keyword.trim());
                                        const lastKeyword = keywordArray[keywordArray.length - 1];
                                        if (cateList.includes(lastKeyword)) {
                                            return [`홈|${lastKeyword}`];
                                        }
                                        // 기획전 같이 특별 카테고리를 가진 상품일 때
                                        else {
                                            return [`홈|기획전|${lastKeyword}`];
                                        }
                                    } else {
                                        const prdCategory = SalesforceInteractions.cashDom("#contents .mall_width:nth-child(2) ol li:not(.displaynone)");
                                        if (prdCategory.length === 3 && prdCategory.eq(2).text() !== "") {
                                            return [prdCategory.eq(0).text() + "|" + prdCategory.eq(1).text() + "|" + prdCategory.eq(2).text()];
                                        } else if (prdCategory.length === 3 && prdCategory.eq(2).text() === "") {
                                            return [prdCategory.eq(0).text() + "|" + prdCategory.eq(1).text()];
                                        } else if (prdCategory.length === 2 && prdCategory.eq(1).text() !== "") {
                                            return [prdCategory.eq(0).text() + "|" + prdCategory.eq(1).text()];
                                        } else if (prdCategory.length === 2 && prdCategory.eq(1).text() === "") {
                                            return [prdCategory.eq(0).text() + "|" + prdCategory.eq(1).text()];
                                        } else if (prdCategory.length === 1 && prdCategory.eq(0).text() !== "") {
                                            return [prdCategory.eq(0).text()];
                                        }
                                    }
                                }),
                            },
                        },
                    },
                    listeners: [
                        // Wish
                        // SalesforceInteractions.listener("click", ".ec-base-button > .btnNormal:nth-child(4)", (ele) => {
                        //     if (sessionStorage.getItem("log_cH") === "true") {
                        //         // const btnWish = SalesforceInteractions.cashDom(".infoArea");
                        //         const prdName = SalesforceInteractions.cashDom(".item_name .name span").text();
                        //         const prdNo = SalesforceInteractions.cashDom("meta[property='product:productId']").attr("content");
                        //         sessionStorage.setItem("recentWishItemName", prdName);
                        //         sessionStorage.setItem("recentWishItemNo", prdNo);
                        //         SalesforceInteractions.sendEvent({
                        //             interaction: {
                        //                 name: SalesforceInteractions.CatalogObjectInteractionName.FavoriteCatalogObject,
                        //                 catalogObject: {
                        //                     type: "Product",
                        //                     id: prdNo,
                        //                 },
                        //                 user: {
                        //                     attributes: {
                        //                         recentWishItemName: sessionStorage.getItem("recentWishItemName"),
                        //                         recentWishItemNo: sessionStorage.getItem("recentWishItemNo"),
                        //                     },
                        //                 },
                        //             },
                        //         });
                        //     }
                        // }),
                        // Cart - mobile
                        SalesforceInteractions.listener("click", "#actionCart", (ele) => {
                            console.log("장바구니-mobile");
                            const btnCart = SalesforceInteractions.cashDom(ele.target);
                            const totalPrice = parseInt(SalesforceInteractions.cashDom("#totalPrice span.total strong.price").text().replace(/[^\d]/g, ""));
                            const prdName = SalesforceInteractions.cashDom(".name_area .name").text();
                            const prdNo = SalesforceInteractions.cashDom("meta[property='product:productId']").attr("content");
                            const onePrice = parseInt(SalesforceInteractions.cashDom("meta[property='product:price:amount']").attr("content"));
                            const prdQuantity = parseInt(totalPrice / onePrice);
                            if (prdQuantity !== 0) {
                                let lineItem = {
                                    catalogObjectType: "Product",
                                    catalogObjectId: prdNo,
                                    price: onePrice,
                                    quantity: prdQuantity,
                                };
                                console.log(lineItem);
                                sessionStorage.setItem("recentCartItemName", prdName);
                                sessionStorage.setItem("recentCartItemNo", prdNo);
                                SalesforceInteractions.sendEvent({
                                    interaction: {
                                        name: SalesforceInteractions.CartInteractionName.AddToCart,
                                        lineItem: lineItem,
                                    },
                                    // user: {
                                    //     attributes: {
                                    //         recentCartItemName: sessionStorage.getItem("recentCartItemName"),
                                    //         recentCartItemNo: sessionStorage.getItem("recentCartItemNo"),
                                    //     },
                                    // },
                                });
                            }
                        }),
                        // Cart - PC
                        SalesforceInteractions.listener("click", ".ec-base-button > .sizeL.btnNormal:nth-child(2)", (ele) => {
                            console.log("장바구니-pc");
                            const btnCart = SalesforceInteractions.cashDom(ele.target);
                            const totalPrice = parseInt(SalesforceInteractions.cashDom("#totalPrice span.total strong em").text().replace(/[^\d]/g, ""));
                            const prdName = SalesforceInteractions.cashDom(".item_name .name span").text();
                            const prdNo = SalesforceInteractions.cashDom("meta[property='product:productId']").attr("content");
                            const onePrice = parseInt(SalesforceInteractions.cashDom("meta[property='product:price:amount']").attr("content"));
                            const prdQuantity = parseInt(totalPrice / onePrice);
                            if (prdQuantity !== 0) {
                                let lineItem = {
                                    catalogObjectType: "Product",
                                    catalogObjectId: prdNo,
                                    price: onePrice,
                                    quantity: prdQuantity,
                                };
                                console.log(lineItem);
                                sessionStorage.setItem("recentCartItemName", prdName);
                                sessionStorage.setItem("recentCartItemNo", prdNo);
                                SalesforceInteractions.sendEvent({
                                    interaction: {
                                        name: SalesforceInteractions.CartInteractionName.AddToCart,
                                        lineItem: lineItem,
                                    },
                                    // user: {
                                    //     attributes: {
                                    //         recentCartItemName: sessionStorage.getItem("recentCartItemName"),
                                    //         recentCartItemNo: sessionStorage.getItem("recentCartItemNo"),
                                    //     },
                                    // },
                                });
                            }
                        }),
                    ],
                    contentZones: [
                        { name: "[S11] recommendation_banner & first_purchase_banner", selector: "div#wrap" },
                        // { name: "[S11] first_purchase_banner", selector: "" },
                        // { name: "[S11] recommendation_banner", selector: "" },

                    ],
                },
                {
                    name: "chosunHnB_categoryPage",
                    isMatch: () =>
                        new Promise((resolve, reject) => {
                            let isMatchPDP = setTimeout(() => {
                                resolve(false);
                            }, 500);
                            return SalesforceInteractions.DisplayUtils.pageElementLoaded(".ec-base-product", "html").then(() => {
                                clearTimeout(isMatchPDP);
                                resolve(true);
                            });
                        }),
                    interaction: {
                        name: SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject,
                        catalogObject: {
                            type: "Category",
                            //     // id: SalesforceInteractions.DisplayUtils.pageElementLoaded("#contents .xans-element-.path > .mall_width > ol li:not(.displaynone)", "html").then(() => {
                            //     //     return SalesforceInteractions.resolvers.buildCategoryId(
                            //     //         "#contents .xans-element-.path > .mall_width > ol li:not(.displaynone)",
                            //     //         null,
                            //     //         null,
                            //     //         (categoryId) => categoryId
                            //     //     );
                            //     // }),
                            id: SalesforceInteractions.DisplayUtils.pageElementLoaded("#contents", "html").then(() => {
                                if (window.location.host === "m.chosunhnb.com") {
                                    const cateKeyword = SalesforceInteractions.cashDom("meta[name='keywords']").attr("content");
                                    // 공백제거
                                    const keywordArray = cateKeyword.split(",").map((keyword) => keyword.trim());
                                    const lastKeyword = keywordArray[keywordArray.length - 1];
                                    return `홈|${lastKeyword}`;
                                } else {
                                    return SalesforceInteractions.resolvers.buildCategoryId(
                                        "#contents .xans-element-.path > .mall_width > ol li:not(.displaynone)",
                                        null,
                                        null,
                                        (categoryId) => categoryId
                                    );
                                }
                            }),
                        },
                    },
                },
                {
                    name: "chosunHnB_searchPage",
                    isMatch: () =>
                        new Promise((resolve, reject) => {
                            let isMatchPDP = setTimeout(() => {
                                resolve(false);
                            }, 50);
                            return SalesforceInteractions.DisplayUtils.pageElementLoaded("#searchForm", "html").then(() => {
                                clearTimeout(isMatchPDP);
                                resolve(true);
                            });
                        }),
                    interaction: {
                        name: "chosunHnB_searchPage",
                    },
                },
                {
                    name: "chosunHnB_loginPage",
                    isMatch: () =>
                        new Promise((resolve, reject) => {
                            let isMatchPDP = setTimeout(() => {
                                resolve(false);
                            }, 50);
                            return SalesforceInteractions.DisplayUtils.pageElementLoaded(".login_tabs", "html").then(() => {
                                clearTimeout(isMatchPDP);
                                resolve(true);
                            });
                        }),
                    interaction: {
                        name: "chosunHnB_loginPage",
                    },
                },
                {
                    name: "chosunHnB_joinMembershipPage",
                    isMatch: () =>
                        new Promise((resolve, reject) => {
                            let isMatchPDP = setTimeout(() => {
                                resolve(false);
                            }, 50);
                            return SalesforceInteractions.DisplayUtils.pageElementLoaded("#joinForm", "html").then(() => {
                                clearTimeout(isMatchPDP);
                                resolve(true);
                            });
                        }),
                    interaction: {
                        name: "chosunHnB_joinMembershipPage",
                    },
                },
                {
                    name: "chosunHnB_cartPage",
                    isMatch: () =>
                        new Promise((resolve, reject) => {
                            let isMatchPDP = setTimeout(() => {
                                resolve(false);
                            }, 500);
                            return SalesforceInteractions.DisplayUtils.pageElementLoaded(".xans-order-basketpackage", "html").then(() => {
                                clearTimeout(isMatchPDP);
                                resolve(true);
                            });
                        }),
                    interaction: {
                        name: SalesforceInteractions.CartInteractionName.ReplaceCart,
                        lineItems: SalesforceInteractions.DisplayUtils.pageElementLoaded(".xans-order-basketpackage", "html").then((ele) => {
                            let cartLineItems = [];
                            console.log(SalesforceInteractions.cashDom("div[id*='product_price_div']"));
                            SalesforceInteractions.cashDom(ele)
                                .find("table.xans-element-.xans-order.xans-record- > tbody.xans-order-list > tr.xans-record-")
                                .each((index, element) => {
                                    let itemQuantity = parseInt(SalesforceInteractions.cashDom(element).find("td span.ec-base-qty > input").val());
                                    let divNo = parseInt(
                                        SalesforceInteractions.cashDom(element)
                                            .find("div[id*='product_price_div']")
                                            .attr("id")
                                            .replace(/[^0-9]/g, "")
                                    );

                                    // if (index === 0) {
                                    //     console.log(element);
                                    //     const priceValue = parseInt(
                                    //         SalesforceInteractions.cashDom(element)
                                    //             .find("td.right div:nth-child(1) strong")
                                    //             .text()
                                    //             .replace(/[^0-9]/g, "")
                                    //     );
                                    //     console.log(priceValue);
                                    // }

                                    console.log(index);
                                    if (itemQuantity && itemQuantity > 0) {
                                        let lineItem = {
                                            catalogObjectType: "Product",
                                            catalogObjectId: SalesforceInteractions.cashDom(element)
                                                .find("td:nth-child(6) span.txtInfo input[name='product_mileage_all']")
                                                .attr("id")
                                                .split("_")[3],
                                            // price: parseInt(SalesforceInteractions.cashDom(element).find("td.right div:nth-child(1)").text().replace(/[^0-9]/g, "")),
                                            price: Number(
                                                SalesforceInteractions.cashDom(element)
                                                    .find(`#product_price_div${divNo} strong`)
                                                    .text()
                                                    .replaceAll(/[^0-9\.]+/g, "")
                                            ),
                                            // price: parseInt(SalesforceInteractions.cashDom(element).find("strong span").text().replaceAll(",", "")),
                                            quantity: itemQuantity,
                                        };
                                        console.log(lineItem);
                                        cartLineItems.push(lineItem);
                                    }
                                });
                            console.log(cartLineItems);
                            return cartLineItems;
                        }),
                    },
                },
                {
                    name: "chosunHnB_orderPage",
                    isMatch: () =>
                        new Promise((resolve, reject) => {
                            let isMatchPDP = setTimeout(() => {
                                resolve(false);
                            }, 50);
                            return SalesforceInteractions.DisplayUtils.pageElementLoaded("#frm_order_act", "html").then(() => {
                                clearTimeout(isMatchPDP);
                                resolve(true);
                            });
                        }),
                    interaction: {
                        name: "chosunHnB_orderPage",
                    },
                    listeners: [
                        SalesforceInteractions.listener("click", "#btn_payment", (ele) => {
                            if (window.location.host === "m.chosunhnb.com") {
                                const orderSheet = SalesforceInteractions.cashDom("#ec-jigsaw-area-orderProduct");
                                sessionStorage.removeItem("orderItems");
                                let orderItems = [];
                                orderSheet.find("div.xans-record-").each((index, element) => {
                                    let listNo = parseInt(
                                        SalesforceInteractions.cashDom(element)
                                            .find("input[id*='chk_order_cancel_list']")
                                            .attr("id")
                                            .replace(/[^0-9]/g, "")
                                    );
                                    console.log(listNo);
                                    const itemQuantity = parseInt(
                                        SalesforceInteractions.cashDom(element)
                                            .find("ul.info > li:nth-child(4)")
                                            .text()
                                            .replace(/[^0-9]/g, "")
                                    );
                                    if (itemQuantity && itemQuantity > 0) {
                                        const lineItem = {
                                            catalogObjectType: "Product",
                                            catalogObjectId: SalesforceInteractions.cashDom(element)
                                                .find(`input[id*='chk_order_cancel_list${listNo}']`)
                                                .attr("value")
                                                .split(":")[0]
                                                .replaceAll(/[^0-9\.]+/g, ""),
                                            price: parseInt(
                                                SalesforceInteractions.cashDom(element)
                                                    // .find(`input[id*='chk_order_cancel_list${listNo}']`)
                                                    // .closest(".prdBox")
                                                    .find(".proPrice span.display:nth-child(3) > span:nth-child(1)")
                                                    .text()
                                                    .replaceAll(/[^0-9\.]+/g, "")
                                            ),
                                            quantity: itemQuantity,
                                        };
                                        console.log(lineItem);
                                        orderItems.push(lineItem);
                                    }
                                });
                                sessionStorage.setItem("orderItems", JSON.stringify(orderItems));
                            } else {
                                if (SalesforceInteractions.cashDom("#chk_purchase_agreement0").is(":checked")) {
                                    // const payBtn = SalesforceInteractions.cashDom(ele.target);
                                    const orderSheet = SalesforceInteractions.cashDom(".xans-order-form > .orderListArea ");
                                    sessionStorage.removeItem("orderItems");
                                    let orderItems = [];
                                    orderSheet.find("tr.xans-record-").each((index, element) => {
                                        let listNo = parseInt(
                                            SalesforceInteractions.cashDom(element)
                                                .find("input[id*='chk_order_cancel_list']")
                                                .attr("id")
                                                .replace(/[^0-9]/g, "")
                                        );
                                        console.log(listNo);
                                        const itemQuantity = parseInt(SalesforceInteractions.cashDom(element).find("td:nth-child(5)").text());
                                        if (itemQuantity && itemQuantity > 0) {
                                            const lineItem = {
                                                catalogObjectType: "Product",
                                                catalogObjectId: SalesforceInteractions.cashDom(element)
                                                    .find(`td:nth-child(1) > input[id*="chk_order_cancel_list${listNo}"]`)
                                                    .val()
                                                    .split(":")[0]
                                                    .replaceAll(/[^0-9\.]+/g, ""),
                                                price: parseInt(
                                                    SalesforceInteractions.cashDom(element)
                                                        .find(`#product_price_div${listNo} strong`)
                                                        .text()
                                                        .replaceAll(/[^0-9\.]+/g, "")
                                                ),
                                                quantity: itemQuantity,
                                            };
                                            console.log(lineItem);
                                            orderItems.push(lineItem);
                                        }
                                    });
                                    sessionStorage.setItem("orderItems", JSON.stringify(orderItems));
                                    if (sessionStorage.getItem("log_cH") === "true") {
                                        SalesforceInteractions.sendEvent({
                                            interaction: {
                                                name: "chosunHnB_Member Purchase Attempts",
                                            },
                                        });
                                    } else if (sessionStorage.getItem("log_cH") === "false") {
                                        SalesforceInteractions.sendEvent({
                                            interaction: {
                                                name: "chosunHnB_Guest Purchase Attempts",
                                            },
                                        });
                                    }
                                }
                            }
                        }),
                    ],
                },
                {
                    name: "chosunHnB_orderCompletePage",
                    isMatch: () => {
                        if (window.location.search.includes("order_id") === true) {
                            return true;
                        }
                    },
                    interaction: {
                        name: SalesforceInteractions.OrderInteractionName.Purchase,
                        order: {
                            id: SalesforceInteractions.mcis.getParameterByName("order_id"),
                            lineItems: SalesforceInteractions.DisplayUtils.pageElementLoaded("#frm_order_result", "html").then((ele) => {
                                console.log(SalesforceInteractions.mcis.getParameterByName("order_id"));
                                console.log(ele);
                                let purchaseLineItems = [];
                                purchaseLineItems = JSON.parse(sessionStorage.getItem("orderItems"));
                                console.log(purchaseLineItems);
                                return purchaseLineItems;
                            }),
                        },
                    },
                },
                {
                    name: "chosunHnB_noticePage",
                    isMatch: () => {
                        if (SalesforceInteractions.cashDom(".mall_width .path ol li:nth-child(2) strong").text() === "공지사항") {
                            return true;
                        }
                    },
                    interaction: {
                        name: "chosunHnB_noticePage",
                    },
                },
                {
                    name: "chosunHnB_photoReviewPage",
                    isMatch: () => {
                        if (SalesforceInteractions.cashDom(".titleArea").last().find("h2").text() === "상품 사용후기") {
                            return true;
                        }
                    },
                    interaction: {
                        name: "chosunHnB_photoReviewPage",
                    },
                },
                {
                    name: "chosunHnB_productQnAPage",
                    isMatch: () => {
                        if (SalesforceInteractions.cashDom(".mall_width .path ol li:nth-child(2) strong").text() === "상품 Q&A") {
                            return true;
                        }
                    },
                    interaction: {
                        name: "chosunHnB_productQnAPage",
                    },
                },
                {
                    name: "chosunHnB_eventPage",
                    isMatch: () => {
                        if (SalesforceInteractions.cashDom(".mall_width .path ol li:nth-child(2) strong").text() === "이벤트") {
                            return true;
                        }
                    },
                    interaction: {
                        name: "chosunHnB_eventPage",
                    },
                },
                {
                    name: "chosunHnB_catalogPage",
                    isMatch: () => {
                        if (SalesforceInteractions.cashDom(".mall_width .path ol li:nth-child(2) strong").text() === "카달로그") {
                            return true;
                        }
                    },
                    interaction: {
                        name: "chosunHnB_catalogPage",
                    },
                },
                {
                    name: "chosunHnB_customerServicePage",
                    isMatch: () => {
                        if (SalesforceInteractions.cashDom(".mall_width > .titleArea > h2").text() === "고객센터") {
                            return true;
                        }
                    },
                    interaction: {
                        name: "chosunHnB_customerServicePage",
                    },
                },
                {
                    name: "chosunHnB_memberEditPage",
                    isMatch: () =>
                        new Promise((resolve, reject) => {
                            let isMatchPDP = setTimeout(() => {
                                resolve(false);
                            }, 50);
                            return SalesforceInteractions.DisplayUtils.pageElementLoaded("#editForm", "html").then(() => {
                                clearTimeout(isMatchPDP);
                                resolve(true);
                            });
                        }),
                    interaction: {
                        name: "chosunHnB_memberEditPage",
                    },
                },
                {
                    name: "chosunHnB_orderInquiryPage",
                    isMatch: () =>
                        new Promise((resolve, reject) => {
                            let isMatchPDP = setTimeout(() => {
                                resolve(false);
                            }, 50);
                            return SalesforceInteractions.DisplayUtils.pageElementLoaded("#OrderHistoryForm", "html").then(() => {
                                clearTimeout(isMatchPDP);
                                resolve(true);
                            });
                        }),
                    interaction: {
                        name: "chosunHnB_orderInquiryPage",
                    },
                },
                {
                    name: "chosunHnB_wishListPage",
                    isMatch: () => {
                        if (
                            window.location.href === "https://chosunhnb.com/myshop/wish_list.html" ||
                            window.location.href === "https://www.chosunhnb.com/myshop/wish_list.html" ||
                            window.location.href === "https://m.chosunhnb.com/myshop/wish_list.html"
                        ) {
                            return true;
                        }
                    },
                    interaction: {
                        name: "chosunHnB_wishListPage",
                    },
                },
                {
                    name: "chosunHnB_mileagePage",
                    isMatch: () =>
                        new Promise((resolve, reject) => {
                            let isMatchPDP = setTimeout(() => {
                                resolve(false);
                            }, 50);
                            return SalesforceInteractions.DisplayUtils.pageElementLoaded(".xans-myshop-mileagehistorypackage", "html").then(() => {
                                clearTimeout(isMatchPDP);
                                resolve(true);
                            });
                        }),
                    interaction: {
                        name: "chosunHnB_mileagePage",
                    },
                },
                {
                    name: "chosunHnB_couponPage",
                    isMatch: () =>
                        new Promise((resolve, reject) => {
                            let isMatchPDP = setTimeout(() => {
                                resolve(false);
                            }, 50);
                            return SalesforceInteractions.DisplayUtils.pageElementLoaded("#frmCouponlist", "html").then(() => {
                                clearTimeout(isMatchPDP);
                                resolve(true);
                            });
                        }),
                    interaction: {
                        name: "chosunHnB_couponPage",
                    },
                },
                {
                    name: "chosunHnB_enquirePage",
                    isMatch: () => {
                        if (SalesforceInteractions.cashDom(".titleArea > .mall_width > h2").text() === "1:1 맞춤상담") {
                            return true;
                        }
                    },
                    interaction: {
                        name: "chosunHnB_enquirePage",
                    },
                },
                {
                    name: "chosunHnB_myPostPage",
                    isMatch: () =>
                        new Promise((resolve, reject) => {
                            let isMatchPDP = setTimeout(() => {
                                resolve(false);
                            }, 50);
                            return SalesforceInteractions.DisplayUtils.pageElementLoaded(".xans-myshop-boardpackage", "html").then(() => {
                                clearTimeout(isMatchPDP);
                                resolve(true);
                            });
                        }),
                    interaction: {
                        name: "chosunHnB_myPostPage",
                    },
                },

                {
                    name: "chosunHnB_basketOption",
                    isMatch: () => {
                        if (
                            window.location.href.includes("https://chosunhnb.com/product/basket_option.html") ||
                            window.location.href.includes("https://www.chosunhnb.com/product/basket_option.html") ||
                            window.location.href.includes("https://m.chosunhnb.com/product/basket_option.html")
                        ) {
                            return true;
                        }
                    },
                    interaction: {
                        name: "chosunHnB_basketOption",
                    },
                    // listeners: [
                    //     SalesforceInteractions.listener("click", ".btnNormalFix", (ele) => {
                    //         console.log(`ele = ${ele}`)
                    //         SalesforceInteractions.sendEvent({
                    //             interaction: {
                    //                 name:"iframe이벤트"
                    //             }
                    //         })
                    //         // if (SalesforceInteractions.cashDom(ele.target).closest(".button.center").find(".option.displaynone").length === 0){
                    //         //     console.log("버튼3개")
                    //         //     let iframeInCart;
                    //         //     let iframePrdtotalPrice;
                    //         //     const onePrice = parseInt(SalesforceInteractions.cashDom(ele.target).closest(".item_inner").find(".prd_price > span:nth-child(2)").text().replace(/[^\d]/g, ''))
                    //         //     // console.log(prdPrice)
                    //         //     // const btnCart = document.querySelectorAll(".ec-admin-icon.cart");
                    //         //     // btnCart.forEach((item) => {
                    //         //         // item.addEventListener("click", () => {
                    //         //             // setTimeout(() => {
                    //         //             //     const iframeTag = document.querySelector("#capp-shop-new-product-optionselect-layer > iframe");
                    //         //             //     console.log(iframeTag.contentWindow.document.body.querySelector(".ec-base-button .btnNormalFix.sizeS"));
                    //         //             //     iframeInCart = iframeTag.contentWindow.document.body.querySelector(".ec-base-button .btnNormalFix.sizeS");
                    //         //             //     // console.log(iframeTag.contentWindow.document.body.querySelector(".content > .inner > .name"));
                    //         //             //     // iframeInCart = iframeTag.contentWindow.document.body.querySelector(".content > .inner > .name");
                    //         //             //     console.log(iframeInCart, "iframeCart");
                    //         //             //     console.log("작동1")
                    //         //             //     iframeInCart.addEventListener("click", () => {
                    //         //             //         iframePrdtotalPrice = iframeTag.contentWindow.document.body.querySelector("#totalPrice .total strong em").textContent;
                    //         //             //         console.log("작동2")
                    //         //             //         if(iframePrdtotalPrice !== "0" && iframePrdtotalPrice !== "0원"){
                    //         //             //             console.log("작동3")
                    //         //             //             const prdNo = iframeTag.contentWindow.document.body.querySelector("select").getAttribute("option_product_no");
                    //         //             //             const prdName = iframeTag.contentWindow.document.body.querySelector("h2.name").textContent;
                    //         //             //             const quantity = Number(iframeTag.contentWindow.document.body.querySelector("#totalPrice .total").textContent.match(/\(\d+개\)/)[0].match(/\d+/)[0]);
                    //         //             //             sessionStorage.setItem("recentCartItemName", prdName);
                    //         //             //             sessionStorage.setItem("recentCartItemNo", prdNo);
                    //         //             //             let lineItem = {
                    //         //             //                 catalogObjectId: prdNo,
                    //         //             //                 catalogObjectType: "Product",
                    //         //             //                 quantity: quantity,
                    //         //             //                 price: onePrice,
                    //         //             //             }
                    //         //             //             console.log(lineItem)
                    //         //             //             console.log("작동4")
                    //         //             //             SalesforceInteractions.sendEvent({
                    //         //             //                 interaction: {
                    //         //             //                     name: SalesforceInteractions.CatalogObjectInteractionName.AddToCart,
                    //         //             //                     lineItem: lineItem,
                    //         //             //                 },
                    //         //             //                 user: {
                    //         //             //                     attributes: {
                    //         //             //                         recentCartItemName: sessionStorage.getItem("recentCartItemName"),
                    //         //             //                         recentCartItemNo: sessionStorage.getItem("recentCartItemNo"),
                    //         //             //                     },
                    //         //             //                 },
                    //         //             //             });
                    //         //             //         }
                    //         //             //     });
                    //         //             // }, 1000);
                    //         //         // });
                    //         //     // });
                    //         // }
                    //     }),
                    // ]
                },
                // {
                //     name: "mcp test app",
                //     isMatch: () => {
                //         if (window.location.href === "https://milvus.co.kr/mcp_test.html") {
                //             return true;
                //         }
                //     },
                //     interaction: {
                //         name: "mcp test app",
                //     },
                //     listeners: [
                //         SalesforceInteractions.listener("click", ".contentZone", () => {
                //             SalesforceInteractions.sendEvent({
                //                 interaction: {
                //                     name: "contentZone click",
                //                 },
                //             });
                //         }),
                //     ],
                //     contentZones: [{ name: "mcp test app", selector: ".contentZone" }],
                // },
            ],
            pageTypeDefault: {
                name: "default",
                interaction: {
                    name: "default",
                },
            },
        };
        if (domain === "www.chosun.com") {
            SalesforceInteractions.initSitemap(chosunSitemapConfig);
        } else if (hnbDomains.includes(domain)) {
            SalesforceInteractions.initSitemap(chosunhnbSitemapConfig);
        }
    });
}
// let nickname;
// document.addEventListener("DOMContentLoaded", () => {
//     setTimeout(()=>{
//         nickname = SalesforceInteractions.cashDom(".nav__bar-right .box--hidden-sm").text();
//         sessionStorage.setItem("nickname", nickname);
//         console.log(nickname);
//     }, 1000);

// });
// // chosun
// const nickname = SalesforceInteractions.cashDom(".nav__bar-right .box--hidden-sm").text();
// if (nickname) {
//     sessionStorage.setItem("nickname", nickname)
// }
// 아웃링크 접속 - chosun

// const getCookie = function (name) {
//     const value = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
//     return value ? value[2] : null;
// };
// const dznoValue = getCookie("dz_no");

// const popupCartBtn = () => {
//     if(document.querySelector("iframe#capp-shop-new-product-optionselect-iframe").contentWindow.document.querySelector("#popup .btnNormalFix")){
//         // return document.querySelector("iframe#capp-shop-new-product-optionselect-iframe").contentWindow.document.querySelector("#popup .btnNormalFix");
//         // console.log(document.querySelector("iframe#capp-shop-new-product-optionselect-iframe").contentWindow.document.querySelector("#popup .btnNormalFix"))
//         return true;
//     }
// }
// popupCartBtn();

// const memberId_cH = CAFE24.SHOP.getAdminID()
// console.log(memberId_cH)
// if(memberId_cH.length > 0){
//     sessionStorage.setItem("memberId_cH", memberId_cH)
// }
// chosun_hnb에서의 memberId와 clientId
// let memberId_cH;
// let clientId_cH;
// if (window.location.host === 'chosunhnb.com') {
//     const getCookie = (name) => {
//         const cookies = document.cookie.split(";");
//         const cookie = cookies.find((cookie) => cookie.trim().startsWith(name + "="));

//         if (cookie) {
//             // 쿠키 값 디코딩
//             const decodedValue = decodeURIComponent(cookie.split("=")[1]);
//             return decodedValue;
//         }
//         // 쿠키가 없을 경우 null을 반환
//         return null;
//     };

//     // 주어진 쿠키 값을 객체로 파싱
//     const cookieValue = JSON.parse(getCookie("login_provider_1"));

//     memberId_cH = cookieValue ? cookieValue.member_id : null;
//     // memberId_cH = cookieValue.member_id;
//     sessionStorage.setItem("memberId_cH", memberId_cH);

//     clientId_cH = cookieValue ? cookieValue.client_id : null;
//     // clientId_cH = cookieValue.client_id;
//     sessionStorage.setItem("clientId_cH", clientId_cH);
// }
// console.log("세션스토리지 Id");
// console.log(sessionStorage.getItem("memberId_cH"));
// console.log(sessionStorage.getItem("clientId_cH"));

// const getLocale = () => {
//     let locale = navigator.language;
//     let splitLocale = locale.split("-");
//     let conbineLocale = `${splitLocale[0]}_${splitLocale[1]}`;
//     return conbineLocale;
// };
// const seriesTag = SalesforceInteractions.cashDom("meta[name='keywords']").attr("content").split(/,\s*뉴스레터/).filter(Boolean);

// const series = SalesforceInteractions.cashDom(".article-header__headline span").text();
// console.log(series)
// if (series.includes("왕개미연구소")){
//     sessionStorage.setItem("series", "kingAnt")
//     console.log("왕개미연구소!!")
//     SalesforceInteractions.sendEvent({
//         interaction: {
//             name: "king ant"
//         }
//     })
// }
// console.log(series)
// if(series === "왕개미연구소") {
//     console.log("왕개미연구소!!")
//     sessionStorage.setItem("series", "kingAnt")
//     SalesforceInteractions.sendEvent({
//         interaction: {
//             name: "king ant"
//         }
//     })
// } else {
//     sessionStorage.setItem("series", "normal")
// }

// 아웃링크 유입
// if (document.referrer.includes("https://www.chosun.com/") === false) {
//     console.log("아웃링크 유입")
//     SalesforceInteractions.sendEvent({
//         interaction: {
//             name: "externalInflow"
//         }
//     })
// } else if (document.referrer.includes("https://www.chosun.com/") === true) {
//     console.log("내부 유입")
//     SalesforceInteractions.sendEvent({
//         interaction: {
//             name: "externalInflow No"
//         }
//     })
// }
// const nickname = SalesforceInteractions.cashDom(".nav__bar-right .box--hidden-sm").text();
// if (nickname) {
//     sessionStorage.setItem("nickname", nickname);
// }
// console.log(nickname);
// console.log("닉네임 자리");