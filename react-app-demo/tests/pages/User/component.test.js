import React from 'react';
import { shallow, mount } from 'enzyme';
import { fromJS } from 'immutable';
import { MemoryRouter } from 'react-router-dom';
import Loading from 'react-aaui/lib/loading';
import Button from 'react-aaui/lib/Button';
import User from '../../../src/pages/User/component';
import RepoItem from '../../../src/components/RepoItem';

const repos = fromJS([
  {
    id: 1,
    name: 'stuhome'
  },
  {
    id: 2,
    name: 'poker'
  }
]);

describe('User Pages', () => {
  describe('Structures', () => {
    it('should render without crashing', () => {
      shallow(<User data={[]} />);
    });

    it('should render <Loading /> component if `isFetching` is `true`', () => {
      const wrapper = shallow(<User isFetching={true} />);
      expect(wrapper.find(Loading)).toHaveLength(1);
    });

    it('should render <RepoItem /> components if `isFetching` is `false`', () => {
      const wrapper = shallow(<User data={repos} />);
      expect(wrapper.find(RepoItem)).toHaveLength(2);
    });

    it('should render <Button /> component if `isFetching` is `false`', () => {
      const wrapper = shallow(<User data={repos} />);
      expect(wrapper.find(Button)).toHaveLength(1);
    });
  });

  describe('Behaviors', () => {
    const fetchRepos = jest.fn();
    const addRepo = jest.fn();
    const removeRepo = jest.fn();
    const favorRepo = jest.fn();

    // There is <Link /> component inside <User />, without any <Router /> component wraps it,
    // we will get error: The context `router` is marked as required in `Link`, but its value is `undefined`.
    //
    // https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/MemoryRouter.md#memoryrouter
    const wrapper = mount(
      <MemoryRouter>
        <User
          user={'just4fun'}
          data={repos}
          fetchRepos={fetchRepos}
          addRepo={addRepo}
          removeRepo={removeRepo}
          favorRepo={favorRepo} />
      </MemoryRouter>
    );
    const component = wrapper.find(User).instance();

    it('should call `fetchRepos` in `componentDidMount` hook', () => {
      expect(fetchRepos).toBeCalledWith('just4fun');
    });

    it('should call `addRepo` when `handleClick` invoked', () => {
      component.handleClick();
      expect(addRepo).toBeCalledWith({
        id: '9527',
        name: 'yet_another_repo'
      });
    });

    it('should call `removeRepo` when `handleRemove` invoked', () => {
      component.handleRemove(repos.get(0));
      expect(removeRepo).toBeCalledWith(repos.get(0));
    });

    it('should call `favorRepo` when `handleFavor` invoked', () => {
      component.handleFavor(repos.get(0));
      expect(favorRepo).toBeCalledWith(repos.get(0));
    });
  });
});
