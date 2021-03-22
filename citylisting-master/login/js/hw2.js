
document.addEventListener("DOMContentLoaded", function () {
     //事件繫結，焦點離開
    document.getElementById("pwd1").addEventListener("blur",checkPwd);  
   
});

        // document.getElementById("account1").onblur=checkname;
        // document.getElementById("pwd1").onblur=checkPwd;

        


        function checkPwd(){
            let thePwdObjVal=document.getElementById("pwd1").value;
            //判斷元素值是否為空白，密碼長度是否大於6
            //如果長度是否大於6，判斷是否包含字母、數字、特殊符號
            let sp2=document.getElementById("idsp2");
            let thePwdObjValLen=thePwdObjVal.length;
            let flag1=false;
            re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[#^@$!%*?&])[A-Za-z\d#^@$!%*?&]{6,}$/;
            if(thePwdObjVal==""){
                sp2.innerHTML="<i class="+'"fas fa-times-circle"'+"style="+"color:red"+"></i> <font color=red><em>must enter</em></font>"; 
                pwd1.style.border="2px solid red";
            }
            else if(thePwdObjValLen>=6){
                if (re.test(thePwdObjVal)){
                    flag1 = true;
                }
                if(flag1){
                    sp2.innerHTML="<i class="+'"fas fa-check-circle"'+"style="+"color:green"+"></i> correct";
                    pwd1.style.border="2px solid green";
                }
                else{
                    sp2.innerHTML="<i class="+'"fas fa-times-circle"'+"style="+"color:red"+"></i> <font color=red><em>incorrect</em></font>";
                    pwd1.style.border="2px solid red";
                }    
            }else{
                sp2.innerHTML="<i class="+'"fas fa-times-circle"'+"style="+"color:red"+"></i> <font color=red><em>密碼長度必須大於6</em></font>";
                
            }     
        }    

        