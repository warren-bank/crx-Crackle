// ==UserScript==
// @name         Crackle
// @description  Removes clutter to reduce CPU load and improve site usability. Can transfer video stream to alternate video players: WebCast-Reloaded, ExoAirPlayer.
// @version      1.0.0
// @match        *://crackle.com/*
// @match        *://sonycrackle.com/*
// @match        *://*.crackle.com/*
// @match        *://*.sonycrackle.com/*
// @icon         https://www.crackle.com/config/avod/favicon/favicon.ico
// @run-at       document-idle
// @homepage     https://github.com/warren-bank/crx-Crackle/tree/webmonkey-userscript/es5
// @supportURL   https://github.com/warren-bank/crx-Crackle/issues
// @downloadURL  https://github.com/warren-bank/crx-Crackle/raw/webmonkey-userscript/es5/webmonkey-userscript/Crackle.user.js
// @updateURL    https://github.com/warren-bank/crx-Crackle/raw/webmonkey-userscript/es5/webmonkey-userscript/Crackle.user.js
// @namespace    warren-bank
// @author       Warren Bank
// @copyright    Warren Bank
// ==/UserScript==

// ----------------------------------------------------------------------------- constants

var user_options = {
  "redirect_to_webcast_reloaded": true,
  "force_http":                   true,
  "force_https":                  false,

  // 0: silent
  // 1: more important
  // 9: less important
  "debug_verbosity":              0
}

// ----------------------------------------------------------------------------- libraries

// https://github.com/jcsirot/digest.js
// https://cdn.jsdelivr.net/npm/digest-js@0.3.0/build/digest.min.js
/*! digest-js - v0.3.0 - 2015-09-13 */
/*! ***** BEGIN LICENSE BLOCK *****
 *!
 *! Copyright 2011-2012, 2014 Jean-Christophe Sirot <sirot@chelonix.com>
 *!
 *! This file is part of digest.js
 *!
 *! digest.js is free software: you can redistribute it and/or modify it under
 *! the terms of the GNU General Public License as published by the Free Software
 *! Foundation, either version 3 of the License, or (at your option) any later
 *! version.
 *!
 *! digest.js is distributed in the hope that it will be useful, but
 *! WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 *! or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for
 *! more details.
 *!
 *! You should have received a copy of the GNU General Public License along with
 *! digest.js. If not, see http://www.gnu.org/licenses/.
 *!
 *! ***** END LICENSE BLOCK *****  */
