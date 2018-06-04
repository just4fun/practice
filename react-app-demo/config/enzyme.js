import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
  adapter: new Adapter(),
  // As of Enzyme v3, the shallow API does call React lifecycle methods such as componentDidMount and componentDidUpdate,
  // I'd like to default enzyme back to v2 behavior.
  disableLifecycleMethods: true
});
