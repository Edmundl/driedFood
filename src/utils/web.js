import axios from 'axios';

export function reqGet(path,params){
	return new Promise((resovle,reject)=>{
		axios.get(path,{
                params: params
            }).then( 
            	resovle(response)
            ).catch( 
            	reject(error)
            );
	})
}


export function reqPost(path,params){
	return new Promise((resovle,reject)=>{		 
        axios({
            method:'POST',
            url:path,
            data:params,
            headers:{
                'Content-type': 'application/x-www-form-urlencoded'
            },
            transformRequest: [function (data) {
                // Do whatever you want to transform the data
                var ret = ''
                for (var it in data) {
                    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                }
                return ret
            }],
            responseType:'json'
        }).then( 
        	resovle(response)
        ).catch(
        	reject(error)
        );
	})
}
