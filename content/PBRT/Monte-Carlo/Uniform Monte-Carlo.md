The Monte Carlo algorithm approximates an integral using random sampling.

Given a function $f(x)$, and a supply of $n$ independent random variables $X_i\in[a,b]$:

$$\int_a^b f(x)dx\approx \frac{b-a}{n}\sum^n_{i=1}f(X_i)$$

This can be trivially extended beyond 1 dimension, given random sample vector $X_i=\langle x,y,z\rangle$, $x\in[x_0,x_1]$, $y\in[y_0,y_1]$, $z\in[z_0,z_1]$:

$$\int^{z_1}_{z_0}\int^{y_1}_{y_0}\int^{x_1}_{x_0}f(x,y,z)\text{d}x\text{d}y\text{d}z\approx \frac{(z_1-z_0)(y_1-y_0)(x_1-x_0)}{n}\sum^n_{i=1}f(X_i)$$


