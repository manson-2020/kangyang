var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = {};
var __WXML_GLOBAL__ = {
  entrys: {},
  defines: {},
  modules: {},
  ops: [],
  wxs_nf_init: undefined,
  total_ops: 0
};
var $gwx;

/*v0.5vv_20190312_syb_scopedata*/window.__wcc_version__='v0.5vv_20190312_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'about page;'])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'addElderly page;'])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'conclusion page;'])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'enclosure page;'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'root'])
Z([3,'home page ;'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'root pl-60 pr-60 height-100vh'])
Z([3,'footer jc-sb fd-row mb-90 ai-center'])
Z([[7],[3,'isSignIn']])
Z([3,'fd-row fs-30 fw-500'])
Z([3,'color-666'])
Z([3,'还没有账号？'])
Z([3,'__e'])
Z([3,'color-2d6dcc'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'todo']],[[4],[[5],[1,false]]]]]]]]]]])
Z([3,'去创建'])
Z(z[6])
Z([3,'logo-step'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'todo']],[[4],[[5],[1,true]]]]]]]]]]])
Z([3,'/static/imgs/logo-previous.png'])
Z(z[11])
Z([3,'/static/imgs/logo-next.png'])
Z([3,'main mr-40 mt-100 f1'])
Z([3,'input-container pb-36 jc-sa'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'inputLists']])
Z(z[18])
Z([3,'fs-30 fw-500'])
Z([a,[[6],[[7],[3,'item']],[3,'title']]])
Z([3,'input height-70 mt-10 fs-30 color-2e'])
Z([[6],[[7],[3,'item']],[3,'placeholder']])
Z([3,'fs-30'])
Z([[6],[[7],[3,'item']],[3,'type']])
Z([[6],[[7],[3,'item']],[3,'forgetPassword']])
Z([3,'fs-30 color-2e mt-24 text-right mr-6'])
Z([3,'忘记密码'])
Z([3,'header mb-88'])
Z([3,'logo-index'])
Z([3,'/static/imgs/logo-index.png'])
Z([3,'color-01 fs-66 fw-700 mt-58'])
Z([3,'智慧养老'])
Z([3,'color-01 fs-32 mt-26'])
Z([3,'青湖御园'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'kangyang page;'])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'modifyPassword page;'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'my page;'])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'root pl-60 pr-60 height-100vh'])
Z([3,'footer jc-sb fd-row mb-90 ai-center'])
Z([[7],[3,'isSignIn']])
Z([3,'fd-row fs-30 fw-500'])
Z([3,'color-666'])
Z([3,'还没有账号？'])
Z([3,'color-2d6dcc'])
Z([3,'去创建'])
Z([3,'__e'])
Z([3,'logo-step'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'todo']],[[4],[[5],[1,true]]]]]]]]]]])
Z([3,'/static/imgs/logo-previous.png'])
Z(z[8])
Z(z[9])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'todo']],[[4],[[5],[1,false]]]]]]]]]]])
Z([3,'/static/imgs/logo-next.png'])
Z([3,'main mr-40 mt-100 f1'])
Z([3,'input-container pb-36 jc-sa'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'inputLists']])
Z(z[18])
Z([3,'fs-30 fw-500'])
Z([a,[[6],[[7],[3,'item']],[3,'title']]])
Z([3,'input height-70 mt-10 fs-30 color-2e'])
Z([[6],[[7],[3,'item']],[3,'placeholder']])
Z([3,'fs-30'])
Z([[6],[[7],[3,'item']],[3,'type']])
Z([[6],[[7],[3,'item']],[3,'forgetPassword']])
Z([3,'fs-30 color-2e mt-24 text-right mr-6'])
Z([3,'忘记密码'])
Z([3,'header mb-88'])
Z([3,'logo-index'])
Z([3,'/static/imgs/logo-index.png'])
Z([3,'color-01 fs-66 fw-700 mt-58'])
Z([3,'智慧养老'])
Z([3,'color-01 fs-32 mt-26'])
Z([3,'青湖御园'])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'remoteDoor page;'])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'setting page;'])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'userInfo page;'])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'warning page;'])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./pages/about.wxml','./pages/addElderly.wxml','./pages/conclusion.wxml','./pages/enclosure.wxml','./pages/home.wxml','./pages/index.wxml','./pages/kangyang.wxml','./pages/login.wxml','./pages/modifyPassword.wxml','./pages/my.wxml','./pages/register.wxml','./pages/remoteDoor.wxml','./pages/setting.wxml','./pages/userInfo.wxml','./pages/warning.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_n('view')
var xC=_oz(z,0,e,s,gg)
_(oB,xC)
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var fE=_n('view')
var cF=_oz(z,0,e,s,gg)
_(fE,cF)
_(r,fE)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var oH=_n('view')
var cI=_oz(z,0,e,s,gg)
_(oH,cI)
_(r,oH)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var lK=_n('view')
var aL=_oz(z,0,e,s,gg)
_(lK,aL)
_(r,lK)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var eN=_n('view')
_rz(z,eN,'class',0,e,s,gg)
var bO=_oz(z,1,e,s,gg)
_(eN,bO)
_(r,eN)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var xQ=_n('view')
_rz(z,xQ,'class',0,e,s,gg)
var oR=_n('view')
_rz(z,oR,'class',1,e,s,gg)
var fS=_v()
_(oR,fS)
if(_oz(z,2,e,s,gg)){fS.wxVkey=1
var cT=_n('view')
_rz(z,cT,'class',3,e,s,gg)
var hU=_n('text')
_rz(z,hU,'class',4,e,s,gg)
var oV=_oz(z,5,e,s,gg)
_(hU,oV)
_(cT,hU)
var cW=_mz(z,'text',['bindtap',6,'class',1,'data-event-opts',2],[],e,s,gg)
var oX=_oz(z,9,e,s,gg)
_(cW,oX)
_(cT,cW)
_(fS,cT)
}
else{fS.wxVkey=2
var lY=_mz(z,'image',['bindtap',10,'class',1,'data-event-opts',2,'src',3],[],e,s,gg)
_(fS,lY)
}
var aZ=_mz(z,'image',['class',14,'src',1],[],e,s,gg)
_(oR,aZ)
fS.wxXCkey=1
_(xQ,oR)
var t1=_n('view')
_rz(z,t1,'class',16,e,s,gg)
var e2=_n('view')
_rz(z,e2,'class',17,e,s,gg)
var b3=_v()
_(e2,b3)
var o4=function(o6,x5,f7,gg){
var h9=_n('view')
var cAB=_n('text')
_rz(z,cAB,'class',22,o6,x5,gg)
var oBB=_oz(z,23,o6,x5,gg)
_(cAB,oBB)
_(h9,cAB)
var lCB=_mz(z,'input',['class',24,'placeholder',1,'placeholderClass',2,'type',3],[],o6,x5,gg)
_(h9,lCB)
var o0=_v()
_(h9,o0)
if(_oz(z,28,o6,x5,gg)){o0.wxVkey=1
var aDB=_n('text')
_rz(z,aDB,'class',29,o6,x5,gg)
var tEB=_oz(z,30,o6,x5,gg)
_(aDB,tEB)
_(o0,aDB)
}
o0.wxXCkey=1
_(f7,h9)
return f7
}
b3.wxXCkey=2
_2z(z,20,o4,e,s,gg,b3,'item','index','index')
_(t1,e2)
var eFB=_n('view')
_rz(z,eFB,'class',31,e,s,gg)
var bGB=_mz(z,'image',['class',32,'src',1],[],e,s,gg)
_(eFB,bGB)
var oHB=_n('text')
_rz(z,oHB,'class',34,e,s,gg)
var xIB=_oz(z,35,e,s,gg)
_(oHB,xIB)
_(eFB,oHB)
var oJB=_n('text')
_rz(z,oJB,'class',36,e,s,gg)
var fKB=_oz(z,37,e,s,gg)
_(oJB,fKB)
_(eFB,oJB)
_(t1,eFB)
_(xQ,t1)
_(r,xQ)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var hMB=_n('view')
var oNB=_oz(z,0,e,s,gg)
_(hMB,oNB)
_(r,hMB)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var oPB=_mz(z,'login',['bind:__l',0,'vueId',1],[],e,s,gg)
_(r,oPB)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var aRB=_n('view')
var tSB=_oz(z,0,e,s,gg)
_(aRB,tSB)
_(r,aRB)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var bUB=_n('view')
var oVB=_oz(z,0,e,s,gg)
_(bUB,oVB)
_(r,bUB)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var oXB=_n('view')
_rz(z,oXB,'class',0,e,s,gg)
var fYB=_n('view')
_rz(z,fYB,'class',1,e,s,gg)
var cZB=_v()
_(fYB,cZB)
if(_oz(z,2,e,s,gg)){cZB.wxVkey=1
var h1B=_n('view')
_rz(z,h1B,'class',3,e,s,gg)
var o2B=_n('text')
_rz(z,o2B,'class',4,e,s,gg)
var c3B=_oz(z,5,e,s,gg)
_(o2B,c3B)
_(h1B,o2B)
var o4B=_n('text')
_rz(z,o4B,'class',6,e,s,gg)
var l5B=_oz(z,7,e,s,gg)
_(o4B,l5B)
_(h1B,o4B)
_(cZB,h1B)
}
else{cZB.wxVkey=2
var a6B=_mz(z,'image',['bindtap',8,'class',1,'data-event-opts',2,'src',3],[],e,s,gg)
_(cZB,a6B)
}
var t7B=_mz(z,'image',['bindtap',12,'class',1,'data-event-opts',2,'src',3],[],e,s,gg)
_(fYB,t7B)
cZB.wxXCkey=1
_(oXB,fYB)
var e8B=_n('view')
_rz(z,e8B,'class',16,e,s,gg)
var b9B=_n('view')
_rz(z,b9B,'class',17,e,s,gg)
var o0B=_v()
_(b9B,o0B)
var xAC=function(fCC,oBC,cDC,gg){
var oFC=_n('view')
var oHC=_n('text')
_rz(z,oHC,'class',22,fCC,oBC,gg)
var lIC=_oz(z,23,fCC,oBC,gg)
_(oHC,lIC)
_(oFC,oHC)
var aJC=_mz(z,'input',['class',24,'placeholder',1,'placeholderClass',2,'type',3],[],fCC,oBC,gg)
_(oFC,aJC)
var cGC=_v()
_(oFC,cGC)
if(_oz(z,28,fCC,oBC,gg)){cGC.wxVkey=1
var tKC=_n('text')
_rz(z,tKC,'class',29,fCC,oBC,gg)
var eLC=_oz(z,30,fCC,oBC,gg)
_(tKC,eLC)
_(cGC,tKC)
}
cGC.wxXCkey=1
_(cDC,oFC)
return cDC
}
o0B.wxXCkey=2
_2z(z,20,xAC,e,s,gg,o0B,'item','index','index')
_(e8B,b9B)
var bMC=_n('view')
_rz(z,bMC,'class',31,e,s,gg)
var oNC=_mz(z,'image',['class',32,'src',1],[],e,s,gg)
_(bMC,oNC)
var xOC=_n('text')
_rz(z,xOC,'class',34,e,s,gg)
var oPC=_oz(z,35,e,s,gg)
_(xOC,oPC)
_(bMC,xOC)
var fQC=_n('text')
_rz(z,fQC,'class',36,e,s,gg)
var cRC=_oz(z,37,e,s,gg)
_(fQC,cRC)
_(bMC,fQC)
_(e8B,bMC)
_(oXB,e8B)
_(r,oXB)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var oTC=_n('view')
var cUC=_oz(z,0,e,s,gg)
_(oTC,cUC)
_(r,oTC)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var lWC=_n('view')
var aXC=_oz(z,0,e,s,gg)
_(lWC,aXC)
_(r,lWC)
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var eZC=_n('view')
var b1C=_oz(z,0,e,s,gg)
_(eZC,b1C)
_(r,eZC)
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var x3C=_n('view')
var o4C=_oz(z,0,e,s,gg)
_(x3C,o4C)
_(r,x3C)
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(err)
}
return root;
}
}
}


