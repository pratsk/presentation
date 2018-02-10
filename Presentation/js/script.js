var propertyName=document.getElementsByTagName('span');

for (var i = 0; i < propertyName.length; i++) {
	propertyName[i].addEventListener('click', function() {
    
    showhide();
    document.getElementById(this.innerHTML).style.display='block';
    if(this.innerHTML=='border-radius'){
      document.getElementById('brd').setAttribute("style","border-radius:"+document.getElementById("brd-rds").value+";");
      document.getElementById("brd-rds").addEventListener('change',function(){
      document.getElementById('brd').setAttribute("style","border-radius:"+this.value+";");
      })
     }
    else if(this.innerHTML=='border-top-left-radius'){
      document.getElementById('brd-rds-tp-lft').setAttribute("style","border-top-left-radius:"+document.getElementById("brd-tp-lft").value+";");
  		document.getElementById("brd-tp-lft").addEventListener('change',function(){
      document.getElementById('brd-rds-tp-lft').setAttribute("style","border-top-left-radius:"+this.value+";");
     })
    }
    else if(this.innerHTML=='border-top-right-radius'){
  		document.getElementById('brd-rds-tp-rt').setAttribute("style","border-top-right-radius:"+document.getElementById("brd-tp-rt").value+";");
      document.getElementById("brd-tp-rt").addEventListener('change',function(){
      document.getElementById('brd-rds-tp-rt').setAttribute("style","border-top-right-radius:"+this.value+";");
     })
     }
     else if(this.innerHTML=='border-bottom-left-radius'){
      document.getElementById('brd-rds-btm-lft').setAttribute("style","border-bottom-left-radius:"+document.getElementById("brd-btm-lft").value+";");
      document.getElementById("brd-btm-lft").addEventListener('change',function(){
      document.getElementById('brd-rds-btm-lft').setAttribute("style","border-bottom-left-radius:"+this.value+";");
     })
    }
    else if(this.innerHTML=='border-bottom-right-radius'){
      document.getElementById('brd-rds-btm-rt').setAttribute("style","border-top-right-radius:"+document.getElementById("brd-btm-rt").value+";");
      document.getElementById("brd-btm-rt").addEventListener('change',function(){
      document.getElementById('brd-rds-btm-rt').setAttribute("style","border-bottom-right-radius:"+this.value+";");
     })
     }
     else if(this.innerHTML=='text-shadow'){
      document.getElementById('txt-shadow').setAttribute("style","text-shadow:"+document.getElementById("txt-shdw-x").value+" "+document.getElementById("txt-shdw-y").value+" "+document.getElementById("txt-shdw-blr").value+" "+document.getElementById("txt-shdw-clr").value+";");
      document.getElementById("txt-shdw-x").addEventListener('change',function(){
      document.getElementById('txt-shadow').setAttribute("style","text-shadow:"+this.value+" "+document.getElementById("txt-shdw-y").value+" "+document.getElementById("txt-shdw-blr").value+" "+document.getElementById("txt-shdw-clr").value+";");
     });
      document.getElementById("txt-shdw-y").addEventListener('change',function(){
      document.getElementById('txt-shadow').setAttribute("style","text-shadow:"+document.getElementById("txt-shdw-x").value+" "+this.value+" "+document.getElementById("txt-shdw-blr").value+" "+document.getElementById("txt-shdw-clr").value+";");
     });
      document.getElementById("txt-shdw-blr").addEventListener('change',function(){
      document.getElementById('txt-shadow').setAttribute("style","text-shadow:"+document.getElementById("txt-shdw-x").value+" "+document.getElementById("txt-shdw-y").value+" "+this.value+" "+document.getElementById("txt-shdw-clr").value+";");
     });
      document.getElementById("txt-shdw-clr").addEventListener('change',function(){
      document.getElementById('txt-shadow').setAttribute("style","text-shadow:"+document.getElementById("txt-shdw-x").value+" "+document.getElementById("txt-shdw-y").value+" "+document.getElementById("txt-shdw-blr").value+" "+this.value+";");
     })
     }
     else if(this.innerHTML=='box-shadow'){
      document.getElementById('bx-shadow').setAttribute("style","box-shadow:"+document.getElementById("bx-shdw-x").value+" "+document.getElementById("bx-shdw-y").value+" "+document.getElementById("bx-shdw-blr").value+" "+document.getElementById("bx-shdw-clr").value+";");
      document.getElementById("bx-shdw-x").addEventListener('change',function(){
      document.getElementById('bx-shadow').setAttribute("style","box-shadow:"+this.value+" "+document.getElementById("bx-shdw-y").value+" "+document.getElementById("bx-shdw-blr").value+" "+document.getElementById("bx-shdw-clr").value+";");
     });
      document.getElementById("bx-shdw-y").addEventListener('change',function(){
      document.getElementById('bx-shadow').setAttribute("style","box-shadow:"+document.getElementById("bx-shdw-x").value+" "+this.value+" "+document.getElementById("bx-shdw-blr").value+" "+document.getElementById("bx-shdw-clr").value+";");
     });
      document.getElementById("bx-shdw-blr").addEventListener('change',function(){
      document.getElementById('bx-shadow').setAttribute("style","box-shadow:"+document.getElementById("bx-shdw-x").value+" "+document.getElementById("bx-shdw-y").value+" "+this.value+" "+document.getElementById("bx-shdw-clr").value+";");
     });
      document.getElementById("bx-shdw-clr").addEventListener('change',function(){
      document.getElementById('bx-shadow').setAttribute("style","box-shadow:"+document.getElementById("bx-shdw-x").value+" "+document.getElementById("bx-shdw-y").value+" "+document.getElementById("bx-shdw-blr").value+" "+this.value+";");
     })
     }
     else if(this.innerHTML=='overflow'){
      document.getElementById('ovrflw-div').setAttribute("style","overflow:"+document.getElementById("ovrflw").value+";");
      document.getElementById("ovrflw").addEventListener('change',function(){
      document.getElementById('ovrflw-div').setAttribute("style","overflow:"+this.value+";");
      })
     }
     else if(this.innerHTML=='overflow-x'){
      document.getElementById('ovrflwx-div').setAttribute("style","overflow-x:"+document.getElementById("ovrflwx").value+";");
      document.getElementById("ovrflwx").addEventListener('change',function(){
      document.getElementById('ovrflwx-div').setAttribute("style","overflow-x:"+this.value+";");
      })
     }
     else if(this.innerHTML=='overflow-y'){
      document.getElementById('ovrflwy-div').setAttribute("style","overflow-y:"+document.getElementById("ovrflwy").value+";");
      document.getElementById("ovrflwy").addEventListener('change',function(){
      document.getElementById('ovrflwy-div').setAttribute("style","overflow-y:"+this.value+";");
      })
     }
     else if(this.innerHTML=='resize'){
      document.getElementById('resize-p').setAttribute("style","resize:"+document.getElementById("resize-val").value+";");
      document.getElementById("resize-val").addEventListener('change',function(){
      document.getElementById('resize-p').setAttribute("style","resize:"+this.value+";");
      })
     }
     else if(this.innerHTML=='backface-visibility'){
      var cols = document.getElementsByClassName('face');
      for(i=0; i<cols.length; i++) {
          cols[i].setAttribute("style","backface-visibility:"+document.getElementById("bf-visible-val").value+";");;
      }
      document.getElementById("bf-visible-val").addEventListener('change',function(){
      var cols = document.getElementsByClassName('face');
      for(i=0; i<cols.length; i++) {
          cols[i].setAttribute("style","backface-visibility:"+document.getElementById("bf-visible-val").value+";");;
      }
      })
     }
     else if(this.innerHTML=='text-align-last'){
      document.getElementById('txt-alin-lst').setAttribute("style","text-align-last:"+document.getElementById("txt-alin-lst-val").value+";");
      document.getElementById("txt-alin-lst-val").addEventListener('change',function(){
      document.getElementById('txt-alin-lst').setAttribute("style","text-align-last:"+this.value+";");
     })
    }
    else if(this.innerHTML=='background-clip'){
      document.getElementById('bg-clip').setAttribute("style","background-clip:"+document.getElementById("bg-clip-val").value+";");
      document.getElementById("bg-clip-val").addEventListener('change',function(){
      document.getElementById('bg-clip').setAttribute("style","background-clip:"+this.value+";");
     })
    }
    else if(this.innerHTML=='border-image'){
      document.getElementById('brd-img').setAttribute("style","border-image:"+document.getElementById("brd-img-url").value+" "+document.getElementById("brd-img-slc").value+" "+document.getElementById("brd-img-rpt").value+";");
      document.getElementById("brd-img-url").addEventListener('change',function(){
      document.getElementById('brd-img').setAttribute("style","border-image:"+this.value+" "+document.getElementById("brd-img-slc").value+" "+document.getElementById("brd-img-rpt").value+";");
     });
      document.getElementById("brd-img-slc").addEventListener('change',function(){
      document.getElementById('brd-img').setAttribute("style","border-image:"+document.getElementById("brd-img-url").value+" "+this.value+" "+document.getElementById("brd-img-rpt").value+";");
     });
      document.getElementById("brd-img-rpt").addEventListener('change',function(){
      document.getElementById('brd-img').setAttribute("style","border-image:"+document.getElementById("brd-img-url").value+" "+document.getElementById("brd-img-slc").value+" "+this.value+";");
     });
     }
      else if(this.innerHTML=='opacity'){
      document.getElementById('opacity-div').setAttribute("style","opacity:"+document.getElementById("opacity-val").value+";");
      document.getElementById("opacity-val").addEventListener('change',function(){
      document.getElementById('opacity-div').setAttribute("style","opacity:"+this.value+";");
     })
    }

    else if(this.innerHTML=='text-decoration-color'){
      document.getElementById('text-decoration').setAttribute("style","text-decoration-color:"+document.getElementById("txt-dec-clr").value+";"+"text-decoration-line:"+document.getElementById("txt-dec-ln").value+";"+"text-decoration-style:"+document.getElementById("txt-dec-style").value+";");
      //document.getElementById('text-decoration').setAttribute("style","text-decoration-line:"+document.getElementById("txt-dec-ln").value+";");
      //document.getElementById('text-decoration').setAttribute("style","text-decoration-style:"+document.getElementById("txt-dec-style").value+";");
      document.getElementById("txt-dec-clr").addEventListener('change',function(){
      document.getElementById('text-decoration').setAttribute("style","text-decoration-color:"+this.value+";"+"text-decoration-line:"+document.getElementById("txt-dec-ln").value+";"+"text-decoration-style:"+document.getElementById("txt-dec-style").value+";");
     });
      document.getElementById("txt-dec-ln").addEventListener('change',function(){
      document.getElementById('text-decoration').setAttribute("style","text-decoration-color:"+document.getElementById("txt-dec-clr").value+";"+"text-decoration-line:"+this.value+";"+"text-decoration-style:"+document.getElementById("txt-dec-style").value+";");
     });
      document.getElementById("txt-dec-style").addEventListener('change',function(){
      document.getElementById('text-decoration').setAttribute("style","text-decoration-color:"+document.getElementById("txt-dec-clr").value+";"+"text-decoration-line:"+document.getElementById("txt-dec-ln").value+";"+"text-decoration-style:"+this.value+";");
     });
     }
     else if(this.innerHTML=='text-overflow'){
      document.getElementById('txt-ovrflw-div').setAttribute("style","text-overflow:"+document.getElementById("txt-ovrflw-val").value+";");
      document.getElementById("txt-ovrflw-val").addEventListener('change',function(){
      document.getElementById('txt-ovrflw-div').setAttribute("style","text-overflow:"+this.value+";");
     })
    }
    else if(this.innerHTML=='word-break'){
      document.getElementById('word-break-div').setAttribute("style","word-break:"+document.getElementById("word-break-val").value+";");
      document.getElementById("word-break-val").addEventListener('change',function(){
      document.getElementById('word-break-div').setAttribute("style","word-break:"+this.value+";");
     })
    }
    else if(this.innerHTML=='transform:rotate'){
      document.getElementById('transform-rotate-div').setAttribute("style","transform:"+document.getElementById("rotate").value+";");
      document.getElementById("rotate").addEventListener('change',function(){
      document.getElementById('transform-rotate-div').setAttribute("style","transform:"+this.value+";");
     })
    }
    else if(this.innerHTML=='transform:translate'){
      document.getElementById('transform-translate-div').setAttribute("style","-webkit-transform:"+document.getElementById("translate").value+";");
      document.getElementById("translate").addEventListener('change',function(){
      document.getElementById('transform-translate-div').setAttribute("style","-webkit-transform:"+this.value+";");
     })
    }
    else if(this.innerHTML=='transform:scale'){
      document.getElementById('transform-scale-div').setAttribute("style","-webkit-transform:"+document.getElementById("scale").value+";");
      document.getElementById("scale").addEventListener('change',function(){
      document.getElementById('transform-scale-div').setAttribute("style","-webkit-transform:"+this.value+";");
     })
    }
    else if(this.innerHTML=='transform:skew'){
      document.getElementById('transform-skew-div').setAttribute("style","-webkit-transform:"+document.getElementById("skew").value+";");
      document.getElementById("skew").addEventListener('change',function(){
      document.getElementById('transform-skew-div').setAttribute("style","-webkit-transform:"+this.value+";");
     })
    }

    else if(this.innerHTML=='flex'){
      document.getElementById('flex-div').setAttribute("style","display:"+document.getElementById("display").value+"; flex-direction:"+document.getElementById("flex-direction-val").value+"; flex-wrap:"+document.getElementById("flex-wrap-val").value+"; justify-content:"+document.getElementById("justify-content-val").value+"; align-items:"+document.getElementById("align-items-val").value+"; align-content:"+document.getElementById("align-content-val").value+";");
      document.getElementById("display").addEventListener('change',function(){
      document.getElementById('flex-div').setAttribute("style","display:"+document.getElementById("display").value+"; flex-direction:"+document.getElementById("flex-direction-val").value+"; flex-wrap:"+document.getElementById("flex-wrap-val").value+"; justify-content:"+document.getElementById("justify-content-val").value+"; align-items:"+document.getElementById("align-items-val").value+"; align-content:"+document.getElementById("align-content-val").value+";");
     })
      document.getElementById("flex-direction-val").addEventListener('change',function(){
      document.getElementById('flex-div').setAttribute("style","display:"+document.getElementById("display").value+"; flex-direction:"+document.getElementById("flex-direction-val").value+"; flex-wrap:"+document.getElementById("flex-wrap-val").value+"; justify-content:"+document.getElementById("justify-content-val").value+"; align-items:"+document.getElementById("align-items-val").value+"; align-content:"+document.getElementById("align-content-val").value+";");
     })
      document.getElementById("flex-wrap-val").addEventListener('change',function(){
      document.getElementById('flex-div').setAttribute("style","display:"+document.getElementById("display").value+"; flex-direction:"+document.getElementById("flex-direction-val").value+"; flex-wrap:"+document.getElementById("flex-wrap-val").value+"; justify-content:"+document.getElementById("justify-content-val").value+"; align-items:"+document.getElementById("align-items-val").value+"; align-content:"+document.getElementById("align-content-val").value+";");
     })
      document.getElementById("justify-content-val").addEventListener('change',function(){
      document.getElementById('flex-div').setAttribute("style","display:"+document.getElementById("display").value+"; flex-direction:"+document.getElementById("flex-direction-val").value+"; flex-wrap:"+document.getElementById("flex-wrap-val").value+"; justify-content:"+document.getElementById("justify-content-val").value+"; align-items:"+document.getElementById("align-items-val").value+"; align-content:"+document.getElementById("align-content-val").value+";");
     })
      document.getElementById("align-items-val").addEventListener('change',function(){
      document.getElementById('flex-div').setAttribute("style","display:"+document.getElementById("display").value+"; flex-direction:"+document.getElementById("flex-direction-val").value+"; flex-wrap:"+document.getElementById("flex-wrap-val").value+"; justify-content:"+document.getElementById("justify-content-val").value+"; align-items:"+document.getElementById("align-items-val").value+"; align-content:"+document.getElementById("align-content-val").value+";");
     })
      document.getElementById("align-content-val").addEventListener('change',function(){
      document.getElementById('flex-div').setAttribute("style","display:"+document.getElementById("display").value+"; flex-direction:"+document.getElementById("flex-direction-val").value+"; flex-wrap:"+document.getElementById("flex-wrap-val").value+"; justify-content:"+document.getElementById("justify-content-val").value+"; align-items:"+document.getElementById("align-items-val").value+"; align-content:"+document.getElementById("align-content-val").value+";");
     })
      document.getElementById("order1").addEventListener('change',function(){
      document.getElementById('flex-1').setAttribute("style","order:"+document.getElementById("order1").value+"; flex:"+document.getElementById("fg1").value+" "+document.getElementById("fs1").value+" "+document.getElementById("fb1").value+"; align-self:"+document.getElementById("align-self-1").value+";");
     })
      document.getElementById("fg1").addEventListener('change',function(){
      document.getElementById('flex-1').setAttribute("style","order:"+document.getElementById("order1").value+"; flex:"+document.getElementById("fg1").value+" "+document.getElementById("fs1").value+" "+document.getElementById("fb1").value+"; align-self:"+document.getElementById("align-self-1").value+";");
     })
      document.getElementById("fs1").addEventListener('change',function(){
      document.getElementById('flex-1').setAttribute("style","order:"+document.getElementById("order1").value+"; flex:"+document.getElementById("fg1").value+" "+document.getElementById("fs1").value+" "+document.getElementById("fb1").value+"; align-self:"+document.getElementById("align-self-1").value+";");
     })
      document.getElementById("fb1").addEventListener('change',function(){
      document.getElementById('flex-1').setAttribute("style","order:"+document.getElementById("order1").value+"; flex:"+document.getElementById("fg1").value+" "+document.getElementById("fs1").value+" "+document.getElementById("fb1").value+"; align-self:"+document.getElementById("align-self-1").value+";");
     })
      document.getElementById("align-self-1").addEventListener('change',function(){
      document.getElementById('flex-1').setAttribute("style","order:"+document.getElementById("order1").value+"; flex:"+document.getElementById("fg1").value+" "+document.getElementById("fs1").value+" "+document.getElementById("fb1").value+"; align-self:"+document.getElementById("align-self-1").value+";");
     })
      document.getElementById("order2").addEventListener('change',function(){
      document.getElementById('flex-2').setAttribute("style","order:"+document.getElementById("order2").value+"; flex:"+document.getElementById("fg2").value+" "+document.getElementById("fs2").value+" "+document.getElementById("fb2").value+"; align-self:"+document.getElementById("align-self-2").value+";");
     })
      document.getElementById("fg2").addEventListener('change',function(){
      document.getElementById('flex-2').setAttribute("style","order:"+document.getElementById("order2").value+"; flex:"+document.getElementById("fg2").value+" "+document.getElementById("fs2").value+" "+document.getElementById("fb2").value+"; align-self:"+document.getElementById("align-self-2").value+";");
     })
      document.getElementById("fs2").addEventListener('change',function(){
      document.getElementById('flex-2').setAttribute("style","order:"+document.getElementById("order2").value+"; flex:"+document.getElementById("fg2").value+" "+document.getElementById("fs2").value+" "+document.getElementById("fb2").value+"; align-self:"+document.getElementById("align-self-2").value+";");
     })
      document.getElementById("align-self-2").addEventListener('change',function(){
      document.getElementById('flex-2').setAttribute("style","order:"+document.getElementById("order2").value+"; flex:"+document.getElementById("fg2").value+" "+document.getElementById("fs2").value+" "+document.getElementById("fb2").value+"; align-self:"+document.getElementById("align-self-2").value+";");
     })
      document.getElementById("order3").addEventListener('change',function(){
      document.getElementById('flex-3').setAttribute("style","order:"+document.getElementById("order3").value+"; flex:"+document.getElementById("fg3").value+" "+document.getElementById("fs3").value+" "+document.getElementById("fb3").value+"; align-self:"+document.getElementById("align-self-3").value+";");
     })
      document.getElementById("fg3").addEventListener('change',function(){
      document.getElementById('flex-3').setAttribute("style","order:"+document.getElementById("order3").value+"; flex:"+document.getElementById("fg3").value+" "+document.getElementById("fs3").value+" "+document.getElementById("fb3").value+"; align-self:"+document.getElementById("align-self-3").value+";");
     })
      document.getElementById("fs3").addEventListener('change',function(){
      document.getElementById('flex-3').setAttribute("style","order:"+document.getElementById("order3").value+"; flex:"+document.getElementById("fg3").value+" "+document.getElementById("fs3").value+" "+document.getElementById("fb3").value+"; align-self:"+document.getElementById("align-self-3").value+";");
     })
      document.getElementById("fb3").addEventListener('change',function(){
      document.getElementById('flex-3').setAttribute("style","order:"+document.getElementById("order3").value+"; flex:"+document.getElementById("fg3").value+" "+document.getElementById("fs3").value+" "+document.getElementById("fb3").value+"; align-self:"+document.getElementById("align-self-3").value+";");
     })
      document.getElementById("align-self-3").addEventListener('change',function(){
      document.getElementById('flex-3').setAttribute("style","order:"+document.getElementById("order3").value+"; flex:"+document.getElementById("fg3").value+" "+document.getElementById("fs3").value+" "+document.getElementById("fb3").value+"; align-self:"+document.getElementById("align-self-3").value+";");
     })
    }
  });
}

function showhide(argument) {
	var hideElements=document.getElementsByClassName("hide");
		for (var i = 0; i < hideElements.length; i++) {
			hideElements[i].style.display="none";
		}
}