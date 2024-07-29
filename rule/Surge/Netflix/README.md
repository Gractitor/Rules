# Netflix

## 规则统计

各类型规则统计：
| 类型 | 数量(条)  | 
| ---- | ----  |
| DOMAIN | 3  | 
| DOMAIN-KEYWORD | 4  | 
| DOMAIN-SUFFIX | 30  | 
| IP-CIDR | 1115  | 
| IP-CIDR6 | 4  | 
| PROCESS-NAME | 1  | 
| USER-AGENT | 1  | 
| TOTAL | 1158  | 


## Surge 

#### 使用说明
- Netflix.list，请使用RULE-SET。
- Netflix_Resolve.list，请使用RULE-SET。

#### 文件区别
- Netflix_Resolve.list与Netflix.list的区别仅在于后者IP-CIDR(6)类型带no-resolve。

#### 配置建议
- Netflix.list 单独使用。
- Netflix_Resolve.list 单独使用。


## 子规则/排除规则


当前分流规则，未包含其他子规则。

## 数据来源

- https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/Netflix.list
- https://raw.githubusercontent.com/GeQ1an/Rules/master/QuantumultX/Filter/Optional/Netflix.list
- https://raw.githubusercontent.com/LM-Firefly/Rules/master/Global-Services/Netflix.list
- https://raw.githubusercontent.com/QiuSimons/Netflix_IP/master/getflix.txt
- https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/NetflixIP.list
- https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Providers/Ruleset/Netflix.yaml
- https://raw.githubusercontent.com/zqzess/rule_for_quantumultX/master/QuantumultX/rules/Netflix.list
- https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Providers/Ruleset/NetflixIP.yaml
