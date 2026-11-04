---
date: 2026-10-06
---
Logarithms are defined as the inverse function to exponentials:
$$
y=a^x\iff \log _{a}y=x
$$
$a^x$ has domain $\mathbb{R}$ and range $\mathbb{R}_{+}$, so $\log_{a} x$ has domain $\mathbb{R}_{+}$ and range $\mathbb{R}$. 

Graphically, $y=\log_{a}x$ is the reflection of $y=a^x$ across $y=x$.
In the case of $a>1$
```desmos-graph
left=-5;right=10;
top=10;bottom=-5;
width=300;height=300;
---
a=2
y=a^x | #57b4a0
y=\log_a(x) | #64a9ca
y=x | #fd96a9
```
In the case of $0<a<1$
```desmos-graph
left=-5;right=10;
top=10;bottom=-5;
height=300; width=300;
---
a=0.5
y=a^x | #57b4a0
y=\log_a(x) | #64a9ca
y=x | #fd96a9
(y-5)=-(x-\log_a(5)) | #aaa5a5 | dashed
(\log_a(5), 5) | #fd96a9
(5, \log_a(5)) | #fd96a9

```

The most common bases are $2$, $10$ and $e$. There are specific notations for base $10$ and base $e$ - $\lg x = \log_{10}(x)$, $\ln x = \log_{e}(x)$ (known as the natural logarithm) respectively.
### Examples
$$\begin{align}
\log_{10} 100\ 000&=5 \text{ since }10^5=100\ 000 \\
\log_{a} 1 &= 0 \text{ since }a^0=1\ \ \forall a\neq 0 \\
\log_{3} \frac{1}{9}&=-2 \text{ since } 3^{-2} = \frac{1}{9}  \\
\log_{4} 2 &= \frac{1}{2} \text{ since }4^{\frac{1}{2}}=2\\
\log _{0.1} 1000 &= -3 \text{ since }0.1^{-3}=1000 \\ \\

\log_{a}(a^x)&= x \\
a^{\log_{a}{x}}&=x
\end{align}$$


# Laws of logarithms
### 1. $\log x + \log y = \log xy$
##### Proof:
$$\begin{align}
\log_{a} x &\triangleq k \\
\log_{a} y &\triangleq m \\
\implies a^k &= x \\
\implies a^m &= y \\
\therefore xy = a^ka^m&=a^{k+m} \\
\implies \log_{a} xy &=k+m= \log_{a} x + \log_{a} y
\end{align}$$

### 2. $\forall n, n \log x= \log x^n$
##### Proof:
$$\begin{align}
\log_{a} x &\triangleq k \\
\implies a^k &=x \\
(a^k)^n&=x^n \\
a^{kn}&=x^n \\
\implies \log_{a} a^{kn} &=\log_{a} x^n  \\
kn&=\log_{a} x^n=n\log_{a} x
\end{align}$$



