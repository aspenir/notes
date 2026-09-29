Convolution is a process used to "blend" two functions together. Given two functions $f(x)$ and $g(x)$, which support a domain of $(-\infty, \infty)$,
$$
(f * g)(t)\triangleq \int_{-\infty}^\infty f(\tau)g(t-\tau)d\tau
$$
It is often visually explained as "sliding" one function over another by value $\tau$, and taking the area that both "overlap".

### Properties
##### Commutative
$$
f*g\equiv g*f
$$
##### Associative
$$
f*(g*h)\equiv(f*g)*h
$$
##### Distributive
$$
f*(g+h)\equiv f*g+f*h
$$
##### Integration
$$
\int (f*g)(x)dx\equiv \left(\int f(x)dx \right)\left(\int g(x)dx\right)
$$
##### Differentiation
$$
\frac{d}{dx}(f*g)(x)\equiv \frac{df}{dx}*g(x)\equiv \frac{dg}{dx}*f(x)
$$
##### Fourier
$$
\mathcal{F}\{f* g\}\equiv\mathcal{F}\{ f \}\cdot\mathcal{F}\{ g \}
$$
##### Laplace
Given $F(s)=\int_{-\infty}^\infty e^{-su}f(u)du$, $G(s)$
$$\begin{align}
F(s)\cdot G(s) &= \int_{-\infty}^\infty\int_{-\infty}^\infty e^{-st}f(u)g(t-u)\space du\space dt \\
&= \int_{-\infty}^\infty e^{-st} \underbrace{ \int^\infty_{-\infty}f(u)g(t-u)\space du }_{ (f*g)(t) }\space dt \\
&= \int_{-\infty}^\infty e^{-st}(f*g)(t)dt \\
\implies \mathcal{B} \{ f(s) \}\cdot \mathcal{B}\{g(s)\}&=\mathcal{B}\{  (f*g)\}

\end{align}$$
