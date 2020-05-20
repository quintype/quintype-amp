import { HamburgerMenuItem } from "../atoms/hamburger-menu/types";
export class FlatToTree {
  flatArr: HamburgerMenuItem[];
  hashMap: object;
  constructor(arr) {
    this.flatArr = arr;
    this.hashMap = Object.create(null);
  }
  private createHashMap() {
    this.flatArr.forEach((item) => (this.hashMap[item.id] = item["parent-id"]));
  }
  getTree() {
    this.flatArr.sort((a, b) => a.rank - b.rank);
    this.createHashMap();
    const newArr = [...this.flatArr];
    this.flatArr.forEach((item) => {
      if (item["parent-id"] !== null) {
        const parentNode = newArr.find((e) => e.id === item["parent-id"]);
        if (parentNode) {
          if (!parentNode["child-items"]) parentNode["child-items"] = [];
          parentNode["child-items"].push(item);
        }
      }
    });
    this.flatArr = [...newArr];
    return this.flatArr.filter((item) => item["parent-id"] === null);
  }
}
