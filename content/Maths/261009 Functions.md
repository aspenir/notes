---
date: 2026-10-09
---

Given non-empty sets $A$ and $B$, a _mapping_ from $A$ to $B$ can be represented as $f:A\to B$ - every element of $A$ is uniquely associated with some element of $B$.

$A$ is known as the _domain_ of $f$ and $B$ is known as the _co-domain_ of $f$. The set of images of $A$ $\{ f(a):a\in A \}$ is a subset of $B$, and is also written as $f(A)$. This is known as the _range_ of $f$.

There is a slight difference between co-domain and range - the range is always a subset of the co-domain. An example of this is:
$$\begin{align}
f: \mathbb{N} \to \mathbb{Z}\ \ \ \ \ \ \ \ \ &f(n)=-n+23 \\
&\text{range}(f)= \{ x\in\mathbb{Z} :x<23\} \\
f:\mathbb{N}\to \mathbb{Q}\ \ \ \ \ \ \ \ &f(n)=\frac{1}{n} \\
&\text{range}(f)= \{ x\in\mathbb{Q}:0<x<1 \} \\
f:\mathbb{N}\to \mathbb{N} \ \ \ \  \ \ \ \ &f(n)\text{ is the number of factors of }n \\
&\text{range}(f)= \mathbb{N}
\end{align}$$
When the co-domain is a subset of the domain, the range is equal to the co-domain.

Note that $f(x)=f(y)\;\not\!\!\!\implies x=y$, e.g. $f:\mathbb{Z}\to \mathbb{Z}, \ f(x)=x^{2}\implies f(1)=1=f(-1)$.

Note that functions such as $f(x)=\frac{1}{x}$ is _not_ a function over $\mathbb{R}$ - it isn't defined for $x=0$. We must amend the domain to be $x\in (\mathbb{R} - \{ 0 \})$, or  $x \in \{ n\in \mathbb{R}: n\neq 0 \}$.
```desmos-graph
left=-10;right=10;
bottom=-10;top=10;
grid=false;
hideAxisNumbers=true;
height=300;
width=300;
---
y=1/x | #fd96a9
```
Another slightly more complex example is $\tan x$ - it is not defined at every second multiple of $90$. We must amend the domain to be $$x\in \{  y\in \mathbb{R}: \forall n\in \mathbb{N}, y\neq \pm 90(2n-1)) \}$$
i.e. the set of reals such that $x$ is not equal to a second multiple of $90$ minus $90$.
```desmos-graph
left=-360;right=360;
bottom=-10;top=10;
grid=false;
hideAxisNumbers=true;
degreeMode=degrees;
height=300;
width=600;
---
y=\tan x | #fd96a9
```

### Composite functions
Consider two functions
$$\begin{align}
f: A\to B \\
g: B\to C
\end{align}$$
We define $gf:A\to C$ by $gf(x)=g(f(x))$. This is known as composite of $g$ and $f$.

e.g. $f(x)=x^{2}$, $g(x)=3x-1$: $gf(x)=3f(x)-1=3x^{2}-1$
e.g. $f(x)=\sqrt{ x }$, $g(x)=x^{2}+3x-18$. Find $fg$
$$\begin{align}
fg(x)&=\sqrt{ g(x) } \\
&=\sqrt{ x^{2}+3x-18 }
\end{align}$$
Note that $fg$ is not defined over the same domain as $f$ or $g$ - we must restrict the domain;

$$\begin{align}
x^{2}+3x-18>0 \\
(x+6)(x-3)>0 \\
\therefore x\leq -6 \lor x\geq 3 \\ \\
fg: \{ x\in \mathbb{R}: x\leq -6 \lor x\geq 3\}\to \{ y\in \mathbb{R}: y\geq0 \}
\end{align}$$
e.g. Given $f(x)=\frac{3x+1}{2x-5}, x\neq \frac{5}{2}$, find $g(x)$ such that $fg(x)=x$.

For $fg(x)=x$, $g$ must be the _inverse function_ of $f$:

$$\begin{align}
x&=\frac{3g+1}{2g-5} \\
x(2g-5)&=3g+1 \\
2gx-3g&=5x+1 \\
g(2x-3)&=5x+1 \\
g(x)&=\frac{5x+1}{2x-3}, x\neq \frac{3}{2}
\end{align}$$
```desmos-graph
top=12; bottom=-8;
left=-8; right=12;
hideAxisNumbers = true;
grid=false;
width=500;
height=500;
---
x=5/2 | solid | #416f67
x=3/2 | solid | #94606c
y=3/2 | solid | #416f67
y = 5/2 | solid | #94606c

x=y | #64a9c0

f(x)=(3x+1)/(2x-5) | #57b4a0
g(x)=(5x+1)/(2x-3) | #fd96a9
```
Thus find $gf(x)$:

We already know that this will also equal $x$, as $f$ is also the inverse of $g$ (inversion is commutative), but for a vigorous proof, let us do this algebraically;
$$\begin{align}
gf(x)&=\frac{5\left( \frac{3x+1}{2x-5} \right)+1}{2\left( \frac{3x+1}{2x-5} \right)-3} \\
&=\frac{(2x-5)(5(3x+1)+(2x-5))}{(2x-5)(6x+2-3(2x-5))} \\
&=\frac{5(3x+1)+2x-5}{6x+2-6x+15} \\
&=\frac{17x}{17} \\
&=x
\end{align}$$
### Inverse functions
For every one-one function $f: A\to B$, there exists an inverse function $f^{-1}:B\to A$

e.g. $f:\mathbb{R}\to \mathbb{R}, f(x)=x^{2}+4x-5,f^{-1}=\pm\sqrt{ x+9 }-2$
```desmos-graph
bottom=-12;top=8;
left=-12;right=8;
height=300;width=300;
---
y=x^2+4x-5 | #57b4a0
y=\sqrt{x+9}-2 | #fd96a9
y = -\sqrt{x+9}-2 | #fd96a9
y=x | #64a9ca
```
We may solve for $f(x)=f^{-1}(x)$ by using $x=f(x)$ or $x=f^{-1}(x)$;
$$\begin{align}
x^{2}+4x-5&=x \\
x^{2}+3x-5&=0 \\
0&=\left( x+\frac{{3-\sqrt{ 29 }}}{2} \right)\left( x+\frac{{3+\sqrt{ 29 }}}{2} \right) \\
x&=\frac{{3\pm \sqrt{ 29 }}}{2}
\end{align}$$