Importance sampling exploits the fact that [[Non-uniform Monte-Carlo|Monte-Carlo estimation]] converges more rapidly if samples taken from a distribution $p(x)$ are similar to the integral being found, $\int^a_b f(x)dx$.

Obviously, we do not know the integral yet, so we cannot just use $p(x)=\int^a_b f(x)dx$, but we can approximate it using cheap functions, such as piecewise functions that return an expected fractional frequency of a certain range, or similar Gaussian approximations.

### The problem of multiple distributions
Sometimes, there are multiple terms in an integral, with different probability distributions that are ideal for each. Consider the case where $f(x) = a(x)b(x)$, where $p_a(x)$ is ideal for $a(x)$, and vice versa.

Now, obviously, we could use one of the two, giving us a variance of roughly $f(a)$, or roughly $f(b)$. However, variance is additive (TODO), and in a integral with alot of such products, such as a BRDF, this variance would quickly take its toll...

Multi-importance sampling resolves this issue by sampling both $p(a)$ and $p(b)$, in the hopes that one reasonably matches the integral, and weight the amount of samples from each distribution to eliminate variance caused by mismatches between the integrand and the sampling density.

With two sampling distributions, $p_a$ and $p_b$, and random variables $X\sim p_a$, $Y\sim p_b$, the MIS Monte-Carlo estimator is:

$$\sum^n_{i=1}w_a(X_i)\frac{f(X_i)}{p_a(X_i)}+w_b(Y_i)\frac{f(Y_i)}{p_b(Y_i)}$$

Where $w(x)$ is a weighting function, typically defined by the power heuristic:

$$w_i(x)=\frac{(n_ip_i(x))^\beta}{(\sum_j^nn_jp_j(x))^\beta}$$
With $\beta=1$, this works out to:
$$\sum^n_{i=1}\frac{f(X_i)}{p_a(X_i)+p_b(X_i)}+\frac{f(Y_i)}{p_a(Y_i)+p_b(Y_i)}$$

