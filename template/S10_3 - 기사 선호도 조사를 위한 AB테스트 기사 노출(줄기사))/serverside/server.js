export class InfobarWithCTATemplate implements CampaignTemplateComponent {

  @title("기사 제목")
  articleTitle: string = "제목이 들어가는 영역입니다.";

  @title("기사 URL")
  articleUrl: string = "https://chosun.com";

  @title("기사 이미지 URL")
  articleImageUrl: string = "https://images.chosun.com/resizer/FcMX1v-zHxcyqpbpwzGUZ5nCXnk=/400x300/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/sandbox.chosun/HUHZQHGJ7FH3ZLFBUCVL3VRAYI.webp";

  run(context: CampaignComponentContext) {
    return {
      attributes: context.user
    };
  }

}
