#可可英语 pro []
var body = $response.body;
var url = $request.url;
const path1 = "/keke/mobile/index.php";
if (url.indexOf(path1) != -1) {
	let obj = JSON.parse(body);
	obj.Data.is_vip = "1";
        obj.Data.end_time = "1666857999";
	body = JSON.stringify(obj);
 }
$done({body});


//^https://mob2015.kekenet.com/keke/mobile/index.php url script-response-body 
//hostname=mob2015.kekenet.com,