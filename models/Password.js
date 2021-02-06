const fs=require('fs');
const path=require('path');
const rootDir=require('../util/path');
var md5 = require('md5');
const crypto=require("../util/crpyto");

const data_path=path.join(rootDir,'data',"password_data.json");
module.exports=class Password{
    constructor(username,websiteName,password,key){
        this.key=key;
        this.username=username;
        this.websiteName=websiteName;
        this.password=password;
    }

    save(){
        fs.readFile(data_path,(err,data)=>{

            let pass=[];
            if(!err){
                console.log(err)
                pass=JSON.parse(data);
            }
            pass.push(this);
            fs.writeFile(data_path,JSON.stringify(pass),(err)=>{
                console.log(err);
            });
        })
    }

    static fetchAll(key,cb){
        key=md5(key);
        fs.readFile(data_path,(err,data)=>{
            let pass=[];
            if(!err){
                console.log(err)
                pass=JSON.parse(data);
            }
            const finalData=[];
            for(let item of pass){
                console.log(item,key)
                
                if(item.key==key){
                    item.username=crypto.decrypt(item.username,key);
                    item.password=crypto.decrypt(item.password,key);
                    item.websiteName=crypto.decrypt(item.websiteName,key);
                    console.log(item);
                    finalData.push(item);
                }
            }
            // console.log(key,pass);
            cb(finalData);
        })
    }


}