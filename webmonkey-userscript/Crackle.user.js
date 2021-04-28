// ==UserScript==
// @name         Crackle
// @description  Removes clutter to reduce CPU load and improve site usability. Can transfer video stream to alternate video players: WebCast-Reloaded, ExoAirPlayer.
// @version      3.0.3
// @match        *://crackle.com/*
// @match        *://sonycrackle.com/*
// @match        *://*.crackle.com/*
// @match        *://*.sonycrackle.com/*
// @icon         https://www.crackle.com/config/avod/favicon/favicon.ico
// @run-at       document-end
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        unsafeWindow
// @homepage     https://github.com/warren-bank/crx-Crackle/tree/webmonkey-userscript/es5
// @supportURL   https://github.com/warren-bank/crx-Crackle/issues
// @downloadURL  https://github.com/warren-bank/crx-Crackle/raw/webmonkey-userscript/es5/webmonkey-userscript/Crackle.user.js
// @updateURL    https://github.com/warren-bank/crx-Crackle/raw/webmonkey-userscript/es5/webmonkey-userscript/Crackle.user.js
// @namespace    warren-bank
// @author       Warren Bank
// @copyright    Warren Bank
// ==/UserScript==

// ============================================================================= common to both SPA and deep links

// ----------------------------------------------------------------------------- constants

