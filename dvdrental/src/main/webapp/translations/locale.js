var lang = localStorage ? (localStorage.getItem('user-lang') || 'en') : 'en';
var file = 'translations/' + lang + '.js';
document.write(' <script type ="text/javascript" src="' + file + '"></script>');
var extjsFile = 'extjs/packages/ext-locale/build/ext-locale-' + lang + '.js'; 
document.write('<script type ="text/javascript" src ="' + extjsFile + '"></script>');