!function(){"use strict";ArrayBuffer.prototype.slice||(ArrayBuffer.prototype.slice=function(a,b){var c,d=new Uint8Array(this);void 0===b&&(b=d.length);var e=new ArrayBuffer(b-a),f=new Uint8Array(e);for(c=0;c<f.length;c++)f[c]=d[c+a];return e})}(),function(a){"use strict";function b(){}function c(){}function d(){}b.prototype.processBlock=function(a){var b,c=this.current[0],d=this.current[1],e=this.current[2],f=this.current[3],g=a[3]<<24|a[2]<<16|a[1]<<8|a[0],h=a[7]<<24|a[6]<<16|a[5]<<8|a[4],i=a[11]<<24|a[10]<<16|a[9]<<8|a[8],j=a[15]<<24|a[14]<<16|a[13]<<8|a[12],k=a[19]<<24|a[18]<<16|a[17]<<8|a[16],l=a[23]<<24|a[22]<<16|a[21]<<8|a[20],m=a[27]<<24|a[26]<<16|a[25]<<8|a[24],n=a[31]<<24|a[30]<<16|a[29]<<8|a[28],o=a[35]<<24|a[34]<<16|a[33]<<8|a[32],p=a[39]<<24|a[38]<<16|a[37]<<8|a[36],q=a[43]<<24|a[42]<<16|a[41]<<8|a[40],r=a[47]<<24|a[46]<<16|a[45]<<8|a[44],s=a[51]<<24|a[50]<<16|a[49]<<8|a[48],t=a[55]<<24|a[54]<<16|a[53]<<8|a[52],u=a[59]<<24|a[58]<<16|a[57]<<8|a[56],v=a[63]<<24|a[62]<<16|a[61]<<8|a[60];b=c+g+3614090360+(d&e|~d&f)|0,c=d+(b<<7|b>>>25)|0,b=f+h+3905402710+(c&d|~c&e)|0,f=c+(b<<12|b>>>20)|0,b=e+i+606105819+(f&c|~f&d)|0,e=f+(b<<17|b>>>15)|0,b=d+j+3250441966+(e&f|~e&c)|0,d=e+(b<<22|b>>>10)|0,b=c+k+4118548399+(d&e|~d&f)|0,c=d+(b<<7|b>>>25)|0,b=f+l+1200080426+(c&d|~c&e)|0,f=c+(b<<12|b>>>20)|0,b=e+m+2821735955+(f&c|~f&d)|0,e=f+(b<<17|b>>>15)|0,b=d+n+4249261313+(e&f|~e&c)|0,d=e+(b<<22|b>>>10)|0,b=c+o+1770035416+(d&e|~d&f)|0,c=d+(b<<7|b>>>25)|0,b=f+p+2336552879+(c&d|~c&e)|0,f=c+(b<<12|b>>>20)|0,b=e+q+4294925233+(f&c|~f&d)|0,e=f+(b<<17|b>>>15)|0,b=d+r+2304563134+(e&f|~e&c)|0,d=e+(b<<22|b>>>10)|0,b=c+s+1804603682+(d&e|~d&f)|0,c=d+(b<<7|b>>>25)|0,b=f+t+4254626195+(c&d|~c&e)|0,f=c+(b<<12|b>>>20)|0,b=e+u+2792965006+(f&c|~f&d)|0,e=f+(b<<17|b>>>15)|0,b=d+v+1236535329+(e&f|~e&c)|0,d=e+(b<<22|b>>>10)|0,b=c+h+4129170786+(f&d|~f&e)|0,c=d+(b<<5|b>>>27)|0,b=f+m+3225465664+(e&c|~e&d)|0,f=c+(b<<9|b>>>23)|0,b=e+r+643717713+(d&f|~d&c)|0,e=f+(b<<14|b>>>18)|0,b=d+g+3921069994+(c&e|~c&f)|0,d=e+(b<<20|b>>>12)|0,b=c+l+3593408605+(f&d|~f&e)|0,c=d+(b<<5|b>>>27)|0,b=f+q+38016083+(e&c|~e&d)|0,f=c+(b<<9|b>>>23)|0,b=e+v+3634488961+(d&f|~d&c)|0,e=f+(b<<14|b>>>18)|0,b=d+k+3889429448+(c&e|~c&f)|0,d=e+(b<<20|b>>>12)|0,b=c+p+568446438+(f&d|~f&e)|0,c=d+(b<<5|b>>>27)|0,b=f+u+3275163606+(e&c|~e&d)|0,f=c+(b<<9|b>>>23)|0,b=e+j+4107603335+(d&f|~d&c)|0,e=f+(b<<14|b>>>18)|0,b=d+o+1163531501+(c&e|~c&f)|0,d=e+(b<<20|b>>>12)|0,b=c+t+2850285829+(f&d|~f&e)|0,c=d+(b<<5|b>>>27)|0,b=f+i+4243563512+(e&c|~e&d)|0,f=c+(b<<9|b>>>23)|0,b=e+n+1735328473+(d&f|~d&c)|0,e=f+(b<<14|b>>>18)|0,b=d+s+2368359562+(c&e|~c&f)|0,d=e+(b<<20|b>>>12)|0,b=c+l+4294588738+(d^e^f)|0,c=d+(b<<4|b>>>28)|0,b=f+o+2272392833+(c^d^e)|0,f=c+(b<<11|b>>>21)|0,b=e+r+1839030562+(f^c^d)|0,e=f+(b<<16|b>>>16)|0,b=d+u+4259657740+(e^f^c)|0,d=e+(b<<23|b>>>9)|0,b=c+h+2763975236+(d^e^f)|0,c=d+(b<<4|b>>>28)|0,b=f+k+1272893353+(c^d^e)|0,f=c+(b<<11|b>>>21)|0,b=e+n+4139469664+(f^c^d)|0,e=f+(b<<16|b>>>16)|0,b=d+q+3200236656+(e^f^c)|0,d=e+(b<<23|b>>>9)|0,b=c+t+681279174+(d^e^f)|0,c=d+(b<<4|b>>>28)|0,b=f+g+3936430074+(c^d^e)|0,f=c+(b<<11|b>>>21)|0,b=e+j+3572445317+(f^c^d)|0,e=f+(b<<16|b>>>16)|0,b=d+m+76029189+(e^f^c)|0,d=e+(b<<23|b>>>9)|0,b=c+p+3654602809+(d^e^f)|0,c=d+(b<<4|b>>>28)|0,b=f+s+3873151461+(c^d^e)|0,f=c+(b<<11|b>>>21)|0,b=e+v+530742520+(f^c^d)|0,e=f+(b<<16|b>>>16)|0,b=d+i+3299628645+(e^f^c)|0,d=e+(b<<23|b>>>9)|0,b=c+g+4096336452+(e^(d|~f))|0,c=d+(b<<6|b>>>26)|0,b=f+n+1126891415+(d^(c|~e))|0,f=c+(b<<10|b>>>22)|0,b=e+u+2878612391+(c^(f|~d))|0,e=f+(b<<15|b>>>17)|0,b=d+l+4237533241+(f^(e|~c))|0,d=e+(b<<21|b>>>11)|0,b=c+s+1700485571+(e^(d|~f))|0,c=d+(b<<6|b>>>26)|0,b=f+j+2399980690+(d^(c|~e))|0,f=c+(b<<10|b>>>22)|0,b=e+q+4293915773+(c^(f|~d))|0,e=f+(b<<15|b>>>17)|0,b=d+h+2240044497+(f^(e|~c))|0,d=e+(b<<21|b>>>11)|0,b=c+o+1873313359+(e^(d|~f))|0,c=d+(b<<6|b>>>26)|0,b=f+v+4264355552+(d^(c|~e))|0,f=c+(b<<10|b>>>22)|0,b=e+m+2734768916+(c^(f|~d))|0,e=f+(b<<15|b>>>17)|0,b=d+t+1309151649+(f^(e|~c))|0,d=e+(b<<21|b>>>11)|0,b=c+k+4149444226+(e^(d|~f))|0,c=d+(b<<6|b>>>26)|0,b=f+r+3174756917+(d^(c|~e))|0,f=c+(b<<10|b>>>22)|0,b=e+i+718787259+(c^(f|~d))|0,e=f+(b<<15|b>>>17)|0,b=d+p+3951481745+(f^(e|~c))|0,d=e+(b<<21|b>>>11)|0,this.current[0]+=c,this.current[1]+=d,this.current[2]+=e,this.current[3]+=f,this.currentLen+=64},b.prototype.doPadding=function(){var a=8*(this.inLen+this.currentLen),b=0,c=4294967295&a,d=this.inLen<=55?55-this.inLen:119-this.inLen,e=new Uint8Array(new ArrayBuffer(d+1+8));return e[0]=128,e[e.length-8]=255&c,e[e.length-7]=c>>>8&255,e[e.length-6]=c>>>16&255,e[e.length-5]=c>>>24&255,e[e.length-4]=255&b,e[e.length-3]=b>>>8&255,e[e.length-2]=b>>>16&255,e[e.length-1]=b>>>24&255,e},b.prototype.getDigest=function(){var a=new Uint8Array(new ArrayBuffer(16));return a[0]=255&this.current[0],a[1]=this.current[0]>>>8&255,a[2]=this.current[0]>>>16&255,a[3]=this.current[0]>>>24&255,a[4]=255&this.current[1],a[5]=this.current[1]>>>8&255,a[6]=this.current[1]>>>16&255,a[7]=this.current[1]>>>24&255,a[8]=255&this.current[2],a[9]=this.current[2]>>>8&255,a[10]=this.current[2]>>>16&255,a[11]=this.current[2]>>>24&255,a[12]=255&this.current[3],a[13]=this.current[3]>>>8&255,a[14]=this.current[3]>>>16&255,a[15]=this.current[3]>>>24&255,a.buffer},b.prototype.reset=function(){this.currentLen=0,this.inLen=0,this.current=new Uint32Array(new ArrayBuffer(16)),this.current[0]=1732584193,this.current[1]=4023233417,this.current[2]=2562383102,this.current[3]=271733878},b.prototype.blockLen=64,b.prototype.digestLen=16,c.prototype.processBlock=function(a){var b,c,d=this.current[0],e=this.current[1],f=this.current[2],g=this.current[3],h=this.current[4],i=[a[0]<<24|a[1]<<16|a[2]<<8|a[3],a[4]<<24|a[5]<<16|a[6]<<8|a[7],a[8]<<24|a[9]<<16|a[10]<<8|a[11],a[12]<<24|a[13]<<16|a[14]<<8|a[15],a[16]<<24|a[17]<<16|a[18]<<8|a[19],a[20]<<24|a[21]<<16|a[22]<<8|a[23],a[24]<<24|a[25]<<16|a[26]<<8|a[27],a[28]<<24|a[29]<<16|a[30]<<8|a[31],a[32]<<24|a[33]<<16|a[34]<<8|a[35],a[36]<<24|a[37]<<16|a[38]<<8|a[39],a[40]<<24|a[41]<<16|a[42]<<8|a[43],a[44]<<24|a[45]<<16|a[46]<<8|a[47],a[48]<<24|a[49]<<16|a[50]<<8|a[51],a[52]<<24|a[53]<<16|a[54]<<8|a[55],a[56]<<24|a[57]<<16|a[58]<<8|a[59],a[60]<<24|a[61]<<16|a[62]<<8|a[63]];for(c=16;80>c;c++)i.push((i[c-3]^i[c-8]^i[c-14]^i[c-16])<<1|(i[c-3]^i[c-8]^i[c-14]^i[c-16])>>>31);for(c=0;80>c;c++)b=(d<<5|d>>>27)+h+i[c],b+=20>c?(e&f|~e&g)+1518500249|0:40>c?(e^f^g)+1859775393|0:60>c?(e&f|e&g|f&g)+2400959708|0:(e^f^g)+3395469782|0,h=g,g=f,f=e<<30|e>>>2,e=d,d=b;this.current[0]+=d,this.current[1]+=e,this.current[2]+=f,this.current[3]+=g,this.current[4]+=h,this.currentLen+=64},c.prototype.doPadding=function(){var a=8*(this.inLen+this.currentLen),b=0,c=4294967295&a,d=this.inLen<=55?55-this.inLen:119-this.inLen,e=new Uint8Array(new ArrayBuffer(d+1+8));return e[0]=128,e[e.length-1]=255&c,e[e.length-2]=c>>>8&255,e[e.length-3]=c>>>16&255,e[e.length-4]=c>>>24&255,e[e.length-5]=255&b,e[e.length-6]=b>>>8&255,e[e.length-7]=b>>>16&255,e[e.length-8]=b>>>24&255,e},c.prototype.getDigest=function(){var a=new Uint8Array(new ArrayBuffer(20));return a[3]=255&this.current[0],a[2]=this.current[0]>>>8&255,a[1]=this.current[0]>>>16&255,a[0]=this.current[0]>>>24&255,a[7]=255&this.current[1],a[6]=this.current[1]>>>8&255,a[5]=this.current[1]>>>16&255,a[4]=this.current[1]>>>24&255,a[11]=255&this.current[2],a[10]=this.current[2]>>>8&255,a[9]=this.current[2]>>>16&255,a[8]=this.current[2]>>>24&255,a[15]=255&this.current[3],a[14]=this.current[3]>>>8&255,a[13]=this.current[3]>>>16&255,a[12]=this.current[3]>>>24&255,a[19]=255&this.current[4],a[18]=this.current[4]>>>8&255,a[17]=this.current[4]>>>16&255,a[16]=this.current[4]>>>24&255,a.buffer},c.prototype.reset=function(){this.currentLen=0,this.inLen=0,this.current=new Uint32Array(new ArrayBuffer(20)),this.current[0]=1732584193,this.current[1]=4023233417,this.current[2]=2562383102,this.current[3]=271733878,this.current[4]=3285377520},c.prototype.blockLen=64,c.prototype.digestLen=20,d.prototype.processBlock=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t=this.current[0],u=this.current[1],v=this.current[2],w=this.current[3],x=this.current[4],y=this.current[5],z=this.current[6],A=this.current[7];d=a[0]<<24|a[1]<<16|a[2]<<8|a[3],e=a[4]<<24|a[5]<<16|a[6]<<8|a[7],f=a[8]<<24|a[9]<<16|a[10]<<8|a[11],g=a[12]<<24|a[13]<<16|a[14]<<8|a[15],h=a[16]<<24|a[17]<<16|a[18]<<8|a[19],i=a[20]<<24|a[21]<<16|a[22]<<8|a[23],j=a[24]<<24|a[25]<<16|a[26]<<8|a[27],k=a[28]<<24|a[29]<<16|a[30]<<8|a[31],l=a[32]<<24|a[33]<<16|a[34]<<8|a[35],m=a[36]<<24|a[37]<<16|a[38]<<8|a[39],n=a[40]<<24|a[41]<<16|a[42]<<8|a[43],o=a[44]<<24|a[45]<<16|a[46]<<8|a[47],p=a[48]<<24|a[49]<<16|a[50]<<8|a[51],q=a[52]<<24|a[53]<<16|a[54]<<8|a[55],r=a[56]<<24|a[57]<<16|a[58]<<8|a[59],s=a[60]<<24|a[61]<<16|a[62]<<8|a[63];for(var B=[d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s],C=16;64>C;C++)B.push(((B[C-2]>>>17|B[C-2]<<15)^(B[C-2]>>>19|B[C-2]<<13)^B[C-2]>>>10)+B[C-7]+((B[C-15]>>>7|B[C-15]<<25)^(B[C-15]>>>18|B[C-15]<<14)^B[C-15]>>>3)+B[C-16]|0);for(var D=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],E=0;64>E;E++)b=A+((x>>>6|x<<26)^(x>>>11|x<<21)^(x>>>25|x<<7))+(x&y^~x&z)+D[E]+B[E]|0,c=((t>>>2|t<<30)^(t>>>13|t<<19)^(t>>>22|t<<10))+(t&u^u&v^t&v)|0,A=z,z=y,y=x,x=w+b|0,w=v,v=u,u=t,t=b+c|0;this.current[0]+=t,this.current[1]+=u,this.current[2]+=v,this.current[3]+=w,this.current[4]+=x,this.current[5]+=y,this.current[6]+=z,this.current[7]+=A,this.currentLen+=64},d.prototype.doPadding=function(){var a=8*(this.inLen+this.currentLen),b=0,c=0|a,d=this.inLen<=55?55-this.inLen:119-this.inLen,e=new Uint8Array(new ArrayBuffer(d+1+8));return e[0]=128,e[e.length-1]=255&c,e[e.length-2]=c>>>8&255,e[e.length-3]=c>>>16&255,e[e.length-4]=c>>>24&255,e[e.length-5]=255&b,e[e.length-6]=b>>>8&255,e[e.length-7]=b>>>16&255,e[e.length-8]=b>>>24&255,e},d.prototype.getDigest=function(){var a=new Uint8Array(new ArrayBuffer(32));return a[3]=255&this.current[0],a[2]=this.current[0]>>>8&255,a[1]=this.current[0]>>>16&255,a[0]=this.current[0]>>>24&255,a[7]=255&this.current[1],a[6]=this.current[1]>>>8&255,a[5]=this.current[1]>>>16&255,a[4]=this.current[1]>>>24&255,a[11]=255&this.current[2],a[10]=this.current[2]>>>8&255,a[9]=this.current[2]>>>16&255,a[8]=this.current[2]>>>24&255,a[15]=255&this.current[3],a[14]=this.current[3]>>>8&255,a[13]=this.current[3]>>>16&255,a[12]=this.current[3]>>>24&255,a[19]=255&this.current[4],a[18]=this.current[4]>>>8&255,a[17]=this.current[4]>>>16&255,a[16]=this.current[4]>>>24&255,a[23]=255&this.current[5],a[22]=this.current[5]>>>8&255,a[21]=this.current[5]>>>16&255,a[20]=this.current[5]>>>24&255,a[27]=255&this.current[6],a[26]=this.current[6]>>>8&255,a[25]=this.current[6]>>>16&255,a[24]=this.current[6]>>>24&255,a[31]=255&this.current[7],a[30]=this.current[7]>>>8&255,a[29]=this.current[7]>>>16&255,a[28]=this.current[7]>>>24&255,a.buffer},d.prototype.reset=function(){this.currentLen=0,this.inLen=0,this.current=new Uint32Array(new ArrayBuffer(32)),this.current[0]=1779033703,this.current[1]=3144134277,this.current[2]=1013904242,this.current[3]=2773480762,this.current[4]=1359893119,this.current[5]=2600822924,this.current[6]=528734635,this.current[7]=1541459225},d.prototype.blockLen=64,d.prototype.digestLen=32;var e=function(a){var b,c=new ArrayBuffer(a.length),d=new Uint8Array(c);for(b=0;b<a.length;b++)d[b]=a.charCodeAt(b);return d},f=function(a){var b=new ArrayBuffer(1),c=new Uint8Array(b);return c[0]=a,c},g=function(a){if(a.constructor===Uint8Array)return a;if(a.constructor===ArrayBuffer)return new Uint8Array(a);if(a.constructor===String)return e(a);if(a.constructor===Number){if(a>255)throw"For more than one byte, use an array buffer";if(0>a)throw"Input value must be positive";return f(a)}throw"Unsupported type"},h=function(a){var b=new Uint8Array(new ArrayBuffer(4));return b[0]=(4278190080&a)>>24,b[1]=(16711680&a)>>16,b[2]=(65280&a)>>8,b[3]=255&a,b},i=function(a){var b=function(a){for(var b=a.length,c=0;b>0;){var d=this.blockLen-this.inLen;d>b&&(d=b);var e=a.subarray(c,c+d);this.inbuf.set(e,this.inLen),c+=d,b-=d,this.inLen+=d,this.inLen===this.blockLen&&(this.processBlock(this.inbuf),this.inLen=0)}},c=function(){var a=this.doPadding();this.update(a);var b=this.getDigest();return this.reset(),b},d=function(){if(!a)throw"Unsupported algorithm: "+a.toString();a.prototype.update=b,a.prototype.finalize=c;var d=new a;return d.inbuf=new Uint8Array(new ArrayBuffer(d.blockLen)),d.reset(),d}();return{update:function(a){d.update(g(a))},finalize:function(){return d.finalize()},digest:function(a){return d.update(g(a)),d.finalize()},reset:function(){d.reset()},digestLength:function(){return d.digestLen}}},j=function(a){var b,c,d,e=!1,f=function(){var f,g;if(!e){if(void 0===b)throw"MAC key is not defined";for(g=b.byteLength>64?new Uint8Array(a.digest(b)):new Uint8Array(b),c=new Uint8Array(new ArrayBuffer(64)),f=0;f<g.length;f++)c[f]=54^g[f];for(f=g.length;64>f;f++)c[f]=54;for(d=new Uint8Array(new ArrayBuffer(64)),f=0;f<g.length;f++)d[f]=92^g[f];for(f=g.length;64>f;f++)d[f]=92;e=!0,a.update(c.buffer)}},h=function(){e=!1,b=void 0,c=void 0,d=void 0,a.reset()},i=function(){var b=a.finalize();return a.reset(),a.update(d.buffer),a.update(b),b=a.finalize(),h(),b},j=function(a){b=a};return{setKey:function(a){j(g(a)),f()},update:function(b){a.update(b)},finalize:function(){return i()},mac:function(a){return this.update(a),this.finalize()},reset:function(){h()},hmacLength:function(){return a.digestLength()}}},k=function(a,b){var c=function(c,d,e){var f,g;if(e>a.digestLength())throw"Key length larger than digest length";for(a.reset(),a.update(c),a.update(d),g=a.finalize(),f=1;b>f;f++)g=a.digest(g);return g.slice(0,e)};return{deriveKey:function(a,b,d){return c(g(a),g(b),d)}}},l=function(a,b){var c=function(a,b){var c;for(c=0;c<a.length;c++)a[c]=a[c]^b[c];return a},d=function(b,d,e,f){var g,i=new Uint8Array(new ArrayBuffer(a.hmacLength())),j=new Uint8Array(new ArrayBuffer(d.length+4));for(j.set(d,0),j.set(h(f),d.length),g=1;e>=g;g++)a.setKey(b),a.update(j),j=new Uint8Array(a.finalize()),i=c(i,j);return i},e=function(c,e,f){var g,h,i;if(f>4294967295*a.hmacLength())throw"Derived key length too long";for(h=Math.ceil(f/a.hmacLength()),i=new Uint8Array(new ArrayBuffer(f*a.hmacLength())),g=1;h>=g;g++)i.set(d(c,e,b,g),a.hmacLength()*(g-1));return i.buffer.slice(0,f)};return{deriveKey:function(a,b,c){return e(g(a),g(b),c)}}},m={SHA1:function(){return i(c)},MD5:function(){return i(b)},SHA256:function(){return i(d)},HMAC_SHA1:function(){return j(i(c))},HMAC_MD5:function(){return j(i(b))},HMAC_SHA256:function(){return j(i(d))},PBKDF1_SHA1:function(a){return k(i(c),a)},PBKDF1_MD5:function(a){return k(i(b),a)},PBKDF2_HMAC_SHA1:function(a){return l(j(i(c)),a)},PBKDF2_HMAC_SHA256:function(a){return l(j(i(d)),a)}};"undefined"!=typeof exports?"undefined"!=typeof module&&module.exports?module.exports=exports=m:exports=m:a.Digest=m}(unsafeWindow);

