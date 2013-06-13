# Info

Simplified, crapified Pinterest bookmarklet. Grabs all foreground images above a specified threshold size and overlays them in a "grid", linking to the original file. 

To get it to work add a bookmark to your browser and set the address to be:

     javascript:(function(d){var s=d.createElement('script');s.src='//raw.github.com/zaus/imagebookmarklet/main/bookmarklet.js';d.body.appendChild(s);})(document);

# Parameters

You can override the default parameters within the bookmarklet -- just define a global var `bkoptions` with the same components as `app.opts`.

# License

Copyright (C) 2013 zaus.  Do-as-you-will.
