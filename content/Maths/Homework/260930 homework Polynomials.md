1. Expand $(x+1)(x-5)(2x-3)$ fully:
$$\begin{align}
(x+1)(x-5)(2x-3)&=(x^{2}-4x-5)(2x-3) \\
&=2x^3-8x^{2}-10x-3x^{2}+12x+15 \\
&=2x^{3}-11x^{2}+2x+15
\end{align}$$
2. Simplify $(3+2x)^3-(3-2x)^{3}$
$$\begin{align}
a^3-b^3&=(a-b)(a^{2}+ab+b^{2}) \\
\implies(3+2x)^3-(3-2x)^3&=((3+2x)-(3-2x)) \\
&((3+2x)^{2}+(3+2x)(3-2x)+(3-2x)^{2}) \\
&=4x(9+6x+4x^{2}+(-4x^{2}+9)+(9+4x^{2}-6x)) \\
&=4x(4x^{2}+27) \\
&=16x^3+108x
\end{align}$$
3. Polynomials $f(x)$ is defined by 
$$\begin{align}
f(x)&=x^3+px+q
\end{align}$$
Where $p$ and $q$ are constants. It is given that $x+1$ and $x-3$ are factors of $f(x)$:

$$\begin{align}
f|(x+1)\implies f(-1)&=0 \\
f|(x-3)\implies f(3)&=0 \\
 \\
\begin{cases}
(-1)^3+p(-1)+q &=0\\
(3)^3+p(3)+q&=0
\end{cases} \\ 
\begin{cases}
-1-p+q&=0 \\
27+3p+q&=0 \\
\end{cases} \\
\begin{cases}
q-p&=1 \\
3p+q&=-27
\end{cases} \\
\begin{cases}
q&=1+p \\
3p+q&=-27
\end{cases} \\
3p+(1+p)&=-27 \\
4p+1&=-27 \\
4p&=-28 \\
\boxed{p=-7} \\
q&=1+p \\
\boxed{q=-6
}\end{align}$$
Solve $f(x)=0$
$$\begin{align}
x^3-7x-6&=0 \\
\text{it is given that } f(-1)&=0 \\
f(3)&=0 \\ \\
\frac{x^3-7x-6}{x+1}&=x^2-x-6 \\
x^2-x-6&=0 \\
(x-3)(x+2)&=0 \\
x&\in \{ 3,-2,-1 \}
\end{align}$$
4. Expand $\left( x+\frac{2}{x} \right)^4$
$$\begin{align}
\left( x+\frac{2}{x} \right)^4&= {4\choose{0}} x^4 + {4\choose{1} }\left( \frac{2}{x} \right)x^3+{4\choose{2}}\left( \frac{2}{x} \right)^2x^2+{4\choose{3}}\left( \frac{2}{x} \right)^3x+ {4\choose{4}}\left( \frac{2}{x} \right)^4 \\
&=x^4+4\left( \frac{2}{x} \right)x^3+6\left( \frac{2}{x} \right)^2x^2+4\left( \frac{2}{x} \right)^3x+\left( \frac{2}{x} \right)^4 \\
&=x^4+8x^2+24+\frac{32}{x^2}+\frac{16}{x^4}
\end{align}$$
5. Show that $(2x+1)^4-16x^4-6\equiv 32x^{3}+24x^{2}+8x-5$:
$$\begin{align}
(2x+1)^4-16x^4-6&= (2x)^4+4(2x)^3(1)+6(2x)^2(1)+4(2x)(1)+1^4 -16x^4 -6\\
&=16x^4+32x^3+24x^{2}+8x+1-16x^4 -6\\
&=32x^{3}+24x^{2}+8x-5
\end{align}$$
Hence find the quotient and remainder when this is divided by $x^{2}+x-2$:
$$\begin{align}
32x^3+24x^{2}+8x-5&=32x^3+32x^{2}-64x-8x^{2}-8x+16+(-144x+35) \\
&=(32x-8)(x^{2}+x-2)+(-144x+35) \\
\end{align}$$
6. i) Find the first 4 terms of $(1+4x)^7$:
$$\begin{align}
(1+4x)^7&= {7\choose{0}}(1)^7 + {7\choose{1}}(1)^6(4x)+{7\choose{2}}(1)^5(4x)^{2}+{7\choose{4}}(1)^4(4x)^3 \\
&=1\times 1^7 + 7\times 1^6\times 4x+21\times 1^5\times 16x^{2}+35\times 1^4 \times 64x^3 \\
&=1+28x+336x^{2}+2240x^3
\end{align}$$
ii) In the expansion of $(3+ax)(1+4x)^7$, the coefficient of $x^2$ is 1001. Find $a$;
$$\begin{align}
(1+4x)^7 &= \dots+28x+336x^{2} \\
3(336x^{2} )+ ax(28x)&=1001x^{2} \\
1008+28a&=1001 \\
28a&=-7 \\
4a&=-1 \\
a&=-\frac{1}{4}
\end{align}$$
7. $p(x)=(x+2)^{4}-13x+a$, $p|_{x-1}$. Find $a$
$$\begin{align}
p|_{x-1}\implies p(1)&=0 \\
\implies (1+2)^4-13(1)+a&=0 \\
3^4-13+a&=0 \\
a&=-68
\end{align}$$
ii) Verify that the remainder of $p(x)$ divided by $x+1$ is $-54$ 
$$\begin{align}
p\left( -\frac{b}{a} \right)&=r \\
p(-1)&=(-1+2)^4-13(-1)-68 \\
&=14-68 \\
&=-54
\end{align}$$
iii) Find the quotient when $p$ is divided by $(x-1)(x+4)$
$$\begin{align}
(x+2)^4-13x-68&= {4\choose{0}}x^4+ {4\choose{1}}x^3(2)+ {4\choose{2}}x^2(2)^2+ {4\choose{3}}x(2)^3+ \\
& {4\choose{4}}(2)^4 -13x -68 \\
&= x^4 + 8x^3 + 24x^2+32x+16-13x-68 \\
&=x^4+8x^3+24x^2+19x-52 \\
 \\
