# STUN

## 规则统计

各类型规则统计：
| 类型 | 数量(条)  | 
| ---- | ----  |
| DOMAIN | 350  | 
| IP-CIDR6 | 16  | 
| TOTAL | 366  | 


## Surge 

#### 使用说明
- STUN.list，请使用RULE-SET。
- STUN_Resolve.list，请使用RULE-SET。

#### 文件区别
- STUN_Resolve.list与STUN.list的区别仅在于后者IP-CIDR(6)类型带no-resolve。

#### 配置建议
- STUN.list 单独使用。
- STUN_Resolve.list 单独使用。


## 子规则/排除规则


当前分流规则，未包含其他子规则。

## 数据来源

- https://ruleset.isagood.day/stun.conf
