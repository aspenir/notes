Sometimes, truly random sampling can miss features, as samples may not be placed uniformly in all areas.

Stratification divides a domain $\Lambda$ into $n$ non-overlapping subdivisions $\Lambda_1,\Lambda_2...\Lambda_n$, called strata, which completely cover the entire domain:

$$\bigcup^n_{i=1}\Lambda_i=\Lambda$$

It then draws $n_i$ samples from each stratum and performs [[Non-uniform Monte-Carlo|Monte-Carlo estimation]] on each, with random variable $X_{i,j}$ is the $j\text{th}$ sample from density $p_i$ 

$$F_i=\frac{1}{n_i}\sum^{n_i}_{j=1}\frac{f(X_{i,j})}{p_i(X_{i,j})}$$
The overall Monte-Carlo estimate is then trivially given by summing all the stratum estimations weighted by their fractional volume $v_i \in [0,1]$.
$$F=\sum^n_{i=0} v_i F_i$$