### 3. $\log x - \log y=\log\left( \frac{x}{y} \right)$
##### Proof:
This is a collary to [[261006 Logarithms#1. $ log x + log y = log xy$|Law 1]]:
$$\begin{align}
\log x-\log y&=\log x+ (-\log y) \\
&=\log x+ \log \frac{1}{y} \\
&=\log \left( x\times \frac{1}{y} \right) \\
&=\log \frac{x}{y}
\end{align}$$
### 4. $\log_{a}b=\frac{\log_{c }{b}}{\log_{c}{a}}$
##### Proof:
$$\begin{align}
k&\triangleq\log_{a} b \\
b &\triangleq a^k \\
\implies \log_{c}a^k&=\log_{c}b \\
 \implies k\log_{c}a&=\log_{c}b &\boxed{n\log x=\log x^n}\\
k=\log_{a}b&=\frac{\log_{c}{b}}{\log_{c}{a}}
\end{align}$$
# Equations with logarithms
We can use logs to solve equations involving exponentiation

e.g. $\log_{6}(x+5)+\log_{6} x=2$
$$\begin{align}
\log_{6}(x+5)+\log_{6}(x) &= 2 \\
\log_{6}(x(x+5))&=2  &\boxed{\log x + \log y = \log xy} \\
 \log_{6}(x^{2}+5x)&=2 \\
 x^{2}+5x&=6^2 \\
 x^{2}+5x-36&=0 \\
 (x+9)(x-4)&=0 \\
 x&\in \{ -9, 4 \} \\
 \text{However, we know that }&\log x \text{ is not defined for } x<0 \\
 \therefore x&=4
\end{align}$$

e.g. $2\log_{3}(x-1)-\log_{3}(x+2)=1$
$$\begin{align}
2\log_{3}(x-1)-\log_{3}(x+2)&=1 \\
\log_{3}((x-1)^{2})-\log_{3}(x+2)&=1 & \boxed{n\log x = \log x^n}\\
\log_{3}\left( \frac{(x-1)^{2}}{x+2} \right)&=1 & \boxed{\log x - \log y = \log \frac{x}{y}} \\
\frac{(x-1)^{2}}{x+2}&=3^1 \\
\frac{x^{2}-2x+1}{x+2}&=3 \\
x^{2}-2x+1&=3x+6 \\
x^{2}-5x-5&=0 \\
\frac{-(-5)\pm \sqrt{ (-5)^{2}-4(1)(-5) }}{2(1)}&=x \\
\frac{5\pm \sqrt{ 45 }}{2}&=x \\
\frac{5\pm 3\sqrt{ 5 }}{2}&=x \\
\frac{5-3\sqrt{ 5 }}{2}<0\implies x&\neq  \frac{5-3\sqrt{ 5 }}{2} \\
\therefore x&= \frac{5+3\sqrt{ 5 }}{2}
\end{align}$$
e.g. $3^{4x}=5^{2x+1}$
$$\begin{align}
(3^2)^{2x}&=5\times 5^{2x} \\
\frac{9^{2x}}{5^{2x}}&=5 \\
\left( \frac{9}{5} \right)^{2x}&=5 \\
2x&=\log_{\frac{9}{5}}(5) \\
x&=\frac{1}{2} \log_{1.8} (5)
\end{align}$$
or, alternatively,
$$\begin{align}
4x&=\log_{3}(5^{2x+1}) \\
&=\log_{3}(5)(2x+1)& \boxed{n\log x = \log x^n} \\
4x-(2\log_{3} 5)x&=\log_{3}(5) \\
x(4-2\log_{3} 5)&=\log_{3} (5) \\
x &= \frac{\log_{3}(5)}{4-2\log_{3} (5)}
\end{align}$$
### Applications
##### Data handling
Consider a set of bivariate data; we wish to find patterns and make estimates, which is trivial on linear sets. But what if we suspect our dataset is not linear?

We can use logarithms to "make" our data linear;

1. $y=ka^x$
$$\begin{align}
\log y&=\log ka^x \\
\log y&=\log k+\log a^x \\
\log y&=\log k+x\log a \\
Y&=K+Ax
\end{align}$$
2. $y=kx^a$
$$\begin{align}
\log y&=\log kx^a \\
\log y&=\log k+\log x^a \\
\log y&=\log k + a\log x \\
Y&=K+aX
\end{align}$$
##### Exponential growth and decay
Many real-life phenomena are modelled by exponentiation, such as radioactivity, population growth and heat transfer. Note that:
$$\begin{align}
y&\triangleq y_{0}A^t \\
y&=y_{0}e^{\ln{A^t}}&\boxed{x=a^{\log_{a}{x}}} \\
&=y_{0}e^{t\ln{A}} &\boxed{\log a^x=x\log a}\\
&=y_{0}e^{kt}
\end{align}$$
This model is alot more common; if $k>0$, we have exponential growth, if $k<0$, we have exponential decay. $y_{0}$ is an initial value of $y$ (i.e. when $t=0$).

(N.B. we use this model as $\frac{d}{dx}e^x=e^x$, making it alot easier to differentiate and manipulate)

The rate of change of $y$ with respect to $t$;
$$\begin{align}
\frac{dy}{dt}=ky_{0}e^{kt}=ky
\end{align}$$
##### Examples
e.g. A heated metal ball immersed in a liquid cools. Its temperature is $T_{1}^\circ C$, $t$ minutes after initial conditions, is given by
$$
	T_{1}=400e^{-0.05t}+25 \ \ \ \ \ \ \ \ t\geq 0
$$
Find the temperature of the ball as it enters the liquid
$$\begin{align}
T_{1}\Big \vert _{t=0}&=400e^{-0.05(0)}+25 \\
&=400+25 \\
&=425^\circ C
\end{align}$$
Find how long it took for the ball to reach $325^\circ C$
$$\begin{align}
325&= 400e^{-0.05t}+25 \\
0.75&=e^{-0.05t} \\
-0.05t&=\ln 0.75 \\
t&=-20 \ln 0.75 \\
&=5.75 \text{ mins}
\end{align}$$
Find the rate of cooling at $t=50$
$$\begin{align}
T_{1}'=\frac{d}{dt}(400e^{-0.05t}+25 )\Big\vert_{t=50}&=-0.05(400e^{-0.05(50)}) \\
&\approx-1.64 ^\circ C
\end{align}$$
Explain why $T_{1}$ can never equal $20$
$$\forall x\in \{ n\in \mathbb{R}\},e^x>0\\
\forall y\in \{ n\in \mathbb{R}:n>0 \},y+25>25\\
\therefore \forall x\in \{ n \in \mathbb{R}: n>0 \},e^x+25>25\\
25>20\implies T_{1}\neq 20$$

Given another ball cooling at $T_{2}=15e^{-kt}+25$, find the time at which they are equal

$$\begin{align}
15e^{-kt}&=400e^{-0.05t} \\
\frac{e^{-kt}}{e^{-0.05t}}&=\frac{400}{15} \\
e^{(k+0.05)t}&=\frac{80}{3} \\
t&=\frac{\ln\left( \frac{80}{3} \right)}{k+0.05}
\end{align}$$
