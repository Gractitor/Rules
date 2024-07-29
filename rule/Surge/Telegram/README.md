# Telegram

## 规则统计

各类型规则统计：
| 类型 | 数量(条)  | 
| ---- | ----  |
| DOMAIN | 2  | 
| DOMAIN-KEYWORD | 1  | 
| DOMAIN-SUFFIX | 22  | 
| IP-ASN | 5  | 
| IP-CIDR | 4  | 
| IP-CIDR6 | 4  | 
| OR | 1  | 
| PROCESS-NAME | 3  | 
| TOTAL | 42  | 


## Surge 

#### 使用说明
- Telegram.list，请使用RULE-SET。
- Telegram_Resolve.list，请使用RULE-SET。

#### 文件区别
- Telegram_Resolve.list与Telegram.list的区别仅在于后者IP-CIDR(6)类型带no-resolve。

#### 配置建议
- Telegram.list 单独使用。
- Telegram_Resolve.list 单独使用。


## 子规则/排除规则

当前分流规则，已包含以下子规则，除非特殊需求否则不建议重复引用：
| 子规则  |  |  | 
| ---- | ---- | ----  |
| TelegramNL | TelegramSG | TelegramUS  | 


## 数据来源

- https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/Telegram.list
- https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Telegram.list
- https://raw.githubusercontent.com/Hackl0us/SS-Rule-Snippet/master/Rulesets/Surge/App/social/Telegram.list
- https://raw.githubusercontent.com/Loyalsoldier/surge-rules/release/ruleset/telegramcidr.txt
- https://raw.githubusercontent.com/GeQ1an/Rules/master/QuantumultX/Filter/Optional/Telegram.list
- https://raw.githubusercontent.com/sve1r/Rules-For-Quantumult-X/develop/Rules/Services/SNS/Telegram.list
- https://raw.githubusercontent.com/LM-Firefly/Rules/master/PROXY/Telegram.list
- https://raw.githubusercontent.com/Loyalsoldier/clash-rules/release/telegramcidr.txt
- https://core.telegram.org/resources/cidr.txt
- https://raw.githubusercontent.com/dler-io/Rules/main/Clash/Provider/Telegram.yaml
- https://raw.githubusercontent.com/LM-Firefly/Rules/master/Clash-RuleSet-Classical/PROXY/Telegram.yaml
- https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Providers/Ruleset/Telegram.yaml
