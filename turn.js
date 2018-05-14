window.onload=function(){
    var div=document.getElementsByClassName("one")[0];
    console.log(div);
    setCss3(div,{transform:"rotate(10deg)","transform-origin":"50% 50%"})
    var angel=0;
    setInterval(function(){
        angel+=8;
        setCss3(div,{transform:"rotate("+angel+"deg)","transform-origin":"0 0"})
    },30)
    function setCss3(obj,objAttr){
        //循环属性对象
        for(var i in objAttr){
            var newi=i;
            //判断是否存在transform-origin这样格式的属性
            if(newi.indexOf("-")>0){
                var num=newi.indexOf("-");
                newi=newi.replace(newi.substr(num,2),newi.substr(num+1,1).toUpperCase());
            }
            //考虑到css3的兼容性问题,所以这些属性都必须加前缀才行
            obj.style[newi]=objAttr[i];
            newi=newi.replace(newi.charAt(0),newi.charAt(0).toUpperCase());
            obj.style[newi]=objAttr[i];
            obj.style["webkit"+newi]=objAttr[i];
            obj.style["moz"+newi]=objAttr[i];
            obj.style["o"+newi]=objAttr[i];
            obj.style["ms"+newi]=objAttr[i];
        }
    }
}
