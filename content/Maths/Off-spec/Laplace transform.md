The Laplace transform transforms a function of a real variable (typically of _time_ domain), to a complex variable (analogously of the _frequency_ domain)
$$
\mathcal{L}\{ f \}(s)=\int_{0}^\infty f(t)e^{-st}dt
$$
or the _bilateral_ Laplace:
$$
\mathcal{B}\{ f \}(s)=\int_{-\infty}^\infty f(t)e^{-st}dt
$$
### Properties
##### Differentiation
$$
\mathcal{L}\{f'(x)\}\equiv sF(s)-f(0)
$$
or more generally..
$$
\mathcal{L}\{f^{(n)}(x)  \}\equiv s^n F(s)-\sum_{k=1}^n s^{n-k}f^{(k-1)}(0)
$$
##### Integration
$$
\int_{0}^t f(\tau)d\tau\equiv \frac{1}{s}F(s)
$$
##### Convolution
$$
\mathcal{B}\{f*g\}(x)\equiv \mathcal{B}\{f\}(x)\cdot \mathcal{B}\{g\}(x)
$$
