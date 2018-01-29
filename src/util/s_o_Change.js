//本方法用于字符串与对象之间的转换
//注意字符串转对象必须遵循对象标准格式
export function s_o_Change(content){
	let type = typeof content;
	if(type != 'string' || type != 'object'){
		return;
	};
	if(type == 'object'){
		if(content == null){
			return;
		}else{
			//content由对象转成字符串
			return JSON.stringify(content);
		}
	}
	if(type == 'string'){
		//content由字符串转成对象
		return JSON.parse(content);
	}
}
