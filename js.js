let logo = document.getElementById("span");
let btn_Header=document.getElementsByClassName("btn_header");
let inforamtion=document.getElementById("inforamtion");
let btn_info=document.getElementById("btn_info");
let servies=document.getElementsByClassName("servies");
let skills=document.getElementsByClassName("skills");
let span=document.getElementById("span");
let title=document.getElementsByClassName("span2");



// Img Tell My
let img_facebook=document.getElementById("tellMy_facebook");
let img_whatsapp=document.getElementById("tellMy_whatsapp");
let img_message=document.getElementById("tellMy_message_");
let img_instagram=document.getElementById("tellMy_instagram");
// Colors
const color1="#edba67";
const color2="#01eeff";
const color3="#5813ee";

// Value Const
title[0].style.color=color1;
title[1].style.color=color2;
if(screen.width>1279){
    // Logo
    // Servies
    servies[0].style.top="300px";
    servies[1].style.top="450px";
    servies[2].style.top="550px";
    servies[3].style.top="650px";
    
    // Skills Hidn
    skills[2].style.opacity="0";
    skills[7].style.opacity="0";

    // Skills Left
    skills[0].style.right="370px";
    skills[1].style.right="570px";
    skills[5].style.right="370px";
    skills[6].style.right="570px";
    // Skills Right
    skills[3].style.right="-570px";
    skills[4].style.right="-570px";
    skills[8].style.right="-570px";
    skills[9].style.right="-570px";

}
else if(screen.width<1277 && screen.width>560){
    servies[0].style.top="300px";
    servies[1].style.top="450px";
    servies[2].style.top="550px";
    servies[3].style.top="850px";
    HidnSkills("0");
}else{
    servies[0].style.opacity="0";
    servies[1].style.opacity="0";
    servies[2].style.opacity="0";
    servies[3].style.opacity="0";
    HidnSkills("0");
}

function HidnSkills(value){
    for(i=0;i<10;i++){
        skills[i].style.opacity=value;
    }
}
function HidnSkillsPhone(value){
    for(i=0;i<4;i++){
        skills[value[i]].style.opacity="1";
        skills[value[i]].style.transition=i*1.5+"s";
    }
}
function HidnSkillsIpad(value){
    for(i=0;i<3;i++){
        skills[value[i]].style.opacity="1";
       
    }
}
function Header(index,color,ArrayIndex){
    logo.style.color=color;

    btn_Header[index].style.color=color;
    btn_Header[index].style.textDecoration="underline";

    for(i=0;i<2;i++){
        btn_Header[ArrayIndex[i]].style.color="#fff";
        btn_Header[ArrayIndex[i]].style.textDecoration="none";
    }
    switch (color){
        case "#edba67":
            img_facebook.src="img/facebook.png";
            img_whatsapp.src="img/whatsapp.png";
            img_message.src="img/message_.png";
            img_instagram.src="img/instagram.png";
            break;
        case "#01eeff":
            img_facebook.src="img/icons8_facebook_32px_1.png";
            img_whatsapp.src="img/icons8_whatsapp_32px_3.png";
            img_message.src="img/icons8_message_32px_1.png";
            img_instagram.src="img/instagram2.png";
            break;
        case "#5813ee":
            img_facebook.src="img/facebookred.png";
            img_whatsapp.src="img/whatsappred.png";
            img_message.src="img/message_red.png";
            img_instagram.src="img/instagramred.png";
            break;
    }
}

onscroll=function(){
    let value=this.scrollY;
    if(screen.width>1279){
        // Servies Move up
        if(value>350)servies[0].style.top="0px";title[0].style.color=color2;

        if(value>360)servies[1].style.top="0px";
        if(value>370)servies[2].style.top="0px";
        if(value>380)servies[3].style.top="0px";
        // Servies Move up
        if(value>1135-150)servies[0].style.top="-300px";
        if(value>1135-100)servies[1].style.top="-450px";
        if(value>1135-50)servies[2].style.top="-550px";
        if(value>1135)servies[3].style.top="-650px";
        // Servies Move up
        if(value==0)servies[0].style.top="300px";
        if(value==0)servies[1].style.top="450px";
        if(value==0)servies[2].style.top="550px";
        if(value==0)servies[3].style.top="650px";
        // Logo 
        if(value>=0 && value<499)Header(0,color1,[1,2]);
        if(value>500 && value<1100)Header(1,color2,[0,2]);
        if(value>1101)Header(2,color3,[0,1]);  
        // Skills
     
        if(value>920){
            title[1].style.color=color3;
            skills[2].style.opacity="1";
            skills[0].style.right="0";
            skills[1].style.right="0";
            skills[3].style.right="0";
            skills[4].style.right="0";
        }  

           
        if(value>950){
            skills[7].style.opacity="1";
            skills[5].style.right="0";
            skills[6].style.right="0";
            skills[8].style.right="0";
            skills[9].style.right="0";
        }
        if(value<960){
            skills[2].style.opacity="0";
            skills[7].style.opacity="0";

            skills[0].style.right="370px";
            skills[1].style.right="570px";
            skills[5].style.right="370px";
            skills[6].style.right="570px";
            // Skills Right
            skills[3].style.right="-570px";
            skills[4].style.right="-570px";
            skills[8].style.right="-570px";
            skills[9].style.right="-570px";

        }      
    }
    else if(screen.width<1277 && screen.width>560){
        if(value>330){
            span.style.color=color2;
            title[0].style.color=color2;
            servies[0].style.top="0";
            servies[1].style.top="0";
        } if(value>1100){
            servies[2].style.top="0";
            servies[3].style.top="0";
        }
        if(value<330){
            span.style.color=color1;
            servies[0].style.top="300px";
            servies[1].style.top="450px";
            servies[2].style.top="550px";
            servies[3].style.top="850px";
        }
        if(value>1880){
            span.style.color=color3;
            HidnSkillsIpad([0,1,2]);title[1].style.color=color3;

        }
        if(value>2170){
            HidnSkillsIpad([3,4,5]);
        }
        if(value>2400){
            HidnSkillsIpad([6,7,8]);
            skills[9].style.opacity=value;
        }
        if(value<1880){
            HidnSkills("0");
        }
    }
    else if(this.screen.width<559){
        if(value>450){
            servies[0].style.opacity="1";
            title[0].style.color=color2;

        }
        if(value>1000){
            servies[1].style.opacity="1";
        }
        if(value>1500){
            servies[2].style.opacity="1";
        }
        if(value>2000){
            servies[3].style.opacity="1";
        }
        if(value<500){
            servies[0].style.opacity="0";
            servies[1].style.opacity="0";
            servies[2].style.opacity="0";
            servies[3].style.opacity="0";
        
        }
        if(value<3000){
            
        }
        if(value>3050){
            HidnSkillsPhone([0,1,2,3]);title[1].style.color=color3;
        }
        if(value>3500){
            HidnSkillsPhone([4,5,6,7]);
        }
        if(value>3800){
             HidnSkillsPhone([8,9,0,0]);
        }
                // Logo 
                if(value>=0 && value<450)Header(0,color1,[1,2]);
                if(value>451 && value<2001)Header(1,color2,[0,2]);
                if(value>3000)Header(2,color3,[0,1]);  
    }
}
isHiden=false;

function HidnInfo(){
    if(isHiden==true){inforamtion.style.display="none";isHiden=false;}
    else {inforamtion.style.display="block";isHiden=true;}
    
}