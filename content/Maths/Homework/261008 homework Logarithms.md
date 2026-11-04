1. Simplify $\log_{3}(4x+7)-\log_{3}x$:
$$\begin{align}
\log_{3}(4x+7)-\log_{3}(x)&=\log_{3}\left( \frac{4x+7}{x} \right) & \boxed{\log x -\log y=\log \frac{x}{n}} \\
\end{align}$$
Hence solve $\log_{3}(4x+7)-\log_{3}(x)=2$
$$\begin{align}
\log_{3}\left( \frac{4x+7}{x} \right)&=2 \\
\frac{4x+7}{x}&=3^2 \\
4x+7&=9x \\
7&=5x \\
\frac{7}{5}&=x
\end{align}$$
Given that $y^{2}=27$, find $\log_{3}(y)$
$$\begin{align}
y^{2}&=27 \\
y&=\pm \sqrt{ 27 } & \log_{3}(-\sqrt{ 27 })\text{ cannot exist}\text{}\\ 
\log_{3}(\sqrt{ 27 })&= \log_{3}((3^3)^{0.5}) \\
&=\log_{3}(3^{1.5}) \\
&=1.5
\end{align}$$

2. Use logarithms to solve $7^x=2^{x+1}$
$$\begin{align}
7^x&=2^{x+1} \\
\log_{2}(7^x)&=\log_{2}(2^{x+1}) \\
x\log_{2}(7)&=x+1 \\
0&=x-x\log_{2}(7)+1 \\
&=x(1-\log_{2}(7))+1 \\
&=x+\frac{1}{1-\log_{2}(7)} \\
x&=-\frac{1}{1-\log_{2}(7)}\approx 0.553 \\

\end{align}$$
3. Evaluate $\log_{5} 15+\log_{5} 20- \log_{5} 12$
$$\begin{align}
\log_{5} 15 + \log_{5} 20 - \log_{5} 12 &=\log_{5} (15\times 20) - \log_{5} 12 \\
&=\log_{5} \left( \frac{300}{12} \right) \\
&=\log_{5} (25) \\
&=2
\end{align}$$
Given that $y=3\times 10^{2x}$, show that $x$ is of form $x=a\log_{10}by$:
$$\begin{align}
y&=3\times 10^{2x} \\
\log_{10} y &= \log_{10} (3\times 10^{2x}) \\
\log_{10}y&= \log_{10} (3) + \log_{10} (10^{2x}) \\
\log_{10} y  & = \log_{10}(3)+2x\log_{10}(10) \\
\log_{10}y&=\log_{10}(3)+2x \\
2x&=\log_{10}y - \log_{10} 3 \\
x&=\frac{\log_{10} y}{2}-\log_{10} 3 \\
&=\frac{1}{2} \log_{10}y - \frac{1}{2}\log_{10} 3^2 \\
&=\frac{1}{2} \log_{10} (\frac{1}{9}y)
\end{align}$$
4. Given that $\ln x=p+2, \ln y=3p$, find $\ln(xy)$
$$\begin{align}
\ln(xy)&=\ln(x)+\ln(y) \\
&=p+2 + 3p \\
&= 4p+2
\end{align}$$
Find $\ln(x^3)$
$$\begin{align}
\ln(x^3)&=3\ln x \\
&=3(p+2) \\
&=3p+6
\end{align}$$
Find $\ln \frac{y}{e}$
$$\begin{align}
\ln \frac{y}{e}&= \ln y - \ln e \\
&=3p - 1
\end{align}$$
Express $y$ in terms of $x$ and $e$
$$\begin{align}
\ln y&=3p \\
\ln x &= p+2 \\
\implies \ln y &=3\ln (x)  - 6 \\
\ln y &= 3\ln(x) - 6\ln e \\
\ln y &= \ln(x^3) - \ln e^6 \\
\ln y &= \ln\left( \frac{x^3}{e^6} \right) \\
y&=\frac{x^3}{e^6}

