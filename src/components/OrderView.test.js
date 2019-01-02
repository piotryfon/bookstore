import React from 'react';
import OrderView from './OrderView';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Order view tests', () => {
  
  it('Snapshot matches', () => {
    const book = {
      name: "Book title"
    }
    const wrapper = shallow(<OrderView book={book}/>);
    expect(wrapper).toMatchSnapshot();
  });
  it('Title of the book is displayed as in props', () => {
    const book = {
      name: "Book title"
    }
    const wrapper = shallow(<OrderView book={book}/>);
    expect(wrapper.find('.orderView').find('b').text()).toBe(book.name);
  });
})