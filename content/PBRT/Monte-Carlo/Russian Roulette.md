Oftentimes, some samples in a [[Non-uniform Monte-Carlo|Monte-Carlo estimation]] contribute very little to the integral. If we can determine this early, we can save processing time by skipping processing it.

In a factor in a sample if near 0, we know the sample will probably not contribute to the integral. However, if we do this for all near-zero evaluations, we risk a biased estimation. 

Russian roulette algorithms solve this problem by defining a _termination probability_, $q$ for low-contributing values, so that we still calculate an average for low-contribution regions of the domain.