// ----------------------------------------------------------------------------- debug

var debug = function(level, message) {
  if (!user_options.debug_verbosity || (user_options.debug_verbosity < level)) return

  if (typeof message === 'function')
    message = message()
  if (!message)
    return

  if (typeof GM_toastShort === 'function')
    GM_toastShort(message)
  else
    unsafeWindow.alert(message)
}

// ----------------------------------------------------------------------------- URL links to tools on Webcast Reloaded website

var get_webcast_reloaded_url = function(video_url, vtt_url, referer_url, force_http, force_https) {
  force_http  = (typeof force_http  === 'boolean') ? force_http  : user_options.force_http
  force_https = (typeof force_https === 'boolean') ? force_https : user_options.force_https

  var encoded_video_url, encoded_vtt_url, encoded_referer_url, webcast_reloaded_base, webcast_reloaded_url

  encoded_video_url     = encodeURIComponent(encodeURIComponent(btoa(video_url)))
  encoded_vtt_url       = vtt_url ? encodeURIComponent(encodeURIComponent(btoa(vtt_url))) : null
  referer_url           = referer_url ? referer_url : unsafeWindow.location.href
  encoded_referer_url   = encodeURIComponent(encodeURIComponent(btoa(referer_url)))

  webcast_reloaded_base = {
    "https": "https://warren-bank.github.io/crx-webcast-reloaded/external_website/index.html",
    "http":  "http://webcast-reloaded.surge.sh/index.html"
  }

  webcast_reloaded_base = (force_http)
                            ? webcast_reloaded_base.http
                            : (force_https)
                               ? webcast_reloaded_base.https
                               : (video_url.toLowerCase().indexOf('http:') === 0)
                                  ? webcast_reloaded_base.http
                                  : webcast_reloaded_base.https

  webcast_reloaded_url  = webcast_reloaded_base + '#/watch/' + encoded_video_url + (encoded_vtt_url ? ('/subtitle/' + encoded_vtt_url) : '') + '/referer/' + encoded_referer_url
  return webcast_reloaded_url
}

