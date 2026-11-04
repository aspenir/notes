A projectile is an object that has an initial velocity and is subject to only weight thereafter.


It follows a parabolic arc, however this parabola is not ideal when air resistance is involved.
proof:
$$\begin{align}
a\triangleq\frac{f}{m} \\
f\triangleq mg \\
\implies a\equiv g \\
\frac{dg}{dt}=0\implies\frac{da}{dt}=0 \implies s=ut+\frac{1}{2}at^{2}\\
s_{x}&=(u\cos \theta )t \\
t&=\frac{s_{x}}{u\cos \theta} \\
s_{y}&=(u\sin \theta)t-\frac{1}{2}gt^2 \\
&=\frac{(u\sin \theta)s_{x}}{u\cos \theta}-\frac{1}{2}g\left( \frac{s_{x}}{u\cos \theta} \right)^{2} \\
&=s_{x}\tan \theta-\frac{1}{2}g\left( \frac{s_{x}}{u\cos \theta} \right)^{2} \\
&=\tan (\theta) s_{x}-\frac{g}{2(u\cos \theta)^{2}}x^{2} \\
&=Ax+Bx^{2}
\end{align}$$

```desmos-graph
top=8
bottom=-1
left=-1
right=8
width=450
height=450
hideAxisNumbers=true
degreeMode=degrees
---
\phi = 80
g = 9.81
u = 10
f(x)=-(g/(2*u^2*(\cos \phi)^2))x^2+x(\tan \phi) | #fd96a9
(1.74322,f(1.74322)) | #ef3054

b=2
x^2\{x>b*\sin(90-\phi)\}+y^2=b^2 | #f0f0f0 |  y > 0
10x | #64a9ca
```







