import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faStar, faCommentDots, faThumbsUp } from "@fortawesome/free-regular-svg-icons/";

import '../styles/pages/_ui-components-calendar.scss';

// add font icons to page
// without dom.watch(), automatic replacement of your Font Awesome icons won’t work in the rendered page
library.add(faStar, faCommentDots, faThumbsUp);
dom.watch();