// ----------------------------------------------------------------------------- URL redirect

var redirect_to_url = function(url) {
  if (!url) return

  try {
    unsafeWindow.top.location = url
  }
  catch(e) {
    unsafeWindow.location = url
  }
}

var process_video_url = function(video_url, video_type, vtt_url, referer_url) {
  if (!vtt_url)
    vtt_url = ''
  if (!referer_url)
    referer_url = unsafeWindow.location.href

  if (typeof GM_startIntent === 'function') {
    // running in Android-WebMonkey: open Intent chooser
    GM_startIntent(/* action= */ 'android.intent.action.VIEW', /* data= */ video_url, /* type= */ video_type, /* extras: */ 'textUrl', vtt_url, 'referUrl', referer_url)
    return true
  }
  else if (user_options.redirect_to_webcast_reloaded) {
    // running in standard web browser: redirect URL to top-level tool on Webcast Reloaded website
    redirect_to_url(get_webcast_reloaded_url(video_url, vtt_url, referer_url))
    return true
  }
  else {
    return false
  }
}

var process_hls_url = function(hls_url, vtt_url, referer_url) {
  process_video_url(/* video_url= */ hls_url, /* video_type= */ 'application/x-mpegurl', vtt_url, referer_url)
}

// ----------------------------------------------------------------------------- helpers

