### Defining exponentiation
It's fairly trivial to understand that multiplication arises from repeated addition:
$$m\times n=\underbrace{ m+m+\dots+m }_{ n \text{ times} }$$
This yields the _distributive law of multiplication over addition_.
$$a\times(b+c)=a\times b+a\times c$$

With $a\in \mathbb{R}, b\in \mathbb{N}$, it is easy to define exponentiation $a^b$ as
$$a^b=\underbrace{ a\times a\times\dots\times a }_{ b \text{ times} }$$
This yields the _distributive law of exponentiation over multiplication_.
$$(ab)^c=a^c\times  b^c$$
and some other useful properties:











$$
\begin{aligned}
a^b\times a^c&=\underbrace{ a\times a\times\dots\times a }_{ b+c \text{ times} } \\
&= a^{b+c}
\end{aligned}
$$





















$$
\begin{aligned}
(a^b)^c&=\underbrace{ \underbrace{ a\times a\times \dots \times a }_{ b \text{ times} } \times \underbrace{ a\times a\times \dots \times a }_{ b \text{ times} } \times \underbrace{ a\times a\times \dots \times a }_{ b \text{ times} } }_{ c \text{ times} } \\

&= a^{bc}
\end{aligned}
$$





















$$
\begin{aligned}
\frac{a^b}{a^c}&=\underbrace{ a\times a\times \dots \times a }_{ b \text{ times} } \div\underbrace{  a\times a \times \dots \times a }_{ c \text{ times} } \\
&=\underbrace{ a\times a \times \dots \times a }_{ b-c \text{ times} } \\
&=a^{b-c}
\end{aligned}
$$











Using these properties, we can extend our definition to rational exponents:
$$a^{\frac{b}{c}}=\sqrt[c]{a^b}$$


### Surd form
We have some standard techniques for surds:
- Simplification - $\sqrt{ 40 }=\sqrt{ 4\times 10 }=\sqrt{ 4 }\times \sqrt{ 10 }=2\sqrt{ 10 }$
- Rationalising the denominator -
	- $\frac{1}{\sqrt{ a }}=\frac{\sqrt{ a }}{\sqrt{ a }}\times \frac{1}{\sqrt{ a }}=\frac{\sqrt{ a }}{a}$ 
	- $\frac{1}{\sqrt{ a }+\sqrt{ b }}=\frac{1}{\sqrt{ a }+\sqrt{ b }}\times \frac{\sqrt{ a } -\sqrt{ b }}{\sqrt{ a } -\sqrt{ b }}=\frac{\sqrt{ a }-\sqrt{ b }}{a-b}$


e.g.
Simplify $(\sqrt{ 8 }-1)(\sqrt{ 2 }+3)$:











$$
\begin{aligned}
(\sqrt{ 8 }-1)(\sqrt{ 2 }+3)&=\sqrt{ 8 }\sqrt{ 2 }-\sqrt{ 2 }+3\sqrt{ 8 }-3 \\

&=\sqrt{ 16 }-\sqrt{ 2 }+3\sqrt{ 4 }\sqrt{ 2 }-3 \\
&=4-\sqrt{ 2 }+6\sqrt{ 2 }-3 \\
&=1+5\sqrt{ 2 }
\end{aligned}
$$











Write $\sqrt{ 75 }-\sqrt{ 27 }$ in the form $k\sqrt{ m }$, where $k,m\in \mathbb{Z}$\:











$$
\begin{aligned}
\sqrt{ 75 }-\sqrt{ 27 }&=\sqrt{ 5 }\sqrt{ 3 }\sqrt{ 5 }-\sqrt{ 3 }\sqrt{ 9 } \\
&=5\sqrt{ 3 }-3\sqrt{ 3 } \\
&=2\sqrt{ 3 }
\end{aligned}
$$











Express $\frac{7+\sqrt{ 5 }}{3+\sqrt{ 5 }}$ in the form $a+b\sqrt{ 5 }$:











$$
\begin{aligned}
\frac{7+\sqrt{ 5 }}{3+\sqrt{ 5 }}&=\frac{7+\sqrt{ 5 }}{3+\sqrt{ 5 }}\times \frac{3-\sqrt{ 5 }}{3-\sqrt{ 5 }} \\
&=\frac{(7+\sqrt{ 5 })(3-\sqrt{ 5 })}{9 -5} \\
&=\frac{21+3\sqrt{ 5 }-7\sqrt{ 5 }-5}{4} \\
&=\frac{16-4\sqrt{ 5 }}{4} \\
&=4-\sqrt{ 5 }
\end{aligned}
$$











Simplify $125^{-2/3}$:











$$
\begin{aligned}
125^{-2/3}&=\frac{1}{\sqrt[3]{125}^2} \\
&=5^{-2} \\
&=\frac{1}{25}
\end{aligned}
$$











Simplify $\frac{2x^{2}-x^{3/2}}{\sqrt{ x }}$ into the form $2x^p-x^q$:











$$
\begin{aligned}
\frac{2x^{2}}{\sqrt{ x }}-\frac{\sqrt{ x }^3}{\sqrt{ x }} &=\frac{2x^{2}}{\sqrt{ x }}-\sqrt{ x }^{2} \\
&=\frac{2x^{2}}{x^{0.5}}-x \\
&=2x^{\frac{3}{2}}-x
\end{aligned}
$$











Solve $2^{1-x}=4^x$:











$$
\begin{aligned}
2^{1-x}&=2^{2x} \\
1-x&=2x \\
1&=3x \\
x&=\frac{1}{3}
\end{aligned}
$$











Simplify $y^9\times y^{-3}\times (3y)^-2$:











$$
\begin{aligned}
y^9\times y^{-3}\times(3y)^{-2}&=\frac{y^6}{9y^{2}} \\
&=\frac{y^4}{9}
\end{aligned}
$$











