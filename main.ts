import{mkdirSync,readdirSync,readFileSync,writeFileSync}from'node:fs';
const T=`"3c&(,-1!!!!!!!!+++++++'+++'+++!+++!!!!!!!!!!!!!BFFB"!!!!!!!!!!!'*!!!!!!!!!!!!!!&&#&`;
function r(p,q){
let D=[],C=[],M=new Int32Array(256),O=new Uint8Array(65536),n=p.length,s=0,c=0,x=0,t=0,j=0,l=0;
const d=e=>[O.subarray(0,l),e];
for(;;){
if(t==1e6)return d(10);
if(x<0||x>=n)return d(9);
let o=p[x],v=T.charCodeAt(o)-34;
if(!(v>=0))return d(5);
let m=v>>4,g=(v>>2)&3,u=v&3;
if(x+m>=n)return d(9);
t++;
let y=x+1+m;
if(s<g)return d(2);
if(s-g+u>256)return d(3);
x=y;
if(!o)return d(0);
if(o==1){D[s++]=(p[y-1]<<24)>>24;continue}
if(o==2){D[s++]=p[y-4]|p[y-3]<<8|p[y-2]<<16|p[y-1]<<24;continue}
if(o==3){s--;continue}
if(o==4){D[s]=D[s-1];s++;continue}
if(o==5){let a=D[s-1];D[s-1]=D[s-2];D[s-2]=a;continue}
if(o==6){D[s]=D[s-2];s++;continue}
if(o==7){let a=D[s-3];D[s-3]=D[s-2];D[s-2]=D[s-1];D[s-1]=a;continue}
if(o==23){D[s-1]=-D[s-1]|0;continue}
if(o==27){D[s-1]=~D[s-1];continue}
if(o>=16&&o<=34&&o!=23&&o!=27){
let b=D[s-1],a=D[s-2],w;
if(o<19)w=o==16?(a+b)|0:o==17?(a-b)|0:Math.imul(a,b);
else if(o<21){if(!b)return d(4);w=o==19?a==-2147483648&&b==-1?a:(a/b)|0:b==-1?0:(a%b)|0}
else if(o<23){if(!b)return d(4);w=o==21?Math.floor((a>>>0)/(b>>>0))|0:(a>>>0)%(b>>>0)|0}
else if(o<27)w=o==24?a&b:o==25?a|b:a^b;
else if(o<31)w=o==28?a<<(b&31):o==29?a>>(b&31):(a>>>(b&31))|0;
else w=o==32?a==b?1:0:o==33?a<b?1:0:(a>>>0)<(b>>>0)?1:0;
s-=2;D[s++]=w;continue}
if(o>=48&&o<51){
let e=((p[y-2]|p[y-1]<<8)<<16)>>16,k=1;
if(o>48){let z=D[--s];k=o==49?z==0:z!=0}
if(k)x=y+e;
continue}
if(o==51){if(c==64)return d(7);C[c++]=y;x=p[y-2]|p[y-1]<<8;continue}
if(o==52){if(!c)return d(8);x=C[--c];continue}
if(o==64){let a=D[s-1];if(a<0||a>255)return d(6);D[s-1]=M[a];continue}
if(o==65){let a=D[s-1],v=D[s-2];if(a<0||a>255)return d(6);s-=2;M[a]=v;continue}
if(o==80){let z=String(D[s-1]);if(l+z.length>65536)return d(11);s--;for(let k=0;k<z.length;k++)O[l++]=z.charCodeAt(k);continue}
if(o==81){if(l+1>65536)return d(11);O[l++]=D[--s]&255;continue}
if(o==82){D[s++]=j<q.length?q[j++]:-1;continue}
return d(D[--s]&255)
}
}
let I=process.env.MAKEFUN_INPUT_DIR??'/input',G=process.env.MAKEFUN_OUTPUT_DIR??'/output';
for(let i of readdirSync(I).sort()){let[o,e]=r(readFileSync(I+'/'+i+'/program.bin'),readFileSync(I+'/'+i+'/input.bin'));mkdirSync(G+'/'+i,{recursive:true});writeFileSync(G+'/'+i+'/stdout.bin',o);writeFileSync(G+'/'+i+'/exit.txt',e+'\n')}
