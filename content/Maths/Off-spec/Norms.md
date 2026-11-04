A norm is a [[Function spaces|function-space]] equivalent of vector length. It maps a function to a single positive real.


### Examples

$$
||f||_{C(\Omega)}\triangleq \sup_{x\in \Omega}|f(x)|
$$
i.e. the norm of a continuous function $f$ over a domain $\Omega$ is given by its least upper bound.
$$
||f||_{L^p(\Omega)}\triangleq\left( \int_{\Omega}|f(x)|^pdx \right)^\frac{1}{p}
$$
i.e. the norm of a Lebesgue function $f$ over a domain $\Omega$ is given by its area. (N.B. this definition breaks down for $L^\infty$ - we must use $||f||_{L^\infty(\Omega )}\triangleq \inf \{ C\in \mathbb{R}_{\geq 0} : \forall^\infty s, |f(s)|\leq C \}$ - the lowest positive real $C$ such that nearly every $f(s)$ is less than or equal to it) $$\begin{align} ||f||_{W^{k,p}(\Omega)}&\triangleq \left( \sum_{i=0}^k||f^{(i)}||^p_{L^p(\Omega)} \right)^\frac{1}{p} \\ 
&\triangleq\left( \sum_{i=0}^k \int_{\Omega}|f(x)|^pdx\right)^\frac{1}{p}
\end{align}$$
i.e. the norm of a Sobolev function $f$ is given by the sum of the Lebesgue norms for all of its Lebesgue-integrable differentials
