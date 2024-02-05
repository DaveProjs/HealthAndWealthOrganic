!function(t){"use strict";var i={id:0,title:"",display:0,status:"",order:"default",orderby:"desc",spacing:30,paging:0,perPage:0,transition:"fade",transitionEase:"easeInOutQuint",transitionSpeed:1.5,autoplay:0,autoplayPause:0,autoplaySpeed:8,height:0,heightEase:"easeInOutQuint",heightSpeed:1.5,arrows:"none",arrowsIconColor:"",arrowsBgColor:"",arrowsPosition:"center",arrowsPadding:{},arrowsStatic:0,navPrev:'<i class="fas fa-angle-left"></i>',navNext:'<i class="fas fa-angle-right"></i>',bullets:"none",bulletsColor:"",bulletsColorActive:"",bulletsPosition:"bottomCenter",bulletsSpacing:2,bulletsPadding:{},bullet:"",maxWidth:"",bgColor:"",padding:{},margin:{},borderColor:"",borderStyle:{},borderWidth:{},borderRadius:{},contentsBgColor:"",contentsPadding:{},contentsBorderColor:"",contentsBorderStyle:{},contentsBorderWidth:{},contentsBorderRadius:{},pageBgColor:"",pagePadding:{},pageBorderColor:"",pageBorderStyle:{},pageBorderWidth:{},pageBorderRadius:{},itemTypography:{},itemTextColor:"",itemLinkColor:"",itemBgColor:"",itemBorderColor:"",itemBorderStyle:{},itemBorderWidth:{},itemBorderRadius:{},itemPadding:{},titleDisplay:"none",titleContentsSize:"stretch",titleContentsPosition:"start",titleElement:"h3",titleElementPosition:"start",titleElementVerticalPosition:"start",titleTypography:{},titleMinWidth:"",titleMaxWidth:"",titleMinHeight:"",titleMaxHeight:"",titleColor:"",titleLinkColor:"",titleBgColor:"",titleMargin:{},titlePadding:{},titleBorderColor:"",titleBorderStyle:{},titleBorderWidth:{},titleBorderRadius:{},page:0,showEditor:0,items:[]},e=function(e,s){this.displayType="list",this.elmt=e,this.$elmt=t(e),this.$title=null,this.$titleContents=null,this.$contents=null,this.settings=t.extend({},i,t.ditty_list.defaults,s),this.total=this.settings.items.length,this.totalPages=1,this.page=this.settings.page,this.pages=[],this.initItems=[...this.settings.items],this.enabledItems=[],this.visibleItems=[],this.editItem=null,this.settings.items=dittyOrderItems(this.initItems,this.settings),this._init()};e.prototype={_init:function(){0===this.total&&this.$elmt.hide(),this.$elmt.removeClass("ditty--pre"),this.$elmt.addClass("ditty ditty-list"),this.$elmt.attr("data-id",this.settings.id),this.$elmt.attr("data-type",this.displayType),this.$elmt.attr("data-display",this.settings.display),this.$contents=t('<div class="ditty__contents"></div>'),this.$elmt.append(this.$contents),this.$title=t('<div class="ditty__title"></div>'),this.$titleContents=t('<div class="ditty__title__contents"></div>'),this.$title.append(this.$titleContents),this._upgrades(),this._styleDisplay(),this._styleTitle(),this._calculatePages(),this._initSlider(),this.settings.showEditor?dittyEditorInit(this):this.trigger("start_live_updates")},_upgrades:function(){this.settings.titleFontSize&&(this.settings.titleTypography.fontSize=this.settings.titleFontSize,delete this.settings.titleFontSize),this.settings.titleLineHeight&&(this.settings.titleTypography.lineHeight=this.settings.titleLineHeight,delete this.settings.titleFontSize)},_initSlider:function(){var i=[];t.each(this.settings,(function(t,e){var s=t.replace("page","slide");i[s]=e})),i.slides=this.pages,this.$contents.ditty_slider(i),this.$contents.on("ditty_slider_init",{self:this},this._triggerInit),this.$contents.on("ditty_slider_update",{self:this},this._triggerUpdate),this.$contents.on("ditty_slider_after_slide_update",{self:this},this._triggerShowSlide)},_destroySlider:function(){this.$contents.ditty_slider&&(this.$contents.off("ditty_slider_init",{self:this},this._triggerInit),this.$contents.off("ditty_slider_update",{self:this},this._triggerUpdate),this.$contents.off("ditty_slider_after_slide_update",{self:this},this._triggerShowSlide),this.$contents.ditty_slider("destroy"))},_updateSlider:function(t){var i=t||this.$contents.ditty_slider("options","slide");this.$contents.ditty_slider("options","slides",this.settings.pages),this.$contents.ditty_slider("options","slide",-1),this.$contents.ditty_slider("showSlide",i)},_styleDisplay:function(){this.$elmt.css({maxWidth:this.settings.maxWidth,background:this.settings.bgColor,borderColor:this.settings.borderColor,borderStyle:this.settings.borderStyle}),this.$elmt.css(this.settings.borderRadius),this.$elmt.css(this.settings.borderWidth),this.$elmt.css(this.settings.margin),this.$elmt.css(this.settings.padding),dittyRenderDisplayCss(this.settings,this.settings.display)},_styleTitle:function(){this.$elmt.attr("data-title",this.settings.titleDisplay);const i=this.settings.titleContentsPosition?this.settings.titleContentsPosition:this.settings.titleElementPosition,e=this.settings.titleElementVerticalPosition?this.settings.titleElementVerticalPosition:this.settings.titleElementPosition;if(this.$elmt.attr("data-title_position",i),this.$elmt.attr("data-title_horizontal_position",this.settings.titleElementPosition),this.$elmt.attr("data-title_vertical_position",e),"none"===this.settings.titleDisplay)this.$title.remove();else{var s=t("<"+this.settings.titleElement+' class="ditty__title__element">'+this.settings.title+"</"+this.settings.titleElement+">");this.$titleContents.css({background:this.settings.titleBgColor,borderColor:this.settings.titleBorderColor,borderStyle:this.settings.titleBorderStyle,width:"auto"===this.settings.titleContentsSize?"auto":"100%",height:"auto"===this.settings.titleContentsSize?"auto":"100%",minWidth:this.settings.titleMinWidth,maxWidth:this.settings.titleMaxWidth,minHeight:this.settings.titleMinHeight,maxHeight:this.settings.titleMaxHeight}),this.$titleContents.css(this.settings.titleBorderRadius),this.$titleContents.css(this.settings.titleBorderWidth),this.$titleContents.css(this.settings.titlePadding),this.$title.css(this.settings.titleMargin),this.$titleContents.html(s),this.$elmt.prepend(this.$title)}},_styleItem:function(t){t.children(".ditty-item__elements").css({background:this.settings.itemBgColor,borderColor:this.settings.itemBorderColor,borderStyle:this.settings.itemBorderStyle}),t.children(".ditty-item__elements").css(this.settings.itemPadding),t.children(".ditty-item__elements").css(this.settings.itemBorderRadius),t.children(".ditty-item__elements").css(this.settings.itemBorderWidth),t.css({paddingBottom:this.settings.spacing+"px"})},_createPage:function(i){var e=this,s=t('<div class="ditty-list__page ditty-list__page--'+i+'"></div>'),n=this._getItemsByPageIndex(i);return t.each(n,(function(i,n){var a=t(n.html);e._styleItem(a),n.css&&dittyLayoutCss(n.css,n.layout_id),s.append(a)})),s.children().last().css({paddingBottom:0}),{id:"page"+parseInt(i+1),html:s,items:n}},_calculatePages:function(){var i=this,e=[];t.each(this.settings.items,(function(t,s){i._isItemEnabled(t)&&e.push(s)})),this.enabledItems=e,this.total=e.length,parseInt(this.settings.paging)&&parseInt(this.settings.perPage)>0?this.totalPages=Math.ceil(parseInt(this.total)/parseInt(this.settings.perPage)):this.totalPages=1,this.pages=[];for(var s=0;s<this.totalPages;s++)this.pages.push(this._createPage(s))},_getPageByItemIndex:function(t){return Math.ceil((parseInt(t)+1)/this.settings.perPage)-1},_getItemsByPageIndex:function(t){var i=this.enabledItems;if(parseInt(this.totalPages)>1){var e=parseInt(this.settings.perPage)*t,s=e+parseInt(this.settings.perPage);i=this.enabledItems.slice(e,s)}return i},_isItemEnabled:function(t){return!(void 0===this.settings.items[parseInt(t)]||void 0!==this.settings.items[parseInt(t)].is_disabled&&this.settings.items[parseInt(t)].is_disabled.length>0)},_disabledItemsStatus:function(){var i=this,e={};return t.each(this.settings.items,(function(t,s){i._isItemEnabled(t)?e[s.id]="enabled":e[s.id]="disabled"})),e},addItemDisabled:function(t,i){},removeItemDisabled:function(t,i){},showItem:function(i){var e=[];if(t.each(this.settings.items,(function(t,s){String(s.id)===String(i)&&e.push(t)})),0!==e.length){var s=this._getPageByItemIndex(parseInt(e[0]));this.$contents.ditty_slider("showSlide",s)}},addItem:function(t,i,e){if(!this.$contents.ditty_slider("options","slides").length){this.settings.items=[t],this._calculatePages();var s=this.pages[0];return this.$contents.ditty_slider("addSlide",s,0),!1}var n=this.settings.items.slice(),a=!0;(i>=this.total||i<0)&&(a=!1),"replace"===e&&a?n.splice(i,1,t):null===i||""===i?n.splice(parseInt(this.item)+1,0,t):i>=this.total?n.push(t):i<0?n.splice(0,0,t):n.splice(i,0,t),this.updateItems(n)},deleteItem:function(i){var e=[];t.each(this.settings.items,(function(t,s){String(s.id)!==String(i)&&e.push(s)})),this.updateItems(e)},loadItems:function(){let i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"animate";if(this.initItems=i,i=dittyOrderItems(i,this.settings),!this.$contents.ditty_slider("options","slides").length){this.settings.items=i,this._calculatePages();var s=this.pages[0];return this.$contents.ditty_slider("addSlide",s,0),!1}const{updatedItems:n,updatedIndexes:a}=dittyGetUpdatedItemData(this.settings.items,i);this.settings.items=n,this.total=n.length,this._calculatePages(),this.$contents.ditty_slider("options","slides",this.pages);var l=this.$contents.ditty_slider("options","currentSlide"),r=l?l.children(".ditty-item"):[],d=this.$contents.ditty_slider("options","slide"),o=this.settings.paging&&1===parseInt(this.settings.paging)?parseInt(this.settings.perPage)*d:0,h=this.settings.paging&&1===parseInt(this.settings.paging)?parseInt(this.settings.perPage)*d+parseInt(this.settings.perPage)-1:r.length+n.length,g=[];if(l){let i=0;for(var c=o;c<=h;c++){if(-1!==a.indexOf(c)){const e=t(n[c].html);if(n[c].css&&dittyLayoutCss(n[c].css,n[c].layout_id,"update"),this._styleItem(e),r[i])g.push({currentItem:t(r[i]),newItem:e});else{var p=t('<div class="ditty-temp-item"></div>');l.append(p),g.push({currentItem:p,newItem:e})}}else i+o>=this.total&&r[i]&&g.push({currentItem:t(r[i]),newItem:t('<div class="ditty-temp-item"></div>')});i++}}else this.total>0&&this.$contents.ditty_slider("showSlide",0);0===this.total?this.$elmt.hide():this.$elmt.show(),dittyUpdateItems(g,e),this.trigger("update")},updateItems:function(i,e,s,n){if(void 0===i)return!1;if(!this.$contents.ditty_slider("options","slides").length){this.settings.items=i,this._calculatePages();var a=this.pages[0];return this.$contents.ditty_slider("addSlide",a,0),!1}var l=this,r=this.$contents.ditty_slider("options","slide"),d=[];if(e){var o=this.settings.items.slice(),h=[],g=!1;t.each(o,(function(n,a){String(a.id)===String(e)?"after"===s?(h.push(a),t.each(i,(function(t,i){h.push(i)})),g=!0):"before"===s?(t.each(i,(function(t,i){h.push(i)})),h.push(a),g=!0):g||(t.each(i,(function(t,i){h.push(i),d.push(String(i.uniq_id))})),g=!0):h.push(a)})),g||(t.each(this.settings.items,(function(t,i){h.push(i)})),g=!0),i=h}this.settings.items=i,this.total=i.length,this._calculatePages(),this.$contents.ditty_slider("options","slides",this.pages);var c=this.$contents.ditty_slider("options","currentSlide"),p=c.children(".ditty-item"),m=this.$contents.ditty_slider("options","slide"),u=[];if(r!==m)return!1;var y,_=0,f=null,I=-1,$=[];this.pages[m]&&(y=this.pages[m].items,_=y.length,t.each(y,(function(i,e){var s=t(e.html);if(e.css&&dittyLayoutCss(e.css,e.layout_id),l._styleItem(s),i===_-1&&s.css({paddingBottom:0}),p[i]){var a=t(p[i]);f=a,$.push(i),(n||String(a.data("item_uniq_id"))!==String(e.uniq_id)||d.includes(String(e.uniq_id)))&&u.push({currentItem:a,newItem:s})}else{var r=t('<div class="ditty-temp-item"></div>');c.append(r),u.push({currentItem:r,newItem:s}),I=parseInt(l.settings.spacing)}}))),t.each(p,(function(i){if(!$.includes(i)){var e=t(p[i]),s=t('<div class="ditty-temp-item"></div>');u.push({currentItem:e,newItem:s}),I=0}})),null!==f&&I>=0&&f.css({paddingBottom:I+"px"}),0===this.total?this.$elmt.hide():this.$elmt.show(),dittyUpdateItems(u),this.trigger("update")},getActiveItems:function(){return this._getItemsByPageIndex(this.page)},_triggerInit:function(t){t.data.self.trigger("init")},_triggerUpdate:function(t){t.data.self.trigger("update")},_triggerShowSlide:function(t,i){var e=t.data.self;e.page=i,e.trigger("active_items_update")},trigger:function(i){var e=[];switch(i){case"active_items_update":e=[this,this.getActiveItems()];break;case"disabled_items_update":e=[this._disabledItemsStatus()];break;case"start_live_updates":e=[this.settings.id];break;default:e=[this.settings,this.$elmt]}this.$elmt.trigger("ditty_"+i,e),"function"==typeof this.settings[i]&&this.settings[i].apply(this.$elmt,e),t("body").trigger("ditty_"+i,e)},_getOption:function(t){switch(t){case"ditty":return this;case"type":return this.displayType;case"display":return this.settings.display;case"items":return this.initItems;default:return this.settings[t]}},_setOption:function(i,e){if(void 0===e)return!1;var s=i,n=e,a=!0,l=this;switch(i){case"items":a=!1,this.updateItems(e);break;case"orderby":case"order":a=!1,this.settings[i]=e,this.loadItems(this.initItems,"static");break;case"perPage":case"paging":a=!1,this.settings[i]=e,this._calculatePages(),this.$contents.ditty_slider("options",{slides:this.pages,transitionSpeed:0,heightSpeed:0}),this.$contents.ditty_slider("showSlide"),this.$contents.ditty_slider("options",{transitionSpeed:this.settings.transitionSpeed,heightSpeed:this.settings.heightSpeed});break;case"spacing":this.settings[i]=e,this.$elmt.find(".ditty-item").each((function(){t(this).css({paddingBottom:l.settings.spacing+"px"})})),this.$elmt.find(".ditty-list__page").each((function(){t(this).children(".ditty-item:last-child").css({paddingBottom:0})}));break;case"title":case"titleDisplay":case"titleContentsSize":case"titleContentsPosition":case"titleElement":case"titleElementPosition":case"titleElementVerticalPosition":case"titleMinWidth":case"titleMaxWidth":case"titleMinHeight":case"titleMaxHeight":case"titleBgColor":case"titleMargin":case"titlePadding":case"titleBorderColor":case"titleBorderStyle":case"titleBorderWidth":case"titleBorderRadius":a=!1,this.settings[i]=e,this._styleTitle();break;case"maxWidth":case"bgColor":case"padding":case"margin":case"borderColor":case"borderStyle":case"borderWidth":case"borderRadius":case"titleTypography":case"titleColor":case"titleLinkColor":case"itemTypography":case"itemTextColor":case"itemLinkColor":a=!1,this.settings[i]=e,this._styleDisplay();break;case"itemBgColor":case"itemBorderColor":case"itemBorderStyle":case"itemBorderWidth":case"itemBorderRadius":case"itemPadding":this.settings[i]=e,this.$elmt.find(".ditty-item").each((function(){l._styleItem(t(this))}));break;default:this.settings[i]=e}a&&(s=s.replace("page","slide"),this.$contents.ditty_slider("options",s,n))},options:function(i,e){var s=this;if("object"==typeof i)t.each(i,(function(t,i){s._setOption(t,i)}));else{if("string"!=typeof i)return s.settings;if(void 0===e)return s._getOption(i);s._setOption(i,e)}},destroy:function(){this._destroySlider(),this.$elmt.removeClass("ditty ditty-list"),this.$elmt.removeAttr("data-id"),this.$elmt.removeAttr("data-type"),this.$elmt.removeAttr("data-display"),this.$elmt.removeAttr("style"),this.$elmt.empty(),this.elmt._ditty_list=null}},t.fn.ditty_list=function(t){var i,s=arguments,n=!1;if(void 0===t||"object"==typeof t)return this.each((function(){this._ditty_list||(this._ditty_list=new e(this,t))}));if("string"==typeof t){if(this.each((function(){var e=this._ditty_list;if(!e)throw new Error("No Ditty_List applied to this element.");"function"==typeof e[t]&&"_"!==t[0]?i=e[t].apply(e,[].slice.call(s,1)):n=!0})),n)throw new Error('No method "'+t+'" in Ditty_List.');return void 0!==i?i:this}},t.ditty_list={},t.ditty_list.defaults=i}(jQuery);