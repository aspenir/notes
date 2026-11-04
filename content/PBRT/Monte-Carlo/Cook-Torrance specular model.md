Most specular reflectors don't produce a "clean" image - many reflections in day-to-day life are blurry. This is due to the existence of microfacets - tiny imperfections in surfaces that disrupt our perfect reflections.

The Cook-Torrance BRDF is a way of modelling the microfacets of a material and their impact on shading - 

$$\begin{align}
L_{o}&=(k_{d} \frac{c}{\pi} +k_{spec})\cdot L_{i}\cdot(\vec{N}\cdot \vec{L})\\
k_{spec}&=\frac{F}{4}\frac{DG}{(\vec{V}\cdot \vec{N})(\vec{N}\cdot \vec{L})} \\
G&=\min\left( 1,{\frac{2(\vec{H}\cdot \vec{N})(\vec{V}\cdot \vec{N})}{\vec{V}\cdot \vec{H}}},{\frac{2(\vec{H}\cdot \vec{N})(\vec{L}\cdot \vec{N})}{\vec{V}\cdot \vec{H}}} \right)
\end{align}$$
where $c$ is our albedo/colour, $G$ is a _geometric attenuation_ term, describing the "overshadowing" of microfacets blocking other microfacets, $F$ is the _fresnel term_, and $D$ is the _Beckmann distribution_ factor:

$$\begin{align}
D=\frac{e^\frac{-\tan^2(\alpha)}{\sigma^2}}{\pi \sigma^{2}\cos(\alpha)^4}
\end{align}$$
where $\sigma$ is the root-mean square of the slope of the microfacets (i.e. the roughness!)
