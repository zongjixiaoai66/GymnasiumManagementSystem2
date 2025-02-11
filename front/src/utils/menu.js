const menu = {
    list() {
        return [
    {
        "backMenu":[
            
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"场地类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryChangdi"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"赛事类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionarySaishi"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"商品类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryShangpin"
                    }
                ],
                "menu":"基础数据管理"
            },{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"场地管理",
                        "menuJump":"列表",
                        "tableName":"changdi"
                    }
                    ,
                    {
                        "buttons":[
                            "订单",
                            "查看",
                            "删除"
                        ],
                        "menu":"场地预约管理",
                        "menuJump":"列表",
                        "tableName":"changdiOrder"
                    }
                ],
                "menu":"场地管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"赛事管理",
                        "menuJump":"列表",
                        "tableName":"saishi"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "修改",
                            "删除"
                        ],
                        "menu":"赛事评价管理",
                        "menuJump":"列表",
                        "tableName":"saishiCommentback"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"赛事收藏管理",
                        "menuJump":"列表",
                        "tableName":"saishiCollection"
                    }
                    ,
                    {
                        "buttons":[
                            "订单",
                            "查看",
                            "删除"
                        ],
                        "menu":"赛事订单管理",
                        "menuJump":"列表",
                        "tableName":"saishiOrder"
                    }
                ],
                "menu":"赛事管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"商品管理",
                        "menuJump":"列表",
                        "tableName":"shangpin"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "修改",
                            "删除"
                        ],
                        "menu":"商品评价管理",
                        "menuJump":"列表",
                        "tableName":"shangpinCommentback"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"商品收藏管理",
                        "menuJump":"列表",
                        "tableName":"shangpinCollection"
                    }
                    ,
                    {
                        "buttons":[
                            "订单",
                            "查看",
                            "删除"
                        ],
                        "menu":"商品订单管理",
                        "menuJump":"列表",
                        "tableName":"shangpinOrder"
                    }
                ],
                "menu":"商品管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"用户管理",
                        "menuJump":"列表",
                        "tableName":"yonghu"
                    }
                ],
                "menu":"用户管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"轮播图管理",
                        "menuJump":"列表",
                        "tableName":"config"
                    }
                ],
                "menu":"轮播图信息"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    }
	,
	{
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"场地管理",
                        "menuJump":"列表",
                        "tableName":"changdi"
                    }
                    ,
                    {
                        "buttons":[
                            "订单",
                            "查看"
                        ],
                        "menu":"场地预约管理",
                        "menuJump":"列表",
                        "tableName":"changdiOrder"
                    }
                ],
                "menu":"场地管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"赛事管理",
                        "menuJump":"列表",
                        "tableName":"saishi"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"赛事评价管理",
                        "menuJump":"列表",
                        "tableName":"saishiCommentback"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"赛事收藏管理",
                        "menuJump":"列表",
                        "tableName":"saishiCollection"
                    }
                    ,
                    {
                        "buttons":[
                            "订单",
                            "查看"
                        ],
                        "menu":"赛事订单管理",
                        "menuJump":"列表",
                        "tableName":"saishiOrder"
                    }
                ],
                "menu":"赛事管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"商品管理",
                        "menuJump":"列表",
                        "tableName":"shangpin"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"商品评价管理",
                        "menuJump":"列表",
                        "tableName":"shangpinCommentback"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"商品收藏管理",
                        "menuJump":"列表",
                        "tableName":"shangpinCollection"
                    }
                    ,
                    {
                        "buttons":[
                            "订单",
                            "查看"
                        ],
                        "menu":"商品订单管理",
                        "menuJump":"列表",
                        "tableName":"shangpinOrder"
                    }
                ],
                "menu":"商品管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"轮播图管理",
                        "menuJump":"列表",
                        "tableName":"config"
                    }
                ],
                "menu":"轮播图信息"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"用户",
        "tableName":"yonghu"
    }
]
    }
}
export default menu;
