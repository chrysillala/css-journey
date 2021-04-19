import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faImage, faCode, faBars, faBorderAll } from "@fortawesome/free-solid-svg-icons/";

import '../styles/pages/_links-navigation.scss';

// add font icons to page
// without dom.watch(), automatic replacement of your Font Awesome icons won’t work in the rendered page
library.add(faImage, faCode, faBars, faBorderAll);
dom.watch();