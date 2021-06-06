yarn run v1.22.10
$ C:\Users\sco\Desktop\coding\projects\systech2\node_modules\.bin\nunjucks-precompile views/page.njk
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["views/page.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\r\n\r\n\t";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "myDb");
if(t_3) {t_3 = runtime.fromIterator(t_3);
var t_1;
if(runtime.isArray(t_3)) {
var t_2 = t_3.length;
for(t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1][0];
frame.set("[object Object]", t_3[t_1][0]);
var t_5 = t_3[t_1][1];
frame.set("[object Object]", t_3[t_1][1]);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\r\n\t\t<div class=\"day-card\">\r\n\t\t\t<div class=\"day-card-date\">";
output += runtime.suppressValue((lineno = 4, colno = 42, runtime.callWrap(runtime.memberLookup((t_4),"slice"), "date[\"slice\"]", context, [8,10])), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 4, colno = 66, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "numberToMonth"), "numberToMonth", context, [(lineno = 4, colno = 77, runtime.callWrap(runtime.memberLookup((t_4),"slice"), "date[\"slice\"]", context, [5,7]))])), env.opts.autoescape);
output += " <span>";
output += runtime.suppressValue(runtime.memberLookup((t_5),"length"), env.opts.autoescape);
output += "</span></div>\r\n\t\t\t<div class=\"day-card-container hidden\">\r\n\t\t\t\t";
frame = frame.push();
var t_8 = t_5;
if(t_8) {t_8 = runtime.fromIterator(t_8);
var t_6;
if(runtime.isArray(t_8)) {
var t_7 = t_8.length;
for(t_6=0; t_6 < t_8.length; t_6++) {
var t_9 = t_8[t_6][0];
frame.set("[object Object]", t_8[t_6][0]);
var t_10 = t_8[t_6][1];
frame.set("[object Object]", t_8[t_6][1]);
frame.set("loop.index", t_6 + 1);
frame.set("loop.index0", t_6);
frame.set("loop.revindex", t_7 - t_6);
frame.set("loop.revindex0", t_7 - t_6 - 1);
frame.set("loop.first", t_6 === 0);
frame.set("loop.last", t_6 === t_7 - 1);
frame.set("loop.length", t_7);
output += "\r\n\t\t\t\t\r\n\t\t\t\t<div class=\"invoice\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_10),0)),"name"), env.opts.autoescape);
output += " №";
output += runtime.suppressValue(t_9, env.opts.autoescape);
output += "\r\n\t\t\t\t\t<div class=\"goodsQuantity\">Товаров: ";
output += runtime.suppressValue(runtime.memberLookup((t_10),"length"), env.opts.autoescape);
output += "</div>\r\n\t\t\t\t\t";
frame = frame.push();
var t_13 = t_10;
if(t_13) {t_13 = runtime.fromIterator(t_13);
var t_12 = t_13.length;
for(var t_11=0; t_11 < t_13.length; t_11++) {
var t_14 = t_13[t_11];
frame.set("detail", t_14);
frame.set("loop.index", t_11 + 1);
frame.set("loop.index0", t_11);
frame.set("loop.revindex", t_12 - t_11);
frame.set("loop.revindex0", t_12 - t_11 - 1);
frame.set("loop.first", t_11 === 0);
frame.set("loop.last", t_11 === t_12 - 1);
frame.set("loop.length", t_12);
output += "\r\n\t\t\t\t\t<div class=\"entry\">";
output += runtime.suppressValue(runtime.memberLookup((t_14),"name__1"), env.opts.autoescape);
output += " _____цена:";
output += runtime.suppressValue(runtime.memberLookup((t_14),"price"), env.opts.autoescape);
output += " руб.</div>\r\n\t\t\t\t\t";
;
}
}
frame = frame.pop();
output += "\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t";
;
}
} else {
t_6 = -1;
var t_7 = runtime.keys(t_8).length;
for(var t_15 in t_8) {
t_6++;
var t_16 = t_8[t_15];
frame.set("invoice", t_15);
frame.set("details", t_16);
frame.set("loop.index", t_6 + 1);
frame.set("loop.index0", t_6);
frame.set("loop.revindex", t_7 - t_6);
frame.set("loop.revindex0", t_7 - t_6 - 1);
frame.set("loop.first", t_6 === 0);
frame.set("loop.last", t_6 === t_7 - 1);
frame.set("loop.length", t_7);
output += "\r\n\t\t\t\t\r\n\t\t\t\t<div class=\"invoice\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_16),0)),"name"), env.opts.autoescape);
output += " №";
output += runtime.suppressValue(t_15, env.opts.autoescape);
output += "\r\n\t\t\t\t\t<div class=\"goodsQuantity\">Товаров: ";
output += runtime.suppressValue(runtime.memberLookup((t_16),"length"), env.opts.autoescape);
output += "</div>\r\n\t\t\t\t\t";
frame = frame.push();
var t_19 = t_16;
if(t_19) {t_19 = runtime.fromIterator(t_19);
var t_18 = t_19.length;
for(var t_17=0; t_17 < t_19.length; t_17++) {
var t_20 = t_19[t_17];
frame.set("detail", t_20);
frame.set("loop.index", t_17 + 1);
frame.set("loop.index0", t_17);
frame.set("loop.revindex", t_18 - t_17);
frame.set("loop.revindex0", t_18 - t_17 - 1);
frame.set("loop.first", t_17 === 0);
frame.set("loop.last", t_17 === t_18 - 1);
frame.set("loop.length", t_18);
output += "\r\n\t\t\t\t\t<div class=\"entry\">";
output += runtime.suppressValue(runtime.memberLookup((t_20),"name__1"), env.opts.autoescape);
output += " _____цена:";
output += runtime.suppressValue(runtime.memberLookup((t_20),"price"), env.opts.autoescape);
output += " руб.</div>\r\n\t\t\t\t\t";
;
}
}
frame = frame.pop();
output += "\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t";
;
}
}
}
frame = frame.pop();
output += "\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t</div>\r\n\t\t";
;
}
} else {
t_1 = -1;
var t_2 = runtime.keys(t_3).length;
for(var t_21 in t_3) {
t_1++;
var t_22 = t_3[t_21];
frame.set("date", t_21);
frame.set("item", t_22);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\r\n\t\t<div class=\"day-card\">\r\n\t\t\t<div class=\"day-card-date\">";
output += runtime.suppressValue((lineno = 4, colno = 42, runtime.callWrap(runtime.memberLookup((t_21),"slice"), "date[\"slice\"]", context, [8,10])), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 4, colno = 66, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "numberToMonth"), "numberToMonth", context, [(lineno = 4, colno = 77, runtime.callWrap(runtime.memberLookup((t_21),"slice"), "date[\"slice\"]", context, [5,7]))])), env.opts.autoescape);
output += " <span>";
output += runtime.suppressValue(runtime.memberLookup((t_22),"length"), env.opts.autoescape);
output += "</span></div>\r\n\t\t\t<div class=\"day-card-container hidden\">\r\n\t\t\t\t";
frame = frame.push();
var t_25 = t_22;
if(t_25) {t_25 = runtime.fromIterator(t_25);
var t_23;
if(runtime.isArray(t_25)) {
var t_24 = t_25.length;
for(t_23=0; t_23 < t_25.length; t_23++) {
var t_26 = t_25[t_23][0];
frame.set("[object Object]", t_25[t_23][0]);
var t_27 = t_25[t_23][1];
frame.set("[object Object]", t_25[t_23][1]);
frame.set("loop.index", t_23 + 1);
frame.set("loop.index0", t_23);
frame.set("loop.revindex", t_24 - t_23);
frame.set("loop.revindex0", t_24 - t_23 - 1);
frame.set("loop.first", t_23 === 0);
frame.set("loop.last", t_23 === t_24 - 1);
frame.set("loop.length", t_24);
output += "\r\n\t\t\t\t\r\n\t\t\t\t<div class=\"invoice\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_27),0)),"name"), env.opts.autoescape);
output += " №";
output += runtime.suppressValue(t_26, env.opts.autoescape);
output += "\r\n\t\t\t\t\t<div class=\"goodsQuantity\">Товаров: ";
output += runtime.suppressValue(runtime.memberLookup((t_27),"length"), env.opts.autoescape);
output += "</div>\r\n\t\t\t\t\t";
frame = frame.push();
var t_30 = t_27;
if(t_30) {t_30 = runtime.fromIterator(t_30);
var t_29 = t_30.length;
for(var t_28=0; t_28 < t_30.length; t_28++) {
var t_31 = t_30[t_28];
frame.set("detail", t_31);
frame.set("loop.index", t_28 + 1);
frame.set("loop.index0", t_28);
frame.set("loop.revindex", t_29 - t_28);
frame.set("loop.revindex0", t_29 - t_28 - 1);
frame.set("loop.first", t_28 === 0);
frame.set("loop.last", t_28 === t_29 - 1);
frame.set("loop.length", t_29);
output += "\r\n\t\t\t\t\t<div class=\"entry\">";
output += runtime.suppressValue(runtime.memberLookup((t_31),"name__1"), env.opts.autoescape);
output += " _____цена:";
output += runtime.suppressValue(runtime.memberLookup((t_31),"price"), env.opts.autoescape);
output += " руб.</div>\r\n\t\t\t\t\t";
;
}
}
frame = frame.pop();
output += "\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t";
;
}
} else {
t_23 = -1;
var t_24 = runtime.keys(t_25).length;
for(var t_32 in t_25) {
t_23++;
var t_33 = t_25[t_32];
frame.set("invoice", t_32);
frame.set("details", t_33);
frame.set("loop.index", t_23 + 1);
frame.set("loop.index0", t_23);
frame.set("loop.revindex", t_24 - t_23);
frame.set("loop.revindex0", t_24 - t_23 - 1);
frame.set("loop.first", t_23 === 0);
frame.set("loop.last", t_23 === t_24 - 1);
frame.set("loop.length", t_24);
output += "\r\n\t\t\t\t\r\n\t\t\t\t<div class=\"invoice\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_33),0)),"name"), env.opts.autoescape);
output += " №";
output += runtime.suppressValue(t_32, env.opts.autoescape);
output += "\r\n\t\t\t\t\t<div class=\"goodsQuantity\">Товаров: ";
output += runtime.suppressValue(runtime.memberLookup((t_33),"length"), env.opts.autoescape);
output += "</div>\r\n\t\t\t\t\t";
frame = frame.push();
var t_36 = t_33;
if(t_36) {t_36 = runtime.fromIterator(t_36);
var t_35 = t_36.length;
for(var t_34=0; t_34 < t_36.length; t_34++) {
var t_37 = t_36[t_34];
frame.set("detail", t_37);
frame.set("loop.index", t_34 + 1);
frame.set("loop.index0", t_34);
frame.set("loop.revindex", t_35 - t_34);
frame.set("loop.revindex0", t_35 - t_34 - 1);
frame.set("loop.first", t_34 === 0);
frame.set("loop.last", t_34 === t_35 - 1);
frame.set("loop.length", t_35);
output += "\r\n\t\t\t\t\t<div class=\"entry\">";
output += runtime.suppressValue(runtime.memberLookup((t_37),"name__1"), env.opts.autoescape);
output += " _____цена:";
output += runtime.suppressValue(runtime.memberLookup((t_37),"price"), env.opts.autoescape);
output += " руб.</div>\r\n\t\t\t\t\t";
;
}
}
frame = frame.pop();
output += "\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t";
;
}
}
}
frame = frame.pop();
output += "\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t</div>\r\n\t\t";
;
}
}
}
frame = frame.pop();
output += "\r\n\r\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

Done in 0.15s.
