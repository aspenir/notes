The Dirichlet function is a pathological function defined over $\mathbb{R}$ as
$$
1_{\mathbb{Q}}(x)=









$$
\begin{cases}
1&x\in \mathbb{Q} \\
0&x\not\in \mathbb{Q}
\end{cases}
$$









It is periodic over any $T\in \{ n\in \mathbb{Q},n>0 \}$, and is not Riemann-integrable due to having many discontinuities.

### Integration
$1_{\mathbb{Q}}$ is not Riemann-integrable, but it _is_ Lebesgue-integrable, as it has a range of cardinality 2.

We know that $\mathbb{Q}$ is countably infinite, whilst $\mathbb{Q}'$ is uncountably infinite, so by measure theory, $\mathbb{Q}$ has measure $0$, whilst $\mathbb{Q}'$ has measure $1$, so









$$
\begin{aligned}
\int_{0}^\infty 1_{\mathbb{Q}}(x)dx&=1\times 0 + 0\times 1 \\
&=0
\end{aligned}
$$









##### But... there are values when $1_\mathbb{Q}$ are obviously not 0?
Yes! however, these intervals are $0$ wide - there are no adjacent rational numbers; if we were to Riemann-integrate this function, the rectangles where $1_{\mathbb{Q}}=1$ would have a width of $0$.

