Polynomials are functions of the form
$$
f(x)=a_{0}+a_{1}x+a_{2}x^2+a_{3}x^3\dots a_{n}x^n
$$
or, more formally,
$$f(x)=\sum_{r=0}^n{a_{r}x^n}$$
where $n\in \mathbb{N}_{0},a\neq 0$. We call $f(x)$ a polynomial of degree $n$, or ($\text{deg }f =n$).

We can operate on polynomials, although sometimes its a little more complicated than numbers or linear identities:

# Polynomic operations
### Addition
Given polynomials $p_1$ and $p_2$ of respective degrees $n$ and $m$, where $m\leq n$:

$$\begin{align}
(p_{1}+p_{2})(x)&=\sum_{s=0}^nc_{s}x^s \\
c_{s}&=\begin{cases}
a_{s}+b_{s}&0\leq s\leq m \\
a_{s}&s>m
\end{cases}
\end{align}$$
Resulting in yet another polynomial of degree $n$.
### Multiplication
Multiplication is more convoluted (literally..). Given $p_1$ and $p_2$ defined similarly to [[260918 Polynomials#Addition|Addition]]:
$$\begin{align}
(p_{1}\times p_{2})(x)=\sum_{s=0}^{n+m}{\left(x^k\sum_{j=0}^s{p_{j}q_{k-j}}\right)}
\end{align}$$
Note how similar this process is to convolution!

### Division
Polynomial division is typically done through long division with place value replaced with exponents of $x$

# The remainder theorem
If $p(x)$ is divided by $d(x)=ax+b$ then the remainder $r$ is given by $r=p\left( -\frac{a}{b} \right)$:
##### Proof:
$$\begin{align}
q(x)&\triangleq \frac{p(x)-r}{d(x)} \\
&=\frac{p(x)-r}{ax+b}
 \\
 \\
p\left(-\frac{b}{a}\right)&=q\left( -\frac{b}{a} \right)\left( a\left( -\frac{b}{a} \right)+b \right)+r \\
&=q\left( -\frac{b}{a} \right)(-b+b)+r \\
&=0\times q\left( -\frac{b}{a} \right)+r \\
&=r
\end{align}$$
### The factor theorem
If $p\left( -\frac{b}{a} \right)=0$, $ax+b$ divides $p(x)$.
##### Proof:
This is a collary to the [[260918 Polynomials#The remainder theorem|remainder theorem]]:
$$\begin{align}
p\left( -\frac{b}{a} \right)&=r \\
\therefore p\left( -\frac{b}{a} \right)=0\iff r&=0 \\
\end{align}$$
