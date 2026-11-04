Kirchhoff's laws help explain both the series and parallel laws for [[260910 Current|current]], [[260914 Electric potential|potential difference]] and [[260914 Ohm's law|resistance]].

|                                     | Series                                                           | Parallel                                                                                                                            |
| ----------------------------------- | ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| P.D.<br>(conservation of energy)    | "shared" to each component in inverse proportion with resistance | Spatially constant throughout each branch                                                                                           |
| Current<br>(conservation of charge) | Spatially constant throughout each component                     | "shared" to each component proportionally with resistance                                                                           |
| R                                   | $R=R_{1}+R_{2}+\dots+R_{n}$<br>$R=\sum_{i=1}^n R_{i}$            | $\frac{1}{R_{\Sigma}}=\frac{1}{R_{1}}+\frac{1}{R_{2}}+\dots+\frac{1}{R_{n}}$<br>$\frac{1}{R_{\Sigma}}=\sum_{i=1}^n \frac{1}{R_{i}}$ |
### Derivation
##### Resistance in parallel
 ![InkDrawing](<Ink/Drawing/2026.10.5 - 10.47am.svg>) [Edit Drawing](https://youtu.be/2arL1jh8ihA?type=inkDrawing&width=500&aspectRatio=1.778&viewBoxX=0&viewBoxY=0&viewBoxW=2000&viewBoxH=1125)
$$\begin{align}
I_{\Sigma}&\equiv I_{1}+I_{2} \\
\epsilon&\equiv I_{1}R_{1} \implies I_{1} = \frac{\epsilon}{R_{1}} \\
\epsilon&\equiv I_{2}R_{2} \implies I_{2} = \frac{\epsilon}{R_{2}} \\
\epsilon&\equiv I_{\Sigma}R_{\Sigma} \implies I_{\Sigma}=\frac{\epsilon}{R_{\Sigma}} \\
\therefore \frac{\epsilon}{R_{\Sigma}}&=\frac{\epsilon}{R_{1}}+\frac{\epsilon}{R_{2}} \\
\frac{1}{R_{\Sigma}}&=\frac{1}{R_{1}}+\frac{1}{R_{2}}
\end{align}$$
##### Resistance in series
$$\begin{align}
\epsilon&\equiv V_{1} +V_{2}  \\
IR_{\Sigma}&=IR_{1}+IR_{2} \\
R_{\Sigma}&=R_{1}+R_{2}
\end{align}$$
### Kirchhoff's junction rule
For any junction in a circuit, the sum of currents flowing in is equal to the sum of currents flowing out.

_The algebraic sum of currents meeting in a network of conductors at a point is zero_
$$\sum_{i=1}^n I_{i}=0$$
### Kirchhoff's loop rule
The algebraic sum of all potential differences around any closed loop around a circuit is equal to the [[261005 Electromotive force|electromotive force]].

$$
	\sum_{i=0}^n V_{i}=\epsilon
$$

This is also more generally defined as the algebraic sum of directed potential differences around a loop summing to 0.

##### Derivation:
$$\begin{align}
V_{a\rightarrow b}&\triangleq -\int_{\mathcal{P}_{a\rightarrow b}}\mathbf{E} \cdot d\mathbf{l} \\
\nabla \times \mathbf{E}&\triangleq -\frac{{\partial \mathbf{B}}}{\partial t}\equiv 0  & \text{Maxwell-Faraday equation}
 \\ \\

\implies \sum_{i}V_{i}&=-\sum_{i}\int_{\mathcal P_{i}}\mathbf{E} \cdot d\mathbf{l}= \oint \mathbf{E}\cdot d\mathbf{l}=0
\end{align}$$

### Example
Given $R_{1}=100\Omega, R_{2}=200\Omega, R_{3}=300\Omega, \epsilon_{1}=3V, \epsilon_{2}=4V$,
![[Pasted image 20261007173235.png|266]]

$$\begin{align}
I_{1}-I_{2}-I_{3}&=0 &  \boxed{\sum_{i=1}^nI_{i}=0 }\\
R_{1}I_{1}-R_{2}I_{2}&=\epsilon_{1} & \boxed{\sum _{i=0}^n V_{i}=\epsilon} \\
-R_{3}I_{3}+R_{2}I_{2}&=\epsilon_{1}+\epsilon_{2} & \boxed{\sum _{i=0}^n V_{i}=\epsilon} \\
 \\

\begin{cases}
I_{1}-I_{2}-I_{3}&=0 \\
R_{1}I_{1}+R_{2}I_{2}&=\epsilon_{1}  \\
-R_{3}I_{3}+R_{2}I_{2}&=\epsilon_{1} +\epsilon_{2}\\

\end{cases}
 \\
\underbrace{ \begin{bmatrix}
1 &-1& -1 \\
100&200&0 \\
0&200&-300
\end{bmatrix} \ \ \ \ }_{ A } \cdot \underbrace{ \begin{bmatrix}
I_{1} &\\
I_{2} &\\
I_{3}&
\end{bmatrix} \ \ \ \ }_{ X }&=\underbrace{ \begin{bmatrix}
0& \\
3 \\
7
\end{bmatrix} \ \ \ \ }_{ B } \\

\det(A)=-110000 \\
\therefore A^{-1}
= \begin{bmatrix}
0.5455 & 0.0045 & -0.0018 \\
-0.2727 & 0.0027 & 0.0009 \\
-0.1818 & 0.0018 & -0.0027
\end{bmatrix} \\
\therefore X=A^{-1} \cdot B \\
= \begin{bmatrix}
0.0091 &\\
0.1455 &\\
-0.1364&
\end{bmatrix}
\end{align}$$

