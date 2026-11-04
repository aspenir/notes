All instruments used for measurement have a limit to their resolution. This creates a range of uncertainty in which our measured value could actually lie.

Different instruments also require multiple judgements - for example, a ruler requires two judgements; $L_1$ (traditionally $0$) and $L_2$ such that $L=L_2-L_1$. Uncertainty propagates summatively with each judgement, so our ruler with a resolution of $\pm 0.005\text{m}$ actually has an uncertainty of $\pm 0.01\text{m}$.

### Difference to error
Error is the difference between the _true value_ and our measured value. If we have $0$ error, the true value is guaranteed to lie within the uncertainty of our measured value.

### In multiplicative/divisive calculations
Given a velocity of $3.11\pm 0.01ms^{-1}$ and a time of $0.50\pm 0.01s$, we can calculate our acceleration and uncertainty through two different ways:
1. Via heuristic
$$\begin{align}
\pm \frac{0.01}{3.11}&=\pm 0.32\% \\
\pm \frac{0.01}{0.50}&=\pm 2.00\% \\
&\pm (2.00\%+0.32\%)=\pm 2.32\%
 \\
\therefore a=\frac{v-u}{t}&=\frac{3.11}{0.5}=6.22  \\
 \\
2.32\% * 6.22 &=0.14 \\ \\
6.22\pm 0.14
\end{align}$$
2. Via bounds
$$\begin{align}
\text{Lower bound: } \\
\frac{3.10}{0.51}&=6.08 \\
\text{Upper bound: } \\
\frac{3.11}{0.49}&=6.35 \\
\text{Mean: } \\
\frac{6.08+6.35}{2}&=6.22 \\
\frac{6.35-6.22}{6.22}&=2.32\% \\ \\
6.22\pm 0.14
\end{align}$$