var user_options = {
  "redirect_to_webcast_reloaded":     true,
  "force_http":                       true,
  "force_https":                      false,

  // 0: silent
  // 1: more important
  // 9: less important
  "debug_verbosity":                  0
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
  referer_url           = referer_url ? referer_url : constants.base_website_url
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
    referer_url = constants.base_website_url

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

var process_dash_url = function(dash_url, vtt_url, referer_url) {
  process_video_url(/* video_url= */ dash_url, /* video_type= */ 'application/dash+xml', vtt_url, referer_url)
}

// ----------------------------------------------------------------------------- helpers

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

// -----------------------------------------------------------------------------

var repeat_string = function(str, count) {
  var rep = ''
  for (var i=0; i < count; i++)
    rep += str
  return rep
}

var pad_zeros = function(num, len) {
  var str = num.toString()
  var pad = len - str.length
  if (pad > 0)
    str = repeat_string('0', pad) + str
  return str
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

// ----------------------------------------------------------------------------- extract data from Crackle API endpoints

var extract_episodes_from_API_server_response = function(media) {
  var episodes = []
  var playlist, item

  if (media.Playlists && Array.isArray(media.Playlists) && media.Playlists.length) {
    for (var i=0; i < media.Playlists.length; i++) {
      playlist = media.Playlists[i]

      if ((playlist instanceof Object) && playlist.Items && Array.isArray(playlist.Items) && playlist.Items.length) {
        for (var i2=0; i2 < playlist.Items.length; i2++) {
          item = playlist.Items[i2]

          if ((item instanceof Object) && item.MediaInfo && (item.MediaInfo instanceof Object) && item.MediaInfo.Id && item.MediaInfo.Title && item.MediaInfo.IsLive && !item.MediaInfo.IsTrailer) {
            episodes.push(item.MediaInfo)
          }
        }
      }
    }
  }

  return episodes
}

// -----------------------------------------------------------------------------

var extract_video_from_API_server_response = function(media) {
  if (!media || !media.MediaURLs || !Array.isArray(media.MediaURLs) || !media.MediaURLs.length) return

  var types, type, obj, video_url, video_type, vtt_url

  var preprocess_video_url = function() {
    var embedded_advertising_qs_params = /(?:expand|ad|ad\.locationDesc|ad\.bumper|ad\.preroll|extsid|ad\.metr|euid)=[^&]*[&]?/ig
    video_url = video_url.replace(embedded_advertising_qs_params, '')
  }

  types = [
    ['AppleTV.m3u8',   'application/x-mpegurl'],
    ['Playready_DASH', 'application/dash+xml'],
    ['Widevine_DASH',  'application/dash+xml']
  ]

  for (var i=0; !video_url && (i < types.length); i++) {
    type = types[i]

    for (var i2=0; !video_url && (i2 < media.MediaURLs.length); i2++) {
      obj = media.MediaURLs[i2]

      if (!video_url && (obj.Type === type[0]) && (obj.Path || obj.DRMPath)) {
        video_url  = obj.Path || obj.DRMPath
        video_type = type[1]
      }
    }
  }

  if (!video_url) return

  if (video_url && (video_url[0] === '/'))
    video_url = 'https:' + video_url

  if (media.ClosedCaptionFiles && Array.isArray(media.ClosedCaptionFiles) && media.ClosedCaptionFiles.length) {

    types = ['VTT', 'SRT']

    for (var i=0; !vtt_url && (i < types.length); i++) {
      type = types[i]

      for (var i2=0; !vtt_url && (i2 < media.ClosedCaptionFiles.length); i2++) {
        obj = media.ClosedCaptionFiles[i2]

        if (!vtt_url && (!constants.language_locale || (obj.Locale === constants.language_locale)) && (obj.Type === type) && obj.Path) {
          vtt_url = obj.Path
        }
      }
    }

    if (vtt_url && (vtt_url[0] === '/'))
      vtt_url = 'https:' + vtt_url
  }

  preprocess_video_url()

  return {video_url: video_url, video_type: video_type, vtt_url: vtt_url}
}

// ============================================================================= SPA

// ----------------------------------------------------------------------------- constants

var strings = {
  "heading_filters":                  "Filter Channels",
  "label_type":                       "By Type:",
  "label_category":                   "By Category:",
  "types": {
    "shows":                          "Television",
    "movies":                         "Movies"
  },
  "default_type":                     "Show All",
  "default_category":                 "Show All",
  "label_name":                       "By Name:",
  "button_filter":                    "Apply",

  "heading_tools":                    "Tools",
  "button_expand_all":                "Expand All",
  "button_collapse_all":              "Collapse All",
  "button_clear_cache":               "Clear Persistent Cache",
  "button_reload":                    "Reload",

  "button_download_episodes":         "List All Episodes",
  "button_download_video":            "Get Video URL",
  "button_start_video":               "Start Video",

  "episode_labels": {
    "title":                          "title:",
    "summary":                        "summary:",
    "time_duration":                  "duration:"
  },
  "episode_units": {
    "duration_hour":                  "hour",
    "duration_hours":                 "hours",
    "duration_minutes":               "minutes"
  },
  "cache_units": {
    "item":                           "item",
    "items":                          "items"
  }
}

var constants = {
  "debug":                            false,
  "title":                            "Crackle: Program Guide",
  "target_pathname":                  "/tos",
  "dom_ids": {
    "div_root":                       "Crackle_EPG",
    "div_filters":                    "EPG_filters",
    "div_tools":                      "EPG_tools",
    "div_data":                       "EPG_data",
    "select_type":                    "channel_types",
    "select_category":                "channel_categories",
    "text_query":                     "channel_search_query"
  },
  "dom_classes": {
    "data_loaded":                    "loaded",
    "toggle_collapsed":               "collapsible_state_closed",
    "toggle_expanded":                "collapsible_state_opened",
    "div_heading":                    "heading",
    "div_toggle":                     "toggle_collapsible",
    "div_collapsible":                "collapsible",
    "div_episodes":                   "episodes",
    "div_webcast_icons":              "icons-container"
  },
  "img_urls": {
    "icon_expand":                    "https://github.com/warren-bank/crx-Crackle/raw/webmonkey-userscript/es5/webmonkey-userscript/img/white.arrow_drop_down_circle.twotone.png",
    "icon_collapse":                  "https://github.com/warren-bank/crx-Crackle/raw/webmonkey-userscript/es5/webmonkey-userscript/img/white.expand_less.round.png",
    "icon_delete":                    "https://github.com/warren-bank/crx-Crackle/raw/webmonkey-userscript/es5/webmonkey-userscript/img/white.delete_forever.twotone.png",
    "icon_refresh":                   "https://github.com/warren-bank/crx-Crackle/raw/webmonkey-userscript/es5/webmonkey-userscript/img/white.refresh.baseline.png",
    "base_webcast_reloaded_icons":    "https://github.com/warren-bank/crx-webcast-reloaded/raw/gh-pages/chrome_extension/2-release/popup/img/"
  },
  "base_website_url":                 "https://www.crackle.com/watch/",
  "country":                          "US",
  "language_locale":                  "en-US",
  "epg_data_xhr_page_size":           20,
  "cache_keys": {
    "epg_data":                       "epg_data",
    "epg_data_count":                 "epg_data_count"
  }
}

// ----------------------------------------------------------------------------- URL links to tools on Webcast Reloaded website

var get_webcast_reloaded_url_chromecast_sender = function(video_url, vtt_url, referer_url) {
  return get_webcast_reloaded_url(video_url, vtt_url, referer_url, /* force_http= */ null, /* force_https= */ null).replace('/index.html', '/chromecast_sender.html')
}

var get_webcast_reloaded_url_airplay_sender = function(video_url, vtt_url, referer_url) {
  return get_webcast_reloaded_url(video_url, vtt_url, referer_url, /* force_http= */ true, /* force_https= */ false).replace('/index.html', '/airplay_sender.es5.html')
}

var get_webcast_reloaded_url_proxy = function(hls_url, vtt_url, referer_url) {
  return get_webcast_reloaded_url(hls_url, vtt_url, referer_url, /* force_http= */ true, /* force_https= */ false).replace('/index.html', '/proxy.html')
}

// ----------------------------------------------------------------------------- DOM: static skeleton

var reinitialize_dom = function() {
  var head = unsafeWindow.document.getElementsByTagName('head')[0]
  var body = unsafeWindow.document.body

  var html = {
    "head": [
      '<style>',

      // --------------------------------------------------- CSS: global

      'body {',
      '  background-color: #fff;',
      '  text-align: center;',
      '}',

      'a {',
      '  display: block;',
      '  margin: 0;',
      '  color: blue;',
      '  text-decoration: none;',
      '}',

      // --------------------------------------------------- CSS: EPG filters

      '#EPG_filters {',
      '}',

      '#EPG_filters > div {',
      '  margin: 1.25em 0;',
      '}',
      '#EPG_filters > div:first-child {',
      '  margin-top: 0;',
      '}',
      '#EPG_filters > div:last-child {',
      '  margin-bottom: 0;',
      '}',

      '#EPG_filters > div > h4 {',
      '  margin: 0;',
      '}',

      '#EPG_filters > div > input,',
      '#EPG_filters > div > select,',
      '#EPG_filters > div > button {',
      '  display: inline-block;',
      '  margin: 0px;',
      '}',

      '#EPG_filters > div > input,',
      '#EPG_filters > div > select {',
      '  margin-left: 0.75em;',
      '}',

      // --------------------------------------------------- CSS: EPG tools

      '#EPG_tools {',
      '}',

      '#EPG_tools > div {',
      '  margin: 1.25em 0;',
      '}',
      '#EPG_tools > div:first-child {',
      '  margin-top: 0;',
      '}',
      '#EPG_tools > div:last-child {',
      '  margin-bottom: 0;',
      '}',

      '#EPG_tools > div > h4 {',
      '  margin: 0;',
      '}',

      '#EPG_tools > div > button {',
      '  display: inline-block;',
      '  margin: 0px;',
      '}',
      '#EPG_tools > div > button + button {',
      '  margin-left: 1.25em;',
      '}',

      '#EPG_tools > div > button > * {',
      '  vertical-align: middle;',
      '}',
      '#EPG_tools > div > button > img {',
      '  display: inline-block;',
      '  background-color: #999;',
      '  margin-right: 0.5em;',
      '}',

      // --------------------------------------------------- CSS: EPG data

      '#EPG_data {',
      '  margin-top: 0.5em;',
      '  text-align: left;',
      '}',

      '#EPG_data > div {',
      '  border: 1px solid #333;',
      '}',

      '#EPG_data > div > div.heading {',
      '  position: relative;',
      '  z-index: 1;',
      '  overflow: hidden;',
      '}',

      '#EPG_data > div > div.heading > h2 {',
      '  display: block;',
      '  margin: 0;',
      '  margin-right: 94px;',
      '  background-color: #ccc;',
      '  padding: 0.25em;',
      '}',

      '#EPG_data > div > div.heading > div.toggle_collapsible {',
      '  display: block;',
      '  width: 94px;',
      '  background-color: #999;',
      '  position: absolute;',
      '  z-index: 1;',
      '  top: 0;',
      '  bottom: 0;',
      '  right: 0;',
      '  cursor: help;',
      '}',

      '#EPG_data > div > div.collapsible {',
      '  padding: 0.5em;',
      '}',

      '#EPG_data > div > div.collapsible > div.icons-container {',
      '}',

      '#EPG_data > div > div.collapsible div.episodes > ul {',
      '  list-style: none;',
      '  margin: 0;',
      '  padding: 0;',
      '  padding-left: 1em;',
      '}',

      '#EPG_data > div > div.collapsible div.episodes > ul > li {',
      '  list-style: none;',
      '  margin-top: 0.5em;',
      '  border-top: 1px solid #999;',
      '  padding-top: 0.5em;',
      '}',

      '#EPG_data > div > div.collapsible div.episodes > ul > li > table {',
      '  min-height: 70px;',
      '}',

      '#EPG_data > div > div.collapsible div.episodes > ul > li > table td:first-child {',
      '  font-style: italic;',
      '  padding-right: 1em;',
      '}',

      '#EPG_data > div > div.collapsible div.episodes > ul > li > blockquote {',
      '  display: block;',
      '  background-color: #eee;',
      '  padding: 0.5em 1em;',
      '  margin: 0;',
      '}',

      '#EPG_data > div > div.collapsible div.episodes > ul > li > button {',
      '  margin: 0.75em 0;',
      '}',

      '#EPG_data > div > div.collapsible div.episodes > ul > li > div.icons-container {',
      '}',

      // --------------------------------------------------- CSS: EPG data (collapsible toggle state)

      '#EPG_data > div > div.heading > div.toggle_collapsible {',
      '  background-repeat: no-repeat;',
      '  background-position: center;',
      '}',

      '#EPG_data > div.collapsible_state_closed > div.heading > div.toggle_collapsible {',
      '  background-image: url("' + constants.img_urls.icon_expand + '");',
      '}',
      '#EPG_data > div.collapsible_state_closed > div.collapsible {',
      '  display: none;',
      '}',

      '#EPG_data > div.collapsible_state_opened > div.heading > div.toggle_collapsible {',
      '  background-image: url("' + constants.img_urls.icon_collapse + '");',
      '}',
      '#EPG_data > div.collapsible_state_opened > div.collapsible {',
      '  display: block;',
      '}',

      // --------------------------------------------------- CSS: EPG data (links to tools on Webcast Reloaded website)

      '#EPG_data > div > div.collapsible div.icons-container {',
      '  display: block;',
      '  position: relative;',
      '  z-index: 1;',
      '  float: right;',
      '  margin: 0.5em;',
      '  width: 60px;',
      '  height: 60px;',
      '  max-height: 60px;',
      '  vertical-align: top;',
      '  background-color: #d7ecf5;',
      '  border: 1px solid #000;',
      '  border-radius: 14px;',
      '}',

      '#EPG_data > div > div.collapsible div.icons-container > a.chromecast,',
      '#EPG_data > div > div.collapsible div.icons-container > a.chromecast > img,',
      '#EPG_data > div > div.collapsible div.icons-container > a.airplay,',
      '#EPG_data > div > div.collapsible div.icons-container > a.airplay > img,',
      '#EPG_data > div > div.collapsible div.icons-container > a.proxy,',
      '#EPG_data > div > div.collapsible div.icons-container > a.proxy > img,',
      '#EPG_data > div > div.collapsible div.icons-container > a.video-link,',
      '#EPG_data > div > div.collapsible div.icons-container > a.video-link > img {',
      '  display: block;',
      '  width: 25px;',
      '  height: 25px;',
      '}',

      '#EPG_data > div > div.collapsible div.icons-container > a.chromecast,',
      '#EPG_data > div > div.collapsible div.icons-container > a.airplay,',
      '#EPG_data > div > div.collapsible div.icons-container > a.proxy,',
      '#EPG_data > div > div.collapsible div.icons-container > a.video-link {',
      '  position: absolute;',
      '  z-index: 1;',
      '  text-decoration: none;',
      '}',

      '#EPG_data > div > div.collapsible div.icons-container > a.chromecast,',
      '#EPG_data > div > div.collapsible div.icons-container > a.airplay {',
      '  top: 0;',
      '}',
      '#EPG_data > div > div.collapsible div.icons-container > a.proxy,',
      '#EPG_data > div > div.collapsible div.icons-container > a.video-link {',
      '  bottom: 0;',
      '}',

      '#EPG_data > div > div.collapsible div.icons-container > a.chromecast,',
      '#EPG_data > div > div.collapsible div.icons-container > a.proxy {',
      '  left: 0;',
      '}',
      '#EPG_data > div > div.collapsible div.icons-container > a.airplay,',
      '#EPG_data > div > div.collapsible div.icons-container > a.video-link {',
      '  right: 0;',
      '}',
      '#EPG_data > div > div.collapsible div.icons-container > a.airplay + a.video-link {',
      '  right: 17px; /* (60 - 25)/2 to center when there is no proxy icon */',
      '}',

      // --------------------------------------------------- CSS: separation between EPG sections

      '#Crackle_EPG > #EPG_filters,',
      '#Crackle_EPG > #EPG_tools,',
      '#Crackle_EPG > #EPG_data {',
      '  display: none;',
      '}',

      '#Crackle_EPG.loaded > #EPG_filters,',
      '#Crackle_EPG.loaded > #EPG_tools,',
      '#Crackle_EPG.loaded > #EPG_data {',
      '  display: block;',
      '}',

      '#Crackle_EPG.loaded > #EPG_tools,',
      '#Crackle_EPG.loaded > #EPG_data {',
      '  margin-top: 0.5em;',
      '  border-top: 1px solid #333;',
      '  padding-top: 0.5em;',
      '}',

      '</style>'
    ],
    "body": [
      '<div id="Crackle_EPG">',
      '  <div id="EPG_filters"></div>',
      '  <div id="EPG_tools"></div>',
      '  <div id="EPG_data"></div>',
      '</div>'
    ]
  }

  head.innerHTML = '' + html.head.join("\n")
  body.innerHTML = '' + html.body.join("\n")

  unsafeWindow.document.title = constants.title
}

// ----------------------------------------------------------------------------- DOM: dynamic elements - common

var make_element = function(elementName, html) {
  var el = unsafeWindow.document.createElement(elementName)

  if (html)
    el.innerHTML = html

  return el
}

var make_span = function(text) {return make_element('span', text)}
var make_h4   = function(text) {return make_element('h4',   text)}

// ----------------------------------------------------------------------------- DOM: dynamic elements - filters

var active_filters = {
  "type":       "",
  "category":   "",
  "text_query": ""
}

var process_filters = function(type, category, text_query) {
  if ((active_filters.type === type) && (active_filters.category === category) && (active_filters.text_query === text_query)) return

  active_filters.type       = type
  active_filters.category   = category
  active_filters.text_query = text_query

  var EPG_data = unsafeWindow.document.getElementById(constants.dom_ids.div_data)
  var channel_divs = EPG_data.childNodes
  var channel_div, is_visible, type_id, category_id, channel_name

  for (var i=0; i < channel_divs.length; i++) {
    channel_div = channel_divs[i]

    if (channel_div && (channel_div instanceof HTMLElement) && (channel_div.nodeName === 'DIV')) {
      is_visible = true

      if (is_visible && type) {
        type_id = channel_div.getAttribute('x-type-id')

        if (type_id !== type)
          is_visible = false
      }

      if (is_visible && category) {
        category_id = channel_div.getAttribute('x-category-id')

        if (category_id !== category)
          is_visible = false
      }

      if (is_visible && text_query) {
        channel_name = channel_div.getAttribute('x-channel-name')

        if (channel_name.indexOf(text_query) === -1)
          is_visible = false
      }

      channel_div.style.display = is_visible ? 'block' : 'none'
    }
  }
}

var onclick_filter_button = function(event) {
  event.stopPropagation();event.stopImmediatePropagation();event.preventDefault();event.returnValue=true;

  var type       = unsafeWindow.document.getElementById(constants.dom_ids.select_type).value
  var category   = unsafeWindow.document.getElementById(constants.dom_ids.select_category).value
  var text_query = unsafeWindow.document.getElementById(constants.dom_ids.text_query).value.toLowerCase()

  process_filters(type, category, text_query)
}

var make_filter_button = function() {
  var button = make_element('button')

  button.innerHTML = strings.button_filter
  button.addEventListener("click", onclick_filter_button)

  return button
}

var make_type_select_element = function() {
  var select = make_element('select')
  select.setAttribute('id', constants.dom_ids.select_type)
  return select
}

var make_category_select_element = function() {
  var select = make_element('select')
  select.setAttribute('id', constants.dom_ids.select_category)
  return select
}

var make_text_query_input_element = function() {
  var input = make_element('input')
  input.setAttribute('id', constants.dom_ids.text_query)
  input.setAttribute('type', 'text')
  return input
}

var populate_dom_filters = function() {
  var select_type     = make_type_select_element()
  var select_category = make_category_select_element()
  var text_query      = make_text_query_input_element()
  var filter_button   = make_filter_button()
  var EPG_filters     = unsafeWindow.document.getElementById(constants.dom_ids.div_filters)
  var div

  EPG_filters.innerHTML  = ''

  div = make_element('div')
  div.appendChild(make_h4(strings.heading_filters))
  EPG_filters.appendChild(div)

  div = make_element('div')
  div.appendChild(make_span(strings.label_type))
  div.appendChild(select_type)
  EPG_filters.appendChild(div)

  div = make_element('div')
  div.appendChild(make_span(strings.label_category))
  div.appendChild(select_category)
  EPG_filters.appendChild(div)

  div = make_element('div')
  div.appendChild(make_span(strings.label_name))
  div.appendChild(text_query)
  EPG_filters.appendChild(div)

  div = make_element('div')
  div.appendChild(filter_button)
  EPG_filters.appendChild(div)
}

// ----------------------------------------------------------------------------- DOM: dynamic elements - tools

var process_expand_or_collapse_all_button = function(expand, exclude_filtered_channels) {
  var EPG_data = unsafeWindow.document.getElementById(constants.dom_ids.div_data)
  var channel_divs = EPG_data.childNodes
  var channel_div, is_expanded, is_filtered_channel

  for (var i=0; i < channel_divs.length; i++) {
    channel_div = channel_divs[i]
    is_expanded = channel_div.classList.contains(constants.dom_classes.toggle_expanded)

    // short-circuit if nothing to do
    if (is_expanded == expand) continue

    if (exclude_filtered_channels) {
      is_filtered_channel = (channel_div.style.display === 'none')

      // short-circuit if filtered/nonvisible channels are excluded
      if (is_filtered_channel) continue
    }

    channel_div.className = (expand)
      ? constants.dom_classes.toggle_expanded
      : constants.dom_classes.toggle_collapsed
  }
}

var onclick_expand_all_button = function(event) {
  event.stopPropagation();event.stopImmediatePropagation();event.preventDefault();event.returnValue=true;

  process_expand_or_collapse_all_button(true, false)
}

var onclick_collapse_all_button = function(event) {
  event.stopPropagation();event.stopImmediatePropagation();event.preventDefault();event.returnValue=true;

  process_expand_or_collapse_all_button(false, false)
}

var onclick_clear_cache_button = function(event) {
  event.stopPropagation();event.stopImmediatePropagation();event.preventDefault();event.returnValue=true;

  epg_data_cache.clear_persistent_storage()

  // enable the reload button
  var clear_cache_button = event.target
  var reload_button      = clear_cache_button.nextSibling

  if (reload_button instanceof HTMLButtonElement)
    reload_button.disabled = false
}

var onclick_reload_button = function(event) {
  event.stopPropagation();event.stopImmediatePropagation();event.preventDefault();event.returnValue=true;

  unsafeWindow.location.reload()
}

var make_expand_all_button = function() {
  var button = make_element('button')

  button.innerHTML = '<img src="' + constants.img_urls.icon_expand + '" /> ' + strings.button_expand_all
  button.addEventListener("click", onclick_expand_all_button)

  return button
}

var make_collapse_all_button = function() {
  var button = make_element('button')

  button.innerHTML = '<img src="' + constants.img_urls.icon_collapse + '" /> ' + strings.button_collapse_all
  button.addEventListener("click", onclick_collapse_all_button)

  return button
}

var make_clear_cache_button = function() {
  var is_enabled = epg_data_cache.is_persistent_storage_available()
  var item_count = epg_data_cache.get_item_count_in_persistent_storage()

  var get_item_count_string = function(item_count) {
    if (item_count > 0)
      return ' (' + item_count + ' ' + ((item_count === 1) ? strings.cache_units.item : strings.cache_units.items) + ')'
    else
      return ''
  }

  var button = make_element('button')

  button.innerHTML = '<img src="' + constants.img_urls.icon_delete + '" /> ' + strings.button_clear_cache + get_item_count_string(item_count)

  if (is_enabled) {
    button.addEventListener("click", onclick_clear_cache_button)

    unsafeWindow.addEventListener('message', function(event) {
      if (event.data && (typeof event.data === 'object') && (typeof event.data.new_item_count_in_persistent_storage === 'number')) {
        var new_item_count = event.data.new_item_count_in_persistent_storage
        var html = button.innerHTML

        // update new item count
        html = html.replace(/ \(.*$/, '') + get_item_count_string(new_item_count)

        button.innerHTML = html
      }
    })
  }
  else {
    button.disabled = true
  }

  return button
}

var make_reload_button = function() {
  var button = make_element('button')

  button.innerHTML = '<img src="' + constants.img_urls.icon_refresh + '" /> ' + strings.button_reload
  button.addEventListener("click", onclick_reload_button)
  button.disabled = true

  return button
}

var populate_dom_tools = function() {
  var expand_all_button   = make_expand_all_button()
  var collapse_all_button = make_collapse_all_button()
  var clear_cache_button  = make_clear_cache_button()
  var reload_button       = make_reload_button()
  var EPG_tools           = unsafeWindow.document.getElementById(constants.dom_ids.div_tools)
  var div

  EPG_tools.innerHTML  = ''

  div = make_element('div')
  div.appendChild(make_h4(strings.heading_tools))
  EPG_tools.appendChild(div)

  div = make_element('div')
  div.appendChild(expand_all_button)
  div.appendChild(collapse_all_button)
  EPG_tools.appendChild(div)

  div = make_element('div')
  div.appendChild(clear_cache_button)
  div.appendChild(reload_button)
  EPG_tools.appendChild(div)
}

// ----------------------------------------------------------------------------- DOM: dynamic elements - EPG data - 3rd pass (manual, link to video stream for one chosen movie or TV series episode)

var make_webcast_reloaded_div = function(video_url, vtt_url, referer_url) {
  var webcast_reloaded_urls = {
//  "index":             get_webcast_reloaded_url(                  video_url, vtt_url, referer_url),
    "chromecast_sender": get_webcast_reloaded_url_chromecast_sender(video_url, vtt_url, referer_url),
    "airplay_sender":    get_webcast_reloaded_url_airplay_sender(   video_url, vtt_url, referer_url),
    "proxy":             get_webcast_reloaded_url_proxy(            video_url, vtt_url, referer_url)
  }

  var div = make_element('div')

  var html = [
    '<a target="_blank" class="chromecast" href="' + webcast_reloaded_urls.chromecast_sender + '" title="Chromecast Sender"><img src="'       + constants.img_urls.base_webcast_reloaded_icons + 'chromecast.png"></a>',
    '<a target="_blank" class="airplay" href="'    + webcast_reloaded_urls.airplay_sender    + '" title="ExoAirPlayer Sender"><img src="'     + constants.img_urls.base_webcast_reloaded_icons + 'airplay.png"></a>',
    '<a target="_blank" class="proxy" href="'      + webcast_reloaded_urls.proxy             + '" title="HLS-Proxy Configuration"><img src="' + constants.img_urls.base_webcast_reloaded_icons + 'proxy.png"></a>',
    '<a target="_blank" class="video-link" href="' + video_url                                 + '" title="direct link to video"><img src="'    + constants.img_urls.base_webcast_reloaded_icons + 'video_link.png"></a>'
  ]

  div.setAttribute('class', constants.dom_classes.div_webcast_icons)
  div.innerHTML = html.join("\n")

  return div
}

var insert_webcast_reloaded_div = function(block_element, video_url, vtt_url, referer_url) {
  var webcast_reloaded_div = make_webcast_reloaded_div(video_url, vtt_url, referer_url)

  if (block_element.childNodes.length)
    block_element.insertBefore(webcast_reloaded_div, block_element.childNodes[0])
  else
    block_element.appendChild(webcast_reloaded_div)
}

var download_video = function(video_id, block_element, old_button) {
  var url = 'https://web-api-us.crackle.com/Service.svc/details/media/' + video_id + '/' + constants.country + '?disableProtocols=true'

  var timestamp = get_timestamp(new Date())
  var hmac      = get_hmac(url, timestamp)

  var headers = {
    "Accept"        : "application/json",
    "Authorization" : [hmac, timestamp, '117', '1'].join('|')
  }

  var callback = function(media) {
    media = extract_video_from_API_server_response(media)
    if (!media || (typeof media !== 'object') || !media.video_url) return

    var video_url  = media.video_url
    var video_type = media.video_type
    var vtt_url    = media.vtt_url

    insert_webcast_reloaded_div(block_element, video_url, vtt_url)
    add_start_video_button(video_url, video_type, vtt_url, block_element, old_button)
  }

  download_json(url, headers, callback)
}

// -----------------------------------------------------------------------------

var onclick_start_video_button = function(event) {
  event.stopPropagation();event.stopImmediatePropagation();event.preventDefault();event.returnValue=true;

  var button     = event.target
  var video_url  = button.getAttribute('x-video-url')
  var video_type = button.getAttribute('x-video-type')
  var vtt_url    = button.getAttribute('x-vtt-url')

  if (video_url)
    process_video_url(video_url, video_type, vtt_url)
}

var make_start_video_button = function(video_url, video_type, vtt_url) {
  var button = make_element('button')

  button.setAttribute('x-video-url',  video_url)
  button.setAttribute('x-video-type', video_type)
  button.setAttribute('x-vtt-url',    vtt_url)
  button.innerHTML = strings.button_start_video
  button.addEventListener("click", onclick_start_video_button)

  return button
}

var add_start_video_button = function(video_url, video_type, vtt_url, block_element, old_button) {
  var new_button = make_start_video_button(video_url, video_type, vtt_url)

  if (old_button)
    old_button.parentNode.replaceChild(new_button, old_button)
  else
    block_element.appendChild(new_button)
}

// ----------------------------------------------------------------------------- DOM: dynamic elements - EPG data - 2nd pass (manual, list all episodes in one chosen TV series)

var convert_ms_to_mins = function(X) {
  // (X ms)(1 sec / 1000 ms)(1 min / 60 sec)
  return Math.ceil(X / 60000)
}

var get_ms_duration_time_string = function(ms) {
  var time_string = ''
  var mins = convert_ms_to_mins(ms)
  var hours

  if (mins >= 60) {
    hours       = Math.floor(mins / 60)
    time_string = hours + ' ' + ((hours < 2) ? strings.episode_units.duration_hour : strings.episode_units.duration_hours) + ', '
    mins        = mins % 60
  }

  return time_string + mins + ' ' + strings.episode_units.duration_minutes
}

var make_episode_listitem_html = function(data) {
  if (data.duration)
    data.duration = get_ms_duration_time_string(data.duration)

  var tr = []

  var append_tr = function(td, colspan) {
    if (Array.isArray(td))
      tr.push('<tr><td>' + td.join('</td><td>') + '</td></tr>')
    else if ((typeof colspan === 'number') && (colspan > 1))
      tr.push('<tr><td colspan="' + colspan + '">' + td + '</td></tr>')
    else
      tr.push('<tr><td>' + td + '</td></tr>')
  }

  if (data.title && data.url)
    data.title = '<a target="_blank" href="' + data.url + '">' + data.title + '</a>'
  if (data.title)
    append_tr([strings.episode_labels.title, data.title])
  if (data.duration)
    append_tr([strings.episode_labels.time_duration, data.duration])
  if (data.description)
    append_tr(strings.episode_labels.summary, 2)

  var html = ['<table>' + tr.join("\n") + '</table>']
  if (data.description)
    html.push('<blockquote>' + data.description + '</blockquote>')

  return '<li x-video-id="' + data.video_id + '">' + html.join("\n") + '</li>'
}

var display_episodes = function(episodes, show_id, episodes_div) {
  var data = []
  var episode, video_id, url, title, duration, description, html

  for (var i=0; i < episodes.length; i++) {
    episode  = episodes[i]
    video_id = episode.Id
    url      = constants.base_website_url + show_id + '/' + video_id
    title    = (episode.Season && episode.Episode)
      ? ('S' + pad_zeros(episode.Season, 2) + 'E' + pad_zeros(episode.Episode, 2) + ' - ' + episode.ShowName + ' - ' + episode.Title)
      : episode.Title
    duration = (typeof episode.Duration === 'number')
      ? (episode.Duration * 1000)
      : 0
    description = episode.Description

    if (video_id && title)
      data.push({video_id: video_id, url: url, title: title, duration: duration, description: description})
  }

  html = '<ul>' + data.map(make_episode_listitem_html).join("\n") + '</ul>'
  episodes_div.innerHTML = html

  add_episode_div_buttons(show_id, episodes_div)
}

var download_episodes = function(type, show_id, episodes_div, button) {
  var url = 'https://web-api-us.crackle.com/Service.svc/channel/' + show_id + '/playlists/all/US'

  var headers = {
    "Accept": "application/json"
  }

  var callback = function(media) {
    var episodes = extract_episodes_from_API_server_response(media)
    if (!episodes || !Array.isArray(episodes) || !episodes.length) return

    if ((episodes.length === 1) && (type === 'movies')) {
      var video_id = episodes[0].Id

      if (video_id)
        download_video(video_id, episodes_div, button)
    }
    else {
      display_episodes(episodes, show_id, episodes_div)
    }
  }

  download_json(url, headers, callback)
}

// -----------------------------------------------------------------------------

var onclick_download_show_video_button = function(event) {
  event.stopPropagation();event.stopImmediatePropagation();event.preventDefault();event.returnValue=true;

  var button   = event.target
  var show_id  = parseInt(button.getAttribute('x-show-id'), 10)
  if (!show_id || isNaN(show_id)) return
  var video_id = parseInt(button.getAttribute('x-video-id'), 10)
  if (!video_id || isNaN(video_id)) return

  var episodes_div = unsafeWindow.document.querySelector('#shows_' + show_id + ' div.' + constants.dom_classes.div_episodes)
  if (!episodes_div) return

  var episode_item = episodes_div.querySelector('li[x-video-id="' + video_id + '"]')
  if (!episode_item) return

  download_video(video_id, episode_item, button)
}

var make_download_show_video_button = function(show_id, video_id) {
  var button = make_element('button')

  button.setAttribute('x-show-id', show_id)
  button.setAttribute('x-video-id', video_id)
  button.innerHTML = strings.button_download_video
  button.addEventListener("click", onclick_download_show_video_button)

  return button
}

var add_episode_div_buttons = function(show_id, episodes_div) {
  var episode_items = episodes_div.querySelectorAll('li[x-video-id]')
  var episode_item, video_id, button

  for (var i=0; i < episode_items.length; i++) {
    episode_item = episode_items[i]

    video_id = parseInt(episode_item.getAttribute('x-video-id'), 10)
    if (!video_id || isNaN(video_id)) continue

    button = make_download_show_video_button(show_id, video_id)
    episode_item.appendChild(button)
  }
}

// ----------------------------------------------------------------------------- DOM: dynamic elements - EPG data - 1st pass (automatic, list all TV series and movies)

var active_channel_types      = {"shows": strings.types.shows, "movies": strings.types.movies}
var active_channel_categories = {}

var onclick_channel_toggle = function(event) {
  event.stopPropagation();event.stopImmediatePropagation();event.preventDefault();event.returnValue=true;

  var toggle_div = event.target
  if (!toggle_div || !(toggle_div instanceof HTMLElement)) return

  var channel_div = toggle_div.parentNode.parentNode
  if (!channel_div || !(channel_div instanceof HTMLElement)) return

  channel_div.className = (channel_div.classList.contains(constants.dom_classes.toggle_expanded))
    ? constants.dom_classes.toggle_collapsed
    : constants.dom_classes.toggle_expanded
}

var make_channel_div = function(type, data) {
  if (!data || (typeof data !== 'object') || data.ClipsOnly || !data.ID || !data.Title) return null

  var id, name, category, lc_category, summary, div, html

  id          = data.ID
  name        = data.Title
  category    = data.Genre       || ''
  lc_category = category ? category.toLowerCase() : ''

  if (lc_category)
    active_channel_categories[lc_category] = category

  summary = []
  if (data.Description)
    summary.push(data.Description)
  if (data.WhyItCrackles)
    summary.push(data.WhyItCrackles)
  if (data.DurationInSeconds)
    summary.push(strings.episode_labels.time_duration + ' ' + get_ms_duration_time_string(parseInt(data.DurationInSeconds, 10) * 1000))
  if (summary.length)
    summary = '<p>' + summary.join('</p><p>') + '</p>'

  div = make_element('div')

  html = [
    '<div class="' + constants.dom_classes.div_heading + '">',
    '  <h2><a target="_blank" href="' + constants.base_website_url + id + '">' + name + '</a></h2>',
    '  <div class="' + constants.dom_classes.div_toggle + '"></div>',
    '</div>',
    '<div class="' + constants.dom_classes.div_collapsible + '">',
    '  <div>' + summary + '</div>',
    '  <div class="' + constants.dom_classes.div_episodes + '"></div>',
    '</div>'
  ]

  div.setAttribute('id',             (type + '_' + id))
  div.setAttribute('class',          constants.dom_classes.toggle_expanded)
  div.setAttribute('x-type-id',      type)
  div.setAttribute('x-category-id',  lc_category)
  div.setAttribute('x-channel-name', name.toLowerCase())
  div.innerHTML = html.join("\n")
  div.querySelector(':scope > div.' + constants.dom_classes.div_heading + ' > div.' + constants.dom_classes.div_toggle).addEventListener("click", onclick_channel_toggle)

  add_channel_div_buttons(type, data, div)

  return div
}

var process_epg_data = function(channel_type, data) {
  if (!data || !Array.isArray(data) || !data.length) return

  var EPG_data = unsafeWindow.document.getElementById(constants.dom_ids.div_data)
  var channel_data, div

  for (var i=0; i < data.length; i++) {
    channel_data = data[i]

    div = make_channel_div(channel_type, channel_data)
    if (div) {
      EPG_data.appendChild(div)
    }
  }
}

// -----------------------------------------------------------------------------

var onclick_download_episodes_button = function(event) {
  event.stopPropagation();event.stopImmediatePropagation();event.preventDefault();event.returnValue=true;

  var button  = event.target
  var type    = button.getAttribute('x-type-id')
  var show_id = parseInt(button.getAttribute('x-show-id'), 10)
  if (!show_id || isNaN(show_id)) return

  var episodes_div = unsafeWindow.document.querySelector('#' + type + '_' + show_id + ' div.' + constants.dom_classes.div_episodes)
  if (!episodes_div) return

  // in the case of a movie:
  // - block element to contain a group of icons to access Webcast-Reloaded tools
  // - choose ".collapsible", rather than ".episodes"
  if (type === 'movies')
    episodes_div = episodes_div.parentNode

  download_episodes(type, show_id, episodes_div, button)
}

var make_download_episodes_button = function(type, show_id) {
  var button = make_element('button')

  // movies also need to perform the 2nd pass, but the resulting data will only include a single "episode".
  // the user doesn't need to be aware of this pass;
  // when the data returned by the 2nd pass only includes a single "episode",
  // rather than displaying a detailed list,
  // the script will silently perform the 3rd pass,
  // which replaces this button with a button to start the video (and add a group of icons to access Webcast-Reloaded tools)
  var label = (type === 'movies') ? strings.button_download_video : strings.button_download_episodes

  button.setAttribute('x-type-id', type)
  button.setAttribute('x-show-id', show_id)
  button.innerHTML = label
  button.addEventListener("click", onclick_download_episodes_button)

  return button
}

var add_channel_div_buttons = function(type, data, div) {
  var episodes_div = div.querySelector('div.' + constants.dom_classes.div_episodes)
  var button = make_download_episodes_button(type, data.ID)

  episodes_div.innerHTML = ''
  episodes_div.appendChild(button)
}

// -----------------------------------------------------------------------------

var populate_type_select_filter = function() {
  var select = unsafeWindow.document.getElementById(constants.dom_ids.select_type)
  var option, keys, value, name

  select.innerHTML = ''

  option = make_element('option')
  option.setAttribute('selected', 'selected')
  option.setAttribute('value', '')
  option.innerHTML = strings.default_type
  select.appendChild(option)

  keys = Object.keys(active_channel_types)
  if (!keys || !Array.isArray(keys) || !keys.length) return

  for (var i=0; i < keys.length; i++) {
    value = keys[i]
    name  = active_channel_types[value]

    if (value && name) {
      option = make_element('option')
      option.setAttribute('value', value)
      option.innerHTML = name
      select.appendChild(option)
    }
  }
}

var populate_category_select_filter = function() {
  var select = unsafeWindow.document.getElementById(constants.dom_ids.select_category)
  var option, keys, value, name

  select.innerHTML = ''

  option = make_element('option')
  option.setAttribute('selected', 'selected')
  option.setAttribute('value', '')
  option.innerHTML = strings.default_category
  select.appendChild(option)

  keys = Object.keys(active_channel_categories)
  if (!keys || !Array.isArray(keys) || !keys.length) return

  for (var i=0; i < keys.length; i++) {
    value = keys[i]
    name  = active_channel_categories[value]

    if (value && name) {
      option = make_element('option')
      option.setAttribute('value', value)
      option.innerHTML = name
      select.appendChild(option)
    }
  }
}

var post_process_epg_data = function() {
  // called after 1st pass is complete

  var EPG_root = unsafeWindow.document.getElementById(constants.dom_ids.div_root)

  populate_type_select_filter()
  populate_category_select_filter()

  if (!EPG_root.classList.contains(constants.dom_classes.data_loaded))
    EPG_root.className = constants.dom_classes.data_loaded
}

// ----------------------------------------------------------------------------- EPG: data cache

var epg_data_cache = {
  data: null,
  initialize_data: function() {
    epg_data_cache.data = {shows: [], movies: []}
  },
  add_raw_data: function(type, entries) {
    var old_entry, new_entry

    for (var i=0; i < entries.length; i++) {
      old_entry = entries[i]
      new_entry = {}

      if (!old_entry || (typeof old_entry !== 'object') || old_entry.ClipsOnly || !old_entry.ID || !old_entry.Title)
        continue

      new_entry.ID                = old_entry.ID
      new_entry.Title             = old_entry.Title
      new_entry.Genre             = old_entry.Genre
      new_entry.Description       = old_entry.Description
      new_entry.WhyItCrackles     = old_entry.WhyItCrackles
      new_entry.DurationInSeconds = old_entry.DurationInSeconds

      epg_data_cache.data[type].push(new_entry)
    }
  },
  is_persistent_storage_available: function() {
    return ((typeof GM_setValue === 'function') && (typeof GM_getValue === 'function'))
  },
  load_data_from_persistent_storage: function() {
    try {
      if (!epg_data_cache.is_persistent_storage_available()) throw ''

      var json = GM_getValue(constants.cache_keys.epg_data, '')
      if (!json) throw ''

      var data = JSON.parse(json)
      if (!data || (typeof data !== 'object') || !Array.isArray(data.shows) || !Array.isArray(data.movies) || !data.shows.length || !data.movies.length) throw ''

      epg_data_cache.data = data
      return true
    }
    catch(error) {
      return false
    }
  },
  save_data_to_persistent_storage: function() {
    try {
      if (!epg_data_cache.is_persistent_storage_available()) throw ''

      var json = JSON.stringify(epg_data_cache.data)
      GM_setValue(constants.cache_keys.epg_data, json)
      return true
    }
    catch(error) {
      return false
    }
  },
  get_item_count_in_persistent_storage: function() {
    try {
      if (!epg_data_cache.is_persistent_storage_available()) throw ''

      var count = GM_getValue(constants.cache_keys.epg_data_count, '')
      if (!count) return 0

      count = parseInt(count, 10)
      if (!count || isNaN(count)) return 0

      return count
    }
    catch(error) {
      return -1
    }
  },
  save_item_count_to_persistent_storage: function() {
    try {
      if (!epg_data_cache.is_persistent_storage_available()) throw ''

      var count = epg_data_cache.data.shows.length + epg_data_cache.data.movies.length
      GM_setValue(constants.cache_keys.epg_data_count, ('' + count))

      // fire an event that can be used to dynamically update the DOM
      unsafeWindow.postMessage({new_item_count_in_persistent_storage: count}, '*')

      return true
    }
    catch(error) {
      return false
    }
  },
  clear_persistent_storage: function() {
    try {
      if (!epg_data_cache.is_persistent_storage_available()) throw ''

      epg_data_cache.initialize_data()
      epg_data_cache.save_data_to_persistent_storage()
      epg_data_cache.save_item_count_to_persistent_storage()
      return true
    }
    catch(error) {
      return false
    }
  }
}

// ----------------------------------------------------------------------------- EPG: download data, store to persistent cache

var populate_epg_data_cache = function(oncomplete) {
  var page_types = ['shows', 'movies']
  var page_type, page_index

  var callback = function(epg_data) {
    var channel_type = page_type

    if (
         epg_data
      && (typeof epg_data === 'object')
      && epg_data.PageResult
      && (typeof epg_data.PageResult === 'object')
      && (typeof epg_data.PageResult.CurrentPage === 'number')
      && (typeof epg_data.PageResult.TotalPages === 'number')
      && (epg_data.PageResult.CurrentPage < epg_data.PageResult.TotalPages)
    ) {
      initiate_fetch()
    }
    else {
      page_type  = null
      page_index = null

      initiate_fetch()
    }

    if (
         epg_data
      && (typeof epg_data === 'object')
      && epg_data.Entries
      && Array.isArray(epg_data.Entries)
      && epg_data.Entries.length
    ) {
      epg_data_cache.add_raw_data(channel_type, epg_data.Entries)

      // perform some (entirely unnecessary) garbage collection
      epg_data.Entries = null
    }
  }

  var fetch_epg_data = function() {
    var url = 'https://web-api-us.crackle.com/Service.svc/browse/' + page_type + '/all/all/alpha-asc/US/' + constants.epg_data_xhr_page_size + '/' + page_index

    var headers = {
      "Accept": "application/json"
    }

    download_json(url, headers, callback)
  }

  var initiate_fetch = function() {
    if (!page_type)
      page_type = page_types.shift()

    if (!page_type) {
      if (typeof oncomplete === 'function')
        oncomplete()

      return
    }

    if (!page_index)
      page_index = 0

    page_index++

    fetch_epg_data()
  }

  epg_data_cache.initialize_data()
  initiate_fetch()
}

// ----------------------------------------------------------------------------- EPG: build DOM from data

var populate_epg_data = function() {
  var process_epg_data_cache = function() {
    var data  = epg_data_cache.data
    var types, type, entries

    types = Object.keys(data)
    for (var i=0; i < types.length; i++) {
      type    = types[i]
      entries = data[type]

      process_epg_data(type, entries)
    }

    post_process_epg_data()
  }

  if (epg_data_cache.load_data_from_persistent_storage()) {
    process_epg_data_cache()
  }
  else {
    var oncomplete = function() {
      epg_data_cache.save_data_to_persistent_storage()
      epg_data_cache.save_item_count_to_persistent_storage()
      process_epg_data_cache()
    }

    populate_epg_data_cache(oncomplete)
  }
}

// ============================================================================= deep links

// ----------------------------------------------------------------------------- episodes page (TV series or movie)

var process_episodes_deeplink = function(show_id) {
  var display_episodes = function(show_id, episodes) {
    var links = []
    var episode, title, url, info

    for (var i=0; i < episodes.length; i++) {
      episode = episodes[i]
      title = (episode.Season && episode.Episode)
        ? ('S' + pad_zeros(episode.Season, 2) + 'E' + pad_zeros(episode.Episode, 2) + ' - ' + episode.ShowName + ' - ' + episode.Title)
        : episode.Title

      url  = 'https://www.crackle.com/watch/' + show_id + '/' + episode.Id
      info = episode.Description

      links.push({title: title, url: url, info: info})
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

    unsafeWindow.document.body.innerHTML = html
    unsafeWindow.document.body.style.backgroundColor = 'white'
  }

  var download_episodes = function(show_id) {
    var url = 'https://web-api-us.crackle.com/Service.svc/channel/' + show_id + '/playlists/all/US'

    var headers = {
      "Accept": "application/json"
    }

    var callback = function(media) {
      var episodes = extract_episodes_from_API_server_response(media)
      if (!episodes || !Array.isArray(episodes) || !episodes.length) return

      if (episodes.length === 1) {
        var video_id = episodes[0].Id
        process_video_deeplink(video_id)
        return
      }
      display_episodes(show_id, episodes)
    }

    download_json(url, headers, callback)
  }

  download_episodes(show_id)
}

// ----------------------------------------------------------------------------- video page

var process_video_deeplink = function(video_id) {
  if (!user_options.redirect_to_webcast_reloaded)
    return

  var url = 'https://web-api-us.crackle.com/Service.svc/details/media/' + video_id + '/' + constants.country + '?disableProtocols=true'

  var timestamp = get_timestamp(new Date())
  var hmac      = get_hmac(url, timestamp)

  var headers = {
    "Accept"        : "application/json",
    "Authorization" : [hmac, timestamp, '117', '1'].join('|')
  }

  var callback = function(media) {
    media = extract_video_from_API_server_response(media)
    if (!media || (typeof media !== 'object') || !media.video_url) return

    var video_url  = media.video_url
    var video_type = media.video_type
    var vtt_url    = media.vtt_url

    process_video_url(video_url, video_type, vtt_url)
  }

  download_json(url, headers, callback)
}

// ============================================================================= bootstrap

var prevent_history_redirects = function() {
  if (unsafeWindow.history) {
    unsafeWindow.history.pushState    = function(){}
    unsafeWindow.history.replaceState = function(){}
  }
}

var init_deeplink = function() {
  var pathname  = unsafeWindow.location.pathname

  var url_regex = {
    episodes: new RegExp('^/watch/([\\d]+)$', 'i'),
    video:    new RegExp('^/watch(?:/playlist)?/[\\d]+/([\\d]+)$', 'i')
  }

  if (url_regex.episodes.test(pathname)) {
    debug(5, 'deep link: episodes page (TV series or movie)')

    var show_id = pathname.replace(url_regex.episodes, '$1')
    process_episodes_deeplink(show_id)
    return true
  }

  if (url_regex.video.test(pathname)) {
    debug(5, 'deep link: video page')

    var video_id = pathname.replace(url_regex.video, '$1')
    process_video_deeplink(video_id)
    return true
  }

  return false
}

var init_SPA = function() {
  var pathname = unsafeWindow.location.pathname

  if (pathname.indexOf(constants.target_pathname) === 0) {
    reinitialize_dom()
    populate_dom_filters()
    populate_dom_tools()
    populate_epg_data()
  }
  else {
    unsafeWindow.location = constants.target_pathname
  }
}

var init = function() {
  init_deeplink() || init_SPA()
}

prevent_history_redirects()
init()

// -----------------------------------------------------------------------------
