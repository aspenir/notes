Sometimes, it is more useful to sample areas with greater entropy, such as areas with large amounts of light in a raytracer.

For this, one can use a _point distribution function_, $p(X_i)$ which returns a nonzero scalar dependent on the sample point. Given a random sample point $X_i \in [a,b]$

$$\int_a^bf(x)dx\approx\frac{1}{n}\sum_{i=0}^n\frac{f(X_i)}{p(X_i)}$$
