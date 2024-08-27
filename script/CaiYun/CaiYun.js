// 创建一个空对象caiyun，用于存储修改后的响应数据
var caiyun = {},
    url = $request.url;

// 如果请求的URL包含"/v2/user"，则处理用户信息
if (url.includes("/v2/user")) {
    // 将响应体解析为JSON对象
    let obj = JSON.parse($response.body);
    // 设置用户为VIP
    obj.result.is_vip = !0;
    // 设置VIP过期时间为未来的某个时间点
    obj.result.svip_expired_at = 4092599349;
    // 设置VIP类型为"s"
    obj.result.vip_type = "s";
    // 将修改后的JSON对象转换回字符串，并存储在caiyun.body中
    caiyun.body = JSON.stringify(obj);
}

// 如果请求的URL匹配正则表达式"/v1/(satellite|nafp/origin_images)"，则处理请求头
if (/v1\/(satellite|nafp\/origin_images)/g.test(url)) {
    // 复制请求头
    caiyun.headers = $request.headers;
    // 设置device-token
    caiyun.headers['device-token'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXNzaW9uIjoiNjYyNzQxMzVkYWM3MGMwMDE4YzFlNDBmIiwidXNlcl9pZCI6IjVmNWJmYzU3ZDJjNjg5MDAxNGUyNmJiOCIsInZlcnNpb24iOjIsImV4cCI6MTcyMTYyNDYyOSwidmlwX2V4cGlyZWRfYXQiOjAsImlzcyI6IndlYXRoZXIiLCJpYXQiOjE3MTM4NDg2MjksInN2aXBfZXhwaXJlZF9hdCI6MTg1NjY4NTAzMSwicHJpbWFyeSI6dHJ1ZX0.bBT3vbfATa-LF1G34j4VjPTYtwcKHfG3oHIkFlmg1dY';
    // 设置user-id
    caiyun.headers['user-id'] = '5f5bfc57d2c6890014e26bb8';
}

// 如果请求的URL包含'v1/activity'，则处理响应体
if (url.includes('v1/activity')) {
    // 获取响应体
    let body = $response.body;
    // 修改响应体为特定的JSON字符串
    body = '{"status":"ok","activities":[{"items":[{}]}]}';
    // 将修改后的响应体存储在caiyun.body中
    caiyun.body = body;
}

// 完成并返回修改后的响应
$done(caiyun);
