1. $D\triangleq(-2,0),E\triangleq(0,-1),F\triangleq (2,3)$, calculate $m_{DE}$
$$\begin{align}
m_{DE}&=\frac{E_{y}-D_{y}}{E_{x}-D_{x}} \\
&=\frac{-1-0}{0--2} \\
&=\frac{-1}{2} \\
&=-0.5
\end{align}$$
By calculating $m_{EF}$, show that $\triangle DEF$ is right angled:
$$\begin{align}
m_{EF}&=\frac{F_{y}-E_{y}}{F_{x}-E_{x}} \\
&=\frac{3--1}{2-0} \\
&=\frac{4}{2} \\
&=2
 \\
\implies m_{DE}&=-\frac{1}{m_{EF}}  \\
\implies DE &\perp EF \\
\implies \angle DEF&=90^\circ
\end{align}$$
**(note: $\perp$ may not be accepted at A level standard)**
**(note: $m_{DE}\times m_{EF}=-1$ may be more obvious to readers)**
Find the equation of the line through $F$ and parallel to $DE$ in form $ax+by+c=0$, where $a,b,c\in \mathbb{Z}$
$$\begin{align} \\
\text{let this line be }FG \\
(y-y_1)&=m_{FG}(x-x_{1}) \\
FG||DE \implies m_{FG}&=m_{DE} \\
F\in FG \implies x_1 &= F_{x},y_{1}=F_{y} \\
\therefore (y-3)&=-0.5(x-2) \\
\implies 0.5(x-2)+y-3&=0 \\
0.5x-1+y-3&=0 \\
x+2y-8&=0
\end{align}$$
**(note: $\parallel$ may not be accepted at A level standard)**
**(note: "point $\in$ line" may not be accepted at A level standard)**
2. The points $A, B, C$ have coordinates $(1,2), (3,4), (9, -2)$ respectively. Calculate $m_{AB}$
$$\begin{align}
m_{AB}&=\frac{B_{y}-A_{y}}{B_{x}-A_{x}} \\
&=\frac{4-2}{3-1} \\
&=1
\end{align}$$
Show that $BC\perp AB$:
$$\begin{align}
m_{BC}&=\frac{-2-4}{9-3} \\
&=-1 \\
m_{BC}&=-\frac{1}{m_{AB}} \\
\implies BC &\perp AB
\end{align}$$
**(note: $\perp$ may not be accepted at A level standard)**
Find the equation for the line passing through $B$ and $C$:
$$\begin{align}
(y-4)&=m(x-3) \\
-2-4&=m(9-3) \\
-6&=6m \\
m&=-1 \\
\implies (y-4)&=-1(x-3) \\
\text{or in form}\ 0&=ax+by+c \\
(y-4)+(x-3)&=0 \\
x+y-7&=0
\end{align}$$
The length of $AB$ is of form $p\sqrt{ 2 }$. find $p$
$$\begin{align}
|AB| &= \sqrt{ (B_{y}-A_{y})^{2}+(B_{x}-A_{x})^{2} } \\
&= \sqrt{ (4-2)^{2}+(3-1)^{2} } \\
&= \sqrt{ 8 } \\
&=2\sqrt{ 2 } \\
\implies p&=2
\end{align}$$
Find area of $\triangle ABC$: (could we use Heron's formula in exams?)
$$\begin{align}
\boxed{A=\sqrt{ s(s-a)(s-b)(s-c) }}& \ \ \ \ \ \ \ \text{Heron's formula} \\
s&\triangleq  \frac{a+b+c}{2} \\
 \\
a = |AB|=4\sqrt{ 2 }, b= |BC|, c&=|AC| \\
|BC| &= \sqrt{ (-2-4)^{2}+(9-3)^{2} } \\
&=\sqrt{ 36+36 } \\
&=\sqrt{ 72 } \\
&=6\sqrt{ 2 } \\
|AC| &= \sqrt{ (-2-2)^{2}+(9-1)^{2} } \\
&=\sqrt{ 16+64 } \\
&=\sqrt{ 80 } \\
&=4\sqrt{ 5 } \\
\implies s &= \frac{4\sqrt{ 2 }+6\sqrt{ 2 }+4\sqrt{ 5 }}{2} \\
&= 5\sqrt{ 2 }+2\sqrt{ 5 } \\
\implies A&=\sqrt{ (5\sqrt{ 2 }+2\sqrt{ 5 })(\sqrt{ 2 }+2\sqrt{ 5 })(-\sqrt{ 2 }+2\sqrt{ 5 })(5\sqrt{ 2 }-2\sqrt{ 5 }) } \\
&=\sqrt{ (5\sqrt{ 2 }+2\sqrt{ 5 })(5\sqrt{ 2 }-2\sqrt{ 5 })(2\sqrt{ 5 }+\sqrt{ 2 })(2\sqrt{ 5 }-\sqrt{ 2 }) } \\
&=\sqrt{ (50-20)(20-2) } \\
&=\sqrt{ 540 } \\
&=6\sqrt{ 15 }

\end{align}$$
**(note: do NOT use heron's formula, prefer $A=\frac{1}{2}AB\times  BC$ - this is a right angled triangle!!!!!)**

3. Find the center and radius of $x^{2}+y^{2}-2x+6y-15=0$
$$\begin{align}
x^{2}+y^{2}-2x+6y-15&=(x-1)^2 - 1 + (y+3)^2 - 9-15 \\
\implies (x-1)^{2}+(y+3)^{2}&=25 \\
\therefore r&=\sqrt{ 25 }=5 \\
\odot&=(1,-3)
\end{align}$$
The line $y=x+1$ intersects the circle at $A$ and $B$. Find the length of $AB$.
$$\begin{align}
\begin{cases}
x+1&=y \\
(x-1)^{2}+(y+3)^{2}&=25
\end{cases} \\
(x-1)^{2}+(x+1+3)^{2}&=25 \\
(x^{2}-2x+1)+(x^{2}+8x+16)&=25 \\
2x^{2}+6x+17&=25 \\
x^{2}+3x-4&=0 \\
(x-1)(x+4)&=0 \\
x&\in \{ -4, 1 \} \\
\therefore y &\in \{ -3, 2 \} \\
&\in \{ -2, 3 \} \\
 \\
\therefore |AB| &= \sqrt{ (2-1)^{2}+(-3--4)^{2} } \\
&= \sqrt{ 1^{2}+1^{2} } \\
&=\sqrt{ 2 }
\end{align}$$
**(note: careful your pythagoras!!! $|AB|=\sqrt{ (1--4)^{2}+(2--3)^{2} }$)**
**(note: careful with substituting for the second variable too!!)**
4. $ABCD$ is a rectangle, where $A,B,C = (3,4), (1,k), (4,-3)$ respectively. Find the midpoint of $AC$
$$\begin{align}
M_{AB}&=\left( \frac{A_{x}+C_{x}}{2}, \frac{A_{y}+C_{y}}{2}\right) \\
&=\left( \frac{7}{2}, \frac{1}{2} \right) \\
\end{align}$$
Find $m_{AB}$ in terms of $k$:
$$\begin{align}
(y-y_{1})&=m(x-x_{1}) \\
(y-4)&=m(x-3) \\
\implies k-4&=m(1-3) \\
k-4&=-2m \\
m&=2-\frac{k}{2}
\end{align}$$
Determine the possible values of $k$:
$$\begin{align}
\text{For }ABCD& \text{ to be a rectangle, } \\
AB&\perp BC \\
\implies m_{BC}&=- \frac{1}{m_{AB}} \\
m_{BC}&=-\frac{1}{2-\frac{k}{2}} \\
m_{BC}&=\frac{k--3}{1-4} \\
&=\frac{k+3}{-3} \\
&=-1-\frac{k}{3} \\
\implies -\frac{1}{2-\frac{k}{2}}&=-1-\frac{k}{3} \\
-1&=\left( -1-\frac{k}{3} \right)\left( 2-\frac{k}{2} \right) \\
&=-2-\frac{2k}{3}+\frac{k}{2}+\frac{k^{2}}{6} \\
0&=-\frac{6}{6}-\frac{4k}{6}+\frac{3k}{6}+\frac{k^{2}}{6} \\
&=-6-k+k^{2} \\
&=(k-3)(k+2) \\
k&\in \{ -2,3 \}
\end{align}$$
**(note: $\perp$ may not be accepted at A level standard)**
Determine the area of the rectangle for the case in which $k>0$:
$$\begin{align}
k&=3 \\
\implies B&=(1,3), A=(3,4), C=(4,-3) \\
|AB| &= \sqrt{ (4-3)^{2}+(3-1)^{2} } \\
&=\sqrt{ 5 } \\
|BC| &= \sqrt{ (-3-3)^{2}+(4-1)^{2} } \\
&=\sqrt{ 45 } \\
&=3\sqrt{ 5 } \\
\implies A &= 3\sqrt{ 5 }\sqrt{ 5 } \\
&=15
\end{align}$$
5. Determine the points of intersection of two circles:
$$\begin{align}
C_{1}: (x-2)^{2}+(y-3)^{2}&=25 \\
C_{2}: (x-3)^{2}+(y-2)^{2}&=13
\end{align}$$

$$\begin{align}
\begin{cases}
(x-2)^{2}+(y-3)^{2}&=25 \\
(x-3)^{2}+(y-2)^{2}&=13
\end{cases} \\
\begin{cases}
x^{2}+y^{2}-4x-6y-12&=0 \\
x^{2}+y^{2}-6x-4y&=0
\end{cases} \\
(-4x-6y-12)-(-6x-4y)&=0 \\
2x-2y-12&=0 \\
x&=y+6 \\
\implies (y+6)^{2}+y^{2}-4(y+6)-6y-12&=0 \\
y^{2}+12y+36+y^{2}-4y-24-6y-12&=0 \\
2y^{2}+8y+12-6y-12&=0 \\
2y^{2}+2y&=0 \\
y&=\frac{-2\pm \sqrt{ 2^2-4(2)(0) }}{2(2)} \\
&=\frac{-2\pm 2}{4} \\
&\in \{ -1, 0 \} \\
\implies x&\in \{ 5, 6 \} \\
(5,-1),(6,0)
\end{align}$$
6. $A,B=(4,-2),(10,6)$ respectively. $C$ is the midpoint of $AB$. Find $C$
$$\begin{align}
M_{AB}&=\left( \frac{A_{x}+B_{x}}{2}, \frac{A_{y}+B_{y}}{2} \right) \\
&=(7,2)
\end{align}$$
Find $|AC|$
$$\begin{align}
|AC| &= \sqrt{ (C_y-A_{y})^{2}+(C_{x}-A_{x})^{2} } \\
&=\sqrt{ 16+9 } \\
&=\sqrt{ 25 } \\
&=5
\end{align}$$
Find the circle that has $AC$ as its diameter
$$\begin{align}
(x-a)^{2}+(y-b)^{2}&=\left( \frac{5}{2} \right)^{2} \\
(a,b) \text{ is the point D such that} \ D&= M_{AC} \\
M_{AC}&=\left( \frac{A_{x}+C_{x}}{2}, \frac{A_{y}+C_{y}}{2} \right) \\
&=\left( \frac{11}{2},0 \right) \\
\left( x-\frac{11}{2} \right)^{2}+(y)^{2}=\frac{25}{4}
\end{align}$$
**(note: read/copy the question carefully!!)**
Find the tangent to this circle at point $A$:
$$\begin{align}
\text{tangent}\perp \text{radius} \\
\therefore m_{\tan}&=-\frac{1}{m_{\text{rad}}} \\
m_{\text{rad}}&=\frac{0-2}{\frac{11}{2}-4} \\
&=\frac{4}{3} \\
\therefore m_{\text{tan}}&=-\frac{3}{4} \\
 \\
\therefore (y--2)&=-\frac{3}{4}(x-4) \\
y+2&=-\frac{3}{4}(x-4) \\
\frac{3}{4}x-3+y+2&=0 \\
\frac{3}{4}x+y&=1 \\
3x+4y&=4
\end{align}$$

**(note: $\perp$ may not be accepted at A level standard)**
