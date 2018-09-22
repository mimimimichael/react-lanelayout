import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import LaneLayout from "./LaneLayout";
import ItemGenerator from "./ItemGenerator";
import ItemRenderer from "./ItemRenderer";

Enzyme.configure({ adapter: new Adapter() });

const ITEM_COUNT = 20;

const defaultProps = () => {
  return {
    items: ItemGenerator(ITEM_COUNT),
    debug: true,
    itemRenderer: ItemRenderer,
    lanes: {
      vertical: {
        0: 1,
        360: 2,
        640: 2,
        960: 3,
        1280: 4,
        1400: 5,
        1720: 6,
        2040: 7,
        2360: 8
      },
      horizontal: {
        0: 1,
        320: 2,
        480: 3,
        640: 4
      }
    }
  };
};

describe("<LaneLayout />", () => {
  const masonry = mount(<LaneLayout {...defaultProps()} />);
  it("still has no tests.", () => {
    expect(true).toBe(true);
  });
});
