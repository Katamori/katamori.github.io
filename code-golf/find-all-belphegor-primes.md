---
layout: cg
type: cg
title: Find all Belphegor primes
source: https://codegolf.stackexchange.com/a/205322/59058
---

**Note**: this one was in Python.

Golfed:

```py
import math as m
def a(k):
 r=set()
 for i in range(k):
  n=(10**(i+3)+666)*10**(i+1)+1
  p=True
  for d in range(1,m.ceil((m.sqrt(n))/2)):
   p=p and n%((d*2)+1)>0
   if(not p):
    break
  if(p):
   r.add(n)
 return r

```

Ungolfed:

```py
import math

def a(k):
    nums = set()
    for i in range(k):
        nu = (((10 **(i+3) ) + 666) * ((10 ** (i+1)))) + 1

        notPrime = True
        halfSquare = math.ceil((math.sqrt(nu))/2)

        print("i = "+str(i)+", Belphegor num: "+str(f'{nu:,}'))
        print("No. of checks to do: "+str(f'{halfSquare:,}'))

        percentage = math.ceil(halfSquare/100)
        print("Percentage:"+str(f'{percentage:,}')+" calc")

        for p in range(1, halfSquare):
            divisive = (p*2)+1

            if(p%( math.ceil(percentage/5000))==0):
                print("Percentage:"+str(round((divisive/(halfSquare*2))*100,4)) + "%")
                #print("divisive of "+str(f'{divisive:,}')+": "+str(nu%divisive))

            notPrime = notPrime and nu%divisive > 0

            if(not notPrime):
                print("divisive of "+str(f'{divisive:,}')+": "+str(nu%divisive))
                break
            
        if (notPrime):
            nums.add(nu)
    
        print("--")

    return nums

print("-----")
print(a(15))
```