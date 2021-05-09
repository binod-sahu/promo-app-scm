import React from "react";
import { render, fireEvent, act } from '@testing-library/react'
import PromoTable from "../components/PromoTable";
import renderer from 'react-test-renderer';

describe("snapshot", () => {
  const props = {
    itemName: "A",
    price: 50,
    count: 0,
    discount: 0,
    total: 0,
    promoEngine: jest.fn()
  };
  test("should render snapshot", () => {
    const renderedModule = renderer.create(<PromoTable />).toJSON();;
    expect(renderedModule).toMatchSnapshot();
  });

  test("should render snapshot1 with props", () => {
    const renderedModule = renderer.create(<PromoTable {...props} />).toJSON();;
    expect(renderedModule).toMatchSnapshot();
  });
});
