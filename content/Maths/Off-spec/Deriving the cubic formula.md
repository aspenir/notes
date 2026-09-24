Galois proved that order 5 polynomials are NOT solveable through a radical solution, whilst order 2 (quadratic), order 3 (cubic) and order 4 are.

## Exercise









$$
\begin{aligned}
x^{2}-4x+1&=0 \\
x&=\frac{-b\pm \sqrt{ b^{2}-4ac }}{2a} \\
&=\frac{-(-4)\pm \sqrt{ (-4)^{2}-4(1)(1) }}{2(1)} \\
&=\frac{4\pm \sqrt{ 12 }}{2}=\frac{4\pm 2\sqrt{ 3 }}{2} \\
&=2\pm \sqrt{ 3 }
\end{aligned}
$$









## The derivation









$$
\begin{aligned}
y^{3}+by^{2}+cy+d&=0 \\
\text{Let }x&=y+m \\
\text{with } m \text{ such that} \\
x^{3}+ax+b&=0 \\
 \\
\text{We can then represent }x  \text{ as } \alpha+\beta \\
x^{3}&=(\alpha+\beta)^{3} \\
&=\alpha^{3}+3\alpha^{2}\beta+3\alpha \beta^{2}+\beta^{3} \\
&=\alpha^{3}+3\alpha \beta(\alpha+\beta)+\beta^{3} \\
\therefore x^{3}-\alpha^{3}-3\alpha \beta(\alpha+\beta)-\beta^{3}&=0 \\
x^{3}-3\alpha \beta x-(\alpha^{3}+\beta^{3})&=0 \\

\therefore ax+b&=3\alpha \beta x-(\alpha^{3}+\beta^{3}) \\
 \\
a&=3\alpha \beta \\
-\frac{a^{3}}{27}&=\alpha^{3}\beta^{3} \\
-b&=\alpha^{3}+\beta^{3}
 \\\\\\\\ \text{using the same logic as factorising a quadratic:}\\
 
u^{2}+bu-\frac{a^{3}}{27}&=0 \\
\alpha^{3}\text{ and } \beta^{3} \text{ are roots}
 \\
\therefore \alpha^{3},\beta^{3}&=\frac{\left( -b\pm \sqrt{ b^{2}+\frac{4a^{3}}{27} } \right)}{2a} \\
 \\
\therefore x=\alpha+\beta \\
=\left( \frac{\left( -b+\sqrt{ b^{2}+\frac{4a^{3}}{27} } \right)}{2a} \right)^{\frac{1}{3}} &+ \left( \frac{\left( -b-\sqrt{ b^{2}+\frac{4a^{3}}{27} } \right)}{2a} \right)^{\frac{1}{3}}


\end{aligned}
$$









