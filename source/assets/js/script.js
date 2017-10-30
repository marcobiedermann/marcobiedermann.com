import lazysizes from 'lazysizes';
import svg4everybody from 'svg4everybody';

import googleAnalytics from './google-analytics';
import navigation from './navigation';
import pagination from './pagination';
import scroll from './scroll';

function main() {
  googleAnalytics();
  navigation();
  pagination();
  scroll();
  svg4everybody();
}

main();
