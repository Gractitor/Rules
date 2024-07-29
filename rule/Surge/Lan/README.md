# 本地局域网地址

## 规则统计

各类型规则统计：
| 类型 | 数量(条)  | 
| ---- | ----  |
| DOMAIN | 7  | 
| DOMAIN-SUFFIX | 127  | 
| IP-CIDR | 14  | 
| IP-CIDR6 | 4  | 
| TOTAL | 152  | 


## Surge 

#### 使用说明
- Lan.list，请使用RULE-SET。
- Lan_Resolve.list，请使用RULE-SET。

#### 文件区别
- Lan_Resolve.list与Lan.list的区别仅在于后者IP-CIDR(6)类型带no-resolve。

#### 配置建议
- Lan.list 单独使用。
- Lan_Resolve.list 单独使用。


## 子规则/排除规则


当前分流规则，未包含其他子规则。

## 数据来源

- https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/LocalAreaNetwork.list
- https://raw.githubusercontent.com/GeQ1an/Rules/master/QuantumultX/Filter/LAN.list
- https://raw.githubusercontent.com/Loyalsoldier/clash-rules/release/lancidr.txt
- https://raw.githubusercontent.com/Loyalsoldier/clash-rules/release/private.txt
- https://raw.githubusercontent.com/dler-io/Rules/main/Clash/Provider/LAN.yaml
