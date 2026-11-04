Superconductors are materials where the resistivity drops to $0$ below a critical temperature $T_{C}$. 

At $0$ resistance, no heat is generated when current flows through the material, and, due to [[260914 Ohm's law|Ohm's law]] no voltage is present across the material.

```desmos-graph
left=-1;right=10;
bottom=-1;top=10;
grid=false;
hideAxisNumbers=true;
---
k=1
n(x)=\left\{x>0: kx \right\} | dashed | #64a9c0
T_c=5
s(x)=\left\{x>T_c: n(x), x>0: 0\right\} | #fd96a9
x=\left\{kT_c>y>0: T_c \right\} | dashed | #57b4a0

(4.5, 4.5*k) | label:(Normal Conductor) | #64a9c0
(2, 0) | label:(Superconductor) | #fd96a9
```
This property allows superconductors to generate extremely powerful magnetic fields through the Meissner effect, making them useful in MRI scanners, particle accelerators, and really strong electromagnets.
### Discovery
In 1911, H.K. Onnes discovered that when cooled to $4.15\ K$, its resistivity abruptly dropped. He called this a _superconducting state_ - a material with $0$ resistance.

### Examples

| Material             | $T_C$ (K) |
| -------------------- | --------- |
| Zinc                 | 0.88      |
| Aluminium            | 1.19      |
| Tin                  | 3.72      |
| Mercury              | 4.15      |
| $YBa_{2}Cu_{3}O_{7}$ | 90        |
### Uses
Superconducting wires are used in superconducting magnets. These are used in MRI machines, mass spectrometers, and particle accelerators.

Superconducting cables are specially made using multiple layers  - from outermost to innermost:
- Flexible outer cryostat (thermal insulation)
- Return $N_{2}$
- Dielectric (insulator)
- Main HTC superconductor
- Liquid $N_2$
### Cooper pairs
In a normal conductor, electrons bounce off vibrating atoms, creating resistance to current. However, when a superconductor is cooled below $T_C$, a different phenomena occurs:
- The atomic lattice vibrates less vigorously, becoming a more ordered structure
- This means that the negatively charged electrons are able to attract the positive lattice ions around them, creating a positively charged "pocket"
- This positive "pocket" attracts another electron with enough force that it can overcome the negative repulsion of the first electron, forming a Cooper pair 
### The Meissner effect
With no resistance, any magnetic field has a big effect on electrons in a superconductor, inducing a large current among the electrons on the outer edge of the material, and generate an opposing current that _cancels out_ the interior magnetic field, expelling the resultant field out of the superconductor. This makes them have a magnetic susceptibility value ($\chi$) of $-1$.

If a small bar magnet is placed on a superconductor, the Meissner effect creates a repulsive magnetic force which causes the magnet to levitate.
