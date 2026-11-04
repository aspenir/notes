### Maximum power transfer theorem
A cell transfers the most power to a load when the load's resistance is equal to its own internal resistance.

Proof:
$$\begin{align}
P&=I^2R \\
I&=\frac{\epsilon}{R+r} \\
P&=\left( \frac{\epsilon}{R+r} \right)^2R \\
&=\epsilon^2 \frac{R}{R^{2}+2Rr+r^{2}} \\
\frac{\delta P}{\delta R}&=\frac{\epsilon^{2}(r-R)}{(R+r)^3} \\ 
\frac{\epsilon^{2}(r-R)}{(R+r)^3} &=0 \\
\text{assuming }&\epsilon\neq 0, r\neq 0 \\
\frac{\delta P}{\delta R}&=0 \text{ when }R=r \text{ or }R\approx \infty \\
\frac{\delta P^2}{\delta^2 R}&=\frac{2\epsilon^{2}(R-2r)}{(R+r)^4} \\
\frac{\delta P^2}{\delta^{2}R}\Big|_{R=r}&=\frac{2\epsilon^{2}(r-2r)}{(r+r)^4} \\
&=-\frac{2\epsilon^{2}r}{16r^4}  \\ 
&<0 \\
\frac{\delta P^2}{\delta^{2}R}\Big|_{R=\infty}&=\frac{2\epsilon^{2}(\infty-2r)}{(\infty+r)^4} \\
&=\frac{\infty}{\infty^4} \\
&\approx0_{+} \\ \\
\therefore \max_{R} P&=\epsilon^2 \frac{r}{r^{2}+2r^{2}+r^2} \\
&=\frac{\epsilon^{2}r}{4r^2} \\
&=\frac{\epsilon^{2}}{4r}
\end{align}$$

