import ProductItem from '../../src/components/product/ProductItem';
import { shallow,render,mount } from 'enzyme';
import React from 'react';

// const storeMock=configureStore();




describe('Visulizar <Producto />', () => {
  test('<Producto /> se visualiza', () => {
      
      const jsxHeader = shallow(<ProductItem product={{}}/>);
      expect(jsxHeader).toMatchSnapshot();
  })

});
