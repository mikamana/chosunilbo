export class StyleField {
  label: string;
  className: string;
}

export class InfobarWithCTATemplate implements CampaignTemplateComponent {

  @title("기사 제목")
  articleTitle: string = "제목이 들어가는 영역입니다.";

  @title("기사 부제목")
  articleSubTitle: string = "부제목이 들어가는 영역입니다.";

  @title("기사 내용")
  articleContents: string = "내용이 들어가는 영역입니다.";

  @title("기사 이미지 URL")
  articleThumnail: string = "https://images.chosun.com/resizer/hQsKEeAFiTQ42sD9sM-nySCC2r0=/400x225/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/sandbox.chosun/HUHZQHGJ7FH3ZLFBUCVL3VRAYI.webp";

  @title("기사 URL")
  articleUrl: string = "https://chosun.com";

  // @title("기사 헤드라인1")
  // articleHeadline1: string = `개인화 캠페인 교육`;

  // @title("기사 헤드라인2")
  // articleHeadline2: string = `콘텐츠 샘플입니다`;

  run(context: CampaignComponentContext) {
    return {
      attributes: context.user
    };
  }

}
