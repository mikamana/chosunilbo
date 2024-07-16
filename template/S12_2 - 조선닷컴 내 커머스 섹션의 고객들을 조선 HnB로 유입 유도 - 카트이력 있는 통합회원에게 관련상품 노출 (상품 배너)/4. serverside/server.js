export class SlideInTriggerOptions {
  name: string;
  label: string;
}

export class StyleField {
  label: string;
  className: string;
}

export class InfobarWithCTATemplate implements CampaignTemplateComponent {
  @options([
    {
      name: "timeOnPage",
      label: "Time on Page (Delay)"
    },
  ])
  triggerOptions: SlideInTriggerOptions = { name: "scrollDepth", label: "Scroll Depth" };

  @shownIf(this, self => self.triggerOptions.name === "timeOnPage")
  @title(" ")
  @subtitle("Second(s) on page")
  secondsOnPage: number = 0;
  run(context: CampaignComponentContext) {
    return {
      attributes: context.user.attributes,
      triggerOptionsNumber: this.secondsOnPage * 1000,
    };
  }
}
