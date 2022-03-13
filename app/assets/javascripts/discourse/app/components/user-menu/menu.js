import GlimmerComponent from "discourse/components/glimmer";

export default class UserMenu extends GlimmerComponent {
  // constructor() {
  //   super(...arguments);
  // }

  get topTabs() {
    return this._coreTopTabs;
  }

  get _coreTopTabs() {
    return [
      {
        icon: "bell",
      },
      {
        icon: "reply",
      },
      {
        icon: "at",
      },
      {
        icon: "heart",
      },
    ];
  }
}
