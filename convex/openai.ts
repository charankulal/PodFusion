import { v } from "convex/values";
import { action } from "./_generated/server";

export const generateAudioAction=action({
    args:{input:v.string(),voice:v.string()},
    handler:(_,args)=>{
        

    
    return "success"
},
})