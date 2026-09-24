Binomials are polynomials in the form
$$(a+b)^n,n\in \mathbb{N}$$
It is easy to see how they convert into our familiar polynomial form:









$$
\begin{aligned}
(a+b)^n&=\overbrace{ (a+b)(a+b)(a+b)\dots(a+b) }^{ n \text{ times} } \\
&=a^n + kba^{n-1}+kb^2a^{n-3}+\dots+b^n
\end{aligned}
$$









Where each term is of form $ka^rb^{n-r}$ where $k$ is a function of $n$ and $r$. This function is typically denoted as $n\choose r$ or $n_{C_{r}}$. This function returns the $r^{\text{th}}$ entry of the $n^{\text{th}}$ row of Pascal's triangle:









$$
\begin{matrix}
&&&&&1 \\
&&&&1&&1 \\
&&&1&&2&&1 \\
&&1&&3&&3&&1 \\
&1&&4&&6&&4&&1 \\
1&&5&&10&&10&&5&&1 \\
&&&&&\dots
\end{matrix}
$$









$$
{n\choose r}=
$$