var pad_zeros = function(num, len) {
  var str = num.toString()
  var pad = len - str.length
  if (pad > 0)
    str = ('0').repeat(pad) + str
  return str
}

// make GET request, parse JSON response, pass data to callback
var download_json = function(url, headers, callback) {
  var xhr = new unsafeWindow.XMLHttpRequest()
  xhr.open("GET", url, true, null, null)

  if (headers && (typeof headers === 'object')) {
    debug(5, 'xhr headers:' + "\n" + JSON.stringify(headers, null, 2))

    var keys = Object.keys(headers)
    var key, val
    for (var i=0; i < keys.length; i++) {
      key = keys[i]
      val = headers[key]
      xhr.setRequestHeader(key, val)
    }
  }

  xhr.onload = function(e) {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        try {
          debug(5, 'xhr response:' + "\n" + xhr.responseText)

          var json_data = JSON.parse(xhr.responseText)
          callback(json_data)
        }
        catch(error) {
          debug(1, 'xhr error:' + "\n" + error.message)
        }
      }
    }
  }

  xhr.send()
}

debug(9, function(){
  download_json('https://httpbin.org/get', {"x-foo": "bar"}, function(json_data){
    debug(9, JSON.stringify(json_data, null, 2))
  })

  return null
})

// ----------------------------------------------------------------------------- process page for TV series

