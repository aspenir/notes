Sometimes we might want to do a geometric transformation to a graph in an algebraic manner. 

This is possible with any transformation that would allow for the function to still return only one result.
### Translation
##### Along the Y axis
To translate any given function $f(x)$ by $a$ units along the $y$ axis, we can use
$$
	y=f(x)+a
$$
##### Along the X axis
To translate any given function $f(x)$ by $b$ units along the $x$ axis, we can use
$$
	y=f(x-b)
$$
### Scaling
##### Along the Y axis
To scale any given function $f(x)$ by a factor of $c$ parallel to the $y$ axis, we can use
$$
	y=cf(x)
$$
##### Along the X axis
To scale any given function $f(x)$ by a factor of $d$ parallel to the $x$ axis, we can use
$$
	y=f\left( \frac{1}{d}x \right)
$$
### Reflection
##### Across the Y axis
To reflect any given function $f(x)$ across the $y$ axis, we can use
$$
	y=-f(x)
$$
##### Across the X axis
To reflect any given function $f(x)$ across the $x$ axis, we can use
$$
	y=f(-x)
$$
# Resultant transformations
Operations on the x axis take precedence over operations on the y.

Operations upon the y axis follow BODMAS (or BIDMAS, whichever you prefer), whilst operations on the x axis follow SAMDOB, the inverse.
##### Proof of x-axis "SAMDOB" order of operations
Let $y=f(x)$ be a function that maps $X \hookrightarrow\mathrel{\mspace{-15mu}}\rightarrow Y$ (bijectively, or a one-to-one mapping). Then $x=f^{-1}(y)$. Now consider $f(x)$ scaled horizontally by a scale factor of $\frac{1}{a}$ and translated $-b$ units across the $x$ axis:
$$\begin{align}
y&=f(ax+b) \\
\implies ax+b&=f^{-1}(y) \\
x&=\frac{f^{-1}(y)-b}{a} \\
X&\equiv\frac{f^{-1}(Y)-b}{a}
\end{align}$$
### Transformations with the same effect
For a function like $f(x)=x^2$, writing $4f(x)=4x^{2}$ to scale 4 units parallel to the y axis, is equal to writing $f(2x)=(2x)^{2}$ to scale 2 units parallel to the x axis.

Another example is $f(x)=2^x$, writing $f(x+3)=2^{x+3}$ is obviously a translation of $\begin{pmatrix}-3 \\  0\end{pmatrix}$. However, writing $8f(x)=2^x\times 2^3=2^{x+3}$ - scaling parallel to the $y$ axis by a factor of 8 - simplifies to the exact same.

