---
date: 2026-10-15
---
We already know how to add two fractions together e.g.:
$$\begin{align}
\frac{3}{x+7}+\frac{2}{4x-1}&=\frac{3(4x-1)}{(x+7)(4x-1)}+\frac{2(x+7)}{(x+7)(4x-1)} \\
&=\frac{12x-3+2x+14}{4x^{2}+27x-7} \\
&=\frac{14x+11}{4x^{2}+27x-7}
\end{align}$$
but... how can we split a fraction with a polynomic denominator back to its $\frac{A}{x+a}$ sum?
$$\begin{align}
f(x)&\equiv \frac{A}{x+7}+\frac{B}{4x-1} \\
\implies 14x+11&=A(x+7)+B(4x-1) \\
&\begin{cases}
4B+A&=14 & x^1 \text{ coefficient}\\
-B+7A&=11 &x^0 \text{ coefficient}
\end{cases} \\
A&=14-4B \\
-B+7(14-4B)&=11 \\
98-29B&=11 \\
87-29B&=0 \\
29B&=87 \\
B&=\frac{87}{29}=3 \\
A&=14-4B \\
&=14-4(3) \\
&=2
\end{align}$$
> [!info] Note: For greater order denominators, it is easier to substitute two values for $x$ and solve from there - e.g. in the example above we could solve $x\triangleq 2\implies 14(2)+11=A(2+7)+B(4(2)-1)\implies 39=9A+7B$, and $x\triangleq 3 \implies 14(3)+11=A(3+7)+B(4(3)-1)\implies 53=10A+11B$, providing $\begin{cases}9A+7B&=39\\10A+11B&=53\end{cases}$.
### Repeated factors
Consider the following:
$$\begin{align}
f(x)&=\frac{x^{2}+21x+62}{(x-2)(x+4)^{2}} \\
&=\frac{A}{x-2}+\frac{B}{x+4}+\frac{C}{(x+4)^{2}} \\
x^{2}+21x+62&=A(x+4)^2+B(x-2)(x+4)+C(x-2) \\ \\
f(2)\implies2^2+21(2)+62&=A(2+4)^2+B(0)(2+4)+C(0) \\
108&=36A \\
A&=3 \\ \\
f(-4)\implies (-4)^{2}+21(-4)+62&=A(0)^2+B(-4-2)(0)+C(-4-2) \\
-6&=-6C \\
C&=1 \\
 \\
x^2 \text{ coefficient}: 1&=A+B \\
B&=1-3 \\
&=-2 \\
& \\
f(x)&=\frac{3}{x-2}+ \frac{-2}{x+4}+ \frac{1}{(x+4)^2}
\end{align}$$
Note how we "mixed" the two methods together - when we run out of obvious values for $x$ it is often easier to delve into the coefficients method than picking a random value of $x$ (although sometimes $x=0$ is easier).

### Examples
##### 1.$\frac{x+27}{x^3-4x^{2}-3x+18}$
$$\begin{align}
\frac{x+27}{x^3-4x^{2}-3x+18}&=\frac{x+27}{(x+2)(x-3)^{2}} \\
&=\frac{A}{x+2}+\frac{B}{x-3}+\frac{C}{(x-3)^{2}} \\
x+27&=A(x-3)^{2}+B(x+2)(x-3)+C(x+2) \\
 \\
f(3)\implies 3+27&=A(0)^{2}+B(3+2)(0)+C(3+2) \\
30&=5C \\
C&=6 \\
 \\
f(-2)\implies -2+27&=A(-2-3)^{2}+B(-2-3)(0)+C(0) \\
25&=25A \\
A&=1 \\
 \\
x^{2}: A+B&=0 \\
B&=0-1 \\
&=-1 \\
 \\
f(x)&=\frac{1}{x+2}+ \frac{-1}{x-3}+\frac{6}{(x-3)^{2}}
\end{align}$$
##### 2. $\frac{x^{2}-9x+38}{(x+1)(x-3)^2}$
$$\begin{align}
\frac{x^{2}-9x+38}{(x+1)(x-3)^{2}}&=\frac{A}{x+1}+\frac{B}{x-3}+\frac{C}{(x-3)^{2}} \\
x^{2}-9x+38&=A(x-3)^{2}+B(x+1)(x-3) +C(x+1) \\
 \\
x=3\implies 20&=A(0)^{2}+B(4)(0)+C(4) \\
4C&=20 \\
C&=5 \\
 \\
x=-1\implies 48&=A(-4)^2+B(0)(-4)+C(0) \\
16A&=48 \\
A&=3 \\
 \\
x^2:A+B&=1 \\
B&=1-3 \\
&=-2 \\
& \\
f(x)&=\frac{3}{x+1}-\frac{2}{x-3}+\frac{5}{(x-3)^{2}}
\end{align}$$
