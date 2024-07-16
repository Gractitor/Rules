# Cloudflare

## 规则统计

各类型规则统计：
| 类型 | 数量(条)  | 
| ---- | ----  |
| DOMAIN-SUFFIX | 29  | 
| IP-CIDR | 15  | 
| IP-CIDR6 | 7  | 
| TOTAL | 51  | 


## Surge 

#### 使用说明
- Cloudflare.list，请使用RULE-SET。
- Cloudflare_Resolve.list，请使用RULE-SET。

#### 文件区别
- Cloudflare_Resolve.list与Cloudflare.list的区别仅在于后者IP-CIDR(6)类型带no-resolve。

#### 配置建议
- Cloudflare.list 单独使用。
- Cloudflare_Resolve.list 单独使用。

## 子规则/排除规则


当前分流规则，未包含其他子规则。

## 数据来源

- https://raw.githubusercontent.com/sve1r/Rules-For-Quantumult-X/develop/Rules/Services/Cloudflare.list
- https://raw.githubusercontent.com/LM-Firefly/Rules/master/PROXY/Cloudflare.list
- https://raw.githubusercontent.com/LM-Firefly/Rules/master/Clash-RuleSet-Classical/PROXY/Cloudflare.yaml
