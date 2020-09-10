/*! For license information please see 2fe040c213495504b672.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{166:function(t,e,s){var i=s(213);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,s(172).default)("46765264",i,!0,{})},173:function(t,e,s){"use strict";var i=s(166);s.n(i).a},190:function(t,e,s){"use strict";var i={name:"ALink",props:{href:String,to:[String,Object]},computed:{isRouter(){return!!this.$router&&(!this.href||Boolean(this.$router.options.routes.find(({path:t})=>t===this.href)))}}},a=s(53),n=Object(a.a)(i,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.isRouter?"router-link":"a",{tag:"component",attrs:{href:t.isRouter?null:t.href,to:t.isRouter?t.to||t.href:null}},[t._t("default")],2)}),[],!1,null,null,null);e.a=n.exports},191:function(t,e,s){"use strict";s(13),s(5);var i=s(28),a=s(89),n=s(69);var r={name:"APicture",props:{src:[String,Object],fallbackSrc:String,alt:String,canCalcHeight:{type:Boolean,default:!0},placeholder:{type:String,default:"/assets/img-placeholder.png"},containerBreakpoints:{type:Object,default:()=>({zoom:null,big:800,[i.$ecomConfig.get("default_img_size")||"normal"]:400})},lozadOptions:{type:Object,default:()=>({rootMargin:"350px 0px",threshold:0})}},data:()=>({sources:[],height:null,opacity:null}),computed:{defaultImgObj(){return"object"==typeof this.src&&this.src?Object(a.a)(this.src)||this.src:{}},localFallbackSrc(){const{src:t,defaultImgObj:e,fallbackSrc:s}=this;if(s)return s;const i="object"==typeof t?t.zoom?t.zoom.url:e.url:t;return i?i.replace(/\.webp$/,""):this.placeholder},localAlt(){const{alt:t,src:e,defaultImgObj:s}=this;return t||(e?s.alt||"Product":"No image")}},methods:{updateSources(){const t=[];let e;if("object"==typeof this.src){const{clientWidth:t,clientHeight:s}=this.$el,i=((t,e,s,i)=>{let a,n;for(const r in i){const o=i[r];if(void 0!==o&&t[r]){if(void 0!==n)if(null===o){if(n>=e)continue}else if(o<e||o-50<=s||null!==n&&o>n)continue;a=r,n=o}}return a})(this.src,t,s,this.containerBreakpoints),a=this.src[i],{url:n,size:r}=a||this.defaultImgObj;if(e=n,t&&r&&this.canCalcHeight){const[e,s]=r.split("x").map(t=>parseInt(t,10));s&&(this.height="".concat(t>=e?s:t*s/e,"px"))}}else e=this.src;e&&(e.endsWith(".webp")?t.push({srcset:e,type:"image/webp"},{srcset:/\/imgs\/[0-9]{3}px/.test(e)?e.replace(/\/imgs\/[0-9]{3}px/,""):e.replace(/\.webp$/,""),type:"image/".concat(".png"===e.substr(-9,4)?"png":"jpeg")}):t.push({srcset:e})),this.sources=t}},mounted(){this.updateSources(),this.$nextTick(()=>{const t=this.$el;Object(n.a)(t,{...this.lozadOptions,loaded:t=>{const{localFallbackSrc:e}=this,s="IMG"===t.tagName?t:t.lastChild;s.style.opacity=0,s.onerror=function(){console.error(new Error("Image load error"),this),t.style.display="none";const s=document.createElement("IMG");s.src=e,t.parentNode.insertBefore(s,t.nextSibling)},s.onload=()=>{this.opacity=0,t.classList.add("loaded"),this.$nextTick(()=>{this.opacity=s.style.opacity=null,this.$emit("load")})}}}).observe()})}},o=(s(173),s(53)),c=Object(o.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("picture",{staticClass:"picture",style:{height:t.height,opacity:t.opacity},attrs:{"data-iesrc":t.localFallbackSrc,"data-alt":t.localAlt}},[t.sources.length?t._l(t.sources,(function(t,e){var i=t.srcset,a=t.type;return s("source",{key:e,attrs:{srcset:i,type:a}})})):s("source",{attrs:{srcset:t.localFallbackSrc}})],2)}),[],!1,null,null,null);e.a=c.exports},192:function(t,e,s){"use strict";var i=s(29),a=s(39),n=s(40),r=s(41),o=s(79);const c=(t,e)=>{const{type:s,value:i}=e;if(i)return"percentage"===s?t*(100-i)/100:t-i};var l={name:"APrices",props:{product:{type:Object,required:!0},isLiteral:Boolean,isBig:Boolean,installmentsOption:Object,discountOption:Object,discountText:{type:[String,Boolean],default:""}},data(){return{installmentsNumber:0,monthlyInterest:0,discount:{type:null,value:0},extraDiscount:{type:null,value:0},discountLabel:this.discountText}},computed:{i19asOf:()=>Object(a.a)(i.k),i19from:()=>Object(a.a)(i.pb),i19interestFree:()=>Object(a.a)(i.Ab),i19of:()=>Object(a.a)(i.dc),i19to:()=>Object(a.a)(i.pd),i19upTo:()=>Object(a.a)(i.wd),price(){const t=Object(n.a)(this.product);return this.extraDiscount.value?c(t,this.extraDiscount):t},comparePrice(){return Object(r.a)(this.product)?this.product.base_price:this.extraDiscount.value?Object(n.a)(this.product):void 0},priceWithDiscount(){return c(this.price,this.discount)},installmentValue(){if(this.installmentsNumber>=2){if(this.monthlyInterest){const t=this.monthlyInterest/100;return this.price*t/(1-Math.pow(1+t,-this.installmentsNumber))}return this.price/this.installmentsNumber}return 0}},methods:{formatMoney:o.a,updateInstallments(t){if(t){this.monthlyInterest=t.monthly_interest;const e=t.min_installment||5,s=parseInt(this.price/e,10);this.installmentsNumber=Math.min(s,t.max_number)}},updateDiscount(t){t&&(!t.min_amount||t.min_amount<=this.price)&&(this.discount=t,!this.discountText&&!1!==this.discountText&&t.label&&(this.discountLabel="via ".concat(t.label)))}},watch:{price:{handler(t){this.$emit("fix-price",t)},immediate:!0}},created(){const t="object"==typeof window&&window.storefront;if(this.discountOption)this.updateDiscount(this.discountOption);else if(t){const e=()=>{const e=t.info&&t.info.apply_discount;if(e){const t=e.available_extra_discount;return t&&(this.extraDiscount=t),Object.keys(e).length>0}return!1};e()||t.on("info:apply_discount",e)}if(this.installmentsOption)this.updateInstallments(this.installmentsOption);else if(t){const e=()=>{const e=t.info&&t.info.list_payments;return!!e&&(this.updateInstallments(e.installments_option),this.updateDiscount(e.discount_option),Object.keys(e).length>0)};e()||t.on("info:list_payments",e)}}},u=(s(173),s(53)),m=Object(u.a)(l,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"prices",class:{"prices--literal":t.isLiteral,"prices--big":t.isBig}},[t.comparePrice?s("span",{staticClass:"prices__compare"},[t.isLiteral?[s("small",[t._v(t._s(t.i19from))]),s("s",[t._v(t._s(t.formatMoney(t.comparePrice)))]),s("small",[t._v(t._s(t.i19to))])]:s("s",[t._v(t._s(t.formatMoney(t.comparePrice)))])],2):t._e(),s("strong",{staticClass:"prices__value"},[t._v(" "+t._s(t.formatMoney(t.price))+" ")]),s("transition-group",{attrs:{"enter-active-class":"animated slideInDown"}},[t.installmentsNumber>1?s("div",{key:"installments",staticClass:"prices__installments"},[t.isLiteral?s("small",[t._v(" "+t._s(t.i19upTo)+" ")]):t._e(),t._v(" "+t._s(t.installmentsNumber)+"x "),t.isLiteral?s("small",[t._v(" "+t._s(t.i19of)+" ")]):t._e(),s("span",[t._v(" "+t._s(t.formatMoney(t.installmentValue))+" ")]),!t.monthlyInterest&&t.isLiteral?s("small",[t._v(" "+t._s(t.i19interestFree)+" ")]):t._e()]):t._e(),"number"==typeof t.priceWithDiscount&&t.priceWithDiscount<t.price?s("div",{key:"discount",staticClass:"prices__discount"},["string"==typeof t.discountLabel&&t.discountLabel?[s("span",[t._v(" "+t._s(t.formatMoney(t.priceWithDiscount))+" ")]),s("small",[t._v(" "+t._s(t.discountLabel)+" ")])]:[s("small",[t._v(" "+t._s(t.i19asOf)+" ")]),s("span",[t._v(" "+t._s(t.formatMoney(t.priceWithDiscount))+" ")])]],2):t._e()])],1)}),[],!1,null,null,null);e.a=m.exports},213:function(t,e,s){(e=s(171)(!0)).push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"empty.scss"}]),t.exports=e},250:function(t,e,s){"use strict";var i=s(29),a=s(39),n=s(91),r=s(22),o=s(40),c=s(79),l=s(89),u=s(190),m=s(191),d=s(192),p={name:"EcSummary",components:{ALink:u.a,APicture:m.a,APrices:d.a},props:{amount:{type:Object,required:!0},items:Array,buyer:Object,shippingAddress:Object,canShowPriceOptions:Boolean},computed:{i19buyer:()=>Object(a.a)(i.s),i19contactPhone:()=>Object(a.a)(i.L),i19discount:()=>Object(a.a)(i.V),i19docNumber:()=>Object(a.a)(i.Z),i19freebie:()=>Object(a.a)(i.nb),i19freight:()=>Object(a.a)(i.ob),i19myAccount:()=>Object(a.a)(i.Pb),i19subtotal:()=>Object(a.a)(i.md),i19summary:()=>Object(a.a)(i.nd),i19total:()=>Object(a.a)(i.qd),buyerName(){if(!this.buyer)return"";const{name:t}=this.buyer;return"".concat(t.given_name," ").concat(t.middle_name||""," ").concat(t.family_name)},buyerPhone(){return Object(n.a)(this.buyer)}},methods:{getName:r.a,getPrice:o.a,formatMoney:c.a,getImg:t=>Object(l.a)(t,null,"small")}},_=(s(343),s(53)),g=Object(_.a)(p,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",{staticClass:"summary"},[s("h5",{staticClass:"summary__title"},[t._v(" "+t._s(t.i19summary)+" ")]),t._t("list",[t.items?s("div",{staticClass:"summary__list"},t._l(t.items,(function(e){return s("div",{key:e._id,staticClass:"summary__item"},[t.getImg(e)?s("a-picture",{attrs:{src:t.getImg(e).url,alt:t.getImg(e).alt||e.name}}):t._e(),s("div",[s("span",{staticClass:"badge badge-secondary"},[t._v(" "+t._s(e.quantity)+" ")]),Array.isArray(e.flags)&&e.flags.includes("freebie")?[s("s",[t._v(t._s(t.formatMoney(t.getPrice(e))))]),s("small",{staticClass:"text-muted"},[s("i",{staticClass:"fas fa-gift ml-2 mr-1"}),t._v(" "+t._s(t.i19freebie)+" ")])]:[t._v(" "+t._s(t.formatMoney(t.getPrice(e)))+" ")],s("br"),e.slug?s("a-link",{attrs:{href:"/"+e.slug,target:"_blank"}},[s("small",[t._v(t._s(t.getName(e)))])]):s("small",[t._v(" "+t._s(t.getName(e))+" ")])],2)],1)})),0):t._e()]),t._t("more-offers"),t._t("amount",[s("div",{staticClass:"summary__amount"},[s("div",{staticClass:"summary__amount__row"},[s("span",[t._v(t._s(t.i19subtotal))]),s("div",[t._v(t._s(t.formatMoney(t.amount.subtotal)))])]),s("div",{staticClass:"summary__amount__row"},[s("span",[t._v(" "+t._s(t.i19freight)+" "),t.shippingAddress?s("small",[t._v(" "+t._s(t.shippingAddress.street)+" "),t.shippingAddress.number?[t._v(" "+t._s(t.shippingAddress.number)+" ")]:t._e(),t._v(" "+t._s(t.shippingAddress.city)+" "+t._s(t.shippingAddress.province_code)+" ")],2):t._e()]),s("div",[t._v(t._s(t.formatMoney(t.amount.freight)))])]),t.amount.discount?s("div",{staticClass:"summary__amount__row"},[s("span",[t._v(t._s(t.i19discount))]),s("div",[t._v(t._s(t.formatMoney(t.amount.discount)))])]):t._e(),s("div",{staticClass:"summary__amount__row summary__amount__row--total"},[s("span",[t._v(t._s(t.i19total))]),t.canShowPriceOptions?s("a-prices",{attrs:{product:{price:t.amount.total},"discount-option":{value:t.amount.discount},"is-literal":!0}}):s("div",[t._v(" "+t._s(t.formatMoney(t.amount.total))+" ")])],1)])]),t._t("default"),t._t("buyer",[t.buyer?s("div",{staticClass:"summary__buyer"},[s("h5",[t._v(t._s(t.i19buyer))]),s("p",[t._v(" "+t._s(t.buyerName)+" "),s("br"),s("small",[t._v(t._s(t.i19docNumber)+":")]),t._v(" "+t._s(t.buyer.doc_number)+" "),s("br"),s("small",[t._v(t._s(t.i19contactPhone)+":")]),t._v(" "+t._s(t.buyerPhone)+" ")]),s("button",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{type:"button"},on:{click:function(e){return t.$emit("click:account")}}},[s("i",{staticClass:"fas fa-pencil-alt mr-1"}),t._v(" "+t._s(t.i19myAccount)+" ")])]):t._e()])],2)}),[],!1,null,null,null);e.a=g.exports},279:function(t,e,s){var i=s(344);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,s(172).default)("4f0cd786",i,!0,{})},343:function(t,e,s){"use strict";var i=s(279);s.n(i).a},344:function(t,e,s){(e=s(171)(!0)).push([t.i,".summary__item{display:flex;align-items:flex-start;overflow-x:hidden;margin-bottom:.5rem}.summary__item a{color:inherit}.summary__item picture{flex:0 0 70px;width:70px;height:auto;margin-right:.5rem}.summary__item small{line-height:1.3;display:inline-block}.summary__amount{margin:1rem 0 1.5rem;padding:.75rem 0;border-top:1px dotted var(--gray)}.summary__amount:last-child{margin-bottom:0;padding-bottom:0}.summary__amount__row{display:flex;justify-content:space-between;align-items:center;margin-top:.25rem}.summary__amount__row>span{font-weight:300}.summary__amount__row>span small{display:block;line-height:1.15;color:var(--gray)}.summary__amount__row--total{margin-top:.5rem;font-size:1.25rem}.summary__amount__row--total>div{font-weight:700}.summary__amount__row--total strong{color:var(--secondary)}.summary .prices{text-align:right}","",{version:3,sources:["EcSummary.scss"],names:[],mappings:"AAIE,eACE,YAAa,CACb,sBAAsB,CACtB,iBAAkB,CAClB,mBAAoB,CAJrB,iBAOG,aAAc,CAPjB,uBAWG,aAAc,CACd,UAAW,CACX,WAAY,CACZ,kBAAmB,CAdtB,qBAkBG,eAAgB,CAChB,oBAAqB,CACtB,iBAID,oBAAqB,CACrB,gBAAiB,CACjB,iCAAkC,CAHnC,4BAMG,eAAgB,CAChB,gBAAiB,CAClB,sBAGC,YAAa,CACb,6BAA8B,CAC9B,kBAAmB,CACnB,iBAAkB,CAJnB,2BAOG,eAAgB,CAPnB,iCAUK,aAAc,CACd,gBAAiB,CACjB,iBAAkB,CACnB,6BAID,gBAAiB,CACjB,iBAAkB,CAFnB,iCAKG,eAAiB,CALpB,oCASG,sBAAuB,CA3DjC,iBAkEI,gBAAiB",file:"EcSummary.scss",sourcesContent:["$primary: #1497b8; $secondary: #669199; $settings-theme: (\n  bootswatch: _\n); \n.summary {\n  &__item {\n    display: flex;\n    align-items:flex-start;\n    overflow-x: hidden;\n    margin-bottom: .5rem;\n\n    a {\n      color: inherit;\n    }\n\n    picture {\n      flex: 0 0 70px;\n      width: 70px;\n      height: auto;\n      margin-right: .5rem;\n    }\n\n    small {\n      line-height: 1.3;\n      display: inline-block;\n    }\n  }\n\n  &__amount {\n    margin: 1rem 0 1.5rem;\n    padding: .75rem 0;\n    border-top: 1px dotted var(--gray);\n\n    &:last-child {\n      margin-bottom: 0;\n      padding-bottom: 0;\n    }\n\n    &__row {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      margin-top: .25rem;\n\n      > span {\n        font-weight: 300;\n\n        small {\n          display: block;\n          line-height: 1.15;\n          color: var(--gray);\n        }\n      }\n\n      &--total {\n        margin-top: .5rem;\n        font-size: 1.25rem;\n\n        > div {\n          font-weight: bold;\n        }\n\n        strong {\n          color: var(--secondary);\n        }\n      }\n    }\n  }\n\n  .prices {\n    text-align: right;\n  }\n}\n"]}]),t.exports=e},69:function(t,e,s){"use strict";const i="undefined"!=typeof document&&document.documentMode,a={rootMargin:"0px",threshold:0,load(t){if("picture"===t.nodeName.toLowerCase()){let e=t.querySelector("img"),s=!1;null===e&&(e=document.createElement("img"),s=!0),i&&t.getAttribute("data-iesrc")&&(e.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(e.alt=t.getAttribute("data-alt")),s&&t.append(e)}if("video"===t.nodeName.toLowerCase()&&!t.getAttribute("data-src")&&t.children){const e=t.children;let s;for(let t=0;t<=e.length-1;t++)s=e[t].getAttribute("data-src"),s&&(e[t].src=s);t.load()}t.getAttribute("data-poster")&&(t.poster=t.getAttribute("data-poster")),t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset"));let e=",";if(t.getAttribute("data-background-delimiter")&&(e=t.getAttribute("data-background-delimiter")),t.getAttribute("data-background-image"))t.style.backgroundImage=`url('${t.getAttribute("data-background-image").split(e).join("'),url('")}')`;else if(t.getAttribute("data-background-image-set")){const s=t.getAttribute("data-background-image-set").split(e);let i=s[0].substr(0,s[0].indexOf(" "))||s[0];i=-1===i.indexOf("url(")?`url(${i})`:i,1===s.length?t.style.backgroundImage=i:t.setAttribute("style",(t.getAttribute("style")||"")+`background-image: ${i}; background-image: -webkit-image-set(${s}); background-image: image-set(${s})`)}t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded(){}};function n(t){t.setAttribute("data-loaded",!0)}const r=t=>"true"===t.getAttribute("data-loaded"),o=(t,e=document)=>t instanceof Element?[t]:t instanceof NodeList?t:e.querySelectorAll(t);e.a=function(t=".lozad",e={}){const{root:s,rootMargin:i,threshold:c,load:l,loaded:u}=Object.assign({},a,e);let m;"undefined"!=typeof window&&window.IntersectionObserver&&(m=new IntersectionObserver(((t,e)=>(s,i)=>{s.forEach(s=>{(s.intersectionRatio>0||s.isIntersecting)&&(i.unobserve(s.target),r(s.target)||(t(s.target),n(s.target),e(s.target)))})})(l,u),{root:s,rootMargin:i,threshold:c}));const d=o(t,s);for(let t=0;t<d.length;t++)(p=d[t]).getAttribute("data-placeholder-background")&&(p.style.background=p.getAttribute("data-placeholder-background"));var p;return{observe(){const e=o(t,s);for(let t=0;t<e.length;t++)r(e[t])||(m?m.observe(e[t]):(l(e[t]),n(e[t]),u(e[t])))},triggerLoad(t){r(t)||(l(t),n(t),u(t))},observer:m}}}}]);
//# sourceMappingURL=2fe040c213495504b672.js.map