import PropTypes from 'prop-types';
import Header from '../layouts/components/Header';
import Sidebar from './components/Sidebar/Sidebar';

function DefaultLayout({ children }) {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className="w-[1150px] flex mt-[60px]">
        <Sidebar />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
