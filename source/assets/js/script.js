import svg4everybody from 'svg4everybody';

import analytics from './analytics';
import lazyload from './lazyload';
import navigation from './navigation';
import pagination from './pagination';
import scroll from './scroll';

function main() {
  analytics();
  lazyload();
  navigation();
  pagination();
  scroll();
  svg4everybody();
}

main();
