The Fourier transform transforms a function into a weighted sum of sine and cosine waves:

$$
\mathcal{F} \{ f \}(\xi)\equiv \int_{-\infty}^\infty f(x)e^{-2\pi \xi x}dx, \forall x\in \mathbb{R} 
$$
If $x$ in this system represents time, then $\xi$ represents frequency, and $\mathrm{Re}(\mathcal{F}\{ f \}(\xi))$ is the alignment of a cosine wave of frequency $\xi$ with $f$, and $\mathrm{Im}(\mathcal{F}\{ f \}(\xi))$ is the alignment of a sine wave of frequency $\xi$ with $f$.

Therefore:
$$\begin{align}
f(x)\equiv\sum_{n=0}^\infty (\mathrm{Re}[\mathcal{F}\{ f \}(x)] \cos x + \mathrm{Im}[\mathcal{F}\{f\}(x)]\sin x)
\end{align}$$
### Properties
##### Linearity
$$
\mathcal{F}\{ af(x)+bg(x) \}\equiv a\mathcal{F}\{ f(x) \}+b\mathcal{F}\{ g(x) \}
$$
##### Time shift
$$
\mathcal{F} \{ f(t-t_{0}) \}\equiv e^{-i\omega t_{0}}\mathcal{F}\{ f(t) \}
$$
##### Frequency shift
$$
\mathcal{F}\{ e^{i\omega_{0}t}f(t) \}\equiv\mathcal F \{ f(\omega-\omega_{0}) \}
$$

##### Differentiation
$$
\mathcal{F}\{ f'\}(x)\equiv i \omega\mathcal{F}\{ f(\omega) \}
$$
or, more generally
$$
\mathcal{F}\{ f^{(n)}\}(x)\equiv (i \omega)^n\mathcal{F}\{ f(\omega) \}

$$
##### Frequency differentiation
$$
\mathcal{F}\{ tf(t) \}=i \frac{dF}{d\omega}
$$
##### Duality
$$
\mathcal F \{ f(t) \}=F(\omega) \implies \mathcal F \{ F(t) \}=2 \pi f(-\omega)
$$

