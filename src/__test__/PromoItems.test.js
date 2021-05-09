import React from "react";
import { render, fireEvent, act } from '@testing-library/react'
import PromoItem from "../components/PromoItems";
import Adapter from 'enzyme-adapter-react-16'
import { mount, configure } from "enzyme";

configure({ adapter: new Adapter() });

describe("Test cases for product items component", () => {
  const props = {
    item : {
      itemName: "A",
      price: 50,
      count: 0,
      discount: 0,
      total: 0,
      promotion: {
        discount: 15,
        rule: 2,
        type: "nItem"
      }
    },
    calculatePromo: jest.fn(),
    index: 1
  };
  test("should PromoItems exist", () => {
    const renderedModule = mount(<PromoItem {...props} />);
    // console.log(renderedModule.debug())
    expect(renderedModule).toBeTruthy();
  });

  test("for Increment", () => {
    const renderedModule = mount(<PromoItem {...props} />);
    const { container } = render(<PromoItem {...props} />)
    const incrementButton = container.querySelector('#increment')
    fireEvent.click(incrementButton);
    expect(renderedModule).toBeTruthy();
  });

  test("for Decrement", () => {
    const renderedModule = mount(<PromoItem {...props} />);
    const { container } = render(<PromoItem {...props} />)
    const incrementButton = container.querySelector('#decrement')
    fireEvent.click(incrementButton);
    expect(renderedModule).toBeTruthy();
  });
});
