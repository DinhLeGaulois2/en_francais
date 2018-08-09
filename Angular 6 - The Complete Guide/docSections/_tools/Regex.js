// MAIN PAGE
//----------------------------------------------------
// ^([0-9]?[0-9]):([0-9]?[0-9])$
// ^([a-z])(.*?)$
// ^\r\n
//----------------------------------------------------
// File's Names
// ^(.*?): (.*?)$

// <div class="sectionDiv"><a href="docSections/originalDoc/$1 - $2.html">$1 - $2</a></div>


//=====================================================================================================
// SECTION'S PAGE

// If We Have A Chapter, under the form: 
//               1. This is Chapter 1
//               ...
//               12. This is Chapter 12
//               13. This is Chapter 13

// REGEX OF EACH CHAPTER
// ^([1-9]?[0-9]?[0-9])\.(\s)(.*?)$

// TABLE OF CONTENT
// <tr><td style="padding: 10px; font-size:1.2em"><a href="#$3">$1.$2$3</a></td></tr>

// CHAPTER'S CONTENT
// \t\t<div class="panel-heading">\n\t\t\t<h1 align="center" id="$3">$1.$2$3</h1>\n\t\t</div>\n\t\t<div class="panel-body">\n\t\t\t<!-- Add Definition -->\n\t\t\t<div class="def"></div>\n\t\t\t<!-- Add Code -->\n\t\t\t<pre class="code"><code></code></pre>\n\t\t\t<!-- Add a Picture -->\n\t\t\t<p align="center"><img src="../img/" border="1" /></p>\n\t\t</div>\n\n\t\t<!-- =================================================================== -->