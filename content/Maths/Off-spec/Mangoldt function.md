The Mangoldt function is defined by:
$$
	\Lambda(n)=\begin{cases}
	\log p & \text{if }n=p^k \text{ for some prime }p \text{ and integer }k \\
	0 & \text{otherwise}
	\end{cases}
$$
It satisfies the identity:
$$
	\sum_{d|n}\Lambda(d)=\log(n)
$$
### Properties
##### Integration
From a Lesbegue measure perspective,
$$
 \int_{-\infty}^\infty\Lambda(n)dn=0
$$
As $\mathbb{P}$ is countably infinite whilst $\mathbb{R}$ is uncountably infinite

From a distributional perspective,
$$\begin{align}
\Lambda(x)&=\sum_{n=1}^\infty \Lambda(n)\delta(x-n) \\
\therefore  \int_{-\infty}^\infty \Lambda(n)dn&=\sum_{n=1}^\infty\Lambda(n) \\
&=\infty
\end{align}$$
We can use the delta function to turn the integration into an infinite summation, resulting in an antiderivative of $\infty$.