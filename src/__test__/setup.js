import DotEnv from 'dotenv';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
// import { createSerializer } from 'enzyme-to-json';

DotEnv.config({ path: '.env.test' });
Enzyme.configure({
  adapter: new Adapter() 
});
// expect.addSnapshotSerializer(createSerializer({mode:'deep'}))
