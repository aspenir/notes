Quadratics are of the form $f(x)=ax^{2}+bx+c,a\neq0$, and are examples of polynomials of degree 2.

If $a=1$, the quadratic is _monic_, otherwise it is _non-monic_.

There are many ways of solving quadratic equations. Given $x^{2}+bx+c=0$, we can solve via many methods
### Factorisation









$$
\begin{aligned}
x^{2}+bx+c&=0 \\
\text{Let }\alpha,\beta: &

\begin{cases}

-(\alpha +\beta)&=b \\
\alpha \beta&=c
\end{cases}

\\
(x-\alpha)(x-\beta)&=0 \\
(x-\alpha) =0,(x-\beta)&=0\\

x=\alpha, x&=\beta
\end{aligned}
$$









e.g.









$$
\begin{aligned}
x^{2}+61x+720&=0 \\
720&=2^4\times 3^2\times 5 \\
61&=1 \times 61 \\
\therefore \alpha \text{ and } &\beta \text{ must be coprime} \\
\alpha&=2^4 = 16\\
\beta&=3^{2}\times 5 = 45 \\
\therefore x &\in \{ -16,-45 \}
\end{aligned}
$$









e.g.









$$
\begin{aligned}
6x^{2}+7x-90&=0 \\
\text{Let } \gamma,\omega :\gamma \omega=ac\\\\\\\\ \gamma+\omega =b\\\\\\\\ \\


6x^{2}-\gamma x + \omega x-90&=0\\

6x^{2}-20x+27x-90&=0 \\
2x(3x-10)+9(3x-10)&=0 \\
(2x+9)(3x-10)&=0 \\

x\in \left\{  -\frac{9}{2}, \frac{10}{3}  \right\}
\end{aligned}
$$









OR









$$
\begin{aligned}
6x^{2}+7x-90&=0 \\
\implies36x^{2}+42x-540&=0 \\
y\triangleq 6x \implies y^{2}=36x^{2} \\
y^{2}+7y-540&=0 \\
(y-20)(y+27)&=0 \\
y\in \{ 20, -27 \} \\
\therefore x \in \left\{  \frac{10}{3}, -\frac{9}{2}  \right\}
\end{aligned}
$$









e.g.









$$
\begin{aligned}

\begin{cases}
x^{2}+y^{2}&=25 \\
x+y&=7
\end{cases}

\\
x+y=7\implies y&=7-x \\
x^{2}+(7-x)^{2}&=25 \\
x^{2}+49-14x+x^{2}&=25 \\
2x^{2}-14x+24&=0 \\
x^{2}-7x+12&=0 \\
(x-3)(x-4)&=0 \\
x&=3,4 \\
y&=4,3 \text{ respectively}
\end{aligned}
$$









### Completing the square
What if our roots are not in $\mathbb{Q}$? We can't factorise irrational numbers, so we must complete the square:









$$
\begin{aligned}
x^{2}+ax+b &\equiv (x+p)^{2}+q \\
&=x^{2}+2px+p^{2}+q \\
&

\begin{cases}
a&=2p, \\
b&=p^{2}+q \\
\end{cases}

\\
p&=\frac{a}{2}, \\
q&=b-\left( \frac{a}{2} \right)^{2}
\end{aligned}
$$









Completing the square also lets us find the turning point of a quadratic. Considering the general form $f(x)=n(x-p)^{2}+q$, the minimum value of $(x-p)^{2}$ (when $n >0$) is $0$, so the turning point lies at $x=p$. When $n<0$, the maximum value of $(x-p)^{2}$ is also $0$, so the turning point again lies upon $x=p$.

e.g. Find the vertex for $y=-2x^{2}+6x-5$ , hence prove that $\forall x\in \mathbb{R}, -2x^{2}+6x-5<0$









$$
\begin{aligned}
y&=-2x^{2}+6x-5 \\

&=-2(x^{2}-3x)-5 \\
&=-2\left( x-\frac{3}{2} \right)^{2}-\frac{1}{2} \\
\therefore \text{vertex lies at}\space x&=\frac{3}{2}  \\
y&=-2(0)-\frac{1}{2} \\
&=-\frac{1}{2} \\
&\left( \frac{3}{2}, -\frac{1}{2} \right) \\

\end{aligned}
$$









Since $n<0$, this vertex is the maximum point, and $y<0$ in it, so therefore all values of $y$ when $x\in \mathbb{R}$ are less than 0.

e.g. Find the minimum value of $\frac{1}{-2x^{2}+6x-5}$:
We know that the minimum value of any identity $\frac{1}{y}$ is when $y$ is at its greatest value, so we must find the maximum of $-2x^{2}+6x-5$:









