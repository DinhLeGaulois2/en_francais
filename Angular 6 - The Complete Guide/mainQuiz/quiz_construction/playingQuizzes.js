// Please, copy the content of the model from "./model/myQuiz.js" and paste it below

const playingQuizzes = [
    { // start a quiz
        title: "Angular 6 (formerly Angular 2) - Section 2 - Basics",
        UUID: "e7111f35-f7c7-4025-84a5-367ae94a5ef9",
        deweyCode: -1,
        deweyName: "",
        comment: "",
        ref: "",
        questions: [
            { // start a question
                txt: "How to use <b>index</b> with '<font color='yellow'>ngFor</font>' in Angular?",
                subject: "Unit 38", // OPTIONAL
                p_ans: [  // OPTIONAL
                    { // start prop-answer
                        txt: "<p align='center'>&lt;div <b>*ngFor</b>=&quot;<b>let</b> aUnit <b>of</b> list <font color='red'>; let</font> i = <font color='red'>index</font>&quot;&gt; {{ aUnit }} number {{ i }}&lt;/div&gt;</p>",
                    }, // end prop-answer
                ]
            }, // end a question  
            { // start a question
                txt: "What is the syntax of '<font color='yellow'>ngFor</font>' in Angular?",
                subject: "Unit 37", // OPTIONAL
                p_ans: [  // OPTIONAL
                    { // start prop-answer
                        txt: "<p align='center'>&lt;p <font color='red'>*</font><font color='yellow' size='+2'>ngFor</font>=&quot;<font color='red'>let</font> aUnit <font color='red'>of</font> list&quot;&gt; {{ aUnit }}&lt;/p&gt;</p>",
                    }, // end prop-answer
                ]
            }, // end a question  
            { // start a question
                txt: "What is the action of '<font color='yellow'>components directives</font>' in Angular?",
                p_ans: [  // OPTIONAL
                    { // start prop-answer
                        txt: "Components—directives with a template.",
                    }, // end prop-answer
                ]
            }, // end a question  
            { // start a question
                txt: "What is the action of '<font color='yellow'>structural directives</font>' in Angular?",
                p_ans: [  // OPTIONAL
                    { // start prop-answer
                        txt: "Structural directives—change the DOM layout by adding and removing DOM elements. Two examples are <font color='red'>NgFor</font> and <font color='red'>NgIf</font>.",
                    }, // end prop-answer
                ]
            }, // end a question  
            { // start a question
                txt: "What is the action of '<font color='yellow'>attribute directives</font>' in Angular?",
                subject: "Unit 35", // OPTIONAL
                p_ans: [  // OPTIONAL
                    { // start prop-answer
                        txt: "Unlike structural directives, <font color='yellow'>attribute directives</font> don't add or remove elements. They only change the element they were placed on. The built-in <font color='red'>NgStyle</font> directive in the Template Syntax guide, for example, can change several element styles at the same time.",
                    }, // end prop-answer
                ]
            }, // end a question  
            { // start a question
                txt: "What are '<font color='yellow'>directives</font>' in Angular?",
                subject: "Unit 32", // OPTIONAL
                p_ans: [  // OPTIONAL
                    { // start prop-answer
                        txt: "Directives are Instructions in the DOM. The three types of directives in Angular 2 are attribute directives, structural directives, and components.<p>Some directive: &quot;<b>ngIf</b>&quot;, &quot;<b>ng-list</b>&quot;, &quot;<b>ng-model</b>&quot;...</p>",
                    }, // end prop-answer
                ]
            }, // end a question  
            { // start a question
                txt: "How to get the CONTENT of a '<font color='yellow'>property</font>' in Angular?",
                subject: "Unit 25", // OPTIONAL
                p_ans: [  // OPTIONAL
                    { // start prop-answer
                        txt: "<table align='center'><tr><td><pre class='myCode'><code>&lt;p <font color='red'><b>[</b></font><font color='cyan' size='+2'>innerText</font><font color='red'><b>]</b></font>=&quot;allowNewServer&quot;&gt;&lt;/p&gt;</code></pre></td></tr></table><p>Here, we're displaying the value of '<font size='+2'>allowNewServer</font>' (equivalent to: <b><i>&lt;p&gt;{{ allowNewServer }}&lt;/p&gt;</i></b>).</p>",
                    }, // end prop-answer
                ]
            }, // end a question  
            { // start a question
                txt: "How to make a component an '<font color='yellow'>attribute</font>' in Angular?",
                subject: "Unit 21", // OPTIONAL
                p_ans: [  // OPTIONAL
                    { // start prop-answer
                        txt: "<table align='center'><tr><td><pre class='myCode'><code>@Component({<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;selector: '<font color='red' size='+2'>[</font><font color='yellow' size='+2'>app-own-component</font><font color='red' size='+2'>]</font>',<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...<br/>&nbsp;&nbsp;})<br/>&nbsp;&nbsp;<br/>&nbsp;&nbsp;//----------------------<br/>&nbsp;&nbsp;<br/>&nbsp;&nbsp;// Usage (in a template)<br/>&nbsp;&nbsp;// Inside a regular HTML tag, we could do, for example with a 'div':<br/>&nbsp;&nbsp;&lt;div app-own-component&gt;&lt;/div <font color='yellow' size='+2'>app-own-component</font>&gt;</code></pre></td></tr></table>",
                    }, // end prop-answer
                ]
            }, // end a question  
            { // start a question
                txt: "How to make a component a '<font color='yellow'>class</font>' in Angular?",
                subject: "Unit 21", // OPTIONAL
                p_ans: [  // OPTIONAL
                    { // start prop-answer
                        txt: "<table align='center'><tr><td><pre class='myCode'><code>@Component({<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;selector: '<font color='red' size='+2'>.</font><font color='yellow' size='+2'>app-own-component</font>',<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...<br/>&nbsp;&nbsp;})<br/>&nbsp;&nbsp;<br/>&nbsp;&nbsp;//----------------------<br/>&nbsp;&nbsp;<br/>&nbsp;&nbsp;// Usage (in a template)<br/>&nbsp;&nbsp;// Inside a regular HTML tag, we could do, for example with a 'div':<br/>&nbsp;&nbsp;&lt;div <font color='red' size='+2'>class</font>='<font color='yellow' size='+2'>app-own-component</font>'&gt;&lt;/div&gt;</code></pre></td></tr></table>",
                    }, // end prop-answer
                ]
            }, // end a question  
            { // start a question
                txt: "What are different types of '<font color='yellow'>databinding</font>' in Angular?",
                subject: "Unit 22", // OPTIONAL
                p_ans: [  // OPTIONAL
                    { // start prop-answer
                        img: "./quiz_construction/docs/e7111f35-f7c7-4025-84a5-367ae94a5ef9/img/databinding.jpg",
                    }, // end prop-answer
                ]
            }, // end a question  
            { // start a question
                txt: "What is the SYNTAX of &quot;<b>String Interpolation</b>&quot; of '<font color='yellow'>data</font>'?",
                subject: "Unit 22", // OPTIONAL
                p_ans: [  // OPTIONAL
                    { // start prop-answer
                        txt: "<p align='center'>( <font color='red'>{{</font> <font color='yellow'>data</font> <font color='red'>}}</font> ). </p>For Example:<br/><p align='center'>Name: <font color='red'>{{</font> name <font color='red'>}}</font></p>",
                    }, // end prop-answer
                ]
            }, // end a question            
            { // start a question
                txt: "What is the SYNTAX of &quot;<b>Property Binding</b>&quot; of '<font color='yellow'>data</font>'?",
                subject: "Unit 22", // OPTIONAL
                p_ans: [  // OPTIONAL
                    { // start prop-answer
                        txt: "<p align='center'>( <font color='red'>[</font> property <font color='red'>]</font> = &quot;<font color='yellow'>data</font>&quot; ).  </p><br/>For example: <br/><p align='center'>&lt;button <font color='red'>[</font> <b>disabled</b> <font color='red'>]</font> ='!allowNewServer'&gt;Add Server&lt;/button&gt;</p>",
                    }, // end prop-answer
                ]
            }, // end a question 
            { // start a question
                txt: "What is the SYNTAX of &quot;<b>Event Binding</b>&quot; of '<font color='yellow'>expression</font>'?",
                subject: "Unit 22", // OPTIONAL
                p_ans: [  // OPTIONAL
                    { // start prop-answer
                        txt: "<p align='center'>( <font color='red'>(</font> event <font color='red'>)</font> = &quot;<font color='yellow'>expression</font>&quot; ).  </p>For example: <br/><p align='center'>&lt;button <font color='red'>(</font><b>click</b><font color='red'>)</font> ='onClickMe()'&gt;Add Server&lt;/button&gt;</p>",
                    }, // end prop-answer
                ]
            }, // end a question 
            { // start a question
                txt: "What is the SYNTAX of &quot;<b>Two-Way-Binding</b>&quot; of '<font color='yellow'>data</font>'?",
                subject: "Unit 22", // OPTIONAL
                p_ans: [  // OPTIONAL
                    { // start prop-answer
                        txt: "<p align='center'>( <font color='red'>[(</font> <font color='blue' size='+2'>ngModel</font> <font color='red'>)]</font> = &quot;<font color='yellow'>data</font>&quot; ). </p>For example: <br/><p align='center'>&lt;button <font color='red'>[(</font><font color='blue' size='+2'>ngModel</font><font color='red'>)]</font> = &quot;data&quot;&gt;Add Server&lt;/button&gt;</p>",
                    }, // end prop-answer
                ]
            }, // end a question        
            { // start a question
                txt: "What do we need to do to be able to use the directive &quot;<font color='red'><b>[(ngModel)]<b></font>&quot;?",
                subject: "Angular - Directives", // OPTIONAL
                ref: "https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/10415892?start=0", // OPTIONAL
                p_ans: [  // OPTIONAL
                    { // start prop-answer
                        txt: "In the file &quot;<font color='red' size='+2'>app.module.ts</font>&quot;, we need to IMPORT the <b><font color='yellow' size='+2'>FormsModule</font></b> and add it like:<br/>&nbsp;&nbsp;<table align='center'><tr><td><pre class='myCode'><code>import {&nbsp;<b><font color='yellow' size='+2'>FormsModule</font></b> }&nbsp;from '@angular/forms';<br/> <br/>@NgModule({<br/>&nbsp;&nbsp;&nbsp;&nbsp;...,<br/>&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;imports: [<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BrowserModule,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b><font color='yellow' size='+2'>FormsModule</font></b><br/>&nbsp;&nbsp;&nbsp;&nbsp;],<br/>&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;...<br/>})",
                    }, // end prop-answer
                ]
            }, // end a question            
            { // start a question
                txt: "If we are installing '<b>Bootstrap</b>' for our <b>Angular</b> project. How could <b>Angular</b> knows about <b>Bootstrap</b>?",
                ref: "https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/10415892?start=0", // OPTIONAL
                p_ans: [  // OPTIONAL
                    { // start prop-answer
                        txt: "we could open &quot;[project]/<font color='red'&quot;' size=&quot;+2&quot;>angular.json</font>&quot; and add (<b>architect&nbsp;&rarr;&nbsp;build&nbsp;&rarr;&nbsp;options&nbsp;&rarr;&nbsp;styles</b>):<br/> <br/> <table align='center'><tr><td><pre class='myCode'><code>&quot;styles&quot;: [<br/>&nbsp;&nbsp;&nbsp;&quot;<font color='yellow' size='+2'>node_modules/bootstrap/dist/css/bootstrap.min.css</font>&quot;,<br/>&nbsp;&nbsp;&nbsp;&quot;src/styles.css&quot;<br/> ],</code></pre></td></tr></table>",
                    }, // end prop-answer
                ]
            }, // end a question
        ]
    }, // end a quiz
];