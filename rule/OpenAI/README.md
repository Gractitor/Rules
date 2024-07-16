# OpenAI

## 规则统计

各类型规则统计：
| 类型 | 数量(条)  | 
| ---- | ----  |
| DOMAIN | 8  | 
| DOMAIN-KEYWORD | 1  | 
| DOMAIN-SUFFIX | 24  | 
| IP-ASN | 1  | 
| IP-CIDR | 2  | 
| TOTAL | 36  | 


## Surge 

#### 使用说明
- OpenAI.list，请使用RULE-SET。
- OpenAI_Resolve.list，请使用RULE-SET。

#### 文件区别
- OpenAI_Resolve.list与OpenAI.list的区别仅在于后者IP-CIDR(6)类型带no-resolve。

#### 配置建议
- OpenAI.list 单独使用。
- OpenAI_Resolve.list 单独使用。


## 子规则/排除规则


当前分流规则，未包含其他子规则。

## 数据来源

- https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Providers/Ruleset/OpenAi.yaml
- https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/OpenAi.list
- https://raw.githubusercontent.com/LM-Firefly/Rules/master/PROXY/OpenAi.list
- https://raw.githubusercontent.com/LM-Firefly/Rules/master/Clash-RuleSet-Classical/PROXY/OpenAi.yaml
- https://ruleset.isagood.day/openai.conf
- https://gitlab.com/lodepuly/vpn_tool/-/raw/master/Tool/Loon/Rule/OpenAI.list
