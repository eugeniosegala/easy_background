# easy_background

An extremely lightwell, easy and clear SlideShow Background dev in Vanilla JS.

This script can be used as a digital advertising spot (images pass on the screen at defined intervals).

<strong>Guide:</strong>

Just insert:

```
<script src="easy_background.js"></script>
```

and call easy_background:

```

// FIRST CHOOSE THE CONTAINER (selector), AFTER SET THE IMAGE AND THEN THE DELAY TIME.
// DEFAULT DELAY: 3s.

easy_background("body",

  {
	slide: ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg"],

	delay: [2000, 2000, 2000, 2000, 2000]
  }

);
```
<br>

<p><a href="https://loving-meitner-bdea65.netlify.app/">DEMO HERE</a></p>

# MIT License

Copyright (c) 2017 Eugenio Segala

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
