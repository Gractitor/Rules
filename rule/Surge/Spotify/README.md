# Spotify

## 规则统计

各类型规则统计：
| 类型 | 数量(条)  | 
| ---- | ----  |
| DOMAIN | 6  | 
| DOMAIN-KEYWORD | 2  | 
| DOMAIN-SUFFIX | 19  | 
| IP-CIDR | 2  | 
| PROCESS-NAME | 1  | 
| USER-AGENT | 1  | 
| TOTAL | 31  | 


## Surge 

#### 使用说明
- Spotify.list，请使用RULE-SET。
- Spotify_Resolve.list，请使用RULE-SET。

#### 文件区别
- Spotify_Resolve.list与Spotify.list的区别仅在于后者IP-CIDR(6)类型带no-resolve。

#### 配置建议
- Spotify.list 单独使用。
- Spotify_Resolve.list 单独使用。


## 子规则/排除规则


当前分流规则，未包含其他子规则。

## 数据来源

- https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/Spotify.list
- https://raw.githubusercontent.com/GeQ1an/Rules/master/QuantumultX/Filter/Optional/Spotify.list
- https://raw.githubusercontent.com/LM-Firefly/Rules/master/Global-Services/Spotify.list
- https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Providers/Ruleset/Spotify.yaml
