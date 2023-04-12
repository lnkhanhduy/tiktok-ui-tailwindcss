import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';
import Live from '../pages/Live';

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/@:nickname', component: Profile },
  { path: '/upload', component: Upload, layout: null },
  { path: '/live', component: Live },
];

export { publicRoutes };
