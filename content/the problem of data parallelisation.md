### Our problem
Often, in computing, we need to use a search algorithm to find a value in a one-dimensional array of data - called a needle in a haystack problem - an example of this is finding a student's year from their name in a database; 

We must iterate through our database, taking every single student and comparing it to our "needle" - our student's name, and repeating until we find a pair that are equal, and then finding that student's year from our data.

Consider datasets like every social media post ever, or an AI model's training data - even with a state-of-the-art CPU, which has a 2-3GHz processor speed, even a simple lookup like this can take minutes, making it incredibly difficult to query, manipulate or use in real-time software.
### What is data parallelisation? (SIMD)
In traditional programming, data flows linearly through a program - an instruction operates on a single piece of data, and then passes it to the next.

CPU manufacturers

