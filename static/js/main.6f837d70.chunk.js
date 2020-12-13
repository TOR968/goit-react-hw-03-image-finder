(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{3:function(e,t,a){e.exports={App:"styles_App__28Tsy",Searchbar:"styles_Searchbar__3Wxc5",SearchForm:"styles_SearchForm__dkXYd","SearchForm-button":"styles_SearchForm-button__J-yAg","SearchForm-button-label":"styles_SearchForm-button-label__3Ax0e","SearchForm-input":"styles_SearchForm-input__1D6PU",ImageGallery:"styles_ImageGallery__4aR8i",ImageGalleryItem:"styles_ImageGalleryItem__3JwnN","ImageGalleryItem-image":"styles_ImageGalleryItem-image__2wAdY",Overlay:"styles_Overlay__2p5JB",Modal:"styles_Modal__3DyLS",Button:"styles_Button__1w6MY",Loader:"styles_Loader__R11fG"}},72:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(1),c=a.n(n),s=a(23),o=a.n(s),l=a(13),i=a(5),u=a.n(i),h=a(12),g=a(8),m=a(9),p=a(11),j=a(10),b=a(3),d=a.n(b),y=function(e){Object(p.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(g.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={query:""},e.handleChange=function(t){var a=t.target.value;e.setState({query:a})},e.handleSubmit=function(t){t.preventDefault(),e.props.onChangeQuery(e.state.query),e.reset()},e.reset=function(){e.setState({query:""})},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state.query;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("header",{className:d.a.Searchbar,children:Object(r.jsxs)("form",{className:d.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(r.jsx)("button",{type:"submit",className:d.a["SearchForm-button"],children:Object(r.jsx)("span",{className:d.a["SearchForm-button-label"],children:"Search"})}),Object(r.jsx)("input",{className:d.a["SearchForm-input"],type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleChange,value:e})]})})})}}]),a}(n.Component),f="19030410-2c5fe4ac9573efb3689b839da",v=a(24),O=a.n(v),_=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=O.a.get("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat(f,"&image_type=photo&orientation=horizontal&per_page=12"));return a},x=a(26),S=function(e){var t=e.closeModal,a=e.children,c=function(e){"Escape"===e.key&&t()};return Object(n.useEffect)((function(){return window.addEventListener("keydown",c),function(){window.removeEventListener("keydown",c)}})),Object(r.jsx)("div",{className:d.a.Overlay,onClick:function(e){"IMG"!==e.target.nodeName&&t()},children:Object(r.jsx)("div",{className:d.a.Modal,children:Object(r.jsx)(r.Fragment,{children:a})})})};var w=function(e){var t=e.url,a=e.alt,c=e.largeImageURL,s=Object(n.useState)(!1),o=Object(x.a)(s,2),l=o[0],i=o[1];return Object(r.jsxs)("li",{className:d.a.ImageGalleryItem,children:[Object(r.jsx)("img",{src:t,alt:a,className:d.a["ImageGalleryItem-image"],onClick:function(){return i(!0)}}),l&&Object(r.jsx)(S,{closeModal:function(){return i(!1)},children:Object(r.jsx)("img",{src:c,alt:a})})]})};var F=function(e){var t=e.gallery;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("ul",{className:d.a.ImageGallery,children:t.map((function(e){var t=e.id,a=e.webformatURL,n=e.largeImageURL,c=e.tags;return Object(r.jsx)(w,{url:a,alt:c,largeImageURL:n},t)}))})})};var I=function(e){var t=e.pageChanger;return Object(r.jsx)("button",{type:"button",className:d.a.Button,onClick:t,children:"Load more"})},C=a(25),L=a.n(C);a(71);var k=function(){return Object(r.jsx)("div",{className:d.a.Loader,children:Object(r.jsx)(L.a,{type:"Puff",color:"#00BFFF",height:100,width:100})})},q=function(e){Object(p.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(g.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={gallery:[],query:"",page:1,isLoading:!1,error:!1},e.onChangeQuery=function(t){e.setState({query:t,page:1,gallery:[]})},e.fetchRequest=Object(h.a)(u.a.mark((function t(){var a,r,n,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=e.state,r=a.query,n=a.page,t.next=4,_(r,n);case 4:return c=t.sent,t.abrupt("return",c.data.hits);case 8:t.prev=8,t.t0=t.catch(0),e.setState({error:!0});case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),e.pageChanger=function(){e.setState((function(e){return{page:e.page+1}}))},e}return Object(m.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,r=this.state,n=r.query,c=r.page;n!==t.query&&(this.setState({isLoading:!0}),function(){var e=Object(h.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.fetchRequest();case 2:t=e.sent,a.setState({gallery:Object(l.a)(t),isLoading:!1});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()());c!==t.page&&(this.setState({isLoading:!0}),function(){var e=Object(h.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.fetchRequest();case 2:t=e.sent,a.setState((function(e){return{gallery:[].concat(Object(l.a)(e.gallery),Object(l.a)(t)),isLoading:!1}})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()())}},{key:"render",value:function(){var e=this.state,t=e.gallery,a=e.isLoading,n=e.error;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(y,{onChangeQuery:this.onChangeQuery}),n&&Object(r.jsx)("h1",{children:"something gone wrong, try again later"}),!!t.length&&!n&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(F,{gallery:t}),!a&&Object(r.jsx)(I,{pageChanger:this.pageChanger})]}),a&&Object(r.jsx)(k,{})]})}}]),a}(n.Component);var N=function(){return Object(r.jsx)(q,{})};o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(N,{})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.6f837d70.chunk.js.map