(x-1)(x+4)&=x^{2}+3x-4 \\
 \\
5x^3+28x^{2}+19x-52&=x^4+8x^3+24x^2+19x-52 - x^{2}(x^{2}+3x-4) \\
13x^{2}+39x-4&=5x^3+28x^{2}+19x-52-5x(x^{2}+3x-4) \\
0&=13x^{2}+39x-4-13(x^{2}+3x-4)\\ \\
 \\
\therefore \frac{p(x)}{x^{2}+3x-4}&=x^{2}+5x+13
\end{align}$$
8. Solve $x^3+4x^{2}-9x-6=0$
$$\begin{align}
f(x) &\triangleq x^3+4x^{2}-9x-6 \\
f(2)&= 2^3+4(2)^2-9(2)-6 \\
&=8+16-18-6 \\
&=24-24 \\
&=0 \\
\therefore f|_{x-2} \\
6x^{2}-9x-6&=x^3+4x^{2}-9x-6-x^2(x-2) \\
3x-6&=6x^{2}-9x-6-6x(x-2) \\
0&=3x-6 - 3(x-2) \\
\therefore \frac{f(x)}{x-2}&=x^{2}+6x+3 \\
&\text{We continue by finding the roots of this quadratic} \\
x^{2}+6x+3&=0 \\
x&=\frac{-6\pm \sqrt{ 6^{2}-4(3)(1) }}{2(1)} \\
&=\frac{-6\pm \sqrt{ 24 }}{2} \\
&=-3\pm \sqrt{ 6 } \\
\therefore x\in \{ -3-\sqrt{ 6 },-3+\sqrt{ 6 },2 \}
\end{align}$$
