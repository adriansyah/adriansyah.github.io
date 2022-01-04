(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[470],{9966:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/showcases/algorithms/calculate-arithmetic-string",function(){return t(1359)}])},1359:function(e,n,t){"use strict";t.r(n);var s=t(8598),r=t(1887),a=t(7881),i=t(1802),o=t(2684),l=t(6026);n.default=function(){var e=(0,o.useState)("function executeArithmeticExpression(value, secondValue, operator) {\n    switch (operator) {\n        case '+':\n            return value + secondValue;\n        case '-':\n            return value - secondValue;\n        case '*':\n            return value * secondValue;\n        case '/':\n            return value / secondValue;\n    } \n\n    throw new Error('Operation is not supported');\n}\n\nfunction calculate(s) {\n    let result = 0;\n    let operation = '+';\n    let holdValue = '';\n    for(let i = 0; i < s.length; i++) {\n        let currentPointer = s[i];\n        if (!isNaN(currentPointer)) {\n            // Hold value if current pointer is number\n            holdValue += s[i];\n            continue;\n        }\n        \n        if (!['+', '-', '*', '/'].includes(currentPointer)) {\n            // Skip if arithmethic not supported\n            continue;\n        }\n        \n        result = executeArithmeticExpression(result, parseInt(holdValue), operation);\n        holdValue = '';\n        operation = currentPointer;\n    }\n\n    // Execute the last digit\n    return holdValue !== '' ? executeArithmeticExpression(result, parseInt(holdValue), operation) : result;\n}"),n=e[0],t=e[1],c=(0,o.useState)(""),u=c[0],d=c[1],h=(0,o.useState)(""),m=h[0],p=h[1],x=(0,o.useState)(0),f=x[0],g=x[1],j=(0,o.useState)(!1),v=j[0],b=j[1],N=(0,o.useState)(!1),w=N[0],y=N[1];return(0,s.jsxs)("div",{className:"min-h-screen flex flex-col",children:[(0,s.jsxs)(r.default,{children:[(0,s.jsx)("title",{children:"Adriansyah | Showcases - Algorithms - Basic calculator"}),(0,s.jsx)("meta",{name:"description",content:"implementation of a way to execute basic arithmetic expression."}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,s.jsx)("header",{children:(0,s.jsx)(a.W,{})}),(0,s.jsxs)("main",{className:"bg-stone-100 flex-grow flex flex-col p-5",children:[(0,s.jsxs)("header",{children:[(0,s.jsx)("h2",{className:"mb-9 font-sans text-3xl text-center font-bold text-gray-800 underline underline-offset-8",children:"Basic calculator"}),(0,s.jsx)("p",{className:"text-center",children:"This is implementation how calculate arithmetic expression from string."}),(0,s.jsxs)("p",{className:"text-center",children:[(0,s.jsx)("strong",{children:"NOTE:"}),(0,s.jsx)("em",{children:" Do not change the function name"})]}),(0,s.jsxs)("p",{className:"text-center",children:[(0,s.jsx)("strong",{children:"NOTE:"}),(0,s.jsx)("em",{children:" WIP It still doesn't take precedence propertly"})]})]}),(0,s.jsxs)("div",{className:"mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-5",children:[(0,s.jsx)("div",{children:(0,s.jsx)(i.p,{value:n,language:"js",placeholder:"Please enter JS code.",onChange:function(e){return t(e.target.value)},padding:15,style:{fontSize:12,backgroundColor:"white",fontFamily:"ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace"}})}),(0,s.jsxs)("div",{className:"overflow-hidden sm:rounded-md",children:[(0,s.jsx)("div",{className:"px-4 py-5 bg-white sm:p-6",children:(0,s.jsxs)("div",{className:"grid grid-cols-6 gap-6",children:[(0,s.jsxs)("div",{className:"col-span-6 sm:col-span-4",children:[(0,s.jsx)("label",{htmlFor:"input",className:"block text-sm font-medium text-gray-700",children:"Input"}),(0,s.jsx)("input",{type:"text",name:"input",id:"input",placeholder:"20+3",value:u,onChange:function(e){b(!1),d(e.target.value)},className:"px-3 py-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-500 rounded-md"})]}),(0,s.jsxs)("div",{className:"col-span-6 sm:col-span-4",children:[v&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("strong",{children:u})," = ",f]}),m.length>0&&(0,s.jsxs)("p",{children:[(0,s.jsx)("span",{className:"font-bold text-red-600",children:"Error:"})," ",m]})]})]})}),(0,s.jsx)("div",{className:"px-4 py-3 bg-gray-50 text-right sm:px-6",children:(0,s.jsxs)("button",{type:"submit",disabled:w,onClick:function(){if(b(!1),u){y(!0),p("");try{!function(){var e,t="".concat(n," postMessage(calculate('").concat(u,"'))"),s=new Blob([t],{type:"text/javascript"}),r=URL.createObjectURL(s),a=new Worker(r);a.addEventListener("message",(function(n){g(n.data),b(!0),clearTimeout(e),y(!1)})),a.addEventListener("error",(function(n){var t=n.message.toString();p(t),b(!1),clearTimeout(e),y(!1)})),e=setTimeout((function(){a.terminate(),b(!1),p("Function is taking longer than 5 second"),y(!1)}),5e3)}()}catch(s){e=s,(null!=(t=Error)&&"undefined"!==typeof Symbol&&t[Symbol.hasInstance]?t[Symbol.hasInstance](e):e instanceof t)&&p(s.message)}var e,t}},className:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:[w&&(0,s.jsx)(l.Z,{className:"animate-spin -ml-1 mr-3 h-5 w-5 text-white"}),"Submit"]})})]})]})]})]})}}},function(e){e.O(0,[774,337,214,888,179],(function(){return n=9966,e(e.s=n);var n}));var n=e.O();_N_E=n}]);