(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{199:function(e,t,r){"use strict";r.d(t,"a",(function(){return qe}));var n=r(2),o=r.n(n),c=r(107),a=r(320),i=r(49),s=r(202),l=r(88),u=r(10),b=r.n(u),p=r(5),f=r.n(p),j=r(155),O=r(156),g=r.n(O).a.create({baseURL:"https://simple-contact-crud.herokuapp.com/contact"}),d=r(157),h=r.n(d),y=function(e){for(var t=h.a.groupBy(e,(function(e){return e.firstName.charAt(0).toUpperCase()})),r=[],n=0,o=Object.entries(t);n<o.length;n++){var c=o[n],a=b()(c,2),i=a[0],s=a[1];r.push({title:i,data:s})}return{list:e,sectionedList:r=r.sort((function(e,t){var r=e.title,n=t.title;return r<n?-1:r>n?1:0}))}};function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=Object(l.b)("contactList/getAllContacts",(function(e,t){var r,n,o,c;return f.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.awrap(Object(j.a)((function(){return g(e)})));case 2:return r=t.sent,n=b()(r,2),n[0],o=n[1],c=o.data.data.map((function(e){return x(x({},e),{},{personName:e.firstName+" "+e.lastName})})),t.abrupt("return",c);case 8:case"end":return t.stop()}}),null,null,null,Promise)})),P=Object(l.c)({name:"contactList",initialState:{list:[],sectionedList:[],loading:"idle"},reducers:{},extraReducers:function(e){e.addCase(v.pending,(function(e,t){e.loading="pending"})),e.addCase(v.fulfilled,(function(e,t){var r=t.payload;return x(x({},y(r)),{},{loading:"succeeded"})}))}}).reducer,w=Object(l.a)({reducer:{contactList:P}}),C=r(68),S=r(312),k=r(319),D=r(128),E=r(0);function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function L(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var N=r(180);function I(){return Object(N.a)()}var z=r(7),H=r.n(z),F=r(316),R=r(317),A=r(104),V=r(318),M=r(45),U=r(12),W=r(1),B=r(189),G=r(101),J=r(32),q=r(4),K={light:{text:"#000",background:"#fff",tint:"#2f95dc",tabIconDefault:"#ccc",tabIconSelected:"#2f95dc"},dark:{text:"#fff",background:"#000",tint:"#fff",tabIconDefault:"#ccc",tabIconSelected:"#fff"}},Q=r(6),X=["style","lightColor","darkColor"],Y=["style","lightColor","darkColor"];function Z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function $(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _(e,t){var r=I(),n=e[r];return n||K[r][t]}function ee(e){var t=e.style,r=e.lightColor,n=e.darkColor,o=H()(e,X),c=_({light:r,dark:n},"text");return Object(Q.jsx)(J.a,$({style:[{color:c},t]},o))}function te(e){var t=e.style,r=e.lightColor,n=e.darkColor,o=H()(e,Y),c=_({light:r,dark:n},"background");return Object(Q.jsx)(q.a,$({style:[{backgroundColor:c},t]},o))}var re=r(313),ne=r(315),oe=r(314),ce=r(111),ae=W.a.create({center:{alignSelf:"center"},row:{flexDirection:"row"},greyBg:{backgroundColor:"grey",alignSelf:"center"}}),ie=function(e){var t=Object(U.b)().colors;return Object(Q.jsx)(ce.a,{sections:e.sections,keyExtractor:function(e,t){return e.id},renderItem:function(r){var n=r.item;return Object(Q.jsx)(re.a,{title:n.personName,description:"Age : "+n.age,left:function(){return Object(Q.jsx)(oe.a,{size:36,style:{alignSelf:"center",backgroundColor:t.tertiary},source:n.photo})},right:function(){return Object(Q.jsxs)(q.a,{style:ae.row,children:[Object(Q.jsx)(M.a,{icon:"square-edit-outline",color:t.primary,size:24,style:ae.center,onPress:function(){return e.onEditClicked(n)}}),Object(Q.jsx)(M.a,{icon:"delete",color:"red",size:24,style:ae.center,onPress:function(){return g({method:"DELETE",url:"/"+n.id}).then((function(t){return e.getAllData(),t}))}})]})}})},renderSectionHeader:function(e){var t=e.section.title;return Object(Q.jsx)(ne.a,{children:t})}})},se=r(200);function le(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var ue=W.a.create({fab:{position:"absolute",margin:16,right:0,bottom:0,backgroundColor:"green"}}),be=function(e){Object(U.b)().colors;return Object(Q.jsx)(se.a,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?le(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):le(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({icon:"plus",color:"white",style:ue.fab,onPress:function(){return console.log("Pressed")}},e))};function pe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function fe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?pe(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):pe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function je(e){var t,r=e.navigation,n=(null==(t=e.route.params)||t.refreshData,Object(U.b)().colors),o=Object(C.c)((function(e){return e.contactList.loading})),c=Object(C.c)((function(e){return e.contactList.list})),a=Object(C.c)((function(e){return e.contactList.sectionedList})),i=Object(C.b)(),s=function(){return i(v())},l=Object(E.useState)(""),u=b()(l,2),p=u[0],f=u[1],j=Object(E.useMemo)((function(){return p&&y(c.filter((function(e){return new RegExp(p,"gi").test(e.personName)}))).sectionedList}),[p]),O=Object(E.useCallback)((function(e){return f(e)}),[]);return Object(E.useEffect)((function(){s()}),[]),Object(Q.jsxs)(te,{style:Oe.container,children:[Object(Q.jsx)(B.a,{placeholder:"Search",onChangeText:O,value:p}),"pending"===o?Object(Q.jsx)(te,{style:Oe.allCenter,children:Object(Q.jsx)(G.a,{animating:!0,color:n.primary})}):Object(Q.jsx)(ie,{getAllData:s,sections:j||a,onEditClicked:function(e){return r.navigate("FormContact",fe(fe({},e),{},{formType:"Edit"}))}}),Object(Q.jsx)(be,{onPress:function(){return r.navigate("FormContact",{formType:"Create"})}})]})}var Oe=W.a.create({row:{flexDirection:"row"},container:{flex:1,paddingHorizontal:20,paddingTop:20,paddingBottom:70},allCenter:{flex:1,alignItems:"center",justifyContent:"center"},title:{fontSize:20,fontWeight:"bold"},separator:{marginVertical:30,height:1,width:"80%"}}),ge=r(57),de=["formType","personName","id"];function he(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ye(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?he(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):he(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function me(e){var t=e.route,r=e.navigation,n=t.params,c=(n.formType,n.personName,n.id,H()(n,de)),a=function(e){return function(t){r.setParams(ye(ye({},c),{},o()({},e,t)))}};return Object(Q.jsxs)(te,{style:xe.container,children:[Object(Q.jsx)(ge.a,{label:"First Name",value:c.firstName,onChangeText:a("firstName"),left:Object(Q.jsx)(ge.a.Icon,{name:"alphabetical"})}),Object(Q.jsx)(ge.a,{label:"Last Name",value:c.lastName,onChangeText:a("lastName"),left:Object(Q.jsx)(ge.a.Icon,{name:"alphabetical"})}),Object(Q.jsx)(ge.a,{label:"Age",value:c.age,onChangeText:a("age"),keyboardType:"phone-pad",left:Object(Q.jsx)(ge.a.Icon,{name:"numeric"}),maxLength:3}),Object(Q.jsx)(ge.a,{label:"Photo (URL)",value:c.photo,onChangeText:a("photo"),left:Object(Q.jsx)(ge.a.Icon,{name:"web"}),textContentType:"URL"})]})}var xe=W.a.create({container:{flex:1,alignItems:"center",paddingVertical:30,gap:10},title:{fontSize:20,fontWeight:"bold"},separator:{marginVertical:30,height:1,width:"80%"}}),ve=r(8),Pe=r(203),we=r(102);function Ce(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Se(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ce(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ce(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ke(e){return Object(Q.jsx)(ee,Se(Se({},e),{},{style:[e.style,{fontFamily:"space-mono"}]}))}function De(e){var t=e.path;return Object(Q.jsxs)(te,{children:[Object(Q.jsxs)(te,{style:Te.getStartedContainer,children:[Object(Q.jsx)(ee,{style:Te.getStartedText,lightColor:"rgba(0,0,0,0.8)",darkColor:"rgba(255,255,255,0.8)",children:"Open up the code for this screen:"}),Object(Q.jsx)(te,{style:[Te.codeHighlightContainer,Te.homeScreenFilename],darkColor:"rgba(255,255,255,0.05)",lightColor:"rgba(0,0,0,0.05)",children:Object(Q.jsx)(ke,{children:t})}),Object(Q.jsx)(ee,{style:Te.getStartedText,lightColor:"rgba(0,0,0,0.8)",darkColor:"rgba(255,255,255,0.8)",children:"Change any of the text, save the file, and your app will automatically update."})]}),Object(Q.jsx)(te,{style:Te.helpContainer,children:Object(Q.jsx)(we.a,{onPress:Ee,style:Te.helpLink,children:Object(Q.jsx)(ee,{style:Te.helpLinkText,lightColor:K.light.tint,children:"Tap here if your app doesn't automatically update after making changes"})})})]})}function Ee(){Pe.a("https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet")}var Te=W.a.create({getStartedContainer:{alignItems:"center",marginHorizontal:50},homeScreenFilename:{marginVertical:7},codeHighlightContainer:{borderRadius:3,paddingHorizontal:4},getStartedText:{fontSize:17,lineHeight:24,textAlign:"center"},helpContainer:{marginTop:15,marginHorizontal:20,alignItems:"center"},helpLink:{paddingVertical:15},helpLinkText:{textAlign:"center"}});function Le(){return Object(Q.jsxs)(te,{style:Ne.container,children:[Object(Q.jsx)(ee,{style:Ne.title,children:"Modal"}),Object(Q.jsx)(te,{style:Ne.separator,lightColor:"#eee",darkColor:"rgba(255,255,255,0.1)"}),Object(Q.jsx)(De,{path:"/screens/ModalScreen.tsx"}),Object(Q.jsx)(c.a,{style:"ios"===ve.a.OS?"light":"auto"})]})}var Ne=W.a.create({container:{flex:1,alignItems:"center",justifyContent:"center"},title:{fontSize:20,fontWeight:"bold"},separator:{marginVertical:30,height:1,width:"80%"}});function Ie(e){var t=e.navigation;return Object(Q.jsxs)(te,{style:ze.container,children:[Object(Q.jsx)(ee,{style:ze.title,children:"This screen doesn't exist."}),Object(Q.jsx)(we.a,{onPress:function(){return t.replace("Root")},style:ze.link,children:Object(Q.jsx)(ee,{style:ze.linkText,children:"Go to home screen!"})})]})}var ze=W.a.create({container:{flex:1,alignItems:"center",justifyContent:"center",padding:20},title:{fontSize:20,fontWeight:"bold"},link:{marginTop:15,paddingVertical:15},linkText:{fontSize:14,color:"#2e78b7"}}),He={prefixes:[r(201).a("/")],config:{screens:{Home:"home",FullInfo:{path:"contact/:id",parse:{id:Number}},FormContact:{path:"formcontact/:id"},Modal:"modal",NotFound:"*"}}},Fe=["formType","axiosObj","personName","id"];function Re(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ae(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Re(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Re(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Ve={Create:function(){return{method:"POST"}},Edit:function(e){return{method:"PUT",url:"/"+e}}};function Me(e){var t=e.colorScheme;return Object(Q.jsx)(F.a,{linking:He,theme:"dark"===t?R.a:A.a,children:Object(Q.jsx)(We,{})})}var Ue=Object(V.a)();function We(){var e=Object(U.b)().colors;return Object(Q.jsxs)(Ue.Navigator,{children:[Object(Q.jsx)(Ue.Screen,{name:"Home",component:je,options:{headerShown:!1}}),Object(Q.jsx)(Ue.Screen,{name:"FormContact",component:me,options:function(t){var r=t.navigation,n=t.route.params,o=n.formType,c=(n.axiosObj,n.personName,n.id),a=H()(n,Fe);return Ae({title:o+" Contact",headerLeft:function(){return Object(Q.jsx)(M.a,{icon:"close",size:24,onPress:function(){return r.navigate("Home")}})}},a&&{headerRight:function(){return Object(Q.jsx)(M.a,{icon:"check",color:e.primary,size:24,onPress:function(){return g(Ae(Ae({},Ve[o](c)),{},{data:a})).then((function(e){return r.reset({index:0,routes:[{name:"Home"}]}),e}))}})}})}}),Object(Q.jsx)(Ue.Screen,{name:"NotFound",component:Ie,options:{title:"Oops!"}}),Object(Q.jsx)(Ue.Group,{screenOptions:{presentation:"modal"},children:Object(Q.jsx)(Ue.Screen,{name:"Modal",component:Le})})]})}function Be(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ge(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Be(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Be(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Je=Ge(Ge({},i.a),{},{colors:Ge(Ge({},i.a.colors),{},{primary:"#3498db",secondary:"#f1c40f",tertiary:"#a1b2c3"})});function qe(){var e=function(){var e=Object(E.useState)(!1),t=b()(e,2),n=t[0],o=t[1];return Object(E.useEffect)((function(){f.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,D.b(),e.next=4,f.a.awrap(k.b(L(L({},S.a.font),{},{"space-mono":r(255)})));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.warn(e.t0);case 9:return e.prev=9,o(!0),D.a(),e.finish(9);case 13:case"end":return e.stop()}}),null,null,[[0,6,9,13]],Promise)}),[]),n}(),t=I();return e?Object(Q.jsx)(C.a,{store:w,children:Object(Q.jsx)(s.a,{theme:Je,children:Object(Q.jsxs)(a.b,{children:[Object(Q.jsx)(Me,{colorScheme:t}),Object(Q.jsx)(c.a,{})]})})}):null}},208:function(e,t,r){e.exports=r(301)},255:function(e,t,r){e.exports=r.p+"./fonts/SpaceMono-Regular.ttf"},288:function(e,t){}},[[208,1,2]]]);
//# sourceMappingURL=app.952b0b98.chunk.js.map