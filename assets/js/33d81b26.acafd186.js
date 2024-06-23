"use strict";(self.webpackChunkcloudpbx_portal_docs=self.webpackChunkcloudpbx_portal_docs||[]).push([[4320],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>h});var a=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),g=o,h=p["".concat(l,".").concat(g)]||p[g]||d[g]||s;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,r=new Array(s);r[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,r[1]=i;for(var u=2;u<s;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8347:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var a=n(8168),o=(n(6540),n(5680));const s={title:"Programming auto-attendants",sidebar_position:6},r=void 0,i={unversionedId:"ProgrammingWithAutoAtendess",id:"ProgrammingWithAutoAtendess",title:"Programming auto-attendants",description:"Overview",source:"@site/docs/ProgrammingWithAutoAtendess.md",sourceDirName:".",slug:"/ProgrammingWithAutoAtendess",permalink:"/sinews-portal-docs-source/docs/ProgrammingWithAutoAtendess",draft:!1,editUrl:"https://github.com/sinews-mobile/sinews-portal-docs-source/docs/ProgrammingWithAutoAtendess.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Programming auto-attendants",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Calls within business hours and non-working hours",permalink:"/sinews-portal-docs-source/docs/CallsWithingBusinessHours"},next:{title:"Automated Call Distribution",permalink:"/sinews-portal-docs-source/docs/AutomatedCallDistribution"}},l={},u=[],c={toc:u},p="wrapper";function d(e){let{components:t,...s}=e;return(0,o.yg)(p,(0,a.A)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Overview\nThe auto-attendant functionality allows callers to be automatically transferred to an extension without first going through a telephone operator or receptionist. For a caller to find a user on a phone system, a dial-by-name directory is usually available. This feature lists users by name; therefore, the caller can press a key to automatically ring the user\u2019s extension once the auto-attendant has announced it. The auto-attendant can also route calls to mobile phones, VoIP virtual phones, other auto-attendants, or other locations that use traditional landline phones. If a user is not available, the auto-attendant directs callers to the appropriate voice mailbox for the caller to leave a voicemail message."),(0,o.yg)("p",null,'Open menu "Cloud PBX > Auto-attendants" to see auto-attendant(s) configured for your Cloud PBX.\n',(0,o.yg)("img",{src:n(5894).A,width:"1143",height:"511"})),(0,o.yg)("p",null,"The auto-attendant may be composed of a set of independent menus (for example, one menu can be used to route calls within the Support Department, and others \u2013 within the Sales Department). All of them are identical in every respect, except for the ROOT menu, which is always present and cannot be deleted, and whose name cannot be changed."),(0,o.yg)("p",null,(0,o.yg)("img",{src:n(7101).A,width:"1113",height:"578"})),(0,o.yg)("p",null,'Auto-attendants with always active menus\nThe flow of incoming calls to an auto-attendant number is always routed to menu "ROOT" first.\n',(0,o.yg)("img",{src:n(4068).A,width:"1145",height:"553"})),(0,o.yg)("p",null,'If you need to configure a menu that is always active, hover over menu "ROOT" and click "Change menu settings".'),(0,o.yg)("p",null,'On tab "',(0,o.yg)("strong",{parentName:"p"},"Settings"),'" select radio button "Always" to set this menu so it is always active.'),(0,o.yg)("p",null,(0,o.yg)("img",{src:n(3979).A,width:"1164",height:"860"})),(0,o.yg)("p",null,'On tab "',(0,o.yg)("strong",{parentName:"p"},"Prompts"),'" enable options to upload greetings and guidance for people who call your number.'),(0,o.yg)("p",null,(0,o.yg)("img",{src:n(2850).A,width:"1098",height:"828"})),(0,o.yg)("p",null,"*"," ",(0,o.yg)("strong",{parentName:"p"},"Intro")," \u2013 the prompt is played when the menu is entered for the first time.\ne.g.\u201cWelcome to ACME, a security solutions company!\u201d"),(0,o.yg)("p",null,"*"," ",(0,o.yg)("strong",{parentName:"p"},"Menu")," \u2013 the menu prompt that will be guiding callers.\ne.g. \u201cPress 1 for sales, press 2 for technical support\u201d."),(0,o.yg)("p",null,"*"," ",(0,o.yg)("strong",{parentName:"p"},"On timeout")," \u2013 the prompt that will be assisting callers in case they exceed the waiting time."),(0,o.yg)("p",null,"*"," ",(0,o.yg)("strong",{parentName:"p"},"On unavailable selection")," \u2013 the prompt that will be assisting callers in case they press a wrong key."),(0,o.yg)("p",null,'Click "',(0,o.yg)("strong",{parentName:"p"},"+"),'" on tab "Call flow" or open a selected menu and open tab "Actions" to assign actions to different events.'),(0,o.yg)("p",null,(0,o.yg)("img",{src:n(8937).A,width:"747",height:"773"})),(0,o.yg)("p",null,'e.g. When a caller presses 1, redirect them to call queue "Support\u201d.'),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},'Enable option "Play before action" to upload a prompt that must be played prior to the selected action.')))),(0,o.yg)("p",null,"Auto-attendants with menus that have custom schedules\nThe auto-attendant may be composed of a set of independent menus that can be active at different times."),(0,o.yg)("p",null,"e.g. One menu can be used during business hours, and others \u2013 during non-business hours and on weekends."),(0,o.yg)("p",null,"Consider the following example: your company wants to configure the auto-attendant functionality so that different menus will answer calls during business and non-business hours. During business hours, you also want the caller to hear a welcome prompt first and then the menu prompt. Your company has two departments (sales and support) that you wish to make available to the caller. When a caller dials from a landline, they hear a recorded voice greeting that offers connection options, such as, \u201cHello! You have reached SmartCall Ltd. To reach the sales department, Press 1; to reach the support department, Press 2. If you know the extension of the person you are trying to reach, you can dial that now.\u201d"),(0,o.yg)("p",null,"When adding a new auto-attendant, you can define your company's business hours. You can specify the opening and closing times for the entire week."),(0,o.yg)("p",null,"e.g. Business hours are 08:00 AM - 05:00 PM, Monday to Friday."),(0,o.yg)("p",null,(0,o.yg)("img",{src:n(2688).A,width:"762",height:"801"})),(0,o.yg)("p",null,'If you need to change the business hours for a particular day, you can redefine "',(0,o.yg)("strong",{parentName:"p"},"Custom schedule"),'" for the menu that is active during business hours.'),(0,o.yg)("p",null,"e.g. Business hours normally are 08:00 AM - 05:00 PM, Monday to Friday, except Tuesday. On Tuesday, the business hours are 11:00 AM - 07:59 PM."),(0,o.yg)("p",null,'Open the menu that is active during business hours, and remove check box "',(0,o.yg)("strong",{parentName:"p"},"Tue"),'" for option "',(0,o.yg)("strong",{parentName:"p"},"Days"),'". Then click "',(0,o.yg)("strong",{parentName:"p"},"Add interval"),'" to add the opening and closing time on Tuesday.'),(0,o.yg)("p",null,(0,o.yg)("img",{src:n(2599).A,width:"1101",height:"844"})),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},'Exceptions/holidays may be defined in menu "ROOT".')))),(0,o.yg)("p",null,'This way, you can configure menu "',(0,o.yg)("strong",{parentName:"p"},"ROOT"),'" to process calls during weekends (and holidays) and the alternative menu \u2013 to process calls during business hours, and there\u2019s one more menu for handling calls after business hours.'),(0,o.yg)("p",null,(0,o.yg)("img",{src:n(7022).A,width:"1535",height:"889"})),(0,o.yg)("p",null,'The flow of incoming calls to an auto-attendant number is always routed to menu "',(0,o.yg)("strong",{parentName:"p"},"ROOT"),'" first. If menu "',(0,o.yg)("strong",{parentName:"p"},"ROOT"),'" is not currently active, the calls are processed by the alternative menu specified in the menu\u2019s option "',(0,o.yg)("strong",{parentName:"p"},"When the menu is inactive"),'".'),(0,o.yg)("p",null,(0,o.yg)("img",{src:n(4004).A,width:"1078",height:"827"})),(0,o.yg)("p",null,'If the alternative menu is not active either, the calls are routed to the menu specified in the alternative menu\u2019s option "When the menu is inactive", etc.'),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},'Enable option "Expand menus" to see how different menus are logically linked.')))),(0,o.yg)("p",null,(0,o.yg)("img",{src:n(5133).A,width:"1559",height:"875"})))}d.isMDXComponent=!0},5894:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/1-c954ae56c6da414fb9f75335ce0e6159.png"},4004:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/10-86f0fdef600bac570373327be23bcd41.png"},5133:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/11-8fcf5d069d364260eaad6779fc7339b9.png"},7101:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/2-171049e3afd66dba33f12145f6122f03.png"},4068:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/3-f991826fc640229d05b1e25eb51da7af.png"},3979:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/4-957fd78bcd1417f139257416ca02d19e.png"},2850:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/5-7a482f3618100464c6d8a6f3443d0340.png"},8937:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/6-94dc90e9bf645242c1ec290551298c80.png"},2688:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/7-e0ef680df0725e50fb99ec5f18fda11e.png"},2599:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/8-c3f24c7ddfd01f601729e0d83d83709f.png"},7022:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/9-60ef898590370ae298c65acad76e6b2a.png"}}]);