var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C= [[[2,1],],[".",[1],"bgc-f9 { background-color: #f9f9f9; }\n.",[1],"bgc-eee { background-color: #eee; }\n.",[1],"bgc-fff { background-color: #fff; }\n.",[1],"bgc-000 { background-color: #000; }\n.",[1],"bgc-ccc { background-color: #ccc; }\n.",[1],"bgc-d4 { background-color: #d4d4d4; }\n.",[1],"bgc-2b9f60 { background-color: #2b9f60; }\n.",[1],"bgc-a1bce2 { background-color: #a1bce2; }\n.",[1],"bgc-fbd59d { background-color: #fbd59d; }\n.",[1],"bgc-eb { background-color: #ebebeb; }\n.",[1],"color-000 { color: #000; }\n.",[1],"color-01 { color: #010101; }\n.",[1],"color-2e { color: #2e2e2e; }\n.",[1],"color-261900 { color: #261900; }\n.",[1],"color-ccc { color: #ccc; }\n.",[1],"color-fff { color: #fff; }\n.",[1],"color-576b95 { color: #576b95; }\n.",[1],"color-181818 { color: #181818; }\n.",[1],"color-333 { color: #333; }\n.",[1],"color-666 { color: #666; }\n.",[1],"color-aaa { color: #aaa; }\n.",[1],"color-eee { color: #eee; }\n.",[1],"color-b1b1b1 { color: #b1b1b1; }\n.",[1],"color-2b9f60 { color: #2b9f60; }\n.",[1],"color-999 { color: #999; }\n.",[1],"color-bf { color: #bfbfbf; }\n.",[1],"color-9a { color: #9a9a9a; }\n.",[1],"color-9c { color: #9c9c9c; }\n.",[1],"color-2d6dcc { color: #2d6dcc; }\n.",[1],"f1 { -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; }\n.",[1],"f2 { -webkit-box-flex: 2; -webkit-flex: 2; flex: 2; }\n.",[1],"fd-col { -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; }\n.",[1],"fd-row { -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; flex-direction: row; }\n.",[1],"ai-start { -webkit-box-align: start; -webkit-align-items: flex-start; align-items: flex-start; }\n.",[1],"ai-center { -webkit-box-align: center; -webkit-align-items: center; align-items: center; }\n.",[1],"ai-end { -webkit-box-align: end; -webkit-align-items: flex-end; align-items: flex-end; }\n.",[1],"ai-baseline { -webkit-box-align: baseline; -webkit-align-items: baseline; align-items: baseline; }\n.",[1],"jc-sa { -webkit-justify-content: space-around; justify-content: space-around; }\n.",[1],"jc-sb { -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; }\n.",[1],"jc-center { -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; }\n.",[1],"jc-start { -webkit-box-pack: start; -webkit-justify-content: flex-start; justify-content: flex-start; }\n.",[1],"jc-end { -webkit-box-pack: end; -webkit-justify-content: flex-end; justify-content: flex-end; }\n.",[1],"fixed { position: fixed; }\n.",[1],"relative { position: relative; }\n.",[1],"absolute { position: absolute; }\n.",[1],"text-center { text-align: center; }\n.",[1],"text-left { text-align: left; }\n.",[1],"text-right { text-align: right; }\n.",[1],"text-justify { text-align-last: justify; }\n.",[1],"top-0 { top: 0; }\n.",[1],"top-6 { top: ",[0,6],"; }\n.",[1],"top-8 { top: ",[0,8],"; }\n.",[1],"top-10 { top: ",[0,10],"; }\n.",[1],"top-12 { top: ",[0,12],"; }\n.",[1],"top-14 { top: ",[0,14],"; }\n.",[1],"top-16 { top: ",[0,16],"; }\n.",[1],"top-18 { top: ",[0,18],"; }\n.",[1],"top-20 { top: ",[0,20],"; }\n.",[1],"top-22 { top: ",[0,22],"; }\n.",[1],"top-24 { top: ",[0,24],"; }\n.",[1],"top-26 { top: ",[0,26],"; }\n.",[1],"top-28 { top: ",[0,28],"; }\n.",[1],"top-30 { top: ",[0,30],"; }\n.",[1],"top-32 { top: ",[0,32],"; }\n.",[1],"top-34 { top: ",[0,34],"; }\n.",[1],"top-36 { top: ",[0,36],"; }\n.",[1],"top-38 { top: ",[0,38],"; }\n.",[1],"top-40 { top: ",[0,40],"; }\n.",[1],"top-42 { top: ",[0,42],"; }\n.",[1],"top-44 { top: ",[0,44],"; }\n.",[1],"top-46 { top: ",[0,46],"; }\n.",[1],"top-48 { top: ",[0,48],"; }\n.",[1],"top-50 { top: ",[0,50],"; }\n.",[1],"top-52 { top: ",[0,52],"; }\n.",[1],"top-54 { top: ",[0,54],"; }\n.",[1],"top-56 { top: ",[0,56],"; }\n.",[1],"top-58 { top: ",[0,58],"; }\n.",[1],"top-60 { top: ",[0,60],"; }\n.",[1],"top-62 { top: ",[0,62],"; }\n.",[1],"top-64 { top: ",[0,64],"; }\n.",[1],"top-66 { top: ",[0,66],"; }\n.",[1],"top-68 { top: ",[0,68],"; }\n.",[1],"top-70 { top: ",[0,70],"; }\n.",[1],"top-72 { top: ",[0,72],"; }\n.",[1],"top-74 { top: ",[0,74],"; }\n.",[1],"top-76 { top: ",[0,76],"; }\n.",[1],"top-78 { top: ",[0,78],"; }\n.",[1],"top-80 { top: ",[0,80],"; }\n.",[1],"top-82 { top: ",[0,82],"; }\n.",[1],"top-84 { top: ",[0,84],"; }\n.",[1],"top-86 { top: ",[0,86],"; }\n.",[1],"top-88 { top: ",[0,88],"; }\n.",[1],"top-90 { top: ",[0,90],"; }\n.",[1],"top-92 { top: ",[0,92],"; }\n.",[1],"top-94 { top: ",[0,94],"; }\n.",[1],"top-96 { top: ",[0,96],"; }\n.",[1],"top-98 { top: ",[0,98],"; }\n.",[1],"top-100 { top: ",[0,100],"; }\n.",[1],"bottom-0 { bottom: 0; }\n.",[1],"bottom-6 { bottom: ",[0,6],"; }\n.",[1],"bottom-8 { bottom: ",[0,8],"; }\n.",[1],"bottom-10 { bottom: ",[0,10],"; }\n.",[1],"bottom-12 { bottom: ",[0,12],"; }\n.",[1],"bottom-14 { bottom: ",[0,14],"; }\n.",[1],"bottom-16 { bottom: ",[0,16],"; }\n.",[1],"bottom-18 { bottom: ",[0,18],"; }\n.",[1],"bottom-20 { bottom: ",[0,20],"; }\n.",[1],"bottom-22 { bottom: ",[0,22],"; }\n.",[1],"bottom-24 { bottom: ",[0,24],"; }\n.",[1],"bottom-26 { bottom: ",[0,26],"; }\n.",[1],"bottom-28 { bottom: ",[0,28],"; }\n.",[1],"bottom-30 { bottom: ",[0,30],"; }\n.",[1],"bottom-32 { bottom: ",[0,32],"; }\n.",[1],"bottom-34 { bottom: ",[0,34],"; }\n.",[1],"bottom-36 { bottom: ",[0,36],"; }\n.",[1],"bottom-38 { bottom: ",[0,38],"; }\n.",[1],"bottom-40 { bottom: ",[0,40],"; }\n.",[1],"bottom-42 { bottom: ",[0,42],"; }\n.",[1],"bottom-44 { bottom: ",[0,44],"; }\n.",[1],"bottom-46 { bottom: ",[0,46],"; }\n.",[1],"bottom-48 { bottom: ",[0,48],"; }\n.",[1],"bottom-50 { bottom: ",[0,50],"; }\n.",[1],"bottom-52 { bottom: ",[0,52],"; }\n.",[1],"bottom-54 { bottom: ",[0,54],"; }\n.",[1],"bottom-56 { bottom: ",[0,56],"; }\n.",[1],"bottom-58 { bottom: ",[0,58],"; }\n.",[1],"bottom-60 { bottom: ",[0,60],"; }\n.",[1],"bottom-62 { bottom: ",[0,62],"; }\n.",[1],"bottom-64 { bottom: ",[0,64],"; }\n.",[1],"bottom-66 { bottom: ",[0,66],"; }\n.",[1],"bottom-68 { bottom: ",[0,68],"; }\n.",[1],"bottom-70 { bottom: ",[0,70],"; }\n.",[1],"bottom-72 { bottom: ",[0,72],"; }\n.",[1],"bottom-74 { bottom: ",[0,74],"; }\n.",[1],"bottom-76 { bottom: ",[0,76],"; }\n.",[1],"bottom-78 { bottom: ",[0,78],"; }\n.",[1],"bottom-80 { bottom: ",[0,80],"; }\n.",[1],"bottom-82 { bottom: ",[0,82],"; }\n.",[1],"bottom-84 { bottom: ",[0,84],"; }\n.",[1],"bottom-86 { bottom: ",[0,86],"; }\n.",[1],"bottom-88 { bottom: ",[0,88],"; }\n.",[1],"bottom-90 { bottom: ",[0,90],"; }\n.",[1],"bottom-92 { bottom: ",[0,92],"; }\n.",[1],"bottom-94 { bottom: ",[0,94],"; }\n.",[1],"bottom-96 { bottom: ",[0,96],"; }\n.",[1],"bottom-98 { bottom: ",[0,98],"; }\n.",[1],"bottom-100 { bottom: ",[0,100],"; }\n.",[1],"left-0 { left: 0; }\n.",[1],"left-6 { left: ",[0,6],"; }\n.",[1],"left-8 { left: ",[0,8],"; }\n.",[1],"left-10 { left: ",[0,10],"; }\n.",[1],"left-12 { left: ",[0,12],"; }\n.",[1],"left-14 { left: ",[0,14],"; }\n.",[1],"left-16 { left: ",[0,16],"; }\n.",[1],"left-18 { left: ",[0,18],"; }\n.",[1],"left-20 { left: ",[0,20],"; }\n.",[1],"left-22 { left: ",[0,22],"; }\n.",[1],"left-24 { left: ",[0,24],"; }\n.",[1],"left-26 { left: ",[0,26],"; }\n.",[1],"left-28 { left: ",[0,28],"; }\n.",[1],"left-30 { left: ",[0,30],"; }\n.",[1],"left-32 { left: ",[0,32],"; }\n.",[1],"left-34 { left: ",[0,34],"; }\n.",[1],"left-36 { left: ",[0,36],"; }\n.",[1],"left-38 { left: ",[0,38],"; }\n.",[1],"left-40 { left: ",[0,40],"; }\n.",[1],"left-42 { left: ",[0,42],"; }\n.",[1],"left-44 { left: ",[0,44],"; }\n.",[1],"left-46 { left: ",[0,46],"; }\n.",[1],"left-48 { left: ",[0,48],"; }\n.",[1],"left-50 { left: ",[0,50],"; }\n.",[1],"left-52 { left: ",[0,52],"; }\n.",[1],"left-54 { left: ",[0,54],"; }\n.",[1],"left-56 { left: ",[0,56],"; }\n.",[1],"left-58 { left: ",[0,58],"; }\n.",[1],"left-60 { left: ",[0,60],"; }\n.",[1],"left-62 { left: ",[0,62],"; }\n.",[1],"left-64 { left: ",[0,64],"; }\n.",[1],"left-66 { left: ",[0,66],"; }\n.",[1],"left-68 { left: ",[0,68],"; }\n.",[1],"left-70 { left: ",[0,70],"; }\n.",[1],"left-72 { left: ",[0,72],"; }\n.",[1],"left-74 { left: ",[0,74],"; }\n.",[1],"left-76 { left: ",[0,76],"; }\n.",[1],"left-78 { left: ",[0,78],"; }\n.",[1],"left-80 { left: ",[0,80],"; }\n.",[1],"left-82 { left: ",[0,82],"; }\n.",[1],"left-84 { left: ",[0,84],"; }\n.",[1],"left-86 { left: ",[0,86],"; }\n.",[1],"left-88 { left: ",[0,88],"; }\n.",[1],"left-90 { left: ",[0,90],"; }\n.",[1],"left-92 { left: ",[0,92],"; }\n.",[1],"left-94 { left: ",[0,94],"; }\n.",[1],"left-96 { left: ",[0,96],"; }\n.",[1],"left-98 { left: ",[0,98],"; }\n.",[1],"left-100 { left: ",[0,100],"; }\n.",[1],"right-0 { right: 0; }\n.",[1],"right-6 { right: ",[0,6],"; }\n.",[1],"right-8 { right: ",[0,8],"; }\n.",[1],"right-10 { right: ",[0,10],"; }\n.",[1],"right-12 { right: ",[0,12],"; }\n.",[1],"right-14 { right: ",[0,14],"; }\n.",[1],"right-16 { right: ",[0,16],"; }\n.",[1],"right-18 { right: ",[0,18],"; }\n.",[1],"right-20 { right: ",[0,20],"; }\n.",[1],"right-22 { right: ",[0,22],"; }\n.",[1],"right-24 { right: ",[0,24],"; }\n.",[1],"right-26 { right: ",[0,26],"; }\n.",[1],"right-28 { right: ",[0,28],"; }\n.",[1],"right-30 { right: ",[0,30],"; }\n.",[1],"right-32 { right: ",[0,32],"; }\n.",[1],"right-34 { right: ",[0,34],"; }\n.",[1],"right-36 { right: ",[0,36],"; }\n.",[1],"right-38 { right: ",[0,38],"; }\n.",[1],"right-40 { right: ",[0,40],"; }\n.",[1],"right-42 { right: ",[0,42],"; }\n.",[1],"right-44 { right: ",[0,44],"; }\n.",[1],"right-46 { right: ",[0,46],"; }\n.",[1],"right-48 { right: ",[0,48],"; }\n.",[1],"right-50 { right: ",[0,50],"; }\n.",[1],"right-52 { right: ",[0,52],"; }\n.",[1],"right-54 { right: ",[0,54],"; }\n.",[1],"right-56 { right: ",[0,56],"; }\n.",[1],"right-58 { right: ",[0,58],"; }\n.",[1],"right-60 { right: ",[0,60],"; }\n.",[1],"right-62 { right: ",[0,62],"; }\n.",[1],"right-64 { right: ",[0,64],"; }\n.",[1],"right-66 { right: ",[0,66],"; }\n.",[1],"right-68 { right: ",[0,68],"; }\n.",[1],"right-70 { right: ",[0,70],"; }\n.",[1],"right-72 { right: ",[0,72],"; }\n.",[1],"right-74 { right: ",[0,74],"; }\n.",[1],"right-76 { right: ",[0,76],"; }\n.",[1],"right-78 { right: ",[0,78],"; }\n.",[1],"right-80 { right: ",[0,80],"; }\n.",[1],"right-82 { right: ",[0,82],"; }\n.",[1],"right-84 { right: ",[0,84],"; }\n.",[1],"right-86 { right: ",[0,86],"; }\n.",[1],"right-88 { right: ",[0,88],"; }\n.",[1],"right-90 { right: ",[0,90],"; }\n.",[1],"right-92 { right: ",[0,92],"; }\n.",[1],"right-94 { right: ",[0,94],"; }\n.",[1],"right-96 { right: ",[0,96],"; }\n.",[1],"right-98 { right: ",[0,98],"; }\n.",[1],"right-100 { right: ",[0,100],"; }\n.",[1],"width-auto { width: auto; }\n.",[1],"width-30vw { width: 30vw; }\n.",[1],"width-50vw { width: 50vw; }\n.",[1],"width-100vw { width: 100vw; }\n.",[1],"width-50percent { width: 50%; }\n.",[1],"width-100percent { width: 100%; }\n.",[1],"width-0 { width: 0; }\n.",[1],"width-6 { width: ",[0,6],"; }\n.",[1],"width-8 { width: ",[0,8],"; }\n.",[1],"width-10 { width: ",[0,10],"; }\n.",[1],"width-12 { width: ",[0,12],"; }\n.",[1],"width-14 { width: ",[0,14],"; }\n.",[1],"width-16 { width: ",[0,16],"; }\n.",[1],"width-18 { width: ",[0,18],"; }\n.",[1],"width-20 { width: ",[0,20],"; }\n.",[1],"width-22 { width: ",[0,22],"; }\n.",[1],"width-24 { width: ",[0,24],"; }\n.",[1],"width-26 { width: ",[0,26],"; }\n.",[1],"width-28 { width: ",[0,28],"; }\n.",[1],"width-30 { width: ",[0,30],"; }\n.",[1],"width-32 { width: ",[0,32],"; }\n.",[1],"width-34 { width: ",[0,34],"; }\n.",[1],"width-36 { width: ",[0,36],"; }\n.",[1],"width-38 { width: ",[0,38],"; }\n.",[1],"width-40 { width: ",[0,40],"; }\n.",[1],"width-42 { width: ",[0,42],"; }\n.",[1],"width-44 { width: ",[0,44],"; }\n.",[1],"width-46 { width: ",[0,46],"; }\n.",[1],"width-48 { width: ",[0,48],"; }\n.",[1],"width-50 { width: ",[0,50],"; }\n.",[1],"width-52 { width: ",[0,52],"; }\n.",[1],"width-54 { width: ",[0,54],"; }\n.",[1],"width-56 { width: ",[0,56],"; }\n.",[1],"width-58 { width: ",[0,58],"; }\n.",[1],"width-60 { width: ",[0,60],"; }\n.",[1],"width-62 { width: ",[0,62],"; }\n.",[1],"width-64 { width: ",[0,64],"; }\n.",[1],"width-66 { width: ",[0,66],"; }\n.",[1],"width-68 { width: ",[0,68],"; }\n.",[1],"width-70 { width: ",[0,70],"; }\n.",[1],"width-72 { width: ",[0,72],"; }\n.",[1],"width-74 { width: ",[0,74],"; }\n.",[1],"width-76 { width: ",[0,76],"; }\n.",[1],"width-78 { width: ",[0,78],"; }\n.",[1],"width-80 { width: ",[0,80],"; }\n.",[1],"width-82 { width: ",[0,82],"; }\n.",[1],"width-84 { width: ",[0,84],"; }\n.",[1],"width-86 { width: ",[0,86],"; }\n.",[1],"width-88 { width: ",[0,88],"; }\n.",[1],"width-90 { width: ",[0,90],"; }\n.",[1],"width-92 { width: ",[0,92],"; }\n.",[1],"width-94 { width: ",[0,94],"; }\n.",[1],"width-96 { width: ",[0,96],"; }\n.",[1],"width-98 { width: ",[0,98],"; }\n.",[1],"width-100 { width: ",[0,100],"; }\n.",[1],"height-auto { height: auto; }\n.",[1],"height-30vh { height: 30vh; }\n.",[1],"height-50vh { height: 50vh; }\n.",[1],"height-100vh { height: 100vh; }\n.",[1],"height-50percent { height: 50%; }\n.",[1],"height-100percent { height: 100%; }\n.",[1],"height-0 { height: 0; }\n.",[1],"height-6 { height: ",[0,6],"; }\n.",[1],"height-8 { height: ",[0,8],"; }\n.",[1],"height-10 { height: ",[0,10],"; }\n.",[1],"height-12 { height: ",[0,12],"; }\n.",[1],"height-14 { height: ",[0,14],"; }\n.",[1],"height-16 { height: ",[0,16],"; }\n.",[1],"height-18 { height: ",[0,18],"; }\n.",[1],"height-20 { height: ",[0,20],"; }\n.",[1],"height-22 { height: ",[0,22],"; }\n.",[1],"height-24 { height: ",[0,24],"; }\n.",[1],"height-26 { height: ",[0,26],"; }\n.",[1],"height-28 { height: ",[0,28],"; }\n.",[1],"height-30 { height: ",[0,30],"; }\n.",[1],"height-32 { height: ",[0,32],"; }\n.",[1],"height-34 { height: ",[0,34],"; }\n.",[1],"height-36 { height: ",[0,36],"; }\n.",[1],"height-38 { height: ",[0,38],"; }\n.",[1],"height-40 { height: ",[0,40],"; }\n.",[1],"height-42 { height: ",[0,42],"; }\n.",[1],"height-44 { height: ",[0,44],"; }\n.",[1],"height-46 { height: ",[0,46],"; }\n.",[1],"height-48 { height: ",[0,48],"; }\n.",[1],"height-50 { height: ",[0,50],"; }\n.",[1],"height-52 { height: ",[0,52],"; }\n.",[1],"height-54 { height: ",[0,54],"; }\n.",[1],"height-56 { height: ",[0,56],"; }\n.",[1],"height-58 { height: ",[0,58],"; }\n.",[1],"height-60 { height: ",[0,60],"; }\n.",[1],"height-62 { height: ",[0,62],"; }\n.",[1],"height-64 { height: ",[0,64],"; }\n.",[1],"height-66 { height: ",[0,66],"; }\n.",[1],"height-68 { height: ",[0,68],"; }\n.",[1],"height-70 { height: ",[0,70],"; }\n.",[1],"height-72 { height: ",[0,72],"; }\n.",[1],"height-74 { height: ",[0,74],"; }\n.",[1],"height-76 { height: ",[0,76],"; }\n.",[1],"height-78 { height: ",[0,78],"; }\n.",[1],"height-80 { height: ",[0,80],"; }\n.",[1],"height-82 { height: ",[0,82],"; }\n.",[1],"height-84 { height: ",[0,84],"; }\n.",[1],"height-86 { height: ",[0,86],"; }\n.",[1],"height-88 { height: ",[0,88],"; }\n.",[1],"height-90 { height: ",[0,90],"; }\n.",[1],"height-92 { height: ",[0,92],"; }\n.",[1],"height-94 { height: ",[0,94],"; }\n.",[1],"height-96 { height: ",[0,96],"; }\n.",[1],"height-98 { height: ",[0,98],"; }\n.",[1],"height-100 { height: ",[0,100],"; }\n.",[1],"lh-6 { line-height: ",[0,6],"; }\n.",[1],"lh-8 { line-height: ",[0,8],"; }\n.",[1],"lh-10 { line-height: ",[0,10],"; }\n.",[1],"lh-12 { line-height: ",[0,12],"; }\n.",[1],"lh-14 { line-height: ",[0,14],"; }\n.",[1],"lh-16 { line-height: ",[0,16],"; }\n.",[1],"lh-18 { line-height: ",[0,18],"; }\n.",[1],"lh-20 { line-height: ",[0,20],"; }\n.",[1],"lh-22 { line-height: ",[0,22],"; }\n.",[1],"lh-24 { line-height: ",[0,24],"; }\n.",[1],"lh-26 { line-height: ",[0,26],"; }\n.",[1],"lh-28 { line-height: ",[0,28],"; }\n.",[1],"lh-30 { line-height: ",[0,30],"; }\n.",[1],"lh-32 { line-height: ",[0,32],"; }\n.",[1],"lh-34 { line-height: ",[0,34],"; }\n.",[1],"lh-36 { line-height: ",[0,36],"; }\n.",[1],"lh-38 { line-height: ",[0,38],"; }\n.",[1],"lh-40 { line-height: ",[0,40],"; }\n.",[1],"lh-42 { line-height: ",[0,42],"; }\n.",[1],"lh-44 { line-height: ",[0,44],"; }\n.",[1],"lh-46 { line-height: ",[0,46],"; }\n.",[1],"lh-48 { line-height: ",[0,48],"; }\n.",[1],"lh-50 { line-height: ",[0,50],"; }\n.",[1],"lh-52 { line-height: ",[0,52],"; }\n.",[1],"lh-54 { line-height: ",[0,54],"; }\n.",[1],"lh-56 { line-height: ",[0,56],"; }\n.",[1],"lh-58 { line-height: ",[0,58],"; }\n.",[1],"lh-60 { line-height: ",[0,60],"; }\n.",[1],"lh-62 { line-height: ",[0,62],"; }\n.",[1],"lh-64 { line-height: ",[0,64],"; }\n.",[1],"lh-66 { line-height: ",[0,66],"; }\n.",[1],"lh-68 { line-height: ",[0,68],"; }\n.",[1],"lh-70 { line-height: ",[0,70],"; }\n.",[1],"lh-72 { line-height: ",[0,72],"; }\n.",[1],"lh-74 { line-height: ",[0,74],"; }\n.",[1],"lh-76 { line-height: ",[0,76],"; }\n.",[1],"lh-78 { line-height: ",[0,78],"; }\n.",[1],"lh-80 { line-height: ",[0,80],"; }\n.",[1],"lh-82 { line-height: ",[0,82],"; }\n.",[1],"lh-84 { line-height: ",[0,84],"; }\n.",[1],"lh-86 { line-height: ",[0,86],"; }\n.",[1],"lh-88 { line-height: ",[0,88],"; }\n.",[1],"lh-90 { line-height: ",[0,90],"; }\n.",[1],"lh-92 { line-height: ",[0,92],"; }\n.",[1],"lh-94 { line-height: ",[0,94],"; }\n.",[1],"lh-96 { line-height: ",[0,96],"; }\n.",[1],"lh-98 { line-height: ",[0,98],"; }\n.",[1],"lh-100 { line-height: ",[0,100],"; }\n.",[1],"mt-2 { margin-top: ",[0,2],"; }\n.",[1],"mt-6 { margin-top: ",[0,6],"; }\n.",[1],"mt-8 { margin-top: ",[0,8],"; }\n.",[1],"mt-10 { margin-top: ",[0,10],"; }\n.",[1],"mt-12 { margin-top: ",[0,12],"; }\n.",[1],"mt-14 { margin-top: ",[0,14],"; }\n.",[1],"mt-16 { margin-top: ",[0,16],"; }\n.",[1],"mt-18 { margin-top: ",[0,18],"; }\n.",[1],"mt-20 { margin-top: ",[0,20],"; }\n.",[1],"mt-22 { margin-top: ",[0,22],"; }\n.",[1],"mt-24 { margin-top: ",[0,24],"; }\n.",[1],"mt-26 { margin-top: ",[0,26],"; }\n.",[1],"mt-28 { margin-top: ",[0,28],"; }\n.",[1],"mt-30 { margin-top: ",[0,30],"; }\n.",[1],"mt-32 { margin-top: ",[0,32],"; }\n.",[1],"mt-34 { margin-top: ",[0,34],"; }\n.",[1],"mt-36 { margin-top: ",[0,36],"; }\n.",[1],"mt-38 { margin-top: ",[0,38],"; }\n.",[1],"mt-40 { margin-top: ",[0,40],"; }\n.",[1],"mt-42 { margin-top: ",[0,42],"; }\n.",[1],"mt-44 { margin-top: ",[0,44],"; }\n.",[1],"mt-46 { margin-top: ",[0,46],"; }\n.",[1],"mt-48 { margin-top: ",[0,48],"; }\n.",[1],"mt-50 { margin-top: ",[0,50],"; }\n.",[1],"mt-52 { margin-top: ",[0,52],"; }\n.",[1],"mt-54 { margin-top: ",[0,54],"; }\n.",[1],"mt-56 { margin-top: ",[0,56],"; }\n.",[1],"mt-58 { margin-top: ",[0,58],"; }\n.",[1],"mt-60 { margin-top: ",[0,60],"; }\n.",[1],"mt-62 { margin-top: ",[0,62],"; }\n.",[1],"mt-64 { margin-top: ",[0,64],"; }\n.",[1],"mt-66 { margin-top: ",[0,66],"; }\n.",[1],"mt-68 { margin-top: ",[0,68],"; }\n.",[1],"mt-70 { margin-top: ",[0,70],"; }\n.",[1],"mt-72 { margin-top: ",[0,72],"; }\n.",[1],"mt-74 { margin-top: ",[0,74],"; }\n.",[1],"mt-76 { margin-top: ",[0,76],"; }\n.",[1],"mt-78 { margin-top: ",[0,78],"; }\n.",[1],"mt-80 { margin-top: ",[0,80],"; }\n.",[1],"mt-82 { margin-top: ",[0,82],"; }\n.",[1],"mt-84 { margin-top: ",[0,84],"; }\n.",[1],"mt-86 { margin-top: ",[0,86],"; }\n.",[1],"mt-88 { margin-top: ",[0,88],"; }\n.",[1],"mt-90 { margin-top: ",[0,90],"; }\n.",[1],"mt-92 { margin-top: ",[0,92],"; }\n.",[1],"mt-94 { margin-top: ",[0,94],"; }\n.",[1],"mt-96 { margin-top: ",[0,96],"; }\n.",[1],"mt-98 { margin-top: ",[0,98],"; }\n.",[1],"mt-100 { margin-top: ",[0,100],"; }\n.",[1],"mr-6 { margin-right: ",[0,6],"; }\n.",[1],"mr-8 { margin-right: ",[0,8],"; }\n.",[1],"mr-10 { margin-right: ",[0,10],"; }\n.",[1],"mr-12 { margin-right: ",[0,12],"; }\n.",[1],"mr-14 { margin-right: ",[0,14],"; }\n.",[1],"mr-16 { margin-right: ",[0,16],"; }\n.",[1],"mr-18 { margin-right: ",[0,18],"; }\n.",[1],"mr-20 { margin-right: ",[0,20],"; }\n.",[1],"mr-22 { margin-right: ",[0,22],"; }\n.",[1],"mr-24 { margin-right: ",[0,24],"; }\n.",[1],"mr-26 { margin-right: ",[0,26],"; }\n.",[1],"mr-28 { margin-right: ",[0,28],"; }\n.",[1],"mr-30 { margin-right: ",[0,30],"; }\n.",[1],"mr-32 { margin-right: ",[0,32],"; }\n.",[1],"mr-34 { margin-right: ",[0,34],"; }\n.",[1],"mr-36 { margin-right: ",[0,36],"; }\n.",[1],"mr-38 { margin-right: ",[0,38],"; }\n.",[1],"mr-40 { margin-right: ",[0,40],"; }\n.",[1],"mr-42 { margin-right: ",[0,42],"; }\n.",[1],"mr-44 { margin-right: ",[0,44],"; }\n.",[1],"mr-46 { margin-right: ",[0,46],"; }\n.",[1],"mr-48 { margin-right: ",[0,48],"; }\n.",[1],"mr-50 { margin-right: ",[0,50],"; }\n.",[1],"mr-52 { margin-right: ",[0,52],"; }\n.",[1],"mr-54 { margin-right: ",[0,54],"; }\n.",[1],"mr-56 { margin-right: ",[0,56],"; }\n.",[1],"mr-58 { margin-right: ",[0,58],"; }\n.",[1],"mr-60 { margin-right: ",[0,60],"; }\n.",[1],"mr-62 { margin-right: ",[0,62],"; }\n.",[1],"mr-64 { margin-right: ",[0,64],"; }\n.",[1],"mr-66 { margin-right: ",[0,66],"; }\n.",[1],"mr-68 { margin-right: ",[0,68],"; }\n.",[1],"mr-70 { margin-right: ",[0,70],"; }\n.",[1],"mr-72 { margin-right: ",[0,72],"; }\n.",[1],"mr-74 { margin-right: ",[0,74],"; }\n.",[1],"mr-76 { margin-right: ",[0,76],"; }\n.",[1],"mr-78 { margin-right: ",[0,78],"; }\n.",[1],"mr-80 { margin-right: ",[0,80],"; }\n.",[1],"mr-82 { margin-right: ",[0,82],"; }\n.",[1],"mr-84 { margin-right: ",[0,84],"; }\n.",[1],"mr-86 { margin-right: ",[0,86],"; }\n.",[1],"mr-88 { margin-right: ",[0,88],"; }\n.",[1],"mr-90 { margin-right: ",[0,90],"; }\n.",[1],"mr-92 { margin-right: ",[0,92],"; }\n.",[1],"mr-94 { margin-right: ",[0,94],"; }\n.",[1],"mr-96 { margin-right: ",[0,96],"; }\n.",[1],"mr-98 { margin-right: ",[0,98],"; }\n.",[1],"mr-100 { margin-right: ",[0,100],"; }\n.",[1],"mb-6 { margin-bottom: ",[0,6],"; }\n.",[1],"mb-8 { margin-bottom: ",[0,8],"; }\n.",[1],"mb-10 { margin-bottom: ",[0,10],"; }\n.",[1],"mb-12 { margin-bottom: ",[0,12],"; }\n.",[1],"mb-14 { margin-bottom: ",[0,14],"; }\n.",[1],"mb-16 { margin-bottom: ",[0,16],"; }\n.",[1],"mb-18 { margin-bottom: ",[0,18],"; }\n.",[1],"mb-20 { margin-bottom: ",[0,20],"; }\n.",[1],"mb-22 { margin-bottom: ",[0,22],"; }\n.",[1],"mb-24 { margin-bottom: ",[0,24],"; }\n.",[1],"mb-26 { margin-bottom: ",[0,26],"; }\n.",[1],"mb-28 { margin-bottom: ",[0,28],"; }\n.",[1],"mb-30 { margin-bottom: ",[0,30],"; }\n.",[1],"mb-32 { margin-bottom: ",[0,32],"; }\n.",[1],"mb-34 { margin-bottom: ",[0,34],"; }\n.",[1],"mb-36 { margin-bottom: ",[0,36],"; }\n.",[1],"mb-38 { margin-bottom: ",[0,38],"; }\n.",[1],"mb-40 { margin-bottom: ",[0,40],"; }\n.",[1],"mb-42 { margin-bottom: ",[0,42],"; }\n.",[1],"mb-44 { margin-bottom: ",[0,44],"; }\n.",[1],"mb-46 { margin-bottom: ",[0,46],"; }\n.",[1],"mb-48 { margin-bottom: ",[0,48],"; }\n.",[1],"mb-50 { margin-bottom: ",[0,50],"; }\n.",[1],"mb-52 { margin-bottom: ",[0,52],"; }\n.",[1],"mb-54 { margin-bottom: ",[0,54],"; }\n.",[1],"mb-56 { margin-bottom: ",[0,56],"; }\n.",[1],"mb-58 { margin-bottom: ",[0,58],"; }\n.",[1],"mb-60 { margin-bottom: ",[0,60],"; }\n.",[1],"mb-62 { margin-bottom: ",[0,62],"; }\n.",[1],"mb-64 { margin-bottom: ",[0,64],"; }\n.",[1],"mb-66 { margin-bottom: ",[0,66],"; }\n.",[1],"mb-68 { margin-bottom: ",[0,68],"; }\n.",[1],"mb-70 { margin-bottom: ",[0,70],"; }\n.",[1],"mb-72 { margin-bottom: ",[0,72],"; }\n.",[1],"mb-74 { margin-bottom: ",[0,74],"; }\n.",[1],"mb-76 { margin-bottom: ",[0,76],"; }\n.",[1],"mb-78 { margin-bottom: ",[0,78],"; }\n.",[1],"mb-80 { margin-bottom: ",[0,80],"; }\n.",[1],"mb-82 { margin-bottom: ",[0,82],"; }\n.",[1],"mb-84 { margin-bottom: ",[0,84],"; }\n.",[1],"mb-86 { margin-bottom: ",[0,86],"; }\n.",[1],"mb-88 { margin-bottom: ",[0,88],"; }\n.",[1],"mb-90 { margin-bottom: ",[0,90],"; }\n.",[1],"mb-92 { margin-bottom: ",[0,92],"; }\n.",[1],"mb-94 { margin-bottom: ",[0,94],"; }\n.",[1],"mb-96 { margin-bottom: ",[0,96],"; }\n.",[1],"mb-98 { margin-bottom: ",[0,98],"; }\n.",[1],"mb-100 { margin-bottom: ",[0,100],"; }\n.",[1],"ml-6 { margin-left: ",[0,6],"; }\n.",[1],"ml-8 { margin-left: ",[0,8],"; }\n.",[1],"ml-10 { margin-left: ",[0,10],"; }\n.",[1],"ml-12 { margin-left: ",[0,12],"; }\n.",[1],"ml-14 { margin-left: ",[0,14],"; }\n.",[1],"ml-16 { margin-left: ",[0,16],"; }\n.",[1],"ml-18 { margin-left: ",[0,18],"; }\n.",[1],"ml-20 { margin-left: ",[0,20],"; }\n.",[1],"ml-22 { margin-left: ",[0,22],"; }\n.",[1],"ml-24 { margin-left: ",[0,24],"; }\n.",[1],"ml-26 { margin-left: ",[0,26],"; }\n.",[1],"ml-28 { margin-left: ",[0,28],"; }\n.",[1],"ml-30 { margin-left: ",[0,30],"; }\n.",[1],"ml-32 { margin-left: ",[0,32],"; }\n.",[1],"ml-34 { margin-left: ",[0,34],"; }\n.",[1],"ml-36 { margin-left: ",[0,36],"; }\n.",[1],"ml-38 { margin-left: ",[0,38],"; }\n.",[1],"ml-40 { margin-left: ",[0,40],"; }\n.",[1],"ml-42 { margin-left: ",[0,42],"; }\n.",[1],"ml-44 { margin-left: ",[0,44],"; }\n.",[1],"ml-46 { margin-left: ",[0,46],"; }\n.",[1],"ml-48 { margin-left: ",[0,48],"; }\n.",[1],"ml-50 { margin-left: ",[0,50],"; }\n.",[1],"ml-52 { margin-left: ",[0,52],"; }\n.",[1],"ml-54 { margin-left: ",[0,54],"; }\n.",[1],"ml-56 { margin-left: ",[0,56],"; }\n.",[1],"ml-58 { margin-left: ",[0,58],"; }\n.",[1],"ml-60 { margin-left: ",[0,60],"; }\n.",[1],"ml-62 { margin-left: ",[0,62],"; }\n.",[1],"ml-64 { margin-left: ",[0,64],"; }\n.",[1],"ml-66 { margin-left: ",[0,66],"; }\n.",[1],"ml-68 { margin-left: ",[0,68],"; }\n.",[1],"ml-70 { margin-left: ",[0,70],"; }\n.",[1],"ml-72 { margin-left: ",[0,72],"; }\n.",[1],"ml-74 { margin-left: ",[0,74],"; }\n.",[1],"ml-76 { margin-left: ",[0,76],"; }\n.",[1],"ml-78 { margin-left: ",[0,78],"; }\n.",[1],"ml-80 { margin-left: ",[0,80],"; }\n.",[1],"ml-82 { margin-left: ",[0,82],"; }\n.",[1],"ml-84 { margin-left: ",[0,84],"; }\n.",[1],"ml-86 { margin-left: ",[0,86],"; }\n.",[1],"ml-88 { margin-left: ",[0,88],"; }\n.",[1],"ml-90 { margin-left: ",[0,90],"; }\n.",[1],"ml-92 { margin-left: ",[0,92],"; }\n.",[1],"ml-94 { margin-left: ",[0,94],"; }\n.",[1],"ml-96 { margin-left: ",[0,96],"; }\n.",[1],"ml-98 { margin-left: ",[0,98],"; }\n.",[1],"ml-100 { margin-left: ",[0,100],"; }\n.",[1],"pt-6 { padding-top: ",[0,6],"; }\n.",[1],"pt-8 { padding-top: ",[0,8],"; }\n.",[1],"pt-10 { padding-top: ",[0,10],"; }\n.",[1],"pt-12 { padding-top: ",[0,12],"; }\n.",[1],"pt-14 { padding-top: ",[0,14],"; }\n.",[1],"pt-16 { padding-top: ",[0,16],"; }\n.",[1],"pt-18 { padding-top: ",[0,18],"; }\n.",[1],"pt-20 { padding-top: ",[0,20],"; }\n.",[1],"pt-22 { padding-top: ",[0,22],"; }\n.",[1],"pt-24 { padding-top: ",[0,24],"; }\n.",[1],"pt-26 { padding-top: ",[0,26],"; }\n.",[1],"pt-28 { padding-top: ",[0,28],"; }\n.",[1],"pt-30 { padding-top: ",[0,30],"; }\n.",[1],"pt-32 { padding-top: ",[0,32],"; }\n.",[1],"pt-34 { padding-top: ",[0,34],"; }\n.",[1],"pt-36 { padding-top: ",[0,36],"; }\n.",[1],"pt-38 { padding-top: ",[0,38],"; }\n.",[1],"pt-40 { padding-top: ",[0,40],"; }\n.",[1],"pt-42 { padding-top: ",[0,42],"; }\n.",[1],"pt-44 { padding-top: ",[0,44],"; }\n.",[1],"pt-46 { padding-top: ",[0,46],"; }\n.",[1],"pt-48 { padding-top: ",[0,48],"; }\n.",[1],"pt-50 { padding-top: ",[0,50],"; }\n.",[1],"pt-52 { padding-top: ",[0,52],"; }\n.",[1],"pt-54 { padding-top: ",[0,54],"; }\n.",[1],"pt-56 { padding-top: ",[0,56],"; }\n.",[1],"pt-58 { padding-top: ",[0,58],"; }\n.",[1],"pt-60 { padding-top: ",[0,60],"; }\n.",[1],"pt-62 { padding-top: ",[0,62],"; }\n.",[1],"pt-64 { padding-top: ",[0,64],"; }\n.",[1],"pt-66 { padding-top: ",[0,66],"; }\n.",[1],"pt-68 { padding-top: ",[0,68],"; }\n.",[1],"pt-70 { padding-top: ",[0,70],"; }\n.",[1],"pt-72 { padding-top: ",[0,72],"; }\n.",[1],"pt-74 { padding-top: ",[0,74],"; }\n.",[1],"pt-76 { padding-top: ",[0,76],"; }\n.",[1],"pt-78 { padding-top: ",[0,78],"; }\n.",[1],"pt-80 { padding-top: ",[0,80],"; }\n.",[1],"pt-82 { padding-top: ",[0,82],"; }\n.",[1],"pt-84 { padding-top: ",[0,84],"; }\n.",[1],"pt-86 { padding-top: ",[0,86],"; }\n.",[1],"pt-88 { padding-top: ",[0,88],"; }\n.",[1],"pt-90 { padding-top: ",[0,90],"; }\n.",[1],"pt-92 { padding-top: ",[0,92],"; }\n.",[1],"pt-94 { padding-top: ",[0,94],"; }\n.",[1],"pt-96 { padding-top: ",[0,96],"; }\n.",[1],"pt-98 { padding-top: ",[0,98],"; }\n.",[1],"pt-100 { padding-top: ",[0,100],"; }\n.",[1],"pr-6 { padding-right: ",[0,6],"; }\n.",[1],"pr-8 { padding-right: ",[0,8],"; }\n.",[1],"pr-10 { padding-right: ",[0,10],"; }\n.",[1],"pr-12 { padding-right: ",[0,12],"; }\n.",[1],"pr-14 { padding-right: ",[0,14],"; }\n.",[1],"pr-16 { padding-right: ",[0,16],"; }\n.",[1],"pr-18 { padding-right: ",[0,18],"; }\n.",[1],"pr-20 { padding-right: ",[0,20],"; }\n.",[1],"pr-22 { padding-right: ",[0,22],"; }\n.",[1],"pr-24 { padding-right: ",[0,24],"; }\n.",[1],"pr-26 { padding-right: ",[0,26],"; }\n.",[1],"pr-28 { padding-right: ",[0,28],"; }\n.",[1],"pr-30 { padding-right: ",[0,30],"; }\n.",[1],"pr-32 { padding-right: ",[0,32],"; }\n.",[1],"pr-34 { padding-right: ",[0,34],"; }\n.",[1],"pr-36 { padding-right: ",[0,36],"; }\n.",[1],"pr-38 { padding-right: ",[0,38],"; }\n.",[1],"pr-40 { padding-right: ",[0,40],"; }\n.",[1],"pr-42 { padding-right: ",[0,42],"; }\n.",[1],"pr-44 { padding-right: ",[0,44],"; }\n.",[1],"pr-46 { padding-right: ",[0,46],"; }\n.",[1],"pr-48 { padding-right: ",[0,48],"; }\n.",[1],"pr-50 { padding-right: ",[0,50],"; }\n.",[1],"pr-52 { padding-right: ",[0,52],"; }\n.",[1],"pr-54 { padding-right: ",[0,54],"; }\n.",[1],"pr-56 { padding-right: ",[0,56],"; }\n.",[1],"pr-58 { padding-right: ",[0,58],"; }\n.",[1],"pr-60 { padding-right: ",[0,60],"; }\n.",[1],"pr-62 { padding-right: ",[0,62],"; }\n.",[1],"pr-64 { padding-right: ",[0,64],"; }\n.",[1],"pr-66 { padding-right: ",[0,66],"; }\n.",[1],"pr-68 { padding-right: ",[0,68],"; }\n.",[1],"pr-70 { padding-right: ",[0,70],"; }\n.",[1],"pr-72 { padding-right: ",[0,72],"; }\n.",[1],"pr-74 { padding-right: ",[0,74],"; }\n.",[1],"pr-76 { padding-right: ",[0,76],"; }\n.",[1],"pr-78 { padding-right: ",[0,78],"; }\n.",[1],"pr-80 { padding-right: ",[0,80],"; }\n.",[1],"pr-82 { padding-right: ",[0,82],"; }\n.",[1],"pr-84 { padding-right: ",[0,84],"; }\n.",[1],"pr-86 { padding-right: ",[0,86],"; }\n.",[1],"pr-88 { padding-right: ",[0,88],"; }\n.",[1],"pr-90 { padding-right: ",[0,90],"; }\n.",[1],"pr-92 { padding-right: ",[0,92],"; }\n.",[1],"pr-94 { padding-right: ",[0,94],"; }\n.",[1],"pr-96 { padding-right: ",[0,96],"; }\n.",[1],"pr-98 { padding-right: ",[0,98],"; }\n.",[1],"pr-100 { padding-right: ",[0,100],"; }\n.",[1],"pb-6 { padding-bottom: ",[0,6],"; }\n.",[1],"pb-8 { padding-bottom: ",[0,8],"; }\n.",[1],"pb-10 { padding-bottom: ",[0,10],"; }\n.",[1],"pb-12 { padding-bottom: ",[0,12],"; }\n.",[1],"pb-14 { padding-bottom: ",[0,14],"; }\n.",[1],"pb-16 { padding-bottom: ",[0,16],"; }\n.",[1],"pb-18 { padding-bottom: ",[0,18],"; }\n.",[1],"pb-20 { padding-bottom: ",[0,20],"; }\n.",[1],"pb-22 { padding-bottom: ",[0,22],"; }\n.",[1],"pb-24 { padding-bottom: ",[0,24],"; }\n.",[1],"pb-26 { padding-bottom: ",[0,26],"; }\n.",[1],"pb-28 { padding-bottom: ",[0,28],"; }\n.",[1],"pb-30 { padding-bottom: ",[0,30],"; }\n.",[1],"pb-32 { padding-bottom: ",[0,32],"; }\n.",[1],"pb-34 { padding-bottom: ",[0,34],"; }\n.",[1],"pb-36 { padding-bottom: ",[0,36],"; }\n.",[1],"pb-38 { padding-bottom: ",[0,38],"; }\n.",[1],"pb-40 { padding-bottom: ",[0,40],"; }\n.",[1],"pb-42 { padding-bottom: ",[0,42],"; }\n.",[1],"pb-44 { padding-bottom: ",[0,44],"; }\n.",[1],"pb-46 { padding-bottom: ",[0,46],"; }\n.",[1],"pb-48 { padding-bottom: ",[0,48],"; }\n.",[1],"pb-50 { padding-bottom: ",[0,50],"; }\n.",[1],"pb-52 { padding-bottom: ",[0,52],"; }\n.",[1],"pb-54 { padding-bottom: ",[0,54],"; }\n.",[1],"pb-56 { padding-bottom: ",[0,56],"; }\n.",[1],"pb-58 { padding-bottom: ",[0,58],"; }\n.",[1],"pb-60 { padding-bottom: ",[0,60],"; }\n.",[1],"pb-62 { padding-bottom: ",[0,62],"; }\n.",[1],"pb-64 { padding-bottom: ",[0,64],"; }\n.",[1],"pb-66 { padding-bottom: ",[0,66],"; }\n.",[1],"pb-68 { padding-bottom: ",[0,68],"; }\n.",[1],"pb-70 { padding-bottom: ",[0,70],"; }\n.",[1],"pb-72 { padding-bottom: ",[0,72],"; }\n.",[1],"pb-74 { padding-bottom: ",[0,74],"; }\n.",[1],"pb-76 { padding-bottom: ",[0,76],"; }\n.",[1],"pb-78 { padding-bottom: ",[0,78],"; }\n.",[1],"pb-80 { padding-bottom: ",[0,80],"; }\n.",[1],"pb-82 { padding-bottom: ",[0,82],"; }\n.",[1],"pb-84 { padding-bottom: ",[0,84],"; }\n.",[1],"pb-86 { padding-bottom: ",[0,86],"; }\n.",[1],"pb-88 { padding-bottom: ",[0,88],"; }\n.",[1],"pb-90 { padding-bottom: ",[0,90],"; }\n.",[1],"pb-92 { padding-bottom: ",[0,92],"; }\n.",[1],"pb-94 { padding-bottom: ",[0,94],"; }\n.",[1],"pb-96 { padding-bottom: ",[0,96],"; }\n.",[1],"pb-98 { padding-bottom: ",[0,98],"; }\n.",[1],"pb-100 { padding-bottom: ",[0,100],"; }\n.",[1],"pl-6 { padding-left: ",[0,6],"; }\n.",[1],"pl-8 { padding-left: ",[0,8],"; }\n.",[1],"pl-10 { padding-left: ",[0,10],"; }\n.",[1],"pl-12 { padding-left: ",[0,12],"; }\n.",[1],"pl-14 { padding-left: ",[0,14],"; }\n.",[1],"pl-16 { padding-left: ",[0,16],"; }\n.",[1],"pl-18 { padding-left: ",[0,18],"; }\n.",[1],"pl-20 { padding-left: ",[0,20],"; }\n.",[1],"pl-22 { padding-left: ",[0,22],"; }\n.",[1],"pl-24 { padding-left: ",[0,24],"; }\n.",[1],"pl-26 { padding-left: ",[0,26],"; }\n.",[1],"pl-28 { padding-left: ",[0,28],"; }\n.",[1],"pl-30 { padding-left: ",[0,30],"; }\n.",[1],"pl-32 { padding-left: ",[0,32],"; }\n.",[1],"pl-34 { padding-left: ",[0,34],"; }\n.",[1],"pl-36 { padding-left: ",[0,36],"; }\n.",[1],"pl-38 { padding-left: ",[0,38],"; }\n.",[1],"pl-40 { padding-left: ",[0,40],"; }\n.",[1],"pl-42 { padding-left: ",[0,42],"; }\n.",[1],"pl-44 { padding-left: ",[0,44],"; }\n.",[1],"pl-46 { padding-left: ",[0,46],"; }\n.",[1],"pl-48 { padding-left: ",[0,48],"; }\n.",[1],"pl-50 { padding-left: ",[0,50],"; }\n.",[1],"pl-52 { padding-left: ",[0,52],"; }\n.",[1],"pl-54 { padding-left: ",[0,54],"; }\n.",[1],"pl-56 { padding-left: ",[0,56],"; }\n.",[1],"pl-58 { padding-left: ",[0,58],"; }\n.",[1],"pl-60 { padding-left: ",[0,60],"; }\n.",[1],"pl-62 { padding-left: ",[0,62],"; }\n.",[1],"pl-64 { padding-left: ",[0,64],"; }\n.",[1],"pl-66 { padding-left: ",[0,66],"; }\n.",[1],"pl-68 { padding-left: ",[0,68],"; }\n.",[1],"pl-70 { padding-left: ",[0,70],"; }\n.",[1],"pl-72 { padding-left: ",[0,72],"; }\n.",[1],"pl-74 { padding-left: ",[0,74],"; }\n.",[1],"pl-76 { padding-left: ",[0,76],"; }\n.",[1],"pl-78 { padding-left: ",[0,78],"; }\n.",[1],"pl-80 { padding-left: ",[0,80],"; }\n.",[1],"pl-82 { padding-left: ",[0,82],"; }\n.",[1],"pl-84 { padding-left: ",[0,84],"; }\n.",[1],"pl-86 { padding-left: ",[0,86],"; }\n.",[1],"pl-88 { padding-left: ",[0,88],"; }\n.",[1],"pl-90 { padding-left: ",[0,90],"; }\n.",[1],"pl-92 { padding-left: ",[0,92],"; }\n.",[1],"pl-94 { padding-left: ",[0,94],"; }\n.",[1],"pl-96 { padding-left: ",[0,96],"; }\n.",[1],"pl-98 { padding-left: ",[0,98],"; }\n.",[1],"pl-100 { padding-left: ",[0,100],"; }\n.",[1],"fs-6 { font-size: ",[0,6],"; }\n.",[1],"fs-8 { font-size: ",[0,8],"; }\n.",[1],"fs-10 { font-size: ",[0,10],"; }\n.",[1],"fs-12 { font-size: ",[0,12],"; }\n.",[1],"fs-14 { font-size: ",[0,14],"; }\n.",[1],"fs-16 { font-size: ",[0,16],"; }\n.",[1],"fs-18 { font-size: ",[0,18],"; }\n.",[1],"fs-20 { font-size: ",[0,20],"; }\n.",[1],"fs-22 { font-size: ",[0,22],"; }\n.",[1],"fs-24 { font-size: ",[0,24],"; }\n.",[1],"fs-26 { font-size: ",[0,26],"; }\n.",[1],"fs-28 { font-size: ",[0,28],"; }\n.",[1],"fs-30 { font-size: ",[0,30],"; }\n.",[1],"fs-32 { font-size: ",[0,32],"; }\n.",[1],"fs-34 { font-size: ",[0,34],"; }\n.",[1],"fs-36 { font-size: ",[0,36],"; }\n.",[1],"fs-38 { font-size: ",[0,38],"; }\n.",[1],"fs-40 { font-size: ",[0,40],"; }\n.",[1],"fs-42 { font-size: ",[0,42],"; }\n.",[1],"fs-44 { font-size: ",[0,44],"; }\n.",[1],"fs-46 { font-size: ",[0,46],"; }\n.",[1],"fs-48 { font-size: ",[0,48],"; }\n.",[1],"fs-50 { font-size: ",[0,50],"; }\n.",[1],"fs-52 { font-size: ",[0,52],"; }\n.",[1],"fs-54 { font-size: ",[0,54],"; }\n.",[1],"fs-56 { font-size: ",[0,56],"; }\n.",[1],"fs-58 { font-size: ",[0,58],"; }\n.",[1],"fs-60 { font-size: ",[0,60],"; }\n.",[1],"fs-62 { font-size: ",[0,62],"; }\n.",[1],"fs-64 { font-size: ",[0,64],"; }\n.",[1],"fs-66 { font-size: ",[0,66],"; }\n.",[1],"fs-68 { font-size: ",[0,68],"; }\n.",[1],"fs-70 { font-size: ",[0,70],"; }\n.",[1],"fs-72 { font-size: ",[0,72],"; }\n.",[1],"fs-74 { font-size: ",[0,74],"; }\n.",[1],"fs-76 { font-size: ",[0,76],"; }\n.",[1],"fs-78 { font-size: ",[0,78],"; }\n.",[1],"fs-80 { font-size: ",[0,80],"; }\n.",[1],"fs-82 { font-size: ",[0,82],"; }\n.",[1],"fs-84 { font-size: ",[0,84],"; }\n.",[1],"fs-86 { font-size: ",[0,86],"; }\n.",[1],"fs-88 { font-size: ",[0,88],"; }\n.",[1],"br-2 { border-radius: ",[0,2],"; }\n.",[1],"br-4 { border-radius: ",[0,4],"; }\n.",[1],"br-6 { border-radius: ",[0,6],"; }\n.",[1],"br-8 { border-radius: ",[0,8],"; }\n.",[1],"br-10 { border-radius: ",[0,10],"; }\n.",[1],"br-12 { border-radius: ",[0,12],"; }\n.",[1],"br-14 { border-radius: ",[0,14],"; }\n.",[1],"br-16 { border-radius: ",[0,16],"; }\n.",[1],"br-18 { border-radius: ",[0,18],"; }\n.",[1],"br-20 { border-radius: ",[0,20],"; }\n.",[1],"br-22 { border-radius: ",[0,22],"; }\n.",[1],"br-24 { border-radius: ",[0,24],"; }\n.",[1],"br-26 { border-radius: ",[0,26],"; }\n.",[1],"br-28 { border-radius: ",[0,28],"; }\n.",[1],"br-30 { border-radius: ",[0,30],"; }\n.",[1],"br-32 { border-radius: ",[0,32],"; }\n.",[1],"br-34 { border-radius: ",[0,34],"; }\n.",[1],"br-36 { border-radius: ",[0,36],"; }\n.",[1],"br-38 { border-radius: ",[0,38],"; }\n.",[1],"br-40 { border-radius: ",[0,40],"; }\n.",[1],"br-42 { border-radius: ",[0,42],"; }\n.",[1],"br-44 { border-radius: ",[0,44],"; }\n.",[1],"br-46 { border-radius: ",[0,46],"; }\n.",[1],"br-48 { border-radius: ",[0,48],"; }\n.",[1],"br-50 { border-radius: ",[0,50],"; }\n.",[1],"br-52 { border-radius: ",[0,52],"; }\n.",[1],"br-54 { border-radius: ",[0,54],"; }\n.",[1],"br-56 { border-radius: ",[0,56],"; }\n.",[1],"br-58 { border-radius: ",[0,58],"; }\n.",[1],"br-60 { border-radius: ",[0,60],"; }\n.",[1],"br-62 { border-radius: ",[0,62],"; }\n.",[1],"br-64 { border-radius: ",[0,64],"; }\n.",[1],"br-66 { border-radius: ",[0,66],"; }\n.",[1],"br-68 { border-radius: ",[0,68],"; }\n.",[1],"br-70 { border-radius: ",[0,70],"; }\n.",[1],"br-72 { border-radius: ",[0,72],"; }\n.",[1],"br-74 { border-radius: ",[0,74],"; }\n.",[1],"br-76 { border-radius: ",[0,76],"; }\n.",[1],"br-78 { border-radius: ",[0,78],"; }\n.",[1],"br-80 { border-radius: ",[0,80],"; }\n.",[1],"br-82 { border-radius: ",[0,82],"; }\n.",[1],"br-84 { border-radius: ",[0,84],"; }\n.",[1],"br-86 { border-radius: ",[0,86],"; }\n.",[1],"br-88 { border-radius: ",[0,88],"; }\n.",[1],"br-90 { border-radius: ",[0,90],"; }\n.",[1],"br-92 { border-radius: ",[0,92],"; }\n.",[1],"br-94 { border-radius: ",[0,94],"; }\n.",[1],"br-96 { border-radius: ",[0,96],"; }\n.",[1],"br-98 { border-radius: ",[0,98],"; }\n.",[1],"br-100 { border-radius: ",[0,100],"; }\n.",[1],"br-circle { border-radius: 50%; }\n.",[1],"opacity-01 { opacity: 0.1; }\n.",[1],"opacity-02 { opacity: 0.2; }\n.",[1],"opacity-03 { opacity: 0.3; }\n.",[1],"opacity-04 { opacity: 0.4; }\n.",[1],"opacity-05 { opacity: 0.5; }\n.",[1],"opacity-06 { opacity: 0.6; }\n.",[1],"opacity-07 { opacity: 0.7; }\n.",[1],"opacity-08 { opacity: 0.8; }\n.",[1],"opacity-09 { opacity: 0.9; }\n.",[1],"fw-100 { font-weight: 100; }\n.",[1],"fw-200 { font-weight: 200; }\n.",[1],"fw-300 { font-weight: 300; }\n.",[1],"fw-400 { font-weight: 400; }\n.",[1],"fw-500 { font-weight: 500; }\n.",[1],"fw-600 { font-weight: 600; }\n.",[1],"fw-700 { font-weight: 700; }\n.",[1],"fw-8 { font-weight: 800; }\n.",[1],"fw-9 { font-weight: 900; }\n.",[1],"bg-transform { background: -webkit-linear-gradient(342deg, #556fe3, #7abcf3); background: linear-gradient(108deg, #556fe3, #7abcf3); }\nwx-view, wx-scroll-view, wx-text, wx-label, wx-swiper, wx-cover-view, wx-navigator { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; }\nwx-uni-radio .",[1],"uni-radio-input.",[1],"uni-radio-input-checked:before { font-size: ",[0,16],"; }\nwx-uni-radio .",[1],"uni-radio-input { width: ",[0,30],"; height: ",[0,30],"; }\nwx-uni-tabbar .",[1],"uni-tabbar { z-index: 0; }\nwx-scroll-view { height: 100%; box-sizing: border-box; }\n.",[1],"status { height: var(--status-bar-height); }\n.",[1],"slider { margin: ",[0,60]," 0; width: ",[0,300],"; height: ",[0,300],"; }\n.",[1],"shelter { position: absolute; width: 100%; height: 100%; background-color: #333; opacity: 0.28; -webkit-transition: opacity 0.3s; transition: opacity 0.3s; }\n.",[1],"ellipsis { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n.",[1],"navigator-hover { opacity: 0.6; background: transparent; }\n",],];
function makeup(file, opt) {
var _n = typeof(file) === "number";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 ) 
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid + "This wxss file is ignored." );
return;
}
}
Ca={};
css = makeup(file, opt);
if ( !style ) 
{
var head = document.head || document.getElementsByTagName('head')[0];
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else 
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead([])();setCssToHead([[2,0]],undefined,{path:"./app.wxss"})();

__wxAppCode__['app.wxss']=setCssToHead([[2,0]],undefined,{path:"./app.wxss"});    
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['pages/about.wxss']=undefined;    
__wxAppCode__['pages/about.wxml']=$gwx('./pages/about.wxml');

__wxAppCode__['pages/addElderly.wxss']=undefined;    
__wxAppCode__['pages/addElderly.wxml']=$gwx('./pages/addElderly.wxml');

__wxAppCode__['pages/conclusion.wxss']=undefined;    
__wxAppCode__['pages/conclusion.wxml']=$gwx('./pages/conclusion.wxml');

__wxAppCode__['pages/enclosure.wxss']=undefined;    
__wxAppCode__['pages/enclosure.wxml']=$gwx('./pages/enclosure.wxml');

__wxAppCode__['pages/home.wxss']=undefined;    
__wxAppCode__['pages/home.wxml']=$gwx('./pages/home.wxml');

__wxAppCode__['pages/index.wxss']=setCssToHead([".",[1],"root, .",[1],"main { -webkit-box-orient: vertical; -webkit-box-direction: reverse; -webkit-flex-direction: column-reverse; flex-direction: column-reverse; }\n.",[1],"logo-index { width: ",[0,210],"; height: ",[0,230],"; }\n.",[1],"input { box-sizing: content-box; border-bottom: 1px solid #373737; }\n.",[1],"logo-step { width: ",[0,160],"; height: ",[0,160],"; }\n.",[1],"input-container { height: ",[0,550],"; }\n",],undefined,{path:"./pages/index.wxss"});    
__wxAppCode__['pages/index.wxml']=$gwx('./pages/index.wxml');

__wxAppCode__['pages/kangyang.wxss']=undefined;    
__wxAppCode__['pages/kangyang.wxml']=$gwx('./pages/kangyang.wxml');

__wxAppCode__['pages/login.wxss']=setCssToHead([".",[1],"root, .",[1],"main { -webkit-box-orient: vertical; -webkit-box-direction: reverse; -webkit-flex-direction: column-reverse; flex-direction: column-reverse; }\n.",[1],"logo-index { width: ",[0,210],"; height: ",[0,230],"; }\n.",[1],"input { box-sizing: content-box; border-bottom: 1px solid #373737; }\n.",[1],"logo-step { width: ",[0,160],"; height: ",[0,160],"; }\n.",[1],"input-container { height: ",[0,550],"; }\n",],undefined,{path:"./pages/login.wxss"});    
__wxAppCode__['pages/login.wxml']=$gwx('./pages/login.wxml');

__wxAppCode__['pages/modifyPassword.wxss']=undefined;    
__wxAppCode__['pages/modifyPassword.wxml']=$gwx('./pages/modifyPassword.wxml');

__wxAppCode__['pages/my.wxss']=undefined;    
__wxAppCode__['pages/my.wxml']=$gwx('./pages/my.wxml');

__wxAppCode__['pages/register.wxss']=setCssToHead([".",[1],"root, .",[1],"main { -webkit-box-orient: vertical; -webkit-box-direction: reverse; -webkit-flex-direction: column-reverse; flex-direction: column-reverse; }\n.",[1],"logo-index { width: ",[0,210],"; height: ",[0,230],"; }\n.",[1],"input { box-sizing: content-box; border-bottom: 1px solid #373737; }\n.",[1],"logo-step { width: ",[0,160],"; height: ",[0,160],"; }\n.",[1],"input-container { height: ",[0,550],"; }\n",],undefined,{path:"./pages/register.wxss"});    
__wxAppCode__['pages/register.wxml']=$gwx('./pages/register.wxml');

__wxAppCode__['pages/remoteDoor.wxss']=undefined;    
__wxAppCode__['pages/remoteDoor.wxml']=$gwx('./pages/remoteDoor.wxml');

__wxAppCode__['pages/setting.wxss']=undefined;    
__wxAppCode__['pages/setting.wxml']=$gwx('./pages/setting.wxml');

__wxAppCode__['pages/userInfo.wxss']=undefined;    
__wxAppCode__['pages/userInfo.wxml']=$gwx('./pages/userInfo.wxml');

__wxAppCode__['pages/warning.wxss']=undefined;    
__wxAppCode__['pages/warning.wxml']=$gwx('./pages/warning.wxml');

;var __pageFrameEndTime__ = Date.now();
(function() {
        window.UniLaunchWebviewReady = function(isWebviewReady){
          // !isWebviewReady && console.log('launchWebview fallback ready')
          plus.webview.postMessageToUniNView({type: 'UniWebviewReady-' + plus.webview.currentWebview().id}, '__uniapp__service');
        }
        UniLaunchWebviewReady(true);
})();
