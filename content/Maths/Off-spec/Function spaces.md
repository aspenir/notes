Function spaces are [[260908 Number|sets]] of functions that share the same domain and codomain. If you add two functions of the same space, their sum function remains in this space.

# Examples:
### Metric spaces
##### $B(\Omega)$ - Bounded functions:
$$
B(\Omega)\triangleq \{ f:\Omega\to \mathbb{R}\mid\sup _{x\in \Omega}\vert f(x)| < \infty \}
$$
(where $\sup$ denotes the _supremum_, or the least upper bound)
This is the set of functions whose values do not diverge to infinity.
##### $C(\Omega)$ - Continuous functions:
$$C(\Omega)\triangleq \{ f:\Omega\to \mathbb{R}\mid \forall x_{0}\in \Omega,\lim_{ x \to x_{0} } f(x)=f(x_{0})  \}$$
##### $C^k(\Omega)$ - $k$-times continuous differentiable functions:
$$
C^k(\Omega) \triangleq \left\{ f:\Omega\to \mathbb{R} \ \middle\vert{}\  \forall j \in \{0, 1, \dots, k\}, \forall x_{0}\in \Omega, \lim_{ x \to x_{0} } f^{(j)}(x) = f^{(j)}(x_{0})  \right\}
$$
##### $C^\infty(\Omega)$ - Smooth functions
$$
C^\infty(\Omega)\triangleq \bigcap_{k=1}^\infty C^k(\Omega)
$$
##### $\mathcal{O}_{U}$ - Holomorphic functions
$$\begin{align}
\mathcal{O}(\Omega) &\triangleq \left\{  f: \Omega\to \mathbb{R} \mid \forall z_{0}\in \Omega,\exists\lim_{ z \to z_{0} } \frac{f(z)-f(z_{0})}{z-z_{0}}  \right\} \\
&\triangleq \{ f:\Omega\to \mathbb{R}|\ \forall z\in \Omega,\exists \ f'(z) \}
\end{align}
$$

### Integrable spaces
##### $L^p(\Omega)$ - Lebesgue spaces
$$
L^p(\Omega)\triangleq \left\{  f:\Omega\to \mathbb{R} \ \middle\vert \int_{\Omega} |f(x)|^p dx < \infty  \right\}
$$
This is the set of functions whose area is finite when raised to an exponent $p$.
##### $W^{k,p}(\Omega)$ - Sobolev spaces
$$
W^{k,p}(\Omega)\triangleq\left\{ f:\Omega\to \mathbb{R}\ \middle\vert\ \forall j\in \{x:x\in\mathbb{N}_{0},x<k\},f^{(j)}\in L^p(\Omega) \right\}
$$
This is the set of functions who have $k$ differentials (as well as themselves themselves) that are members of $L^p(\Omega)$