---
date: 2026-10-02
---

The modulus function is generally defined through two different paths:
$$
	|x|=\sqrt{ x^{2} }
$$
Or,
$$
	|x|=\begin{cases}
	x&x\geq 0 \\
	-x &x<0
	\end{cases}
$$
When solving equations we can use either definition:
$$\begin{align}
|x+3|=2 \implies (x+3)^{2}&=2^2 \\
\implies x+3 &= \pm 2 \\
x&=-3\pm 2 \\
&\in \{ 1,5 \}
\end{align}$$
$$\begin{align}
|2x+3| = |5x-1| \implies (2x+3)^{2}&=(5x-1)^{2} \\
(2x+3)&=\pm(5x-1) \\
2x&=-3\pm (5x - 1) \\
\text{Case 1}: \\
-7x&=2 \\
x&=-\frac{2}{7} \\
\text{Case 2}: \\
3x&=4 \\
x&=\frac{4}{3} \\
\implies x\in \left\{  -\frac{2}{7}, \frac{4}{3} \right\}
\end{align}$$
Using the piecewise definition to solve is sometimes more appealing for more complex problems;
$$\begin{align}
|2x+5|+1 &= |3x-1| \\
\begin{cases}
2x+5 & x\geq -\frac{5}{2} \\
-2x-5 & x< -\frac{5}{2}
\end{cases} + 1 &= \begin{cases}
3x-1 & x\geq \frac{1}{3} \\
-3x+1 & x < \frac{1}{3}
\end{cases} \\
\text{Take x} \geq \frac{1}{3}: \\
2x+5+1&=3x-1 \\
2x+7&=3x \\
7&=x \\
\text{Take } -\frac{5}{2}\leq x< \frac{1}{3}: \\
2x+5+1&=-3x+1 \\
5x&=-5 \\
x&=-1 \\
\text{Take} \ x<-\frac{5}{2}: \\
-2x-5+1&=-3x+1 \\
2x+5-1&=3x-1 \\
5&=x \\
\text{Not in our range, so not a valid solution} \\
\therefore x &\in \{ 7,-1  \}
\end{align}$$
N.B. the solution that was not in our range can be seen graphically - if you continued the lines of $-2x-5$ and $-3x+1$ down beyond the vertex of each modulus function, they would converge at $(5,-14)$.

For inequalities, however, it's generally more appealing to use the former definition;
$$\begin{align}
|2x+5|\leq |x+7| \implies (2x+5)^{2}&\leq(x+7)^{2} \\
(2x+5)^{2}-(x+7)^{2}&\leq0 \\
(x-2)(3x+12)&\leq0 \\
\text{Find critical values}: \\
x&\in \{ -4,2\} \\
\text{Test each interval:}\text{}\\
(x-2)(3x+12)\Big|_{x=-5}=18 \\
(x-2)(3x+12)\Big|_{x=0}=-24 \\
(x-2)(3x+12)\Big|_{x=3}=21 \\
\therefore
-4\leq x\leq 2
\end{align}$$

### Properties
##### Mapping
$$
	\forall x\in \mathbb{R}:x\neq 0, \exists y: y\neq x, |x|=|y|
$$
For all $\mathbb{R}$ except $0$, there exists another different $\mathbb{R}$ that has the same modulus value.
##### Differentiation
$$\begin{align}
\frac{d}{dx}|x|&=\begin{cases}
1 & x>0 \\
-1 & x<0
\end{cases} \\
&=\text{sgn } x \text{ when }x\neq 0
\end{align}$$
The modulus function is not differentiable at $x=0$ as the left and right hand limits are not equal (LHL; $\lim_{ x \to 0 }\begin{cases}1&x>0\\-1&x<0\end{cases}=-1$, RHL; 1)
##### Integration
$$\begin{align}
\int_{0}^x |\tau| d\tau &= \frac{x|x|}{2}+C
\end{align}$$
