import svg4everybody from 'svg4everybody';

import googleAnalytics from './google-analytics';
import lazyload from './lazyload';
import navigation from './navigation';
import pagination from './pagination';
import scroll from './scroll';

function main() {
  googleAnalytics();
  lazyload();
  navigation();
  pagination();
  scroll();
  svg4everybody();
}

main();
