export function log(msg,color,font){
    let config="";
        color?config+="color:"+color+';':config
        font?config+="font-size:"+font+"px;":config

    console.log("%c"+msg, config)

}
