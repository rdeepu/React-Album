import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import {shallow,mount} from 'enzyme';
import Homepage from '../pages/components/PageOne';
import Header from '../pages/components/Header';
import Albums from '../pages/components/PageTwo';
import About from '../pages/components/PageThree'

let i:string = 'message', a:string = 'About', b:string = 'Albums';

describe('Albums async/await',()=>{
  test('async/await',async()=>{
    let wrapper = mount(<Albums/>)
     wrapper.instance().componentWillMount
  })
})

describe('About async/await',()=>{
  test('async/await',async()=>{
    let wrapper = mount(<About/>)
     wrapper.instance().componentWillMount
  })
})



describe ('Header Test',()=>{
  test('Header',()=>{
    let hdr = shallow(<Header i={i} a={a} b={b} />)
    expect(hdr).toMatchSnapshot
  })
})

describe ('Homepage Test',()=>{
   test('Home',()=>{
     let hme = shallow(<Homepage/>)
     expect(hme).toMatchSnapshot
   })

})

describe ('Albums Test',()=>{
  test('Albums',()=>{
    let alb = shallow(<Albums/>)
    expect(alb).toMatchSnapshot
  })
})

describe ('About Test',()=>{
  test('About',()=>{
    let abt = shallow(<About/>)
    expect(abt).toMatchSnapshot
  })
})