\end{align}$$
5. Express each of the following in terms of $\log_{10} x$ and $\log 10 y$
$\log_{10} (\frac{x}{y})$
$$\begin{align}
\log_{10}\left( \frac{x}{y} \right)&=\log_{10}(x) - \log_{10}(y)
\end{align}$$
$\log_{10}(10x^{2}y)$
$$\begin{align}
\log_{10} (10x^{2}y)&=\log_{10} (10) + \log_{10} (x^{2}) + \log_{10}(y) \\
&=1+2\log_{10} (x) + \log_{10}(y)
\end{align}$$

Given that $2\log_{10}\left( \frac{x}{y} \right)=1+\log_{10}(10x^{2}y)$, find $y$
$$\begin{align}
2(\log_{10}x - \log_{10} y)&=2+2\log_{10}x+\log_{10}y \\
-2\log _{10}y&=2+\log_{10} y \\
-3 \log_{10}y &= 2 \\
\log_{10} y &=-\frac{2}{3} \\
y &=10^{-2/3} \\
&=\frac{1}{\sqrt[3]{100}} \\
&\approx {0}.215
\end{align}$$
6. Sketch $y=a^x, a>1$, $y=2b^x, 0<b<1$

 ![InkDrawing](<Ink/Drawing/2026.10.10 - 12.46pm.svg>) [Edit Drawing](https://youtu.be/2arL1jh8ihA?type=inkDrawing&width=500&aspectRatio=1.778&viewBoxX=0&viewBoxY=0&viewBoxW=2000&viewBoxH=1125)
The curves intebrsect at $P$, prove that $P_{x}=\frac{1}{\log_{2}a-\log_{2}b}$
$$\begin{align}
a^x&=2b^x \\
\log_{2}(a^x)&=\log_{2}(2)+\log_{2}(b^x) \\
x\log_{2}(a)&=\log_{2}(2)+x\log_{2}(b) \\
1&=x\log_{2}(a)-x\log_{2}(b) \\
&=x(\log_{2}a-\log_{2}b) \\
x&=\frac{1}{\log_{2}a-\log_{2}b}
\end{align}$$
7. Prove $N=aT^b$ can be expressed in form $\log_{10}(N)=m\log_{10}T+c$
$$\begin{align}
N&=aT^b \\
\log_{10}(N)&=\log_{10}(aT^b) \\
\log_{10}(N)&=\log_{10}(a)+\log_{10}(T^b) \\
\log_{10}(N)&=\log_{10}(a)+b\log_{10}(T) \\
c&\stackrel{\text{def}}{=} \log_{10}(a) \\
m&\stackrel{\text{def}}{=}b
\end{align}$$
Given the graph of $\log_{10}(N)$ against $\log_{10} T$, find $m$, $c$ and $N$ when $T=3$
```desmos-graph
left=-0.1;right=1.4;
bottom=-0.5;top=6;
---
y=2.29x+1.8
```
$$\begin{align}
m&=\frac{5-1.8}{1.4} \\
&=2.29 \\
c&=1.8
 \\
\implies\log_{10}(N)&=1.8+2.29\log_{10}(T) \\
\therefore \log_{10} (N) \Big \vert_{T=3}&=1.8+2.29\log_{10}(3) \\
&\approx1.8+2.29(0.48) \\
&\approx 2.9 \\
\therefore N &=10^{2.9} \\
&\approx 794
\end{align}$$
Explain why this graph is not sufficient to find the day when the population surpasses 1,000,000

Because we would have to extrapolate to the day where $\log_{10}N=6$, and our model might not be reliable by that point, as the population might be limited by factors such as lack of food.

With reference to the model, determine $a$
$$\begin{align}
c&=\log_{10} a \\
\therefore a&=10^c \\
&\approx 10^{1.8} \\
&\approx 63.18
\end{align}$$
