import"./CWj6FrbW.js";import"./DG-Abp-w.js";import{ab as z,k as y,m as g,X as D,ai as R,w as v,R as S,a5 as M,aj as P,ak as T,o as w,I as A,n as B,x as m,B as E,C as t,D as F,F as I,a8 as l,aa as c}from"./Bg51STgC.js";function i(h,d,u=!1,p=!1,f=!1){var o=h,r="";z(()=>{var s=D;if(r===(r=d()??"")){y&&g();return}if(s.nodes_start!==null&&(R(s.nodes_start,s.nodes_end),s.nodes_start=s.nodes_end=null),r!==""){if(y){v.data;for(var a=g(),k=a;a!==null&&(a.nodeType!==S||a.data!=="");)k=a,a=M(a);if(a===null)throw P(),T;w(v,k),o=A(a);return}var e=r+"";u?e=`<svg>${e}</svg>`:p&&(e=`<math>${e}</math>`);var n=B(e);if((u||p)&&(n=m(n)),w(m(n),n.lastChild),u||p)for(;m(n);)o.before(m(n));else o.before(n)}})}const j={title:"Newtonian Physics",date:"2025-07-02",slug:"newtonian-physics"},{title:V,date:W,slug:X}=j;var $=E(`<h1>Newtonian Physics</h1> <p>Simple ball physics/collisions straight from head implemented in c++.</p> <video width="480" autoplay loop><source src="/newtonian-collisions.mp4" type="video/mp4"/></video> <p>First we define a simple struct to hold ball object information:</p> <pre class="language-cpp"><!></pre> <p>Populate the balls array as you wish:</p> <pre class="language-cpp"><!></pre> <p>Now after randomly creating some balls during initialization we move to the simulation update.
Our update function should give as delta time (time between updates).</p> <p>First create copy of balls array so that we can always read the state before this update. Why? During collision one ball excerts force on the other and vice versa. But we iterate through each combination of balls. So if we were to change state during collision of ball_0 and ball_1 we would then get different reuslt at ball_1 and ball_0.</p> <pre class="language-cpp"><!></pre> <p>Define loss of energy during each collision (so that collisions are non perfect and eventuall end bouncing):</p> <pre class="language-cpp"><!></pre> <p>Now we will loop through each ball and apply the physics:</p> <pre class="language-cpp"><!></pre> <p>Now we calculate velocity changes from colliding with other balls:</p> <pre class="language-cpp"><!></pre> <p>And finally replaced balls with updated balls copy and apply velocities to actually change the balls positions:</p> <pre class="language-cpp"><!></pre>`,3);function G(h){var d=$(),u=t(F(d),4);u.muted=!0;var p=t(u,4),f=l(p);i(f,()=>`<code class="language-cpp"><span class="token comment">// Ball</span>
<span class="token keyword">struct</span> <span class="token class-name">ball_info</span><span class="token punctuation">&#123;</span>
vec3 position<span class="token punctuation">;</span>
vec3 velocity<span class="token punctuation">;</span>
<span class="token keyword">float</span> radius<span class="token punctuation">;</span>
<span class="token keyword">float</span> mass<span class="token punctuation">;</span>

vec3 <span class="token function">get_momentum</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> velocity <span class="token operator">*</span> mass<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span><span class="token punctuation">;</span></code>`),c(p);var o=t(p,4),r=l(o);i(r,()=>'<code class="language-cpp">std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>ball_info<span class="token operator">></span> balls<span class="token punctuation">;</span></code>'),c(o);var s=t(o,6),a=l(s);i(a,()=>'<code class="language-cpp"><span class="token keyword">auto</span> updated_balls <span class="token operator">=</span> balls<span class="token punctuation">;</span></code>'),c(s);var k=t(s,4),e=l(k);i(e,()=>'<code class="language-cpp"><span class="token keyword">float</span> loss_factor <span class="token operator">=</span> <span class="token number">1.0</span> <span class="token operator">-</span> collision_loss<span class="token punctuation">;</span></code>'),c(k);var n=t(k,4),N=l(n);i(N,()=>`<code class="language-cpp">
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> balls<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
<span class="token punctuation">&#123;</span>
    ball_info <span class="token operator">&amp;</span>ball <span class="token operator">=</span> balls<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">// Gravity</span>
    updated_balls<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>velocity<span class="token punctuation">.</span>y <span class="token operator">-=</span> earth_gravity <span class="token operator">*</span> delta_time<span class="token punctuation">;</span>

    <span class="token comment">// Collision with ground</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>ball<span class="token punctuation">.</span>position<span class="token punctuation">.</span>y <span class="token operator">&lt;</span> ball<span class="token punctuation">.</span>radius<span class="token punctuation">)</span>
    <span class="token punctuation">&#123;</span>
        updated_balls<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>velocity<span class="token punctuation">.</span>y <span class="token operator">=</span> <span class="token operator">-</span>ball<span class="token punctuation">.</span>velocity<span class="token punctuation">.</span>y <span class="token operator">*</span> loss_factor<span class="token punctuation">;</span>
        updated_balls<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>position<span class="token punctuation">.</span>y <span class="token operator">=</span> ball<span class="token punctuation">.</span>radius<span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>

    <span class="token comment">// </span>
    <span class="token comment">// Collisions with other balls</span>
    <span class="token comment">//</span>
<span class="token punctuation">&#125;</span>
</code>`),c(n);var _=t(n,4),C=l(_);i(C,()=>`<code class="language-cpp"><span class="token comment">// Now we loop through every other ball one we alread have</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> balls<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span>
<span class="token punctuation">&#123;</span>
    <span class="token comment">// Skip collision with self</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> j<span class="token punctuation">)</span>
        <span class="token keyword">continue</span><span class="token punctuation">;</span>
    
    ball_info <span class="token operator">&amp;</span>other_ball <span class="token operator">=</span> balls<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">// Detect collision with other ball</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">length</span><span class="token punctuation">(</span>ball<span class="token punctuation">.</span>position <span class="token operator">-</span> other_ball<span class="token punctuation">.</span>position<span class="token punctuation">)</span> <span class="token operator">&lt;</span> ball<span class="token punctuation">.</span>radius <span class="token operator">+</span> other_ball<span class="token punctuation">.</span>radius<span class="token punctuation">)</span>
    <span class="token punctuation">&#123;</span>
        <span class="token comment">// Vector from ball center to other-ball center</span>
        vec3 hit_dir <span class="token operator">=</span> <span class="token function">normalize</span><span class="token punctuation">(</span>other_ball<span class="token punctuation">.</span>position <span class="token operator">-</span> ball<span class="token punctuation">.</span>position<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// Change the other ball's velocity and divide by other_ball's mass</span>
        <span class="token comment">// to respect Law of Conservation of Momentum</span>
        updated_balls<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">.</span>velocity <span class="token operator">+=</span> hit_dir <span class="token operator">*</span> loss_factor <span class="token operator">/</span> other_ball<span class="token punctuation">.</span>mass <span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>
</code>`),c(_);var b=t(_,4),O=l(b);i(O,()=>`<code class="language-cpp"><span class="token comment">// Update real balls with an updated array</span>
balls <span class="token operator">=</span> updated_balls<span class="token punctuation">;</span>

<span class="token comment">// Apply velocities</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> balls<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
<span class="token punctuation">&#123;</span>
    balls<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>position <span class="token operator">+=</span> balls<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>velocity <span class="token operator">*</span> delta_time<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code>`),c(b),I(h,d)}const Y=Object.freeze(Object.defineProperty({__proto__:null,default:G,metadata:j},Symbol.toStringTag,{value:"Module"}));export{Y as _};
