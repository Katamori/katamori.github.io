---
layout: cg
type: cg
title: Smooth as teflon
source: http://codegolf.stackexchange.com/questions/115628/smooth-as-teflon/115649#115649
---

Golfed in action:

<script>function h(q,c){w='';for(z=0;z<q;z++){w+=c} return w} function d(){n=Number(document.getElementById('n').value);s='';u='&nbsp;';j='<br>';for(i=-2;i<=n*2;i++){if(i==-2){s+=h(n+1,u)+h(n,'_')+j}else if(i<n-1){s+=h(n-i-1,u)+'/'+h(2*(i+1)+n,u)+'\\'+j }else if(i==n-1){s+='{'+h(3*n,u)+'}'+h(n+3,'=')+"0"+j}else if(i+1==n*2){s+=h(n,u)+'\\'+h(n,'_')+'/';}else if(i+1<n*2){s+=h(i-n+1,u)+'\\'+h((5*n)-(2*i)-2,u)+'/'+j}}document.getElementById('p').innerHTML =s}</script><input type="number" id='n'><button onclick='d()'>Do</button>

<p id='p' style='font-family:monospace;'></p>

<hr>

Ungolfed:

```js
<script>
    function h(q,c){w='';for(z=0;z<q;z++){w+=c} return w}    
    function d(){
        n=Number(document.getElementById('n').value)
        s='';u='&nbsp;';j='<br>'
        for(i=-2;i<=n*2;i++){
            if(i==-2){              s+=h(n+1,u)+h(n,'_')+j
            }else if(i<n-1){        s+=h(n-i-1,u)+'/'+h(2*(i+1)+n,u)+'\\'+j 
            }else if(i==n-1){       s+='{'+h(3*n,u)+'}'+h(n+3,'=')+"0"+j 
            }else if(i+1==n*2){     s+=h(n,u)+'\\'+h(n,'_')+'/';  
            }else if(i+1<n*2){      s+=h(i-n+1,u)+'\\'+h((5*n)-(2*i)-2,u)+'/'+j 
            }
        }
        document.getElementById('p').innerHTML =s;
    }
</script>

<input type="number" id='n'>
<button onclick='d()'>Do</button>
<p id='p' style='font-family:monospace;'></p>
```

