(this.webpackJsonpprofile=this.webpackJsonpprofile||[]).push([[3],{80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}n.r(t);var c=n(1),o=n(2),s=n(4),i=n(3),l=n(0),u=n.n(l),p=(n(80),function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.props.input;return u.a.createElement("div",{className:"col-md-6"},u.a.createElement("div",{className:"card"},u.a.createElement("div",{className:"card-header"},"#",t.id),u.a.createElement("div",{className:"card-body"},u.a.createElement("h5",{className:"card-title"},t.title),u.a.createElement("blockquote",{className:"blockquote mb-0"},u.a.createElement("p",null,t.body.substr(0,50)+"...")),u.a.createElement("button",{onClick:function(){return e.props.clicked()},className:"btn btn-info"},"More Details"))))}}]),n}(l.Component)),b=(n(81),n(20)),f=n(9),m=Object(f.a)(),d=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).state={posts:[]},r}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.getPosts()}},{key:"getPosts",value:function(){var e=this;b.a.get("posts").then((function(t){var n=t.data.slice(0,10).map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{author:"Ahmed Hussein"})}));e.setState({posts:n})})).catch((function(e){console.warn(e)}))}},{key:"goToFullPost",value:function(e){m.push("/blog/posts/"+e),window.location.reload()}},{key:"render",value:function(){var e=this;if(0===this.state.posts.length)return u.a.createElement("h1",{className:"text-center"},"loading ...");var t=this.state.posts.map((function(t,n){return u.a.createElement(p,{key:n,input:t,clicked:function(){return e.goToFullPost(t.id)}})}));return u.a.createElement("div",{className:"container "},u.a.createElement("div",{className:"row margin-top"},t))}}]),n}(l.Component);t.default=d}}]);
//# sourceMappingURL=3.64cd693e.chunk.js.map