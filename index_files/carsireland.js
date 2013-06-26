$(document).ready(function(){
  //Define default text for each text field
  $(".input-text").each (
    function() {
      this.rel=this.value;
    }
  );

  $(".input-text").focus(function() {
    if (this.value==this.rel) {
      this.value='';
    }
  });

  $(".input-text").blur(function() {
    if (this.value=='') {
      this.value=this.rel;
    }
  });

});


function e(s){s.options.length=0};function gv(f){v=null;if(f.options){if(f.selectedIndex>-1)value=f.options[f.selectedIndex].value}else{if(f.length){for(var b=0;b<f.length;b++)if(f[b].checked)value=f[b].value}else if(f.checked)value=f.value}return value}
function gu(v){v=v.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");var regexS="[\\?&]"+v+"=([^&#]*)";var regex=new RegExp(regexS);var results=regex.exec(window.location.href);if(results==null)return "";else return results[1]}

// JavaScript Document