$$
\begin{aligned}
y&=-2x^{2}+6x-5 \\
&=-2(x^{2}-3x)-5 \\
&=-2\left( x-\frac{3}{2} \right)^{2}-\frac{1}{2} \\
\therefore \text{vertex at}\space &\left ( \frac{3}{2},-\frac{1}{2} \right) \\
\therefore \text{minima} &=\frac{1}{\left( -\frac{1}{2} \right)}=-2
\end{aligned}
$$









### Disguised quadratics
Consider $x^4-5x^{2}-36=0$. We can make this into a quadratic. Let $y=x^{2}$:









$$
\begin{aligned}
y^{2}-5y-36&=0 \\
(y-9)(y+4)&=0 \\
y&\in \{ 9,-4 \}
\end{aligned}
$$









However, since $y=x^{2}$, $y$ cannot be negative, so $x=\pm 3$.

e.g.









$$
\begin{aligned}
x-2\sqrt{ x }-15&=0 \\
\text{Let }y&=\sqrt{ x } \\

y^{2}-2y-15&=0 \\
(y-5)(y+3)&=0 \\
y&\in \{ 5,-3 \} \\
x&=y^{2} \\
\therefore x&\in \{ 25,9 \} \\
\text{However, }x&=9 \text{ does not work, so} \\
x&=25
\end{aligned}
$$









##### Why doesn't $x=9$ work?
Since $y=\sqrt{ x }$, $y\geq0$, so $y=-3$ does not fulfill all criteria for a solution, and therefore $x=9$ does not either.
### The quadratic formula
The quadratic formula can be derived from completing the square:









$$
\begin{aligned}
ax^{2}+bx+c&\equiv a\left( x^{2}+\frac{b}{a}x \right)+c \\
&\equiv a\left[ \left( x+\frac{b}{2a} \right)^{2}-\left( \frac{b}{2a} \right)^{2} \right]+c \\
&=a\left( x+\frac{b}{2a} \right)^{2}+c-a\left( \frac{b^{2}}{4a^{2}} \right) \\
&=a\left( x+\frac{b}{2a} \right)^{2}-\frac{b^{2}-4ac}{4a} \\
\left( x+\frac{b}{2a} \right)^{2}&=\frac{b^{2}-4ac}{4a^{2}} \\
x&=\frac{-b\pm \sqrt{ b^{2}-4ac }}{2a}
\end{aligned}
$$









### Inequalities
e.g. Solve $3x^{2}+4x+1\leq0$, giving your answer as an interval.
We begin by finding the critical values:









$$
\begin{aligned}
3x^{2}+4x+1&=0 \\
(3x+1)(x+1)&=0 \\
x&\in \left\{  -\frac{1}{3},-1  \right\} \\
\end{aligned}
$$









These critical values split $\mathbb{R}$ into three intervals that we must check: $x\in(-\infty, -1], \left( -1,-\frac{1}{3} \right), [-\frac{1}{3},\infty)$.









$$
\begin{aligned} \\
(3x^{2}+4x+1)\Big\vert_{x=-2}&= \\
(3(-2)+1)(-2+1)&=(-6+1)(-1) \\
&=5 \\
& \\
(3x^{2}+4x+1)\Big\vert_{x=-\frac{1}{2}}&= \\
\left( 3\left( -\frac{1}{2} \right)+1 \right)\left( -\frac{1}{2}+1 \right)&=\left( -\frac{3}{2}+\frac{2}{2} \right)\left( \frac{1}{2} \right) \\
&=-\frac{1}{4} \\
& \\\\\\\\ \\
(3x^{2}+4x+1)\Big\vert_{x=2}&= \\

(3(2)+1)(2+1)&=(7)(3) \\
&=21
\end{aligned}
$$









Now we have the solution interval: $x\in\left( -1,-\frac{1}{3} \right)$.

e.g.









$$
\begin{aligned}
\frac{1}{(x+1)}<2
\end{aligned}
$$









We begin by finding the critical values:









$$
\begin{aligned}
\frac{1}{x+1}&=2 \\
1&=2(x+1) \\
1&=2x+2 \\
0&=2x+1 \\
x&=-\frac{1}{2}
\end{aligned}
$$









..and testing both intervals $x\in\left[ -\infty,-\frac{1}{2}),(-\frac{1}{2},\infty \right]$:









$$
\begin{aligned}
\frac{1}{x+1}\Big\vert_{x=-2}&=-1 \\
\frac{1}{x+1}\Big\vert_{x=1}&=\frac{1}{2}
\end{aligned}
$$









So we have the solution $x\in (-\infty, -\frac{1}{2}]$. But, we made a critical error in our solution - $(x+1)$ could be negative, meaning we would have to switch our $<$ to a $>$. So... we have to divide our problem into two cases, or avoid multiplying by unknowns like so[^1]:









