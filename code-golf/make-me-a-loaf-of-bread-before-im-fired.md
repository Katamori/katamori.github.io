---
layout: cg
type: cg
title: Make me a loaf of bread before I'm fired!
source: https://codegolf.stackexchange.com/questions/115575/make-me-a-loaf-of-bread-before-im-fired/115771#115771
---

**Language**: PHP

Golfed:

```php
<?php $a=$_GET["a"];$b=$_GET["b"];$c=$_GET["c"];$w="<br>";$s="&nbsp;";$u="&#95";$p="|";$k="/";$t=str_repeat;$l='';$r=$t($s,$c).$k.$t("-",$a)."\\".$w;for($i=0;$i<$c+$b-1;$i++){$i<=$b-1?($i<$c-1?$l=$t($s,$a+$i+1).$p:$l=$t($s,$c-1).$p):($i<$c-1?$l=$t($s,$a+$b+1).$k:$l=$t($s,$c+$b-$i-1).$k);$i<$c-1?$r.=$t($s,$c-$i-1).$k.$l.$w:($i==$c-1?$r.=$k.$t("-",$a)."\\".$l.$w:$r.=$p.$t($s,$a).$p.$l.$w);};echo$r.=$p.$t($u,$a).$p.$k?>
```

<hr>

Ungolfed:

```php
<?php 
$a=$_GET["a"];$b=$_GET["b"];$c=$_GET["c"];
$w="<br>";$s="&nbsp;";$u="&#95"; $p="|";$k="/";$t=str_repeat;$f=$v=$m=$l='';
//first line
$r=$t($s,$c).$k.$t("-",$a)."\\".$w;


for($i=0;$i<$c+$b-1;$i++){

    //right side of the loaf
    $i <= $b-1 
    ? ($i < $c-1 ? $l=$t($s,$a+$i+1).$p : $l=$t($s,$c-1).$p)  
    : ($i < $c-1 ? $l=$t($s,$a+$b+1).$k : $l=$t($s,$c+$b-$i-1).$k) ;

    //left side, with the right side attached
    $i<$c-1 
        ? $r.=$t($s,$c-$i-1).$k.$f.$l.$w
        : ($i==$c-1 
            ? $r.=$k.$t("-",$a)."\\".$f.$l.$w
            : $r.=$p.$t($s,$a).$p.$f.$l.$w);

};
    //final line
    echo $r.=$p.$t($u,$a).$p.$k;

?>
```

