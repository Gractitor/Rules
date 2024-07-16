# Copilot

## 规则统计

各类型规则统计：
| 类型 | 数量(条)  | 
| ---- | ----  |
| DOMAIN | 20  | 
| DOMAIN-KEYWORD | 1  | 
| DOMAIN-SUFFIX | 26  | 
| IP-ASN | 2  | 
| IP-CIDR | 2  | 
| TOTAL | 51  | 


## Surge 

#### 使用说明
- Copilot.list，请使用RULE-SET。
- Copilot_Resolve.list，请使用RULE-SET。

#### 文件区别
- Copilot_Resolve.list与Copilot.list的区别仅在于后者IP-CIDR(6)类型带no-resolve。

#### 配置建议
- Copilot.list 单独使用。
- Copilot_Resolve.list 单独使用。


## 子规则/排除规则


当前分流规则，未包含其他子规则。

## 数据来源

- https://gitlab.com/lodepuly/vpn_tool/-/raw/master/Tool/Loon/Rule/OpenAI.list
