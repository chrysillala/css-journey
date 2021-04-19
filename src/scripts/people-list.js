import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faCommentDots } from "@fortawesome/free-regular-svg-icons/faCommentDots";

import '../styles/pages/_people-list.scss';

// add font icons to page
// without dom.watch(), automatic replacement of your Font Awesome icons won’t work in the rendered page
library.add(faCommentDots);
dom.watch();