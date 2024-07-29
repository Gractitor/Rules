# Google

## 规则说明
不含有Youtube分流规则

## 规则统计

各类型规则统计：
| 类型 | 数量(条)  | 
| ---- | ----  |
| DOMAIN | 1  | 
| DOMAIN-KEYWORD | 5  | 
| DOMAIN-SUFFIX | 708  | 
| IP-CIDR | 4  | 
| IP-CIDR6 | 1  | 
| PROCESS-NAME | 5  | 
| USER-AGENT | 3  | 
| TOTAL | 727  | 


## Surge 

#### 使用说明
- Google.list，请使用RULE-SET。
- Google_Resolve.list，请使用RULE-SET。

#### 文件区别
- Google_Resolve.list与Google.list的区别仅在于后者IP-CIDR(6)类型带no-resolve。

#### 配置建议
- Google.list 单独使用。
- Google_Resolve.list 单独使用。


## 子规则/排除规则

当前分流规则，已包含以下子规则，除非特殊需求否则不建议重复引用：
| 子规则  |  |  | 
| ---- | ---- | ----  |
| GoogleDrive | GoogleSearch | GoogleVoice  | 


当前分流规则，已排除以下规则：
| 排除规则  |  | 
| ---- | ----  |
| YouTube | YouTubeMusic  | 

## 数据来源

- https://raw.githubusercontent.com/Loyalsoldier/surge-rules/release/ruleset/google.txt
- https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/source/rule/Google/Google.list
- https://raw.githubusercontent.com/sve1r/Rules-For-Quantumult-X/develop/Rules/Services/Google.list
- https://raw.githubusercontent.com/LM-Firefly/Rules/master/PROXY/Google.list
- https://raw.githubusercontent.com/Loyalsoldier/clash-rules/release/google.txt
- https://raw.githubusercontent.com/LM-Firefly/Rules/master/Clash-RuleSet-Classical/PROXY/Google.yaml
- https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/Google.list
- https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Providers/Ruleset/Google.yaml

