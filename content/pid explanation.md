each time per "tick":

we have:
- a goal ($r(t)$)
- a current position ($u(t)$)

we use these to make an error
$e(t)=r(t)-u(t)$

P term:

$K_{P}e(t)$

I term:
Between each tick, we have a variable $dt$ which denotes the time between the last tick and now

We use a persistent value $I$, which represents the area under the curve of $e(t)$

Each tick we add $e(t)\times dt$ to $I$.

D term:
$\frac{e(t)-e(t-1)}{dt}$




```
error

prop = K_p * error
integral = error * dt
int = K_i * integral

derivative = K_d * (error - last_error) / dt

output = prop + int + derivative

```