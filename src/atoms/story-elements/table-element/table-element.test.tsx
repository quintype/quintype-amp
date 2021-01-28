import React from "react";
import { shallow, mount } from "enzyme";
import { TableElement, TableElementBase } from "./table-element";
import { config, textStory } from "../../../__fixtures__";
import { Theme } from "../../../context/theme";
import { getTokensFromAMPConfig } from "../../../utils/theme";
import { CsvTable } from "./csv-table";

const sampleTableBase = {
  description: "",
  "page-url": "/story/9bddaf0a-40e1-4719-af26-4485802bb1a7/element/ffe5c576-53e5-4451-a0ae-6a817158f995",
  type: "data",
  "family-id": "d3fb204f-e4a1-435c-b8dd-c600c99d773a",
  title: "",
  id: "ffe5c576-53e5-4451-a0ae-6a817158f995",
  subtype: "table"
};
const sampleTableElement = {
  ...sampleTableBase,
  data: {
    content:
      'Recharge Plan,FRC Amount in Rs,Free Usage *,Freebies Validity,Plan Validity in Days\r\nPer Second 108,108,Unlimited calls to any network + 1GB/day + 500 SMS,28 days,60\r\nPatanjali SIM (Only for Members),144 / 792 /1584,unlimited calls + 2GB/day + 100 sms/day,30 / 180 /365 days,30 / 180 /365\r\n153 Plan,153,Unlimited calls +1GB/day + 100 SMS/day + Free PRBT,28 days,180\r\n186 Plan,186,Unlimited Free Calls + 2GB/day + 100 SMS/day,28 days,180\r\n365 Plan,365,Unlimited calls + 2GB/day + 100 SMS/day +Free PRBT + Lodhun Contest,60days,365\r\nDigital India,429,Free calls + 1GB/day data & 100 SMS/day,81days,180\r\n485 Plan,485,Free Calls + 1.5GB/day + 100 SMS/day1,90 days,180\r\nSixer,666,Free calls + 1.5GB/day + 100 free SMS for 134 days,134days,180\r\nPlan 699,699,"Free Voice calls\n 0.5GB/day\n 100SMS/day\n Free Tune for first 60days",160 days,160\r\nBSNL 997,997,Unlimited calls+ 3GB/day +100 SMS/day + Lokdhun Content + Sony Liv + Free Caller Tune,180 days,180\r\nMaha Dhamaka,"1,699",Free calls + unlimited data (2GB/day high speed) + 100 free SMS/day for 365 days,300 days,300\r\n"BSNL 1,999 \n (BSNL One Year Plan)","1,999",Unlimited calls + 3GB/day FUP + 100 SMS/day + Free Caller Tune + Lokdhun Contest,365,365\r\n"BSNL 2,399","2,399","Unlimited Voice calls every day\n 100SMS per day\n Free Tune for first 60days",600,600\r\nBSNL 110 Full Talktime Plan,110,110 mins talktime,Until talktime limit reached ,\r\nBSNL 220 Full Talktime Plan,220,220 mins talktime,Until talktime limit reached,\r\nBSNL 500 Full Talktime Plan,500,500 mins talktime,Until talktime limit reached,\r\n"BSNL 2,220 Full Talktime Plan","2,200","2,200 mins talktime",Until talktime limit reached,\r\n"BSNL 2,500 Full Talktime Plan","2,500","2,500 mins talktime",Until talktime limit reached,\r\n1 GB 3G Data Plan,,1 GB of 3G speed data ,1 Day,\r\n2 GB/per Day Combo 3G Data Plan,198,2GB per day of 3G speed data,54 Days,\r\nRs 7.47 Talktime Recharge,10,7.47 mins of talktime only,Until talktime limit reached,\r\nBSNL SMS Pack 13,13,Free 130 local and national SMS,7 Days,\r\nBSNL Rs 147 Pre-Paid Plan,147,Unlimited calls with FUP of 250 minutes and unlimited SMS,30 Days,\r\nBSNL Rs 599 WFM Plan,599,"Unlimited calls, 5 GB data",90 Days,\r\nBSNL Rs 502 Pre-Paid Plan,503,"2G/3G Data: 1 GB / Day, Local, Unlimited calls, 100 SMS / Day",90 Days,',
    "content-type": "csv"
  },
  metadata: {
    "file-name": "List of All BSNL Prepaid Plans - Sheet1-2.csv",
    "has-header": true
  }
};
const sampleTableElementWithUnknownContentType = {
  ...sampleTableBase,
  data: {
    content:
      'Recharge Plan,FRC Amount in Rs,Free Usage *,Freebies Validity,Plan Validity in Days\r\nPer Second 108,108,Unlimited calls to any network + 1GB/day + 500 SMS,28 days,60\r\nPatanjali SIM (Only for Members),144 / 792 /1584,unlimited calls + 2GB/day + 100 sms/day,30 / 180 /365 days,30 / 180 /365\r\n153 Plan,153,Unlimited calls +1GB/day + 100 SMS/day + Free PRBT,28 days,180\r\n186 Plan,186,Unlimited Free Calls + 2GB/day + 100 SMS/day,28 days,180\r\n365 Plan,365,Unlimited calls + 2GB/day + 100 SMS/day +Free PRBT + Lodhun Contest,60days,365\r\nDigital India,429,Free calls + 1GB/day data & 100 SMS/day,81days,180\r\n485 Plan,485,Free Calls + 1.5GB/day + 100 SMS/day1,90 days,180\r\nSixer,666,Free calls + 1.5GB/day + 100 free SMS for 134 days,134days,180\r\nPlan 699,699,"Free Voice calls\n 0.5GB/day\n 100SMS/day\n Free Tune for first 60days",160 days,160\r\nBSNL 997,997,Unlimited calls+ 3GB/day +100 SMS/day + Lokdhun Content + Sony Liv + Free Caller Tune,180 days,180\r\nMaha Dhamaka,"1,699",Free calls + unlimited data (2GB/day high speed) + 100 free SMS/day for 365 days,300 days,300\r\n"BSNL 1,999 \n (BSNL One Year Plan)","1,999",Unlimited calls + 3GB/day FUP + 100 SMS/day + Free Caller Tune + Lokdhun Contest,365,365\r\n"BSNL 2,399","2,399","Unlimited Voice calls every day\n 100SMS per day\n Free Tune for first 60days",600,600\r\nBSNL 110 Full Talktime Plan,110,110 mins talktime,Until talktime limit reached ,\r\nBSNL 220 Full Talktime Plan,220,220 mins talktime,Until talktime limit reached,\r\nBSNL 500 Full Talktime Plan,500,500 mins talktime,Until talktime limit reached,\r\n"BSNL 2,220 Full Talktime Plan","2,200","2,200 mins talktime",Until talktime limit reached,\r\n"BSNL 2,500 Full Talktime Plan","2,500","2,500 mins talktime",Until talktime limit reached,\r\n1 GB 3G Data Plan,,1 GB of 3G speed data ,1 Day,\r\n2 GB/per Day Combo 3G Data Plan,198,2GB per day of 3G speed data,54 Days,\r\nRs 7.47 Talktime Recharge,10,7.47 mins of talktime only,Until talktime limit reached,\r\nBSNL SMS Pack 13,13,Free 130 local and national SMS,7 Days,\r\nBSNL Rs 147 Pre-Paid Plan,147,Unlimited calls with FUP of 250 minutes and unlimited SMS,30 Days,\r\nBSNL Rs 599 WFM Plan,599,"Unlimited calls, 5 GB data",90 Days,\r\nBSNL Rs 502 Pre-Paid Plan,503,"2G/3G Data: 1 GB / Day, Local, Unlimited calls, 100 SMS / Day",90 Days,',
    "content-type": "someUnknownType"
  }
};

describe("Table Element", () => {
  it("should render table when present", () => {
    const tokens = getTokensFromAMPConfig(config.ampConfig);
    const wrapper = mount(
      <Theme tokens={tokens}>
        <TableElement element={sampleTableElement} />
      </Theme>
    );
    expect(wrapper.find(CsvTable).length).toBe(1);
  });
  it("should call tableElementRender prop when passed to opts", () => {
    const tableElementRender = jest.fn();
    const modifiedConfig = { ...config, opts: { render: { storyElementRender: { tableElementRender } } } };
    const wrapper = shallow(
      <TableElementBase element={sampleTableElement} story={textStory} config={modifiedConfig} />
    );
    expect(tableElementRender.mock.calls.length).toBe(1);
    expect(wrapper.find("table").length).toBe(0);
  });
  it("shouldn't render table element when tableContentType is content-type is unknown", () => {
    const wrapper = shallow(
      <TableElementBase element={sampleTableElementWithUnknownContentType} story={textStory} config={config} />
    );
    expect(wrapper.isEmptyRender()).toBe(true);
  });
});