$$
\begin{aligned}
\frac{1}{x+1}&<2 \\
\frac{1}{x+1}-2&<0 \\
\frac{1-2(x+1)}{x+1}&<0 \\
\implies \frac{-1-2x}{x+1}&<0
\end{aligned}
$$









Which gives us two values where the numerator and denominator change sign:









$$
\begin{aligned}
-1-2x&=0 \\
-1&=2x \\
x&=-\frac{1}{2} \\
 \\
x+1&=0 \\
x&=-1
\end{aligned}
$$









Giving us our three intervals of $\mathbb{R}$: $x\in \left( -\infty,-1 \right], \left( -1, -\frac{1}{2} \right), \left[ -\frac{1}{2},\infty \right)$:









$$
\begin{aligned}
\frac{1}{x+1}\Big\vert_{x=-2}&=-1 \\
\frac{1}{x+1}\Big\vert_{x=-\frac{3}{4}}&=4 \\
\frac{1}{x+1}\Big\vert_{x=2}&=\frac{1}{3} \\

\end{aligned}
$$









So therefore $x\in \left\{  y:y\in \mathbb{R}\land \left[(y< -1)\space\lor\space (y>-\frac{1}{2}) \right] \right\}$. 

### The Discriminant
We now return to normal quadratics - when will non-real solutions be generated?

Looking at the quadratic formula, we find that $\sqrt{ b^{2}-4ac }$ is the only place that multiples of $i$ can be generated. We call $b^{2}-4ac$ the discriminant, or $\Delta$.

For any quadratic $E$:
- When $\Delta>0$, $E$ has two real solutions
- When $\Delta=0$, $E$ has one real solution
- When $\Delta<0$, $E$ has no real solution

e.g. Given that $4x^{2}-(k+3)x+9=0$ has one root. Determine $k$:









$$
\begin{aligned}
4x^{2}-(k+3)x+9&=0 \\
a&=4 \\
b&=-(k+3)=-k-3 \\
c&=9 \\
 \\
\Delta&=(-k-3)^{2}-4(4)(9) \\
&=k^{2}+6k+9-144 \\
&=k^{2}+6k-135 \\
 \\
k^{2}+6k-135&=0 \\
k&=\frac{-6\pm \sqrt{ 6^{2}-4(1)(-135) }}{2} \\
&=\frac{-6\pm 24}{2} \\
k&\in \{ -15,9 \}
\end{aligned}
$$









e.g. The equation $x^{2}+(m+4)x+(4m+1)=0$ has two distinct real roots. Find the set of possible values for $m$:









$$
\begin{aligned}
\Delta &= (m+4)^{2}-4(1)(4m+1) \\
&=m^{2}+8m+16-16m-4 \\
&=m^{2}-8m+12 \\
 \\
0&<m^{2}-8m+12
 \\
\end{aligned}
$$









We then find our critical values:









$$
\begin{aligned}
m^{2}-8m+12&=0 \\
(m-6)(m-2)&=0 \\
m&\in \{ 2,6 \}
\end{aligned}
$$









And consider each set $m\in(-\infty,2),[2,6],(6,\infty)$:









$$
\begin{aligned}
m^{2}-8m+12\Big\vert_{m=1}&=5 \\
m^{2}-8m+12\Big\vert_{m=4}&=-4 \\
m^{2}-8m+12\Big\vert_{m=8}&=12
\end{aligned}
$$









So therefore $m\in \{ n:n\in (-\infty,2)\space\cup\space(6,\infty) \}$.

e.g. Find the range of values of $k$ such that the quadratic $x^{2}+(k+4)x+k+7$ is positive for all values of $x$:









$$
\begin{aligned}
\Delta &< 0 \\
(k+4)^{2}-4(7+k)&<0 \\
k^{2}+8k+16-28+4k&<0 \\
k^{2}+4k-12&<0
\end{aligned}
$$









We find the critical values of $k$:









$$
\begin{aligned}
k^{2}+4k-12&=0 \\
(k+6)(k-2)&=0 \\
k&\in \{ -6,2 \}
\end{aligned}
$$









And test the three intervals $k\in(-\infty,-6), [-6,2], (2,\infty)$:









$$
\begin{aligned}
k^{2}+4k-12\Big\vert_{k=-7}&=9 \\
k^{2}+4k-12\Big\vert_{k=-4}&=-12 \\
k^{2}+4k-12\Big\vert_{k=3}&=9 \\

\end{aligned}
$$









Therefore $k\in \{ y:(y\in \mathbb{R})\space\land\space (y>-6)\space\land\space (y<2) \}$, or $k\in \{ y:2>y>-6 \}$.

[^1]: There are other ways of doing this, such as multiplying both sides by $(x+2)^2$, which is guaranteed to be positive.
