(function(t){function e(e){for(var c,u,s=e[0],i=e[1],l=e[2],b=0,d=[];b<s.length;b++)u=s[b],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&d.push(a[u][0]),a[u]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(t[c]=i[c]);o&&o(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],c=!0,s=1;s<n.length;s++){var i=n[s];0!==a[i]&&(c=!1)}c&&(r.splice(e--,1),t=u(u.s=n[0]))}return t}var c={},a={app:0},r=[];function u(e){if(c[e])return c[e].exports;var n=c[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=c,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)u.d(n,c,function(e){return t[e]}.bind(null,c));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/state_machines/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var o=i;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),a={class:"row justify-content-center shadow-lg vh-100"},r={class:"col-6 bg-light h-100"},u={key:0},s={key:1},i={class:"d-flex flex-row justify-content-end"},l={class:"col-6 bg-secondary"},o={class:"row"},b={key:0},d=Object(c["f"])("div",{class:"alert alert-secondary my-2",role:"alert"}," Machine with accessible states only: ",-1),f=Object(c["f"])("hr",null,null,-1),p=Object(c["f"])("div",{class:"alert alert-secondary",role:"alert"}," Minimum Equivalent Machine: ",-1),O={class:"alert alert-dark col-6",role:"alert"},h={class:"d-flex flex-row justify-content-end"};function j(t,e,n,j,m,v){var y=Object(c["n"])("MachineButtons"),k=Object(c["n"])("DictionaryInput"),g=Object(c["n"])("MooreMachineTable"),M=Object(c["n"])("MealyMachineTable");return Object(c["k"])(),Object(c["e"])("div",a,[Object(c["g"])(y),Object(c["f"])("div",r,[Object(c["g"])(k),v.machineType?(Object(c["k"])(),Object(c["e"])("div",u,[Object(c["g"])(g,{ref:"machineTable",statesQchild:v.statesQ,inputsSchild:v.inputsS},null,8,["statesQchild","inputsSchild"])])):(Object(c["k"])(),Object(c["e"])("div",s,[Object(c["g"])(M,{ref:"machineTable",statesQchild:v.statesQ,inputsSchild:v.inputsS},null,8,["statesQchild","inputsSchild"])])),Object(c["f"])("div",i,[Object(c["f"])("button",{class:"btn btn-dark m-2",onClick:e[0]||(e[0]=function(){return v.calcOutputs&&v.calcOutputs.apply(v,arguments)})},"Calculate")])]),Object(c["f"])("div",l,[Object(c["f"])("div",o,[v.renderOutput?(Object(c["k"])(),Object(c["e"])("div",b,[d,(Object(c["k"])(),Object(c["c"])(Object(c["o"])(v.outputType),Object(c["j"])(Object(c["h"])(v.outPropsRelated)),null,16)),f,p,Object(c["f"])("div",O,Object(c["p"])(v.parseFinalPartition),1),(Object(c["k"])(),Object(c["c"])(Object(c["o"])(v.outputType),Object(c["j"])(Object(c["h"])(v.outPropsMinimum)),null,16)),Object(c["f"])("div",h,[Object(c["f"])("button",{class:"btn btn-dark m-2",onClick:e[1]||(e[1]=function(){return v.resetOutput&&v.resetOutput.apply(v,arguments)})},"Reset")])])):Object(c["d"])("",!0)])])])}n("07ac"),n("159b");var m={class:"row bg-dark align-items-start py-3 px-0"},v={class:"col-6 px-0"},y={class:"btn-group col-12 px-3",role:"group"},k=Object(c["f"])("label",{class:"btn btn-outline-light",for:"btnmealy"},"Mealy Machine",-1),g=Object(c["f"])("label",{class:"btn btn-outline-light",for:"btnmoore"},"Moore Machine",-1),M=Object(c["f"])("h4",{class:"col-6 text-light h-100 my-0",align:"center"}," Results",-1);function S(t,e,n,a,r,u){return Object(c["k"])(),Object(c["e"])("div",m,[Object(c["f"])("div",v,[Object(c["f"])("div",y,[Object(c["t"])(Object(c["f"])("input",{type:"checkbox",class:"btn-check",id:"btnmealy",autocomplete:"off","onUpdate:modelValue":e[0]||(e[0]=function(t){return u.machineType=t}),"false-value":"1","true-value":"0"},null,512),[[c["q"],u.machineType]]),k,Object(c["t"])(Object(c["f"])("input",{type:"checkbox",class:"btn-check",id:"btnmoore",autocomplete:"off","onUpdate:modelValue":e[1]||(e[1]=function(t){return u.machineType=t}),"false-value":"0","true-value":"1"},null,512),[[c["q"],u.machineType]]),g])]),M])}var T={data:function(){return{auxVal:0,machineTypeBool:!1}},computed:{machineType:{get:function(){return this.auxVal},set:function(t){this.machineTypeBool=1==t,this.auxVal=t,this.$store.commit("setMachineType",this.machineTypeBool)}}}};T.render=S;var E=T,q={class:"row"},w={class:"card p-2"},x={class:"row pb-2"},P=Object(c["f"])("label",{class:"col-sm-2 col-form-label"},"States [Q]",-1),R={class:"col-sm-10"},$={class:"row pb-2"},Q=Object(c["f"])("label",{class:"col-sm-2 col-form-label"},"Inputs [S]",-1),B={class:"col-sm-10"},I={class:"row pb-2"},C=Object(c["f"])("label",{class:"col-sm-2 col-form-label"},"Outputs [R]",-1),V={class:"col-sm-10"};function _(t,e,n,a,r,u){return Object(c["k"])(),Object(c["e"])("div",q,[Object(c["f"])("div",w,[Object(c["f"])("div",x,[P,Object(c["f"])("div",R,[Object(c["t"])(Object(c["f"])("input",{"onUpdate:modelValue":e[0]||(e[0]=function(t){return u.statesQ=t}),type:"text",class:"form-control"},null,512),[[c["r"],u.statesQ]])])]),Object(c["f"])("div",$,[Q,Object(c["f"])("div",B,[Object(c["t"])(Object(c["f"])("input",{"onUpdate:modelValue":e[1]||(e[1]=function(t){return u.inputsS=t}),type:"text",class:"form-control"},null,512),[[c["r"],u.inputsS]])])]),Object(c["f"])("div",I,[C,Object(c["f"])("div",V,[Object(c["t"])(Object(c["f"])("input",{"onUpdate:modelValue":e[2]||(e[2]=function(t){return u.outputsR=t}),type:"text",class:"form-control"},null,512),[[c["r"],u.outputsR]])])])])])}var U={computed:{statesQ:{set:function(t){this.$store.commit("setStatesQ",t)}},inputsS:{set:function(t){this.$store.commit("setInputsS",t)}},outputsR:{set:function(t){this.$store.commit("setOutputsR",t)}}}};U.render=_;var F=U,D={class:"row p-2"},H={class:"table table-dark table-bordered",id:"mooretable"},J=Object(c["f"])("th",{class:"table-bordered"},"State",-1),L=Object(c["f"])("th",{class:"table-bordered"},"Output",-1),A=["id"],z=["id"],G={class:"table-bordered"},K=["id"];function N(t,e,n,a,r,u){return Object(c["k"])(),Object(c["e"])("div",D,[Object(c["f"])("table",H,[Object(c["f"])("thead",null,[Object(c["f"])("tr",null,[J,(Object(c["k"])(!0),Object(c["e"])(c["a"],null,Object(c["m"])(n.inputsSchild,(function(t){return Object(c["k"])(),Object(c["e"])("th",{class:"table-bordered",key:t},Object(c["p"])(t),1)})),128)),L])]),Object(c["f"])("tbody",null,[(Object(c["k"])(!0),Object(c["e"])(c["a"],null,Object(c["m"])(n.statesQchild,(function(t,e){return Object(c["k"])(),Object(c["e"])("tr",{class:"table-bordered",key:t},[Object(c["f"])("th",{class:"table-bordered",id:"statename-"+e},Object(c["p"])(t),9,A),(Object(c["k"])(!0),Object(c["e"])(c["a"],null,Object(c["m"])(n.inputsSchild,(function(t,n){return Object(c["k"])(),Object(c["e"])("th",{key:t,class:"table-bordered"},[Object(c["f"])("input",{type:"text",class:"form-control",id:"nextstate-"+e+","+n},null,8,z)])})),128)),Object(c["f"])("th",G,[Object(c["f"])("input",{type:"text",class:"form-control table-bordered",id:"stateoutput-"+e},null,8,K)])])})),128))])])])}var W={props:["statesQchild","inputsSchild","outputsRchild"],methods:{parseTable:function(){for(var t=document.getElementById("mooretable").tBodies[0].rows,e={},n=0;n<t.length;n++){var c={},a=document.getElementById("statename-"+n).innerHTML;c["stateoutput"]=document.getElementById("stateoutput-"+n).value;for(var r=0;r<t[n].cells.length-2;r++)c["sucesor-"+r]=document.getElementById("nextstate-"+n+","+r).value;e[a]=c}this.$store.commit("setParsedTable",e)}}};W.render=N;var X=W,Y={class:"row p-2"},Z={class:"table table-dark table-bordered",id:"mealytable"},tt=Object(c["f"])("th",{class:"table-dark"},"State",-1),et=["id"],nt=["id"],ct=["id"];function at(t,e,n,a,r,u){return Object(c["k"])(),Object(c["e"])("div",Y,[Object(c["f"])("table",Z,[Object(c["f"])("thead",null,[Object(c["f"])("tr",null,[tt,(Object(c["k"])(!0),Object(c["e"])(c["a"],null,Object(c["m"])(n.inputsSchild,(function(t){return Object(c["k"])(),Object(c["e"])("th",{class:"table-dark",key:t},Object(c["p"])(t),1)})),128))])]),Object(c["f"])("tbody",null,[(Object(c["k"])(!0),Object(c["e"])(c["a"],null,Object(c["m"])(n.statesQchild,(function(t,e){return Object(c["k"])(),Object(c["e"])("tr",{class:"table-bordered",key:t},[Object(c["f"])("th",{class:"table-bordered",id:"statename-"+e},Object(c["p"])(t),9,et),(Object(c["k"])(!0),Object(c["e"])(c["a"],null,Object(c["m"])(n.inputsSchild,(function(t,n){return Object(c["k"])(),Object(c["e"])("th",{key:t,class:"table-bordered"},[Object(c["f"])("input",{type:"text",class:"form-control",id:"nextstate-"+e+","+n},null,8,nt),Object(c["f"])("input",{type:"text",class:"form-control",id:"output-"+e+","+n},null,8,ct)])})),128))])})),128))])])])}var rt={props:["statesQchild","inputsSchild","outputsRchild"],methods:{parseTable:function(){for(var t=document.getElementById("mealytable").tBodies[0].rows,e={},n=0;n<t.length;n++){for(var c={},a=document.getElementById("statename-"+n).innerHTML,r=0;r<t[n].cells.length-1;r++)c["sucesor-"+r]=[document.getElementById("nextstate-"+n+","+r).value,document.getElementById("output-"+n+","+r).value];e[a]=c}this.$store.commit("setParsedTable",e)}}};rt.render=at;var ut=rt,st={class:"row p-2"},it={class:"table table-dark"},lt=Object(c["f"])("th",{class:"table-dark"},"State",-1),ot=Object(c["f"])("th",{class:"table-dark"},"Output",-1),bt={class:"table-dark"},dt={class:"table-dark"};function ft(t,e,n,a,r,u){return Object(c["k"])(),Object(c["e"])("div",st,[Object(c["f"])("table",it,[Object(c["f"])("thead",null,[Object(c["f"])("tr",null,[lt,(Object(c["k"])(!0),Object(c["e"])(c["a"],null,Object(c["m"])(r.inputsSout,(function(t){return Object(c["k"])(),Object(c["e"])("th",{class:"table-dark",key:t},Object(c["p"])(t),1)})),128)),ot])]),Object(c["f"])("tbody",null,[(Object(c["k"])(!0),Object(c["e"])(c["a"],null,Object(c["m"])(r.states,(function(t,e){return Object(c["k"])(),Object(c["e"])("tr",{class:"table-dark",key:t},[Object(c["f"])("th",bt,"q "+Object(c["p"])(e),1),(Object(c["k"])(!0),Object(c["e"])(c["a"],null,Object(c["m"])(r.inputsSout,(function(e,n){return Object(c["k"])(),Object(c["e"])("th",{key:e,class:"table-dark"},[Object(c["f"])("div",null,Object(c["p"])(t["sucesor-"+n]),1)])})),128)),Object(c["f"])("th",dt,[Object(c["f"])("div",null,Object(c["p"])(t.stateoutput),1)])])})),128))])])])}n("fb6a");var pt={props:["parsedMachine","inputsSchild"],data:function(){return{states:[],inputsSout:[]}},created:function(){this.inputsSout=this.inputsSchild.slice(),this.states=Object.values(this.parsedMachine)}};pt.render=ft;var Ot=pt,ht={class:"row p-2"},jt={class:"table table-borderedtable-dark"},mt=Object(c["f"])("th",{class:"table-dark"},"State",-1),vt={class:"table-dark"};function yt(t,e,n,a,r,u){return Object(c["k"])(),Object(c["e"])("div",ht,[Object(c["f"])("table",jt,[Object(c["f"])("thead",null,[Object(c["f"])("tr",null,[mt,(Object(c["k"])(!0),Object(c["e"])(c["a"],null,Object(c["m"])(r.inputsSout,(function(t){return Object(c["k"])(),Object(c["e"])("th",{class:"table-dark",key:t},Object(c["p"])(t),1)})),128))])]),Object(c["f"])("tbody",null,[(Object(c["k"])(!0),Object(c["e"])(c["a"],null,Object(c["m"])(r.states,(function(t,e){return Object(c["k"])(),Object(c["e"])("tr",{class:"table-dark",key:t},[Object(c["f"])("th",vt,"q "+Object(c["p"])(e),1),(Object(c["k"])(!0),Object(c["e"])(c["a"],null,Object(c["m"])(r.inputsSout,(function(e,n){return Object(c["k"])(),Object(c["e"])("th",{key:e,class:"table-dark"},[Object(c["f"])("div",null,Object(c["p"])(t["sucesor-"+n][0])+", "+Object(c["p"])(t["sucesor-"+n][1]),1)])})),128))])})),128))])])])}var kt={props:["parsedMachine","inputsSchild"],data:function(){return{states:[],inputsSout:[]}},created:function(){this.inputsSout=this.inputsSchild.slice(),this.states=Object.values(this.parsedMachine)}};kt.render=yt;var gt=kt,Mt={name:"App",components:{MachineButtons:E,DictionaryInput:F,MooreMachineTable:X,MealyMachineTable:ut,MooreTableOutput:Ot,MealyTableOutput:gt},methods:{calcParsedTable:function(){this.$refs.machineTable.parseTable()},calcOutputs:function(){this.calcParsedTable(),this.$store.commit("calcRelatedEquivalentMachine"),this.$store.commit("calcMinimumEquivalentMachine"),this.$store.commit("setRenderOutput",!0)},resetOutput:function(){this.$store.commit("setRenderOutput",!1)}},computed:{statesQ:{get:function(){return this.$store.state.statesQ}},inputsS:{get:function(){return this.$store.state.inputsS}},outputsR:{get:function(){return this.$store.state.outputsR}},machineType:{get:function(){return this.$store.getters.machineType},set:function(t){this.$store.commit("setMachineType",t)}},parsedTable:{get:function(){return this.$store.getters.parsedTable}},renderOutput:{get:function(){return this.$store.getters.renderOutput}},outputType:function(){return this.machineType?Ot:gt},outPropsRelated:function(){return{parsedMachine:this.relatedEquivalentMachine,inputsSchild:this.inputsS}},outPropsMinimum:function(){return{parsedMachine:this.minimumEquivalentMachine,inputsSchild:this.inputsS}},relatedEquivalentMachine:{get:function(){return this.$store.getters.relatedequivalentMachine}},minimumEquivalentMachine:{get:function(){return this.$store.getters.minimumEquivalentMachine}},parseFinalPartition:function(){var t="Final partition: ",e=Object.values(this.$store.getters.finalPartition);return e.forEach((function(e,n){t+="q"+n+": ("+e+"), "})),t}}};Mt.render=j;var St=Mt,Tt=(n("4de4"),n("ac1f"),n("1276"),n("5319"),n("5502")),Et=n("d4ec"),qt=n("bee2");n("b64b"),n("caad"),n("2532"),n("99af"),n("7db0"),n("a434"),n("d3b7"),n("ddb0");function wt(t,e){var n=Object.keys(t),c=Pt(t,e),a=n.filter((function(t){return!c.includes(t)}));return a.forEach((function(e){delete t[e]})),t}function xt(t,e){var n=wt(t,e),c=Ut(n,e),a=Ft(n,e),r=e?Rt(a):$t(a),u=Qt(c,r),s=It(u,c,a,e);return[u,s]}function Pt(t,e){var n=Ut(t,e),c=new Lt(n);return c.added}function Rt(t){var e=Object.keys(t).reduce((function(e,n){var c=t[n];return e[c]=(e[c]||[]).concat(n),e}),{});return Object.values(e)}function $t(t){var e={},n=0,c=Object.keys(t).reduce((function(c,a){var r=t[a],u=!1;return Object.values(e).forEach((function(t){var n=Dt(t,r);if(n){var s=Object.keys(e).find((function(n){return Dt(t,e[n])}));c[s]=(c[s]||[]).concat(a),u=!0}})),u||(e[n]=[].concat(r),c[n]=(c[n]||[]).concat(a),n++),c}),{});return Object.values(c)}function Qt(t,e){var n={},c=0;return Object.values(e).forEach((function(a){var r=a.slice();do{for(var u="",s=0;s<r.length;){var i=r[s];""==u?(n[c]=[i],r.shift(),u=i,c++):1==Bt(t[i],t[u],e)?(n[c-1].push(i),r.splice(s,1),u=i):s++}}while(r.length>0)})),Ht(e,n)?n:Qt(t,n)}function Bt(t,e,n){for(var c=1,a=0;a<t.length&&1==c;a++){for(var r=t[a],u=e[a],s=r==u,i=0;i<Object.values(n).length&&!s;i++){var l=Object.values(n)[i];s=l.includes(r)&&l.includes(u)}c*=s}return c}function It(t,e,n,c){return c?Ct(t,e,n):Vt(t,e,n)}function Ct(t,e,n){var c={};return Object.values(t).forEach((function(a,r){var u=a[0];c["q"+r]={},c["q"+r].stateoutput=n[u];var s=e[u];s.forEach((function(e,n){var a=Object.keys(t).find((function(n){return Dt(_t(e,t),t[n])}));c["q"+r]["sucesor-"+n]="q"+a}))})),c}function Vt(t,e,n){var c={};return Object.values(t).forEach((function(a,r){var u=a[0];c["q"+r]={};var s=e[u];s.forEach((function(e,a){var s=Object.keys(t).find((function(n){return Dt(_t(e,t),t[n])}));c["q"+r]["sucesor-"+a]=["q"+s,n[u][a]]}))})),c}function _t(t,e){var n=null;return Object.values(e).forEach((function(e){e.includes(t)&&(n=e)})),n}function Ut(t,e){var n={};return e?Object.keys(t).forEach((function(e){n[e]=Object.values(t[e]).slice(1)})):Object.keys(t).forEach((function(e){var c=[];Object.keys(t[e]).forEach((function(n){c.push(t[e][n][0])})),n[e]=c})),n}function Ft(t,e){var n={};return e?Object.keys(t).forEach((function(e){n[e]=t[e].stateoutput})):Object.keys(t).forEach((function(e){var c=[];Object.keys(t[e]).forEach((function(n){c.push(t[e][n][1])})),n[e]=c})),n}function Dt(t,e){if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function Ht(t,e){if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(!Dt(t[n],e[n]))return!1;return!0}var Jt=function(){function t(e){Object(Et["a"])(this,t),this.id=e,this.children=[]}return Object(qt["a"])(t,[{key:"addChild",value:function(t){this.children.push(t)}}]),t}(),Lt=function(){function t(e){Object(Et["a"])(this,t),this.states=e,this.keys=Object.keys(e),this.root=new Jt(this.keys[0]),this.added=[],this.added.push(this.keys[0]),this.addChildrenOf(this.root)}return Object(qt["a"])(t,[{key:"addChildrenOf",value:function(t){var e=this,n=this.states[t.id];if(!n.every((function(t){return e.added.includes(t)}))){var c=[];n.forEach((function(n){if(!e.added.includes(n)){var a=new Jt(n);t.addChild(a),e.added.push(n),c.push(a)}})),c.forEach((function(t){e.addChildrenOf(t)}))}}}]),t}(),At=Object(Tt["a"])({state:{statesQ:[],inputsS:[],outputsR:[],relatedequivalentMachine:{},minimumEquivalentMachine:{},finalPartition:[],renderOutput:!1,machineType:!1,parsedTable:{}},getters:{machineType:function(t){return t.machineType},parsedTable:function(t){return t.parsedTable},relatedequivalentMachine:function(t){return t.relatedequivalentMachine},minimumEquivalentMachine:function(t){return t.minimumEquivalentMachine},renderOutput:function(t){return t.renderOutput},finalPartition:function(t){return t.finalPartition}},mutations:{setStatesQ:function(t,e){t.statesQ=e.replace(/\s/g,"").split(",").filter(String)},setInputsS:function(t,e){t.inputsS=e.replace(/\s/g,"").split(",").filter(String)},setOutputsR:function(t,e){t.outputsR=e.replace(/\s/g,"").split(",").filter(String)},calcRelatedEquivalentMachine:function(t){t.relatedequivalentMachine=wt(t.parsedTable,t.machineType)},calcMinimumEquivalentMachine:function(t){var e=xt(t.parsedTable,t.machineType);t.finalPartition=e[0],t.minimumEquivalentMachine=e[1]},setMachineType:function(t,e){t.machineType=e,t.renderOutput=!1},setParsedTable:function(t,e){t.parsedTable=e},setRenderOutput:function(t,e){t.renderOutput=e}}}),zt=At,Gt=Object(c["b"])(St);Gt.use(zt),Gt.mount("#app")}});
//# sourceMappingURL=app.7d494840.js.map