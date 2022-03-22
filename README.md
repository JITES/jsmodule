This document talks about the advance concept of Node.js
### Fundamentals

The NodeJS is a runitime environment. It uses familiar POSIX APIs, rather than attempting an improvement. POSIX, the Portable Operating System Interface, defines the standard APIs for Unix. It's adopted in Unix-based operating systems and beyond. The IEEE created and maintains the POSIX standard to enable systems from different manufacturers to be compatible. For Node, Ryan Dahl implemented proven POSIX APIs, rather than trying to come up with something on his own.

The general principle is, operations must never block. Node's desire for speed (high concurrency) and efficiency (minimal resource usage) demands the reduction of waste. A waiting process is a wasteful process, especially when waiting for I/O.
 



![alt text](https://github.com/JITES/nodejs-advance/blob/main/node-arch.png)
