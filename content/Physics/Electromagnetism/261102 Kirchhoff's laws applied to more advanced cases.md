Sometimes [[261005 Kirchhoff's Laws|Kirchhoff's laws]] are necessary to solve a problem, even when they seem like they shouldn't.

(R1, R2 and R3 are from left to right)
In this case, we know the loop of R2 and R3 must have a net voltage of 0, and we know the other branch of the loop (the wire connecting the two) must have a potential difference of 0 (as it has no resistance), so R2 and R3's voltages must sum to 0.

This is the same for the loop of R1 and R2, thus $V_{R_{1}}=V_{R_{3}}$ and consequentially $V_{R_{2}}=-V_{R_{1}}=-V_{R_{3}}$
![[Circuit.circuit]]

### Cells in parallel
Given two branches with a cell with [[261005 Electromotive force|electromotive force]] $\epsilon_{n}$ and [[261008 Internal resistance|internal resistance]] $r_{n}$:
If $\epsilon_{1}=\epsilon_{2}$ and $r_{1}=r_{2}$, $I_{1}=I_{2}=\frac{I_{\Sigma}}{2}\therefore V_{\Sigma}=\epsilon_{1}-\frac{I}{2}r_{1}$

### Examples
Two cells P and Q and a resistor R of resistance $4\Omega$ are connected in parallel. Cell P has an EMF of $2V$ and an internal resistance of $1.5\Omega$. Cell Q has an EMF of $1.5V$ and an internal resistance of $2.0\Omega$. Calculate the current across $P$ and $Q$.

$$\begin{align}
\begin{cases}
\epsilon_{P}&=R(I_{P}+I_{Q})+r_{P}I_{P} \\
\epsilon_{Q}&=R(I_{P}+I_{Q})+r_{Q}I_{Q}
\end{cases} \\
\begin{cases}
2&=4(I_{P}+I_{Q})+1.5I_{P} \\
1.5&=4(I_{P}+I_{Q})+2I_{Q}
\end{cases} \\
\begin{cases}
4(I_{P}+I_{Q})&=2-1.5I_{P} \\
4(I_{P}+I_{Q})&=1.5-2I_{Q}
\end{cases} \\
2-1.5I_{P}&=1.5-2I_{Q} \\
4-3I_{P}&=3-4I_{Q} \\
-3I_{P}&=-1-4I_{Q} \\
3I_{P}&=1+4I_{Q} \\
I_{P}&=\frac{1}{3}+\frac{4}{3}I_{Q} \\
 \\
4\left( \frac{1}{3}+\frac{4}{3}I_{Q}+I_{Q} \right)&=1.5-2I_{Q} \\
4\left( \frac{1}{3}+\frac{7}{3}I_{Q} \right)&=1.5-2I_{Q} \\
\frac{4}{3}+\frac{28}{3}I_{Q}&=1.5-2I_{Q} \\
8+56I_{Q}&=9-12I_{Q} \\
68I_{Q}&=1 \\
I_{Q}&=\frac{1}{68} \\
 \\
I_{P}&=\frac{1}{3}+\frac{4}{3}I_{Q} \\
&=\frac{1}{3}+\frac{4}{204} \\
&=\frac{68}{204}+\frac{4}{204} \\
&=\frac{72}{204} \\
&=\frac{36}{102} \\
&=\frac{6}{17}
\end{align}$$