var process_series = function(series_id) {
  var download_series_json = function(media_playlist_url, callback) {
    var headers = {
      "Accept": "application/json"
    }

    download_json(media_playlist_url, headers, callback)
  }

  var display_videos = function(series_id, videos) {
    var links = []
    var video, title, url, info

    for (var i=0; i < videos.length; i++) {
      video = videos[i]
      title = (video.Season && video.Episode)
        ? ('S' + pad_zeros(video.Season, 2) + 'E' + pad_zeros(video.Episode, 2) + ' - ' + video.ShowName + ' - ' + video.Title)
        : video.Title

      url  = 'https://www.crackle.com/watch/' + series_id + '/' + video.Id
      info = video.Description

      links.push({title, url, info})
    }

    var html = ''
    html += '<ul>' + "\n"
    html += links.map(
        function(link) {
          var title = link.title
          var url   = link.url
          var info  = link.info

          return '  <li><a target="_blank" href="' + url + '" title="' + info.replace(/"/g, '&quot;') + '">' + title + '</a></li>'
        }
      ).join("\n")
    html += "\n" + '</ul>'

    document.body.innerHTML = html
  }

  var request_playlist_detail = function(series_id) {
    var media_playlist_url = 'https://web-api-us.crackle.com/Service.svc/channel/' + series_id + '/playlists/all/US'

    var callback = function(media) {
      var videos = []
      var playlist, item

      if (media.Playlists && Array.isArray(media.Playlists) && media.Playlists.length) {
        for (var i=0; i < media.Playlists.length; i++) {
          playlist = media.Playlists[i]

          if ((playlist instanceof Object) && playlist.Items && Array.isArray(playlist.Items) && playlist.Items.length) {
            for (var i2=0; i2 < playlist.Items.length; i2++) {
              item = playlist.Items[i2]

              if ((item instanceof Object) && item.MediaInfo && (item.MediaInfo instanceof Object) && item.MediaInfo.Id) {
                videos.push(item.MediaInfo)
              }
            }
          }
        }
      }

      if (videos.length) {
        if (videos.length === 1) {
          var video_id = videos[0].Id
          process_video(video_id)
          return
        }
        display_videos(series_id, videos)
      }
    }

    download_series_json(media_playlist_url, callback)
  }

  request_playlist_detail(series_id)
}

// ----------------------------------------------------------------------------- process page for video

var process_video = function(video_id) {
  if (!user_options.redirect_to_webcast_reloaded)
    return

  var buf2hex = function(buffer) {
    return Array.prototype.map.call(
      new Uint8Array(buffer),
      function(x) {return ('00' + x.toString(16)).slice(-2)}
    ).join('').toUpperCase()
  }

  var get_hmac = function(media_detail_url, timestamp) {
    var key = 'IGSLUQCBDFHEOIFM'
    var msg = [media_detail_url, timestamp].join('|')

    var mac = new unsafeWindow.Digest.HMAC_SHA1()
    mac.setKey(key)
    mac.update(msg)

    return buf2hex(mac.finalize())
  }

  var download_video_json = function(media_detail_url, timestamp, hmac, callback) {
    var headers = {
      "Accept"        : "application/json",
      "Authorization" : [hmac, timestamp, '117', '1'].join('|')
    }

    download_json(media_detail_url, headers, callback)
  }

  var preprocess_video_url = function(video_url) {
    var embedded_advertising_qs_params = /(?:expand|ad|ad\.locationDesc|ad\.bumper|ad\.preroll|extsid|ad\.metr|euid)=[^&]*[&]?/ig
    return video_url.replace(embedded_advertising_qs_params, '')
  }

  var request_media_detail = function(video_id) {
    // https://github.com/ytdl-org/youtube-dl/blob/master/youtube_dl/extractor/crackle.py

    var callback = function(media) {
      var obj, hls_url, vtt_url

      if (!media || !media.MediaURLs || !Array.isArray(media.MediaURLs) || !media.MediaURLs.length) return

      for (var i=0; !hls_url && (i < media.MediaURLs.length); i++) {
        obj = media.MediaURLs[i]

        if (!hls_url && (obj.Type === 'AppleTV.m3u8') && !obj.UseDRM && obj.Path) {
          hls_url = obj.Path
        }
        if (!hls_url && (obj.Type === 'AppleTV.m3u8') && obj.UseDRM && obj.DRMPath) {
          hls_url = obj.DRMPath
        }
        if (hls_url && (hls_url[0] === '/')) {
          hls_url = 'https:' + hls_url
        }
      }

      if (!hls_url) return

      if (media.ClosedCaptionFiles && Array.isArray(media.ClosedCaptionFiles) && media.ClosedCaptionFiles.length) {
        for (var i=0; !vtt_url && (i < media.ClosedCaptionFiles.length); i++) {
          obj = media.ClosedCaptionFiles[i]

          if (!vtt_url && (obj.Type === 'VTT') && obj.Path) {
            vtt_url = obj.Path
          }
          if (!vtt_url && (obj.Type === 'SRT') && obj.Path) {
            vtt_url = obj.Path
          }
          if (vtt_url && (vtt_url[0] === '/')) {
            vtt_url = 'https:' + vtt_url
          }
        }
      }

      hls_url = preprocess_video_url(hls_url)
      process_hls_url(hls_url, vtt_url)
    }

    // %Y%m%d%H%M @ https://strftime.org/ => 197001012359
    var get_timestamp = function(d) {
      var timestamp = ''
        + d.getUTCFullYear()
        + pad_zeros(d.getUTCMonth() + 1, 2)
        + pad_zeros(d.getUTCDate(),      2)
        + pad_zeros(d.getUTCHours(),     2)
        + pad_zeros(d.getUTCMinutes(),   2)

      return timestamp
    }

    var countries = ['US', 'AU', 'CA', 'AS', 'FM', 'GU', 'MP', 'PR', 'PW', 'MH', 'VI']
    var country, media_detail_url, timestamp, hmac

    for (var i=0; i < countries.length; i++) {
      country          = countries[i]
      media_detail_url = 'https://web-api-us.crackle.com/Service.svc/details/media/' + video_id + '/' + country + '?disableProtocols=true'
      timestamp        = get_timestamp(new Date())
      hmac             = get_hmac(media_detail_url, timestamp)

      download_video_json(media_detail_url, timestamp, hmac, callback)
    }
  }

  request_media_detail(video_id)
}

// ----------------------------------------------------------------------------- process page with index of TV series and videos

var process_index = function() {
  var update_links = function() {
    var imgsrc_regex = new RegExp('^.*/channels/(\\d+)/.*$', 'i')
    var labels = document.querySelectorAll('.mediaItem > .Item > .mediaStill + .mediaBox:not([x-modified])')
    var label, labeltitle, image, imgsrc, video_id, video_url, video_title, anchor_style, anchor_click, anchor_html

    for (var i=0; i < labels.length; i++) {
      label = labels[i]

      labeltitle = label.querySelector(':scope > .mediaTitle')
      if (!labeltitle) continue

      image = label.parentElement.querySelector(':scope > .mediaStill img[src]')
      if (!image) continue

      imgsrc = image.getAttribute('src')
      if (!imgsrc_regex.test(imgsrc)) continue

      video_id    = imgsrc.replace(imgsrc_regex, '$1')
      video_url   = '/watch/' + video_id
      video_title = labeltitle.innerText

      anchor_style = 'text-decoration:none; color:inherit;'
      anchor_click = 'event.stopPropagation(); event.stopImmediatePropagation(); return true'
      anchor_html  = '<a target="_blank" href="' + video_url + '" style="' + anchor_style + '" onclick="' + anchor_click + '">' + video_title + '</a>'

      labeltitle.innerHTML = anchor_html

      label.setAttribute('x-modified', '1')
    }
  }

  update_links()
  setInterval(update_links, 2500)
}

// ----------------------------------------------------------------------------- bootstrap

var process_site_url = function(pathname) {
  debug(5, 'processing url:' + "\n" + pathname)

  var url_regex = {
    series: new RegExp('^/watch/([\\d]+)$', 'i'),
    video:  new RegExp('^/watch(?:/playlist)?/[\\d]+/([\\d]+)$', 'i'),
    index:  new RegExp('^/(?:shows|movies)$', 'i')
  }

  if (url_regex.series.test(pathname)) {
    debug(5, 'page type: series')

    var series_id = pathname.replace(url_regex.series, '$1')
    process_series(series_id)
    return
  }

  if (url_regex.video.test(pathname)) {
    debug(5, 'page type: video')

    var video_id = pathname.replace(url_regex.video, '$1')
    process_video(video_id)
    return
  }

  if (url_regex.index.test(pathname)) {
    debug(5, 'page type: index')

    process_index()
    return
  }
}

var init = function() {
  // on page load
  process_site_url(unsafeWindow.location.pathname)

  if (unsafeWindow.history) {
    var real = {
      pushState:    unsafeWindow.history.pushState,
      replaceState: unsafeWindow.history.replaceState
    }

    unsafeWindow.history.pushState = function(state, title, url) {
      process_site_url(url)
      real.pushState.apply(unsafeWindow.history, [state, title, url])
    }

    unsafeWindow.history.replaceState = function(state, title, url) {
      process_site_url(url)
      real.replaceState.apply(unsafeWindow.history, [state, title, url])
    }
  }
}

init()

// -----------------------------------------------------------------------------
