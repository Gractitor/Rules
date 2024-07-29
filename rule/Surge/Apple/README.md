# Apple

## 规则统计

各类型规则统计：
| 类型 | 数量(条)  | 
| ---- | ----  |
| DOMAIN | 10  | 
| DOMAIN-KEYWORD | 7  | 
| DOMAIN-SUFFIX | 1549  | 
| IP-CIDR | 10  | 
| PROCESS-NAME | 13  | 
| USER-AGENT | 23  | 
| TOTAL | 1612  | 


## Surge 

#### 使用说明
- Apple.list，请使用RULE-SET。
- Apple_Resolve.list，请使用RULE-SET。
- Apple_Domain.list，请使用DOMAIN-SET。

#### 文件区别
- Apple_All.list与Apple_All_Resolve.list为 Surge 5.21.0(2952) 以上版本使用
- Apple_Resolve.list与Apple.list的区别仅在于后者IP-CIDR(6)类型带no-resolve。
- Apple_All_Resolve.list与Apple_All.list的区别仅在于后者IP-CIDR(6)类型带no-resolve。

#### 配置建议
- Surge 5.21.0(2952)以上版本使用以下配置：
- Apple_All.list 单独使用。
- Apple_All_Resolve.list 单独使用。
- Surge 5.21.0(2952)以下版本使用以下配置：
- Apple.list、Apple_Domain.list 共同使用。
- Apple_Resolve.list、Apple_Domain.list 共同使用。


## 子规则/排除规则

当前分流规则，已包含以下子规则，除非特殊需求否则不建议重复引用：
| 子规则  |  |  |  |  | 
| ---- | ---- | ---- | ---- | ----  |
| AppStore | AppleFirmware | AppleHardware | AppleMail | AppleMedia  | 
| AppleMusic | AppleNews | AppleProxy | AppleTV | FindMy  | 
| FitnessPlus | Siri | TestFlight | iCloud | iCloudPrivateRelay  | 


## 数据来源

- https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/source/rule/AppStore/AppStore.list
- https://raw.githubusercontent.com/Loyalsoldier/surge-rules/release/ruleset/icloud.txt
- https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/source/rule/TestFlight/TestFlight.list
- https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/AppleNews.list
- https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/AppleTV.list
- https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/Apple.list
- https://raw.githubusercontent.com/Loyalsoldier/surge-rules/release/ruleset/apple.txt
- https://raw.githubusercontent.com/GeQ1an/Rules/master/QuantumultX/Filter/Apple.list
- https://raw.githubusercontent.com/sve1r/Rules-For-Quantumult-X/develop/Rules/Services/Apple.list
- https://raw.githubusercontent.com/Hackl0us/SS-Rule-Snippet/master/Rulesets/Surge/Basic/Apple-proxy.list
- https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/source/rule/AppleBlock/AppleBlock.list
- https://raw.githubusercontent.com/Loyalsoldier/clash-rules/release/apple.txt
- https://raw.githubusercontent.com/Loyalsoldier/clash-rules/release/icloud.txt
- https://raw.githubusercontent.com/dler-io/Rules/main/Clash/Provider/Apple.yaml
- https://raw.githubusercontent.com/LM-Firefly/Rules/master/Apple/AppleFirmware.list
- https://raw.githubusercontent.com/LM-Firefly/Rules/master/Apple/AppleHardware.list
- https://raw.githubusercontent.com/LM-Firefly/Rules/master/Apple/AppleMedia.list
- https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Providers/Ruleset/Apple.yaml
- https://raw.githubusercontent.com/zqzess/rule_for_quantumultX/master/QuantumultX/rules/Apple.list
- https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Providers/Ruleset/AppleNews.yaml
- https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Providers/Ruleset/AppleTV.yaml
- https://raw.githubusercontent.com/Elysian-Realme/FuGfConfig/main/ConfigFile/QuantumultX/Apple/AppleAPIRules.conf
- https://raw.githubusercontent.com/Elysian-Realme/FuGfConfig/main/ConfigFile/QuantumultX/Apple/AppleNoChinaCDNRules.conf
- https://raw.githubusercontent.com/Elysian-Realme/FuGfConfig/main/ConfigFile/QuantumultX/Apple/AppleCDNRules.conf
- https://raw.githubusercontent.com/Elysian-Realme/FuGfConfig/main/ConfigFile/QuantumultX/Apple/AppleRules.conf
