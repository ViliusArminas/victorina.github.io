"use strict";(self.webpackChunkprotmusis=self.webpackChunkprotmusis||[]).push([[980],{5980:(k,b,d)=>{d.r(b),d.d(b,{ThemesComponent:()=>w});var m=d(6814),o=d(5879),l=d(1193);let u=(()=>{class a{static#t=this.\u0275fac=function(e){return new(e||a)};static#e=this.\u0275mod=o.oAB({type:a});static#o=this.\u0275inj=o.cJS({imports:[l.BQ,l.si,l.BQ]})}return a})();const f=function(a){return{"background-image":a}};function x(a,i){if(1&a){const t=o.EpF();o.TgZ(0,"button",8),o.NdJ("click",function(){const c=o.CHM(t).$implicit,r=o.oxw();return o.KtG(r.onClick(c))}),o.qZA()}if(2&a){const t=i.$implicit,e=o.oxw();o.Q6J("ngStyle",o.VKq(1,f,e.getBackgroundImage(t)))}}let g=(()=>{class a{constructor(){this.data=null,this.questionClick=new o.vpe}getImageUrl(t){return`assets/images/${t}`}onClick(t){this.questionClick.emit({question:t,themeId:this.data?.id??0})}getBackgroundImage(t){return`url("assets/images/button-${t.points}${t.answered?"-disabled":""}.png")`}static#t=this.\u0275fac=function(e){return new(e||a)};static#e=this.\u0275cmp=o.Xpm({type:a,selectors:[["app-card"]],inputs:{data:"data"},outputs:{questionClick:"questionClick"},standalone:!0,features:[o.jDz],decls:9,vars:3,consts:[[1,"flip-card"],[1,"flip-card-inner"],[1,"flip-card-front"],["alt","Avatar",3,"src"],[1,"flip-card-back"],[1,"flip-back-title"],[1,"buttons-container"],["class","btn-image",3,"ngStyle","click",4,"ngFor","ngForOf"],[1,"btn-image",3,"ngStyle","click"]],template:function(e,n){1&e&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div",2),o._UZ(3,"img",3),o.qZA(),o.TgZ(4,"div",4)(5,"h1",5),o._uU(6),o.qZA(),o.TgZ(7,"div",6),o.YNc(8,x,1,3,"button",7),o.qZA()()()()),2&e&&(o.xp6(3),o.Q6J("src",n.getImageUrl(null==n.data?null:n.data.image),o.LSH),o.xp6(3),o.Oqu(null==n.data?null:n.data.title),o.xp6(2),o.Q6J("ngForOf",null==n.data?null:n.data.questions))},dependencies:[m.ez,m.sg,m.PC,u],styles:[".buttons-container[_ngcontent-%COMP%]{display:flex;padding:30px;gap:30px;margin-top:5px;flex-direction:column}.flip-card[_ngcontent-%COMP%]{background-color:transparent;width:240px;height:400px;perspective:1000px;-webkit-perspective:1000px}.flip-card-inner[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;text-align:center;transition:transform 1s;transform-style:preserve-3d;box-shadow:0 4px 8px #0003}.flip-card[_ngcontent-%COMP%]:hover   .flip-card-inner[_ngcontent-%COMP%]{transform:rotateY(180deg)}.flip-card-front[_ngcontent-%COMP%], .flip-card-back[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;backface-visibility:hidden;border-radius:5%}.flip-card-front[_ngcontent-%COMP%]{background-color:#bbb;color:#000}.flip-card-front[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:240px;height:400px;border-radius:5%}.flip-card-back[_ngcontent-%COMP%]{background-size:100% 100%;background-image:url(card-back.be95111a120f5e30.jpg);background-color:transparent;color:#000;transform:rotateY(180deg)}.flip-back-title[_ngcontent-%COMP%]{padding-top:40px;font-family:Abril Fatface;font-size:20px}.btn-image[_ngcontent-%COMP%]{height:45px;width:180px;background-size:100% 100%;background-color:transparent;border:none;cursor:pointer}"]})}return a})();var h=d(2994),_=d(1840),v=d(4221),y=d(3681);function M(a,i){if(1&a){const t=o.EpF();o.ynx(0),o.TgZ(1,"app-card",3),o.NdJ("questionClick",function(n){o.CHM(t);const c=o.oxw();return o.KtG(c.onQuestionClick(n))}),o.qZA(),o.BQk()}if(2&a){const t=i.$implicit;o.xp6(1),o.Q6J("data",t)}}let w=(()=>{class a{constructor(t,e){this.store=t,this.router=e,this.data$=this.store.select(h.tw)}ngOnInit(){}onQuestionClick(t){console.log("test"),this.store.dispatch(_.uz({themeId:t.themeId,questionId:t.question.id})),this.router.navigate(["/question"])}static#t=this.\u0275fac=function(e){return new(e||a)(o.Y36(v.yh),o.Y36(y.F0))};static#e=this.\u0275cmp=o.Xpm({type:a,selectors:[["app-themes"]],standalone:!0,features:[o.jDz],decls:4,vars:3,consts:[[1,"main-container"],[1,"cards-container"],[4,"ngFor","ngForOf"],[3,"data","questionClick"]],template:function(e,n){1&e&&(o.TgZ(0,"div",0)(1,"div",1),o.YNc(2,M,2,1,"ng-container",2),o.ALo(3,"async"),o.qZA()()),2&e&&(o.xp6(2),o.Q6J("ngForOf",o.lcZ(3,1,n.data$)))},dependencies:[m.ez,m.sg,m.Ov,g],styles:[".main-container[_ngcontent-%COMP%]{display:flex;padding:30px;width:auto;justify-content:center}.cards-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;width:auto;padding:0 375px;gap:10px}"]})}return a})()}}]);